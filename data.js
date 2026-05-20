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

  // === 動詞（続き） ===
  { id:101, word:"当たる", reading:"あたる", meaning:"命中、相当于", pos:"動詞", example:"くじ引きで一等に当たった。", exampleMeaning:"抽奖中了一等奖。" },
  { id:102, word:"扱う", reading:"あつかう", meaning:"处理、对待、经营", pos:"動詞", example:"この店では高級品を扱っている。", exampleMeaning:"这家店经营高级商品。" },
  { id:103, word:"暴れる", reading:"あばれる", meaning:"乱闹、胡闹", pos:"動詞", example:"酔っ払いが店で暴れた。", exampleMeaning:"醉汉在店里大闹。" },
  { id:104, word:"言い出す", reading:"いいだす", meaning:"说出口、先说", pos:"動詞", example:"彼が最初にそのアイデアを言い出した。", exampleMeaning:"他最先提出了那个想法。" },
  { id:105, word:"頂く", reading:"いただく", meaning:"领受、吃（敬语）", pos:"動詞", example:"お土産をいただきました。", exampleMeaning:"收到了土特产。" },
  { id:106, word:"受かる", reading:"うかる", meaning:"考上、及格", pos:"動詞", example:"努力して希望の大学に受かった。", exampleMeaning:"通过努力考上了理想的大学。" },
  { id:107, word:"失う", reading:"うしなう", meaning:"失去、丧失", pos:"動詞", example:"事故で視力を失ってしまった。", exampleMeaning:"因事故失去了视力。" },
  { id:108, word:"訴える", reading:"うったえる", meaning:"控告、诉说、打动", pos:"動詞", example:"彼の言葉は人々の心に訴えた。", exampleMeaning:"他的话打动了人们的心。" },
  { id:109, word:"埋める", reading:"うめる", meaning:"填埋、填补", pos:"動詞", example:"穴を掘ってゴミを埋めた。", exampleMeaning:"挖坑把垃圾埋了。" },
  { id:110, word:"追い越す", reading:"おいこす", meaning:"超过、赶过", pos:"動詞", example:"前の車を安全に追い越した。", exampleMeaning:"安全地超过了前面的车。" },
  { id:111, word:"補う", reading:"おぎなう", meaning:"弥补、补充", pos:"動詞", example:"経験不足は努力で補える。", exampleMeaning:"经验不足可以用努力来弥补。" },
  { id:112, word:"収める", reading:"おさめる", meaning:"收纳、取得、平息", pos:"動詞", example:"彼はプロジェクトで成果を収めた。", exampleMeaning:"他在项目中取得了成果。" },
  { id:113, word:"落ち着く", reading:"おちつく", meaning:"沉着、安定、平息", pos:"動詞", example:"引っ越し先にもだいぶ落ち着いてきた。", exampleMeaning:"搬新家后也逐渐安顿下来了。" },
  { id:114, word:"怯える", reading:"おびえる", meaning:"害怕、恐惧", pos:"動詞", example:"小さな犬が大きな音に怯えている。", exampleMeaning:"小狗被巨大的声音吓到了。" },
  { id:115, word:"折る", reading:"おる", meaning:"折断、弯曲", pos:"動詞", example:"紙を半分に折ってください。", exampleMeaning:"请把纸对折。" },
  { id:116, word:"抱える", reading:"かかえる", meaning:"抱、承担（问题）", pos:"動詞", example:"中小企業は人手不足を抱えている。", exampleMeaning:"中小企业面临人手不足的问题。" },
  { id:117, word:"重なる", reading:"かさなる", meaning:"重叠、赶在一起", pos:"動詞", example:"悪いことは重なるものだ。", exampleMeaning:"坏事总是接踵而至。" },
  { id:118, word:"語る", reading:"かたる", meaning:"讲述、说", pos:"動詞", example:"経験者が自身の体験を語った。", exampleMeaning:"过来人讲述了自己的经历。" },
  { id:119, word:"通う", reading:"かよう", meaning:"定期往返、上学", pos:"動詞", example:"週に三回ジムに通っている。", exampleMeaning:"每周去三次健身房。" },
  { id:120, word:"刻む", reading:"きざむ", meaning:"切细、雕刻、铭刻", pos:"動詞", example:"にんにくをみじん切りに刻む。", exampleMeaning:"把大蒜切成碎末。" },
  { id:121, word:"腐る", reading:"くさる", meaning:"腐烂、腐朽、消沉", pos:"動詞", example:"暑さで食べ物がすぐに腐ってしまった。", exampleMeaning:"天热导致食物很快腐烂了。" },
  { id:122, word:"加える", reading:"くわえる", meaning:"添加、施加、包含", pos:"動詞", example:"塩を少々加えて味を調える。", exampleMeaning:"加少许盐调味。" },
  { id:123, word:"蹴る", reading:"ける", meaning:"踢、踹", pos:"動詞", example:"彼はボールを遠くまで蹴った。", exampleMeaning:"他把球踢得老远。" },
  { id:124, word:"焦がす", reading:"こがす", meaning:"烤焦、烧糊", pos:"動詞", example:"パンをうっかり焦がしてしまった。", exampleMeaning:"一不留神把面包烤焦了。" },
  { id:125, word:"断る", reading:"ことわる", meaning:"拒绝、预先告知", pos:"動詞", example:"事前に断ってから欠席してください。", exampleMeaning:"请事先告知后再缺席。" },
  { id:126, word:"冷ます", reading:"さます", meaning:"冷却、使降温", pos:"動詞", example:"熱いお茶を少し冷ましてから飲む。", exampleMeaning:"把热茶放凉一点再喝。" },
  { id:127, word:"しがみつく", reading:"しがみつく", meaning:"紧紧抓住、不肯离开", pos:"動詞", example:"子供が母親の腕にしがみついた。", exampleMeaning:"孩子紧紧抓住妈妈的胳膊不放。" },
  { id:128, word:"沈む", reading:"しずむ", meaning:"下沉、沉没、消沉", pos:"動詞", example:"彼は失恋で沈んでいる。", exampleMeaning:"他因失恋而消沉。" },
  { id:129, word:"縛る", reading:"しばる", meaning:"捆绑、束缚", pos:"動詞", example:"規則に縛られて自由に動けない。", exampleMeaning:"被规则束缚无法自由行动。" },
  { id:130, word:"冷やす", reading:"ひやす", meaning:"冷却、冰镇", pos:"動詞", example:"ビールを冷蔵庫で冷やしておいた。", exampleMeaning:"把啤酒放冰箱里冰好了。" },
  { id:131, word:"済ます", reading:"すます", meaning:"做完、办完、了结", pos:"動詞", example:"昼ご飯を簡単に済ませて出かけた。", exampleMeaning:"简单吃完午饭就出门了。" },
  { id:132, word:"擦る", reading:"する", meaning:"摩擦、研磨", pos:"動詞", example:"マッチを擦って火をつけた。", exampleMeaning:"擦火柴点着了火。" },
  { id:133, word:"添える", reading:"そえる", meaning:"添加、附带、陪伴", pos:"動詞", example:"肉料理に野菜を添える。", exampleMeaning:"肉菜里配上蔬菜。" },
  { id:134, word:"染まる", reading:"そまる", meaning:"染上、着色、受影响", pos:"動詞", example:"空が夕日に赤く染まった。", exampleMeaning:"天空被夕阳染成了红色。" },
  { id:135, word:"炊く", reading:"たく", meaning:"煮、烧（饭）", pos:"動詞", example:"おいしいご飯を炊くコツを教えて。", exampleMeaning:"教教我煮好吃米饭的诀窍。" },
  { id:136, word:"頼る", reading:"たよる", meaning:"依赖、依靠", pos:"動詞", example:"困った時は友達に頼っていい。", exampleMeaning:"困难时可以依靠朋友。" },
  { id:137, word:"付く", reading:"つく", meaning:"附着、带有、跟随", pos:"動詞", example:"この洗剤はよく汚れが付くのを防ぐ。", exampleMeaning:"这个洗涤剂能很好地防止污渍附着。" },
  { id:138, word:"繋がる", reading:"つながる", meaning:"连接、关联、牵涉", pos:"動詞", example:"努力が成功に繋がった。", exampleMeaning:"努力最终带来了成功。" },
  { id:139, word:"抓まる", reading:"つねる", meaning:"拧、掐", pos:"動詞", example:"いたずらっ子が妹のほっぺたを抓まった。", exampleMeaning:"淘气的孩子掐了妹妹的脸蛋。" },
  { id:140, word:"解く", reading:"とく", meaning:"解开、解答", pos:"動詞", example:"複雑な問題を解くのに時間がかかった。", exampleMeaning:"解开复杂的问题花了时间。" },
  { id:141, word:"飛ばす", reading:"とばす", meaning:"使飞、跳过、飞溅", pos:"動詞", example:"水たまりを車が走って泥を飛ばした。", exampleMeaning:"车开过水坑溅起了泥水。" },
  { id:142, word:"流す", reading:"ながす", meaning:"冲走、播放、流（泪/汗）", pos:"動詞", example:"BGMとしてジャズを流してください。", exampleMeaning:"请作为背景音乐播放爵士乐。" },
  { id:143, word:"握る", reading:"にぎる", meaning:"握、抓、掌握", pos:"動詞", example:"事実を握って交渉に臨んだ。", exampleMeaning:"掌握事实后进行了谈判。" },
  { id:144, word:"抜ける", reading:"ぬける", meaning:"脱落、漏掉、穿过", pos:"動詞", example:"トンネルを抜けると一面の銀世界だった。", exampleMeaning:"穿过隧道后是一片银白世界。" },
  { id:145, word:"狙う", reading:"ねらう", meaning:"瞄准、以…为目标", pos:"動詞", example:"彼はトップの座を狙っている。", exampleMeaning:"他瞄准了第一的位置。" },
  { id:146, word:"残す", reading:"のこす", meaning:"留下、剩余、保留", pos:"動詞", example:"後世に美しい自然を残したい。", exampleMeaning:"想给后世留下美丽的自然。" },
  { id:147, word:"省く", reading:"はぶく", meaning:"省略、节省", pos:"動詞", example:"無駄な説明を省いて要点だけ話す。", exampleMeaning:"省去无用的说明只讲要点。" },
  { id:148, word:"引き受ける", reading:"ひきうける", meaning:"接受、承担、保证", pos:"動詞", example:"新しいプロジェクトのリーダーを引き受けた。", exampleMeaning:"接受了新项目的负责人一职。" },
  { id:149, word:"引っ越す", reading:"ひっこす", meaning:"搬家、迁居", pos:"動詞", example:"来月、大阪に引っ越す予定だ。", exampleMeaning:"下个月计划搬到大阪。" },
  { id:150, word:"広がる", reading:"ひろがる", meaning:"扩大、展开、蔓延", pos:"動詞", example:"うわさがSNSであっという間に広がった。", exampleMeaning:"谣言在社交网络上转眼间就传开了。" },
  { id:151, word:"深める", reading:"ふかめる", meaning:"加深、深化", pos:"動詞", example:"議論を通じて理解を深めることができた。", exampleMeaning:"通过讨论加深了理解。" },
  { id:152, word:"防ぐ", reading:"ふせぐ", meaning:"防止、防御", pos:"動詞", example:"手洗いで感染症を防ぎましょう。", exampleMeaning:"通过洗手来预防传染病吧。" },
  { id:153, word:"震える", reading:"ふるえる", meaning:"发抖、颤抖", pos:"動詞", example:"寒さで体が震えている。", exampleMeaning:"冷得身体在发抖。" },
  { id:154, word:"隔てる", reading:"へだてる", meaning:"隔开、间隔", pos:"動詞", example:"国境が二つの民族を隔てている。", exampleMeaning:"国境隔开了两个民族。" },
  { id:155, word:"吠える", reading:"ほえる", meaning:"吼叫、咆哮、吠", pos:"動詞", example:"夜中に犬がずっと吠えていた。", exampleMeaning:"半夜狗一直在叫。" },
  { id:156, word:"曲げる", reading:"まげる", meaning:"弄弯、歪曲（事实等）", pos:"動詞", example:"金属の棒を力で曲げる。", exampleMeaning:"用力把金属棒弄弯。" },
  { id:157, word:"招く", reading:"まねく", meaning:"招手、邀请、招致", pos:"動詞", example:"不注意が事故を招くことがある。", exampleMeaning:"疏忽有时会招致事故。" },
  { id:158, word:"見送る", reading:"みおくる", meaning:"目送、送别、搁置", pos:"動詞", example:"今回の提案は見送ることになった。", exampleMeaning:"这次的提案被搁置了。" },
  { id:159, word:"結ぶ", reading:"むすぶ", meaning:"连接、缔结、系", pos:"動詞", example:"両国は平和条約を結んだ。", exampleMeaning:"两国缔结了和平条约。" },
  { id:160, word:"設ける", reading:"もうける", meaning:"设置、设立", pos:"動詞", example:"会社は新しい部署を設けた。", exampleMeaning:"公司设立了新的部门。" },
  { id:161, word:"持てる", reading:"もてる", meaning:"受欢迎、吃香", pos:"動詞", example:"彼は女性にもてるタイプだ。", exampleMeaning:"他是受女性欢迎的类型。" },
  { id:162, word:"破る", reading:"やぶる", meaning:"弄破、打破、违反", pos:"動詞", example:"約束を破ってはいけない。", exampleMeaning:"不能违反约定。" },
  { id:163, word:"許す", reading:"ゆるす", meaning:"允许、原谅", pos:"動詞", example:"今回だけは特別に許してあげよう。", exampleMeaning:"这次就特别原谅你吧。" },
  { id:164, word:"溶かす", reading:"とかす", meaning:"溶化、溶解", pos:"動詞", example:"バターを電子レンジで溶かす。", exampleMeaning:"用微波炉融化黄油。" },
  { id:165, word:"引き出す", reading:"ひきだす", meaning:"引出、提取、发挥", pos:"動詞", example:"指導者は部下の能力を引き出すのが上手い。", exampleMeaning:"好的领导善于激发部下的能力。" },
  { id:166, word:"取り消す", reading:"とりけす", meaning:"取消、撤销", pos:"動詞", example:"予約を取り消したいのですが。", exampleMeaning:"我想取消预约。" },
  { id:167, word:"取り組む", reading:"とりくむ", meaning:"致力于、埋头苦干", pos:"動詞", example:"環境問題に真剣に取り組んでいる。", exampleMeaning:"正认真地致力于环境问题。" },
  { id:168, word:"突き当たる", reading:"つきあたる", meaning:"走到尽头、碰到（问题）", pos:"動詞", example:"新しい問題に突き当たった。", exampleMeaning:"碰上了新问题。" },
  { id:169, word:"振り返る", reading:"ふりかえる", meaning:"回头看、回顾", pos:"動詞", example:"今年一年を振り返ってみよう。", exampleMeaning:"回顾一下这一年吧。" },
  { id:170, word:"結びつく", reading:"むすびつく", meaning:"相联系、相结合", pos:"動詞", example:"努力が成果に結びついた。", exampleMeaning:"努力带来了成果。" },
  { id:171, word:"受け止める", reading:"うけとめる", meaning:"接住、理解并接受", pos:"動詞", example:"批判を真剣に受け止めて改善する。", exampleMeaning:"认真对待批评并改进。" },
  { id:172, word:"見直す", reading:"みなおす", meaning:"重新审视、重新评价", pos:"動詞", example:"計画を最初から見直す必要がある。", exampleMeaning:"需要从头重新审视计划。" },
  { id:173, word:"見分ける", reading:"みわける", meaning:"分辨、识别", pos:"動詞", example:"偽物と本物を見分けるのは難しい。", exampleMeaning:"分辨真假货很难。" },
  { id:174, word:"言い換える", reading:"いいかえる", meaning:"换句话说、改口", pos:"動詞", example:"難しい言葉を優しい表現に言い換えてください。", exampleMeaning:"请把难词换成简单的说法。" },
  { id:175, word:"立ち上がる", reading:"たちあがる", meaning:"站起来、奋起", pos:"動詞", example:"失敗から立ち上がって前に進もう。", exampleMeaning:"从失败中站起向前迈进吧。" },
  { id:176, word:"支払う", reading:"しはらう", meaning:"支付", pos:"動詞", example:"家賃は毎月自動で支払われる。", exampleMeaning:"房租每月自动支付。" },
  { id:177, word:"話し合う", reading:"はなしあう", meaning:"协商、商量", pos:"動詞", example:"家族でよく話し合って決めよう。", exampleMeaning:"和家人好好商量再决定吧。" },
  { id:178, word:"乗り越える", reading:"のりこえる", meaning:"跨越、克服", pos:"動詞", example:"困難を乗り越えて成長した。", exampleMeaning:"克服困难后成长了。" },
  { id:179, word:"出会う", reading:"であう", meaning:"遇见、邂逅", pos:"動詞", example:"旅先で素敵な人に出会った。", exampleMeaning:"旅途中遇到了很好的人。" },
  { id:180, word:"思い込む", reading:"おもいこむ", meaning:"深信、认定", pos:"動詞", example:"彼は自分が正しいと思い込んでいる。", exampleMeaning:"他坚信自己是对的。" },
  { id:181, word:"追いつく", reading:"おいつく", meaning:"追上、赶上", pos:"動詞", example:"必死に走ったが彼に追いつけなかった。", exampleMeaning:"拼命跑但还是没追上他。" },
  { id:182, word:"取り入れる", reading:"とりいれる", meaning:"采用、引进、收割", pos:"動詞", example:"新しい技術を積極的に取り入れる。", exampleMeaning:"积极引进新技术。" },
  { id:183, word:"見かける", reading:"みかける", meaning:"看到、偶尔看见", pos:"動詞", example:"よく駅前であの人を見かける。", exampleMeaning:"经常在车站前看到那个人。" },
  { id:184, word:"聞き取る", reading:"ききとる", meaning:"听清楚、听懂", pos:"動詞", example:"雑音が多くて話が聞き取れなかった。", exampleMeaning:"噪音太大没听清说话。" },
  { id:185, word:"話しかける", reading:"はなしかける", meaning:"搭话、打招呼", pos:"動詞", example:"知らない人に道で話しかけられた。", exampleMeaning:"在路上被陌生人搭话了。" },
  { id:186, word:"引き返す", reading:"ひきかえす", meaning:"返回、折回", pos:"動詞", example:"忘れ物に気づいて家に引き返した。", exampleMeaning:"发现忘了东西就折回家了。" },
  { id:187, word:"結びつける", reading:"むすびつける", meaning:"联系、结合", pos:"動詞", example:"理論と実践を結びつけて考える。", exampleMeaning:"将理论和实践联系起来思考。" },
  { id:188, word:"立ち止まる", reading:"たちどまる", meaning:"停下脚步、驻足", pos:"動詞", example:"美しい夕日に思わず立ち止まった。", exampleMeaning:"被美丽的夕阳吸引不由得停下了脚步。" },
  { id:189, word:"通り過ぎる", reading:"とおりすぎる", meaning:"经过、走过", pos:"動詞", example:"バスが停留所を通り過ぎてしまった。", exampleMeaning:"巴士开过了公交站。" },
  { id:190, word:"受け入れる", reading:"うけいれる", meaning:"接受、接纳", pos:"動詞", example:"多様な価値観を受け入れる社会にしたい。", exampleMeaning:"想建成一个接纳多元价值观的社会。" },
  { id:191, word:"繰り返す", reading:"くりかえす", meaning:"反复、重复", pos:"動詞", example:"同じ失敗を繰り返さないように。", exampleMeaning:"注意不要重复同样的失败。" },
  { id:192, word:"取り出す", reading:"とりだす", meaning:"取出、拿出", pos:"動詞", example:"鞄から名刺を取り出して渡した。", exampleMeaning:"从包里取出名片递了过去。" },
  { id:193, word:"片付ける", reading:"かたづける", meaning:"收拾、整理、解决", pos:"動詞", example:"部屋を片付けてから出かけよう。", exampleMeaning:"收拾好房间再出门吧。" },
  { id:194, word:"近づく", reading:"ちかづく", meaning:"靠近、接近、临近", pos:"動詞", example:"試験が近づいてきて焦っている。", exampleMeaning:"考试临近了有点焦虑。" },
  { id:195, word:"名付ける", reading:"なづける", meaning:"命名、起名", pos:"動詞", example:"生まれた子供に「桜」と名付けた。", exampleMeaning:"给出生的小孩取名「樱」。" },
  { id:196, word:"読み取る", reading:"よみとる", meaning:"读出来、领会、解读", pos:"動詞", example:"相手の気持ちを表情から読み取る。", exampleMeaning:"从表情中读出对方的心情。" },
  { id:197, word:"取り戻す", reading:"とりもどす", meaning:"取回、恢复", pos:"動詞", example:"休養を取って元気を取り戻した。", exampleMeaning:"休息后恢复了精神。" },
  { id:198, word:"縮める", reading:"ちぢめる", meaning:"缩短、缩小", pos:"動詞", example:"納期を一週間縮めてほしいと言われた。", exampleMeaning:"被要求把交货期缩短一周。" },
  { id:199, word:"広める", reading:"ひろめる", meaning:"推广、传播、扩大", pos:"動詞", example:"SNSで情報を広めるのは早い。", exampleMeaning:"通过社交网络传播信息很快。" },
  { id:200, word:"励ます", reading:"はげます", meaning:"鼓励、激励", pos:"動詞", example:"友達が落ち込んでいる時に励ました。", exampleMeaning:"朋友消沉时安慰鼓励了他。" },
  { id:201, word:"改める", reading:"あらためる", meaning:"改、改正、重新", pos:"動詞", example:"態度を改めてもう一度挑戦する。", exampleMeaning:"改正态度再次挑战。" },
  { id:202, word:"恨む", reading:"うらむ", meaning:"怨恨、抱怨", pos:"動詞", example:"自分を恨んでも仕方がない。", exampleMeaning:"怨恨自己也没有用。" },
  { id:203, word:"老いる", reading:"おいる", meaning:"衰老、年老", pos:"動詞", example:"老いてもなお好奇心を失わない。", exampleMeaning:"即便年老也依然不失好奇心。" },
  { id:204, word:"耕す", reading:"たがやす", meaning:"耕作", pos:"動詞", example:"畑をトラクターで耕した。", exampleMeaning:"用拖拉机耕作田地。" },
  { id:205, word:"蓄える", reading:"たくわえる", meaning:"积蓄、储存", pos:"動詞", example:"老後に備えて貯金を蓄える。", exampleMeaning:"为养老而积蓄存款。" },
  { id:206, word:"保つ", reading:"たもつ", meaning:"保持、维持", pos:"動詞", example:"冷静さを保って対応しよう。", exampleMeaning:"保持冷静来应对吧。" },
  { id:207, word:"契る", reading:"ちぎる", meaning:"誓约、盟誓", pos:"動詞", example:"二人は永遠の愛を契った。", exampleMeaning:"两人盟誓了永恒的爱情。" },
  { id:208, word:"尽きる", reading:"つきる", meaning:"用尽、完了", pos:"動詞", example:"そろそろ話のネタが尽きてきた。", exampleMeaning:"说话的话题快要用尽了。" },
  { id:209, word:"釣る", reading:"つる", meaning:"钓、引诱", pos:"動詞", example:"休日に友達と海に魚を釣りに行く。", exampleMeaning:"假日和朋友去海边钓鱼。" },
  { id:210, word:"整える", reading:"ととのえる", meaning:"整理、调整、谈妥", pos:"動詞", example:"会議の前に資料を整えておく。", exampleMeaning:"开会前把资料整理好。" },
  { id:211, word:"眺める", reading:"ながめる", meaning:"眺望、凝视", pos:"動詞", example:"窓からぼんやりと景色を眺めていた。", exampleMeaning:"透过窗户呆呆地望着景色。" },
  { id:212, word:"悩む", reading:"なやむ", meaning:"烦恼、苦恼", pos:"動詞", example:"進路について悩んでいる。", exampleMeaning:"为未来的出路而烦恼。" },
  { id:213, word:"滲む", reading:"にじむ", meaning:"渗、洇", pos:"動詞", example:"雨でインクが滲んで読めなくなった。", exampleMeaning:"被雨水浸湿墨水洇了看不清了。" },
  { id:214, word:"計る", reading:"はかる", meaning:"测量、计算、谋求", pos:"動詞", example:"タイミングを計って発言する。", exampleMeaning:"找准时机发言。" },
  { id:215, word:"果たす", reading:"はたす", meaning:"完成、实现", pos:"動詞", example:"彼は見事に使命を果たした。", exampleMeaning:"他出色地完成了使命。" },
  { id:216, word:"干す", reading:"ほす", meaning:"晒干、晾干", pos:"動詞", example:"布団を天日で干すとふかふかになる。", exampleMeaning:"被褥在太阳下晒过后蓬松柔软。" },
  { id:217, word:"参る", reading:"まいる", meaning:"去/来（自谦）、认输、吃不消", pos:"動詞", example:"この暑さには本当に参ってしまいます。", exampleMeaning:"这热天真让人受不了。" },
  { id:218, word:"巡る", reading:"めぐる", meaning:"环绕、循环、围绕", pos:"動詞", example:"この問題を巡って様々な意見が出た。", exampleMeaning:"围绕这个问题出现了各种意见。" },
  { id:219, word:"揉める", reading:"もめる", meaning:"争执、纠纷", pos:"動詞", example:"遺産相続で親族が揉めている。", exampleMeaning:"亲属在遗产继承上发生了纠纷。" },
  { id:220, word:"蘇る", reading:"よみがえる", meaning:"苏醒、复活、重现", pos:"動詞", example:"古い写真を見て記憶が蘇った。", exampleMeaning:"看着老照片记忆又重现了。" },

  // === 名詞（続き） ===
  { id:221, word:"合図", reading:"あいず", meaning:"信号、暗号", pos:"名詞", example:"手を振って合図を送る。", exampleMeaning:"挥手发信号。" },
  { id:222, word:"行方", reading:"ゆくえ", meaning:"去向、下落", pos:"名詞", example:"彼の行方がわからなくなった。", exampleMeaning:"他的下落不明了。" },
  { id:223, word:"屋根", reading:"やね", meaning:"屋顶", pos:"名詞", example:"台風で屋根が飛ばされた。", exampleMeaning:"台风把屋顶刮飞了。" },
  { id:224, word:"枠", reading:"わく", meaning:"框、范围、限额", pos:"名詞", example:"予算の枠を超えてしまった。", exampleMeaning:"超出了预算范围。" },
  { id:225, word:"割合", reading:"わりあい", meaning:"比例、比率", pos:"名詞", example:"男性と女性の割合は半々だ。", exampleMeaning:"男女比例各一半。" },
  { id:226, word:"恩恵", reading:"おんけい", meaning:"恩惠、好处", pos:"名詞", example:"文明の恩恵を受けて生活している。", exampleMeaning:"我们享受着文明带来的恩惠生活。" },
  { id:227, word:"過程", reading:"かてい", meaning:"过程", pos:"名詞", example:"結果よりも過程が大切だと思う。", exampleMeaning:"我认为过程比结果更重要。" },
  { id:228, word:"記号", reading:"きごう", meaning:"符号、记号", pos:"名詞", example:"地図の記号の意味を覚える。", exampleMeaning:"记住地图上符号的意思。" },
  { id:229, word:"傾向", reading:"けいこう", meaning:"倾向、趋势", pos:"名詞", example:"若者の読書離れの傾向が続いている。", exampleMeaning:"年轻人远离读书的倾向在持续。" },
  { id:230, word:"欠点", reading:"けってん", meaning:"缺点、短处", pos:"名詞", example:"誰にでも欠点の一つや二つはある。", exampleMeaning:"谁都有那么一两个缺点。" },
  { id:231, word:"件", reading:"けん", meaning:"件、事、项", pos:"名詞", example:"その件についてはまた後で話しましょう。", exampleMeaning:"那件事我们回头再谈。" },
  { id:232, word:"原稿", reading:"げんこう", meaning:"原稿、稿子", pos:"名詞", example:"明日までに原稿を仕上げなければ。", exampleMeaning:"明天之前得把稿子写完。" },
  { id:233, word:"合計", reading:"ごうけい", meaning:"合计、总计", pos:"名詞", example:"合計でいくらになりますか。", exampleMeaning:"合计多少钱？" },
  { id:234, word:"差", reading:"さ", meaning:"差、差异、差额", pos:"名詞", example:"実力の差はそれほど大きくない。", exampleMeaning:"实力的差距没那么大。" },
  { id:235, word:"左右", reading:"さゆう", meaning:"左右、支配、影响", pos:"名詞", example:"気候が農作物の出来を左右する。", exampleMeaning:"气候左右着农作物的收成。" },
  { id:236, word:"姿勢", reading:"しせい", meaning:"姿势、态度", pos:"名詞", example:"前向きな姿勢で取り組んでほしい。", exampleMeaning:"希望以积极的态度去对待。" },
  { id:237, word:"手段", reading:"しゅだん", meaning:"手段、方法", pos:"名詞", example:"目的のためには手段を選ばない。", exampleMeaning:"为了目的不择手段。" },
  { id:238, word:"条件", reading:"じょうけん", meaning:"条件", pos:"名詞", example:"契約の条件をもう一度確認する。", exampleMeaning:"再确认一下合同条件。" },
  { id:239, word:"人口", reading:"じんこう", meaning:"人口", pos:"名詞", example:"日本の人口は減少し続けている。", exampleMeaning:"日本的人口在持续减少。" },
  { id:240, word:"制度", reading:"せいど", meaning:"制度", pos:"名詞", example:"新しい制度の導入が検討されている。", exampleMeaning:"正在研究引入新制度。" },
  { id:241, word:"世代", reading:"せだい", meaning:"世代、辈", pos:"名詞", example:"若い世代の考え方は大きく変わった。", exampleMeaning:"年轻一代的想法发生了很大变化。" },
  { id:242, word:"全体", reading:"ぜんたい", meaning:"整体、全体", pos:"名詞", example:"全体のバランスを見て判断する。", exampleMeaning:"看整体平衡来判断。" },
  { id:243, word:"対応", reading:"たいおう", meaning:"对应、应付、相适应", pos:"名詞", example:"クレームに迅速に対応する。", exampleMeaning:"迅速应对投诉。" },
  { id:244, word:"段階", reading:"だんかい", meaning:"阶段、步骤", pos:"名詞", example:"次の段階に進む準備ができた。", exampleMeaning:"进入了下一阶段的准备。" },
  { id:245, word:"地域", reading:"ちいき", meaning:"地域、地区", pos:"名詞", example:"地域のボランティア活動に参加する。", exampleMeaning:"参加地区的志愿者活动。" },
  { id:246, word:"注目", reading:"ちゅうもく", meaning:"注目、关注", pos:"名詞", example:"彼の才能が注目を集めている。", exampleMeaning:"他的才能引起了关注。" },
  { id:247, word:"手順", reading:"てじゅん", meaning:"步骤、程序", pos:"名詞", example:"正しい手順で操作してください。", exampleMeaning:"请按正确的步骤操作。" },
  { id:248, word:"特徴", reading:"とくちょう", meaning:"特征、特点", pos:"名詞", example:"この地域の方言には独特の特徴がある。", exampleMeaning:"这个地区的方言有独特的特征。" },
  { id:249, word:"範囲", reading:"はんい", meaning:"范围", pos:"名詞", example:"調査の範囲を広げて詳しく調べよう。", exampleMeaning:"扩大调查范围详细调查吧。" },
  { id:250, word:"表", reading:"ひょう", meaning:"表、表格", pos:"名詞", example:"データを表にまとめてください。", exampleMeaning:"请把数据整理成表格。" },
  { id:251, word:"頻度", reading:"ひんど", meaning:"频率", pos:"名詞", example:"地震の頻度が高くなっていると感じる。", exampleMeaning:"感觉地震的频率变高了。" },
  { id:252, word:"雰囲気", reading:"ふんいき", meaning:"气氛、氛围", pos:"名詞", example:"この店の雰囲気がとても好きだ。", exampleMeaning:"我很喜欢这家店的氛围。" },
  { id:253, word:"方針", reading:"ほうしん", meaning:"方针", pos:"名詞", example:"会社の方針に従って行動する。", exampleMeaning:"按照公司的方针行动。" },
  { id:254, word:"身分", reading:"みぶん", meaning:"身份", pos:"名詞", example:"身分を証明できるものを持ってきてください。", exampleMeaning:"请带能证明身份的东西来。" },
  { id:255, word:"要望", reading:"ようぼう", meaning:"要求、愿望", pos:"名詞", example:"お客様の要望に応えるよう努力します。", exampleMeaning:"我们会努力满足顾客的要求。" },
  { id:256, word:"率", reading:"りつ", meaning:"率、比率", pos:"名詞", example:"合格率は年々上がっている。", exampleMeaning:"合格率每年都在上升。" },
  { id:257, word:"例外", reading:"れいがい", meaning:"例外", pos:"名詞", example:"例外なくルールを守ってください。", exampleMeaning:"请无例外地遵守规则。" },
  { id:258, word:"話題", reading:"わだい", meaning:"话题", pos:"名詞", example:"その映画は最近一番の話題作だ。", exampleMeaning:"那部电影是近来最热门的话题作品。" },
  { id:259, word:"要素", reading:"ようそ", meaning:"要素、因素", pos:"名詞", example:"成功には運も大事な要素だ。", exampleMeaning:"成功中运气也是重要的因素。" },
  { id:260, word:"結論", reading:"けつろん", meaning:"结论", pos:"名詞", example:"議論の末に一つの結論に達した。", exampleMeaning:"讨论之后得出了一个结论。" },
  { id:261, word:"経過", reading:"けいか", meaning:"经过、过程", pos:"名詞", example:"手術後の経過は順調です。", exampleMeaning:"手术后的恢复过程很顺利。" },
  { id:262, word:"詳細", reading:"しょうさい", meaning:"详细", pos:"名詞", example:"詳細は後ほどメールでお知らせします。", exampleMeaning:"详细情况稍后邮件通知。" },
  { id:263, word:"措置", reading:"そち", meaning:"措施、处理", pos:"名詞", example:"政府は緊急の措置を取った。", exampleMeaning:"政府采取了紧急措施。" },
  { id:264, word:"手配", reading:"てはい", meaning:"安排、筹备", pos:"名詞", example:"旅行の手配は全部彼がやってくれた。", exampleMeaning:"旅行的安排全是他帮我做的。" },
  { id:265, word:"難点", reading:"なんてん", meaning:"难点、缺点", pos:"名詞", example:"この計画の難点はコストが高いことだ。", exampleMeaning:"这个计划的难点是成本太高。" },
  { id:266, word:"発想", reading:"はっそう", meaning:"构思、主意", pos:"名詞", example:"柔軟な発想で問題を解決しよう。", exampleMeaning:"用灵活的构思来解决问题吧。" },
  { id:267, word:"方策", reading:"ほうさく", meaning:"方针、对策", pos:"名詞", example:"有効な方策を練る必要がある。", exampleMeaning:"需要研究有效的对策。" },
  { id:268, word:"模様", reading:"もよう", meaning:"花纹、样子、情况", pos:"名詞", example:"会議は長引きそうな模様だ。", exampleMeaning:"看样子会议要拖延了。" },
  { id:269, word:"予感", reading:"よかん", meaning:"预感", pos:"名詞", example:"今日はいいことがありそうな予感がする。", exampleMeaning:"有种今天会有好事的预感。" },
  { id:270, word:"枠組み", reading:"わくぐみ", meaning:"框架、架构", pos:"名詞", example:"新しい枠組みで交渉を進める。", exampleMeaning:"在新的框架下推进谈判。" },
  { id:271, word:"愛想", reading:"あいそ", meaning:"亲切、和蔼", pos:"名詞", example:"あの店員は愛想がいい。", exampleMeaning:"那个店员态度很亲切。" },
  { id:272, word:"意欲", reading:"いよく", meaning:"热情、积极性", pos:"名詞", example:"新しいことに挑戦する意欲がある。", exampleMeaning:"有挑战新事物的积极性。" },
  { id:273, word:"売上", reading:"うりあげ", meaning:"销售额", pos:"名詞", example:"今月の売上は目標を上回った。", exampleMeaning:"本月销售额超过了目标。" },
  { id:274, word:"縁", reading:"えん", meaning:"缘分、关系", pos:"名詞", example:"不思議な縁で二人は出会った。", exampleMeaning:"两人因不可思议的缘分而相遇。" },
  { id:275, word:"概略", reading:"がいりゃく", meaning:"概要、梗概", pos:"名詞", example:"企画の概略を説明してください。", exampleMeaning:"请说明一下企划的概要。" },
  { id:276, word:"規定", reading:"きてい", meaning:"规定", pos:"名詞", example:"これは社内規定で決められている。", exampleMeaning:"这是公司内部规定决定的。" },
  { id:277, word:"業績", reading:"ぎょうせき", meaning:"业绩、成绩", pos:"名詞", example:"今年は業績が大幅に向上した。", exampleMeaning:"今年业绩大幅提升了。" },
  { id:278, word:"口座", reading:"こうざ", meaning:"账户、户头", pos:"名詞", example:"銀行に新しい口座を開設した。", exampleMeaning:"在银行开了新账户。" },
  { id:279, word:"誤差", reading:"ごさ", meaning:"误差", pos:"名詞", example:"測定には多少の誤差が含まれる。", exampleMeaning:"测量包含一些误差。" },
  { id:280, word:"実態", reading:"じったい", meaning:"实际情况", pos:"名詞", example:"アンケートで消費者の実態を調査する。", exampleMeaning:"通过问卷调查消费者的实际情况。" },
  { id:281, word:"先頭", reading:"せんとう", meaning:"前头、最前列", pos:"名詞", example:"彼は行列の先頭に並んでいた。", exampleMeaning:"他排在队伍的最前面。" },
  { id:282, word:"対処", reading:"たいしょ", meaning:"处理、应付", pos:"名詞", example:"トラブルに冷静に対処する。", exampleMeaning:"冷静地处理故障。" },
  { id:283, word:"手分け", reading:"てわけ", meaning:"分工、分头", pos:"名詞", example:"手分けして会場の準備をしよう。", exampleMeaning:"分工准备会场吧。" },
  { id:284, word:"認識", reading:"にんしき", meaning:"认识、理解", pos:"名詞", example:"問題の重要性を認識してほしい。", exampleMeaning:"希望你能认识到问题的重要性。" },
  { id:285, word:"本場", reading:"ほんば", meaning:"原产地、正宗", pos:"名詞", example:"本場の韓国料理を食べてみたい。", exampleMeaning:"想尝尝正宗的韩国料理。" },
  { id:286, word:"予測", reading:"よそく", meaning:"预测", pos:"名詞", example:"専門家の予測を大きく上回る結果だった。", exampleMeaning:"结果是远超专家预测的。" },
  { id:287, word:"分析", reading:"ぶんせき", meaning:"分析", pos:"名詞", example:"データを詳しく分析する必要がある。", exampleMeaning:"需要详细分析数据。" },
  { id:288, word:"向上", reading:"こうじょう", meaning:"提高、进步", pos:"名詞", example:"サービスの質の向上に努めています。", exampleMeaning:"致力于提高服务质量。" },
  { id:289, word:"偏見", reading:"へんけん", meaning:"偏见", pos:"名詞", example:"偏見を持たずに人と接することが大切だ。", exampleMeaning:"不带偏见地待人很重要。" },
  { id:290, word:"恩返し", reading:"おんがえし", meaning:"报恩", pos:"名詞", example:"いつか育ててくれた両親に恩返しがしたい。", exampleMeaning:"有朝一日想报答养育自己的父母。" },
  { id:291, word:"基盤", reading:"きばん", meaning:"基础、底座", pos:"名詞", example:"事業を拡大するための基盤を固める。", exampleMeaning:"巩固扩大事业的基础。" },
  { id:292, word:"隙間", reading:"すきま", meaning:"缝隙、空闲", pos:"名詞", example:"仕事の隙間にコーヒーを一杯飲む。", exampleMeaning:"工作的间隙喝一杯咖啡。" },
  { id:293, word:"手間", reading:"てま", meaning:"工夫、劳力、时间", pos:"名詞", example:"手間をかけて育てた野菜は美味しい。", exampleMeaning:"花了工夫种的蔬菜很好吃。" },
  { id:294, word:"願書", reading:"がんしょ", meaning:"申请书", pos:"名詞", example:"大学に願書を提出した。", exampleMeaning:"向大学提交了申请书。" },
  { id:295, word:"芝生", reading:"しばふ", meaning:"草坪", pos:"名詞", example:"公園の芝生でピクニックを楽しんだ。", exampleMeaning:"在公园的草坪上享受了野餐。" },
  { id:296, word:"対立", reading:"たいりつ", meaning:"对立", pos:"名詞", example:"二つのグループの意見が対立している。", exampleMeaning:"两个小组的意见对立着。" },
  { id:297, word:"時点", reading:"じてん", meaning:"时间点、时点", pos:"名詞", example:"現時点ではまだ何も決まっていません。", exampleMeaning:"目前还什么都还没有决定。" },
  { id:298, word:"販売", reading:"はんばい", meaning:"销售", pos:"名詞", example:"新商品は来月から販売を開始する。", exampleMeaning:"新产品从下月开始发售。" },
  { id:299, word:"項目", reading:"こうもく", meaning:"项目、条目", pos:"名詞", example:"チェックリストの項目を一つずつ確認する。", exampleMeaning:"逐条确认核对清单的条目。" },
  { id:300, word:"要旨", reading:"ようし", meaning:"要旨、要点", pos:"名詞", example:"話の要旨をまとめて報告してください。", exampleMeaning:"请归纳讲话要点进行汇报。" },

  // === 形容詞 ===
  { id:301, word:"怪しい", reading:"あやしい", meaning:"可疑的、靠不住的", pos:"形容詞", example:"あの人はどうも怪しい。", exampleMeaning:"那个人总觉得很可疑。" },
  { id:302, word:"勇ましい", reading:"いさましい", meaning:"勇敢的、勇猛的", pos:"形容詞", example:"消防士たちの勇ましい姿に感動した。", exampleMeaning:"消防员们勇敢的样子让人感动。" },
  { id:303, word:"薄暗い", reading:"うすぐらい", meaning:"微暗的、昏暗的", pos:"形容詞", example:"薄暗い部屋で本を読むと目が悪くなる。", exampleMeaning:"在昏暗的房间里看书会坏眼睛。" },
  { id:304, word:"おめでたい", reading:"おめでたい", meaning:"可喜可贺的、老实过头的", pos:"形容詞", example:"彼もずいぶんおめでたい性格だね。", exampleMeaning:"他真是想得太天真了呢。" },
  { id:305, word:"堅苦しい", reading:"かたくるしい", meaning:"拘泥形式的、古板的", pos:"形容詞", example:"堅苦しい挨拶は抜きにしましょう。", exampleMeaning:"免去拘泥形式的客套话吧。" },
  { id:306, word:"気の毒", reading:"きのどく", meaning:"可怜的、过意不去的", pos:"形容詞", example:"彼が事故にあったと聞いて気の毒に思った。", exampleMeaning:"听说他出了事故觉得很可怜。" },
  { id:307, word:"詳しい", reading:"くわしい", meaning:"详细的、精通的", pos:"形容詞", example:"彼は日本の歴史に詳しい。", exampleMeaning:"他精通日本历史。" },
  { id:308, word:"快い", reading:"こころよい", meaning:"爽快的、愉快的", pos:"形容詞", example:"快い風が窓から吹き込んできた。", exampleMeaning:"清爽的风从窗外吹了进来。" },
  { id:309, word:"騒がしい", reading:"さわがしい", meaning:"吵闹的、喧嚣的", pos:"形容詞", example:"隣の部屋が騒がしくて眠れない。", exampleMeaning:"隔壁房间太吵了睡不着。" },
  { id:310, word:"渋い", reading:"しぶい", meaning:"涩的、素雅的、有品位的", pos:"形容詞", example:"彼は渋い色のスーツを着ている。", exampleMeaning:"他穿着一套色调素雅的西装。" },
  { id:311, word:"好ましい", reading:"このましい", meaning:"令人满意的、可喜的", pos:"形容詞", example:"この傾向は好ましいものではない。", exampleMeaning:"这个倾向并不令人满意。" },
  { id:312, word:"頼もしい", reading:"たのもしい", meaning:"可靠的、靠得住的", pos:"形容詞", example:"新人なのに頼もしい存在だ。", exampleMeaning:"虽是新人但是个可靠的存在。" },
  { id:313, word:"乏しい", reading:"とぼしい", meaning:"缺乏的、贫穷的", pos:"形容詞", example:"この地域は水資源が乏しい。", exampleMeaning:"这个地区水资源匮乏。" },
  { id:314, word:"情けない", reading:"なさけない", meaning:"可怜的、可耻的、没出息的", pos:"形容詞", example:"こんなミスをするなんて情けない。", exampleMeaning:"犯这种错误真是太丢人了。" },
  { id:315, word:"憎い", reading:"にくい", meaning:"可憎的、可恨的", pos:"形容詞", example:"彼の裏切りが憎い。", exampleMeaning:"他的背叛令人憎恨。" },
  { id:316, word:"ばかばかしい", reading:"ばかばかしい", meaning:"愚蠢的、无聊的", pos:"形容詞", example:"そんな噂はばかばかしくて相手にできない。", exampleMeaning:"那种谣言太无聊了不值得理会。" },
  { id:317, word:"久しい", reading:"ひさしい", meaning:"很久的、久违的", pos:"形容詞", example:"久しぶりに旧友に再会した。", exampleMeaning:"时隔很久与老友重逢了。" },
  { id:318, word:"相応しい", reading:"ふさわしい", meaning:"合适的、相称的", pos:"形容詞", example:"この賞は彼に相応しいと思う。", exampleMeaning:"我觉得这个奖适合他。" },
  { id:319, word:"珍しい", reading:"めずらしい", meaning:"稀罕的、少见的", pos:"形容詞", example:"こんなに大雪が降るのは珍しい。", exampleMeaning:"下这么大的雪很少见。" },
  { id:320, word:"容易い", reading:"たやすい", meaning:"容易的、简单的", pos:"形容詞", example:"言うのはたやすいが、実行は難しい。", exampleMeaning:"说起来容易做起来难。" },
  { id:321, word:"図々しい", reading:"ずうずうしい", meaning:"厚颜无耻的", pos:"形容詞", example:"無料で手伝えなんて図々しい話だ。", exampleMeaning:"免费帮忙什么的太厚颜无耻了。" },
  { id:322, word:"清々しい", reading:"すがすがしい", meaning:"清爽的、清新的", pos:"形容詞", example:"朝の空気は清々しくて気持ちがいい。", exampleMeaning:"早晨的空气清爽宜人。" },
  { id:323, word:"鋭い", reading:"するどい", meaning:"锐利的、敏锐的", pos:"形容詞", example:"彼女の観察力はとても鋭い。", exampleMeaning:"她的观察力非常敏锐。" },
  { id:324, word:"逞しい", reading:"たくましい", meaning:"健壮的、坚强的", pos:"形容詞", example:"彼は困難にも逞しく立ち向かった。", exampleMeaning:"他坚强地面对了困难。" },
  { id:325, word:"煙たい", reading:"けむたい", meaning:"呛人的、不易亲近的", pos:"形容詞", example:"タバコの煙が煙たくて咳が出た。", exampleMeaning:"香烟的烟呛得人咳嗽。" },
  { id:326, word:"甚だしい", reading:"はなはだしい", meaning:"非常、太过分的", pos:"形容詞", example:"それは甚だしく失礼な態度だ。", exampleMeaning:"那是极其无礼的态度。" },
  { id:327, word:"等しい", reading:"ひとしい", meaning:"相等的、一样的", pos:"形容詞", example:"それは詐欺に等しい行為だ。", exampleMeaning:"那是等同于欺诈的行为。" },
  { id:328, word:"貧しい", reading:"まずしい", meaning:"贫穷的、贫乏的", pos:"形容詞", example:"貧しい家庭に生まれ育った。", exampleMeaning:"在贫穷的家庭出生成长。" },
  { id:329, word:"醜い", reading:"みにくい", meaning:"丑的、难看的、丑陋的", pos:"形容詞", example:"争う姿は人間として醜いと思う。", exampleMeaning:"我觉得争吵的样子作为一个人来讲是丑陋的。" },
  { id:330, word:"空しい", reading:"むなしい", meaning:"空虚的、徒劳的", pos:"形容詞", example:"努力が報われず空しい気持ちになった。", exampleMeaning:"努力没有回报感到空虚。" },
  { id:331, word:"喧しい", reading:"やかましい", meaning:"吵闹的、烦人的、挑剔的", pos:"形容詞", example:"この店の客は味に喧しい人が多い。", exampleMeaning:"这家店的客人对味道挑剔的人很多。" },
  { id:332, word:"儚い", reading:"はかない", meaning:"短暂的、虚幻的", pos:"形容詞", example:"人生は儚いからこそ美しい。", exampleMeaning:"人生正因短暂才美丽。" },
  { id:333, word:"緩やか", reading:"ゆるやか", meaning:"缓慢的、宽松的、温和的", pos:"形容詞", example:"坂道が緩やかになって歩きやすくなった。", exampleMeaning:"坡道变缓了好走了。" },
  { id:334, word:"爽やか", reading:"さわやか", meaning:"爽朗的、清爽的", pos:"形容詞", example:"今日は爽やかな秋晴れだ。", exampleMeaning:"今天是清爽的秋日晴天。" },
  { id:335, word:"細やか", reading:"こまやか", meaning:"细致的、细腻的、深厚的", pos:"形容詞", example:"先生の細やかな指導に感謝します。", exampleMeaning:"感谢老师细致的指导。" },
  { id:336, word:"滑らか", reading:"なめらか", meaning:"光滑的、流畅的", pos:"形容詞", example:"この布団の肌触りは滑らかで気持ちいい。", exampleMeaning:"这床被子的触感光滑舒适。" },
  { id:337, word:"朗らか", reading:"ほがらか", meaning:"开朗的、愉快的", pos:"形容詞", example:"彼女の朗らかな笑顔に癒される。", exampleMeaning:"被她开朗的笑容治愈了。" },
  { id:338, word:"華やか", reading:"はなやか", meaning:"华丽的、华美的", pos:"形容詞", example:"会場は華やかな雰囲気に包まれていた。", exampleMeaning:"会场笼罩在华美的气氛中。" },
  { id:339, word:"密か", reading:"ひそか", meaning:"秘密的、偷偷的", pos:"形容詞", example:"彼女に密かな恋心を抱いている。", exampleMeaning:"暗暗对她抱有恋慕之情。" },
  { id:340, word:"健やか", reading:"すこやか", meaning:"健康的、健壮的", pos:"形容詞", example:"子供たちが健やかに育つことを願う。", exampleMeaning:"祝愿孩子们健康成长。" },

  // === 副詞 ===
  { id:341, word:"あらかじめ", reading:"あらかじめ", meaning:"预先、事先", pos:"副詞", example:"あらかじめ資料を読んでおいてください。", exampleMeaning:"请事先阅读资料。" },
  { id:342, word:"一斉に", reading:"いっせいに", meaning:"一齐、同时", pos:"副詞", example:"学生たちが一斉に立ち上がった。", exampleMeaning:"学生们一齐站了起来。" },
  { id:343, word:"いよいよ", reading:"いよいよ", meaning:"终于、更加、紧要关头", pos:"副詞", example:"いよいよ明日が試験本番だ。", exampleMeaning:"终于明天就是正式考试了。" },
  { id:344, word:"概ね", reading:"おおむね", meaning:"大致、大体上", pos:"副詞", example:"工事は概ね予定通りに進んでいる。", exampleMeaning:"工程大体上按计划推进。" },
  { id:345, word:"恐らく", reading:"おそらく", meaning:"恐怕、大概", pos:"副詞", example:"恐らく彼は今日は来ないだろう。", exampleMeaning:"恐怕他今天不会来了。" },
  { id:346, word:"がっしり", reading:"がっしり", meaning:"粗壮、结实、牢靠", pos:"副詞", example:"彼はがっしりした体格をしている。", exampleMeaning:"他体格结实魁梧。" },
  { id:347, word:"ぐっすり", reading:"ぐっすり", meaning:"熟睡、酣睡", pos:"副詞", example:"昨日はぐっすり眠れて体調がいい。", exampleMeaning:"昨天睡得很熟身体状态很好。" },
  { id:348, word:"極めて", reading:"きわめて", meaning:"极、极其", pos:"副詞", example:"その問題は極めて重要だ。", exampleMeaning:"那个问题极其重要。" },
  { id:349, word:"ぐんぐん", reading:"ぐんぐん", meaning:"不断地、迅速地、猛力地", pos:"副詞", example:"気温がぐんぐん上がって真夏日になった。", exampleMeaning:"气温迅速上升变成了盛夏之日。" },
  { id:350, word:"結構", reading:"けっこう", meaning:"相当、颇、还可以", pos:"副詞", example:"この料理は結構おいしいね。", exampleMeaning:"这道菜还挺好吃的呢。" },
  { id:351, word:"こっそり", reading:"こっそり", meaning:"悄悄地、偷偷地", pos:"副詞", example:"こっそり抜け出して外で昼ご飯を食べた。", exampleMeaning:"悄悄溜出去在外面吃了午饭。" },
  { id:352, word:"さすが", reading:"さすが", meaning:"不愧是、果然、就连", pos:"副詞", example:"さすがにプロ、仕事が丁寧だ。", exampleMeaning:"不愧是专业水准，干活很仔细。" },
  { id:353, word:"しばしば", reading:"しばしば", meaning:"屡次、常常", pos:"副詞", example:"この現象はしばしば観測されている。", exampleMeaning:"这种现象经常被观测到。" },
  { id:354, word:"少なくとも", reading:"すくなくとも", meaning:"至少", pos:"副詞", example:"少なくとも一度は日本に行ってみたい。", exampleMeaning:"至少想去一次日本。" },
  { id:355, word:"ずらり", reading:"ずらり", meaning:"一大排、成排", pos:"副詞", example:"新商品がずらりと店頭に並んだ。", exampleMeaning:"新产品在店头排了一大排。" },
  { id:356, word:"そっくり", reading:"そっくり", meaning:"一模一样、完全", pos:"副詞", example:"彼は父親にそっくりだ。", exampleMeaning:"他和他父亲长得一模一样。" },
  { id:357, word:"大して", reading:"たいして", meaning:"并不那么…（后接否定）", pos:"副詞", example:"この映画は大しておもしろくなかった。", exampleMeaning:"这部电影并不怎么好看。" },
  { id:358, word:"たっぷり", reading:"たっぷり", meaning:"充分、足够、宽绰", pos:"副詞", example:"たっぷり睡眠を取って疲れを癒した。", exampleMeaning:"充分睡眠消除了疲劳。" },
  { id:359, word:"ちゃんと", reading:"ちゃんと", meaning:"好好地、规规矩矩", pos:"副詞", example:"約束はちゃんと守ってください。", exampleMeaning:"请好好遵守约定。" },
  { id:360, word:"ついでに", reading:"ついでに", meaning:"顺便、顺手", pos:"副詞", example:"買い物のついでに郵便局に寄った。", exampleMeaning:"买东西顺便去了趟邮局。" },
  { id:361, word:"どっと", reading:"どっと", meaning:"哄然、一下子、病倒", pos:"副詞", example:"観客がどっと笑った。", exampleMeaning:"观众哄然大笑。" },
  { id:362, word:"とっくに", reading:"とっくに", meaning:"早就、老早", pos:"副詞", example:"彼はとっくに帰ってしまったよ。", exampleMeaning:"他早就回去了。" },
  { id:363, word:"にっこり", reading:"にっこり", meaning:"嫣然一笑、微微一笑", pos:"副詞", example:"彼女はにっこり笑って挨拶した。", exampleMeaning:"她微微一笑打了招呼。" },
  { id:364, word:"のろのろ", reading:"のろのろ", meaning:"慢吞吞、迟缓", pos:"副詞", example:"渋滞で車がのろのろとしか進まない。", exampleMeaning:"堵车导致只能缓慢前行。" },
  { id:365, word:"遥かに", reading:"はるかに", meaning:"远远地、…得多", pos:"副詞", example:"今回の結果は前回より遥かに良かった。", exampleMeaning:"这次的结果比上次好得多。" },
  { id:366, word:"ぴったり", reading:"ぴったり", meaning:"恰好、紧密、吻合", pos:"副詞", example:"この靴は私の足にぴったりだ。", exampleMeaning:"这双鞋我的脚正好合适。" },
  { id:367, word:"ぶつぶつ", reading:"ぶつぶつ", meaning:"小声嘟囔、一颗颗", pos:"副詞", example:"彼は何かぶつぶつ言いながら歩いていた。", exampleMeaning:"他一边小声嘟囔着什么一边走着。" },
  { id:368, word:"ぼんやり", reading:"ぼんやり", meaning:"模糊、发呆、恍惚", pos:"副詞", example:"窓の外をぼんやり眺めていた。", exampleMeaning:"呆呆地望着窗外。" },
  { id:369, word:"まさか", reading:"まさか", meaning:"难道、决（不）、没想到", pos:"副詞", example:"まさか彼が裏切るとは思わなかった。", exampleMeaning:"万万没想到他会背叛。" },
  { id:370, word:"ますます", reading:"ますます", meaning:"越来越、更加", pos:"副詞", example:"これからますます寒くなります。", exampleMeaning:"今后会越来越冷。" },
  { id:371, word:"まもなく", reading:"まもなく", meaning:"不久、一会儿", pos:"副詞", example:"本日の公演はまもなく開演いたします。", exampleMeaning:"本日的演出即将开演。" },
  { id:372, word:"もしかすると", reading:"もしかすると", meaning:"也许、或许", pos:"副詞", example:"もしかすると彼は来ないかもしれない。", exampleMeaning:"或许他不会来。" },
  { id:373, word:"やたらに", reading:"やたらに", meaning:"胡乱地、过分地", pos:"副詞", example:"やたらに薬を飲むのは危険だ。", exampleMeaning:"胡乱吃药是危险的。" },
  { id:374, word:"いちいち", reading:"いちいち", meaning:"一一、逐个、都", pos:"副詞", example:"いちいち文句を言わないでほしい。", exampleMeaning:"希望你每个细节都不要抱怨。" },
  { id:375, word:"しみじみ", reading:"しみじみ", meaning:"深切地、感慨地", pos:"副詞", example:"親のありがたみをしみじみ感じる。", exampleMeaning:"深切地感受到父母的恩情。" },
  { id:376, word:"ずるずる", reading:"ずるずる", meaning:"拖延、拖着", pos:"副詞", example:"決断をずるずると先延ばしにしている。", exampleMeaning:"一直拖着不做决断。" },
  { id:377, word:"せっせと", reading:"せっせと", meaning:"拼命地、不停地", pos:"副詞", example:"彼は毎日せっせと働いている。", exampleMeaning:"他每天拼命地工作。" },
  { id:378, word:"どうせ", reading:"どうせ", meaning:"反正、横竖、终归", pos:"副詞", example:"どうせやるならしっかりやろう。", exampleMeaning:"反正都要做，就好好做吧。" },
  { id:379, word:"ばったり", reading:"ばったり", meaning:"突然倒下、巧遇、突然停止", pos:"副詞", example:"街角でばったり昔の友達に会った。", exampleMeaning:"在街角突然遇到了老朋友。" },
  { id:380, word:"ふと", reading:"ふと", meaning:"忽然、偶然、无意中", pos:"副詞", example:"ふと思い出して笑ってしまった。", exampleMeaning:"忽然想起来就笑了出来。" },
  { id:381, word:"やっぱり", reading:"やっぱり", meaning:"果然、仍然、还是", pos:"副詞", example:"やっぱり彼が一番信頼できる。", exampleMeaning:"还是他最值得信赖。" },
  { id:382, word:"わざと", reading:"わざと", meaning:"故意地", pos:"副詞", example:"彼はわざと知らないふりをした。", exampleMeaning:"他故意装作不知道。" },
  { id:383, word:"一応", reading:"いちおう", meaning:"大致、暂且、姑且", pos:"副詞", example:"一応、確認してみます。", exampleMeaning:"我姑且确认一下。" },
  { id:384, word:"次第に", reading:"しだいに", meaning:"逐渐地、慢慢地", pos:"副詞", example:"空が次第に暗くなってきた。", exampleMeaning:"天空逐渐暗下来了。" },
  { id:385, word:"せめて", reading:"せめて", meaning:"至少、哪怕", pos:"副詞", example:"せめて電話一本くらいくれてもいいのに。", exampleMeaning:"至少也该给我打个电话。" },
  { id:386, word:"絶えず", reading:"たえず", meaning:"不断地、不停地", pos:"副詞", example:"時代は絶えず変化している。", exampleMeaning:"时代在不断地变化。" },
  { id:387, word:"めったに", reading:"めったに", meaning:"极少、不常（后接否定）", pos:"副詞", example:"彼はめったに怒らない人だ。", exampleMeaning:"他是个极少发脾气的人。" },
  { id:388, word:"ほぼ", reading:"ほぼ", meaning:"大致、大体上", pos:"副詞", example:"準備はほぼ整った。", exampleMeaning:"准备大体完成了。" },
  { id:389, word:"直に", reading:"じかに", meaning:"直接地、亲自", pos:"副詞", example:"直接本人に直に話を聞きたい。", exampleMeaning:"想直接当面向本人了解情况。" },
  { id:390, word:"改めて", reading:"あらためて", meaning:"重新、再次", pos:"副詞", example:"改めてご連絡させていただきます。", exampleMeaning:"我会再跟您联系。" },
  { id:391, word:"いずれ", reading:"いずれ", meaning:"哪个、反正、早晚", pos:"副詞", example:"いずれまたお会いできる日を楽しみに。", exampleMeaning:"期待改日再会。" },
  { id:392, word:"うんざり", reading:"うんざり", meaning:"厌烦、腻烦", pos:"副詞", example:"毎日同じ作業でうんざりだ。", exampleMeaning:"每天都是同样的工作腻烦了。" },
  { id:393, word:"幸い", reading:"さいわい", meaning:"幸而、幸好", pos:"副詞", example:"幸いけが人はいなかった。", exampleMeaning:"幸好没有人受伤。" },
  { id:394, word:"実に", reading:"じつに", meaning:"实在、真是", pos:"副詞", example:"実に素晴らしい演奏でした。", exampleMeaning:"真是精彩绝伦的演奏。" },
  { id:395, word:"だんだん", reading:"だんだん", meaning:"渐渐", pos:"副詞", example:"だんだん暖かくなってきた。", exampleMeaning:"渐渐暖和起来了。" },
  { id:396, word:"ふわふわ", reading:"ふわふわ", meaning:"轻飘飘、软绵绵", pos:"副詞", example:"焼きたてのパンがふわふわで美味しい。", exampleMeaning:"刚烤好的面包蓬松柔软很好吃。" },
  { id:397, word:"ほっと", reading:"ほっと", meaning:"松了口气、放心", pos:"副詞", example:"無事だと聞いてほっとした。", exampleMeaning:"听到平安无事就放心了。" },
  { id:398, word:"まるで", reading:"まるで", meaning:"简直、好像", pos:"副詞", example:"まるで夢のような気分だ。", exampleMeaning:"感觉简直像做梦一样。" },
  { id:399, word:"やがて", reading:"やがて", meaning:"不久、大约", pos:"副詞", example:"やがて雨も上がって日が差してきた。", exampleMeaning:"不久雨停了阳光照进来了。" },
  { id:400, word:"割と", reading:"わりと", meaning:"比较地、相当", pos:"副詞", example:"この店は割と空いているね。", exampleMeaning:"这家店还挺空的呢。" },

  // === カタカナ語 ===
  { id:401, word:"アドバイス", reading:"アドバイス", meaning:"建议、忠告", pos:"カタカナ", example:"先輩からアドバイスをもらった。", exampleMeaning:"得到了前辈的建议。" },
  { id:402, word:"イメージ", reading:"イメージ", meaning:"印象、形象", pos:"カタカナ", example:"その色は明るいイメージを与える。", exampleMeaning:"那个颜色给人明亮的印象。" },
  { id:403, word:"エネルギー", reading:"エネルギー", meaning:"能源、能量、精力", pos:"カタカナ", example:"太陽光はきれいなエネルギーだ。", exampleMeaning:"太阳能是清洁能源。" },
  { id:404, word:"オリジナル", reading:"オリジナル", meaning:"独创的、原创", pos:"カタカナ", example:"これは彼女のオリジナル曲だ。", exampleMeaning:"这是她的原创歌曲。" },
  { id:405, word:"カテゴリー", reading:"カテゴリー", meaning:"类别、分类", pos:"カタカナ", example:"問題をカテゴリー別に整理する。", exampleMeaning:"把问题按类别整理。" },
  { id:406, word:"キャンセル", reading:"キャンセル", meaning:"取消", pos:"カタカナ", example:"予約をキャンセルしたいんですが。", exampleMeaning:"我想取消预约。" },
  { id:407, word:"クリーニング", reading:"クリーニング", meaning:"洗衣、清洁", pos:"カタカナ", example:"スーツをクリーニングに出す。", exampleMeaning:"把西装送去干洗。" },
  { id:408, word:"コメント", reading:"コメント", meaning:"评论、说明", pos:"カタカナ", example:"この件についてコメントを控える。", exampleMeaning:"对此事不予置评。" },
  { id:409, word:"システム", reading:"システム", meaning:"系统、体系", pos:"カタカナ", example:"新しいシステムの導入は来月だ。", exampleMeaning:"新系统的引入是下个月。" },
  { id:410, word:"スタイル", reading:"スタイル", meaning:"风格、样式、体型", pos:"カタカナ", example:"人それぞれのライフスタイルがある。", exampleMeaning:"每个人有自己的生活方式。" },
  { id:411, word:"ストレス", reading:"ストレス", meaning:"压力、紧张", pos:"カタカナ", example:"適度な運動はストレス解消に効く。", exampleMeaning:"适度的运动有助于缓解压力。" },
  { id:412, word:"スピード", reading:"スピード", meaning:"速度", pos:"カタカナ", example:"仕事のスピードをもう少し上げてほしい。", exampleMeaning:"希望工作速度再快一点。" },
  { id:413, word:"タイミング", reading:"タイミング", meaning:"时机", pos:"カタカナ", example:"今が買うのに一番いいタイミングだ。", exampleMeaning:"现在是买的最佳时机。" },
  { id:414, word:"データ", reading:"データ", meaning:"数据、资料", pos:"カタカナ", example:"正確なデータに基づいて判断する。", exampleMeaning:"基于准确的数据进行判断。" },
  { id:415, word:"テンポ", reading:"テンポ", meaning:"拍子、速度、节奏", pos:"カタカナ", example:"工事はいいテンポで進んでいる。", exampleMeaning:"工程在进行中进度良好。" },
  { id:416, word:"トレーニング", reading:"トレーニング", meaning:"训练、练习", pos:"カタカナ", example:"毎朝30分の筋力トレーニングをしている。", exampleMeaning:"每天早上做30分钟力量训练。" },
  { id:417, word:"バランス", reading:"バランス", meaning:"平衡、均衡", pos:"カタカナ", example:"仕事と家庭のバランスが難しい。", exampleMeaning:"工作和家庭的平衡很难。" },
  { id:418, word:"プレゼント", reading:"プレゼント", meaning:"礼物", pos:"カタカナ", example:"誕生日プレゼントに腕時計をもらった。", exampleMeaning:"生日礼物收到了一块手表。" },
  { id:419, word:"プロ", reading:"プロ", meaning:"专业、职业", pos:"カタカナ", example:"彼はプロの料理人だ。", exampleMeaning:"他是专业厨师。" },
  { id:420, word:"ポジション", reading:"ポジション", meaning:"位置、职位", pos:"カタカナ", example:"チームでの自分のポジションを理解する。", exampleMeaning:"理解自己在团队中的位置。" },
  { id:421, word:"マスコミ", reading:"マスコミ", meaning:"传媒、媒体", pos:"カタカナ", example:"このニュースはマスコミで大きく取り上げられた。", exampleMeaning:"这个新闻被媒体大肆报道了。" },
  { id:422, word:"メディア", reading:"メディア", meaning:"媒体、媒介", pos:"カタカナ", example:"ソーシャルメディアの利用者が増えている。", exampleMeaning:"社交媒体的用户在增加。" },
  { id:423, word:"メリット", reading:"メリット", meaning:"优点、好处", pos:"カタカナ", example:"都会生活のメリットとデメリットを比べる。", exampleMeaning:"比较城市生活的优点和缺点。" },
  { id:424, word:"ユニーク", reading:"ユニーク", meaning:"独特的、唯一的", pos:"カタカナ", example:"彼の発想はとてもユニークだ。", exampleMeaning:"他的想法很独特。" },
  { id:425, word:"ライバル", reading:"ライバル", meaning:"对手、竞争者", pos:"カタカナ", example:"良きライバルの存在が成長を促す。", exampleMeaning:"好的竞争对手能促进成长。" },
  { id:426, word:"ルール", reading:"ルール", meaning:"规则", pos:"カタカナ", example:"このゲームのルールは簡単だ。", exampleMeaning:"这个游戏的规则很简单。" },
  { id:427, word:"アクセント", reading:"アクセント", meaning:"重音、口音、强调", pos:"カタカナ", example:"この単語のアクセントが難しい。", exampleMeaning:"这个单词的音调很难。" },
  { id:428, word:"オーバー", reading:"オーバー", meaning:"超过、夸张", pos:"カタカナ", example:"予算をオーバーしてしまった。", exampleMeaning:"超出预算了。" },
  { id:429, word:"カバー", reading:"カバー", meaning:"覆盖、弥补、罩子", pos:"カタカナ", example:"一人のミスをチームでカバーする。", exampleMeaning:"以团队之力弥补一个人的失误。" },
  { id:430, word:"ゴール", reading:"ゴール", meaning:"目标、终点", pos:"カタカナ", example:"プロジェクトもようやくゴールが見えてきた。", exampleMeaning:"项目也终于看到了终点。" },
  { id:431, word:"ジャンル", reading:"ジャンル", meaning:"种类、体裁、风格", pos:"カタカナ", example:"どんなジャンルの音楽が好きですか。", exampleMeaning:"你喜欢什么种类的音乐？" },
  { id:432, word:"センス", reading:"センス", meaning:"品味、感觉、判断力", pos:"カタカナ", example:"彼女はファッションのセンスがいい。", exampleMeaning:"她的时尚品味很好。" },
  { id:433, word:"チャンス", reading:"チャンス", meaning:"机会", pos:"カタカナ", example:"このチャンスを逃したくない。", exampleMeaning:"不想错过这个机会。" },
  { id:434, word:"トラブル", reading:"トラブル", meaning:"麻烦、纠纷、故障", pos:"カタカナ", example:"取引先とのトラブルを早く解決したい。", exampleMeaning:"想尽快解决与客户的纠纷。" },
  { id:435, word:"ネットワーク", reading:"ネットワーク", meaning:"网络", pos:"カタカナ", example:"人脈のネットワークを広げたい。", exampleMeaning:"想扩展人脉网络。" },
  { id:436, word:"パターン", reading:"パターン", meaning:"模式、类型、图案", pos:"カタカナ", example:"いつも同じパターンで失敗している。", exampleMeaning:"总是以同样的模式失败。" },
  { id:437, word:"ブーム", reading:"ブーム", meaning:"热潮、流行", pos:"カタカナ", example:"健康志向のブームが続いている。", exampleMeaning:"健康意识的热潮在持续。" },
  { id:438, word:"ベテラン", reading:"ベテラン", meaning:"老手、资深者", pos:"カタカナ", example:"ベテランの社員に仕事を教えてもらう。", exampleMeaning:"请资深员工教我工作。" },
  { id:439, word:"ボランティア", reading:"ボランティア", meaning:"志愿者、义工", pos:"カタカナ", example:"週末に地域のボランティアに参加している。", exampleMeaning:"周末参加地区的志愿者活动。" },
  { id:440, word:"リスク", reading:"リスク", meaning:"风险", pos:"カタカナ", example:"投資にはリスクが伴う。", exampleMeaning:"投资伴随风险。" },

  // === 漢字熟語 ===
  { id:441, word:"圧倒", reading:"あっとう", meaning:"压倒、凌驾", pos:"名詞", example:"相手チームを圧倒的な強さで破った。", exampleMeaning:"以压倒性的实力击败了对手。" },
  { id:442, word:"移行", reading:"いこう", meaning:"转移、过渡", pos:"名詞", example:"旧システムから新システムへの移行は順調だ。", exampleMeaning:"从旧系统到新系统的过渡很顺利。" },
  { id:443, word:"革新", reading:"かくしん", meaning:"革新", pos:"名詞", example:"技術革新が社会の在り方を変えた。", exampleMeaning:"技术革新改变了社会的面貌。" },
  { id:444, word:"確信", reading:"かくしん", meaning:"确信", pos:"名詞", example:"彼の無実を確信している。", exampleMeaning:"我确信他是无辜的。" },
  { id:445, word:"還元", reading:"かんげん", meaning:"还原、归还", pos:"名詞", example:"利益の一部を社会に還元する。", exampleMeaning:"将部分利润回馈社会。" },
  { id:446, word:"規範", reading:"きはん", meaning:"规范、标准", pos:"名詞", example:"社会的な規範に従って行動する。", exampleMeaning:"遵循社会规范行动。" },
  { id:447, word:"奨励", reading:"しょうれい", meaning:"奖励、鼓励", pos:"名詞", example:"政府は省エネを奨励している。", exampleMeaning:"政府鼓励节能。" },
  { id:448, word:"所属", reading:"しょぞく", meaning:"所属、属于", pos:"名詞", example:"営業部に所属しています。", exampleMeaning:"我隶属于营业部。" },
  { id:449, word:"措置", reading:"そち", meaning:"措施", pos:"名詞", example:"政府は経済対策の措置を発表した。", exampleMeaning:"政府发布了经济对策措施。" },
  { id:450, word:"対等", reading:"たいとう", meaning:"对等、平等", pos:"名詞", example:"対等な立場で話し合いたい。", exampleMeaning:"想在对等的立场上协商。" },
  { id:451, word:"達成", reading:"たっせい", meaning:"达成、完成", pos:"名詞", example:"目標を達成するために全力を尽くす。", exampleMeaning:"为达成目标全力以赴。" },
  { id:452, word:"中継", reading:"ちゅうけい", meaning:"转播、中转", pos:"名詞", example:"サッカーの試合をテレビで生中継する。", exampleMeaning:"电视现场直播足球比赛。" },
  { id:453, word:"提携", reading:"ていけい", meaning:"合作、协作", pos:"名詞", example:"他社と業務提携を結んだ。", exampleMeaning:"与其他公司签订了业务合作协议。" },
  { id:454, word:"転換", reading:"てんかん", meaning:"转换、转变", pos:"名詞", example:"発想の転換が必要だ。", exampleMeaning:"需要转换思路。" },
  { id:455, word:"動向", reading:"どうこう", meaning:"动向、趋势", pos:"名詞", example:"市場の動向を注意深く見守る。", exampleMeaning:"密切关注市场动向。" },
  { id:456, word:"廃止", reading:"はいし", meaning:"废除", pos:"名詞", example:"その制度は数年前に廃止された。", exampleMeaning:"那个制度几年前被废除了。" },
  { id:457, word:"反映", reading:"はんえい", meaning:"反映", pos:"名詞", example:"消費者の意見が商品に反映された。", exampleMeaning:"消费者的意见反映在了产品上。" },
  { id:458, word:"普及", reading:"ふきゅう", meaning:"普及", pos:"名詞", example:"スマートフォンが世界中に普及した。", exampleMeaning:"智能手机在全球普及了。" },
  { id:459, word:"変動", reading:"へんどう", meaning:"变动、波动", pos:"名詞", example:"為替の変動が経済に影響を与えた。", exampleMeaning:"汇率波动影响了经济。" },
  { id:460, word:"補償", reading:"ほしょう", meaning:"补偿、赔偿", pos:"名詞", example:"事故の被害者に補償金が支払われた。", exampleMeaning:"向事故受害者支付了赔偿金。" },
  { id:461, word:"融資", reading:"ゆうし", meaning:"融资、贷款", pos:"名詞", example:"銀行から融資を受けて事業を始めた。", exampleMeaning:"从银行获得融资开始了事业。" },
  { id:462, word:"要請", reading:"ようせい", meaning:"请求、要求", pos:"名詞", example:"政府に支援を要請した。", exampleMeaning:"向政府请求支援。" },
  { id:463, word:"抑制", reading:"よくせい", meaning:"抑制、控制", pos:"名詞", example:"物価の上昇を抑制する政策が取られた。", exampleMeaning:"采取了抑制物价上涨的政策。" },
  { id:464, word:"予備", reading:"よび", meaning:"预备、备用", pos:"名詞", example:"非常時に備えて予備の食料を蓄える。", exampleMeaning:"为紧急情况储备预备食物。" },
  { id:465, word:"連携", reading:"れんけい", meaning:"联合、合作", pos:"名詞", example:"地域と連携して防災訓練を行った。", exampleMeaning:"与地区合作进行了防灾训练。" },
  { id:466, word:"推進", reading:"すいしん", meaning:"推进", pos:"名詞", example:"改革を推進するための会議が開かれた。", exampleMeaning:"召开了推进改革的会议。" },
  { id:467, word:"挑戦", reading:"ちょうせん", meaning:"挑战", pos:"名詞", example:"新しいことに挑戦する勇気が大切だ。", exampleMeaning:"挑战新事物的勇气很重要。" },
  { id:468, word:"削減", reading:"さくげん", meaning:"削减", pos:"名詞", example:"経費削減に向けて全社で取り組む。", exampleMeaning:"全公司致力于削减经费。" },
  { id:469, word:"適応", reading:"てきおう", meaning:"适应", pos:"名詞", example:"新しい環境に早く適応したい。", exampleMeaning:"想尽快适应新环境。" },
  { id:470, word:"克服", reading:"こくふく", meaning:"克服", pos:"名詞", example:"苦手意識を克服して発表に臨んだ。", exampleMeaning:"克服不自信去做了发表。" },
  { id:471, word:"貢献", reading:"こうけん", meaning:"贡献", pos:"名詞", example:"社会に貢献できる仕事がしたい。", exampleMeaning:"想做能为社会做贡献的工作。" },
  { id:472, word:"調和", reading:"ちょうわ", meaning:"和谐、协调", pos:"名詞", example:"自然との調和を考えた街づくりが求められる。", exampleMeaning:"需要考虑到与自然和谐的城市建设。" },
  { id:473, word:"創設", reading:"そうせつ", meaning:"创设、创立", pos:"名詞", example:"新しい奨学金制度を創設した。", exampleMeaning:"新设立了奖学金制度。" },
  { id:474, word:"紛争", reading:"ふんそう", meaning:"纠纷、争端", pos:"名詞", example:"両国間の紛争が平和的に解決された。", exampleMeaning:"两国间的争端和平解决了。" },
  { id:475, word:"審査", reading:"しんさ", meaning:"审查", pos:"名詞", example:"応募作品を厳正に審査します。", exampleMeaning:"严格公正地审查参赛作品。" },
  { id:476, word:"徹底", reading:"てってい", meaning:"彻底", pos:"名詞", example:"品質管理を徹底することが大切だ。", exampleMeaning:"彻底执行质量管理很重要。" },
  { id:477, word:"把握", reading:"はあく", meaning:"把握、掌握", pos:"名詞", example:"現状を正確に把握してください。", exampleMeaning:"请准确把握现状。" },
  { id:478, word:"発揮", reading:"はっき", meaning:"发挥、施展", pos:"名詞", example:"みんなの前でリーダーシップを発揮した。", exampleMeaning:"在大家面前发挥了领导力。" },
  { id:479, word:"遵守", reading:"じゅんしゅ", meaning:"遵守", pos:"名詞", example:"法律を遵守することは国民の義務だ。", exampleMeaning:"遵守法律是国民的义务。" },
  { id:480, word:"開拓", reading:"かいたく", meaning:"开拓、开垦", pos:"名詞", example:"新市場を開拓するために海外に拠点を置く。", exampleMeaning:"为开拓新市场在海外设立据点。" },
  { id:481, word:"誘致", reading:"ゆうち", meaning:"招揽、吸引", pos:"名詞", example:"自治体が企業の誘致に力を入れている。", exampleMeaning:"自治体在努力招商引资。" },
  { id:482, word:"緩和", reading:"かんわ", meaning:"缓和", pos:"名詞", example:"交通渋滞の緩和が期待されている。", exampleMeaning:"期待交通堵塞能得到缓解。" },
  { id:483, word:"啓発", reading:"けいはつ", meaning:"启发、启蒙", pos:"名詞", example:"環境保護の啓発活動に参加する。", exampleMeaning:"参加环保启蒙活动。" },
  { id:484, word:"繁栄", reading:"はんえい", meaning:"繁荣", pos:"名詞", example:"この町の繁栄は観光業に支えられている。", exampleMeaning:"这个城镇的繁荣靠旅游业支撑。" },
  { id:485, word:"警鐘", reading:"けいしょう", meaning:"警钟、警告", pos:"名詞", example:"専門家が地球温暖化に警鐘を鳴らしている。", exampleMeaning:"专家对全球变暖敲响警钟。" },
  { id:486, word:"是正", reading:"ぜせい", meaning:"纠正、改正", pos:"名詞", example:"不公正な慣行の是正が求められる。", exampleMeaning:"要求纠正不公正的惯例。" },
  { id:487, word:"妨害", reading:"ぼうがい", meaning:"妨碍、干扰", pos:"名詞", example:"警察は公務執行妨害で男を逮捕した。", exampleMeaning:"警方以妨碍执行公务为由逮捕了男子。" },
  { id:488, word:"統合", reading:"とうごう", meaning:"统一、整合", pos:"名詞", example:"二つの会社が統合されて新会社が発足した。", exampleMeaning:"两家公司合并成立了新公司。" },
  { id:489, word:"承諾", reading:"しょうだく", meaning:"同意、应允", pos:"名詞", example:"事前に承諾を得てから利用してください。", exampleMeaning:"请事先征得同意后再使用。" },
  { id:490, word:"欠落", reading:"けつらく", meaning:"缺失、遗漏", pos:"名詞", example:"報告書に情報の欠落があった。", exampleMeaning:"报告书中存在信息缺失。" },
  { id:491, word:"提言", reading:"ていげん", meaning:"建议、提议", pos:"名詞", example:"有識者会議が政府に政策を提言した。", exampleMeaning:"专家会议向政府提出了政策建议。" },
  { id:492, word:"策定", reading:"さくてい", meaning:"制定", pos:"名詞", example:"来年度の経営計画を策定する。", exampleMeaning:"制定明年度的经营计划。" },
  { id:493, word:"阻害", reading:"そがい", meaning:"阻碍、妨碍", pos:"名詞", example:"過度な規制は経済成長を阻害する恐れがある。", exampleMeaning:"过度规制有可能阻碍经济增长。" },
  { id:494, word:"遂行", reading:"すいこう", meaning:"执行、完成", pos:"名詞", example:"計画通りに任務を遂行した。", exampleMeaning:"按计划完成了任务。" },
  { id:495, word:"遂げる", reading:"とげる", meaning:"达到、完成", pos:"動詞", example:"長年の夢を遂げて小説家になった。", exampleMeaning:"实现了多年的梦想成为了小说家。" },
  { id:496, word:"譲歩", reading:"じょうほ", meaning:"让步", pos:"名詞", example:"お互いに譲歩して合意に達した。", exampleMeaning:"互相让步达成了协议。" },
  { id:497, word:"念頭", reading:"ねんとう", meaning:"心头、心上", pos:"名詞", example:"常に最悪のシナリオを念頭に置いて準備する。", exampleMeaning:"总是想着最坏的情况做准备。" },
  { id:498, word:"指摘", reading:"してき", meaning:"指出", pos:"名詞", example:"上司に報告書のミスを指摘された。", exampleMeaning:"被上司指出了报告书中的错误。" },
  { id:499, word:"軌道", reading:"きどう", meaning:"轨道", pos:"名詞", example:"プロジェクトは順調に軌道に乗った。", exampleMeaning:"项目顺利走上了轨道。" },
  { id:500, word:"推進", reading:"すいしん", meaning:"推进、推动", pos:"名詞", example:"多様性の推進は企業の課題だ。", exampleMeaning:"推进多样性是企业的课题。" },
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
    {
      id:"v16", category:"vocab",
      question:"新しいプロジェクトは予算の都合で______ことになった。",
      options:["見送る","見逃す","見渡す","見下ろす"],
      answer:0,
      explanation:"「見送る（みおくる）」在此意为\"搁置/暂缓\"，用于计划因故推迟。「見逃す」是\"看漏/放过\"，「見渡す」是\"瞭望\"，「見下ろす」是\"俯视\"。"
    },
    {
      id:"v17", category:"vocab",
      question:"この辺りは家賃が______、一人暮らしの学生に人気だ。",
      options:["手頃で","手軽で","手短で","手厚で"],
      answer:0,
      explanation:"「手頃（てごろ）」意为\"适合的/价格合理的\"，常形容价格或大小。「手軽」是\"简便的\"，「手短」是\"简短的\"，「手厚い」是\"丰厚的/周到的\"。"
    },
    {
      id:"v18", category:"vocab",
      question:"医者は患者の不安を______ために、ゆっくりと説明した。",
      options:["和らげる","緩める","薄める","弱める"],
      answer:0,
      explanation:"「和らげる（やわらげる）」特指\"缓和/减轻\"情绪、痛苦等抽象事物。「緩める」是\"放松/松开\"（绳、规则），「薄める」是\"稀释\"，「弱める」是\"削弱\"。"
    },
    {
      id:"v19", category:"vocab",
      question:"到着時間の______がつかないので、着いたら連絡します。",
      options:["見当","予想","期待","検討"],
      answer:0,
      explanation:"「見当がつく/つかない」是固定搭配，意为\"有/没有大致估计\"。「見当（けんとう）」指\"推测/估计\"。「予想」偏\"预测\"，「期待」是\"期待\"，「検討」是\"研究讨论\"。"
    },
    {
      id:"v20", category:"vocab",
      question:"彼は親友に悩みを______、気持ちが少し楽になった。",
      options:["打ち明けて","打ち込んで","打ち消して","打ち合わせて"],
      answer:0,
      explanation:"「打ち明ける（うちあける）」意为\"坦露/倾诉\"，用于说出心里话。「打ち込む」是\"热衷/投入\"，「打ち消す」是\"否定/消除\"，「打ち合わせる」是\"事先商量\"。"
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
    {
      id:"g16", category:"grammar",
      question:"学生時代はよく図書館で勉強した______。",
      options:["ものだ","ことだ","はずだ","わけだ"],
      answer:0,
      explanation:"「〜たものだ」表示对过去经常发生的事的感慨和怀念，意为\"过去常常…\"。「ことだ」表建议，「はずだ」表推测，「わけだ」表当然/结论。"
    },
    {
      id:"g17", category:"grammar",
      question:"まだ締め切りまで一週間もあるから、そんなに急ぐ______。",
      options:["ことはない","ものがない","わけがない","はずがない"],
      answer:0,
      explanation:"「〜ことはない」意为\"没必要…/用不着…\"。「急ぐことはない」就是\"不用着急\"。「わけがない」和「はずがない」都是\"不可能\"，语义不符。"
    },
    {
      id:"g18", category:"grammar",
      question:"彼が会議に遅れるなんて、きっと電車が遅れた______。",
      options:["に違いない","に限らない","にすぎない","に及ばない"],
      answer:0,
      explanation:"「〜に違いない」意为\"一定是…\"，表示确信的推测。「に限らない」是\"不只…\"，「にすぎない」是\"只是/不过是\"，「に及ばない」是\"比不上/不必\"。"
    },
    {
      id:"g19", category:"grammar",
      question:"環境問題への意識が高まり、消費者の行動も変わり______。",
      options:["つつある","かけている","きれない","おそれがある"],
      answer:0,
      explanation:"「〜つつある」意为\"正在逐渐发生变化\"，用于描述持续进行的变化趋势。「かけている」是\"做到一半\"，「きれない」是\"做不完\"，「おそれがある」是\"有…的危险\"。"
    },
    {
      id:"g20", category:"grammar",
      question:"お金があれば必ず幸せになれる______。",
      options:["わけではない","ことではない","はずではない","ものではない"],
      answer:0,
      explanation:"「〜わけではない」意为\"并不是…/不一定…\"，用于部分否定。「ことではない」不构成固定语法，「はずではない」和「ものではない」在此语义不当。"
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
    // ===== 長文読解 =====
    {
      id:"r9", category:"reading",
      passage:"スマートフォンやSNSの普及によって、私たちのコミュニケーションの形は大きく変わった。いつでもどこでも誰とでも繋がれる便利さを得た一方で、常に「繋がっている」ことのストレスも指摘されている。たとえば、メッセージを送ったらすぐに返信が来ることを期待する人が増え、返事が遅いと「無視された」と感じてしまうこともある。また、対面での会話中にもスマートフォンを気にする人が増え、相手との深いコミュニケーションが難しくなっているという。ある大学教授は「テクノロジーは人間関係を便利にしたが、必ずしも豊かにしたわけではない」と述べている。私たちは今、テクノロジーとの適切な距離の取り方を考えなければならない時期に来ているのかもしれない。",
      question:"筆者がこの文章で最も言いたいことは何か。",
      options:[
        "スマートフォンはすぐに廃止すべきだ",
        "テクノロジーの発展により人間関係は完全に壊れてしまった",
        "テクノロジーは便利だが、人間関係に新たな課題も生んでいる",
        "対面のコミュニケーションだけが正しい形だ"
      ],
      answer:2,
      explanation:"文章前半讲便利性，后半讲ストレス和问题，最后引用教授的话\"便利にしたが、必ずしも豊かにしたわけではない\"总结——正是选项3的意思。其他选项都太极端。"
    },
    {
      id:"r10", category:"reading",
      passage:"スマートフォンやSNSの普及によって、私たちのコミュニケーションの形は大きく変わった。いつでもどこでも誰とでも繋がれる便利さを得た一方で、常に「繋がっている」ことのストレスも指摘されている。たとえば、メッセージを送ったらすぐに返信が来ることを期待する人が増え、返事が遅いと「無視された」と感じてしまうこともある。また、対面での会話中にもスマートフォンを気にする人が増え、相手との深いコミュニケーションが難しくなっているという。ある大学教授は「テクノロジーは人間関係を便利にしたが、必ずしも豊かにしたわけではない」と述べている。私たちは今、テクノロジーとの適切な距離の取り方を考えなければならない時期に来ているのかもしれない。",
      question:"文中の「テクノロジーは人間関係を便利にしたが、必ずしも豊かにしたわけではない」という意見の根拠として、本文で挙げられていないものはどれか。",
      options:[
        "返信が遅いと無視されたと感じてしまうこと",
        "対面会話中にスマートフォンを気にする人が増えたこと",
        "SNS上のいじめが増加していること",
        "常に繋がっていることのストレスが指摘されていること"
      ],
      answer:2,
      explanation:"选项3的\"SNSいじめ\"在文中没有提到。选项1、2、4分别对应文中的\"無視されたと感じる\"、\"対面での会話中にもスマートフォンを気にする\"、\"常に繋がっていることのストレス\"。"
    },
    {
      id:"r11", category:"reading",
      passage:"日本のゴミ分別制度は世界的に見ても非常に細かいことで知られている。一般的な家庭では「燃えるゴミ」「燃えないゴミ」「資源ゴミ」の3分類が基本だが、自治体によってそのルールはさらに細かく分かれている。例えば、ペットボトルはキャップと本体とラベルを別々に分ける必要があり、それぞれが異なる分別区分に該当する。また、粗大ゴミを出す際は事前に予約をして専用のシールを購入しなければならない。こうした複雑なルールに戸惑う外国人居住者は少なくないが、一方でこの制度があるからこそ日本の街は清潔に保たれているとも言える。ゴミの分別は単なる面倒な作業ではなく、限られた資源を有効に活用するための社会全体の取り組みなのである。",
      question:"ペットボトルを捨てる時、正しい方法として本文に書かれているものはどれか。",
      options:[
        "ペットボトル全体を「資源ゴミ」としてそのまま出す",
        "キャップと本体とラベルを別々に分けて、それぞれ該当する区分に出す",
        "ラベルだけを剥がして、本体とキャップは一緒に捨てる",
        "すべて「燃えるゴミ」として出す"
      ],
      answer:1,
      explanation:"文中「ペットボトルはキャップと本体とラベルを別々に分ける必要があり、それぞれが異なる分別区分に該当する」直接对应选项2。"
    },
    {
      id:"r12", category:"reading",
      passage:"日本のゴミ分別制度は世界的に見ても非常に細かいことで知られている。一般的な家庭では「燃えるゴミ」「燃えないゴミ」「資源ゴミ」の3分類が基本だが、自治体によってそのルールはさらに細かく分かれている。例えば、ペットボトルはキャップと本体とラベルを別々に分ける必要があり、それぞれが異なる分別区分に該当する。また、粗大ゴミを出す際は事前に予約をして専用のシールを購入しなければならない。こうした複雑なルールに戸惑う外国人居住者は少なくないが、一方でこの制度があるからこそ日本の街は清潔に保たれているとも言える。ゴミの分別は単なる面倒な作業ではなく、限られた資源を有効に活用するための社会全体の取り組みなのである。",
      question:"この文章の主旨として最も適切なものはどれか。",
      options:[
        "ゴミ分別は面倒で意味のない制度だから廃止すべきだ",
        "日本のゴミ分別制度は外国人には理解できない",
        "ゴミ分別は面倒だが、資源活用と街の清潔さにつながる重要な取り組みだ",
        "すべての自治体が同じゴミ分別ルールを採用している"
      ],
      answer:2,
      explanation:"文章开头介绍制度的复杂性，然后转折说正因为此才保持了街道清洁，最后总结\"単なる面倒な作業ではなく…社会全体の取り組み\"——这正是选项3的含义。"
    },
    {
      id:"r13", category:"reading",
      passage:"私は10年前、生まれ育った田舎を離れて東京に出てきた。最初は便利な都会の生活に感動した。コンビニは24時間営業で、終電を気にせずに遊べる店も多い。欲しい物は何でも手に入り、人との出会いも豊富だ。しかし、最近ではふと故郷の静かな風景を懐かしく思うことが増えた。朝、鳥の声で目を覚まし、夜は満天の星空を眺めていたあの頃の生活が、今では何よりも贅沢に感じられる。もちろん、田舎にも不便なことは多い。車がないと買い物にも行けないし、仕事の選択肢も限られる。都会が良くて田舎が悪い、あるいはその逆でもない。どちらの生活にも魅力と課題があり、大切なのは自分にとって何が心地よいかを見極めることではないだろうか。",
      question:"筆者は都会と田舎について、どのように考えているか。",
      options:[
        "都会はすべての面で田舎より優れている",
        "田舎は都会よりも質の高い生活を提供できる",
        "どちらにも長所と短所があり、自分に合った選択が重要だ",
        "都会に住む人はいつか必ず後悔する"
      ],
      answer:2,
      explanation:"文中明确说\"都会が良くて田舎が悪い、あるいはその逆でもない。どちらの生活にも魅力と課題があり\"——直接对应选项3。"
    },
    {
      id:"r14", category:"reading",
      passage:"私は10年前、生まれ育った田舎を離れて東京に出てきた。最初は便利な都会の生活に感動した。コンビニは24時間営業で、終電を気にせずに遊べる店も多い。欲しい物は何でも手に入り、人との出会いも豊富だ。しかし、最近ではふと故郷の静かな風景を懐かしく思うことが増えた。朝、鳥の声で目を覚まし、夜は満天の星空を眺めていたあの頃の生活が、今では何よりも贅沢に感じられる。もちろん、田舎にも不便なことは多い。車がないと買い物にも行けないし、仕事の選択肢も限られる。都会が良くて田舎が悪い、あるいはその逆でもない。どちらの生活にも魅力と課題があり、大切なのは自分にとって何が心地よいかを見極めることではないだろうか。",
      question:"文中で筆者が「贅沢」と感じているのはどんなことか。",
      options:[
        "24時間営業のコンビニがある都会の便利さ",
        "鳥の声で目覚め、星空を眺めるような自然に囲まれた田舎の生活",
        "欲しい物が何でも手に入る東京での買い物",
        "都会で多くの人と出会えること"
      ],
      answer:1,
      explanation:"「贅沢に感じられる」的対象是「朝、鳥の声で目を覚まし、夜は満天の星空を眺めていたあの頃の生活」——也就是故乡的自然生活方式。"
    },
    {
      id:"r15", category:"reading",
      passage:"日本政府は数年前から「働き方改革」を推進している。長時間労働の是正、有給休暇の取得促進、テレワークの導入などが主な取り組みだ。しかし、現場の声を聞くと、必ずしも期待通りの成果が上がっているとは言えないようだ。例えば、残業時間の上限規制が設けられたことで、表面的には労働時間は減ったものの、持ち帰り残業やサービス残業が増えたという報告もある。また、「有給休暇を取得しにくい雰囲気は変わっていない」という意見も根強い。専門家は「制度を変えるだけでは不十分で、職場の文化や上司の意識そのものを変えていかなければ、本当の改革にはならない」と指摘している。",
      question:"「働き方改革」の成果が出ていない一因として、本文で挙げられているものはどれか。",
      options:[
        "労働者が有給休暇を取りすぎている",
        "残業時間が上限を超えても法律で罰せられない",
        "制度は変わっても職場の雰囲気や意識が変わっていない",
        "テレワークによって仕事の効率が大幅に下がった"
      ],
      answer:2,
      explanation:"专家指出\"制度を変えるだけでは不十分で、職場の文化や上司の意識そのものを変えていかなければ\"——说明问题在于职场文化和意识未改变。选项1与文意相反，2和4文中未提及。"
    },
    {
      id:"r16", category:"reading",
      passage:"日本政府は数年前から「働き方改革」を推進している。長時間労働の是正、有給休暇の取得促進、テレワークの導入などが主な取り組みだ。しかし、現場の声を聞くと、必ずしも期待通りの成果が上がっているとは言えないようだ。例えば、残業時間の上限規制が設けられたことで、表面的には労働時間は減ったものの、持ち帰り残業やサービス残業が増えたという報告もある。また、「有給休暇を取得しにくい雰囲気は変わっていない」という意見も根強い。専門家は「制度を変えるだけでは不十分で、職場の文化や上司の意識そのものを変えていかなければ、本当の改革にはならない」と指摘している。",
      question:"筆者の「働き方改革」に対するスタンスとして最も適切なものはどれか。",
      options:[
        "働き方改革は完全に成功し、すべての問題が解決された",
        "制度面の改善は進んだが、職場文化の変革なしには真の改革は難しい",
        "働き方改革は日本の経済を悪化させるだけだ",
        "残業は労働者の自己責任だから規制すべきではない"
      ],
      answer:1,
      explanation:"文章前半承认改革措施在推进，后半通过\"しかし\"转折指出实际效果不佳，最后引用专家观点强调需要文化和意识的改变——选项2最准确地概括了这种\"有进展但还不够\"的立场。"
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
    {
      id:"l12", category:"listening",
      scenario:"大学で、先生が学生に",
      audioText:"えー、来週の金曜日の授業ですが、学会出張のため休講とします。その分、再来週の金曜日に補講を行いますので、時間は通常通りで教室も同じです。課題を出しておきますので、休講中にやっておいてください。詳しくは授業のウェブページにアップしておきます。",
      question:"来週の金曜日、学生はどうすればいいですか。",
      options:[
        "いつも通り教室に行く",
        "補講のための別の教室を確認する",
        "授業がないので、ウェブページの課題をやっておく",
        "学会に出席する"
      ],
      answer:2,
      explanation:"老师说下周五因出差停课，会布置课题让学生提前做，详情会上传到课程网页。关键词「休講（きゅうこう）」=\"停课\"，「補講（ほこう）」=\"补课\"。"
    },
    {
      id:"l13", category:"listening",
      scenario:"天気予報を聞いている",
      audioText:"では、明日の天気です。午前中は晴れますが、午後から次第に雲が多くなり、夕方から夜にかけて雨が降る見込みです。気温は今日より5度ほど下がり、肌寒くなりますので、折りたたみ傘と羽織るものがあると安心です。特に夜遅くまで外出される方はご注意ください。",
      question:"明日外出する人へのアドバイスとして、天気予報で言っていないことはどれですか。",
      options:[
        "折りたたみ傘を持っていく",
        "羽織るものを用意する",
        "夜遅くまで外出する人は特に注意する",
        "長靴を履いていく"
      ],
      answer:3,
      explanation:"预报提到需要折伞和外衣，提醒深夜外出的人注意，但并没有提到穿长靴。关键词「折りたたみ傘」=\"折叠伞\"，「羽織るもの」=\"披着的外套\"。"
    },
    {
      id:"l14", category:"listening",
      scenario:"友人同士の会話",
      audioText:"A: 夏休み、どこか旅行に行かない？ B: いいね！海の近くがいいな。 A: 海か…僕は山の方でゆっくり温泉に入りたいな。 B: 温泉もいいね。じゃあ、海の近くに温泉がある場所を探してみる？ A: それ、いいアイデア！両方楽しめるね。",
      question:"二人はどんな旅行先を探すことにしましたか。",
      options:[
        "海だけの近くの場所",
        "山の中の温泉地だけ",
        "海の近くで温泉もある場所",
        "都会のホテル"
      ],
      answer:2,
      explanation:"B最初说想去海边，A想去山中温泉，最后B提议\"海の近くに温泉がある場所を探す\"——找既有海又有温泉的地方。两人达成一致。"
    },
    {
      id:"l15", category:"listening",
      scenario:"料理番組で、講師が説明している",
      audioText:"今日は基本の味噌汁の作り方を紹介します。まず、だしを取ります。昆布を水から入れて、沸騰する直前に取り出してください。それから削り節を入れて、30秒ほど煮出したら火を止めてこします。このだしに、一口大に切った豆腐と、食べやすく切ったネギを入れます。最後に味噌を溶き入れますが、沸騰させると味噌の風味が落ちてしまうので、火を止めてから入れるのがポイントです。",
      question:"味噌を入れるタイミングについて、正しいものはどれか。",
      options:[
        "だしが沸騰している時に入れる",
        "火を止めてから入れる",
        "豆腐より先に入れる",
        "昆布と一緒に入れる"
      ],
      answer:1,
      explanation:"讲师明确说\"火を止めてから入れるのがポイントです\"——味噌要在关火后加入以保持风味。关键词「味噌（みそ）」=\"味噌/豆酱\"，「沸騰（ふっとう）させる」=\"煮沸\"。"
    },
    {
      id:"l16", category:"listening",
      scenario:"街中で、通行人が道を尋ねている",
      audioText:"A: すみません、駅前郵便局に行きたいんですが。 B: ああ、郵便局ですね。この道をまっすぐ行って、二つ目の信号を右に曲がってください。すると左手に大きな公園が見えます。郵便局はその公園の向かい側にあります。コンビニの隣なので、すぐわかると思いますよ。歩いて10分くらいです。",
      question:"駅前郵便局はどこにありますか。",
      options:[
        "二つ目の信号の手前",
        "公園の向かい側で、コンビニの隣",
        "公園の中",
        "一つ目の信号を右に曲がったところ"
      ],
      answer:1,
      explanation:"路人说邮局「公園の向かい側」、而且「コンビニの隣」。关键词「向かい側（むかいがわ）」=\"对面\"，「隣（となり）」=\"旁边\"。"
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
