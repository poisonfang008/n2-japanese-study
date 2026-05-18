/* ===== N2 备考助手 — 核心应用逻辑 ===== */

/* ===== 存储层 ===== */
const Storage = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem('n2_'+key);
      return raw ? JSON.parse(raw) : fallback;
    } catch { return fallback; }
  },
  set(key, val) {
    localStorage.setItem('n2_'+key, JSON.stringify(val));
  },

  // 词汇进度
  getVocabProgress() { return this.get('vocab', {}); },
  setVocab(wordId, known) {
    const v = this.getVocabProgress();
    v[wordId] = { known, time: Date.now(), count: (v[wordId]?.count||0)+1 };
    this.set('vocab', v);
  },

  // 答题历史
  getHistory() { return this.get('history', []); },
  addHistory(entry) {
    const h = this.getHistory();
    h.push({ ...entry, date: todayStr(), time: Date.now() });
    this.set('history', h);
  },

  // 错题本
  getErrors() { return this.get('errors', {}); },
  addError(qid, question) {
    const e = this.getErrors();
    e[qid] = { question, added: todayStr(), redone: false, correctCount: (e[qid]?.correctCount||0) };
    this.set('errors', e);
  },
  removeError(qid) {
    const e = this.getErrors();
    delete e[qid];
    this.set('errors', e);
  },
  markErrorRedone(qid, correct) {
    const e = this.getErrors();
    if (e[qid]) {
      e[qid].redone = true;
      if (correct) {
        e[qid].correctCount = (e[qid].correctCount||0)+1;
        if (e[qid].correctCount >= 2) { delete e[qid]; }
      } else {
        e[qid].correctCount = 0;
      }
      this.set('errors', e);
    }
  },

  // 每日记录
  getDailyLog() { return this.get('daily', {}); },
  logTaskDone(date, taskType) {
    const d = this.getDailyLog();
    if (!d[date]) d[date] = { tasks:[], questions:0, correct:0, seconds:0 };
    d[date].tasks.push(taskType);
    this.set('daily', d);
  },
  logQuizResult(date, correct, seconds) {
    const d = this.getDailyLog();
    if (!d[date]) d[date] = { tasks:[], questions:0, correct:0, seconds:0 };
    d[date].questions++;
    if (correct) d[date].correct++;
    d[date].seconds += seconds;
    this.set('daily', d);
  },

  // 设置
  getSettings() { return this.get('settings', {}); },
  setSettings(s) { this.set('settings', { ...this.getSettings(), ...s }); }
};

function todayStr() { return new Date().toISOString().slice(0,10); }

/* ===== 路由 ===== */
const Router = {
  current: 'dashboard',
  subPage: null,

  go(page, sub) {
    stopStopwatch(); // 清理计时器
    this.current = page;
    this.subPage = sub || null;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById('page-'+page);
    if (el) el.classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const nav = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (nav) nav.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.onPageLoad(page);
  },

  onPageLoad(page) {
    switch(page) {
      case 'dashboard': renderDashboard(); break;
      case 'flashcards': initFlashcards(); break;
      case 'quiz': initQuiz(this.subPage||'vocab'); break;
      case 'errors': renderErrors(); break;
      case 'stats': renderStats(); break;
    }
  }
};

/* ===== 辅助 ===== */
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }
function shuffle(arr) { const a = [...arr]; for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]; } return a; }
function countdownDays() {
  const exam = new Date(2026,6,5); // July 5, 2026
  const now = new Date();
  return Math.max(0, Math.ceil((exam-now)/(1000*60*60*24)));
}

/* ===== 初始化 ===== */
document.addEventListener('DOMContentLoaded', () => {
  // 导航点击
  $$('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      Router.go(item.dataset.page, item.dataset.sub);
    });
  });

  // 初始渲染
  renderDashboard();
  updateCountdown();
});

function updateCountdown() {
  const days = countdownDays();
  $('.countdown .days').textContent = days;
}

/* ===== 页面渲染 ===== */

// ---------- 仪表盘 ----------
function renderDashboard() {
  const days = countdownDays();
  const daily = Storage.getDailyLog();
  const today = todayStr();
  const todayData = daily[today] || { tasks:[], questions:0, correct:0, seconds:0 };
  const history = Storage.getHistory();
  const errors = Storage.getErrors();
  const errorCount = Object.keys(errors).length;

  // 今日统计
  const todayCorrect = todayData.correct;
  const todayTotal = todayData.questions;
  const todayRate = todayTotal > 0 ? Math.round(todayCorrect/todayTotal*100) : '--';

  // 今日学习时间
  const todayMin = Math.round(todayData.seconds/60);

  // 今日各分类答题数（用于任务进度）
  const todayHistory = history.filter(h => h.date === today);
  const taskProgress = {
    vocab: todayHistory.filter(h => h.category === 'vocab' || h.category === 'grammar').length,
    listening: todayHistory.filter(h => h.category === 'listening').length,
    reading: todayHistory.filter(h => h.category === 'reading').length,
  };

  // 今日已学单词数
  const vocabProg = Storage.getVocabProgress();
  const todayStart = new Date(today + 'T00:00:00').getTime();
  const wordsStudiedToday = Object.values(vocabProg).filter(v => v.time >= todayStart).length;

  $('#page-dashboard').innerHTML = `
    <div class="hero-card">
      <div class="greeting">${getGreeting()}、距离 N2 考试还有</div>
      <div style="font-size:3rem;font-weight:700;font-family:var(--font-jp)">${days}<span style="font-size:1rem;font-weight:400;opacity:0.8"> 天</span></div>
      <div class="motivation">${getMotivation()}</div>
    </div>

    <div class="progress-overview">
      <div class="progress-item">
        <div class="label">今日正确率</div>
        <div class="value ${todayRate==='--'?'':(todayRate>=70?'good':(todayRate>=50?'warn':'bad'))}">${todayRate==='--'?'--':todayRate+'%'}</div>
      </div>
      <div class="progress-item">
        <div class="label">今日答题数</div>
        <div class="value" style="color:var(--indigo)">${todayTotal}<span style="font-size:0.85rem;font-weight:400"> 题</span></div>
      </div>
      <div class="progress-item">
        <div class="label">今日学习</div>
        <div class="value" style="color:var(--indigo)">${todayMin}<span style="font-size:0.85rem;font-weight:400"> 分钟</span></div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><span class="icon">📋</span> 今日任务</div>
      <div class="today-tasks">
        ${StudyPlanTemplate.defaultDailyTasks.map((t,i) => {
          const taskId = t.type + '-' + i;
          const isDone = todayData.tasks.includes(taskId);
          let badgeHtml = '';
          if (t.type === 'quiz' || t.type === 'flashcard') {
            const completed = t.type === 'flashcard' ? wordsStudiedToday : (taskProgress[t.category === 'grammar' ? 'vocab' : t.category] || 0);
            const remaining = Math.max(0, t.target - completed);
            const autoDone = remaining === 0 && !isDone;
            if (autoDone) {
              Storage.logTaskDone(today, taskId);
            }
            const done = isDone || autoDone;
            badgeHtml = done
              ? '<span class="task-badge done-badge">已完成</span>'
              : `<span class="task-badge ${t.category}">剩余 ${remaining} ${t.unit}</span>`;
            return `
              <div class="task-item">
                <div class="task-check ${done?'done':''}" data-task="${taskId}" onclick="toggleTask('${taskId}', this)">
                  ${done?'✓':''}
                </div>
                <span class="task-label ${done?'done':''}">${t.label}</span>
                ${badgeHtml}
              </div>`;
          }
          // review tasks
          return `
            <div class="task-item">
              <div class="task-check ${isDone?'done':''}" data-task="${taskId}" onclick="toggleTask('${taskId}', this)">
                ${isDone?'✓':''}
              </div>
              <span class="task-label ${isDone?'done':''}">${t.label}</span>
              <span class="task-badge ${t.category}">${t.target?t.target+t.unit:t.minutes+'分钟'}</span>
            </div>`;
        }).join('')}
      </div>
    </div>

    <div class="card">
      <div class="card-header"><span class="icon">⚡</span> 快捷入口</div>
      <div class="quick-entry">
        <div class="entry-item" data-page="flashcards">
          <span class="entry-icon">📝</span><span class="entry-label">词汇闪卡</span>
        </div>
        <div class="entry-item" data-page="quiz" onclick="Router.go('quiz','vocab')">
          <span class="entry-icon">📖</span><span class="entry-label">言語知識</span>
        </div>
        <div class="entry-item" data-page="quiz" onclick="Router.go('quiz','reading')">
          <span class="entry-icon">📰</span><span class="entry-label">読解練習</span>
        </div>
        <div class="entry-item" data-page="quiz" onclick="Router.go('quiz','listening')">
          <span class="entry-icon">🎧</span><span class="entry-label">聴解練習</span>
        </div>
        <div class="entry-item" data-page="errors">
          <span class="entry-icon">📌</span><span class="entry-label">错题本${errorCount>0?' ('+errorCount+')':''}</span>
        </div>
        <div class="entry-item" data-page="stats">
          <span class="entry-icon">📊</span><span class="entry-label">学习统计</span>
        </div>
      </div>
    </div>

    <div id="dashboard-error-info"></div>
  `;

  // 重新绑定快捷入口事件
  $$('#page-dashboard .entry-item').forEach(item => {
    item.addEventListener('click', function() {
      const page = this.dataset.page;
      if (this.getAttribute('onclick')) return; // 已有点击处理
      if (page === 'quiz') {
        Router.go('quiz', this.textContent.includes('言語')?'vocab':(this.textContent.includes('読解')?'reading':'listening'));
      } else {
        Router.go(page);
      }
    });
  });
}

function toggleTask(taskId, el) {
  const today = todayStr();
  const type = taskId.split('-')[0];
  if (el.classList.contains('done')) {
    el.classList.remove('done');
    el.textContent = '';
    // Remove from log
    const d = Storage.getDailyLog();
    if (d[today]) {
      d[today].tasks = d[today].tasks.filter(t => t !== taskId);
      Storage.set('daily', d);
    }
  } else {
    el.classList.add('done');
    el.textContent = '✓';
    Storage.logTaskDone(today, taskId);
    el.nextElementSibling?.classList.add('done');
  }
  // 更新 label
  const label = el.nextElementSibling;
  if (label && label.classList.contains('task-label')) {
    label.classList.toggle('done', el.classList.contains('done'));
  }
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 6) return '夜深了';
  if (h < 9) return 'おはよう';
  if (h < 12) return '上午好';
  if (h < 14) return 'こんにちは';
  if (h < 18) return '下午好';
  if (h < 21) return 'こんばんは';
  return '晚上好';
}

function getMotivation() {
  return Motivations[Math.floor(Math.random()*Motivations.length)];
}

// ---------- 词汇闪卡 ----------
let flashcardState = { words:[], index:0, known:0, unknown:0 };

function initFlashcards() {
  const prog = Storage.getVocabProgress();
  // 优先显示不认识或没见过的词
  const unknown = N2Vocabulary.filter(w => !prog[w.id] || !prog[w.id].known);
  const known = N2Vocabulary.filter(w => prog[w.id] && prog[w.id].known);
  flashcardState.words = shuffle([...unknown, ...shuffle(known)]);
  flashcardState.index = 0;
  flashcardState.known = 0;
  flashcardState.unknown = 0;
  renderFlashcard();
}

function renderFlashcard() {
  const s = flashcardState;
  if (s.index >= s.words.length) {
    $('#page-flashcards').innerHTML = `
      <div class="card" style="text-align:center;padding:48px 20px">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-size:1.2rem;font-weight:600;margin-bottom:8px">本轮复习完成！</div>
        <div style="color:var(--ink-light);margin-bottom:20px">认识 ${s.known} 个 · 不认识 ${s.unknown} 个</div>
        <button class="btn btn-primary" onclick="initFlashcards();renderFlashcard();">再来一轮</button>
      </div>`;
    return;
  }
  const w = s.words[s.index];
  const total = s.words.length;

  $('#page-flashcards').innerHTML = `
    <div class="flashcard-progress" style="margin-bottom:12px">${s.index+1} / ${total}</div>
    <div class="flashcard-container">
      <div class="flashcard" id="flashcard-el" onclick="flipCard()">
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <div class="word">${w.word}</div>
            <div class="reading-row">
              <span class="reading">${w.reading}</span>
              <button class="btn-audio" onclick="event.stopPropagation();playWordAudio('${w.word.replace(/'/g,"\\'")}', '${w.reading.replace(/'/g,"\\'")}')" title="听发音">🔊</button>
            </div>
            <span class="pos-tag">${w.pos}</span>
            <div class="hint">点击翻转看释义</div>
          </div>
          <div class="flashcard-back">
            <div class="meaning">${w.meaning}</div>
            <div class="example">${w.example}</div>
            <div class="example-meaning">${w.exampleMeaning}</div>
          </div>
        </div>
      </div>
      <div class="flashcard-actions" id="flashcard-actions" style="display:none">
        <button class="btn btn-danger" onclick="markWord(false)">不认识</button>
        <button class="btn btn-primary" onclick="markWord(true)">认识</button>
      </div>
    </div>`;

  // Reset flip state
  const card = $('#flashcard-el');
  if (card) card.classList.remove('flipped');
  const actions = $('#flashcard-actions');
  if (actions) actions.style.display = 'none';
}

function flipCard() {
  const card = $('#flashcard-el');
  if (!card) return;
  card.classList.toggle('flipped');
  const actions = $('#flashcard-actions');
  if (actions) {
    actions.style.display = card.classList.contains('flipped') ? 'flex' : 'none';
  }
}

function markWord(known) {
  const s = flashcardState;
  const w = s.words[s.index];
  Storage.setVocab(w.id, known);
  if (known) s.known++;
  else s.unknown++;
  s.index++;
  renderFlashcard();
}

// ---------- 练习题 ----------
let quizState = {
  category: 'vocab',
  questions: [],
  currentIndex: 0,
  selectedAnswer: -1,
  answered: false,
  stopwatchSec: 0,
  stopwatchTimer: null,
  questionStartTime: 0,
  sessionStart: 0,
};

function initQuiz(category) {
  quizState.category = category;
  quizState.currentIndex = 0;
  quizState.selectedAnswer = -1;
  quizState.answered = false;
  quizState.stopwatchSec = 0;
  quizState.sessionStart = Date.now();

  // Build question pool
  let pool = [];
  if (category === 'vocab') {
    pool = [...QuizQuestions.vocab, ...QuizQuestions.grammar];
  } else if (category === 'reading') {
    pool = [...QuizQuestions.reading];
  } else if (category === 'listening') {
    pool = [...QuizQuestions.listening];
  }

  // Filter out already-answered questions
  const history = Storage.getHistory();
  const answeredIds = new Set(history.map(h => h.qid));
  const unanswered = pool.filter(q => !answeredIds.has(q.id));
  // If all questions have been answered, start a new cycle
  pool = unanswered.length > 0 ? unanswered : pool;

  quizState.questions = shuffle(pool);

  // 渲染分类标签
  renderCategoryTabs(category);

  // 启动秒表（仅读解）
  if (category === 'reading') {
    startStopwatch();
  }

  renderQuizQuestion();
}

function renderCategoryTabs(active) {
  const labels = { vocab:'言語知識', reading:'読解', listening:'聴解' };
  const html = Object.entries(labels).map(([k,v]) =>
    `<button class="category-tab ${k===active?'active':''}" onclick="switchQuizCategory('${k}')">${v}</button>`
  ).join('');

  // Check if tabs container exists or create it
  let tabs = $('#quiz-tabs');
  if (!tabs) {
    tabs = document.createElement('div');
    tabs.id = 'quiz-tabs';
    tabs.className = 'category-tabs';
    const page = $('#page-quiz');
    if (page) page.prepend(tabs);
  }
  tabs.innerHTML = html;
}

function switchQuizCategory(cat) {
  stopStopwatch();
  initQuiz(cat);
}

function renderQuizQuestion() {
  const s = quizState;
  if (s.currentIndex >= s.questions.length) {
    finishQuiz();
    return;
  }

  const q = s.questions[s.currentIndex];
  const total = s.questions.length;
  s.selectedAnswer = -1;
  s.answered = false;
  s.questionStartTime = Date.now();

  // 重置秒表（仅读解每道题）
  if (s.category === 'reading') {
    s.stopwatchSec = 0;
    updateStopwatchDisplay();
  }

  const labels = ['A','B','C','D'];
  const passageHtml = q.passage
    ? `<div class="card" style="margin-bottom:16px;background:var(--paper);border-left:3px solid var(--indigo)"><div style="font-family:var(--font-jp);font-size:0.95rem;line-height:1.9;white-space:pre-wrap">${q.passage}</div></div>`
    : '';

  const questionHtml = q.category === 'listening'
    ? `<div class="card" style="margin-bottom:16px;text-align:center">
        <div style="font-size:0.8rem;color:var(--ink-light);margin-bottom:8px">🎧 ${q.scenario}</div>
        <button class="btn btn-primary audio-btn" onclick="playAudio()" id="play-btn">
          <span class="play-icon">▶</span> 再生（播放音频）
        </button>
        <div style="font-size:0.75rem;color:var(--ink-light);margin-top:6px">点击播放听力内容，可多次播放</div>
      </div>`
    : '';

  const questionText = q.category === 'listening'
    ? `<div class="question-text">${q.question}</div>`
    : `<div class="question-text">${q.question}</div>`;

  $('#page-quiz').innerHTML = `
    <div id="quiz-tabs"></div>
    <div class="quiz-header">
      <span class="quiz-progress">第 ${s.currentIndex+1}/${total} 题</span>
      ${s.category === 'reading' ? `<div class="stopwatch" id="stopwatch"><span>⏱</span><span class="sw-time" id="sw-time">00:00</span></div>` : ''}
    </div>
    ${passageHtml}
    ${questionHtml}
    ${questionText}
    <div class="quiz-options">
      ${q.options.map((opt,i) => `
        <div class="quiz-option" data-idx="${i}" onclick="selectAnswer(${i})">
          <span class="option-label">${labels[i]}</span>
          <span>${opt}</span>
        </div>
      `).join('')}
    </div>
    <div class="quiz-submit-area">
      <button class="btn btn-primary btn-lg" id="quiz-submit-btn" disabled onclick="submitAnswer()">提交答案</button>
    </div>
    <div id="quiz-result"></div>
  `;

  renderCategoryTabs(s.category);
}

function selectAnswer(idx) {
  if (quizState.answered) return;
  quizState.selectedAnswer = idx;
  $$('#page-quiz .quiz-option').forEach((el,i) => {
    el.classList.toggle('selected', i === idx);
  });
  $('#quiz-submit-btn').disabled = false;
}

function submitAnswer() {
  if (quizState.answered || quizState.selectedAnswer < 0) return;
  const s = quizState;
  const q = s.questions[s.currentIndex];
  const correct = s.selectedAnswer === q.answer;
  s.answered = true;

  // 计算本题用时
  const elapsed = Math.round((Date.now() - s.questionStartTime)/1000);

  // 记录
  Storage.addHistory({ qid:q.id, category:q.category, correct });
  Storage.logQuizResult(todayStr(), correct, elapsed);
  if (!correct) {
    Storage.addError(q.id, q);
  }

  // 显示结果
  const labels = ['A','B','C','D'];
  $$('#page-quiz .quiz-option').forEach((el,i) => {
    if (i === q.answer) el.classList.add('correct');
    if (i === s.selectedAnswer && !correct) el.classList.add('wrong');
    el.style.pointerEvents = 'none';
  });
  $('#quiz-submit-btn').style.display = 'none';

  const resultDiv = $('#quiz-result');
  if (resultDiv) {
    resultDiv.className = `quiz-result ${correct?'correct':'wrong'}`;
    resultDiv.innerHTML = `
      <strong>${correct ? '✓ 正解！' : '✗ 不正解'}</strong>
      <div style="margin-top:8px">${q.explanation}</div>
    `;
  }

  // 替换提交按钮为下一题
  const submitArea = $('.quiz-submit-area');
  if (submitArea) {
    submitArea.innerHTML = `
      <button class="btn btn-primary btn-lg" onclick="nextQuestion()">
        ${s.currentIndex < s.questions.length-1 ? '下一题 →' : '查看结果'}
      </button>
    `;
  }
}

function nextQuestion() {
  quizState.currentIndex++;
  quizState.selectedAnswer = -1;
  quizState.answered = false;
  if (quizState.currentIndex >= quizState.questions.length) {
    finishQuiz();
  } else {
    renderQuizQuestion();
  }
}

function finishQuiz() {
  stopStopwatch();
  const s = quizState;
  const history = Storage.getHistory();
  const qids = s.questions.map(q => q.id);
  const sessionResults = history.filter(h => qids.includes(h.qid) && h.time >= s.sessionStart);
  const correct = sessionResults.filter(h => h.correct).length;
  const total = s.questions.length;
  const rate = Math.round(correct/total*100);

  const labels = { vocab:'言語知識', reading:'読解', listening:'聴解' };

  $('#page-quiz').innerHTML = `
    <div class="card" style="text-align:center;padding:48px 20px">
      <div style="font-size:3rem;margin-bottom:12px">${rate >= 80 ? '🎉' : (rate >= 60 ? '💪' : '📚')}</div>
      <div style="font-size:1.3rem;font-weight:600;margin-bottom:8px">${labels[s.category]} 练习完成</div>
      <div style="margin-bottom:6px">
        <span style="font-size:2rem;font-weight:700;color:${rate>=70?'var(--green)':(rate>=50?'var(--gold)':'var(--vermilion)')}">${rate}%</span>
      </div>
      <div style="color:var(--ink-light);margin-bottom:8px">${correct}/${total} 题正确</div>
      ${s.category === 'reading' ? `<div style="color:var(--ink-light);margin-bottom:8px">总用时：${formatTime(Math.round((Date.now()-s.sessionStart)/1000))}</div>` : ''}
      <div style="color:var(--ink-light);margin-bottom:20px;font-size:0.85rem">
        错题已自动加入<a href="javascript:void(0)" onclick="Router.go('errors')" style="color:var(--indigo)">错题本</a>
      </div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-outline" onclick="initQuiz('${s.category}')">再来一组</button>
        <button class="btn btn-primary" onclick="Router.go('dashboard')">返回首页</button>
      </div>
    </div>
  `;
}

// ---------- 秒表（読解专用） ----------
function startStopwatch() {
  stopStopwatch();
  quizState.stopwatchSec = 0;
  quizState.stopwatchTimer = setInterval(() => {
    quizState.stopwatchSec++;
    updateStopwatchDisplay();
  }, 1000);
  const el = $('#stopwatch');
  if (el) el.classList.add('running');
}

function stopStopwatch() {
  if (quizState.stopwatchTimer) {
    clearInterval(quizState.stopwatchTimer);
    quizState.stopwatchTimer = null;
  }
}

function updateStopwatchDisplay() {
  const el = $('#sw-time');
  if (el) el.textContent = formatTime(quizState.stopwatchSec);
}

function formatTime(sec) {
  const m = Math.floor(sec/60);
  const s = sec%60;
  return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
}

// ---------- 听力 TTS ----------
function playAudio() {
  const s = quizState;
  if (s.currentIndex >= s.questions.length) return;
  const q = s.questions[s.currentIndex];
  const text = q.audioText || q.question;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'ja-JP';
    utt.rate = 0.9;
    utt.pitch = 1;
    const jaVoice = getJapaneseVoice();
    if (jaVoice) utt.voice = jaVoice;
    const btn = $('#play-btn');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="play-icon">⏳</span> 再生中...';
    }

    utt.onend = () => {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<span class="play-icon">▶</span> 再生（播放音频）';
      }
    };

    utt.onerror = () => {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<span class="play-icon">▶</span> 再生（播放音频）';
      }
    };

    speechSynthesis.speak(utt);
  } else {
    alert('您的浏览器不支持语音合成功能，请使用 Chrome 或 Safari。');
  }
}

function playWordAudio(word, reading) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(reading || word);
  utt.lang = 'ja-JP';
  utt.rate = 0.85;
  utt.pitch = 1;
  const jaVoice = getJapaneseVoice();
  if (jaVoice) utt.voice = jaVoice;
  speechSynthesis.speak(utt);
}

// Voice management — cached list, prefer high-quality macOS voices
let _cachedVoices = [];
function getJapaneseVoice() {
  if (!('speechSynthesis' in window)) return null;
  if (_cachedVoices.length === 0) {
    _cachedVoices = speechSynthesis.getVoices();
  }
  if (_cachedVoices.length === 0) return null;
  // Prefer Kyoko (macOS built-in, highest quality Japanese female voice)
  const preferred = ['kyoko', 'otoya', 'google japanese'];
  for (const name of preferred) {
    const v = _cachedVoices.find(v => v.name.toLowerCase().includes(name));
    if (v) return v;
  }
  // Fallback: any ja-JP voice
  return _cachedVoices.find(v => v.lang.startsWith('ja')) || null;
}

// Preload voices (async on first page load)
if ('speechSynthesis' in window) {
  speechSynthesis.getVoices();
  speechSynthesis.onvoiceschanged = () => {
    _cachedVoices = speechSynthesis.getVoices();
  };
}

// ---------- 错题本 ----------
function renderErrors(filter) {
  const errors = Storage.getErrors();
  const errorList = Object.entries(errors).map(([qid, data]) => ({ qid, ...data }));

  // Default filter
  if (!filter) {
    const counts = { vocab:0, grammar:0, reading:0, listening:0 };
    errorList.forEach(e => {
      const cat = e.question.category;
      if (cat === 'vocab' || cat === 'grammar') counts.vocab++;
      else if (cat === 'reading') counts.reading++;
      else if (cat === 'listening') counts.listening++;
    });
    filter = 'all';
  }

  const filtered = filter === 'all'
    ? errorList
    : errorList.filter(e => {
        if (filter === 'vocab') return e.question.category === 'vocab' || e.question.category === 'grammar';
        return e.question.category === filter;
      });

  const counts = { all: errorList.length,
    vocab: errorList.filter(e=>e.question.category==='vocab'||e.question.category==='grammar').length,
    reading: errorList.filter(e=>e.question.category==='reading').length,
    listening: errorList.filter(e=>e.question.category==='listening').length
  };

  const filterLabels = { all:'全部', vocab:'言語知識', reading:'読解', listening:'聴解' };

  $('#page-errors').innerHTML = `
    <div class="error-filters">
      ${Object.entries(filterLabels).map(([k,v])=>
        `<button class="filter-chip ${filter===k?'active':''}" onclick="renderErrors('${k}')">${v} (${counts[k]})</button>`
      ).join('')}
    </div>
    ${filtered.length === 0
      ? `<div class="empty-state"><div class="empty-icon">📭</div><div class="empty-text">暂无错题，继续保持！</div></div>`
      : filtered.map((e,i) => `
        <div class="card error-item">
          <span class="error-category" style="background:${e.question.category==='vocab'||e.question.category==='grammar'?'var(--indigo-light)':(e.question.category==='reading'?'var(--green-light)':'var(--gold-light)')};color:${e.question.category==='vocab'||e.question.category==='grammar'?'var(--indigo)':(e.question.category==='reading'?'var(--green)':'var(--gold)')}">${e.question.category==='vocab'||e.question.category==='grammar'?'言語知識':(e.question.category==='reading'?'読解':'聴解')}</span>
          <div class="error-question">${e.question.question.replace(/\n/g,'<br>')}</div>
          <div class="error-answer">正确答案：${e.question.options[e.question.answer]}</div>
          <div style="font-size:0.8rem;color:var(--ink-light);margin-top:6px">${e.question.explanation}</div>
          <div style="margin-top:10px">
            <button class="btn btn-sm btn-outline" onclick="toggleErrorQuestion(${i},'${e.qid}')">重新练习此题</button>
          </div>
          <div id="error-quiz-${i}" style="margin-top:12px"></div>
        </div>
      `).join('')
    }
  `;
}

function toggleErrorQuestion(idx, qid) {
  const container = $('#error-quiz-'+idx);
  if (!container) return;
  const errors = Storage.getErrors();
  const data = errors[qid];
  if (!data) return;
  const q = data.question;

  if (container.innerHTML) {
    container.innerHTML = '';
    return;
  }

  const labels = ['A','B','C','D'];
  container.innerHTML = `
    <div style="border-top:1px solid var(--border);padding-top:12px">
      <div class="quiz-options">
        ${q.options.map((opt,i) => `
          <div class="quiz-option" onclick="redoSelectAnswer('${qid}',${i},${idx},${q.answer})" id="redo-opt-${idx}-${i}">
            <span class="option-label">${labels[i]}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      <div id="redo-result-${idx}" style="margin-top:10px"></div>
    </div>
  `;
}

function redoSelectAnswer(qid, selected, idx, correctAnswer) {
  const errors = Storage.getErrors();
  if (!errors[qid]) return;

  const correct = selected === correctAnswer;
  Storage.markErrorRedone(qid, correct);

  const labels = ['A','B','C','D'];
  // Update option styles
  for (let i=0;i<4;i++) {
    const el = $('#redo-opt-'+idx+'-'+i);
    if (!el) continue;
    el.style.pointerEvents = 'none';
    if (i === correctAnswer) el.classList.add('correct');
    if (i === selected && !correct) el.classList.add('wrong');
  }

  const resultEl = $('#redo-result-'+idx);
  if (resultEl) {
    resultEl.className = `quiz-result ${correct?'correct':'wrong'}`;
    resultEl.innerHTML = correct
      ? '<strong>✓ 正解！</strong> 此题已从错题本中移除。'
      : '<strong>✗ 不正解</strong> 请继续加油，此题保留在错题本中。';
  }

  // Refresh after correct to update counts
  if (correct) {
    setTimeout(() => renderErrors(), 1200);
  }
}

// ---------- 学习统计 ----------
function renderStats() {
  const history = Storage.getHistory();
  const errors = Storage.getErrors();
  const daily = Storage.getDailyLog();
  const vocab = Storage.getVocabProgress();

  // 整体统计
  const allQ = history.length;
  const allC = history.filter(h => h.correct).length;
  const overallRate = allQ > 0 ? Math.round(allC/allQ*100) : 0;

  // 按类别
  const byCategory = {};
  history.forEach(h => {
    if (!byCategory[h.category]) byCategory[h.category] = { total:0, correct:0 };
    byCategory[h.category].total++;
    if (h.correct) byCategory[h.category].correct++;
  });

  const catLabels = { vocab:'文字・語彙', grammar:'文法', reading:'読解', listening:'聴解' };

  // 按日期
  const byDate = {};
  history.forEach(h => {
    if (!byDate[h.date]) byDate[h.date] = { total:0, correct:0 };
    byDate[h.date].total++;
    if (h.correct) byDate[h.date].correct++;
  });

  const dates = Object.keys(byDate).sort().slice(-14);
  const dateData = dates.map(d => ({
    date: d.slice(5),
    rate: Math.round(byDate[d].correct/byDate[d].total*100),
    total: byDate[d].total
  }));

  // 词汇掌握
  const vocabEntries = Object.entries(vocab);
  const vocabKnown = vocabEntries.filter(([,v])=>v.known).length;
  const vocabTotal = N2Vocabulary.length;

  // 学习天数
  const studyDays = Object.keys(daily).length;

  $('#page-stats').innerHTML = `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value" style="color:var(--indigo)">${allQ}</div>
        <div class="stat-label">总答题数</div>
      </div>
      <div class="stat-card">
        <div class="stat-value ${overallRate>=70?'good':(overallRate>=50?'warn':'bad')}">${overallRate}%</div>
        <div class="stat-label">整体正确率</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:var(--indigo)">${studyDays}</div>
        <div class="stat-label">学习天数</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:var(--indigo)">${vocabKnown}/${vocabTotal}</div>
        <div class="stat-label">已掌握词汇</div>
      </div>
    </div>

    <div class="chart-container">
      <div class="chart-title">各板块正确率</div>
      ${['vocab','grammar','reading','listening'].map(cat=>{
        const d = byCategory[cat]||{total:0,correct:0};
        const rate = d.total>0?Math.round(d.correct/d.total*100):0;
        return `
          <div class="chart-bar-row">
            <span class="chart-bar-label">${catLabels[cat]}</span>
            <div class="chart-bar-track">
              <div class="chart-bar-fill ${rate>=80?'good':(rate>=60?'warn':'bad')}" style="width:${Math.max(rate,5)}%">${rate}%</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <div class="chart-container">
      <div class="chart-title">近日正确率趋势（最近14天）</div>
      ${dateData.length===0
        ? '<div style="color:var(--ink-light);font-size:0.85rem;padding:12px 0">暂无数据，开始练习后这里会显示趋势图</div>'
        : dateData.map(d=>`
          <div class="chart-bar-row">
            <span class="chart-bar-label" style="font-size:0.7rem">${d.date}</span>
            <div class="chart-bar-track">
              <div class="chart-bar-fill ${d.rate>=80?'good':(d.rate>=60?'warn':'bad')}" style="width:${Math.max(d.rate,8)}%">${d.rate}%</div>
            </div>
            <span style="font-size:0.7rem;color:var(--ink-light);width:36px">${d.total}题</span>
          </div>
        `).join('')
      }
    </div>

    <div class="chart-container">
      <div class="chart-title">错题分布</div>
      ${(()=>{
        const errList = Object.values(errors);
        const errByCat = {};
        errList.forEach(e=>{
          const c = e.question.category==='grammar'?'vocab':e.question.category;
          errByCat[c] = (errByCat[c]||0)+1;
        });
        const maxErr = Math.max(1, ...Object.values(errByCat));
        return ['vocab','reading','listening'].map(cat=>{
          const count = errByCat[cat]||0;
          const pct = Math.round(count/Math.max(1,errList.length)*100);
          return `
            <div class="chart-bar-row">
              <span class="chart-bar-label">${catLabels[cat]}</span>
              <div class="chart-bar-track">
                <div class="chart-bar-fill bad" style="width:${Math.max(pct,5)}%">${count}题</div>
              </div>
            </div>
          `;
        }).join('');
      })()}
    </div>
  `;
}

/* ===== 初始化语音列表 ===== */
if ('speechSynthesis' in window) {
  // Trigger voice loading
  const loadVoices = () => { speechSynthesis.getVoices(); };
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}
