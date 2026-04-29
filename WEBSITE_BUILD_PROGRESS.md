# 网站建设进度

本文件用于说明 **网站当前做到哪儿了**。  
和 `WEBSITE_CHANGELOG.md` 的区别是：
- `WEBSITE_CHANGELOG.md`：按版本记录历史变化
- `WEBSITE_BUILD_PROGRESS.md`：描述当前网站状态、当前阶段和下一步重点

---

## 当前版本

- 网站版本：`0.1.6`
- 更新时间：`2026-04-29`
- 线上地址：[https://xosite.vercel.app](https://xosite.vercel.app)
- 仓库地址：[https://github.com/SimonZhangM/xosite](https://github.com/SimonZhangM/xosite)
- 当前同步的软件版本基线：`v0.3.9`

---

## 当前阶段

当前处于：
- 首版官网已上线
- 首页第二轮结构升级已完成
- 更新日志页已切换为软件版本日志展示
- 下载页、FAQ 与更新日志页已开始抽离为独立内容模块
- 隐私政策页与用户协议页已补齐
- 静态导出部署脚本已接入项目命令
- 结构化数据、站点元信息与中英文截图资源已继续收口
- 文档与版本口径同步整理中

一句话判断：
- 网站已经具备稳定对外展示能力，当前重点不再是“把页面搭出来”，而是继续打磨首页表达、下载说明和版本同步方式。

---

## 当前网站已具备的内容

### 1. 页面结构

- 已完成 6 个核心页面：
  - `/`
  - `/download`
  - `/faq`
  - `/changelog`
  - `/privacy`
  - `/terms`

### 2. 首页表达

- 首页已不再只是基础落地页，而是形成了较完整的官网叙事结构：
  - Hero 首屏
  - 用户问题
  - 产品定位对比
  - 核心能力
  - 界面预览
  - 信任边界
  - 适合谁用
  - FAQ 摘要

### 3. 预览与素材

- 首页已使用真实产品截图，而不是概念示意图
- 已新增 `PreviewSwitcher`，可以在首页切换查看多张产品界面
- 首页与二级页截图资源已整理到 `public/assets/`，中英文版本分开管理
- 首页多个区块已补齐配套 SVG 图标资源

### 4. 发布链路

- GitHub 仓库已建立
- Vercel 项目已接通
- GitHub push 可自动触发 Vercel 生产部署

### 5. 官网边界页

- 已新增 `privacy` 页面，用于说明本地优先、外部 AI、BYOK、MCP 和反馈数据边界
- 已新增 `terms` 页面，用于说明当前发布形态、下载安装方式、AI 辅助边界和反馈入口
- `sitemap` 与 `robots` 已同步覆盖这些新增页面

### 6. SEO 与站点元信息

- 新增 `app/seo.ts`，统一维护 `Organization`、`WebSite`、`SoftwareApplication`、`WebPage` 与 `BreadcrumbList` 的结构化数据
- 首页已接入页面级 JSON-LD
- `layout`、`opengraph-image`、`robots`、`sitemap` 与 canonical 相关元信息已继续收口

### 7. 更新日志能力

- `changelog` 页面已从早期“官网动态双时间线”切换为“软件版本日志”主结构
- 当前官网已同步 `v0.3.1` 到 `v0.3.9` 的详细更新
- 额外补充了 `0.3`、`0.2` 和早期开发阶段的系列摘要，作为历史开发信息搬迁内容

### 8. 双语与内容结构

- 首页、FAQ、下载页与更新日志页开始共享统一的双语内容层
- 新增 `app/i18n.tsx` 与 `app/site-copy.ts`，把页面文案与语言选择逻辑从页面组件里拆出来
- `faq`、`download`、`changelog` 已各自拆出独立内容模块，页面组件本身更偏向结构层
- `home`、`privacy`、`terms` 等页面继续向“页面结构层 + 内容层”拆分方向推进

### 9. 部署方式

- 项目已切到静态导出部署：
  - `next.config.ts` 使用 `output: "export"`
  - 图片采用 `images.unoptimized: true`
- 已新增：
  - `npm run deploy:dry`
  - `npm run deploy:sync`
- 对应脚本为 `scripts/sync-out.ps1`，用于将 `out/` 增量同步到服务器站点目录

### 10. 本地预览

- 支持 `npm run dev`
- 支持 `npm run build` + `npm run start`
- 已使用 `open.bat` 作为本地一键打开入口
- 分段截图素材、`.codex-*.png` 与 `.deploy/` 已加入忽略规则，不再进入版本控制

---

## 当前判断

- 官网主体已经成型
- 对外展示、仓库托管、线上部署三条主链路都已打通
- 当前最值得持续投入的是首页表达质量、下载说明、边界页内容，以及双语内容体系与 SEO 元信息的继续收口

---

## 下一步重点

- 继续优化首页文案与局部视觉密度
- 根据 Windows 版发布节奏补齐下载页说明
- 继续扩展 `changelog` 页面里的软件版本信息搬迁范围
- 继续把剩余页面统一到可维护的双语内容结构中
- 根据正式上线节奏继续收口隐私政策、用户协议与部署说明
- 继续扩展站点结构化数据与 Wiki / Docs 信息架构准备
- 保持 README、网站页面内容与 `WEBSITE_CHANGELOG.md` 的版本口径一致
- 后续新增网站变化时：
  - 先写入 `WEBSITE_CHANGELOG.md`
  - 再按需要更新本文件中的“当前状态”总结
