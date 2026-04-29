export type StatusLabel = "即将开放" | "内测中" | "规划中" | "已支持";

export const siteConfig = {
  name: "XplorOne",
  siteName: "xosite",
  title: "超级个体与自由职业者的本地优先财务工作台",
  altTitle: "帮超级个体与自由职业者看懂钱的财务工作台",
  heroTitle: "把个人经营的财务，放回您自己的电脑里",
  heroSubtitle:
    "XplorOne 用本地账本、预算、图表和只读 AI，把零散流水整理成可判断的经营结构。",
  heroBadges: ["Local-first", "Read-only AI", "Budget / Cashflow / Assets"],
  description:
    "XplorOne 是一套帮助超级个体和自由职业者看懂资金状态、经营节奏与真实收支的本地财务工作台。",
  version: "v0.4.0",
  status: "已支持" as StatusLabel,
  githubUrl: "https://github.com/SimonZhangM/XplorOne",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contactEmail: "simonzhang2026@163.com",
  wechatQrSrc: "",
};

export const navItems = [
  { href: "/#hero", label: "首页" },
  { href: "/#capabilities", label: "能力" },
  { href: "/#previews", label: "预览" },
  { href: "/download", label: "下载" },
  { href: "/faq", label: "FAQ" },
];

export const problemCards = [
  {
    text: "我这个月到底是赚了，还是只是忙了？",
    description: "收入不少但存款没变——需要把收支、利润和现金流分开看。",
    iconBg: "#EFF6FF",
  },
  {
    text: "我手上的钱安全吗，还能撑多久？",
    description: "不是吓自己，而是需要一个真实的 runway 判断依据。",
    iconSrc: "/strongbox.svg",
    iconBg: "#FEF0E6",
  },
  {
    text: "有哪些不起眼的开销，正在悄悄消耗我们的积蓄？",
    description: "订阅服务、隐性开销——它们不会出现在任何一张大额账单上。",
    iconSrc: "/expenses-one.svg",
    iconBg: "#F0FDF4",
  },
  {
    text: "账户、预算和分类是不是已经乱了？",
    description: "随着业务变复杂，当初随手建的分类体系可能早已名存实亡。",
    iconSrc: "/financial_report.svg",
    iconBg: "#F5F3FF",
  },
];

export const trustBoundaries = [
  {
    title: "本地账本",
    description: "核心账本默认保存在本地。断网也能看账、管账，数据主权更清楚。",
    icon: "database",
  },
  {
    title: "只读分析",
    description: "AI 可以帮您读账、看趋势、做分析，但不会直接改动账本数据。",
    icon: "lock",
  },
  {
    title: "归档迁移",
    description: "支持 .xpl 归档备份与迁移。换设备、留存、迁移都有明确出口。",
    icon: "archive",
  },
  {
    title: "密钥保护",
    description: "模型密钥由系统侧统一保护和管理，减少重复暴露与配置混乱。",
    icon: "shield",
  },
];

export const compareRows = [
  {
    dimension: "普通记账 App",
    value: "记录流水、看消费分类",
    xplorone: "看懂资金状态与经营脉络",
  },
  {
    dimension: "传统财务软件",
    value: "做规范财务，流程更重",
    xplorone: "保留结构感，但降低上手门槛",
  },
  {
    dimension: "全能 AI 工具",
    value: "回答问题，但常脱离真实页面",
    xplorone: "让查询回到本地账本和筛选上下文",
  },
  {
    dimension: "云端优先工具",
    value: "依赖在线服务和远端账号",
    xplorone: "核心账本留在您自己的电脑里",
  },
];

export const capabilityGroups = [
  {
    eyebrow: "Finance Structure",
    title: "先把账本、账户和预算搭起来",
    description: "用结构承接日常流水，让收支、资产、预算和分类不再各说各话。",
    items: [
      {
        title: "多账本与账户结构",
        description: "把不同账户、项目与账本拆开整理，先建立边界，再理解资金状态。",
        icon: "wallet",
        iconColor: "#e95556",
      },
      {
        title: "分类、预算与秩序",
        description: "预算不是额外负担，而是提前给支出设边界，减少事后补救。",
        icon: "target",
        iconColor: "#eb7a3b",
      },
      {
        title: "专业图表与经营视角",
        description: "从趋势、结构和风险里看账户变化、预算执行和经营节奏。",
        icon: "chart",
        iconColor: "#f0a43a",
      },
    ],
  },
  {
    eyebrow: "AI & Open Access",
    title: "再让本地助手、AI 助手和开放接口接起来",
    description: "本地助手处理确定性财务工作，AI 助手处理分析与解释，开放接口承接进阶工作流。",
    items: [
      {
        title: "AI 查询与分析",
        description: "结合真实数据做查询、汇总与分析，更快找到关键财务信息。",
        icon: "bot",
        iconColor: "#7b5ae5",
      },
      {
        title: "跨页面联动",
        description: "从问题回到对应页面和筛选结果，减少来回切换与重复筛选。",
        icon: "link",
        iconColor: "#5f86e7",
      },
      {
        title: "开放接口与 Agent 能力",
        description: "通过本地 API 与只读 MCP 连接工作流、Agent 和其他工具。",
        icon: "plug",
        iconColor: "#61b2dc",
      },
    ],
  },
];

export const aiFlowSteps = [
  {
    title: "选择助手",
    description: "在本地助手 / AI 助手之间选择入口，让查询录入和分析对话各自归位。",
  },
  {
    title: "本地问题本地处理",
    description: "查询、录入和基础统计优先走本地内核，不会悄悄调用模型猜意图。",
  },
  {
    title: "复杂问题交给 AI 分析",
    description: "趋势、原因、建议和开放式财务对话交给 AI 助手，但任何写入都需要确认。",
  },
];

export const galleryItems = [
  {
    title: "首页",
    description: "快速看清本月收支与资产状态。",
    src: "/assets/xplorone-workbench-cn.png",
    alt: "XplorOne 首页总览截图",
    highlights: ["本月收支、资产和快捷操作集中在一页", "预算提醒、最近流水和 AI 助手并列出现", "适合作为每天打开的财务驾驶舱"],
  },
  {
    title: "日历页",
    description: "把财务活动放回时间维度。",
    src: "/assets/xplorone-calendar-page-cn.png",
    alt: "XplorOne 日历页截图",
    highlights: ["按日期回看财务活动", "让支出节奏和收入节奏更直观", "适合复盘一个月中钱的流动"],
  },
  {
    title: "流水页",
    description: "从列表里看到更清楚的收支结构。",
    src: "/assets/xplorone-cashflow-page-cn.png",
    alt: "XplorOne 流水页截图",
    highlights: ["用列表承接每一笔真实进出", "筛选、分类和账户信息更容易追踪", "从流水回到结构化判断"],
  },
  {
    title: "报表页",
    description: "从图表中看到经营节奏与月度趋势。",
    src: "/assets/xplorone-income-expense-page-cn.png",
    alt: "XplorOne 报表页截图",
    highlights: ["从图表看趋势和结构", "区分收入、支出和经营节奏", "用于月度复盘和风险判断"],
  },
  {
    title: "预算页",
    description: "提前建立支出边界，而不是事后补救。",
    src: "/assets/xplorone-budget-page-cn.png",
    alt: "XplorOne 预算页截图",
    highlights: ["提前看到预算执行进度", "把支出边界放在事前", "适合控制订阅、项目和日常开销"],
  },
];

export const faqItems = [
  {
    question: "XplorOne 适合谁？",
    answer:
      "它优先服务超级个体、自由职业者和轻经营者，也适合希望在本地整理财务结构、又不想被重型企业系统绑住的用户。",
  },
  {
    question: "它和普通记账软件有什么不同？",
    answer:
      "它不只记录流水，更强调账户结构、预算秩序、图表视角和跨页面联动，帮助您看懂收支结构、账户状态与月度趋势。",
  },
  {
    question: "数据真的只在本地吗？",
    answer:
      "XplorOne 采用本地优先设计。核心账本数据默认保存在您的电脑里，断网也能查账。您的数据不会因为服务器宕机而丢失。",
  },
  {
    question: "AI 会不会把数据上传出去？",
    answer:
      "XplorOne 的核心本地功能不需要把账本发送给模型服务。当您主动启用 AI 助手并配置自己的模型 API Key 时，XplorOne 可能会把完成该次 AI 任务所需的相关信息发送给您选择的模型服务。本地助手支持的查询与录入流程会尽量走本地内核，不会悄悄 fallback 到 AI 猜意图；任何写入动作都需要用户确认。",
  },
  {
    question: "现在支持哪些平台？",
    answer:
      "当前正式发布线是 Windows x64 版本。您可以在下载页获取 XplorOne v0.4.0 安装包。macOS、Linux 或其他平台版本暂未开放，后续会根据产品进展更新。",
  },
  {
    question: "需要 API Key 吗？",
    answer:
      "不需要。XplorOne 的本地记账、账本管理、账户分类、流水、报表、基础查询、备份恢复等核心能力，都可以在没有 API Key 的情况下使用。只有当您主动启用 AI 助手的分析、解释或更开放的财务对话时，才需要配置您自己的模型 API Key。",
  },
  {
    question: "后续会收费吗？",
    answer:
      "当前版本已经开放 Windows x64 安装包，收费策略尚未正式公布。后续如涉及授权、订阅或商业版本，会在官网、GitHub Release 和更新日志中明确说明。",
  },
  {
    question: "怎么备份和迁移？",
    answer:
      "产品支持 .xpl归档格式的导入导出，随时备份、迁移您的完整账本。数据永远属于您，换软件也能零成本迁移。",
  },
];

export const downloadLinks = {
  windows: "https://updates.xplorone.com/stable/win/x64/XplorOne%20Setup%200.4.0.exe",
  progress: "/changelog",
  github: "https://github.com/SimonZhangM/XplorOne",
  release: "https://github.com/SimonZhangM/XplorOne/releases/tag/v0.4.0",
  issues: "https://github.com/SimonZhangM/XplorOne/issues",
  discussions: "https://github.com/SimonZhangM/XplorOne/discussions",
  changelog: "/changelog",
};

/* Footer 三列结构 */
export const footerLinks = {
  product: [
    { href: "/download", label: "下载页" },
    { href: "/faq", label: "常见问题" },
    { href: "/changelog", label: "更新日志" },
  ],
  connect: [
    { href: "https://github.com/SimonZhangM/XplorOne", label: "GitHub", external: true },
    { href: "https://github.com/SimonZhangM/XplorOne/releases", label: "GitHub Releases", external: true },
    { href: "https://github.com/SimonZhangM/XplorOne/issues", label: "安装问题 / Bug", external: true },
    { href: "https://github.com/SimonZhangM/XplorOne/discussions", label: "想法与建议", external: true },
    { href: "mailto:simonzhang2026@163.com", label: "联系作者：simonzhang2026@163.com" },
    { href: "#feedback", label: "交流讨论群", feedbackPopover: true },
  ],
};

export const websiteUpdates = [
  {
    date: "2026-04-18",
    title: "首页结构升级到 0.1.3",
    summary:
      "重写首页信息层级，新增界面预览切换器、图标资源与更新后的产品截图，并同步整理 README、当前状态和建站进度文档。",
    status: "已支持" as StatusLabel,
  },
  {
    date: "2026-04-17",
    title: "首版官网上线",
    summary:
      "完成首页、下载页、FAQ 和更新日志 4 个页面的首版实现，并补齐基础 SEO、响应式布局和全站导航。",
    status: "已支持" as StatusLabel,
  },
  {
    date: "2026-04-17",
    title: "全站状态标签与下载策略落地",
    summary:
      '统一使用"即将开放 / 内测中 / 规划中 / 已支持"状态标签，并为下载、GitHub 与更新日志提供明确去处。',
    status: "已支持" as StatusLabel,
  },
];

export const productUpdates = [
  {
    date: "2026-04-17",
    title: "产品能力基线同步到官网",
    summary:
      "当前版本基线已更新到 v0.4.0，官网同步展示多账本、预算、专业图表、本地助手 / AI 助手、本地 API 与只读 MCP 的整体能力结构。",
    status: "已支持" as StatusLabel,
  },
  {
    date: "2026-04-28",
    title: "Windows x64 安装包已开放",
    summary:
      "XplorOne v0.4.0 Windows x64 安装包已经开放下载，官网同步补齐 GitHub Release、安装安全提示和快速开始入口。",
    status: "已支持" as StatusLabel,
  },
];

export const latestSoftwareRelease = {
  version: "v0.4.0",
  date: "2026-04-28",
  status: "已支持" as StatusLabel,
  focus: "本地助手 / AI 助手双入口",
  intro:
    "本次更新将对话体系重组为“本地助手 / AI助手”两条更清晰的入口：本地助手负责快速查询和录入，AI助手负责深度分析与开放式对话；同时查询内核彻底剥离 AI 兜底，基础财务问题不再交给模型猜 intent，并补齐会话切换、助手头像、快捷场景、中英文展示和账户别名识别等体验细节。",
  categories: [
    {
      emoji: "✨",
      label: "新增",
      items: [
        "新增“本地助手 / AI助手”两个顶层对话模块，各自拥有独立会话池、助手头像和常用场景入口。",
        "新增新建对话的助手选择页，并在左侧对话栏增加“切换助手”入口。",
        "新增 chat:local 与 chat:ai 会话 scope，同时兼容旧 chat:query / chat:entry / chat:analysis / chat:free_talk 会话归池展示。",
        "新增查询与录入共享的账户别名识别能力，工商银行可识别工行、ICBC 和 Industrial and Commercial Bank of China。",
        "新增 CHAT_CAPABILITY_MATRIX.md，用于维护当前对话体系的能力矩阵、例句和边界。",
      ],
    },
    {
      emoji: "🔁",
      label: "变更",
      items: [
        "查询链路正式收口为本地查询内核：只允许本地规则命中、本地补问或返回不支持边界，不再调用 AI intent 兜底。",
        "本地助手只显示“查询 / 录入”，AI助手只显示“分析 / 自由对话”，不再让用户在任意模块里看到 4 项全集。",
        "新建对话默认进入助手选择态，不再直接进入旧的某个单一对话模块。",
        "首页进入对话页的启动请求改为按 token 只消费一次，避免进入 AI助手后在页内切换时被旧参数拉回。",
        "对外发布历史固定维护到 marketing docs 下的中英文 release history 文件，不再继续追加仓库根目录旧 changelog。",
      ],
    },
    {
      emoji: "⚡",
      label: "优化",
      items: [
        "优化对话中大模型 markdown 表格的展示效果。",
        "优化中文环境下分类、账户在查询、录入草稿和分析上下文中的展示一致性。",
        "优化分析链路传给大模型的金额数据，先把数据库 cent 值转换为可读金额。",
        "优化分类增长、期间对比、资金安全垫、资产负债概览等分析问题的路由识别。",
        "优化新建对话页的产品文案、助手形象展示、侧栏按钮和快捷场景 chips。",
      ],
    },
    {
      emoji: "🛠️",
      label: "修复",
      items: [
        "修复新建对话发送消息后可能跳到旧会话的问题。",
        "修复新建对话里第一次点删除图标时可能删除顶部提示语而不是目标消息的问题。",
        "修复 Web 预览对话失败时直接显示 raw abort 错误的问题。",
        "修复 AI 回答因为不必要的输出限制而被截断的问题。",
        "修复“支付宝余额”等账户余额问题被误判为需要补充账户名称的问题。",
      ],
    },
    {
      emoji: "🔒",
      label: "安全与稳定",
      items: [
        "统一对话响应调试与审计字段，包括顶层助手、内部能力、路由原因、查询依据、数据依据和模型使用情况。",
        "强化本地助手边界，确保本地查询和本地录入不会悄悄触发 AI 模型调用。",
      ],
    },
  ],
};

export const recentSoftwareReleases = [
  {
    version: "v0.3.10",
    date: "2026-04-27",
    status: "已支持" as StatusLabel,
    focus: "allocation 统计收口与统一交互组件",
    intro:
      "本次更新继续收口拆分交易后的统计口径，让更多首页、收支、日历、报表和分类跳转场景优先基于 allocation effect 层计算；同时统一了软件内弹窗和下拉菜单的视觉体验，补齐多处中英文展示细节，并让拆分明细行可以单独维护成员、项目和备注而不影响父流水。",
    categories: [
      {
        emoji: "✨",
        label: "新增",
        items: [
          "新增统一应用内弹窗层，用于确认、提示和输入类交互。",
          "新增统一软下拉组件，用于侧边栏筛选、设置项和表单下拉。",
          "新增流水页拆分 allocation 子行的成员、项目和备注编辑能力。",
          "新增从收支分类跳转流水时的 allocation 分类聚焦能力，金额展示和 CSV 导出会跟随聚焦范围。",
        ],
      },
      {
        emoji: "🔁",
        label: "变更",
        items: [
          "收支分类页、日历统计、收入支出报表、现金流分类分布、首页分析和 AI 分类分析进一步改为基于 allocation effect 层计算。",
          "普通父流水编辑不再误覆盖已有多 allocation 明细；只有显式提交拆分明细时才更新 allocation 行。",
          "中文设置导航中的模型入口改为“模型设置”，英文仍保持 Model Service。",
        ],
      },
      {
        emoji: "⚡",
        label: "优化",
        items: [
          "优化流水、收支、账户和预算相关侧边栏的年份 / 月份下拉菜单，改为居中且符合软件统一视觉的菜单。",
          "优化记一笔的记多笔和记拆分页间距、金额输入框高度、加号按钮位置和来源账户显示。",
          "优化流水页 allocation 子行的浅色背景、边框、emoji 尺寸、行高和行级编辑入口。",
          "优化设置页未保存提示位置、统一确认弹窗、显示设置金额单位按钮尺寸和整体间距。",
          "优化首页最近流水账户列间距，以及中英文环境下账户 / 分类名称展示一致性。",
        ],
      },
      {
        emoji: "🛠️",
        label: "修复",
        items: [
          "修复用户可见流程里仍出现浏览器原生弹窗和输入框的问题。",
          "修复侧边栏和设置页仍出现旧式浏览器原生 select 下拉视觉的问题。",
          "修复按分类跳转流水时，allocation 场景可能显示父流水金额而不是命中分配金额的问题。",
          "修复已忽略提醒仍可能继续出现在提醒列表的问题。",
          "修复拆分交易引入后，部分分析样本和分类汇总仍可能回退到父交易分类字段的问题。",
        ],
      },
      {
        emoji: "🔒",
        label: "安全与稳定",
        items: [
          "allocation 元数据更新前增加同账本校验，避免跨账本误更新。",
          "普通流水编辑会保留已有拆分明细，降低误覆盖 allocation 数据的风险。",
          "将应用弹窗和输入提示收口到 renderer 统一视觉层，提升桌面版与预览环境的一致性。",
        ],
      },
    ],
  },
  {
    version: "v0.3.9",
    date: "2026-04-26",
    status: "已支持" as StatusLabel,
    focus: "拆分交易与 allocation 统计口径",
    intro:
      "本次更新正式引入“拆分交易”能力。XplorOne 现在将账户真实流水保留在父交易上，把分类、成员、项目、税务和可报销等明细记录到独立的分配行中；分类统计、预算、排行和 AI 分类分析都可以基于 allocation effect 层计算，同时不会重复影响账户余额和资金流。",
    categories: [
      {
        emoji: "✨",
        label: "新增",
        items: [
          "新增 transaction_allocations 数据模型，用于记录收入、支出和退款的分配明细。",
          "新增记一笔「拆分」模式、流水页 split.svg 拆分入口，以及展开查看 allocation 子行的能力。",
          "新增交易分配完整性检查与 CSV 拆分明细导出，同时保留父交易导出的银行流水视角。",
        ],
      },
      {
        emoji: "🔁",
        label: "变更",
        items: [
          "分类统计、预算实际数、项目/成员/税务/可报销统计、Top N 和 AI 分类分析改为基于 allocation effect 层计算。",
          "收入、支出和退款写入时同步创建或更新 allocation；转账、借款、还款和余额调整继续保持父交易口径。",
          "备份、恢复、.xpl 和旧数据导入现在会保留或自动补齐 allocation，并在导入/恢复后执行完整性检查。",
        ],
      },
      {
        emoji: "⚡",
        label: "优化",
        items: [
          "优化流水页拆分体验，新增分类列展开按钮和与原表格对齐的小号 allocation 子行。",
          "优化记一笔、记多笔和拆分页的下拉菜单、日期时间选择、占位文字字重与双语文案。",
          "优化 AI 录入草稿与国际化提示，使其更好衔接拆分交易创建链路。",
        ],
      },
      {
        emoji: "🛠️",
        label: "修复",
        items: [
          "修复从流水页打开拆分编辑器时表格溢出弹窗的问题。",
          "修复拆分页空值显示、账户占位和原生控件体验不一致的问题。",
          "修复部分分类统计、报表和导出仍可能依赖父交易 legacy 分类字段的问题。",
        ],
      },
      {
        emoji: "🔒",
        label: "安全与稳定",
        items: [
          "阻止未平衡拆分草稿落入正式交易表。",
          "加强 service 层校验，覆盖 allocation 合计、同账本引用、分类类型匹配和退款方向。",
          "账户余额、对账、导入去重和资金流计算继续只读父交易，避免拆分 allocation 重复计入账户流水。",
        ],
      },
    ],
  },
  {
    version: "v0.3.8",
    date: "2026-04-24",
    status: "已支持" as StatusLabel,
    focus: "英文桌面体验、已有账本保护与设置页打磨",
    intro:
      "收口英文桌面体验、已有账本数据保护和设置页体验，新增全局金额符号设置、模型预设持久化和基础英文记账解析。",
    categories: [
      {
        emoji: "✨",
        label: "新增",
        items: [
          "新增全局金额符号设置，支持 ￥、$、€。",
          "新增模型预设持久化能力，保存模型配置时会记录所选预设 code。",
          "新增基础英文记账解析，支持常见收入、支出、转账、借款、还款、退款、账户、相对日期和 AM/PM 时间表达。",
        ],
      },
      {
        emoji: "🔁",
        label: "变更",
        items: [
          "英文界面将 Ledger 相关入口统一调整为 Transactions，覆盖导航、页面标题、操作按钮、确认提示和导出文案。",
          "调整设置页侧边栏顺序，将日常偏好放在账本、模型、授权、数据和归档入口之前。",
          "提醒设置的时间选择从原生时间输入框改为小时/分钟选择器，避免系统本地化造成中英文混排。",
        ],
      },
      {
        emoji: "⚡",
        label: "优化",
        items: [
          "优化已有账本数据的显示层语言映射，覆盖账户、分类、项目、模板和 icon/emoji 展示。",
          "优化账户、收支分类、首页、报表、设置和个性化页面的间距、表格对齐与 tooltip 文案。",
          "优化桌面菜单、关于弹窗和检查更新弹窗，补齐中英文文案，并展示当前版本层级和试用信息。",
        ],
      },
      {
        emoji: "🛠️",
        label: "修复",
        items: [
          "修复切换界面语言后账户名、分类名、项目名可能中英文混用的问题。",
          "修复语言切换后收支分类页和预算页可能出现重复或错误一级分类的问题。",
          "修复设置页滚动方向异常，确保左侧侧边栏固定、右侧子页面滚动。",
        ],
      },
      {
        emoji: "🔒",
        label: "安全与稳定",
        items: [
          "降低升级期间误改已有账本数据的风险，默认数据 seed 只在空数据或明确旧默认数据场景下执行。",
          "优化已有账本的语言切换方式，通过展示层本地化而不是向账本写入翻译后的重复数据。",
          "强化模型配置存储，保存接口配置时同步保留预设元数据，提升模型设置恢复和启用流程的可靠性。",
        ],
      },
    ],
  },
  {
    version: "v0.3.7",
    date: "2026-04-24",
    status: "已支持" as StatusLabel,
    focus: "双语 AI 对话与英文查询体验",
    intro:
      "重点优化 AI 对话系统的中英文体验。XplorOne 可以根据用户本次输入语言生成中文或英文回答，并提升英文查询、本地解析和连续追问体验。",
    categories: [
      {
        emoji: "✨",
        label: "新增",
        items: [
          "新增对话系统语言上下文判断能力，可根据本次输入、同会话上一条明确语言和界面语言兜底决定回答语言。",
          "新增基础英文查询本地解析能力，支持 this month total income、how much did I spend this month、account balance 等常见问题。",
          "新增同一查询会话内的时间追问能力，例如 and last month?、那上个月呢？会复用上一条查询并切换时间范围。",
        ],
      },
      {
        emoji: "🔁",
        label: "变更",
        items: [
          "AI 对话回答语言不再被界面语言强制决定，优先跟随用户本次输入语言。",
          "查询、分析、自由对话与录入草稿的新生成文案开始按响应语言输出。",
          "前端会随聊天请求传入当前界面语言，并根据后端返回的 response_language 渲染按钮语言。",
        ],
      },
      {
        emoji: "⚡",
        label: "优化",
        items: [
          "优化查询回答、补问、表格标题、表格列名、金额与周期标签的双语展示。",
          "优化分析与自由对话的系统提示词，使英文问题更自然地得到英文回答。",
          "优化录入草稿的标题、字段名、缺失字段提示、确认、取消与提交结果的双语体验。",
        ],
      },
      {
        emoji: "🛠️",
        label: "修复",
        items: [
          "修复英文界面下输入中文问题时，回答可能仍按英文输出的问题。",
          "修复只追问时间范围时，系统无法复用上一条查询上下文的问题。",
        ],
      },
      {
        emoji: "⚠️",
        label: "已知问题",
        items: [
          "英文自然语言记账解析尚未纳入本轮更新，例如 spent 20 on lunch from cash 会在后续版本单独实现。",
        ],
      },
    ],
  },
  {
    version: "v0.3.6",
    date: "2026-04-23",
    status: "已支持" as StatusLabel,
    focus: "预算页加载与首页预算缓存共享",
    intro: "重点优化预算页加载链路和首页预算缓存共享，减少重复请求和切页时的假卡顿。",
    categories: [
      {
        emoji: "🔁",
        label: "变更",
        items: [
          "预算页主加载从旧的聚合接口收口为 list_budget_months 与 get_budget_month 两条轻量链路。",
          "首页与预算页开始共享 renderer 预算缓存。",
        ],
      },
      {
        emoji: "⚡",
        label: "优化",
        items: [
          "优化预算页请求去重、离页取消和加载触发条件。",
          "优化从首页进入预算页时的体验，已命中的预算数据会优先复用。",
        ],
      },
      {
        emoji: "🛠️",
        label: "修复",
        items: [
          "修复预算页可能反复补发同月请求的问题。",
          "清理临时预算耗时日志，恢复开发态 StrictMode。",
        ],
      },
    ],
  },
  {
    version: "v0.3.5",
    date: "2026-04-23",
    status: "已支持" as StatusLabel,
    focus: "预算稳定性与本地预览错误反馈",
    intro: "重点收口预算页数据加载、全年预算保存和本地预览错误文案。",
    categories: [
      {
        emoji: "🔁",
        label: "变更",
        items: [
          "预算页切换为更集中的预算加载主链，月份列表和当前月份详情可一次返回。",
          "保存为全年预算语义调整为真正覆盖当年 1 至 12 月。",
          "侧边栏中文命名继续产品化调整，报表改为图表，沟通改为对话。",
        ],
      },
      {
        emoji: "⚡",
        label: "优化",
        items: [
          "优化预算页缓存、月份摘要同步、表内 loading 和乐观更新体验。",
          "优化预算余额显示、年份胶囊、筛选触发器和底部合计对齐。",
          "优化本地预览 runtime 错误文案，中英文 fallback 更统一。",
        ],
      },
      {
        emoji: "🛠️",
        label: "修复",
        items: [
          "修复切换月份后左侧摘要和右侧表格状态不一致的问题。",
          "修复预算页部分预览超时与错误提示链路不清晰的问题。",
        ],
      },
    ],
  },
  {
    version: "v0.3.4",
    date: "2026-04-23",
    status: "已支持" as StatusLabel,
    focus: "现金流报表与图表缩放",
    intro: "新增现金流进出报表，并统一多张镜像趋势图的坐标缩放口径。",
    categories: [
      {
        emoji: "✨",
        label: "新增",
        items: ["新增「现金流进出」报表页，统计口径与流水页资金流保持一致。"],
      },
      {
        emoji: "🔁",
        label: "变更",
        items: [
          "收入与支出、现金流进出的月度趋势图统一共享同一纵轴上限。",
          "流水页侧边栏筛选触发器统一为 时间范围 / Time Range 风格。",
        ],
      },
      {
        emoji: "⚡",
        label: "优化",
        items: [
          "优化收支页、账户页与现金流页的资源、图标、边距和趋势图区结构。",
          "优化现金流报表的中英文标题、侧边栏入口顺序和图标资源。",
        ],
      },
      {
        emoji: "🛠️",
        label: "修复",
        items: ["修复上下镜像柱图因独立缩放导致视觉比例误导的问题。"],
      },
    ],
  },
  {
    version: "v0.3.3",
    date: "2026-04-22",
    status: "已支持" as StatusLabel,
    focus: "类型检查清零与管理页体验",
    intro: "重点清零前端类型检查历史问题，并继续完善成员、项目与管理页体验。",
    categories: [
      {
        emoji: "✨",
        label: "新增",
        items: [
          "新增成员管理页的完整新增链路。",
          "新增多个共享 normalize reader，统一整理前端读取的执行结果。",
        ],
      },
      {
        emoji: "🔁",
        label: "变更",
        items: [
          "多个页面不再直接把 result.data 硬断言为业务类型，改为先走 shared normalize。",
          "成员页、项目页、账户页和收支页开始统一使用同一套 SVG 操作按钮。",
        ],
      },
      {
        emoji: "⚡",
        label: "优化",
        items: [
          "优化成员管理页与项目管理页的缓存体验，切回页面时优先显示旧数据并后台刷新。",
          "优化分组表格圆角、补色、状态胶囊和操作列视觉。",
          "优化流水页、收支页、账户页与日历页的标题高度、边框、圆角和范围胶囊。",
        ],
      },
      {
        emoji: "🛠️",
        label: "修复",
        items: [
          "修复 renderer 历史 typecheck 错误，npm run typecheck 恢复为可用门槛。",
          "修复多个页面读取返回对象时类型不稳的问题。",
        ],
      },
    ],
  },
  {
    version: "v0.3.2",
    date: "2026-04-22",
    status: "已支持" as StatusLabel,
    focus: "流水页资金流口径与收支统计拆分",
    intro: "重点拆分流水页资金流口径和收支页收入支出口径，同时继续补齐提醒中心与英文显示细节。",
    categories: [
      {
        emoji: "🔁",
        label: "变更",
        items: [
          "流水页主汇总与时间 bucket 改为资金流口径：净流量 / 流入 / 流出。",
          "英文同步调整为 Net Flow / Cash Inflow / Cash Outflow。",
          "单账户视角下，相关转账会按流入或流出计入统计；全局视角仍不计普通转账。",
        ],
      },
      {
        emoji: "⚡",
        label: "优化",
        items: [
          "优化流水页顶部资金流说明，减少和收支报表口径混淆。",
          "优化收支页、账户页跳转流水页时的筛选联动。",
          "优化提醒中心英文模式下的标题、正文、预算阈值与备份提醒文案。",
          "优化英文界面下的日期显示与范围胶囊表达。",
        ],
      },
      {
        emoji: "🛠️",
        label: "修复",
        items: ["修复流水页和收支页统计口径混用导致的理解偏差。"],
      },
    ],
  },
  {
    version: "v0.3.1",
    date: "2026-04-21",
    status: "已支持" as StatusLabel,
    focus: "设置页与报表页英文模式补齐",
    intro: "重点补齐设置页和报表页英文模式残留，并修复一处报表国际化运行时错误。",
    categories: [
      {
        emoji: "🔁",
        label: "变更",
        items: [
          "设置页多个面板的标题、弹窗、状态提示与 Web 预览 fallback 文案继续收口为中英文。",
          "报表分组下的基础报表页面继续接入词典层。",
        ],
      },
      {
        emoji: "⚡",
        label: "优化",
        items: [
          "优化英文界面下文件选择、路径打开、恢复与导入确认体验。",
          "优化 Reports 子导航的英文长标签显示。",
          "更新 XplorOne Codex 技能文档，使只读查询边界更清晰。",
        ],
      },
      {
        emoji: "🛠️",
        label: "修复",
        items: ["修复报表页内部子组件漏传 t 导致 t is not defined、页面白屏的问题。"],
      },
    ],
  },
];

export const currentPhaseSoftwareReleases = [latestSoftwareRelease, ...recentSoftwareReleases];

export const softwareSeriesHighlights = [
  {
    title: "0.4 系列：对话体系与本地查询边界",
    emoji: "🧭",
    summary:
      "0.4 系列从对话入口开始重整产品体验，把本地助手、AI 助手、查询边界和会话结构拆得更清楚。",
    items: [
      "新增本地助手 / AI助手双入口，让查询、录入、分析和自由对话各自回到更清晰的位置。",
      "查询链路收口为本地查询内核，基础财务问题不再悄悄交给模型猜 intent。",
      "补齐助手切换、会话归池、账户别名识别、快捷场景和对话审计字段。",
    ],
  },
  {
    title: "0.3 系列：产品化发布线",
    emoji: "🚀",
    summary:
      "0.3 系列围绕拆分交易、allocation 统计、英文体验、双语 AI、预算稳定、现金流报表和商业授权基础持续推进。",
    items: [
      "新增拆分交易、allocation effect 查询与分类/预算/项目/成员/税务/可报销统计口径。",
      "强化首页、日历、流水、预算、报表、设置与管理页的国际化和稳定性。",
      "补齐商业授权基础、英文查询解析、英文记账解析和连续追问体验。",
    ],
  },
  {
    title: "0.2 系列：本地优先与发布基础",
    emoji: "🧱",
    summary:
      "0.2 系列把 XplorOne 从早期桌面财务工作台推进到更清晰的发布线，重点是 MCP、归档、预算并库、打包和隐私边界。",
    items: [
      "新增 XplorOne Read-Only MCP v1 基线、Codex / WorkBuddy client token 管理基础。",
      "新增 .xpl 单文件归档导出与导入，并将独立预算库并入主库。",
      "新增 Windows portable / NSIS 发布基础、隐私验包脚本和 Electron safeStorage token 加密。",
    ],
  },
  {
    title: "早期开发版本 v0.0.5 - v0.1.9",
    emoji: "🌱",
    summary:
      "早期版本记录了 XplorOne 从单页原型逐步演进为多模块本地财务工作台的过程。",
    items: [
      "建立账户、分类、成员、项目、流水、首页概览、基础报表和多账本能力。",
      "搭建 AI 查询、AI 录入、AI 分析、自由对话以及预算管理的早期链路。",
      "持续重排导航、工具栏、图表、表格、仓储层、service 层和共享契约。",
    ],
  },
];
