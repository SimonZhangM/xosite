export type StatusLabel = "即将开放" | "内测中" | "规划中" | "已支持";

export const siteConfig = {
  name: "XplorOne",
  siteName: "xosite",
  title: "超级个体与自由职业者的本地优先财务工作台",
  altTitle: "帮超级个体与自由职业者看懂钱的财务工作台",
  heroTitle: "把个人经营的财务，放回你自己的电脑里",
  heroSubtitle:
    "XplorOne 用本地账本、预算、图表和只读 AI，把零散流水整理成可判断的经营结构。",
  heroBadges: ["Local-first", "Read-only AI", "Budget / Cashflow / Assets"],
  description:
    "XplorOne 是一套帮助超级个体和自由职业者看懂资金状态、经营节奏与真实收支的本地财务工作台。",
  version: "v0.2.6",
  status: "即将开放" as StatusLabel,
  githubUrl: "",
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
    description: "AI 可以帮你读账、看趋势、做分析，但不会直接改动账本数据。",
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
    xplorone: "核心账本留在自己的电脑里",
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
    title: "再让查询、页面和外部工具接起来",
    description: "AI 不漂在外面，而是回到真实账本、页面筛选和只读接口上。",
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
    title: "提出财务问题",
    description: "例如“本月支出为什么比上月多”或“哪些预算快超了”。",
  },
  {
    title: "读取本地结构",
    description: "AI 在明确边界内读取账本、分类、预算和图表上下文。",
  },
  {
    title: "回到真实页面",
    description: "答案不止是一段文字，还能落到筛选结果、报表和对应页面。",
  },
];

export const galleryItems = [
  {
    title: "首页",
    description: "快速看清本月收支与资产状态。",
    src: "/screenshots/xoplorone-workbench.png",
    alt: "XplorOne 首页总览截图",
    highlights: ["本月收支、资产和快捷操作集中在一页", "预算提醒、最近流水和 AI 助手并列出现", "适合作为每天打开的财务驾驶舱"],
  },
  {
    title: "日历页",
    description: "把财务活动放回时间维度。",
    src: "/screenshots/xoplorone-calendar-page.png",
    alt: "XplorOne 日历页截图",
    highlights: ["按日期回看财务活动", "让支出节奏和收入节奏更直观", "适合复盘一个月中钱的流动"],
  },
  {
    title: "流水页",
    description: "从列表里看到更清楚的收支结构。",
    src: "/screenshots/xoplorone-cashflow-page.png",
    alt: "XplorOne 流水页截图",
    highlights: ["用列表承接每一笔真实进出", "筛选、分类和账户信息更容易追踪", "从流水回到结构化判断"],
  },
  {
    title: "报表页",
    description: "从图表中看到经营节奏与月度趋势。",
    src: "/screenshots/xoplorone-income-expense-page.png",
    alt: "XplorOne 报表页截图",
    highlights: ["从图表看趋势和结构", "区分收入、支出和经营节奏", "用于月度复盘和风险判断"],
  },
  {
    title: "预算页",
    description: "提前建立支出边界，而不是事后补救。",
    src: "/screenshots/xoplorone-budget-page.png",
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
      "它不只记录流水，更强调账户结构、预算秩序、图表视角和跨页面联动，帮助你看懂收支结构、账户状态与月度趋势。",
  },
  {
    question: "数据真的只在本地吗？",
    answer:
      "XplorOne 采用本地优先设计。核心账本数据默认保存在你的电脑里，断网也能查账。你的数据不会因为服务器宕机而丢失。",
  },
  {
    question: "AI 会不会把数据上传出去？",
    answer:
      "AI 助手可以读取你的账本，但不能改写任何数据。涉及外部 AI 模型时，具体请求边界取决于你启用的模型与功能。",
  },
  {
    question: "现在支持哪些平台？",
    answer:
      "首版官网先以 Windows 版为主进行发布准备。下载页会持续同步当前状态，其他平台安排会在后续更新里说明。",
  },
  {
    question: "需要 API Key 吗？",
    answer:
      "基础的本地数据查看与管理不依赖外部模型；当你启用外部 AI 能力时，是否需要模型配置与 API Key 取决于具体接入方案。",
  },
  {
    question: "后续会收费吗？",
    answer:
      "当前官网首版先聚焦产品能力和下载发布准备。具体收费策略尚未正式公布，会在产品更新中明确说明。",
  },
  {
    question: "怎么备份和迁移？",
    answer:
      "产品支持 .xpl归档格式的导入导出，随时备份、迁移你的完整账本。数据永远属于你，换软件也能零成本迁移。",
  },
];

export const downloadLinks = {
  progress: "#release-status",
  github: "/download#github-status",
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
    { href: "#github", label: "GitHub", external: true, placeholder: true },
    { href: "mailto:simonzhang2026@163.com", label: "联系作者：simonzhang2026@163.com" },
    { href: "#feedback", label: "反馈建议", placeholder: true, feedbackPopover: true },
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
      '统一使用"即将开放 / 内测中 / 规划中 / 已支持"状态标签，并为未开放下载提供明确替代去处。',
    status: "已支持" as StatusLabel,
  },
];

export const productUpdates = [
  {
    date: "2026-04-17",
    title: "产品能力基线同步到官网",
    summary:
      "当前版本基线为 v0.2.6，官网同步展示多账本、预算、专业图表、AI 查询与分析、本地 API 与只读 MCP 的整体能力结构。",
    status: "已支持" as StatusLabel,
  },
  {
    date: "2026-04-17",
    title: "Windows 版发布流程整理中",
    summary:
      "安装包尚未对外开放，下载页先同步首版支持范围、发布进度和后续开放节奏。",
    status: "即将开放" as StatusLabel,
  },
];
