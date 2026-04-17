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
};

export const navItems = [
  { href: "/#hero", label: "首页" },
  { href: "/#capabilities", label: "核心能力" },
  { href: "/download", label: "下载" },
  { href: "/faq", label: "FAQ" },
  { href: "/changelog", label: "更新日志" },
];

export const problemCards = [
  "我这个月到底是赚了，还是只是忙了？",
  "我手上的钱安全吗，还能撑多久？",
  "哪些支出正在慢慢拖累自己？",
  "账户、预算和分类是不是已经乱了？",
];

export const compareRows = [
  {
    dimension: "核心目标",
    app: "记流水",
    finance: "做规范财务",
    xplorone: "看懂个人经营与资金状态",
  },
  {
    dimension: "用户门槛",
    app: "低",
    finance: "高",
    xplorone: "中低",
  },
  {
    dimension: "数据方式",
    app: "多偏云端",
    finance: "系统化但更重",
    xplorone: "本地优先",
  },
  {
    dimension: "财务视角",
    app: "消费记录",
    finance: "会计口径",
    xplorone: "经营视角 + 资金状态",
  },
  {
    dimension: "AI 角色",
    app: "弱或表面化",
    finance: "较少涉及",
    xplorone: "查询、分析、联动",
  },
  {
    dimension: "适合谁",
    app: "普通个人",
    finance: "企业财务",
    xplorone: "超级个体与自由职业者",
  },
];

export const capabilityCards = [
  {
    title: "多账本与账户结构",
    description: "不是一堆流水，而是可管理的财务空间。",
    detail: "把不同账户、项目与账本拆开整理，先建立边界，再开始理解资金状态。",
  },
  {
    title: "分类、预算与秩序建立",
    description: "把收支慢慢理顺，让钱有结构。",
    detail: "分类和预算不是额外负担，而是帮助你看清哪些支出正在拉扯经营安全感。",
  },
  {
    title: "专业图表与经营视角",
    description: "看趋势、结构和风险，而不只是看总数。",
    detail: "从月度趋势、收支结构和资产变化里，看懂账户状态与预算执行。",
  },
  {
    title: "AI 查询与分析",
    description: "结合真实数据做查询、汇总与分析。",
    detail: "AI 是工作台的一部分，不只是聊天窗口，而是帮助你更快找到关键财务信息。",
  },
  {
    title: "跨页面联动",
    description: "不是只回答你，还能把你带到对应页面和筛选结果。",
    detail: "从问题出发，回到真实页面与数据上下文，减少来回切换和重复筛选。",
  },
];

export const galleryItems = [
  {
    title: "首页 Dashboard",
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
    description: "不只是记账，而是建立自己的财务秩序。",
  },
  {
    title: "自由职业者",
    description: "按时间、项目、账户看清收入和支出。",
  },
  {
    title: "小型工作室主理人",
    description: "不做重型系统，也能先把经营脉络理清。",
  },
  {
    title: "隐私敏感用户",
    description: "把数据留在本地，把主动权留在自己手里。",
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
      "XplorOne 采用本地优先设计。核心账本数据默认保存在你的电脑里，本地查询、本地展示与本地数据管理优先。",
  },
  {
    question: "AI 会不会把数据上传出去？",
    answer:
      "涉及外部 AI 模型时，具体请求边界取决于你启用的模型与功能。官网不会做绝对化承诺，后续会在二级页里把边界说明写清楚。",
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
      "产品已按本地优先方式设计，后续会提供更明确的备份、迁移和导入导出说明。首版官网先放出基础口径，详细流程稍后补充。",
  },
];

export const downloadLinks = {
  progress: "#release-status",
  github: "/download#github-status",
  changelog: "/changelog",
};

export const footerLinks = [
  { href: "/download", label: "下载页" },
  { href: "/faq", label: "常见问题" },
  { href: "/changelog", label: "更新日志" },
  { href: "/download#github-status", label: "GitHub" },
  { href: "/faq#feedback", label: "反馈入口" },
];

export const websiteUpdates = [
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
      "统一使用“即将开放 / 内测中 / 规划中 / 已支持”状态标签，并为未开放下载提供明确替代去处。",
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
