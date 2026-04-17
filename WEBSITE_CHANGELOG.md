# 网站建设变更日志

用于记录 `xosite` 在建设过程中的重要变更，只保留对网站结构、内容、技术方案和发布流程有明确影响的更新。

## Unreleased

- 暂无未发布变更。

## [0.1.0] - 2026-04-17

### 首发内容

- 初始化 `Next.js + TypeScript` 官网工程，并落地 `/`、`/download`、`/faq`、`/changelog` 四个页面。
- 完成首页主体内容区块、导航、页脚、状态标签体系和响应式布局。
- 接入基础 SEO 能力，包括 `metadata`、Open Graph、`sitemap.xml` 与 `robots.txt`。
- 加入真实产品截图与静态资源，用于首页和各模块内容展示。

### 文档与说明

- 新增仓库 `README.md`，补充项目用途、页面构成、本地启动方式与技术栈说明。
- 将项目说明补充为中文优先、中英双语可读的仓库首页文案。
- 建立网站建设变更日志，作为后续版本记录基线。

### 仓库与发布

- 初始化本地 Git 仓库并连接 GitHub 远端仓库 `SimonZhangM/xosite`。
- 补充 `.gitignore`，排除 `.playwright-cli/`、`.workbuddy/`、`generated-images/` 等本地生成目录。
- 完成首版基线代码提交，作为 `v0.1.0` 发布起点。
