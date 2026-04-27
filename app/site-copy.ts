import {
  aiFlowSteps,
  capabilityGroups,
  compareRows,
  currentPhaseSoftwareReleases,
  faqItems,
  footerLinks,
  galleryItems,
  navItems,
  problemCards,
  siteConfig,
  softwareSeriesHighlights,
  trustBoundaries,
  type StatusLabel,
} from "./site-data";
import type { Localized } from "./i18n";

export const commonCopy = {
  zh: {
    navItems,
    headerCta: "Windows 版即将开放",
    mobileMenuOpen: "打开菜单",
    mobileMenuClose: "关闭菜单",
    languageAria: "选择语言",
    appearanceOptions: [
      { value: "dark", label: "深色" },
      { value: "light", label: "浅色" },
      { value: "system", label: "跟随浏览器" },
    ],
    footer: {
      tagline: "让财务从模糊感觉，变成清晰结构。",
      description: "本地优先的桌面财务工作台，帮超级个体与自由职业者看懂资金与经营。",
      productTitle: "产品",
      contactTitle: "联系我们",
      placeholderSuffix: "即将开放",
      feedbackQr: "反馈",
      feedbackText: "反馈入口整理中<br />欢迎提交产品建议",
      copyright: "© 2026 XplorOne. 保留所有权利。",
      privacy: "隐私政策",
      terms: "用户协议",
      productLinks: footerLinks.product,
      connectLinks: footerLinks.connect,
    },
  },
  en: {
    navItems: [
      { href: "/#hero", label: "Home" },
      { href: "/#capabilities", label: "Capabilities" },
      { href: "/#previews", label: "Preview" },
      { href: "/download", label: "Download" },
      { href: "/faq", label: "FAQ" },
    ],
    headerCta: "Windows release coming soon",
    mobileMenuOpen: "Open menu",
    mobileMenuClose: "Close menu",
    languageAria: "Choose language",
    appearanceOptions: [
      { value: "dark", label: "Dark" },
      { value: "light", label: "Light" },
      { value: "system", label: "System" },
    ],
    footer: {
      tagline: "Turn fuzzy money feelings into a clear financial structure.",
      description: "A local-first desktop finance workspace for independents, freelancers, and small operators.",
      productTitle: "Product",
      contactTitle: "Contact",
      placeholderSuffix: "coming soon",
      feedbackQr: "Feedback",
      feedbackText: "Feedback entry is being prepared<br />Product suggestions are welcome",
      copyright: "© 2026 XplorOne. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      productLinks: [
        { href: "/download", label: "Download" },
        { href: "/faq", label: "FAQ" },
        { href: "/changelog", label: "Changelog" },
      ],
      connectLinks: [
        { href: "#github", label: "GitHub", external: true, placeholder: true },
        { href: "mailto:simonzhang2026@163.com", label: "Contact: simonzhang2026@163.com" },
        { href: "#feedback", label: "Feedback", placeholder: true, feedbackPopover: true },
      ],
    },
  },
} as const;

export const homeCopy = {
  zh: {
    siteConfig,
    hero: {
      primaryCta: "Windows 版即将开放",
      secondaryCta: "查看真实界面",
      extraBadges: ["Local ledger stays on device", "AI reads, never rewrites"],
      screenshotAlt: "XplorOne 工作台首页截图",
    },
    trust: {
      eyebrow: "Trust Boundary",
      title: "本地优先不是口号，是产品边界",
      description: "XplorOne 先把账本、密钥、备份和 AI 权限说清楚，再谈自动化和智能分析。",
      items: trustBoundaries,
    },
    questions: {
      eyebrow: "User Questions",
      title: "你真正关心的，不只是记账",
      description:
        "对超级个体和自由职业者来说，财务焦虑往往来自“感觉模糊”。官网需要先把这种模糊说中，再给出工作台的答案。",
      compareRows,
      cards: problemCards,
    },
    capabilities: {
      eyebrow: "Capability Map",
      title: "工作台能力分两层：先结构，再联动",
      description: "这能让页面从“功能清单”变成“产品架构”：用户知道每个能力为什么存在，也知道 AI 该站在什么位置。",
      groups: capabilityGroups,
    },
    aiFlow: {
      eyebrow: "AI Flow",
      title: "AI 不漂在外面，它回到真实页面里",
      description: "新版表达会把 AI 从“聊天窗口噱头”降落到工作流：读结构、给判断、带用户回到页面和筛选结果。",
      steps: aiFlowSteps,
      screenshotAlt: "XplorOne AI 助手页面截图",
    },
    previews: {
      eyebrow: "Product Browser",
      title: "真实页面，比概念图更能说明这是什么产品",
      description: "用真实界面承接信任。每张截图都对应一个核心使用场景，而不是装饰性的演示图。",
      items: galleryItems,
    },
    release: {
      eyebrow: "Release Status",
      title: "Windows 版整理中，官网先承接产品理解",
      description: "当前阶段不制造假的下载入口，先把定位、截图、FAQ 和更新口径做好，再开放安装包。",
      downloadCta: "查看下载进度",
      changelogCta: "查看更新日志",
    },
    faq: {
      eyebrow: "FAQ",
      title: "开始使用之前，先把关键边界说清楚",
      cta: "查看完整 FAQ",
    },
  },
  en: {
    siteConfig: {
      ...siteConfig,
      title: "A local-first finance workspace for independents and freelancers",
      altTitle: "A finance workspace that helps you understand where your money actually stands",
      heroTitle: "Keep your independent finances on your own computer",
      heroSubtitle:
        "XplorOne turns scattered transactions into a workable structure: local books, budgets, charts, and read-only AI that helps you understand the flow.",
      heroBadges: ["Local-first", "Read-only AI", "Budget / Cashflow / Assets"],
      description:
        "XplorOne is a local-first desktop finance workspace for independents, freelancers, and small operators.",
    },
    hero: {
      primaryCta: "Windows release coming soon",
      secondaryCta: "View real screens",
      extraBadges: ["Core ledger stays on device", "AI can read, not rewrite"],
      screenshotAlt: "XplorOne workspace dashboard screenshot",
    },
    trust: {
      eyebrow: "Trust Boundary",
      title: "Local-first is not a slogan. It is a product boundary.",
      description:
        "Before talking about automation or AI, XplorOne makes the ledger, keys, backups, and AI permissions easier to reason about.",
      items: [
        {
          title: "Local books",
          description: "Core books are stored locally by default. You can still review and manage them offline.",
          icon: "database",
        },
        {
          title: "Read-only analysis",
          description: "AI can read books, inspect trends, and help analyze patterns, but it cannot directly rewrite ledger data.",
          icon: "lock",
        },
        {
          title: "Archive and move",
          description: ".xpl archives give you a clear way to back up, move, and keep your own financial data.",
          icon: "archive",
        },
        {
          title: "Key protection",
          description: "Model keys are managed by the system side, reducing repeated exposure and messy configuration.",
          icon: "shield",
        },
      ],
    },
    questions: {
      eyebrow: "User Questions",
      title: "What you care about is not just bookkeeping",
      description:
        "For independents and freelancers, financial anxiety often comes from a blurry feeling, not from missing one more button.",
      compareRows: [
        {
          dimension: "Personal bookkeeping apps",
          value: "Track entries and spending categories",
          xplorone: "Understand cash position and operating rhythm",
        },
        {
          dimension: "Traditional finance software",
          value: "Formal workflows, heavier process",
          xplorone: "Keep structure, lower the entry barrier",
        },
        {
          dimension: "General-purpose AI tools",
          value: "Answer questions away from the real screen",
          xplorone: "Bring queries back to local books and filters",
        },
        {
          dimension: "Cloud-first tools",
          value: "Depend on online services and remote accounts",
          xplorone: "Keep the core ledger on your own computer",
        },
      ],
      cards: [
        {
          text: "Did I actually make money this month, or was I just busy?",
          description: "Revenue can look fine while savings stay flat. Income, profit, and cashflow need to be separated.",
          iconBg: "#EFF6FF",
        },
        {
          text: "How safe is my cash, and how long can it last?",
          description: "Not panic, just a real runway signal you can refer to.",
          iconSrc: "/strongbox.svg",
          iconBg: "#FEF0E6",
        },
        {
          text: "Which quiet expenses are slowly draining our savings?",
          description: "Subscriptions and hidden costs rarely show up as one big bill.",
          iconSrc: "/expenses-one.svg",
          iconBg: "#F0FDF4",
        },
        {
          text: "Have my accounts, budgets, and categories become a mess?",
          description: "As work gets more complex, the categories you once made casually may no longer hold up.",
          iconSrc: "/financial_report.svg",
          iconBg: "#F5F3FF",
        },
      ],
    },
    capabilities: {
      eyebrow: "Capability Map",
      title: "Two layers: structure first, then intelligence and connections",
      description:
        "XplorOne is not just a list of features. It starts by shaping your finance structure, then connects queries, pages, and tools around it.",
      groups: [
        {
          eyebrow: "Finance Structure",
          title: "Build the books, accounts, and budgets first",
          description: "Give daily entries a structure so income, assets, budgets, and categories stop drifting apart.",
          items: [
            {
              title: "Books and account structure",
              description: "Separate accounts, projects, and books before trying to understand your money position.",
              icon: "wallet",
              iconColor: "#e95556",
            },
            {
              title: "Categories, budgets, and order",
              description: "Budgets are not extra paperwork. They set boundaries before spending becomes a surprise.",
              icon: "target",
              iconColor: "#eb7a3b",
            },
            {
              title: "Charts with an operator view",
              description: "Read trends, structures, and risks across accounts, budgets, and monthly rhythm.",
              icon: "chart",
              iconColor: "#f0a43a",
            },
          ],
        },
        {
          eyebrow: "AI & Open Access",
          title: "Then connect queries, pages, and external tools",
          description: "AI does not float outside the product. It returns to real books, page filters, and read-only access.",
          items: [
            {
              title: "AI query and analysis",
              description: "Ask questions and summarize real financial data without leaving the workspace.",
              icon: "bot",
              iconColor: "#7b5ae5",
            },
            {
              title: "Cross-page linking",
              description: "Move from a question back to the right page and filter state, instead of re-filtering manually.",
              icon: "link",
              iconColor: "#5f86e7",
            },
            {
              title: "Local API and Agent access",
              description: "Use local API and read-only MCP to connect books with workflows, agents, and other tools.",
              icon: "plug",
              iconColor: "#61b2dc",
            },
          ],
        },
      ],
    },
    aiFlow: {
      eyebrow: "AI Flow",
      title: "AI belongs inside the real workflow",
      description:
        "Instead of making AI the headline, XplorOne uses it where it helps: reading structure, giving context, and taking you back to the right screen.",
      steps: [
        {
          title: "Ask a finance question",
          description: "For example: why did spending rise this month, or which budgets are close to their limit?",
        },
        {
          title: "Read local structure",
          description: "AI reads books, categories, budgets, and chart context within clearly defined boundaries.",
        },
        {
          title: "Return to the actual page",
          description: "The answer can lead back to filtered data, reports, and the relevant screen.",
        },
      ],
      screenshotAlt: "XplorOne AI assistant screenshot",
    },
    previews: {
      eyebrow: "Product Browser",
      title: "Real screens explain the product better than concept art",
      description: "These are actual product screens. Each one maps to a real use case, not decorative demo imagery.",
      items: [
        {
          title: "Dashboard",
          description: "Read monthly income, spending, and assets at a glance.",
          src: "/screenshots/xoplorone-workbench.png",
          alt: "XplorOne dashboard screenshot",
          highlights: ["Monthly flow, assets, and quick actions in one place", "Budgets, recent transactions, and AI sit together", "A daily finance cockpit"],
        },
        {
          title: "Calendar",
          description: "Put financial activity back on a timeline.",
          src: "/screenshots/xoplorone-calendar-page.png",
          alt: "XplorOne calendar screenshot",
          highlights: ["Review activity by date", "Make income and spending rhythm visible", "Useful for monthly review"],
        },
        {
          title: "Transactions",
          description: "See clearer structure inside the transaction list.",
          src: "/screenshots/xoplorone-cashflow-page.png",
          alt: "XplorOne transactions screenshot",
          highlights: ["Work with every real inflow and outflow", "Track filters, categories, and accounts", "Move from entries back to structure"],
        },
        {
          title: "Reports",
          description: "Understand operating rhythm through charts.",
          src: "/screenshots/xoplorone-income-expense-page.png",
          alt: "XplorOne reports screenshot",
          highlights: ["Read trends and structure visually", "Separate income, spending, and operating rhythm", "Useful for monthly review and risk checks"],
        },
        {
          title: "Budgets",
          description: "Set spending boundaries before the damage is done.",
          src: "/screenshots/xoplorone-budget-page.png",
          alt: "XplorOne budgets screenshot",
          highlights: ["See budget progress early", "Set boundaries before spending happens", "Good for subscriptions, projects, and daily costs"],
        },
      ],
    },
    release: {
      eyebrow: "Release Status",
      title: "Windows release is being prepared; the site explains the product first",
      description:
        "We are not publishing a fake download button. The site is being used to clarify positioning, screenshots, FAQ, and release notes before the installer opens.",
      downloadCta: "View download status",
      changelogCta: "View changelog",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Before using it, understand the boundaries first",
      cta: "Read full FAQ",
    },
  },
} as const;

export const faqPageCopy = {
  zh: {
    eyebrow: "常见问题",
    title: "把边界说清楚，比一句口号更重要",
    description:
      "FAQ 首版优先回答用户真正关心的事：适合谁、和普通记账软件有什么不同、本地优先意味着什么，以及外部 AI 请求边界怎么理解。",
    items: faqItems,
    feedbackEyebrow: "反馈入口",
    feedbackTitle: "当前先通过官网更新与后续仓库入口承接反馈",
    feedbackDescription:
      "首版还没有单独的邮件表单或等待名单系统，因此这里不会放一个无法承接的假入口。后续公开仓库后，反馈会优先通过 GitHub 和更新日志入口同步承接。",
  },
  en: {
    eyebrow: "FAQ",
    title: "Clear boundaries matter more than a slogan",
    description:
      "This first FAQ focuses on what users actually need to know: who XplorOne is for, how it differs from normal bookkeeping apps, what local-first means, and where external AI boundaries sit.",
    items: [
      {
        question: "Who is XplorOne for?",
        answer:
          "XplorOne is built first for independents, freelancers, and small operators who want to organize finances locally without adopting a heavy enterprise finance system.",
      },
      {
        question: "How is it different from normal bookkeeping apps?",
        answer:
          "It is not only about recording entries. XplorOne emphasizes account structure, budget order, chart-based review, and page-to-page context so you can understand cash position and monthly rhythm.",
      },
      {
        question: "Does the data only stay local?",
        answer:
          "XplorOne uses a local-first design. Core book data is stored on your computer by default, and you can still review books offline. The wording is intentionally precise rather than absolute.",
      },
      {
        question: "Will AI upload my data?",
        answer:
          "The AI assistant can read ledger context for analysis, but it cannot rewrite ledger data directly. When external model providers are enabled, request boundaries depend on the model and feature you choose.",
      },
      {
        question: "Which platforms are supported?",
        answer:
          "The first public release is being prepared around Windows. The download page will continue to reflect the current release status and later platform plans.",
      },
      {
        question: "Do I need an API key?",
        answer:
          "Basic local viewing and management do not depend on an external model. If you enable external AI features, API key requirements depend on the provider and integration mode.",
      },
      {
        question: "Will it be paid?",
        answer:
          "The current site focuses on product understanding and release preparation. Pricing will be clarified in product updates when the release path is ready.",
      },
      {
        question: "How do backup and migration work?",
        answer:
          "XplorOne supports .xpl archive import and export so you can back up and move full books with a clear, user-owned path.",
      },
    ],
    feedbackEyebrow: "Feedback",
    feedbackTitle: "Feedback will first be handled through site updates and the future repository entry",
    feedbackDescription:
      "There is no standalone email form or waitlist in the first site version, so we will not create a fake entry point. Once the repository is public, feedback will be routed through GitHub and changelog updates.",
  },
} as const;

export const downloadPageCopy = {
  zh: {
    status: "即将开放" as StatusLabel,
    statusNote: "Windows 版整理中",
    title: "下载入口暂未开放，但你不会在这里撞墙",
    description: "首版官网已经上线，Windows 版正在整理发布流程。当前阶段先同步产品状态、支持范围和后续节奏，安装包稍后开放。",
    buttons: {
      progress: "查看发布进度",
      github: "访问 GitHub",
      changelog: "查看更新日志",
    },
    supportEyebrow: "当前支持范围",
    supportItems: [
      ["官网内容浏览", "已支持"],
      ["功能结构预览", "已支持"],
      ["Windows 安装包", "即将开放"],
      ["MCP 详细文档", "规划中"],
    ] as [string, StatusLabel][],
    progress: {
      eyebrow: "发布进度",
      title: "当前处于“官网先行、安装包后补”的阶段",
      description: "这是一个刻意的发布节奏。先把产品定位、截图、FAQ 和更新口径做好，再开放真正的下载入口。",
      cards: [
        {
          title: "官网首版",
          detail: "首页、下载页、FAQ 和更新日志已经可预览，可直接接入 GitHub + Vercel 工作流。",
          status: "已支持" as StatusLabel,
        },
        {
          title: "Windows 安装包",
          detail: "正在整理发布流程、状态口径与下载承接路径，避免放出一个不可维护的假按钮。",
          status: "即将开放" as StatusLabel,
        },
        {
          title: "后续二级页",
          detail: "本地优先细节、MCP 说明与更多场景页会在首版稳定后继续扩展。",
          status: "规划中" as StatusLabel,
        },
      ],
    },
    github: {
      eyebrow: "GitHub 状态",
      title: "仓库入口会在公开时补充，当前先保留真实状态说明",
      description:
        "当前官网工程已经按 GitHub + Vercel 自动部署工作流搭建完成，但公开仓库地址尚未在本页固化。为了不制造一个假的外链，这里先明确说明状态：仓库地址将在首版公开时同步补充。",
      note: "等仓库地址确认后，只需要把一个配置值替换为真实 URL，下载页和 Footer 会自动同步更新。",
    },
  },
  en: {
    status: "即将开放" as StatusLabel,
    statusNote: "Windows release in preparation",
    title: "The download is not open yet, but this page is not a dead end",
    description:
      "The first site is live, and the Windows release flow is being prepared. For now, this page shows product status, support scope, and the release path before the installer becomes available.",
    buttons: {
      progress: "View release status",
      github: "Visit GitHub",
      changelog: "View changelog",
    },
    supportEyebrow: "Current support scope",
    supportItems: [
      ["Website content", "已支持"],
      ["Feature preview", "已支持"],
      ["Windows installer", "即将开放"],
      ["MCP documentation", "规划中"],
    ] as [string, StatusLabel][],
    progress: {
      eyebrow: "Release Status",
      title: "The website comes first; installer distribution follows",
      description:
        "This is intentional. We are clarifying positioning, screenshots, FAQ, and release language before opening the actual download.",
      cards: [
        {
          title: "First website version",
          detail: "Home, download, FAQ, and changelog pages are ready for preview and fit the GitHub + Vercel workflow.",
          status: "已支持" as StatusLabel,
        },
        {
          title: "Windows installer",
          detail: "Release flow, status wording, and download handoff are being prepared to avoid a fragile fake button.",
          status: "即将开放" as StatusLabel,
        },
        {
          title: "Follow-up pages",
          detail: "Local-first details, MCP notes, and scenario pages will expand after the first site version stabilizes.",
          status: "规划中" as StatusLabel,
        },
      ],
    },
    github: {
      eyebrow: "GitHub Status",
      title: "The repository entry will be added when it is ready to be public",
      description:
        "The website is already structured for a GitHub + Vercel deployment workflow, but the public repository URL is not fixed on this page yet. Instead of creating a fake external link, we are keeping the status explicit.",
      note: "Once the repository URL is confirmed, one configuration value can update the download page and footer together.",
    },
  },
} as const;

export const changelogPageCopy = {
  zh: {
    eyebrow: "Release Notes",
    title: "软件更新日志",
    description: "从软件发布历史中提取最新版本信息，并把关键开发脉络整理成中文官网摘要。",
    currentEyebrow: "Current 0.3 Stage",
    currentTitle: "当前阶段详细更新",
    currentDescription: "0.3.x 仍属于当前开发阶段，因此从 v0.3.1 到最新版本，全部按完整分类说明展示。",
    latestEyebrow: "Latest Release",
    releaseEyebrow: "Release Notes",
    summaryLabel: "[更新摘要]",
    historyEyebrow: "History Highlights",
    historyTitle: "历史开发信息搬迁",
    historyDescription: "第一次搬迁时，除了最新版本，也把 CHANGELOG 中的 0.3、0.2 与早期开发脉络整理到官网。",
    releases: currentPhaseSoftwareReleases,
    series: softwareSeriesHighlights,
  },
  en: {
    eyebrow: "Release Notes",
    title: "Software changelog",
    description: "Latest release notes and the product development history behind XplorOne.",
    currentEyebrow: "Current 0.3 Stage",
    currentTitle: "Detailed updates for the current stage",
    currentDescription: "Because 0.3.x is still the active development stage, releases from v0.3.1 onward are shown in full detail.",
    latestEyebrow: "Latest Release",
    releaseEyebrow: "Release Notes",
    summaryLabel: "[Summary]",
    historyEyebrow: "History Highlights",
    historyTitle: "Historical development notes",
    historyDescription: "The first migration also keeps the 0.3, 0.2, and early development context on the website.",
    releases: [
      {
        version: "v0.3.9",
        date: "2026-04-26",
        status: "已支持" as StatusLabel,
        focus: "Split transactions and allocation-based reporting",
        intro:
          "This release introduces split transactions as a first-class bookkeeping capability. XplorOne now keeps real account flow on the parent transaction while recording category, member, project, tax, and reimbursable details on dedicated allocation lines.",
        categories: [
          {
            emoji: "✨",
            label: "Added",
            items: [
              "Added the transaction_allocations data model for income, expense, and refund allocation details.",
              "Added split editing in Quick Entry, plus a split action on the Transactions page with expandable allocation rows.",
              "Added allocation integrity checks and CSV export for allocation details while keeping parent transaction export close to a bank-statement view.",
            ],
          },
          {
            emoji: "🔁",
            label: "Changed",
            items: [
              "Category statistics, budget actuals, project/member/tax/reimbursable metrics, Top N, and AI category analysis now use allocation effects.",
              "Income, expense, and refund writes create or update allocation rows; transfers, loans, repayments, and balance adjustments stay parent-transaction based.",
              "Backup, restore, .xpl, and legacy import flows now preserve or backfill allocations and run integrity checks afterward.",
            ],
          },
          {
            emoji: "⚡",
            label: "Improved",
            items: [
              "Improved split interaction on the Transactions page with aligned compact allocation rows.",
              "Polished Quick Entry, Multi Entry, and split editing controls, date/time inputs, placeholder weight, and bilingual wording.",
              "Improved AI entry draft feedback so it connects more cleanly with split transaction creation.",
            ],
          },
          {
            emoji: "🛠️",
            label: "Fixed",
            items: [
              "Fixed split editor overflow when opened from the Transactions page.",
              "Fixed empty-value placeholders, account placeholder separators, and native-control inconsistencies in split editing.",
              "Fixed remaining report/export paths that could still depend on legacy parent category fields.",
            ],
          },
          {
            emoji: "🔒",
            label: "Security & stability",
            items: [
              "Prevented unbalanced split drafts from being saved into formal transaction tables.",
              "Strengthened service-layer checks for allocation totals, same-book references, category type matching, and refund direction.",
              "Kept account balances, reconciliation, duplicate detection, and cashflow calculations parent-transaction based to avoid double-counting.",
            ],
          },
        ],
      },
      {
        version: "v0.3.8",
        date: "2026-04-24",
        status: "已支持" as StatusLabel,
        focus: "English desktop experience, safer existing-book handling, and settings polish",
        intro:
          "This release improves the English desktop experience, protects existing book data, and polishes settings. XplorOne now localizes more display layers without rewriting real book records.",
        categories: [
          {
            emoji: "✨",
            label: "Added",
            items: [
              "Added a global currency symbol preference for ￥, $, and €.",
              "Added model preset persistence so saved model settings keep the selected preset code.",
              "Added basic English entry parsing for common income, expense, transfer, loan, repayment, refund, account, relative date, and AM/PM expressions.",
            ],
          },
          {
            emoji: "🔁",
            label: "Changed",
            items: [
              "Renamed the English Ledger surface to Transactions across navigation, titles, actions, confirmations, and export text.",
              "Reordered the Settings sidebar so daily preferences appear before books, models, licensing, data, and archive entries.",
              "Replaced native time inputs in reminder settings with hour/minute pickers to avoid mixed locale rendering.",
            ],
          },
          {
            emoji: "⚡",
            label: "Improved",
            items: [
              "Improved display-layer localization for existing books without writing translated data back into the ledger.",
              "Polished spacing, table alignment, action columns, and tooltips across accounts, categories, home, reports, settings, and personalization.",
              "Improved desktop menus, About, and Check for Updates dialogs with bilingual wording and version/license context.",
            ],
          },
          {
            emoji: "🛠️",
            label: "Fixed",
            items: [
              "Fixed mixed Chinese and English account, category, and project names after switching language.",
              "Fixed duplicate or incorrect primary categories after language switches.",
              "Fixed Settings scrolling so the left sidebar stays fixed while subpages scroll.",
            ],
          },
          {
            emoji: "🔒",
            label: "Security & stability",
            items: [
              "Reduced the risk of accidental data mutation during upgrades by making default data seeding conditional.",
              "Handled language switching through display-layer localization instead of rewriting book data.",
              "Strengthened model configuration storage by preserving preset metadata during save and activation flows.",
            ],
          },
        ],
      },
      {
        version: "v0.3.7",
        date: "2026-04-24",
        status: "已支持" as StatusLabel,
        focus: "Bilingual AI chat and English query experience",
        intro:
          "This release improves the bilingual AI conversation experience. XplorOne can now answer in Chinese or English based on the user's current message, while improving English queries, local parsing, and follow-up questions.",
        categories: [
          {
            emoji: "✨",
            label: "Added",
            items: [
              "Added conversation language-context detection using the current input, the previous clear user language, and UI language as fallback.",
              "Added basic local English query parsing for monthly income, monthly spending, account balance, and top expense categories.",
              "Added time-only follow-up support in the same query session, such as “and last month?”.",
            ],
          },
          {
            emoji: "🔁",
            label: "Changed",
            items: [
              "AI answers are no longer forced by the UI language and now prioritize the language of the current user message.",
              "Query, analysis, free chat, and entry draft generation now follow the response language.",
              "The frontend sends the current UI language with chat requests and renders buttons from the returned response_language.",
            ],
          },
          {
            emoji: "⚡",
            label: "Improved",
            items: [
              "Improved bilingual display for query answers, follow-up prompts, table titles, column names, amounts, and period labels.",
              "Refined analysis and free-chat system prompts so English questions receive more natural English answers.",
              "Improved entry-draft titles, field names, missing-field prompts, confirmations, cancellations, and submission feedback.",
            ],
          },
          {
            emoji: "🛠️",
            label: "Fixed",
            items: [
              "Fixed cases where Chinese input in the English UI could still produce English-only answers.",
              "Fixed time-only follow-ups that previously failed to reuse the previous query context.",
            ],
          },
          {
            emoji: "⚠️",
            label: "Known issue",
            items: [
              "English natural-language entry parsing, such as “spent 20 on lunch from cash”, was not part of this release and is handled separately.",
            ],
          },
        ],
      },
      {
        version: "v0.3.6",
        date: "2026-04-23",
        status: "已支持" as StatusLabel,
        focus: "Budget-page loading and shared home cache",
        intro:
          "This release focuses on the Budget page loading path and shared budget cache with the Home page, reducing repeated requests and fake lag when switching pages.",
        categories: [
          {
            emoji: "🔁",
            label: "Changed",
            items: [
              "Replaced the old aggregated Budget page loading path with lighter list_budget_months and get_budget_month calls.",
              "Started sharing the renderer budget cache between the Home page and Budget page.",
            ],
          },
          {
            emoji: "⚡",
            label: "Improved",
            items: [
              "Improved request deduplication, abort-on-leave behavior, and loading triggers on the Budget page.",
              "Improved the Home-to-Budget transition by reusing already-hit budget data first.",
            ],
          },
          {
            emoji: "🛠️",
            label: "Fixed",
            items: [
              "Fixed repeated same-month budget requests.",
              "Removed temporary budget timing logs and restored development StrictMode.",
            ],
          },
        ],
      },
      {
        version: "v0.3.5",
        date: "2026-04-23",
        status: "已支持" as StatusLabel,
        focus: "Budget stability and local preview error feedback",
        intro:
          "This release tightens the Budget page data-loading path, annual budget saving behavior, and local preview runtime error wording.",
        categories: [
          {
            emoji: "🔁",
            label: "Changed",
            items: [
              "Moved the Budget page to a more focused loading chain that can return month lists and current-month detail together.",
              "Changed Save as annual budget to truly cover January through December of the selected year.",
              "Continued product wording cleanup in the sidebar, including Reports to Charts and Communication to Chat.",
            ],
          },
          {
            emoji: "⚡",
            label: "Improved",
            items: [
              "Improved Budget page caching, monthly summary sync, in-table loading, and optimistic updates.",
              "Polished budget balance display, year chips, filter triggers, and footer alignment.",
              "Improved local preview runtime errors with more consistent Chinese/English fallback wording.",
            ],
          },
          {
            emoji: "🛠️",
            label: "Fixed",
            items: [
              "Fixed mismatches between the left summary and right-side budget table after switching months.",
              "Fixed unclear timeout and error paths in Budget page preview flows.",
            ],
          },
        ],
      },
      {
        version: "v0.3.4",
        date: "2026-04-23",
        status: "已支持" as StatusLabel,
        focus: "Cash Flow report and chart scaling",
        intro:
          "This release adds the Cash Flow report and unifies scaling across mirrored trend charts so visual proportions are easier to trust.",
        categories: [
          {
            emoji: "✨",
            label: "Added",
            items: ["Added the Cash Flow report page, aligned with the transaction flow perspective."],
          },
          {
            emoji: "🔁",
            label: "Changed",
            items: [
              "Income & Expense and Cash Flow monthly trend charts now share the same Y-axis upper bound.",
              "Unified the Transactions page sidebar filter trigger around a Time Range style.",
            ],
          },
          {
            emoji: "⚡",
            label: "Improved",
            items: [
              "Improved assets, icons, spacing, and chart-area structure across Income & Expense, Accounts, and Cash Flow pages.",
              "Improved bilingual titles, sidebar order, and icon assets for the Cash Flow report.",
            ],
          },
          {
            emoji: "🛠️",
            label: "Fixed",
            items: ["Fixed misleading proportions caused by independently scaled mirrored bar charts."],
          },
        ],
      },
      {
        version: "v0.3.3",
        date: "2026-04-22",
        status: "已支持" as StatusLabel,
        focus: "Type-check cleanup and management-page polish",
        intro:
          "This release clears historical frontend type-check issues and continues improving member, project, and management page behavior.",
        categories: [
          {
            emoji: "✨",
            label: "Added",
            items: [
              "Added the complete create flow for the Members page.",
              "Added shared normalize readers to standardize frontend result handling.",
            ],
          },
          {
            emoji: "🔁",
            label: "Changed",
            items: [
              "Several pages now normalize result.data before using business types instead of hard-casting directly.",
              "Members, Projects, Accounts, and Categories started sharing the same SVG action-button system.",
            ],
          },
          {
            emoji: "⚡",
            label: "Improved",
            items: [
              "Improved member and project page caching so old data is shown first while background refresh runs.",
              "Polished grouped-table rounding, color fills, status pills, and action columns.",
              "Improved header height, borders, radius, and range chips across Transactions, Categories, Accounts, and Calendar pages.",
            ],
          },
          {
            emoji: "🛠️",
            label: "Fixed",
            items: [
              "Fixed historical renderer typecheck issues so npm run typecheck became usable again.",
              "Fixed unstable result-object handling across several pages.",
            ],
          },
        ],
      },
      {
        version: "v0.3.2",
        date: "2026-04-22",
        status: "已支持" as StatusLabel,
        focus: "Transaction cashflow semantics and income/expense separation",
        intro:
          "This release separates the Transactions page cashflow view from income/expense accounting statistics, while filling in reminder-center and English display details.",
        categories: [
          {
            emoji: "🔁",
            label: "Changed",
            items: [
              "Changed the Transactions page summary and time buckets to a cashflow view: Net Flow, Cash Inflow, and Cash Outflow.",
              "In single-account view, related transfers can count as inflow or outflow; global view still excludes normal transfers.",
            ],
          },
          {
            emoji: "⚡",
            label: "Improved",
            items: [
              "Improved the cashflow explanation at the top of the Transactions page to reduce confusion with income/expense reports.",
              "Improved filter handoff from Income & Expense and Accounts pages into Transactions.",
              "Improved reminder-center titles, body text, budget thresholds, backup reminders, dates, and range chips in English mode.",
            ],
          },
          {
            emoji: "🛠️",
            label: "Fixed",
            items: ["Fixed confusion caused by mixed cashflow and income/expense statistics."],
          },
        ],
      },
      {
        version: "v0.3.1",
        date: "2026-04-21",
        status: "已支持" as StatusLabel,
        focus: "Settings and reports English-mode cleanup",
        intro:
          "This release fills remaining English-mode gaps in Settings and Reports and fixes a report internationalization runtime issue.",
        categories: [
          {
            emoji: "🔁",
            label: "Changed",
            items: [
              "Continued moving Settings panel titles, dialogs, status messages, and Web preview fallback wording into Chinese/English coverage.",
              "Continued connecting basic report pages under the Reports group to the dictionary layer.",
            ],
          },
          {
            emoji: "⚡",
            label: "Improved",
            items: [
              "Improved file selection, path opening, restore, and import confirmation flows in English mode.",
              "Improved long English labels in the Reports sub-navigation.",
              "Updated XplorOne Codex skill docs to make read-only query boundaries clearer.",
            ],
          },
          {
            emoji: "🛠️",
            label: "Fixed",
            items: ["Fixed a Reports page white screen caused by a missing t prop inside a child component."],
          },
        ],
      },
    ],
    series: [
      {
        title: "0.3 series: product release line",
        emoji: "🚀",
        summary:
          "The 0.3 series focuses on split transactions, allocation-based reporting, English readiness, bilingual AI, budget stability, cashflow reports, and licensing foundations.",
        items: [
          "Added split transactions and allocation-effect calculations for categories, budgets, projects, members, tax, reimbursable metrics, and reports.",
          "Improved internationalization and stability across home, calendar, transactions, budgets, reports, settings, and management pages.",
          "Added licensing foundations, English query parsing, English entry parsing, and follow-up query behavior.",
        ],
      },
      {
        title: "0.2 series: local-first and release foundations",
        emoji: "🧱",
        summary:
          "The 0.2 series moved XplorOne toward a clearer product release line, covering MCP, archives, budget database consolidation, packaging, and privacy boundaries.",
        items: [
          "Added the XplorOne Read-Only MCP v1 baseline and client-token foundations for Codex / WorkBuddy.",
          "Added .xpl archive import/export and merged the separate budget database into the main database.",
          "Added Windows portable / NSIS release foundations, release privacy checks, and Electron safeStorage token encryption.",
        ],
      },
      {
        title: "Early development v0.0.5 - v0.1.9",
        emoji: "🌱",
        summary:
          "Early versions record the shift from a single-page prototype into a multi-module local finance workspace.",
        items: [
          "Built accounts, categories, members, projects, transactions, home overview, basic reports, and multi-book foundations.",
          "Created early AI query, AI entry, AI analysis, free chat, and budget management flows.",
          "Repeatedly refined navigation, toolbars, charts, tables, repository layers, service layers, and shared contracts.",
        ],
      },
    ],
  },
} as const;

export type StatusText = Localized<Record<StatusLabel, string>>;
