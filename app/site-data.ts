export type StatusLabel = "即将开放" | "内测中" | "规划中" | "已支持";

export const siteConfig = {
  name: "XplorOne",
  siteName: "xosite",
  title: "超级个体与自由职业者的本地优先财务工作台",
  altTitle: "帮超级个体与自由职业者看懂钱的财务工作台",
  description:
    "XplorOne 是一套帮助超级个体和自由职业者看懂资金状态、经营节奏与真实收支的本地财务工作台。",
  version: "v0.2.6",
  status: "即将开放" as StatusLabel,
  githubUrl: "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contactEmail: "",
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

export const compareRows = [
  {
    dimension: "核心目标",
    app: "记流水、看消费",
    finance: "做规范财务",
    xplorone: "看懂资金状态与经营脉络",
  },
  {
    dimension: "上手门槛",
    app: "低",
    finance: "高",
    xplorone: "中低",
  },
  {
    dimension: "数据与部署方式",
    app: "多偏云端",
    finance: "系统化部署，更偏重流程",
    xplorone: "本地优先",
  },
  {
    dimension: "财务视角",
    app: "消费记录",
    finance: "会计口径",
    xplorone: "经营视角 + 资金状态",
  },
  {
    dimension: "AI 的位置",
    app: "弱或表面化",
    finance: "较少涉及",
    xplorone: "用于查询、分析与联动",
  },
  {
    dimension: "更适合谁",
    app: "普通个人",
    finance: "企业财务",
    xplorone: "超级个体与自由职业者",
  },
];

export const capabilityCards = [
  {
    title: "多账本与账户结构",
    description: "不是一堆流水，而是可管理的财务空间。",
    detail: "把不同账户、项目与账本拆开整理，先建立边界，再开始理解自己的资金状态。",
    icon: "📁",
  },
  {
    title: "分类、预算与秩序",
    description: "把收支慢慢理顺，让钱有结构。",
    detail: "分类和预算不是额外负担，而是帮助你看清哪些支出正在拉扯安全感，哪些地方需要提前设边界。",
    icon: "🎯",
  },
  {
    title: "专业图表与经营视角",
    description: "看趋势、结构和风险，而不只是看总数。",
    detail: "从月度变化、收支结构和资产状态里，慢慢看懂账户变化、预算执行和经营节奏。",
    icon: "📈",
  },
  {
    title: "AI 查询与分析",
    description: "结合真实数据做查询、汇总与分析。",
    detail: "AI 不是独立漂在外面的聊天窗口，而是工作台的一部分，帮你更快找到关键财务信息。",
    icon: "🤖",
  },
  {
    title: "跨页面联动",
    description: "不是只回答你，还能把你带到对应页面和筛选结果。",
    detail: "从问题出发，回到真实页面和数据上下文，减少来回切换，也减少重复筛选。",
    icon: "🔗",
  },
  {
    title: "开放接口与 Agent 能力",
    description: "不只是在本地记账，也能接入自动化与外部工具。",
    detail: "通过本地 API 与只读 MCP，XplorOne 可以把真实账本数据连接到工作流、Agent 和其他工具里，同时保留更清楚的边界。",
    icon: "🧩",
  },
];

export const galleryItems = [
  {
    title: "首页",
    description: "快速看清本月收支与资产状态。",
    src: "/screenshots/xoplorone-workbench.png",
    alt: "XplorOne 首页总览截图",
  },
  {
    title: "日历页",
    description: "把财务活动放回时间维度。",
    src: "/screenshots/xoplorone-calendar-page.png",
    alt: "XplorOne 日历页截图",
  },
  {
    title: "流水页",
    description: "从列表里看到更清楚的收支结构。",
    src: "/screenshots/xoplorone-cashflow-page.png",
    alt: "XplorOne 流水页截图",
  },
  {
    title: "预算页",
    description: "提前建立支出边界，而不是事后补救。",
    src: "/screenshots/xoplorone-budget-page.png",
    alt: "XplorOne 预算页截图",
  },
  {
    title: "报表页",
    description: "从图表中看到经营节奏与月度趋势。",
    src: "/screenshots/xoplorone-income-expense-page.png",
    alt: "XplorOne 报表页截图",
  },
];

export const scenarioCards = [
  {
    title: "超级个体",
    description: "不只是记账，而是把收入、支出和账户慢慢理顺，让自己的财务更有秩序。",
    icon: "👤",
  },
  {
    title: "自由职业者",
    description: "按时间、项目和账户看清每一笔进出。忙的时候，也能知道钱到底去了哪里。",
    icon: "💼",
  },
  {
    title: "小型工作室主理人",
    description: "不必一开始就上重系统，也能先把日常收支、预算和经营脉络整理清楚。",
    icon: "🏠",
  },
  {
    title: "隐私敏感用户",
    description: "把核心账本留在本地，把主动权尽量留在自己手里。用起来更安心，也更踏实。",
    icon: "🔐",
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
    { href: "#contact", label: "联系我们", placeholder: true },
    { href: "#wechat", label: "公众号", placeholder: true, qrPlaceholder: true },
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
