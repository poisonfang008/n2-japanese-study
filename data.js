/* ===== N2 词汇数据 ===== */

const N2Vocabulary = [
  // === 動詞 ===
  { id:1, word:"憧れる", reading:"あこがれる", meaning:"憧憬、向往", pos:"動詞", example:"彼女は都会の生活に憧れている。", exampleMeaning:"她向往都市生活。" },
  { id:2, word:"謝る", reading:"あやまる", meaning:"道歉、认错", pos:"動詞", example:"素直に謝れば許してもらえる。", exampleMeaning:"老实道歉的话会得到原谅。" },
  { id:3, word:"慌てる", reading:"あわてる", meaning:"慌张、着急", pos:"動詞", example:"慌てるとミスが増える。", exampleMeaning:"一着急就会增加失误。" },
  { id:4, word:"抱える", reading:"かかえる", meaning:"抱、承担", pos:"動詞", example:"彼は大きな問題を抱えている。", exampleMeaning:"他背负着很大的问题。" },
  { id:5, word:"片付ける", reading:"かたづける", meaning:"收拾、整理", pos:"動詞", example:"部屋を片付けてから出かけよう。", exampleMeaning:"收拾好房间再出门吧。" },
  { id:6, word:"我慢する", reading:"がまんする", meaning:"忍耐、忍受", pos:"動詞", example:"もう我慢できない。", exampleMeaning:"再也忍不住了。" },
  { id:7, word:"工夫する", reading:"くふうする", meaning:"下功夫、想办法", pos:"動詞", example:"もっと工夫すれば良くなる。", exampleMeaning:"再下点功夫就会变好。" },
  { id:8, word:"断る", reading:"ことわる", meaning:"拒绝、谢绝", pos:"動詞", example:"誘いを丁寧に断った。", exampleMeaning:"礼貌地拒绝了邀请。" },
  { id:9, word:"支える", reading:"ささえる", meaning:"支撑、支持", pos:"動詞", example:"家族が私を支えてくれた。", exampleMeaning:"家人支持了我。" },
  { id:10, word:"誘う", reading:"さそう", meaning:"邀请、诱惑", pos:"動詞", example:"友達を映画に誘った。", exampleMeaning:"邀请了朋友去看电影。" },
  { id:11, word:"しつける", reading:"しつける", meaning:"管教、教育", pos:"動詞", example:"子供をしっかりしつける。", exampleMeaning:"好好管教孩子。" },
  { id:12, word:"信じる", reading:"しんじる", meaning:"相信", pos:"動詞", example:"自分を信じて前に進もう。", exampleMeaning:"相信自己向前进吧。" },
  { id:13, word:"進める", reading:"すすめる", meaning:"推进、进行", pos:"動詞", example:"計画を予定通り進める。", exampleMeaning:"按计划推进。" },
  { id:14, word:"済ませる", reading:"すませる", meaning:"做完、办完", pos:"動詞", example:"仕事を早く済ませたい。", exampleMeaning:"想早点把工作做完。" },
  { id:15, word:"育つ", reading:"そだつ", meaning:"成长、发育", pos:"動詞", example:"子供はあっという間に育つ。", exampleMeaning:"孩子转眼间就长大了。" },
  { id:16, word:"倒れる", reading:"たおれる", meaning:"倒下、病倒", pos:"動詞", example:"過労で倒れてしまった。", exampleMeaning:"因过度劳累而倒下了。" },
  { id:17, word:"捕まる", reading:"つかまる", meaning:"被抓住、被逮捕", pos:"動詞", example:"犯人がやっと捕まった。", exampleMeaning:"犯人终于被抓到了。" },
  { id:18, word:"付き合う", reading:"つきあう", meaning:"交往、陪伴", pos:"動詞", example:"買い物に付き合ってくれませんか。", exampleMeaning:"能陪我逛街吗？" },
  { id:19, word:"伝わる", reading:"つたわる", meaning:"传达、传播", pos:"動詞", example:"こちらの気持ちが相手に伝わった。", exampleMeaning:"我的心意传达给了对方。" },
  { id:20, word:"手伝う", reading:"てつだう", meaning:"帮忙", pos:"動詞", example:"引っ越しを手伝ってくれてありがとう。", exampleMeaning:"谢谢你帮忙搬家。" },
  { id:21, word:"取り消す", reading:"とりけす", meaning:"取消、撤销", pos:"動詞", example:"予約を取り消したいのですが。", exampleMeaning:"我想取消预约。" },
  { id:22, word:"悩む", reading:"なやむ", meaning:"烦恼、苦恼", pos:"動詞", example:"将来のことで悩んでいる。", exampleMeaning:"为将来的事而烦恼。" },
  { id:23, word:"挟む", reading:"はさむ", meaning:"夹、插入", pos:"動詞", example:"パンにハムを挟む。", exampleMeaning:"把火腿夹在面包里。" },
  { id:24, word:"引っ越す", reading:"ひっこす", meaning:"搬家", pos:"動詞", example:"来月、大阪に引っ越します。", exampleMeaning:"下个月搬到大阪。" },
  { id:25, word:"増やす", reading:"ふやす", meaning:"增加", pos:"動詞", example:"貯金を少しずつ増やしている。", exampleMeaning:"一点点增加存款。" },
  { id:26, word:"負ける", reading:"まける", meaning:"输、失败", pos:"動詞", example:"試合に負けて悔しかった。", exampleMeaning:"比赛输了很不甘心。" },
  { id:27, word:"学ぶ", reading:"まなぶ", meaning:"学习", pos:"動詞", example:"失敗から多くを学んだ。", exampleMeaning:"从失败中学到了很多。" },
  { id:28, word:"見送る", reading:"みおくる", meaning:"送别、观望", pos:"動詞", example:"駅まで友人を見送りに行った。", exampleMeaning:"去车站送别了朋友。" },
  { id:29, word:"認める", reading:"みとめる", meaning:"承认、认可", pos:"動詞", example:"自分のミスを認めるのは勇気がいる。", exampleMeaning:"承认自己的错误需要勇气。" },
  { id:30, word:"戻す", reading:"もどす", meaning:"恢复、退回", pos:"動詞", example:"設定を元に戻してください。", exampleMeaning:"请将设置恢复原状。" },

  // === 名詞 ===
  { id:31, word:"宛名", reading:"あてな", meaning:"收件人姓名", pos:"名詞", example:"封筒に宛名を書く。", exampleMeaning:"在信封上写收件人姓名。" },
  { id:32, word:"家賃", reading:"やちん", meaning:"房租", pos:"名詞", example:"家賃を払うのを忘れた。", exampleMeaning:"忘了交房租。" },
  { id:33, word:"会議", reading:"かいぎ", meaning:"会议", pos:"名詞", example:"午後2時から会議があります。", exampleMeaning:"下午2点有会议。" },
  { id:34, word:"期限", reading:"きげん", meaning:"期限", pos:"名詞", example:"レポートの提出期限は明日だ。", exampleMeaning:"报告的提交期限是明天。" },
  { id:35, word:"距離", reading:"きょり", meaning:"距离", pos:"名詞", example:"駅までかなり距離がある。", exampleMeaning:"到车站有相当远的距离。" },
  { id:36, word:"傾向", reading:"けいこう", meaning:"倾向、趋势", pos:"名詞", example:"最近の若者の消費傾向を調べる。", exampleMeaning:"调查最近年轻人的消费倾向。" },
  { id:37, word:"交換", reading:"こうかん", meaning:"交换", pos:"名詞", example:"名刺を交換しましょう。", exampleMeaning:"交换一下名片吧。" },
  { id:38, word:"断り", reading:"ことわり", meaning:"拒绝、预告", pos:"名詞", example:"事前に断りを入れてください。", exampleMeaning:"请事先打个招呼。" },
  { id:39, word:"作法", reading:"さほう", meaning:"礼节、规矩", pos:"名詞", example:"食事の作法を身につける。", exampleMeaning:"掌握用餐礼仪。" },
  { id:40, word:"手段", reading:"しゅだん", meaning:"手段、方法", pos:"名詞", example:"あらゆる手段を試してみた。", exampleMeaning:"尝试了所有办法。" },
  { id:41, word:"趣味", reading:"しゅみ", meaning:"爱好", pos:"名詞", example:"私の趣味は写真を撮ることです。", exampleMeaning:"我的爱好是摄影。" },
  { id:42, word:"進歩", reading:"しんぽ", meaning:"进步", pos:"名詞", example:"技術の進歩は目覚ましい。", exampleMeaning:"技术的进步令人瞩目。" },
  { id:43, word:"態度", reading:"たいど", meaning:"态度", pos:"名詞", example:"彼の態度が急に変わった。", exampleMeaning:"他的态度突然改变了。" },
  { id:44, word:"手続き", reading:"てつづき", meaning:"手续", pos:"名詞", example:"入会の手続きをお願いします。", exampleMeaning:"请帮我办理入会手续。" },
  { id:45, word:"評判", reading:"ひょうばん", meaning:"评价、口碑", pos:"名詞", example:"この店は評判がいい。", exampleMeaning:"这家店口碑很好。" },
  { id:46, word:"分野", reading:"ぶんや", meaning:"领域", pos:"名詞", example:"彼は医学の分野で有名だ。", exampleMeaning:"他在医学领域很有名。" },
  { id:47, word:"方針", reading:"ほうしん", meaning:"方针", pos:"名詞", example:"会社の方針に従って行動する。", exampleMeaning:"按照公司的方针行动。" },
  { id:48, word:"目標", reading:"もくひょう", meaning:"目标", pos:"名詞", example:"今年の目標は N2 合格です。", exampleMeaning:"今年的目标是 N2 合格。" },
  { id:49, word:"予算", reading:"よさん", meaning:"预算", pos:"名詞", example:"予算内で旅行を計画する。", exampleMeaning:"在预算内计划旅行。" },
  { id:50, word:"割引", reading:"わりびき", meaning:"打折", pos:"名詞", example:"この商品は2割引です。", exampleMeaning:"这个商品打八折。" },

  // === 形容詞 ===
  { id:51, word:"怪しい", reading:"あやしい", meaning:"可疑的、靠不住的", pos:"形容詞", example:"怪しい人物を見かけた。", exampleMeaning:"看到了可疑人物。" },
  { id:52, word:"惜しい", reading:"おしい", meaning:"可惜的、遗憾的", pos:"形容詞", example:"合格まであと1点だったのに、惜しい！", exampleMeaning:"只差1分就及格了，真可惜！" },
  { id:53, word:"険しい", reading:"けわしい", meaning:"险峻的、严峻的", pos:"形容詞", example:"険しい山道を登る。", exampleMeaning:"攀登险峻的山路。" },
  { id:54, word:"細かい", reading:"こまかい", meaning:"细小的、详细的", pos:"形容詞", example:"細かいところまで気がつく人だ。", exampleMeaning:"他是一个连细节都能注意到的人。" },
  { id:55, word:"鋭い", reading:"するどい", meaning:"尖锐的、敏锐的", pos:"形容詞", example:"彼女は鋭い質問をした。", exampleMeaning:"她提出了尖锐的问题。" },
  { id:56, word:"頼もしい", reading:"たのもしい", meaning:"可靠的、靠得住的", pos:"形容詞", example:"彼は本当に頼もしい先輩だ。", exampleMeaning:"他真是可靠的前辈。" },
  { id:57, word:"等しい", reading:"ひとしい", meaning:"相等的", pos:"形容詞", example:"それは不可能に等しい。", exampleMeaning:"那几乎是不可能的。" },
  { id:58, word:"蒸し暑い", reading:"むしあつい", meaning:"闷热的", pos:"形容詞", example:"今日は特に蒸し暑いですね。", exampleMeaning:"今天特别闷热呢。" },
  { id:59, word:"物足りない", reading:"ものたりない", meaning:"不够满意、缺了点什么", pos:"形容詞", example:"説明が物足りない。", exampleMeaning:"说明不够充分。" },
  { id:60, word:"喧しい", reading:"やかましい", meaning:"吵闹的、啰嗦的", pos:"形容詞", example:"隣の部屋がやかましくて眠れない。", exampleMeaning:"隔壁房间太吵了睡不着。" },

  // === 副詞 ===
  { id:61, word:"あいにく", reading:"あいにく", meaning:"不凑巧", pos:"副詞", example:"あいにくですが、本日は休業です。", exampleMeaning:"不巧，今天停业。" },
  { id:62, word:"いちいち", reading:"いちいち", meaning:"一一、逐个", pos:"副詞", example:"いちいち文句を言わないで。", exampleMeaning:"不要事事都抱怨。" },
  { id:63, word:"うっかり", reading:"うっかり", meaning:"不小心、无意中", pos:"副詞", example:"うっかり約束を忘れてしまった。", exampleMeaning:"不小心把约会给忘了。" },
  { id:64, word:"おそらく", reading:"おそらく", meaning:"恐怕、大概", pos:"副詞", example:"おそらく彼は来ないだろう。", exampleMeaning:"恐怕他不会来了。" },
  { id:65, word:"がっかり", reading:"がっかり", meaning:"失望、灰心", pos:"副詞", example:"結果を聞いてがっかりした。", exampleMeaning:"听了结果很失望。" },
  { id:66, word:"きちんと", reading:"きちんと", meaning:"好好地、整整齐齐地", pos:"副詞", example:"きちんと片付けなさい。", exampleMeaning:"好好收拾干净。" },
  { id:67, word:"ぐっすり", reading:"ぐっすり", meaning:"酣睡、熟睡", pos:"副詞", example:"昨夜はぐっすり眠れた。", exampleMeaning:"昨晚睡得很香。" },
  { id:68, word:"こっそり", reading:"こっそり", meaning:"悄悄地、偷偷地", pos:"副詞", example:"こっそり部屋を抜け出した。", exampleMeaning:"悄悄溜出了房间。" },
  { id:69, word:"さっぱり", reading:"さっぱり", meaning:"清爽、完全（不）", pos:"副詞", example:"さっぱりわからない。", exampleMeaning:"完全不懂。" },
  { id:70, word:"すっきり", reading:"すっきり", meaning:"舒畅、清爽", pos:"副詞", example:"シャワーを浴びてすっきりした。", exampleMeaning:"洗了澡很清爽。" },
  { id:71, word:"せっかく", reading:"せっかく", meaning:"特意、好不容易", pos:"副詞", example:"せっかく来たのに誰もいなかった。", exampleMeaning:"好不容易来了却一个人都没有。" },
  { id:72, word:"たまたま", reading:"たまたま", meaning:"偶然、碰巧", pos:"副詞", example:"たまたま駅で先生に会った。", exampleMeaning:"碰巧在车站遇到了老师。" },
  { id:73, word:"どんどん", reading:"どんどん", meaning:"不断地、咚咚地", pos:"副詞", example:"日本語がどんどん上手になっている。", exampleMeaning:"日语在不断地进步。" },
  { id:74, word:"のんびり", reading:"のんびり", meaning:"悠闲、舒舒服服", pos:"副詞", example:"休日は家でのんびり過ごしたい。", exampleMeaning:"假日想在家悠闲度过。" },
  { id:75, word:"ますます", reading:"ますます", meaning:"越来越、越发", pos:"副詞", example:"これからますます寒くなる。", exampleMeaning:"今后会越来越冷。" },

  // === カタカナ語 ===
  { id:76, word:"アンケート", reading:"アンケート", meaning:"问卷调查", pos:"カタカナ", example:"お客様にアンケートをお願いした。", exampleMeaning:"请客户做了问卷调查。" },
  { id:77, word:"エネルギー", reading:"エネルギー", meaning:"能源、精力", pos:"カタカナ", example:"この仕事に全エネルギーを使った。", exampleMeaning:"把全部精力用在了这项工作上。" },
  { id:78, word:"オリジナル", reading:"オリジナル", meaning:"原创、独创", pos:"カタカナ", example:"これはオリジナルのデザインです。", exampleMeaning:"这是原创设计。" },
  { id:79, word:"コミュニケーション", reading:"コミュニケーション", meaning:"交流、沟通", pos:"カタカナ", example:"チーム内のコミュニケーションが大切だ。", exampleMeaning:"团队内部的沟通很重要。" },
  { id:80, word:"ストレス", reading:"ストレス", meaning:"压力、精神紧张", pos:"カタカナ", example:"最近ストレスが溜まっている。", exampleMeaning:"最近压力很大。" },
  { id:81, word:"チャレンジ", reading:"チャレンジ", meaning:"挑战", pos:"カタカナ", example:"新しいことにチャレンジしたい。", exampleMeaning:"想挑战新事物。" },
  { id:82, word:"バランス", reading:"バランス", meaning:"平衡", pos:"カタカナ", example:"仕事と家庭のバランスを取る。", exampleMeaning:"取得工作与家庭的平衡。" },
  { id:83, word:"マナー", reading:"マナー", meaning:"礼仪、礼貌", pos:"カタカナ", example:"テーブルマナーを学ぶ。", exampleMeaning:"学习餐桌礼仪。" },
  { id:84, word:"リサイクル", reading:"リサイクル", meaning:"循环利用、回收", pos:"カタカナ", example:"資源をリサイクルする。", exampleMeaning:"将资源循环利用。" },
  { id:85, word:"レベル", reading:"レベル", meaning:"水平、级别", pos:"カタカナ", example:"日本語のレベルを上げたい。", exampleMeaning:"想提高日语水平。" },

  // === 漢字熟語 ===
  { id:86, word:"案内", reading:"あんない", meaning:"引导、指南", pos:"名詞", example:"係員が会場まで案内します。", exampleMeaning:"工作人员会引导您到会场。" },
  { id:87, word:"意識", reading:"いしき", meaning:"意识、知觉", pos:"名詞", example:"防犯意識を高める必要がある。", exampleMeaning:"需要提高防范意识。" },
  { id:88, word:"延期", reading:"えんき", meaning:"延期", pos:"名詞", example:"悪天候のため試合が延期になった。", exampleMeaning:"因恶劣天气比赛延期了。" },
  { id:89, word:"改善", reading:"かいぜん", meaning:"改善", pos:"名詞", example:"労働環境を改善してほしい。", exampleMeaning:"希望能改善工作环境。" },
  { id:90, word:"確認", reading:"かくにん", meaning:"确认", pos:"名詞", example:"もう一度日程を確認してください。", exampleMeaning:"请再确认一下日程。" },
  { id:91, word:"教育", reading:"きょういく", meaning:"教育", pos:"名詞", example:"日本の教育制度について調べる。", exampleMeaning:"调查日本的教育制度。" },
  { id:92, word:"経営", reading:"けいえい", meaning:"经营", pos:"名詞", example:"父は小さな会社を経営している。", exampleMeaning:"父亲经营着一家小公司。" },
  { id:93, word:"検査", reading:"けんさ", meaning:"检查", pos:"名詞", example:"健康診断で血液検査を受けた。", exampleMeaning:"体检时做了血液检查。" },
  { id:94, word:"交流", reading:"こうりゅう", meaning:"交流", pos:"名詞", example:"国際交流イベントに参加した。", exampleMeaning:"参加了国际交流活动。" },
  { id:95, word:"職業", reading:"しょくぎょう", meaning:"职业", pos:"名詞", example:"将来の職業について考える。", exampleMeaning:"思考将来的职业。" },
  { id:96, word:"状況", reading:"じょうきょう", meaning:"状况、情况", pos:"名詞", example:"現在の状況を説明してください。", exampleMeaning:"请说明一下当前的状况。" },
  { id:97, word:"制限", reading:"せいげん", meaning:"限制", pos:"名詞", example:"時間に制限があるので急ごう。", exampleMeaning:"由于时间有限制，抓紧吧。" },
  { id:98, word:"責任", reading:"せきにん", meaning:"责任", pos:"名詞", example:"この件については私が責任を取る。", exampleMeaning:"这件事由我来负责。" },
  { id:99, word:"判断", reading:"はんだん", meaning:"判断", pos:"名詞", example:"自分で判断して行動してください。", exampleMeaning:"请自己判断后行动。" },
  { id:100, word:"保護", reading:"ほご", meaning:"保护", pos:"名詞", example:"自然環境を保護することが大切だ。", exampleMeaning:"保护自然环境很重要。" },
];

/* ===== N2 语法点参考（用于题目出题） ===== */
const N2GrammarPoints = [
  "〜一方だ", "〜上で", "〜うちに", "〜得る", "〜おかげだ",
  "〜恐れがある", "〜限り", "〜がたい", "〜かねない", "〜からといって",
  "〜気味", "〜ことはない", "〜最中に", "〜さえ", "〜次第",
  "〜末に", "〜せいで", "〜だけあって", "〜たところで", "〜つつある",
  "〜て以来", "〜てしょうがない", "〜とともに", "〜ないことはない", "〜に違いない",
  "〜に関して", "〜に加えて", "〜に従って", "〜に反して", "〜に基づいて",
  "〜抜きで", "〜のみならず", "〜ばかりに", "〜はもちろん", "〜べきだ",
  "〜ほど", "〜まい", "〜向け", "〜ものだ", "〜や否や",
  "〜わけがない", "〜わりに",
];

/* ===== N2 练习题数据 ===== */

const QuizQuestions = {

  // ===== 言語知識（文字・語彙） =====
  vocab: [
    {
      id:"v1", category:"vocab",
      question:"彼は大きな問題を______。",
      options:["抱えている","抱いている","抱きしめている","抱っこしている"],
      answer:0,
      explanation:"「問題を抱える」是\"背负/承担问题\"的惯用搭配。选项2「抱く（いだく）」用于抽象事物如「夢を抱く」。选项3是\"紧紧拥抱\"，选项4是\"（幼儿用语）抱抱\"。"
    },
    {
      id:"v2", category:"vocab",
      question:"行きたくないので、上手に______つもりだ。",
      options:["断る","拒否する","拒む","否定する"],
      answer:0,
      explanation:"「断る（ことわる）」是日常用语中\"拒绝邀请/请求\"最自然的说法。「拒否する」和「拒む」语气较强硬，「否定する」意为\"否定\"，语义不符。"
    },
    {
      id:"v3", category:"vocab",
      question:"あの店はサービスがいいと______だ。",
      options:["評判","評価","批判","評議"],
      answer:0,
      explanation:"「評判がいい」是固定搭配，意为\"口碑好/评价好\"。「評価」更偏\"评价/评判\"，不用于「〜がいい」这种口语表达。「批判」是\"批评\"，「評議」是\"评议/讨论\"。"
    },
    {
      id:"v4", category:"vocab",
      question:"______ですが、本日の営業は終了しました。",
      options:["あいにく","せっかく","たまたま","うっかり"],
      answer:0,
      explanation:"「あいにく」意为\"不凑巧\"，是服务行业常用的客套话。「せっかく」是\"好不容易\"，「たまたま」是\"偶然\"，「うっかり」是\"不小心\"。"
    },
    {
      id:"v5", category:"vocab",
      question:"もっと______すれば、もっといい作品ができる。",
      options:["工夫","努力","苦労","勉強"],
      answer:0,
      explanation:"「工夫する」强调\"动脑筋想办法改进\"，比「努力する」（单纯努力）更贴合\"做出更好作品\"的语境。「苦労」是\"辛苦\"，「勉強」在此不自然。"
    },
    {
      id:"v6", category:"vocab",
      question:"友達を映画に______。",
      options:["誘った","招いた","呼んだ","招待した"],
      answer:0,
      explanation:"「誘う（さそう）」是日常\"邀请（一起做某事）\"最自然的词。「招く」和「招待する」更偏\"正式招待/宴请\"，「呼ぶ」是\"叫/喊\"。"
    },
    {
      id:"v7", category:"vocab",
      question:"自分のミスを______勇気が必要だ。",
      options:["認める","確認する","認識する","承知する"],
      answer:0,
      explanation:"「ミスを認める」意为\"承认错误\"，是最自然的搭配。「確認する」是\"确认\"，「認識する」是\"认识/意识到\"，「承知する」是\"知道/同意\"。"
    },
    {
      id:"v8", category:"vocab",
      question:"この町はここ数年で______発展している。",
      options:["めざましく","すばやく","いちじるしく","あわただしく"],
      answer:0,
      explanation:"「目覚ましい発展」是惯用搭配，意为\"惊人的/显著的发展\"。「素早く」是\"快速地\"（动作），「著しく」虽然也是\"显著\"但更书面且常带负面含义，「慌ただしく」是\"匆忙地\"。"
    },
    {
      id:"v9", category:"vocab",
      question:"______約束を忘れてしまった。",
      options:["うっかり","さっぱり","こっそり","ぐっすり"],
      answer:0,
      explanation:"「うっかり」意为\"不小心/无意中\"，修饰\"忘记\"最自然。「さっぱり」是\"完全不\"，「こっそり」是\"悄悄地\"，「ぐっすり」是\"熟睡地\"。"
    },
    {
      id:"v10", category:"vocab",
      question:"説明が______ので、もっと詳しく教えてほしい。",
      options:["物足りない","もったいない","しかたない","つまらない"],
      answer:0,
      explanation:"「物足りない」意为\"不够/缺了点什么\"，用于感到不充分。「もったいない」是\"浪费\"，「しかたない」是\"没办法\"，「つまらない」是\"无聊\"。"
    },
    {
      id:"v11", category:"vocab",
      question:"______ところまで気がつく細やかな人だ。",
      options:["細かい","小さい","細い","小さな"],
      answer:0,
      explanation:"「細かいところ」意为\"细节/细微之处\"。「小さい」和「小さな」指物理大小，「細い」指\"细的/窄的\"（形状）。"
    },
    {
      id:"v12", category:"vocab",
      question:"______山道を3時間かけて登った。",
      options:["険しい","厳しい","苦しい","辛い"],
      answer:0,
      explanation:"「険しい（けわしい）」专门形容山路/地势\"险峻\"。「厳しい」是\"严格的/严酷的\"（规则、环境），「苦しい」是\"痛苦的\"，「辛い」是\"辛苦的/辣的\"。"
    },
    {
      id:"v13", category:"vocab",
      question:"彼の話は______ので、誰も信じなかった。",
      options:["怪しかった","恐ろしかった","危なかった","疑わしかった"],
      answer:0,
      explanation:"「怪しい（あやしい）」意为\"可疑的/不可信的\"，描述话语最自然。「恐ろしい」是\"可怕的\"，「疑わしい」虽也有\"可疑\"意思，但侧重于\"值得怀疑的证据/事实\"，不如「怪しい」自然。"
    },
    {
      id:"v14", category:"vocab",
      question:"子供をしっかり______ことが親の役目だ。",
      options:["しつける","育てる","養う","教育する"],
      answer:0,
      explanation:"「しつける」特指\"管教/教养\"，包括礼仪和习惯的培养。「育てる」是\"养育\"（更广泛），「養う」是\"抚养/养活\"，「教育する」偏学校教育。"
    },
    {
      id:"v15", category:"vocab",
      question:"毎日少しずつ貯金を______いる。",
      options:["増やして","増して","増えて","増加して"],
      answer:0,
      explanation:"「増やす」是他动词，带宾语「貯金を」，意为\"增加存款\"。「増える」是自动词，不能用「を」。「増す」也是自动词，「増加する」太书面。"
    },
  ],

  // ===== 言語知識（文法） =====
  grammar: [
    {
      id:"g1", category:"grammar",
      question:"日本語を勉強する______、どんどん日本が好きになった。",
      options:["うちに","うちは","なかで","あいだ"],
      answer:0,
      explanation:"「〜うちに」意为\"在…的过程中（发生了某种变化）\"，强调在持续某个行为期间自然发生的变化。「うちは」意为\"在…期间一直\"，不强调变化。"
    },
    {
      id:"g2", category:"grammar",
      question:"彼の性格______、そんなことはしないだろう。",
      options:["からいうと","としても","に限らず","といっても"],
      answer:0,
      explanation:"「〜からいうと」意为\"从…来说/判断\"，表示判断的依据。「としても」是\"即使…也\"，「に限らず」是\"不只…\"，「といっても」是\"虽说…但是\"。"
    },
    {
      id:"g3", category:"grammar",
      question:"急いだ______、電車に間に合わなかった。",
      options:["にもかかわらず","ように","おかげで","ばかりに"],
      answer:0,
      explanation:"「〜にもかかわらず」意为\"尽管…却…\"，表示逆接。「おかげで」表原因（好结果），「ばかりに」表原因（坏结果）但前面接普通形，这里需要逆接。"
    },
    {
      id:"g4", category:"grammar",
      question:"彼女は歌手である______、小説家としても有名だ。",
      options:["のみならず","だけではなく","ばかりか","一方で"],
      answer:0,
      explanation:"「AであるのみならずB」是较书面的\"不只是A，也是B\"，N2 常考点。选项中「だけでなく」和「ばかりか」也是同样意思但接续不同。「一方で」是\"另一方面\"。"
    },
    {
      id:"g5", category:"grammar",
      question:"疲れている______、昨日は早く寝た。",
      options:["ためか","せいか","おかげか","からか"],
      answer:0,
      explanation:"「〜せいか」表示\"可能是因为…（不好的原因）\"，带有消极语感。疲劳是不好的状态，用「せいか」最合适。「おかげか」用于好结果，「ためか」中性。"
    },
    {
      id:"g6", category:"grammar",
      question:"彼は忙しい______、毎日ジムに通っている。",
      options:["にもかかわらず","わりに","くせに","にしては"],
      answer:1,
      explanation:"「〜わりに」意为\"虽然…但是…\"，表示与预期不符，不带感情色彩。「にもかかわらず」太正式，「くせに」带贬义，「にしては」接名词。"
    },
    {
      id:"g7", category:"grammar",
      question:"娘は家に着く______、宿題を始めた。",
      options:["や否や","次第","たところで","うちに"],
      answer:0,
      explanation:"「〜や否や」意为\"刚一…就…\"，是 N2 经典语法点，用于书面语。「次第」也表示\"一…就\"但前面接ます形，「たところで」是\"即使…也\"，「うちに」是\"在…期间\"。"
    },
    {
      id:"g8", category:"grammar",
      question:"ご連絡いただければ、______対応いたします。",
      options:["早速","早々に","すぐか","急に"],
      answer:0,
      explanation:"「早速（さっそく）」在商务语境中表示\"立刻/马上\"，是最得体的表达。「早々に（そうそうに）」也是\"立刻\"但更书面且常用于过去描述。" },
    {
      id:"g9", category:"grammar",
      question:"努力した______、合格できて本当に嬉しい。",
      options:["おかげで","せいで","ためで","結果で"],
      answer:0,
      explanation:"「〜おかげで」表示\"多亏了…（好的结果）\"，带有感谢的语感。「せいで」用于坏结果，「ためで」用法不对（ためだ），「結果で」非固定搭配。"
    },
    {
      id:"g10", category:"grammar",
      question:"社長の指示______、新しいプロジェクトを始めた。",
      options:["に基づいて","に応じて","に関して","に対して"],
      answer:0,
      explanation:"「〜に基づいて」意为\"基于…/根据…\"，用于表示依据。「に応じて」是\"根据…相应\"，「に関して」是\"关于…\"，「に対して」是\"对于…\"。"
    },
    {
      id:"g11", category:"grammar",
      question:"こんなに難しい問題は、私に______。",
      options:["できそうもない","できるはずだ","できないこともない","できるわけだ"],
      answer:0,
      explanation:"「〜そうもない」意为\"似乎不可能…\"，表示强烈的否定推测。根据句意\"这么难的问题\"，应该是\"我似乎做不出来\"。"
    },
    {
      id:"g12", category:"grammar",
      question:"天気予報______、明日は雨が降るそうだ。",
      options:["によると","について","にとって","によって"],
      answer:0,
      explanation:"「〜によると」意为\"根据…（信息来源）\"，常与「〜そうだ」搭配。「について」是\"关于\"，「にとって」是\"对于…来说\"，「によって」是\"由于/通过\"。"
    },
    {
      id:"g13", category:"grammar",
      question:"彼の言葉______、私は決心がついた。",
      options:["のおかげで","のせいで","のためで","のきっかけで"],
      answer:0,
      explanation:"「〜のおかげで」表示\"多亏了…\"，带来好的结果（下定了决心）。「のせいで」是\"都怪…\"（坏结果），「のためで」非标准用法。"
    },
    {
      id:"g14", category:"grammar",
      question:"このままでは、プロジェクトは失敗する______。",
      options:["恐れがある","はずがない","わけだ","べきだ"],
      answer:0,
      explanation:"「〜恐れがある」意为\"有…的危险/可能\"，用于表示消极的可能性。「はずがない」是\"不可能\"太绝对，「わけだ」是\"当然/也就是说\"，「べきだ」是\"应该\"。"
    },
    {
      id:"g15", category:"grammar",
      question:"たとえ失敗______、やってみる価値はある。",
      options:["しても","すれば","すると","するなら"],
      answer:0,
      explanation:"「たとえ〜ても」是固定搭配，意为\"即使…也…\"。「たとえ」只能与「〜ても/でも」搭配，不能接「ば/と/なら」。"
    },
  ],

  // ===== 読解 =====
  reading: [
    {
      id:"r1", category:"reading",
      passage:"日本のコンビニエンスストアは、単なる小売店の枠を超えて、電気代や水道代の支払い、荷物の発送、チケットの購入など、様々なサービスを提供している。24時間営業が当たり前だったが、人手不足の影響で、最近では深夜営業を取りやめる店も増えてきた。",
      question:"最近のコンビニについて、本文の内容と合っているものはどれか。",
      options:[
        "全てのコンビニが深夜営業をやめた",
        "人手不足により深夜営業をやめる店が出てきた",
        "コンビニでは買い物以外のサービスは減っている",
        "24時間営業は法律で禁止された"
      ],
      answer:1,
      explanation:"文中明确提到「人手不足の影響で、最近では深夜営業を取りやめる店も増えてきた」。选项1的\"全部\"太绝对，选项3与\"様々なサービス\"矛盾，选项4文中未提及。"
    },
    {
      id:"r2", category:"reading",
      passage:"「もったいない」という言葉は、日本語の中でも特に豊かな意味を持つ表現の一つだ。単に物を無駄にすることを戒めるだけでなく、その背後にある人の努力や自然の恵みへの感謝の気持ちも含まれている。環境保護の分野では、この言葉は国際的にも注目されている。",
      question:"「もったいない」という言葉について、筆者はどのように考えているか。",
      options:[
        "単なる無駄を戒める言葉にすぎない",
        "物の無駄を戒めると同時に感謝の気持ちも含む豊かな表現だ",
        "外国人には理解できない日本独特の概念だ",
        "環境保護とは関係のない言葉だ"
      ],
      answer:1,
      explanation:"文中「単に物を無駄にすることを戒めるだけでなく、…感謝の気持ちも含まれている」直接对应选项2。选项1的\"にすぎない\"与文意相反。"
    },
    {
      id:"r3", category:"reading",
      passage:"最近の調査によると、若者の間で「断捨離」ブームが続いているという。物を捨てることで心も整理されるという考え方だが、一方で「捨てるのがもったいない」と感じる人も少なくない。専門家は「大切なのは物を減らすことではなく、自分にとって本当に必要な物を見極めることだ」と指摘している。",
      question:"専門家が最も言いたいことは何か。",
      options:[
        "できるだけ多くの物を捨てるべきだ",
        "物を捨てるのはもったいないからやめるべきだ",
        "必要な物と不要な物を見分けることが重要だ",
        "断捨離は若者にしかできない"
      ],
      answer:2,
      explanation:"专家明确指出「大切なのは…自分にとって本当に必要な物を見極めることだ」。选项1和2各走极端，选项4文中未提及。"
    },
    {
      id:"r4", category:"reading",
      passage:"日本の電車内では、携帯電話で通話することはマナー違反とされている。しかし、スマートフォンの普及により、メールやSNSのやり取りは広く許容されている。この「通話はダメだが、テキストはOK」という不文律に、外国人観光客はしばしば戸惑いを覚えるようだ。",
      question:"この文章で筆者が言いたいことは何か。",
      options:[
        "電車内ではスマートフォンの使用を全面禁止すべきだ",
        "日本の電車マナーは外国人には理解しにくい面がある",
        "電車内での通話を許可すべきだ",
        "SNSの使用もマナー違反だ"
      ],
      answer:1,
      explanation:"文中最后提到外国人对此惯例感到困惑（戸惑いを覚える），说明这种规则对外国人来说难以理解。其他选项均与文意不符。"
    },
    {
      id:"r5", category:"reading",
      passage:"アルバイトの面接で最も重視されるのは「コミュニケーション能力」だという。これは単に日本語が上手かどうかではなく、相手の話をきちんと聞き、自分の考えを適切に伝えられるかどうかを意味する。専門学校の就職指導担当者は「専門知識よりも、まずは基本的な受け答えができることが大事」と話す。",
      question:"本文の内容と合っているものはどれか。",
      options:[
        "アルバイトでは専門知識が最も重要だ",
        "日本語が母語でない人は採用されにくい",
        "コミュニケーション能力とは、話す力だけを指す",
        "相手の話を聞き、適切に伝える力が重視されている"
      ],
      answer:3,
      explanation:"文中明确说明沟通能力是\"相手の話をきちんと聞き、自分の考えを適切に伝えられる\"。选项1与\"専門知識よりも\"矛盾，选项2未提及，选项3不完整。"
    },
    {
      id:"r6", category:"reading",
      passage:"日本では近年、共働き世帯が増加している。それに伴い、家事の分担についての考え方も変わりつつある。かつては「家事は女性の仕事」という固定観念が強かったが、今では男性の家事参加が当たり前になりつつある。しかし、依然として女性の家事負担時間は男性の約3倍だというデータもある。",
      question:"本文からわかることとして、正しいものはどれか。",
      options:[
        "日本の共働き世帯は減少している",
        "男性の家事参加は増えたが、まだ女性の負担の方が大きい",
        "現在では男女の家事時間は完全に平等だ",
        "家事は女性だけがするものだという考え方はもう存在しない"
      ],
      answer:1,
      explanation:"文中说男性参与家务正在变得理所当然，但「依然として女性の家事負担時間は男性の約3倍」，说明女性负担依然更大。"
    },
    {
      id:"r7", category:"reading",
      passage:"「早起きは三文の得」ということわざがある。朝早く起きると健康にも良いし、時間を有効に使えるという意味だ。しかし最近の睡眠研究では、個人によって最適な睡眠リズムが異なることがわかってきた。無理に早起きをすることが、かえってストレスの原因になる場合もあるという。",
      question:"筆者の主張として最も適切なものはどれか。",
      options:[
        "早起きは誰にとっても良いことだ",
        "個人の睡眠リズムを無視した早起きは逆効果の可能性がある",
        "早起きの習慣は全く意味がない",
        "睡眠研究の結果は信用できない"
      ],
      answer:1,
      explanation:"文中指出\"無理に早起きをすることが、かえってストレスの原因になる場合もある\"，说明忽视个人睡眠节律的早起可能适得其反。"
    },
    {
      id:"r8", category:"reading",
      passage:"日本の飲食店では、「お通し」や「突き出し」と呼ばれる小皿料理が席についてすぐに出されることがある。これは注文したものではなく、席料のようなものだ。観光客の中には「頼んでいないのにお金を取られた」と驚く人もいるが、これは日本の飲食文化の一つとして理解する必要がある。",
      question:"「お通し」について、本文の説明と合っているものはどれか。",
      options:[
        "無料で提供されるサービスの一つだ",
        "注文とは別に料金がかかる席料的なものだ",
        "全ての客が必ず注文しなければならない",
        "最近はほとんど見られなくなった"
      ],
      answer:1,
      explanation:"文中明确说\"これは注文したものではなく、席料のようなものだ\"，说明这是类似座位费的收费项目。选项1的\"免费\"错误，选项3和4文中未提及。"
    },
  ],

  // ===== 聴解 =====
  listening: [
    {
      id:"l1", category:"listening",
      scenario:"レストランで、店員と客の会話",
      audioText:"申し訳ございません、ただいま満席でして、30分ほどお待ちいただくことになりますが、よろしいでしょうか。",
      question:"店員は何と言っていますか。",
      options:[
        "今すぐ席に案内できる",
        "30分ほど待つ必要がある",
        "予約が必要だ",
        "別の店に行ってほしい"
      ],
      answer:1,
      explanation:"店员说「30分ほどお待ちいただく」，表示需要等待约30分钟。「満席」是\"满座\"，「ただいま」是\"现在\"。"
    },
    {
      id:"l2", category:"listening",
      scenario:"会社のオフィスで、上司と部下の会話",
      audioText:"この企画書、悪くはないけど、もう少し具体的な数字を入れた方が説得力があると思うよ。",
      question:"上司は何をアドバイスしていますか。",
      options:[
        "企画書を最初から作り直す",
        "数字を追加して具体性を高める",
        "企画書のデザインを変更する",
        "このままで十分だ"
      ],
      answer:1,
      explanation:"「悪くはないけど」先认可，然后说「具体的な数字を入れた方が説得力がある」——建议加入具体数据来增强说服力。"
    },
    {
      id:"l3", category:"listening",
      scenario:"友達同士の会話",
      audioText:"明日のハイキング、天気予報では午後から雨だって。どうする？延期する？",
      question:"話している人は何を提案していますか。",
      options:[
        "予定通りハイキングに行く",
        "ハイキングの行き先を変える",
        "ハイキングを延期する",
        "傘を持って行く"
      ],
      answer:2,
      explanation:"「延期する？」直接问\"要不要延期？\"，这是在提议延期。关键词「延期（えんき）」意为\"推迟/延期\"。"
    },
    {
      id:"l4", category:"listening",
      scenario:"駅のアナウンス",
      audioText:"まもなく3番線に、東京行きの快速電車が参ります。危ないですから、黄色い線の内側までお下がりください。",
      question:"このアナウンスで、乗客に何を呼びかけていますか。",
      options:[
        "切符を購入すること",
        "黄色い線の内側に下がること",
        "電車に急いで乗ること",
        "東京行きの電車を待たないこと"
      ],
      answer:1,
      explanation:"「黄色い線の内側までお下がりください」是标准的安全提示，让乘客退到黄色安全线以内。关键词「お下がりください」=\"请后退\"。"
    },
    {
      id:"l5", category:"listening",
      scenario:"留守番電話のメッセージ",
      audioText:"もしもし、田中です。明日の打ち合わせの件ですが、午前10時からに変更したいんですが、ご都合いかがでしょうか。お手すきの時に折り返しお電話いただければと思います。よろしくお願いします。",
      question:"田中さんは何のために電話をかけましたか。",
      options:[
        "明日の打ち合わせをキャンセルしたい",
        "打ち合わせの時間を変更したい",
        "新しい打ち合わせを設定したい",
        "打ち合わせの場所を確認したい"
      ],
      answer:1,
      explanation:"「午前10時からに変更したいんですが」明确表示想变更会议时间。关键词「変更」=\"变更/更改\"。"
    },
    {
      id:"l6", category:"listening",
      scenario:"お店で、店員との会話",
      audioText:"お客様、こちらの商品は只今キャンペーン中でして、2点お買い上げいただくと3点目が半額になりますが、いかがでしょうか。",
      question:"店員は何を提案していますか。",
      options:[
        "商品を1つだけ買う",
        "2つ買うともう1つが半額になるキャンペーンがある",
        "全商品が半額になっている",
        "会員カードを作る"
      ],
      answer:1,
      explanation:"「2点お買い上げいただくと3点目が半額」= 买两件第三件半价。关键词「半額（はんがく）」=\"半价\"。"
    },
    {
      id:"l7", category:"listening",
      scenario:"学校で、先生が生徒に",
      audioText:"来週の金曜日までに、このレポートを提出してください。期限を過ぎた場合は受け取れませんので、気をつけてくださいね。",
      question:"先生が言っていることと合っているのはどれですか。",
      options:[
        "レポートは来週の金曜日以降に提出してもよい",
        "期限を過ぎるとレポートは受け取ってもらえない",
        "レポートは不要になった",
        "提出期限はまだ決まっていない"
      ],
      answer:1,
      explanation:"「期限を過ぎた場合は受け取れません」= 过了截止日期就不收了。关键词「期限（きげん）」=\"期限/截止日期\"。"
    },
    {
      id:"l8", category:"listening",
      scenario:"友人同士の会話",
      audioText:"A: 今度の週末、みんなで花見に行かない？ B: いいね！でも週末は混むから、場所取りが大変そう。 A: じゃあ、誰か早めに行って場所を取っておく？ B: うん、そうしよう。私、朝ちょっと早く行けるよ。",
      question:"二人は最終的にどうすることにしましたか。",
      options:[
        "花見をやめる",
        "別の日に行く",
        "誰かが早めに行って場所を取る",
        "予約できる場所を探す"
      ],
      answer:2,
      explanation:"B 说「私、朝ちょっと早く行けるよ」，说明有人会早上提前去占位。关键词「場所取り（ばしょとり）」=\"占位/占地方\"。"
    },
    {
      id:"l9", category:"listening",
      scenario:"会社で、同僚との会話",
      audioText:"A: この資料、明日の会議までにコピーしておいてくれる？ B: はい、何部用意すればいいですか。 A: 参加者が15人だから、余裕を見て20部お願い。",
      question:"資料は何部コピーしますか。",
      options:[
        "15部","20部","25部","10部"
      ],
      answer:1,
      explanation:"虽然参加者是15人，但 A 说「余裕を見て20部お願い」= 考虑到余量，准备20份。关键词「余裕を見て」=\"留有余地/多准备一些\"。"
    },
    {
      id:"l10", category:"listening",
      scenario:"お店の返品対応",
      audioText:"お客様、申し訳ございません。こちらの商品は開封後の返品はお受けできかねます。ただし、不良品の場合は交換させていただきます。",
      question:"店員の説明と合っているものはどれですか。",
      options:[
        "開封後でもいつでも返品できる",
        "開封後の返品はできないが、不良品なら交換可能だ",
        "返品も交換も一切できない",
        "交換には追加料金がかかる"
      ],
      answer:1,
      explanation:"「開封後の返品はお受けできかねます」= 开封后不能退货，但「不良品の場合は交換」= 如果有质量问题可以换。关键词「不良品（ふりょうひん）」=\"次品/有缺陷的商品\"。"
    },
    {
      id:"l11", category:"listening",
      scenario:"学校で、先生が生徒に",
      audioText:"明日の授業ですが、教科書は必ず持ってきてください。それから、前回配った資料集も使いますので、忘れずに持ってきてください。ノートは特に必要ありません。私のほうでプリントを用意しますので。",
      question:"学生は明日、何を持って来なければなりませんか。",
      options:[
        "教科書とノート",
        "教科書と資料集",
        "ノートと資料集",
        "教科書とノートと資料集"
      ],
      answer:1,
      explanation:"老师说：明天请务必带教科书，上次发的资料集也会用到，不要忘记带。笔记本不需要，老师会准备讲义。所以正确答案是 教科書と資料集。"
    },
  ]
};

/* ===== 每日学习计划模板 ===== */
const StudyPlanTemplate = {
  // 根据剩余天数动态生成，每天约60分钟
  defaultDailyTasks: [
    { type:"flashcard", label:"复习 N2 核心词汇", target:30, unit:"个", category:"vocab", minutes:15 },
    { type:"quiz", label:"言語知識練習", target:10, unit:"题", category:"grammar", minutes:15 },
    { type:"quiz", label:"聴解練習", target:5, unit:"题", category:"listening", minutes:15 },
    { type:"quiz", label:"読解練習", target:2, unit:"篇", category:"reading", minutes:10 },
    { type:"review", label:"复习今日错题", target:0, unit:"", category:"review", minutes:5 },
  ]
};

/* ===== 每日鼓励语 ===== */
const Motivations = [
  "継続は力なり — 坚持就是力量",
  "千里の道も一歩から — 千里之行始于足下",
  "為せば成る — 有志者事竟成",
  "毎日少しずつ、確実に前進しています",
  "努力は裏切らない — 努力不会背叛你",
  "N2 合格まで、あと少し！",
];
