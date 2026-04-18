# XOsite

XplorOne 官网项目，用来展示这款面向超级个体与自由职业者的本地优先财务工作台。

## 当前版本

- 站点版本：`0.1.3`
- 产品能力基线：`v0.2.6`
- 线上地址：[https://xosite.vercel.app](https://xosite.vercel.app)
- GitHub 仓库：[https://github.com/SimonZhangM/xosite](https://github.com/SimonZhangM/xosite)

## 站点内容

- 首页：产品定位、用户问题、核心能力、界面预览、信任边界与 FAQ 摘要
- 下载页：Windows 版发布进度与下载说明
- FAQ：完整常见问题说明
- 更新日志：站点版本与官网迭代记录

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## 本地预览

### 开发模式

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看页面。

### 一键脚本

- 双击 `preview-local.bat`：启动本地开发服务器并自动打开网站
- 双击 `stop-preview-local.bat`：关闭占用 `3000` 端口的本地预览进程

### 生产模式预览

```bash
npm run build
npm run start
```

## 发布流程

1. 在本地完成页面或文档更新
2. 提交到 GitHub 仓库 `main` 分支
3. Vercel 自动触发生产部署
4. 通过官网与部署日志确认上线结果

## 当前重点

- 持续打磨首页信息层级与视觉表达
- 完善下载说明与版本节奏同步
- 保持官网文档、GitHub 与 Vercel 部署信息一致
