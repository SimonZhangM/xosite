# XOsite

XplorOne 官网项目，用来展示这款面向超级个体与自由职业者的本地优先财务工作台。

## 当前版本

- 站点版本：`0.1.6`
- 产品能力基线：`v0.3.9`
- 线上地址：[https://xosite.vercel.app](https://xosite.vercel.app)
- GitHub 仓库：[https://github.com/SimonZhangM/xosite](https://github.com/SimonZhangM/xosite)

## 站点内容

- 首页：产品定位、用户问题、核心能力、界面预览、信任边界与 FAQ 摘要
- 下载页：Windows 版发布进度与下载说明
- FAQ：完整常见问题说明
- 更新日志：站点版本与官网迭代记录
- 隐私政策：本地优先、外部 AI、BYOK 与反馈数据边界
- 用户协议：软件下载、使用边界、AI 辅助说明与反馈入口

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

- 双击 `open.bat`：启动本地开发服务器并自动打开网站

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

## 静态部署

- `npm run deploy:dry`：预演 `out/` 到服务器站点目录的增量同步
- `npm run deploy:sync`：执行增量同步
- 同步脚本：`scripts/sync-out.ps1`

## 当前重点

- 持续打磨首页信息层级与视觉表达
- 完善下载说明、隐私边界和用户协议内容
- 保持官网文档、GitHub、静态部署脚本与 Vercel 部署信息一致
