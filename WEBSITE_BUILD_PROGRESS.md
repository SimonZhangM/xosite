# 网站建设进度

本文件用于说明 **网站当前做到哪儿了**。  
和 `WEBSITE_CHANGELOG.md` 的区别是：
- `WEBSITE_CHANGELOG.md`：按版本记录历史变化
- `WEBSITE_BUILD_PROGRESS.md`：描述当前网站状态、当前阶段和下一步重点

---

## 当前版本

- 网站版本：`0.1.3`
- 更新时间：`2026-04-18`
- 线上地址：[https://xosite.vercel.app](https://xosite.vercel.app)
- 仓库地址：[https://github.com/SimonZhangM/xosite](https://github.com/SimonZhangM/xosite)

---

## 当前阶段

当前处于：
- 首版官网已上线
- 首页第二轮结构升级已完成
- 文档与版本口径同步整理中

一句话判断：
- 网站已经具备稳定对外展示能力，当前重点不再是“把页面搭出来”，而是继续打磨首页表达、下载说明和版本同步方式。

---

## 当前网站已具备的内容

### 1. 页面结构

- 已完成 4 个核心页面：
  - `/`
  - `/download`
  - `/faq`
  - `/changelog`

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
- 首页多个区块已补齐配套 SVG 图标资源

### 4. 发布链路

- GitHub 仓库已建立
- Vercel 项目已接通
- GitHub push 可自动触发 Vercel 生产部署

### 5. 本地预览

- 支持 `npm run dev`
- 支持 `npm run build` + `npm run start`
- 已补充 `preview-local.bat` 与 `stop-preview-local.bat`

---

## 当前判断

- 官网主体已经成型
- 对外展示、仓库托管、线上部署三条主链路都已打通
- 当前最值得持续投入的是首页表达质量，而不是再分散去扩很多新页面

---

## 下一步重点

- 继续优化首页文案与局部视觉密度
- 根据 Windows 版发布节奏补齐下载页说明
- 保持 README、网站页面内容与 `WEBSITE_CHANGELOG.md` 的版本口径一致
- 后续新增网站变化时：
  - 先写入 `WEBSITE_CHANGELOG.md`
  - 再按需要更新本文件中的“当前状态”总结
