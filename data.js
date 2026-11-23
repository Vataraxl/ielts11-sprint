/**
 * 《剑桥雅思11》期末 48 小时冲刺复习数据库
 * 数据全部核对自：《剑桥雅思真题11》PDF（含 PDF p.144 官方勘误表）、
 * 《雅思小作文三步法.pptx》、《雅思大作文完整版.pptx》及期末考情说明图片。
 */

export const EXAM_META = {
  title: '《剑11》期末 48h 冲刺',
  subtitle: '大一公选课 · 周三期末考专用',
  examOptions: [
    { id: 'wed-am', label: '周三上午场 (09:00)', iso: '2026-11-25T09:00:00+08:00' },
    { id: 'wed-pm', label: '周三下午场 (14:00)', iso: '2026-11-25T14:00:00+08:00' }
  ],
  rules: [
    {
      part: 'Listening 听力',
      rule: 'C11 共 16 个 Section，期末 16 选 1 考原题',
      strategy: '性价比最高！刷完题干+原文下划线定位句，记牢拼写和单复数直接保满分。'
    },
    {
      part: 'Reading 阅读',
      rule: 'C11 共 12 篇文章，期末选 1-2 篇（原题 + 课外）',
      strategy: '精做 4 篇代表题型 + 速刷其余 8 篇混脸熟，注意 Test 4 书末答案勘误。'
    },
    {
      part: 'Writing 写作',
      rule: 'C11 共 8 篇（大小各 4），给定范围 n 选 1 考',
      strategy: '只考数据图与议论文！背熟小作文三步法与大作文四步法骨架，8 题全写好提纲。'
    },
    {
      part: 'Speaking 口语',
      rule: '不作为期末考试内容（只交作业计平时分）',
      strategy: '这两天投入 0 分钟，全部精力保听力、阅读、写作。'
    }
  ]
};

export const ROOKIE_SWITCHES = [
  {
    title: '听力：别当高考单选，小心“字数限制 + 先说后改”',
    detail: '看到 ONE WORD ONLY 写两个词直接判错；答案常先给干扰项再转折否定（如先说 £75 再改周六是 £115），另需重点看 3 张地图题方位词。'
  },
  {
    title: '阅读：绝对别通读全文，禁止“脑补推理”',
    detail: '高考 130 词汇够用但文章很长：必须先读题划定位词（人名/年份/大写词）再回原文找同义替换；TRUE/FALSE/NOT GIVEN 只有原文明确冲突才选 FALSE，没提到一律选 NOT GIVEN。'
  },
  {
    title: '写作：小作文不能写原因，必须有 Overview',
    detail: 'Task 1 只客观汇报数据，写原因和感想会扣分；第二段必须写 Overall 总体概述句（不带具体数字）。Task 2 要写满 250 词且每段展开 Reason + Example。'
  },
  {
    title: '没本地音频怎么刷听力？3 个已实测直达通道',
    detail: '1）已在本网页「听力」页内置了 IELTS Training Online（免登录原版 MP3 播放器）与 B站按节直达搜索链接；2）手机上还可在「雅思哥 / 雅思考满分 / 小站雅思 / 喜马拉雅」搜「剑桥雅思11 听力」开 1.25x 倍速；3）没条件戴耳机时，直接看真题 PDF 书末 Audioscripts（p.103–123）下划线标出的 Q1–Q40 答案句！'
  }
];

export const AUDIO_RESOURCES = [
  {
    test: 1,
    label: 'Test 1 在线音频（S1–S4）',
    url: 'https://ieltstrainingonline.com/practice-cam-11-listening-test-01/',
    note: '含 Section 1–4 独立 MP3 播放器 + 文本与答案'
  },
  {
    test: 2,
    label: 'Test 2 在线音频（S1–S4）',
    url: 'https://ieltstrainingonline.com/practice-cam-11-listening-test-02/',
    note: '含 Section 1–4 独立 MP3 播放器 + 文本与答案'
  },
  {
    test: 3,
    label: 'Test 3 在线音频（S1–S4）',
    url: 'https://ieltstrainingonline.com/practice-cam-11-listening-test-03/',
    note: '含 Section 1–4 独立 MP3 播放器 + 文本与答案'
  },
  {
    test: 4,
    label: 'Test 4 在线音频（S1–S4）',
    url: 'https://ieltstrainingonline.com/practice-cam-11-listening-test-04/',
    note: '含 Section 1–4 独立 MP3 播放器 + 文本与答案'
  }
];

export const BILI_ALL_AUDIO_URL = 'https://search.bilibili.com/all?keyword=%E5%89%91%E6%A1%A5%E9%9B%85%E6%80%9D11+%E5%90%AC%E5%8A%9B';

export const SPRINT_PLAN = [
  {
    dayId: 'day1',
    dayLabel: '今天 · 周一 (11/23 下午/晚上 · 约 3.5–4h)',
    tasks: [
      {
        id: 'd1-0',
        time: '15 min',
        title: '标注老师范围白名单',
        desc: '对照「听力 / 阅读 / 写作」页，把老师课上讲过的打 ✓，老师公布的期末重点标上 ★，优先看标星项。'
      },
      {
        id: 'd1-1',
        time: '30 min',
        title: '零基础破冰试水（T1 听 S1+S2 & 读 P1）',
        desc: '去 B站搜「剑11 Test1」做完 S1 填空 + S2 农场地图，再限时 20 分钟做阅读 T1 P1《垂直农业》（全书最友好），摸清同义替换套路。'
      },
      {
        id: 'd1-2',
        time: '1.5 h',
        title: '听力前半程：吃透 Test 1 & Test 2（8 个 Section）',
        desc: '填空题（S1/S4）手写一遍拼写；地图题（T1 S2 农场 / T2 S2 剧院）跟着脚本走一遍方向；S3 选择题直接对照原文下划线定位排除干扰项。'
      },
      {
        id: 'd1-3',
        time: '1.5 h',
        title: '写作搭骨架：吃透 PPT 三步法 & 四步法',
        desc: '通读「写作」页的小作文三步法与大作文四步法，精读 PPT 附带题（T2T1、T4T1、T2T2、T3T2）和两篇 7 分范文，挑顺手句型用「一键复制」存备忘录。'
      }
    ]
  },
  {
    dayId: 'day2',
    dayLabel: '明天 · 周二 (11/24 课余 + 晚上 · 约 4.5–5h)',
    tasks: [
      {
        id: 'd2-1',
        time: '1.5 h',
        title: '听力后半程：吃透 Test 3 & Test 4（8 个 Section）',
        desc: '攻克 T4 S2 博物馆平面图、T3/T4 的密集配对题与 5 选 2 多选；顺手把本网页「听写自测」里标红的易错词全部过一遍。'
      },
      {
        id: 'd2-2',
        time: '2 h',
        title: '阅读「精做 4 篇懂套路 + 速刷 8 篇混脸熟」',
        desc: '精做 T1P1(入门)、T1P2(流程图)、T2P2(List of Headings)、T3P3(段落信息配对)；其余 8 篇每篇 6 分钟看标题+对照答案在原文划出同义替换。务必看 Test 4 勘误！'
      },
      {
        id: 'd2-3',
        time: '1.5 h',
        title: '写作实战：掐表各写 1 篇 + 全 8 题列提纲',
        desc: '用本页内置计时器：20 分钟写 1 篇小作文 + 40 分钟写 1 篇大作文（优先写老师圈定题），剩下 20 分钟把全书 8 题的改写首段和分论点过一遍。'
      }
    ]
  },
  {
    dayId: 'day3',
    dayLabel: '考前 · 周三 (11/25 进考场前 30–45 min)',
    tasks: [
      {
        id: 'd3-1',
        time: '15 min',
        title: '听写页：专刷「错词本 / 高频易错词」',
        desc: '快速检查单复数 -s、地名大写拼写（Charlton / Buckleigh / Bythwaite）和学术词汇（conservation / observation / analysis）。'
      },
      {
        id: 'd3-2',
        time: '15 min',
        title: '口头默背：大小作文开头 + 衔接 + 收束句',
        desc: '过一遍小作文 Overall 句型与趋势动词、大作文让步反驳句（Admittedly...; however...）和 8 题提纲，进考场直接下笔。'
      }
    ]
  }
];

const RAW_LISTENING_SECTIONS = [
  {
    id: 't1s1',
    test: 1,
    section: 1,
    title: 'Hiring a public room',
    titleZh: '租用村礼堂公共房间',
    bookPage: '题 p.10-11 / 原文 p.103-104 / 答案 p.124',
    types: ['笔记填空（ONE WORD AND/OR A NUMBER）'],
    biliQuery: '剑桥雅思11 Test1 Section1',
    traps: 'Q2 先说平时 £75 后改周六 £115；Q3 仅押金必须 cash，房租方式不限；Q9 问清扫方式不是 sweep 而是 washed。',
    answers: [
      { q: 1, a: 'Charlton', note: '人名/厅名听写：C-H-A-R-L-T-O-N，注意首字母大写' },
      { q: 2, a: '(£)115 / one hundred (and) fifteen', note: '周末价格 £115（干扰项：工作日 £75）' },
      { q: 3, a: 'cash', note: '押金 £250 坚持只收现金（don’t take cards for that）' },
      { q: 4, a: 'parking', note: '原话：What about parking? Yeah, that’s all included.' },
      { q: 5, a: 'music', note: '如果用餐期间有音乐就需要办 licence' },
      { q: 6, a: 'entry', note: '提前联系 Mr Evans 安排进场（arrangements for entry）' },
      { q: 7, a: 'stage', note: '乐队用后门的 stage door，不用前门' },
      { q: 8, a: 'code', note: '会告知打开上锁清洁柜的密码（code）' },
      { q: 9, a: 'floor / floors', note: '先问 Sweep the floors? 回答 Actually they have to be washed.' },
      { q: 10, a: 'decoration / decorations', note: '允许挂装饰物，但活动后必须拆掉（take them down）' }
    ]
  },
  {
    id: 't1s2',
    test: 1,
    section: 2,
    title: 'Fiddy Working Heritage Farm',
    titleZh: '历史民俗农场游览介绍 + 地图',
    bookPage: '题 p.12-13 / 原文 p.104-105 / 答案 p.124',
    types: ['笔记填空 (4题)', '🗺️ 地图题 (6题)'],
    biliQuery: '剑桥雅思11 Test1 Section2',
    traps: '地图起点在 You are here (Main Path 底端，右手边 New Barn，左手边 Car Park)。一定先分清 Main Path 和右侧拐进来的 Side Path！',
    answers: [
      { q: 11, a: 'animal / animals', note: 'don’t frighten or injure = take care not to harm' },
      { q: 12, a: 'tool / tools', note: '农具有尖锐处，不要碰（don’t touch）' },
      { q: 13, a: 'shoes', note: '地面不平穿凉鞋会滑，建议穿 shoes' },
      { q: 14, a: 'dog / dogs', note: '不能带狗入内，导盲犬（guide dogs）除外' },
      { q: 15, a: 'F', note: 'Scarecrow：在左侧 Car Park 角落、紧邻 Main Path → F' },
      { q: 16, a: 'G', note: 'Maze：在 New Barn 对面、右边岔出去的 Side Path 旁 → G' },
      { q: 17, a: 'D', note: 'Café：朝鱼塘桥走，过桥前右转上 Side Path 的第一个弯处 → D' },
      { q: 18, a: 'H', note: 'Black Barn：从 New Barn 旁右转上 Side Path 刚拐弯处 → H' },
      { q: 19, a: 'C', note: 'Covered picnic area：过桥后右手边靠近 Farm Yard → C' },
      { q: 20, a: 'A', note: 'Fiddy House：过桥后沿 Farm Yard 左侧 Footpath 一直走到头 → A' }
    ]
  },
  {
    id: 't1s3',
    test: 1,
    section: 3,
    title: 'Study on Gender in Physics',
    titleZh: '物理学科性别表现研究讨论',
    bookPage: '题 p.14-15 / 原文 p.105-106 / 答案 p.124',
    types: ['3选1单选 (10题)'],
    biliQuery: '剑桥雅思11 Test1 Section3',
    traps: '高能对话讨论！注意女生先猜测观点、男生随后纠偏（如 Q23/Q28/Q29/Q30 都有对话反转）。',
    answers: [
      { q: 21, a: 'C', note: '不是纯物理专业，而是 STEM（Science, Technology, Engineering, Math）' },
      { q: 22, a: 'B', note: 'aim: what they could do about low level of women’s results（寻找提升方法）' },
      { q: 23, a: 'B', note: '女生误以为男生看轻她们/期待她们考差，实际没人这么想' },
      { q: 24, a: 'C', note: 'Values-affirmation：写对自己个人重要的事（音乐或重要的人）' },
      { q: 25, a: 'A', note: 'relax them = reduce stress' },
      { q: 26, a: 'B', note: '出乎意料的是这一个活动就把女生成绩从 C 提到 B' },
      { q: 27, a: 'C', note: '可能事先被告知了研究目的（had they been told why...）' },
      { q: 28, a: 'A', note: '最后决定一半做原写作任务，一半做事实性写作任务（two different writing tasks）' },
      { q: 29, a: 'B', note: 'Smolinsky 研究发现男女无论组队还是单独做，成绩相同（no effect）' },
      { q: 30, a: 'A', note: 'Lisa 否决了看课表，男生妥协听 Lisa 的建议：先预约见教授（talk to a professor）' }
    ]
  },
  {
    id: 't1s4',
    test: 1,
    section: 4,
    title: 'Ocean Biodiversity',
    titleZh: '海洋生物多样性与保护讲座',
    bookPage: '题 p.16-17 / 原文 p.107-108 / 答案 p.124',
    types: ['学术笔记填空（ONE WORD ONLY）'],
    biliQuery: '剑桥雅思11 Test1 Section4',
    traps: 'Q32 原文先说 expected high concentrations of food，紧接着转折但其中一个不是（rich in food）；Q34 可写 oxygen 或 O2。',
    answers: [
      { q: 31, a: 'conservation', note: 'locate key areas for focusing efforts at conservation' },
      { q: 32, a: 'food / foods', note: 'not always rich in food' },
      { q: 33, a: 'surface', note: 'water at the surface had relatively high temperatures' },
      { q: 34, a: 'oxygen / O2', note: 'needed to have enough oxygen in it' },
      { q: 35, a: 'mammals', note: 'marine mammals, things like seals（注意复数）' },
      { q: 36, a: 'ice', note: 'live below the ice = under the ice' },
      { q: 37, a: 'decline / declining / decrease', note: 'calculate the rate at which the decline is happening' },
      { q: 38, a: 'map', note: 'produce a map showing its distribution' },
      { q: 39, a: 'migration', note: 'corridors for migration = migration corridors' },
      { q: 40, a: 'consumption', note: 'for the purpose of consumption（仅供食用）' }
    ]
  },
  {
    id: 't2s1',
    test: 2,
    section: 1,
    title: 'Enquiry about joining Youth Council',
    titleZh: '咨询加入青年委员会登记',
    bookPage: '题 p.33-34 / 原文 p.108-109 / 答案 p.126',
    types: ['信息表填空（ONE WORD AND/OR A NUMBER）'],
    biliQuery: '剑桥雅思11 Test2 Section1',
    traps: '必背拼写题！Q2 邮编字母数字别漏；Q4 先说做过 courier（干扰项），现在做 waiter；Q9 先说老师 5:30 走，自己 4 点下课约 4:30。',
    answers: [
      { q: 1, a: 'hostel', note: '周一到周五暂时住在 hostel（青年旅舍）' },
      { q: 2, a: 'Buckleigh', note: '拼写播报：B-U-C-K-L-E-I-G-H' },
      { q: 3, a: 'PE9 7QT', note: '英国邮编格式：注意字母 P-E-9 空格 7-Q-T' },
      { q: 4, a: 'waiter', note: '刚结束 courier，目前在酒店当 waiter' },
      { q: 5, a: 'politics', note: '主修 politics（辅修 history）' },
      { q: 6, a: 'cycling', note: 'spend quite a lot of time cycling = does a lot of cycling' },
      { q: 7, a: 'cinema', note: 'keen on the cinema = interested in the cinema' },
      { q: 8, a: 'disabled', note: '妹妹失明，想帮助 disabled young people' },
      { q: 9, a: '4.30 (pm) / half past four', note: '题干已有 pm，填 4.30 即可（写 half past four 也可）' },
      { q: 10, a: '07788 136711', note: '数字双连读：double seven double eight' }
    ]
  },
  {
    id: 't2s2',
    test: 2,
    section: 2,
    title: 'New staff at theatre',
    titleZh: '剧院新员工入职介绍 + 平面图',
    bookPage: '题 p.35-36 / 原文 p.109-110 / 答案 p.126',
    types: ['5选2多选 (6题)', '🗺️ 室内平面图 (4题)'],
    biliQuery: '剑桥雅思11 Test2 Section2',
    traps: '多选题满篇“将来时陷阱”：哪些是**目前已经改完/提供**的（区分 will / next month / postpone）！',
    answers: [
      { q: '11&12', a: 'A, B（顺序可换）', note: 'A 储藏室改作会议室；B 换了可移动大座椅。干扰：电梯推迟(C)，外墙正要开始(D)，座位变少了(E错)' },
      { q: '13&14', a: 'B, D（顺序可换）', note: '目前开放：B 后台参观 + D 书店。干扰：咖啡馆在考虑、租房间下月开放、租服装在考虑' },
      { q: '15&16', a: 'C, E（顺序可换）', note: '已开工作坊：E 灯光（already started）+ C 制作木偶（every month）。sound 下月，acting 缺人，make-up 未来' },
      { q: 17, a: 'G', note: 'box office：虽属本楼但在隔壁（next door），马路上有独立入口 → G' },
      { q: 18, a: 'D', note: 'theatre manager’s office：过 foyer 进 double doors 右转，走廊尽头左门 → D' },
      { q: 19, a: 'B', note: 'lighting box：进 double doors 左转，到 water cooler 右转，尽头再右转，沿走廊第 2 间 → B' },
      { q: 20, a: 'F', note: 'artistic director’s office：进 double doors 右转，右手边第一间 → F' }
    ]
  },
  {
    id: 't2s3',
    test: 2,
    section: 3,
    title: 'Rocky Bay field trip',
    titleZh: '生物海滩实地考察报告讨论',
    bookPage: '题 p.37-38 / 原文 p.110-112 / 答案 p.126',
    types: ['3选1单选 (6题)', '5选2多选 (4题)'],
    biliQuery: '剑桥雅思11 Test2 Section3',
    traps: '注意两人互否！Q21 女生想写保护濒危物种但被男生否定；Q29 女生自认为样本小和栖息地记录有问题，都被一一否定，最终采纳的是 missed organisms + species identification。',
    answers: [
      { q: 21, a: 'A', note: '同意加入 what causes organisms to choose particular habitats（影响栖息地因素）' },
      { q: 22, a: 'A', note: '忘记带绳子（string），尺子和指南针都带了' },
      { q: 23, a: 'C', note: 'Colin 嫌离开/返回时间和分工细节太多，不用写那么细（amount of info）' },
      { q: 24, a: 'B', note: '测波速站着数浪花每分钟几次，简单（simple / straightforward）但不精确' },
      { q: 25, a: 'B', note: '一开始在海滩低处画图，后来发现应该去高处视野更好（stood in wrong place）' },
      { q: 26, a: 'B', note: '用 Colin 拍的照片（photographs）修改后再扫描进报告' },
      { q: '27&28', a: 'A, D（顺序可换）', note: '浪溅区问题：prevent drying out（缺水 A）+ don’t get too hot（高温 D）' },
      { q: '29&30', a: 'C, E（顺序可换）', note: '误差来源：missed some organisms（E）+ not sure identified species correctly（C）' }
    ]
  },
  {
    id: 't2s4',
    test: 2,
    section: 4,
    title: 'The Taylor Concert Hall',
    titleZh: '公共建筑设计：Taylor 音乐厅',
    bookPage: '题 p.39-40 / 原文 p.112-113 / 答案 p.126',
    types: ['学术笔记填空（ONE WORD ONLY）'],
    biliQuery: '剑桥雅思11 Test2 Section4',
    traps: 'Q38 原文说 not straight, they are curved（否定前置）；Q39 注意 curtains 复数；Q40 注意 critics 评价风格太 international 而非 local。',
    answers: [
      { q: 31, a: 'social', note: 'physical location & social meaning（social context）' },
      { q: 32, a: 'factory', note: 'occupied by a factory that had been empty（= disused）' },
      { q: 33, a: 'canal', note: 'bordered to the north by a canal（= beside a canal）' },
      { q: 34, a: 'bridge', note: 'approached by a bridge for pedestrians（cross over a bridge）' },
      { q: 35, a: 'box', note: 'shape of the building as a whole was that of a box' },
      { q: 36, a: 'screen', note: 'functions as a huge screen onto which images are projected' },
      { q: 37, a: 'rubber', note: 'ten massive pads constructed from rubber' },
      { q: 38, a: 'curved', note: 'not straight, they are curved in shape' },
      { q: 39, a: 'curtains', note: 'walls also have curtains（可开合调节音效，注意复数）' },
      { q: 40, a: 'international', note: 'criticise the style as being international rather than local' }
    ]
  },
  {
    id: 't3s1',
    test: 3,
    section: 1,
    title: 'Free activities in the Burnham area',
    titleZh: 'Burnham 地区免费活动咨询',
    bookPage: '题 p.57-58 / 原文 p.113-114 / 答案 p.128',
    types: ['3选1单选 (6题)', '句子填空 (4题)'],
    biliQuery: '剑桥雅思11 Test3 Section1',
    traps: 'S1 少见地前 6 题考了单选！Q1 10点开馆但活动 10:30 开始；Q2 电影放的是 ceramics（painting 是上次，sculpture 是正在做的）；Q10 河里能游泳，湖里太深不行。',
    answers: [
      { q: 1, a: 'B', note: 'gallery opens at 10, event runs from 10.30' },
      { q: 2, a: 'C', note: 'short film demonstrates how ceramics are made' },
      { q: 3, a: 'B', note: 'the majority at lunchtime' },
      { q: 4, a: 'A', note: '1点 library，4点 City Museum，7点半 theatre → 问 4 pm 选 A' },
      { q: 5, a: 'C', note: 'starts at Offord Marina, goes as far as Summer Pool（B 是最佳观赛桥）' },
      { q: 6, a: 'A', note: 'came first in regional championship in May this year（全国赛是明年）' },
      { q: 7, a: 'birds', note: 'spotting unusual birds throughout the year（注意复数）' },
      { q: 8, a: 'flowers', note: 'certain unusual flowers right now（复数）' },
      { q: 9, a: 'mushrooms', note: 'talk about mushrooms and pick some（复数）' },
      { q: 10, a: 'river', note: 'Part of the river has been fenced off for swimming.' }
    ]
  },
  {
    id: 't3s2',
    test: 3,
    section: 2,
    title: 'Changes in Barford over the last 50 years',
    titleZh: 'Barford 小镇 50 年变迁与规划',
    bookPage: '题 p.59-60 / 原文 p.114-115 / 答案 p.128',
    types: ['3选1单选 (5题)', '配对题 A–G (5题)'],
    biliQuery: '剑桥雅思11 Test3 Section2',
    traps: 'Q12 环路 bypass 根本没建（failed），步行街在试用，只有自行车道（cycle paths）效果超预期；Q19 图书馆延长开放已拿到经费（确定），扩建还不确定。',
    answers: [
      { q: 11, a: 'C', note: '公交公司只跑人多的线路，部分区域已无公交覆盖' },
      { q: 12, a: 'B', note: 'new cycle paths... reducing traffic and improving air quality' },
      { q: 13, a: 'B', note: 'few well-known chain stores here（缺乏大型连锁零售商）' },
      { q: 14, a: 'A', note: 'Our hospital closed 15 years ago = There is no hospital' },
      { q: 15, a: 'C', note: 'schools and colleges... main employment sector = education' },
      { q: 16, a: 'G', note: 'station car park：买相邻土地增加车位 → expanded (G)' },
      { q: 17, a: 'A', note: 'cinema：年底关闭，在新址重开 → move to new location (A)' },
      { q: 18, a: 'C', note: 'indoor market：停业6周加固翻新 → refurbished (C)' },
      { q: 19, a: 'B', note: 'library：每周两天晚上延长开放 → opening hours extended (B)' },
      { q: 20, a: 'F', note: 'nature reserve：交由国家级机构管理 → new management (F)' }
    ]
  },
  {
    id: 't3s3',
    test: 3,
    section: 3,
    title: 'Children’s book illustration project',
    titleZh: '儿童故事插画项目讨论（Helen & Jeremy）',
    bookPage: '题 p.61-62 / 原文 p.115-117 / 答案 p.128',
    types: ['表格填空 ONE WORD (6题)', '人物分工配对 A–D (4题)'],
    biliQuery: '剑桥雅思11 Test3 Section3',
    traps: 'Q27–30 分工极绕！Q30 Jeremy 想让 Helen 写插画评论，Helen 说太难了“I’d be happier if you did it”，最终变成 Jeremy only (B)！',
    answers: [
      { q: 21, a: 'cave', note: 'drawing of the cave — it’s got trees all around it' },
      { q: 22, a: 'tiger', note: 'putting in a tiger sitting under a tree' },
      { q: 23, a: 'dancing', note: 'crowd of men and women dancing just outside the forest' },
      { q: 24, a: 'crying', note: 'left out of all the fun, so I’d like him to be crying' },
      { q: 25, a: 'grass', note: 'supposed to be skating on grass（结了冰的草地）' },
      { q: 26, a: 'scarf', note: 'give each of them a scarf（注意单数 a scarf）' },
      { q: 27, a: 'A', note: 'planning：Jeremy 请 Helen 来起草 → Helen only' },
      { q: 28, a: 'C', note: 'ideas：Jeremy 已在写了，让 Helen 也写合在一起 → both' },
      { q: 29, a: 'D', note: 'interpretation：全班互读讨论，不放进报告 → neither' },
      { q: 30, a: 'B', note: 'illustrations：Helen 拒绝，最终 Jeremy 自己写 → Jeremy only' }
    ]
  },
  {
    id: 't3s4',
    test: 3,
    section: 4,
    title: 'Ethnography in Business',
    titleZh: '民族志调研在商业中的应用',
    bookPage: '题 p.63-64 / 原文 p.117-118 / 答案 p.128',
    types: ['学术笔记填空（ONE WORD ONLY）'],
    biliQuery: '剑桥雅思11 Test3 Section4',
    traps: '词尾单复数高危区！Q31 attitudes / Q32 numbers / Q35 patients / Q36 emotions 均常需注意词尾。',
    answers: [
      { q: 31, a: 'attitude / attitudes', note: 'possible needs... as well as attitudes towards existing products' },
      { q: 32, a: 'numbers', note: 'cooks couldn’t easily see the numbers inside measuring cups' },
      { q: 33, a: 'time / minutes', note: 'how much time they’d spent on the call so far' },
      { q: 34, a: 'software', note: 'idea for software that would help them' },
      { q: 35, a: 'patients', note: 'access the computer records of their patients' },
      { q: 36, a: 'emotions / feelings', note: 'tracking the emotions of passengers during a flight' },
      { q: 37, a: 'income', note: 'age bracket, or select them according to their income' },
      { q: 38, a: 'comfortable', note: 'have to be comfortable talking about themselves' },
      { q: 39, a: 'observation', note: 'based on first-hand observation of what they are doing' },
      { q: 40, a: 'analysis', note: '70 to 80 per cent of time is spent on its analysis' }
    ]
  },
  {
    id: 't4s1',
    test: 4,
    section: 1,
    title: 'Stretton Festival',
    titleZh: 'Stretton 艺术节票务与剧目咨询',
    bookPage: '题 p.80-81 / 原文 p.118-119 / 答案 p.130',
    types: ['表格填空 (7题)', '配对 A–C (3题)'],
    biliQuery: '剑桥雅思11 Test4 Section1',
    traps: 'Q1 先问是学校吗，回答 secondary school 别错去 primary；Q2 女士猜 oboe，回答 flute；Q6 现拼人名/地名 Bythwaite；Q9 “找保姆看着孩子你们俩去看”=只适合成人(B)。',
    answers: [
      { q: 1, a: 'secondary', note: 'the secondary school（干扰：primary school）' },
      { q: 2, a: 'flute', note: 'plays the flute（干扰：oboe）' },
      { q: 3, a: 'cinema', note: 'launched into the river at the back of the cinema' },
      { q: 4, a: 'concert', note: 'free tickets for the concert on the last night' },
      { q: 5, a: 'market', note: 'on sale at a stall in the market' },
      { q: 6, a: 'Bythwaite', note: '拼写播报：B-Y-T-H-W-A-I-T-E' },
      { q: 7, a: 'actor', note: 'given by a famous actor, Kevin Shapless' },
      { q: 8, a: 'A', note: 'aimed at five to ten-year-olds → mainly for children' },
      { q: 9, a: 'B', note: 'leave children with babysitter, might find it frightening → adults' },
      { q: 10, a: 'C', note: 'for young and old → all ages' }
    ]
  },
  {
    id: 't4s2',
    test: 4,
    section: 2,
    title: 'Museum collections & basement',
    titleZh: '博物馆展区特色与地下室平面图',
    bookPage: '题 p.82-83 / 原文 p.119-120 / 答案 p.130',
    types: ['展品匹配 A–G (6题)', '🗺️ 平面图 A–H (4题)'],
    biliQuery: '剑桥雅思11 Test4 Section2',
    traps: '地图起点在 stairs 下楼进入 sitting area！注意左墙有 A、B 两个门，过左边门进入走廊再看 C、D，正对面走廊再看 E、F、G，右下角还有 H。',
    answers: [
      { q: 11, a: 'E', note: '20-21世纪画作：attracts largest number of visitors（most popular E）' },
      { q: 12, a: 'D', note: '19世纪画作：artists each donated one work（given by artists D）' },
      { q: 13, a: 'G', note: 'Sculptures：展厅关闭装修，移到别处（relocated G）' },
      { q: 14, a: 'B', note: 'Around the world：seen on TV or in newspapers（publicised in media B）' },
      { q: 15, a: 'C', note: 'Coins：普通人挖花园挖出捐赠（members of public C）' },
      { q: 16, a: 'A', note: 'Porcelain & glass：创始人遗嘱捐给馆（given by one person A）' },
      { q: 17, a: 'F', note: 'restaurant：直走到头右转进走廊，正对着门 → F' },
      { q: 18, a: 'H', note: 'café：直走右转进走廊，立刻在右手边 → H' },
      { q: 19, a: 'C', note: 'baby-changing：穿过休息区沿左侧走廊直走，左手边 → C' },
      { q: 20, a: 'B', note: 'cloakroom：休息区左侧，进左侧走廊前最后一扇门 → B' }
    ]
  },
  {
    id: 't4s3',
    test: 4,
    section: 3,
    title: 'Joanna’s psychology study on musicians',
    titleZh: '演奏者着装心理学研究讨论',
    bookPage: '题 p.84-85 / 原文 p.120-122 / 答案 p.130',
    types: ['5选2多选 ×3 (6题)', '3选1单选 (4题)'],
    biliQuery: '剑桥雅思11 Test4 Section3',
    traps: '高密度同义替换！Q21–22 “quite a few won prizes”≠ all（A错），“between 25 and 29”≠ all under 27（C错），“all female, 3 violinists + cello + piano + flute”= 全是弦乐？不对！长笛和钢琴不是弦乐（E错）！',
    answers: [
      { q: '21&22', a: 'B, D（顺序可换）', note: 'B 全都录过唱片（they all had）；D 在不同大洲做过广泛巡演。A/C/E 均在“all”上设陷阱' },
      { q: '23&24', a: 'A, B（顺序可换）', note: '电话访谈：B 才能约到大忙人顶尖乐手；A 数据反而更丰富（opposite of less rich）' },
      { q: '25&26', a: 'B, E（顺序可换）', note: '起初想研究：B 穿着对听众的影响 + E 不同乐器（如小提琴 vs 长笛）穿着是否不同' },
      { q: 27, a: 'C', note: '男性着装社会限制更窄，女性代码没那么死板（less strict）' },
      { q: 28, a: 'A', note: '流行乐女歌手穿休闲裤装，否则会被当成轻浮不严肃（discounted as trivial）' },
      { q: 29, a: 'A', note: '穿得符合期待是为了向观众表达敬意（show a kind of esteem = respect）' },
      { q: 30, a: 'C', note: '重复密集动作容易劳损受伤，可借鉴运动服保护身体（protect against injury）' }
    ]
  },
  {
    id: 't4s4',
    test: 4,
    section: 4,
    title: 'Soil and Carbon Dioxide',
    titleZh: '利用农业土壤固碳以减少大气二氧化碳',
    bookPage: '题 p.86 / 原文 p.122-123 / 答案 p.130',
    types: ['学术笔记填空（ONE WORD ONLY）'],
    biliQuery: '剑桥雅思11 Test4 Section4',
    traps: '几乎全靠同义词定位！Q31 if soil is dry；Q34 roots；Q35 keep it moist（答案可用 moist/damp/wet）；Q38 gardens（注意复数）；Q40 receive payment for carbon。',
    answers: [
      { q: 31, a: 'dry', note: 'erosion can occur if soil is dry = soil that is dry' },
      { q: 32, a: 'hard', note: 'ground had become extremely hard, like cement' },
      { q: 33, a: 'sugar / sugars', note: 'transform CO2 into sugars and other carbon-based substances' },
      { q: 34, a: 'roots', note: 'some transfer from the roots to fungi and soil microbes' },
      { q: 35, a: 'moist / damp / wet', note: 'boost the fertility of soil and keep it moist' },
      { q: 36, a: 'variety', note: 'increasing the variety of plants being grown' },
      { q: 37, a: 'cattle', note: 'first-of-its-kind study on a large cattle farm' },
      { q: 38, a: 'gardens / gardening', note: 'waste produced in gardens（lawn trimmings 等）' },
      { q: 39, a: 'grasses', note: 'cultivating grasses that stay green all year round' },
      { q: 40, a: 'payment / payments / money', note: 'receive payment not just for corn or beef, but also for carbon' }
    ]
  }
];

export const LISTENING_SECTIONS = RAW_LISTENING_SECTIONS.map((sec) => {
  const res = AUDIO_RESOURCES.find((r) => r.test === sec.test);
  return {
    ...sec,
    audioPageUrl: res ? res.url : '',
    biliSearchUrl: `https://search.bilibili.com/all?keyword=${encodeURIComponent(`剑桥雅思11 听力 Test${sec.test} Section${sec.section}`)}`
  };
});

export const READING_ERRATUM = {
  title: '🚨 重要勘误：《剑11》书 p.131（Test 4 阅读答案）印刷有误！',
  detail: 'PDF 第 144 页附了官方 ERRATUM 勘误表：原书第 131 页 Test 4 Reading 印错了 8 道题。本网页已全部替换为勘误后正确版本，直接对本页答案即可，千万别被书上印错的那页带偏！',
  fixes: [
    'T4 P1 Q9：原书印 A → 正确为 B（Thomas Bouchard 研究分开抚养的双胞胎）',
    'T4 P2 Q19：原书印 D → 正确为 TRUE',
    'T4 P2 Q21：原书印 TRUE → 正确为 NOT GIVEN',
    'T4 P2 Q22：原书印 NOT GIVEN → 正确为 TRUE',
    'T4 P2 Q23：原书印 TRUE → 正确为 FALSE',
    'T4 P2 Q24：原书印 FALSE → 正确为 C',
    'T4 P2 Q25：原书印 C → 正确为 A',
    'T4 P2 Q26：原书印 A → 正确为 E'
  ]
};

export const READING_STRATEGIES = [
  {
    name: 'TRUE / FALSE / NOT GIVEN（判断题）',
    tip: '100% 忠于原文且按题号顺序出题！只有原文明确冲突/否定（如“唯一”vs“许多”、“上升”vs“下降”）才选 FALSE / NO；原文没提或无法比出高低/因果，一律选 NOT GIVEN。'
  },
  {
    name: 'List of Headings（段落小标题）',
    tip: '乱序题！先划掉例子项，再逐段只读首句 + 末句 + 段中转折（However/But），优先搞定最短或特征最明显的段落，用排除法把选项越缩越少。'
  },
  {
    name: '段落信息配对（Which paragraph contains...）',
    tip: '全卷最耗时的乱序细节题！考场上一定放到该篇文章最后再做——先做完填空/判断/单选时顺便把每段讲什么记住，最后回填效率翻倍。注意是否有 NB 可复选提示。'
  },
  {
    name: '填空题 & 结构/流程图（Note/Summary/Diagram）',
    tip: '送分题！严格看清字数上限（ONE WORD ONLY / NO MORE THAN TWO WORDS），先猜空里要填什么词性（名词/单复数/形容词），回原文用周围词做同义定位后直接抄原词。'
  }
];

export const READING_PASSAGES = [
  {
    id: 't1p1',
    test: 1,
    passage: 1,
    title: 'Crop-growing skyscrapers',
    titleZh: '垂直农场 / 摩天大楼种菜',
    bookPage: '书 p.18-20 / 答案 p.125',
    recommend: '精做入门篇',
    types: ['句子填空 ≤2词 (Q1-7)', 'T/F/NG (Q8-13)'],
    summary: '全书对零基础最友好的一篇！前 7 题填空完全按段落顺序下来，后 6 题判断刚好帮你分清 FALSE 和 NOT GIVEN 的边界。',
    answers: [
      { q: 1, a: 'tomatoes', note: '第2段：hothouse production of tomatoes...' },
      { q: 2, a: 'urban centres / centers', note: '第2段：Situated in the heart of urban centres' },
      { q: 3, a: 'energy', note: '第4段：return energy to the grid via methane' },
      { q: 4, a: 'fossil fuel', note: '第4段：dramatically reduce fossil fuel use' },
      { q: 5, a: 'artificial', note: '第5段：drawback... require artificial light' },
      { q: 6, a: '(stacked) trays', note: '第6段：stacked trays that move on rails（not fixed）' },
      { q: 7, a: '(urban) rooftops', note: '末段：use the space available on urban rooftops' },
      { q: 8, a: 'NOT GIVEN', note: '只说了保守人口预测，未提“预测方法最近改变”' },
      { q: 9, a: 'TRUE', note: '第3段：we despoiled most of the land we worked' },
      { q: 10, a: 'FALSE', note: '原文 year-round 全年产出，与 depend on season 相反' },
      { q: 11, a: 'TRUE', note: '第3段：rapidly changing climate... destroying millions of tons of crops' },
      { q: 12, a: 'FALSE', note: '第4段：eliminating the need for... fertilisers（不需要化肥）' },
      { q: 13, a: 'TRUE', note: '第4段：greatly reduce the incidence of many infectious diseases' }
    ]
  },
  {
    id: 't1p2',
    test: 1,
    passage: 2,
    title: 'The Falkirk Wheel',
    titleZh: '苏格兰福尔柯克转轮（船闸电梯）',
    bookPage: '书 p.21-24 / 答案 p.125',
    recommend: '精做图表题',
    types: ['T/F/NG (Q14-19)', '工程示意图填空 1词 (Q20-26)'],
    summary: '练习“工程原理类文章 + 示意图填空”。注意 Q14、15、17 是经典 FALSE vs NOT GIVEN 对照样本。',
    answers: [
      { q: 14, a: 'FALSE', note: '第2段：历史上曾由 11 道船闸连接（for the first time 错）' },
      { q: 15, a: 'NOT GIVEN', note: '只提了提交过很多设计方案，未提是否有人“反对”' },
      { q: 16, a: 'TRUE', note: '第4段：在制造地 Derbyshire 先组装再拆解运往 Falkirk' },
      { q: 17, a: 'NOT GIVEN', note: '只说手工拧紧 45,000 个螺栓，未与世界其他船只升降机对比' },
      { q: 18, a: 'FALSE', note: '第4-5段：阿基米德原理使水箱无论是否载船总重量相同' },
      { q: 19, a: 'TRUE', note: '末段：因历史古迹安东尼长城（Antonine Wall）不能建全高转轮' },
      { q: 20, a: 'gates', note: '第6段：Two hydraulic steel gates are raised' },
      { q: 21, a: 'clamp', note: '第6段：A hydraulic clamp... is removed' },
      { q: 22, a: 'axle', note: '第6段：hydraulic motors then begins to rotate the central axle' },
      { q: 23, a: 'cogs', note: '第6段：Two eight-metre-wide cogs + two smaller cogs' },
      { q: 24, a: 'aqueduct', note: '第6段：passes straight onto the aqueduct' },
      { q: 25, a: 'wall', note: '末段：travel under this wall via a tunnel' },
      { q: 26, a: 'locks', note: '末段：remaining 11 metres... by means of a pair of locks' }
    ]
  },
  {
    id: 't1p3',
    test: 1,
    passage: 3,
    title: 'Reducing the Effects of Climate Change',
    titleZh: '地球工程应对气候变化方案',
    bookPage: '书 p.25-29 / 答案 p.125',
    recommend: '速刷熟悉配对',
    types: ['段落信息配对 (Q27-29)', '表格填空 1词 (Q30-36)', '人名观点配对 (Q37-40)'],
    summary: '表格填空 Q30-36 对应文章 B-D 段；人名观点题（37-40）直接回原文圈 4 个科学家名字所在段即可秒杀。',
    answers: [
      { q: 27, a: 'D', note: 'D段：模仿1991年菲律宾皮纳图博火山爆发自然降温现象' },
      { q: 28, a: 'B', note: 'B段：莫斯科五一游行人工消云晴空成功的例子' },
      { q: 29, a: 'A', note: 'A段：geo-engineering — a term which generally refers to...' },
      { q: 30, a: 'sunshade', note: 'B段：form a transparent... sunshade' },
      { q: 31, a: 'iron', note: 'C段：depositing iron in the ocean' },
      { q: 32, a: 'algae', note: 'C段：stimulate the growth of algae' },
      { q: 33, a: 'clouds', note: 'D段：sulphur dioxide would form clouds' },
      { q: 34, a: 'cables', note: 'D段：reinforced high-tension cables' },
      { q: 35, a: 'snow', note: 'D段：radiation to be reflected by the snow' },
      { q: 36, a: 'rivers', note: 'D段：Re-routing Russian rivers' },
      { q: 37, a: 'B', note: 'Phil Rasch：一旦停用，10-20 年内就会迅速反弹回原状' },
      { q: 38, a: 'D', note: 'Martin Sommerkorn：不应排除深入思考该课题及其可能性' },
      { q: 39, a: 'C', note: 'Dan Lunt：需半功率运行（operate at half strength）避免过度冷却' },
      { q: 40, a: 'A', note: 'Roger Angel：无法替代可再生能源（no substitute）' }
    ]
  },
  {
    id: 't2p1',
    test: 2,
    passage: 1,
    title: 'Raising the Mary Rose',
    titleZh: '打捞 16 世纪战舰“玛丽·罗斯号”',
    bookPage: '书 p.41-44 / 答案 p.127',
    recommend: '速刷混脸熟',
    types: ['T/F/NG (Q1-4)', '年份配对 (Q5-8)', '打捞图填空 ≤2词 (Q9-13)'],
    summary: '历史叙事+工程打捞：年份题直接在原文圈年份 A-G，打捞图全部集中于第 6 段（三阶段打捞）。',
    answers: [
      { q: 1, a: 'TRUE', note: '第1段：Accounts of what happened to the ship vary（原因存疑）' },
      { q: 2, a: 'NOT GIVEN', note: '未提是否是当天唯一沉没的船' },
      { q: 3, a: 'TRUE', note: '第2段：nearly all of the starboard half survived intact' },
      { q: 4, a: 'FALSE', note: '第5段：were as yet unaware that it also housed a treasure trove' },
      { q: 5, a: 'C', note: '1965：McKee 启动 Solent Ships 搜寻项目' },
      { q: 6, a: 'B', note: '1840：John Deane 间歇潜水至 1840 年结束' },
      { q: 7, a: 'G', note: '1982：until January 1982... given the go-ahead（批准打捞）' },
      { q: 8, a: 'A', note: '1836：渔民渔网偶然挂到水下障碍物发现' },
      { q: 9, a: '(lifting) frame', note: 'attached to a lifting frame via bolts and wires' },
      { q: 10, a: 'hydraulic jacks', note: 'overcome by using 12 hydraulic jacks' },
      { q: 11, a: 'stabbing guides', note: 'locate the legs into the “stabbing guides”' },
      { q: 12, a: '(lifting) cradle', note: 'transferred underwater into the lifting cradle' },
      { q: 13, a: 'air bags', note: 'fitted with air bags to provide additional cushioning' }
    ]
  },
  {
    id: 't2p2',
    test: 2,
    passage: 2,
    title: 'What destroyed the civilisation of Easter Island?',
    titleZh: '复活节岛文明毁灭的两种学术争论',
    bookPage: '书 p.45-48 / 答案 p.127',
    recommend: '精做 Headings 篇',
    types: ['List of Headings (Q14-20)', 'Summary 1词 (Q21-24)', '5选2多选 (Q25-26)'],
    summary: '全书最经典的 List of Headings 精练篇！结构极工整：A 引出石像，B-C 是 Diamond“自毁说”，D-G 是 Hunt & Lipo“外因/成功说”。',
    answers: [
      { q: 14, a: 'ii', note: 'A段：现代科学最终证实建造者身份（undisputed answer），但怎么搬运仍不明' },
      { q: 15, a: 'ix', note: 'B段：森林消失不能造独木舟捕鱼、吃鸟、土壤侵蚀减产（食物减少）' },
      { q: 16, a: 'viii', note: 'C段：The moai accelerated the self-destruction（石像让局面恶化）' },
      { q: 17, a: 'i', note: 'D段：造数千防风石圈、火山石保墒（创新环境管理/可持续耕作）' },
      { q: 18, a: 'iv', note: 'E段：实验证明绳索摇晃直立搬运（支持当地“石像自己走过去”的传说）' },
      { q: 19, a: 'vii', note: 'F段：波利尼西亚鼠啃食棕榈种子、欧洲殖民者带入传染病与奴隶贩子（居民不可控因素）' },
      { q: 20, a: 'vi', note: 'G段：总结“毁灭者 vs 和平管理者”两种对立观点' },
      { q: 21, a: 'farming', note: 'B段：cleared forests for firewood and farming' },
      { q: 22, a: 'canoes', note: 'B段：no longer construct wooden canoes for fishing' },
      { q: 23, a: 'birds', note: 'B段：they ate birds' },
      { q: 24, a: 'wood', note: 'C段：required both a lot of wood and a lot of people' },
      { q: '25&26', a: 'B, C（顺序可换）', note: '分歧点：B 如何搬运（木撬滚木 vs 直立行走）+ C 石像对社会的影响（加剧自毁 vs 维持和平）' }
    ]
  },
  {
    id: 't2p3',
    test: 2,
    passage: 3,
    title: 'Neuroaesthetics',
    titleZh: '神经美学：大脑如何欣赏艺术',
    bookPage: '书 p.49-53 / 答案 p.127',
    recommend: '速刷混脸熟',
    types: ['4选1单选 (Q27-30)', '选词 Summary (Q31-33)', 'Y/N/NG (Q34-39)', '主旨单选 (Q40)'],
    summary: '注意 Q34-39 是 YES/NO/NOT GIVEN（考察作者观点，作答切忌写成 TRUE/FALSE！）。',
    answers: [
      { q: 27, a: 'C', note: '第2段：inclination to follow the crowd（容易受他人意见影响）' },
      { q: 28, a: 'D', note: '第3段：can sense the artist’s vision（能感知创作者意图）' },
      { q: 29, a: 'B', note: '第4段：brain sees images as puzzles, rewarding moment of recognition' },
      { q: 30, a: 'A', note: '第5段：deceptively simple, meticulously composed（看似简单实则精心构图）' },
      { q: 31, a: 'C', note: 'C emotions（amygdala plays a crucial role in our feelings）' },
      { q: 32, a: 'B', note: 'B complexity（visual intricacy / detail）' },
      { q: 33, a: 'H', note: 'H images（原文 fractals / motifs → repeated images）' },
      { q: 34, a: 'NOT GIVEN', note: '未提 Forsythe 的发现与“以往关于分形功能的观点”是否矛盾' },
      { q: 35, a: 'YES', note: '第8段：The hypothesis will need to be thoroughly tested' },
      { q: 36, a: 'NO', note: '第8段：时尚只决定当前流行，符合视觉系统的作品才会长存（不是“完全取决于趋势”）' },
      { q: 37, a: 'NO', note: '末段：be foolish to reduce art appreciation to a set of scientific laws' },
      { q: 38, a: 'YES', note: '末段：shouldn’t underestimate... place in history and artistic environment' },
      { q: 39, a: 'NOT GIVEN', note: '只说艺术与科学在探索体系上相似，未比较谁“更容易”找到意义' },
      { q: 40, a: 'A', note: '副标题：科学视角看大脑如何对抽象艺术作出反应' }
    ]
  },
  {
    id: 't3p1',
    test: 3,
    passage: 1,
    title: 'The Story of Silk',
    titleZh: '丝绸发展史：从中国嫘祖到现代工业',
    bookPage: '书 p.65-68 / 答案 p.129',
    recommend: '速刷混脸熟',
    types: ['笔记填空 1词 (Q1-9)', 'T/F/NG (Q10-13)'],
    summary: '中国背景题材阅读起来很亲切！前 9 题按时间线直接回文章扫 3000 BC、168 AD、550 AD、20th century 即可全对。',
    answers: [
      { q: 1, a: 'tea', note: 'cocoon landed in the hot tea' },
      { q: 2, a: 'reel', note: 'devised a special reel to draw the fibres' },
      { q: 3, a: 'women', note: 'solely restricted to women' },
      { q: 4, a: 'royalty', note: 'originally, only royalty were entitled to wear silk' },
      { q: 5, a: 'currency', note: 'used as a unit of currency' },
      { q: 6, a: 'paper', note: 'earliest indication of silk paper... died around 168 AD' },
      { q: 7, a: 'wool', note: 'bringing gold, silver and wool to the East' },
      { q: 8, a: 'monks', note: 'monks... smuggled silkworm eggs... in 550 AD' },
      { q: 9, a: 'nylon', note: 'new manmade fibres, such as nylon' },
      { q: 10, a: 'FALSE', note: '第3段：silk was considered to be worth more than gold（丝绸比黄金贵）' },
      { q: 11, a: 'TRUE', note: '第3段：Few merchants travelled the entire route; handled by middlemen' },
      { q: 12, a: 'FALSE', note: '第4段：拜占庭像中国一样严格垄断保密，是阿拉伯人征服波斯后才传遍西方' },
      { q: 13, a: 'NOT GIVEN', note: '只说中国占全球产量近三分之二并出口生丝和丝线，未比较“丝线是否占出口大头”' }
    ]
  },
  {
    id: 't3p2',
    test: 3,
    passage: 2,
    title: 'Great Migrations',
    titleZh: '动物大迁徙的定义与保护危机',
    bookPage: '书 p.69-72 / 答案 p.129',
    recommend: '速刷混脸熟',
    types: ['T/F/NG (Q14-18)', '句子配对 (Q19-22)', 'Summary 1词 (Q23-26)'],
    summary: '结构极清晰：前半部分讲动物学家 Dingle 和 Berger 对迁徙的不同定义（对应 Q14-22），后两段讲美洲叉角羚 pronghorn（对应 Q23-26）。',
    answers: [
      { q: 14, a: 'FALSE', note: 'local gulls dive voraciously, arctic tern takes no notice' },
      { q: 15, a: 'TRUE', note: '第3段：biologists define it differently, depending on what sorts of animals they study' },
      { q: 16, a: 'NOT GIVEN', note: '只说蚜虫移动也可算作迁徙，未提“有多少专家同意”' },
      { q: 17, a: 'TRUE', note: '第5段：sensitive to blue light for takeoff, yellow light to land' },
      { q: 18, a: 'FALSE', note: '第5段：focuses attention on what wildebeest shares with aphids（找共同点而非区分差异）' },
      { q: 19, a: 'G', note: 'tend to be linear, not zigzaggy → follow a straight line' },
      { q: 20, a: 'C', note: 'overfeeding / fatten themselves → eat more than immediate purposes' },
      { q: 21, a: 'A', note: 'undeterred by challenges → unlikely to be discouraged by difficulties' },
      { q: 22, a: 'E', note: 'undistracted by temptations（ignore herring）→ ignore distractions' },
      { q: 23, a: 'speed', note: 'dependent on distance vision and speed' },
      { q: 24, a: 'plains', note: 'down onto the plains... in deep snow' },
      { q: 25, a: 'bottlenecks', note: 'severity of its constriction at three bottlenecks' },
      { q: 26, a: 'corridor / passageway', note: 'corridor of open ground / choke off their passageway' }
    ]
  },
  {
    id: 't3p3',
    test: 3,
    passage: 3,
    title: 'Preface to ‘How the other half thinks’',
    titleZh: '《另一半人如何思考：数学推理之旅》序言',
    bookPage: '书 p.73-76 / 答案 p.129',
    recommend: '精做段落配对',
    types: ['段落信息配对·可复选 (Q27-34)', '句子填空 1词 (Q35-40)'],
    summary: '全书最具代表性的 NB 可复选段落配对！先花 3 分钟做完 Q35-40 句子填空顺一遍文章脉络，再做 Q27-34（其中 B、E 等段会被用两次）。',
    answers: [
      { q: 27, a: 'D', note: 'D段：Other scientists omit the mathematics（假定读者缺数学知识而省去公式）' },
      { q: 28, a: 'B', note: 'B段：this book differs from most books on mathematics' },
      { q: 29, a: 'G', note: 'G段：医生和律师的两封亲身经历感谢信' },
      { q: 30, a: 'C', note: 'C段：既是结构工程师又是艺术家、既是电气工程师又是歌剧演员' },
      { q: 31, a: 'B', note: 'B段：Some present lives... Others describe applications... Yet others procedures' },
      { q: 32, a: 'E', note: 'E段：turn pages much more slowly than when reading a novel or newspaper' },
      { q: 33, a: 'A', note: 'A段：Anyone can understand every step in the reasoning' },
      { q: 34, a: 'F', note: 'F段：kept in mind two types of readers（被劝退的人 & 爱好者）' },
      { q: 35, a: 'beginner', note: 'A段：parts so simple a beginner could play them' },
      { q: 36, a: 'arithmetic', note: 'A段：uses at most only elementary arithmetic' },
      { q: 37, a: 'intuitive', note: 'C段：intuition plays a significant role / intuitive style' },
      { q: 38, a: 'scientists', note: 'D段：Other scientists have written books... had to omit mathematics' },
      { q: 39, a: 'experiments', note: 'E段：pencil and paper ready to check claims and carry out experiments' },
      { q: 40, a: 'theorems', note: 'G段：especially theorems, how to analyze complicated principles' }
    ]
  },
  {
    id: 't4p1',
    test: 4,
    passage: 1,
    title: 'Research using twins',
    titleZh: '双胞胎研究与表观遗传学（含勘误）',
    bookPage: '书 p.87-90 / 答案 p.131（★Q9 以勘误为准）',
    recommend: '速刷必看勘误',
    types: ['T/F/NG (Q1-4)', '研究者配对·可复选 (Q5-9)', '选词 Summary (Q10-13)'],
    summary: '注意第 9 题原书 p.131 错印成 A，PDF p.144 勘误已明确修正为 B（Thomas Bouchard）。',
    answers: [
      { q: 1, a: 'FALSE', note: '第1段：同卵双胞胎皮肤年轻与否的差异“must be due to environmental factors”' },
      { q: 2, a: 'NOT GIVEN', note: '未比较双胞胎与非双胞胎患病风险高低' },
      { q: 3, a: 'NOT GIVEN', note: '未提及 Bouchard 是否在报纸上登广告征集双胞胎' },
      { q: 4, a: 'TRUE', note: '第7段：tied to neither nature nor nurture（third component）' },
      { q: 5, a: 'A', note: 'Francis Galton：coined the phrase “nature and nurture”' },
      { q: 6, a: 'C', note: 'Danielle Reed：Epigenetics... sort of a whole new world' },
      { q: 7, a: 'B', note: 'Thomas Bouchard：statistical concept called heritability' },
      { q: 8, a: 'A', note: 'Francis Galton：1875 年最早提出用双胞胎研究遗传' },
      { q: 9, a: 'B（★勘误修正）', note: 'Thomas Bouchard：Minnesota Study of Twins Reared Apart（原书误印 A）' },
      { q: 10, a: 'D', note: 'D chemicals（Epigenetic processes are chemical reactions）' },
      { q: 11, a: 'B', note: 'B organs（heart, brain, or liver cells）' },
      { q: 12, a: 'E', note: 'E environment（environment directly impacts on genes）' },
      { q: 13, a: 'F', note: 'F behaviour/behavior（behavioral problems）' }
    ]
  },
  {
    id: 't4p2',
    test: 4,
    passage: 2,
    title: 'An Introduction to Film Sound',
    titleZh: '电影声音的三要素与艺术功能（含勘误）',
    bookPage: '书 p.91-95 / 答案 p.131（★Q19, 21-26 以勘误为准）',
    recommend: '速刷必看勘误',
    types: ['4选1单选 (Q14-18)', 'T/F/NG (Q19-23)', '句子配对 (Q24-26)'],
    summary: '本篇原书答案页（p.131）漏印/错位严重！以下 14-26 题已全部按照 PDF p.144 官方勘误表核实无误。',
    answers: [
      { q: 14, a: 'B', note: '第1段：cannot afford to underestimate the importance of film sound' },
      { q: 15, a: 'A', note: '第2段：film personality and life personality seem to merge' },
      { q: 16, a: 'B', note: '第3段：《2001》对白少且平庸（banal），是为了衬托人类语言的渺小' },
      { q: 17, a: 'D', note: '第4段：高速对白凸显女主迷糊和影片荒诞幽默感（key elements）' },
      { q: 18, a: 'C', note: '第5段：破门声加大音量制造悬念（modified to manipulate response）' },
      { q: 19, a: 'TRUE（★勘误修正）', note: '第7段：noticeable in its absence（没有背景音乐反而显眼）' },
      { q: 20, a: 'TRUE', note: '第7段：foreshadows a change in mood / approaching menace' },
      { q: 21, a: 'NOT GIVEN（★勘误修正）', note: '原文未比较背景音乐对“不同人群”影响大小' },
      { q: 22, a: 'TRUE（★勘误修正）', note: '第8段：aid viewer understanding by linking scenes' },
      { q: 23, a: 'FALSE（★勘误修正）', note: '末段：noted by only our subconscious minds（潜意识察觉，非主动意识到）' },
      { q: 24, a: 'C（★勘误修正）', note: '第1段：three tracks mixed and balanced → create desired effects' },
      { q: 25, a: 'A（★勘误修正）', note: '第2段：dialogue serves to express feelings and motivations' },
      { q: 26, a: 'E（★勘误修正）', note: '第3段：voice textures fit physiognomy and gestures → realistic persona' }
    ]
  },
  {
    id: 't4p3',
    test: 4,
    passage: 3,
    title: '‘This Marvellous Invention’',
    titleZh: '人类语言：有限音素创造无限意义',
    bookPage: '书 p.96-99 / 答案 p.131',
    recommend: '速刷混脸熟',
    types: ['List of Headings (Q27-32)', '选词 Summary (Q33-36)', 'Y/N/NG (Q37-40)'],
    summary: '全篇 6 段（A-F）对应 6 个小标题，语言哲学科普文；注意 C/D 段逻辑紧密，E/F 分别举例土耳其语“超长单词”与苏美尔语“省音槽位”。',
    answers: [
      { q: 27, a: 'vi', note: 'A段：language must take pride of place（为何最重要）' },
      { q: 28, a: 'iv', note: 'B段：greatest invention except it was never invented（看似矛盾的特征）' },
      { q: 29, a: 'ii', note: 'C段：out of barely three dozen measly morsels of sound（有限声音组合无限意义）' },
      { q: 30, a: 'vii', note: 'D段：allows just about everybody...（人人都会用的普遍能力）' },
      { q: 31, a: 'i', note: 'E段：外国语言（如土耳其语长词）凸显其惊艳设计' },
      { q: 32, a: 'v', note: 'F段：苏美尔语中连“无声/空槽位（nothing）”都有具体含义' },
      { q: 33, a: 'E', note: 'E material（transformed our material existence）' },
      { q: 34, a: 'G', note: 'G fundamental（原文 pale in significance → 最根本）' },
      { q: 35, a: 'B', note: 'B complex（extraordinary sophistication）' },
      { q: 36, a: 'F', note: 'F easy（deceptive ease）' },
      { q: 37, a: 'NO', note: 'A段：Without language, we could never have embarked on our ascent' },
      { q: 38, a: 'YES', note: 'B段：no one since has celebrated more eloquently the magnitude' },
      { q: 39, a: 'NOT GIVEN', note: '未比较“句子”和“单词”谁解释得更清楚' },
      { q: 40, a: 'YES', note: 'F段：the people who invented writing and thus enabled documentation of history' }
    ]
  }
];

export const WRITING_GUIDE = {
  task1: {
    subtitle: '提炼自《雅思小作文三步法.pptx》 · 150词以上（建议 160–190 词） · 20 分钟 · 占写作 1/3',
    rules: [
      '只报告数据，绝不写原因分析或个人感想（写 "because..." 会扣分）',
      '绝不照抄题干原句，必须换词/换词性/换句式，并且删掉 "below"',
      '必须写第二段 Overview（不写直接 Task Achievement 封顶 5 分）',
      '挑 4–6 个关键极值与转折数据，按逻辑分组，同一个数字绝不重复写两遍'
    ],
    timePlan: '0-3 min 读图找极值/分组 → 3-5 min 构思 Overview → 5-17 min 写四段 → 17-20 min 查时态/单复数/词数',
    frames: [
      {
        label: 'P1 开头改写句框（删掉 below，选 1 句套用）',
        text: 'The [chart/line graph/pie charts/table] illustrates changes in [主题] in [地点] between [年份] and [年份]. / The two pie charts compare the proportions of [群体] in terms of [主题] in [年份1] and [年份2].'
      },
      {
        label: 'P2 总体概述句框（绝对不出现具体数字！）',
        text: 'Overall, [上升项] increased dramatically over the period, while [下降项] showed the opposite trend. It is also clear that [极值项] accounted for the largest share throughout.'
      },
      {
        label: 'Slide 30 折线/趋势万能动词组（可点击复制）',
        text: 'rose steadily / increased dramatically / plunged to / peaked at / stood at / fluctuated / fell sharply / reached a trough of / remained stable at / leveled off at / hit a low of'
      },
      {
        label: '高分近似与对比连接词',
        text: 'about / roughly / just over / slightly under / respectively / In contrast, ... / By comparison, ... / ... rose from X to Y, making it the highest...'
      }
    ],
    checklist: [
      'P1 是否彻底改写了题干且删掉了 below？',
      'P2 是否有 Overall 引导且不含具体百分比/数值？',
      'P3 + P4 是否分成 2 个逻辑组（而非按年份流水账）且每组都带单位（%, tonnes）？',
      '过去年份（如 1967–2007、2000/2010）是否全篇稳用一般过去时？'
    ]
  },
  task2: {
    subtitle: '提炼自《雅思大作文完整版.pptx》 · 250词以上 · 40 分钟 · 占写作 2/3',
    fourSteps: [
      '① 承题：Paraphrase 改写题目 + 首段最后一句明确亮出立场（推荐“基本同意 + 有限让步”）',
      '② 破题：把总论点拆成 2 个主体分论点（+ 1 个让步反驳段），切忌两点理由其实是一回事',
      '③ 议论：立论段用【观点 Claim → 理由 Reason → 例证 Evidence → 影响 Impact】四步展开；让步段用【让步 Concede → 质疑 Challenge → 反驳 Rebut】',
      '④ 总结：40–50 词，【换句式重申立场 → 概括理由 → 条件/展望收束】，绝不引入新观点'
    ],
    pitfalls: [
      '❌ I am agree with this idea → ✅ I largely agree that... / It is reasonable to contend that...',
      '❌ is become / everybody recycle → ✅ has become / everybody recycles（高考 130 最容易手滑丢的三单与被动！）',
      '❌ more beautiful and more clean → ✅ cleaner and more liveable',
      '❌ 只在最后一段才说自己观点 → ✅ 第一段最后一句必须明确给立场'
    ],
    frames: [
      {
        label: '首段：改写背景 + 让步式明确立场（最稳高分写法）',
        text: 'It is often argued that [改写题干观点A], whereas others contend that [观点B]. While I accept that [对方合理点] also plays a part, I largely agree that [己方核心立场], because [总理由].'
      },
      {
        label: '主体立论段：Claim → Reason → Evidence → Impact',
        text: 'The main reason why [分论点] is that [核心原因]. This is largely because [展开解释]. A case in point is [具体国家/生活例子], where [具体结果]. As a result, this leads to [积极影响].'
      },
      {
        label: '让步反驳段：Concede → Challenge → Rebut',
        text: 'Admittedly, [承认对方有一点道理]; however, this view overlooks the fact that [指出局限/漏洞]. In reality, [己方反驳], which is why [拉回己方立场].'
      },
      {
        label: '结尾段：Restate → Summarize → Provided that 收束',
        text: 'In conclusion, [换词重申立场] is both justified and necessary. Provided that [加上合理配套条件], it remains the most reliable way to [达成目标].'
      }
    ],
    modelEssay: {
      title: 'PPT 第 40 页精选 7 分示范：Test 2 Task 2（家庭垃圾回收是否必须立法）',
      text: `It is often argued that households do not recycle enough of their waste, and that the most effective remedy is to introduce legal penalties for those who fail to comply. While I accept that education and convenience also play a part, I largely agree that legislation is essential, because voluntary action alone has repeatedly proved insufficient.\n\nThe main reason why laws are needed is that behaviour rarely changes without incentives or consequences. In most cities, recycling bins are already provided free of charge, yet a large share of households still send recyclable material to landfill. This suggests that the barrier is not a lack of facilities but a lack of motivation — and only enforceable rules can supply it. Where fines and mandatory sorting have been introduced, as in South Korea and several German states, recycling rates have risen sharply within a few years.\n\nAdmittedly, legislation works best when it is supported by other measures. Clear labelling, accessible collection points and school campaigns help citizens understand what and how to recycle, and they reduce the sense of being coerced. A law that is poorly explained, or imposed where no recycling infrastructure exists, is likely to breed resentment rather than compliance.\n\nIn conclusion, making recycling a legal requirement is both justified and necessary: it turns an optional virtue into a shared obligation. Provided that such laws are accompanied by education and adequate facilities, they are the most reliable way to change household behaviour at scale.`
    }
  },
  prompts: [
    {
      id: 'w-t2t1',
      test: 2,
      task: 'Task 1',
      isHot: true,
      bookPage: '书 p.54（小作文PPT末页原图；书p.134有6分范文）',
      title: '英国某大学学生除英语外掌握外语比例（2000 vs 2010 双饼图）',
      promptEn: 'The charts below show the proportions of British students at one university in England who were able to speak other languages in addition to English, in 2000 and 2010.',
      intro: 'The two pie charts compare the percentages of UK undergraduates at an English university who spoke foreign languages in 2000 and 2010.',
      overview: 'Overall, the proportion of students who spoke at least one foreign language rose over the decade, with Spanish remaining the most popular choice. Conversely, the share of monolingual students halved from 20% to 10%.',
      structure: [
        'Body 1（上升/最大类）：Spanish only 由 30% 升至 35%（始终最大）；会“另一种语言”从 15% 升到 20%，会“两种外语”从 10% 升到 15%。',
        'Body 2（下降/不变类）：只说英语（No other language）从 20% 减半至 10%；French only 从 15% 降至 10%；German only 始终维持在 10% 不变。'
      ],
      vocab: 'proportion / monolingual / halved / remained unchanged at / accounted for the largest share'
    },
    {
      id: 'w-t4t1',
      test: 4,
      task: 'Task 1',
      isHot: true,
      bookPage: '书 p.100（小作文PPT末页原图；书p.138有官方7分范文！）',
      title: 'Ashdown 博物馆翻修前后客流量与满意度（表格 + 双饼图）',
      promptEn: 'The table below shows the numbers of visitors to Ashdown Museum during the year before and the year after it was refurbished. The charts show the result of surveys asking visitors how satisfied they were with their visit.',
      intro: 'The table compares visitor numbers at Ashdown Museum in the year prior to and following its refurbishment, while the pie charts illustrate changes in visitor satisfaction during the same two periods.',
      overview: 'Overall, both total attendance and overall satisfaction rose markedly after the renovation. Notably, satisfied and very satisfied responses overtook dissatisfaction to make up three-quarters of all feedback.',
      structure: [
        'Body 1（表格人数 + 满意率上升）：参观人数从 74,000 增至 92,000（增长近四分之一）；Very satisfied 由 15% 翻倍多至 35%，Satisfied 从 30% 升至 40%。',
        'Body 2（不满意率下降 + 无回应）：Dissatisfied 从翻修前最大的 40% 大幅跌至 15%；Very dissatisfied 也由 10% 减半至 5%，No response 维持 5% 不变。'
      ],
      vocab: 'refurbishment / renovation / attendance / markedly / satisfaction levels / fell sharply'
    },
    {
      id: 'w-t2t2',
      test: 2,
      task: 'Task 2',
      isHot: true,
      bookPage: '书 p.55（大作文PPT第35-41页重点精讲 + 7分范文！）',
      title: '政府是否必须立法强制家庭垃圾回收（观点表态类）',
      promptEn: 'Some people claim that not enough of the waste from homes is recycled. They say that the only way to increase recycling is for governments to make it a legal requirement. To what extent do you think laws are needed...?',
      intro: 'It is often argued that households do not recycle enough of their waste, and that introducing legal penalties is the most effective remedy. While education also plays a role, I largely agree that legislation is essential.',
      overview: '立场：基本同意（largely agree）——自愿行动动力不足，必须立法配合罚款；但同时需完善配套设施与分类宣传。',
      structure: [
        'Body 1（立论：为什么需要法律）：光有垃圾桶但无约束，家庭依然图省事混丢；韩国、德国经验表明强制分类与罚款能在几年内大幅拉高回收率。',
        'Body 2（让步与配套）：承认仅靠严厉立法会引发抵触，法律只有与清晰标签、便捷回收点及学校教育配合才能发挥最大效力。'
      ],
      vocab: 'legal requirement / enforceable rules / compliance / landfill / breed resentment / accompany'
    },
    {
      id: 'w-t3t2',
      test: 3,
      task: 'Task 2',
      isHot: true,
      bookPage: '书 p.78（大作文PPT第42/51页原图；书p.137有官方7分范文！）',
      title: '学外语是否只是为了出国旅游或工作（双边讨论类）',
      promptEn: 'Some people say that the only reason for learning a foreign language is in order to travel to or work in a foreign country. Others say that these are not the only reasons why someone should learn a foreign language.',
      intro: 'Opinions differ as to whether travelling or working abroad constitutes the sole justification for acquiring a foreign language. While practical mobility is undeniably a major driver, I firmly believe other cultural and cognitive benefits are equally compelling.',
      overview: '立场：双边讨论后倾向后者——就业旅游确实是主要动机，但绝非唯一理由（认知提升、文化理解、个人兴趣）。',
      structure: [
        'Body 1（View A 旅游工作动机）：全球化下跨国求职需要多语种竞争力；海外旅行会当地语言能保障安全与深度体验。',
        'Body 2（View B 其他重要理由 + 己见）：学外语能直接读懂原著影视理解他国文化；心理学也证明双语能锻炼大脑认知灵活性与同理心。'
      ],
      vocab: 'sole justification / career prospects / broaden one’s horizons / cross-cultural understanding / cognitive flexibility'
    },
    {
      id: 'w-t1t1',
      test: 1,
      task: 'Task 1',
      isHot: false,
      bookPage: '书 p.30（静态 6 饼图；书 p.132 附 4.5 分反面案例可避坑）',
      title: '世界六个地区工、农、生活用水比例（6 个饼图）',
      promptEn: 'The charts below show the percentage of water used for different purposes in six areas of the world.',
      intro: 'The six pie charts compare the proportions of water consumed by industry, agriculture and households across six global regions.',
      overview: 'Overall, agriculture accounts for the vast majority of water use in developing regions (Asia, Africa and South America), whereas industrial consumption dominates in North America and Europe. Domestic use makes up the smallest share everywhere.',
      structure: [
        'Body 1（农业主导 4 区）：中亚农业用水高达 88%，非洲 84%，东南亚 81%，南美 71%（工业用水仅 5%–12%）。',
        'Body 2（工业主导 2 区 + 生活用水）：欧洲工业用水占 53%、北美占 48%（农业分别为 32% 和 39%）；全人类生活用水仅占 7%–19%（南美最高 19%，中亚/东南亚仅 7%）。'
      ],
      vocab: 'agricultural / industrial / domestic use / vast majority / respectively / conversely'
    },
    {
      id: 'w-t3t1',
      test: 3,
      task: 'Task 1',
      isHot: false,
      bookPage: '书 p.77（1967-2007 折线图；书 p.136 附 6 分范文）',
      title: '1967–2007 欧洲四国人均二氧化碳排放量（折线图）',
      promptEn: 'The graph below shows average carbon dioxide (CO2) emissions per person in the United Kingdom, Sweden, Italy and Portugal between 1967 and 2007.',
      intro: 'The line graph illustrates per capita carbon dioxide emissions in four European countries — the UK, Sweden, Italy and Portugal — over a 40-year period from 1967 to 2007.',
      overview: 'Overall, per-person emissions in the UK and Sweden declined over the period, whereas Italy and Portugal saw substantial increases. Despite falling steadily, the UK remained the highest emitter throughout.',
      structure: [
        'Body 1（下降组：英 & 瑞）：英国从近 11 吨持续缓降至约 8.8 吨；瑞典先从约 8.6 升到 1977 年峰值 10.4 吨，随后骤降到 2007 年约 5.4 吨。',
        'Body 2（上升组：意 & 葡）：意大利从约 4.2 吨升至 1997 年约 7.8 吨并保持平稳；葡萄牙基数最低（1.2 吨），却增幅最猛，2007 年追平瑞典（约 5.4 吨）。'
      ],
      vocab: 'metric tonnes per person / highest emitter / peaked at / plunged sharply / caught up with / leveled off'
    },
    {
      id: 'w-t1t2',
      test: 1,
      task: 'Task 2',
      isHot: false,
      bookPage: '书 p.31（观点表态类；书 p.133 附 5.5 分范文）',
      title: '政府应把钱花在铁路而不是公路上（To what extent agree/disagree）',
      promptEn: 'Governments should spend money on railways rather than roads. To what extent do you agree or disagree with this statement?',
      intro: 'It is often argued that public transport budgets should be directed towards expanding railway networks instead of road construction. While highways remain indispensable for local logistics, I largely agree that railways deserve higher investment.',
      overview: '立场：部分/基本同意（偏重铁路，但不完全忽视公路）——铁路运力大、低碳、解决城际拥堵；但偏远地区与“最后一公里”仍离不开公路。',
      structure: [
        'Body 1（支持优先投铁路）：单次载客/货运量远大于私家车，能显著缓解高速拥堵并降低人均碳排放（环保+高效）。',
        'Body 2（让步：公路也不可替代）：并非所有城镇都能通火车，农村物流与日常短途通勤高度依赖公路网，应平衡基建。'
      ],
      vocab: 'public infrastructure / traffic congestion / carbon footprint / mass transit / last-mile delivery / strike a balance'
    },
    {
      id: 'w-t4t2',
      test: 4,
      task: 'Task 2',
      isHot: false,
      bookPage: '书 p.101（双边讨论类；书 p.139 附 5.5 分范文）',
      title: '经济发展是政府首要目标 vs 其他领域进步同样重要（Both views）',
      promptEn: 'Many governments think that economic progress is their most important goal. Some people, however, think that other types of progress are equally important for a country. Discuss both these views and give your own opinion.',
      intro: 'While numerous authorities prioritise economic growth above all else, many citizens contend that social, educational and environmental advancements merit equal attention. From my perspective, economic prosperity is the foundation, yet balanced non-economic progress is essential.',
      overview: '立场：折中并偏重协调发展——经济提供了财政基石，但医疗、教育、环保决定国民真正幸福度与可持续发展。',
      structure: [
        'Body 1（View A 经济优先的合理性）：只有 GDP 增长和充分就业，政府才有税收去建医院、学校、搞科研并消除贫困。',
        'Body 2（View B 其他进步同样关键 + 己见）：若只顾经济导致污染、教育失衡和高压社会，经济增长不可持续；医疗、法治与环保同等重要。'
      ],
      vocab: 'prioritise / economic prosperity / tax revenue / social welfare / sustainable development / quality of life'
    }
  ]
};

/**
 * 提取自《剑11》全部 16 个听力 Section 的填空标准答案（共 75 词）
 * 支持浏览器英音语音听写 + 语境挖空双重练习
 */
export const SPELLING_BANK = [
  // Test 1
  { id: 'sp01', test: 1, section: 'S1', word: 'Charlton', accepted: ['charlton'], zh: '查尔顿厅（拼写专有名词）', sentence: 'The ___ Room seats 100.', isHard: true, tip: '专有名词注意听力拼读 C-H-A-R-L-T-O-N' },
  { id: 'sp02', test: 1, section: 'S1', word: '115', accepted: ['115', '£115', 'one hundred and fifteen', 'one hundred fifteen'], zh: '周六晚租厅费用', sentence: 'Cost of Main Hall for Saturday evening: £___', isHard: false, tip: '区分周中干扰项 75' },
  { id: 'sp03', test: 1, section: 'S1', word: 'cash', accepted: ['cash'], zh: '现金', sentence: '+ £250 deposit (___ payment is required)', isHard: false, tip: '押金只收现金' },
  { id: 'sp04', test: 1, section: 'S1', word: 'parking', accepted: ['parking'], zh: '停车位', sentence: 'Cost includes use of tables and chairs and also ___.', isHard: false, tip: '动名词作名词' },
  { id: 'sp05', test: 1, section: 'S1', word: 'music', accepted: ['music'], zh: '音乐（演出许可）', sentence: 'Will need a ___ licence.', isHard: false, tip: 'licence 为英式拼写' },
  { id: 'sp06', test: 1, section: 'S1', word: 'entry', accepted: ['entry'], zh: '入场/进入', sentence: 'contact caretaker in advance to arrange ___', isHard: true, tip: '原话 arrange entry，别写成 enter' },
  { id: 'sp07', test: 1, section: 'S1', word: 'stage', accepted: ['stage'], zh: '舞台（后门）', sentence: 'The band should use the ___ door at the back.', isHard: false, tip: '后门即舞台专用门' },
  { id: 'sp08', test: 1, section: 'S1', word: 'code', accepted: ['code'], zh: '密码', sentence: 'Need to know the ___ for the cleaning cupboard.', isHard: false, tip: '开柜密码' },
  { id: 'sp09', test: 1, section: 'S1', word: 'floors', accepted: ['floor', 'floors'], zh: '地板', sentence: 'The ___ must be washed and rubbish placed in black bags.', isHard: false, tip: '单复数均可' },
  { id: 'sp10', test: 1, section: 'S1', word: 'decorations', accepted: ['decoration', 'decorations'], zh: '装饰品', sentence: 'All ___ must be taken down.', isHard: true, tip: '拼写注意 -tion 别少字母' },
  { id: 'sp11', test: 1, section: 'S2', word: 'animals', accepted: ['animal', 'animals'], zh: '动物', sentence: 'Visitors should take care not to harm any ___.', isHard: false, tip: '单复数均可' },
  { id: 'sp12', test: 1, section: 'S2', word: 'tools', accepted: ['tool', 'tools'], zh: '农具/工具', sentence: 'Visitors should not touch any ___.', isHard: false, tip: '不要写成 toys' },
  { id: 'sp13', test: 1, section: 'S2', word: 'shoes', accepted: ['shoes'], zh: '鞋子', sentence: 'Visitors should wear ___.', isHard: true, tip: '必须复数 shoes' },
  { id: 'sp14', test: 1, section: 'S2', word: 'dogs', accepted: ['dog', 'dogs'], zh: '狗', sentence: 'not bring ___ into the farm, with certain exceptions', isHard: false, tip: '导盲犬除外' },
  { id: 'sp15', test: 1, section: 'S4', word: 'conservation', accepted: ['conservation'], zh: '生态保护', sentence: 'important for locating targets for ___', isHard: true, tip: '高频学术词！别写成 conversation（对话）' },
  { id: 'sp16', test: 1, section: 'S4', word: 'food', accepted: ['food', 'foods'], zh: '食物', sentence: 'found that ocean hotspots were not always rich in ___', isHard: false, tip: '单复数均可' },
  { id: 'sp17', test: 1, section: 'S4', word: 'surface', accepted: ['surface'], zh: '表面', sentence: 'had higher temperatures at the ___', isHard: true, tip: '拼写注意 s-u-r-f-a-c-e' },
  { id: 'sp18', test: 1, section: 'S4', word: 'oxygen', accepted: ['oxygen', 'o2'], zh: '氧气', sentence: 'had sufficient ___ in the water', isHard: true, tip: '拼写 o-x-y-g-e-n 勿丢 y' },
  { id: 'sp19', test: 1, section: 'S4', word: 'mammals', accepted: ['mammals'], zh: '哺乳动物', sentence: 'looked for hotspots for marine ___', isHard: true, tip: '双写 m + 必须复数 mammals' },
  { id: 'sp20', test: 1, section: 'S4', word: 'ice', accepted: ['ice'], zh: '冰层', sentence: 'found new ocean species living under the ___', isHard: false, tip: '不可数' },
  { id: 'sp21', test: 1, section: 'S4', word: 'decline', accepted: ['decline', 'declining', 'decrease'], zh: '衰退/减少', sentence: 'considering population size... rate of ___', isHard: true, tip: 'decline / declining / decrease 均对' },
  { id: 'sp22', test: 1, section: 'S4', word: 'map', accepted: ['map'], zh: '地图', sentence: 'make a distribution ___ for each one', isHard: false, tip: '分布图' },
  { id: 'sp23', test: 1, section: 'S4', word: 'migration', accepted: ['migration'], zh: '迁徙', sentence: 'establish ___ corridors (e.g. for turtles)', isHard: true, tip: 'm-i-g-r-a-t-i-o-n' },
  { id: 'sp24', test: 1, section: 'S4', word: 'consumption', accepted: ['consumption'], zh: '食用/消费', sentence: 'catch fish only for the purpose of ___', isHard: true, tip: 'consume 的名词形式：c-o-n-s-u-m-p-t-i-o-n，有 p！' },

  // Test 2
  { id: 'sp25', test: 2, section: 'S1', word: 'hostel', accepted: ['hostel'], zh: '青年旅舍/宿舍', sentence: 'Currently staying in a ___ during the week.', isHard: true, tip: '注意是 hostel 不是 hotel！' },
  { id: 'sp26', test: 2, section: 'S1', word: 'Buckleigh', accepted: ['buckleigh'], zh: '巴克利街（地名拼写）', sentence: 'Postal address: 17, ___ Street, Stamford', isHard: true, tip: '拼写 B-U-C-K-L-E-I-G-H' },
  { id: 'sp27', test: 2, section: 'S1', word: 'PE9 7QT', accepted: ['pe9 7qt', 'pe97qt'], zh: '邮编', sentence: 'Postcode: ___', isHard: true, tip: '英国邮编字母数字组合' },
  { id: 'sp28', test: 2, section: 'S1', word: 'waiter', accepted: ['waiter'], zh: '服务员', sentence: 'student and part-time job as a ___', isHard: false, tip: 'a-i-t-e-r' },
  { id: 'sp29', test: 2, section: 'S1', word: 'politics', accepted: ['politics'], zh: '政治学', sentence: 'Studying ___ (major subject) and history', isHard: true, tip: '学科名带 -s：politics' },
  { id: 'sp30', test: 2, section: 'S1', word: 'cycling', accepted: ['cycling'], zh: '骑行', sentence: 'Hobbies: does a lot of ___', isHard: false, tip: '去掉 e 加 ing' },
  { id: 'sp31', test: 2, section: 'S1', word: 'cinema', accepted: ['cinema'], zh: '电影院', sentence: '...and is interested in the ___', isHard: false, tip: 'c-i-n-e-m-a' },
  { id: 'sp32', test: 2, section: 'S1', word: 'disabled', accepted: ['disabled'], zh: '残障的', sentence: 'wants to work with young people who are ___', isHard: true, tip: '注意末尾 -d：disabled' },
  { id: 'sp33', test: 2, section: 'S1', word: '4.30', accepted: ['4.30', '4:30', '4.30 pm', '4:30 pm', 'half past four'], zh: '下午四点半', sentence: 'next Monday at ___ pm', isHard: false, tip: '时间点写法' },
  { id: 'sp34', test: 2, section: 'S1', word: '07788 136711', accepted: ['07788 136711', '07788136711'], zh: '手机号', sentence: 'Mobile number: ___', isHard: false, tip: 'double seven double eight' },
  { id: 'sp35', test: 2, section: 'S4', word: 'social', accepted: ['social'], zh: '社会的', sentence: 'consider the building’s physical and ___ context', isHard: false, tip: 's-o-c-i-a-l' },
  { id: 'sp36', test: 2, section: 'S4', word: 'factory', accepted: ['factory'], zh: '工厂', sentence: 'On the site of a disused ___', isHard: false, tip: '废弃工厂' },
  { id: 'sp37', test: 2, section: 'S4', word: 'canal', accepted: ['canal'], zh: '运河', sentence: 'Beside a ___', isHard: true, tip: 'c-a-n-a-l，别拼成 channel' },
  { id: 'sp38', test: 2, section: 'S4', word: 'bridge', accepted: ['bridge'], zh: '桥', sentence: 'approached by a ___ for pedestrians', isHard: false, tip: '有 d' },
  { id: 'sp39', test: 2, section: 'S4', word: 'box', accepted: ['box'], zh: '盒子', sentence: 'The building is the shape of a ___', isHard: false, tip: '方盒造型' },
  { id: 'sp40', test: 2, section: 'S4', word: 'screen', accepted: ['screen'], zh: '大屏幕', sentence: 'One exterior wall acts as a large ___', isHard: false, tip: '投影幕墙' },
  { id: 'sp41', test: 2, section: 'S4', word: 'rubber', accepted: ['rubber'], zh: '橡胶', sentence: 'floor is built on huge pads made of ___', isHard: true, tip: '双写 b：r-u-b-b-e-r' },
  { id: 'sp42', test: 2, section: 'S4', word: 'curved', accepted: ['curved'], zh: '弧形的', sentence: 'walls are made of local wood and are ___ in shape', isHard: true, tip: '必须加 -d：curved' },
  { id: 'sp43', test: 2, section: 'S4', word: 'curtains', accepted: ['curtains'], zh: '幕布/窗帘', sentence: 'ceiling panels and ___ on walls allow adjustment of acoustics', isHard: true, tip: '必须复数 curtains！注意拼写 c-u-r-t-a-i-n-s' },
  { id: 'sp44', test: 2, section: 'S4', word: 'international', accepted: ['international'], zh: '国际化的', sentence: 'Some critics say the ___ style of the building is inappropriate.', isHard: false, tip: 'i-n-t-e-r-n-a-t-i-o-n-a-l' },

  // Test 3
  { id: 'sp45', test: 3, section: 'S1', word: 'birds', accepted: ['birds'], zh: '鸟类', sentence: 'good place for seeing rare ___ all year round.', isHard: false, tip: '复数' },
  { id: 'sp46', test: 3, section: 'S1', word: 'flowers', accepted: ['flowers'], zh: '花朵', sentence: 'good time for seeing certain unusual ___.', isHard: false, tip: '复数' },
  { id: 'sp47', test: 3, section: 'S1', word: 'mushrooms', accepted: ['mushrooms'], zh: '蘑菇', sentence: 'learn about ___ and then collect some.', isHard: true, tip: '复数 m-u-s-h-r-o-o-m-s' },
  { id: 'sp48', test: 3, section: 'S1', word: 'river', accepted: ['river'], zh: '河流', sentence: 'Part of the ___ has been made suitable for swimming.', isHard: false, tip: '单数' },
  { id: 'sp49', test: 3, section: 'S3', word: 'cave', accepted: ['cave'], zh: '洞穴', sentence: 'A ___ surrounded by trees', isHard: false, tip: 'c-a-v-e' },
  { id: 'sp50', test: 3, section: 'S3', word: 'tiger', accepted: ['tiger'], zh: '老虎', sentence: 'Add Malcolm and a ___ noticing him', isHard: false, tip: 't-i-g-e-r' },
  { id: 'sp51', test: 3, section: 'S3', word: 'dancing', accepted: ['dancing'], zh: '跳舞', sentence: 'People who are ___ outside the forest', isHard: false, tip: '去 e 加 ing' },
  { id: 'sp52', test: 3, section: 'S3', word: 'crying', accepted: ['crying'], zh: '哭泣', sentence: 'Add Malcolm sitting on a tree trunk and ___', isHard: false, tip: 'y 不变直接加 ing' },
  { id: 'sp53', test: 3, section: 'S3', word: 'grass', accepted: ['grass'], zh: '草地', sentence: 'Ice-skaters on ___ covered with ice', isHard: false, tip: '双写 s' },
  { id: 'sp54', test: 3, section: 'S3', word: 'scarf', accepted: ['scarf'], zh: '围巾', sentence: 'Add a ___ for each person', isHard: true, tip: 's-c-a-r-f（单数）' },
  { id: 'sp55', test: 3, section: 'S4', word: 'attitudes', accepted: ['attitude', 'attitudes'], zh: '态度', sentence: 'investigate customer needs and ___', isHard: true, tip: '双写 t：a-t-t-i-t-u-d-e(s)' },
  { id: 'sp56', test: 3, section: 'S4', word: 'numbers', accepted: ['numbers'], zh: '刻度数字', sentence: 'cooks could not easily see the ___ in measuring cups.', isHard: false, tip: '复数 numbers' },
  { id: 'sp57', test: 3, section: 'S4', word: 'time', accepted: ['time', 'minutes'], zh: '通话时间/分钟', sentence: 'wanted to check the ___ used.', isHard: false, tip: 'time 或 minutes' },
  { id: 'sp58', test: 3, section: 'S4', word: 'software', accepted: ['software'], zh: '软件', sentence: 'need to develop ___ to improve communication', isHard: false, tip: '不可数' },
  { id: 'sp59', test: 3, section: 'S4', word: 'patients', accepted: ['patients'], zh: '病人', sentence: 'access information about ___ in different parts of the hospital.', isHard: true, tip: '复数 patients，别拼成 patience（耐心）！' },
  { id: 'sp60', test: 3, section: 'S4', word: 'emotions', accepted: ['emotions', 'feelings'], zh: '情绪/感受', sentence: 'recorded information about their ___ while travelling.', isHard: true, tip: 'emotions 或 feelings，均需复数' },
  { id: 'sp61', test: 3, section: 'S4', word: 'income', accepted: ['income'], zh: '收入', sentence: 'selected by criteria such as age, ___ or product used.', isHard: true, tip: 'i-n-c-o-m-e' },
  { id: 'sp62', test: 3, section: 'S4', word: 'comfortable', accepted: ['comfortable'], zh: '舒适自在的', sentence: 'participants must feel ___ about taking part in the research.', isHard: true, tip: '高频错词！c-o-m-f-o-r-t-a-b-l-e（中间有 or）' },
  { id: 'sp63', test: 3, section: 'S4', word: 'observation', accepted: ['observation'], zh: '观察', sentence: 'There is usually direct ___ of the participants.', isHard: true, tip: 'o-b-s-e-r-v-a-t-i-o-n' },
  { id: 'sp64', test: 3, section: 'S4', word: 'analysis', accepted: ['analysis'], zh: '分析', sentence: 'A lot of time is needed for the ___ of the data.', isHard: true, tip: '单数名词 a-n-a-l-y-s-i-s（结尾 sis）' },

  // Test 4
  { id: 'sp65', test: 4, section: 'S1', word: 'secondary', accepted: ['secondary'], zh: '中学（的）', sentence: 'Venue: The ___ school', isHard: true, tip: 's-e-c-o-n-d-a-r-y（结尾 ary）' },
  { id: 'sp66', test: 4, section: 'S1', word: 'flute', accepted: ['flute'], zh: '长笛', sentence: 'Carolyn Hart (plays the ___)', isHard: true, tip: 'f-l-u-t-e' },
  { id: 'sp67', test: 4, section: 'S1', word: 'cinema', accepted: ['cinema'], zh: '电影院', sentence: 'Start behind the ___', isHard: false, tip: 'Duck races 起点' },
  { id: 'sp68', test: 4, section: 'S1', word: 'concert', accepted: ['concert'], zh: '音乐会', sentence: 'Prize: tickets for ___ held at the end of the festival.', isHard: false, tip: 'c-o-n-c-e-r-t' },
  { id: 'sp69', test: 4, section: 'S1', word: 'market', accepted: ['market'], zh: '集市/市场', sentence: 'Ducks can be bought in the ___', isHard: false, tip: 'a stall in the market' },
  { id: 'sp70', test: 4, section: 'S1', word: 'Bythwaite', accepted: ['bythwaite'], zh: '拜思韦特厅（地名拼写）', sentence: 'Venue: ___ Hall', isHard: true, tip: '拼写 B-Y-T-H-W-A-I-T-E' },
  { id: 'sp71', test: 4, section: 'S1', word: 'actor', accepted: ['actor'], zh: '男演员', sentence: 'Prizes presented at 5 pm by a well-known ___', isHard: false, tip: '结尾 -or' },
  { id: 'sp72', test: 4, section: 'S4', word: 'dry', accepted: ['dry'], zh: '干燥的', sentence: 'Erosion is more likely in soil that is ___', isHard: false, tip: 'd-r-y' },
  { id: 'sp73', test: 4, section: 'S4', word: 'hard', accepted: ['hard'], zh: '坚硬的', sentence: 'Lal found soil in Africa that was very ___', isHard: false, tip: 'like cement' },
  { id: 'sp74', test: 4, section: 'S4', word: 'sugars', accepted: ['sugar', 'sugars'], zh: '糖分/碳水物质', sentence: 'carbon-based substances such as ___', isHard: false, tip: 'sugar / sugars 均可' },
  { id: 'sp75', test: 4, section: 'S4', word: 'roots', accepted: ['roots'], zh: '植物根系', sentence: 'CO2 moves from the ___ of plants to microbes in the soil', isHard: false, tip: '复数 roots' },
  { id: 'sp76', test: 4, section: 'S4', word: 'moist', accepted: ['moist', 'damp', 'wet'], zh: '湿润的', sentence: 'make sure soil remains fertile and ___', isHard: true, tip: 'moist / damp / wet 均可' },
  { id: 'sp77', test: 4, section: 'S4', word: 'variety', accepted: ['variety'], zh: '多样性/种类', sentence: 'increasing the ___ of plants that are grown', isHard: true, tip: 'v-a-r-i-e-t-y' },
  { id: 'sp78', test: 4, section: 'S4', word: 'cattle', accepted: ['cattle'], zh: '牛群（畜牧）', sentence: 'taking place on a big ___ farm', isHard: true, tip: 'c-a-t-t-l-e（集合名词无复数 s）' },
  { id: 'sp79', test: 4, section: 'S4', word: 'gardens', accepted: ['gardens', 'gardening'], zh: '花园/园艺', sentence: 'compost made from waste from agriculture and ___', isHard: false, tip: 'gardens / gardening' },
  { id: 'sp80', test: 4, section: 'S4', word: 'grasses', accepted: ['grasses'], zh: '草类', sentence: 'increase soil carbon by using ___ that are always green', isHard: true, tip: '必须复数 grasses（结尾 es）' },
  { id: 'sp81', test: 4, section: 'S4', word: 'payment', accepted: ['payment', 'payments', 'money'], zh: '报酬/款项', sentence: 'giving farmers ___ for carbon storage, as well as their produce', isHard: false, tip: 'payment / payments / money 均对' }
];
