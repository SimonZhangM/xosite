# System Architecture

## 适用范围

- 本文件用于介绍 **XplorOne（仓库目录当前仍为 finance-v1）已经落地的软件结构**。
- 重点是：核心功能、主链路、对话逻辑、数据库、关键文件职责。
- 不讨论未来规划，不写 roadmap，只说明“现在的软件是怎么运作的”。

建议新线程开场固定动作：
1. 先读本文件
2. 再读 [D:\APP\finance-v1\CODING_PLAYBOOK.md](/D:/APP/finance-v1/CODING_PLAYBOOK.md)
3. 再读 [D:\APP\finance-v1\PROJECT_MEMORY.md](/D:/APP/finance-v1/PROJECT_MEMORY.md)
4. 再看 `git status`

---

## 1. 软件定位与运行形态

XplorOne 是一个 **本地优先** 的财务桌面软件。当前核心能力已经覆盖：

- 多账本
- 账户、分类、成员、项目、流水
- 预算管理
- 图表与专业图表
- AI 对话（查询 / 录入 / 分析 / 自由对话）
- 数据备份、恢复、导出、导入、清理
- 个性化设置
- 商业授权与版本分层

当前有两种主要运行形态：

### 1. 正式 Electron

- 这是软件的正式运行形态。
- 主链路固定为：
  - `Renderer -> Preload -> IPC -> Main -> AppService -> Service/Repo -> SQLite`
- 可以调用系统目录选择器、文件选择器、打开本地路径等桌面能力。
- 当前窗口版还已切到自定义桌面标题栏：
  - 原生标题区已移除
  - 菜单行、窗口控制按钮由 renderer 渲染
  - 实际窗口控制与菜单弹出仍由 `main.ts + preload.ts` 桥接完成

### 2. Web 预览

- 用于开发预览和快速看效果。
- 页面本身跑在浏览器样式环境里。
- 不具备真正的系统文件选择器能力。
- 某些能力会 fallback 为：
  - 手动输入路径
  - 复制路径后手动打开
- Web 预览经常会配合本地 HTTP API 使用，但本地 API **不是正式版默认启动前提**。

---

## 2. 顶层目录与本地数据目录

项目目录：
- `D:\APP\finance-v1`

当前 Windows 发布流程还额外有一条仓库内发布脚本：
- [D:\APP\finance-v1\scripts\win-prepackaged-release.js](/D:/APP/finance-v1/scripts/win-prepackaged-release.js)
  - 负责正式的 `Windows prepackaged release pipeline`：
    - 先生成 `win-unpacked`
    - 再修补 exe 版本资源
    - 最后基于 `--prepackaged` 产出最终 `portable` 或独立 `NSIS` 安装包
- [D:\APP\finance-v1\scripts\verify-release-privacy.js](/D:/APP/finance-v1/scripts/verify-release-privacy.js)
  - 负责发布前隐私边界检查，确认数据库、token、凭据 seed、`.xpl` 与运行时私有目录不会被误打进最终 `portable` / `NSIS` 发布物

运行时本地数据根目录由 `baseDir` 决定，当前默认是：
- `%APPDATA%\\XplorOne`

兼容说明：
- 如果显式设置 `XPLORONE_BASE_DIR`，直接使用该路径
- 如果显式设置 `FINANCE_BASE_DIR`，直接使用该路径
- 如果未显式设置，且旧 `%APPDATA%\\finance-v1` 存在、而新目录不存在
  - 启动时会先做一次“复制迁移”到 `%APPDATA%\\XplorOne`
- 旧目录不会自动删除
- 同一 `baseDir` 内如果只存在旧 `finance.db`
  - 会先补齐到 `xplorone.db`，再进入正式初始化
- 同一 `baseDir` 内如果仍存在旧 `xplorone-budget.db / budget.db`
  - 会在主库初始化阶段作为 legacy 预算迁移输入被自动吸收；运行时不再把它们当成正式数据库

---

## 2.1 版本与对外发布记录

- 当前应用版本由 `package.json / package-lock.json` 中的 `version` 字段决定。
- 仓库根目录旧 `CHANGELOG.zh-CN.md` 不再作为新的对外发布历史维护入口。
- 新的对外发布记录固定维护在：
  - `D:\APP\marketing\github\docs\software-release-history.md`
  - `D:\APP\marketing\github\docs\software-release-history_zh-CN.md`
- 仓库根目录的 `CURRENT_STATE.md / PROJECT_MEMORY.md / CODING_PLAYBOOK.md / SYSTEM_ARCHITECTURE.md` 用于项目内部上下文、架构和开发经验，不等同于面向用户的发布说明。

关键子目录：
- `data`
  - `xplorone.db`
  - `xplorone-budget.db / budget.db`（仅旧版本迁移输入，运行时非必需）
- `config`
  - 外部连接 token
  - 模型密钥与 MCP token 的加密元数据
  - 本地授权码与商业授权元数据
  - 头像资源等配置类文件

运行时 identity / `baseDir` 解析与迁移入口在：
- [D:\APP\finance-v1\src\main\runtimeIdentity.ts](/D:/APP/finance-v1/src/main/runtimeIdentity.ts)

主程序、独立 API、独立 MCP 当前都会先复用这层，再初始化后端服务。

---

## 3. 主链路总览

### 3.1 页面到数据库的正式链路

正式版默认链路是：

```text
Renderer
  -> preload.ts 暴露的 window.financeApi
  -> main.ts 中的 ipcMain.handle(...)
  -> AppService
  -> 各业务 Service
  -> Repo / QueryRepo
  -> SQLite
```

这条链路的关键文件：

- 渲染层总入口：
  - [D:\APP\finance-v1\src\renderer\App.tsx](/D:/APP/finance-v1/src/renderer/App.tsx)
- 预加载桥接：
  - [D:\APP\finance-v1\src\preload\preload.ts](/D:/APP/finance-v1/src/preload/preload.ts)
- Electron 主进程：
  - [D:\APP\finance-v1\src\main\main.ts](/D:/APP/finance-v1/src/main/main.ts)
- 后端总入口：
  - [D:\APP\finance-v1\src\backend\service\appService.ts](/D:/APP/finance-v1/src/backend/service/appService.ts)
- shared contract 与前端 normalize 层：
  - [D:\APP\finance-v1\src\shared\contracts.ts](/D:/APP/finance-v1/src/shared/contracts.ts)
  - [D:\APP\finance-v1\src\shared\notificationPreferences.ts](/D:/APP/finance-v1/src/shared/notificationPreferences.ts)

补充：
- 当前 `main.ts + preload.ts` 也已承担一类桌面能力桥接：
  - 页面局部区域 PNG 导出
- 典型用法是渲染层传入区域矩形，主进程用 `webContents.capturePage(...)` 截取并落盘。
- renderer 当前对统一执行返回值的消费也开始收口到 shared normalize 层：
  - `CommercialState`
  - `RuntimeInfo`
  - `NotificationListResult`
  - `NotificationPreferences`
  这类对象不再推荐在页面里直接做裸断言，而是先经 shared reader 整理后再进入页面状态。

### 3.2 AppService 的角色

`AppService` 是整个后端的总装配入口：

- 打开 `xplorone.db`
- 在需要时吸收旧 `xplorone-budget.db / budget.db`
- 创建各种 Repo
- 创建各种 Service
- 创建 QueryExecutor
- 创建聊天编排器
- 对外统一分发 `intent`

它不是一个“单独业务服务”，而是：
- 软件后端运行时的总容器
- UI、IPC、本地 API 最终都会汇入这里

文件：
- [D:\APP\finance-v1\src\backend\service\appService.ts](/D:/APP/finance-v1/src/backend/service/appService.ts)

### 3.3 本地 HTTP API / 外部连接层

除了 Electron 内部的 `preload -> IPC -> AppService` 链路外，当前项目还已经具备一套 **本地 HTTP API**：

- 默认由 `LocalApiManager` 负责启停
- 默认只监听 `127.0.0.1`
- 使用本地生成并持久化的 Bearer token 做认证
- 当前既可以通过统一的 `/api/execute` 调 intent，也可以走更收敛的只读查询路径

关键文件：

- 本地 API 服务入口：
  - [D:\APP\finance-v1\src\backend\api\server.ts](/D:/APP/finance-v1/src/backend/api/server.ts)
- Electron 侧本地 API 启停管理：
  - [D:\APP\finance-v1\src\main\localApiManager.ts](/D:/APP/finance-v1/src/main/localApiManager.ts)
- 本地 API token 存储：
  - [D:\APP\finance-v1\src\main\localApiTokenStore.ts](/D:/APP/finance-v1/src/main/localApiTokenStore.ts)
- 独立 API 进程入口：
  - [D:\APP\finance-v1\src\main\apiStandalone.ts](/D:/APP/finance-v1/src/main/apiStandalone.ts)

当前已落地的典型 HTTP 路径包括：

- `GET /health`
- `GET /api/runtime`
- `POST /api/execute`
- `POST /api/query/execute`

其中：

- `/api/execute`
  - 更像通用 intent 入口
- `/api/query/execute`
  - 更像对外只读查询入口
  - 已带 `source / scope / request_id` 校验与审计

当前查询 route 与 chat route 已明确分流：

- query route 只允许读语义进入
- chat route 只允许内部聊天语义进入
- 当前代码中已经存在外部只读来源语义：
  - `source = workbuddy`
  - `scope = workbuddy:read`

### 3.4 本地 MCP 服务（只读查询）

在本地 HTTP API 之上，当前项目已经额外落地了一层 **只读 MCP 服务**：

- 当前采用 `streamable-http`
- 当前只开放只读查询，不开放写入
- 默认同样监听本机回环地址
- 当前已由主进程后台托管，不再把独立黑窗脚本视为正式用户路径
- 当前 Bearer 鉴权已经切到“按客户端独立 token”模型
- 对外工具当前固定为 6 个：
  - `get_runtime_info`
  - `list_books`
  - `list_reference_data`
  - `query_transactions`
  - `query_account_transactions`
  - `get_finance_summary`

当前 MCP 的真实角色是：

- 给 Codex、WorkBuddy 这类外部 agent 提供标准工具入口
- 内部继续复用现有本地 API / query route / QueryExecutor
- 不直连数据库
- 不绕过现有审计与 `source / scope / request_id` 链路

关键文件：

- MCP 服务入口：
  - [D:\APP\finance-v1\src\backend\mcp\xploroneMcpServer.ts](/D:/APP/finance-v1/src/backend/mcp/xploroneMcpServer.ts)
- MCP 调本地 API 的封装：
  - [D:\APP\finance-v1\src\backend\mcp\localApiClient.ts](/D:/APP/finance-v1/src/backend/mcp/localApiClient.ts)
- MCP 生命周期托管：
  - [D:\APP\finance-v1\src\main\localMcpManager.ts](/D:/APP/finance-v1/src/main/localMcpManager.ts)
- MCP 客户端 token 存储：
  - [D:\APP\finance-v1\src\main\mcpClientTokenStore.ts](/D:/APP/finance-v1/src/main/mcpClientTokenStore.ts)
- 独立 MCP 进程入口：
  - [D:\APP\finance-v1\src\main\mcpStandalone.ts](/D:/APP/finance-v1/src/main/mcpStandalone.ts)
- MCP 共享契约：
  - [D:\APP\finance-v1\src\shared\mcpContracts.ts](/D:/APP/finance-v1/src/shared/mcpContracts.ts)

当前边界：

- 固定只读
- 固定查询当前 active book
- 显式传 `book_id` 会拒绝
- 查询参数不足时返回结构化 `NEED_CONFIRMATION`
- 结果主要返回结构化数据，由外部 agent 自己的模型负责解释
- 当前 `toToolResult(...)` 已兼容双通道结果：
  - `structuredContent` 继续承载完整结构化 envelope
  - `content.text` 作为客户端兼容文本通道
  - 当前已按客户端类型做最小分流：
    - `codex`：`content.text` 只保留短状态摘要，避免和 `structuredContent` 重复灌上下文
    - `default`：`content.text` 保持自足结果，用于兼容 WorkBuddy 和未来未知客户端
- 当前 `Codex` 与 `WorkBuddy` 分别持有独立 MCP token
- MCP client token 通过 Electron `safeStorage` 加密保存；内部 API token 继续独立，仅供 `MCP -> Local API`

### 3.5 仓库内 XplorOne agent skill

除了 MCP 服务本身，当前仓库内还已经落地了一份 **统一来源的 XplorOne agent skill**，用于约束外部 agent 如何稳定使用这些只读 MCP tools。

当前位置：
- 统一来源：
  - [D:\APP\finance-v1\skills\xplorone\SKILL.md](/D:/APP/finance-v1/skills/xplorone/SKILL.md)
  - [D:\APP\finance-v1\skills\xplorone\references](/D:/APP/finance-v1/skills/xplorone/references)
- Codex repo-local 镜像：
  - [D:\APP\finance-v1\.codex\skills\xplorone\SKILL.md](/D:/APP/finance-v1/.codex/skills/xplorone/SKILL.md)

当前定位：
- 只服务 **XplorOne Read-Only MCP v1**
- 不新增后端能力
- 只约束：
  - 什么时候用哪个 tool
  - 什么时候先补问
  - 默认怎么把结构化结果变成人可读回答

当前已经固定的关键规则包括：
- 默认作用域是当前激活账本
- 默认不输出 raw JSON
- 明细交易优先输出中文表头：
  - `日期 / 类型 / 分类 / 账户 / 金额（元）`
- 分类名、账户名必须来自当前账本的 reference data，不允许由 skill 静态提供或猜测
- 对于转账或双账户资金流，账户列统一按：
  - `账户A->账户B`
  展示资金流向
- 如果客户端同时暴露 MCP 工具和命令执行能力，优先直接使用已连接的 XplorOne MCP 工具，不要把内部桥接名当 shell 命令

当前分发约定：
- `skills/xplorone` 是统一来源，也是安装包内可选分发的最终内容
- NSIS 安装时可选把这套 skill 安装到：
  - `软件目录\skills\xplorone\...`
- 这些文件不会自动注入客户端；用户后续仍需手动复制到 Codex、WorkBuddy、OpenClaw 等客户端自己的 skills 目录

---

## 4. 前端页面结构

前端主导航和页面切换由 [D:\APP\finance-v1\src\renderer\App.tsx](/D:/APP/finance-v1/src/renderer/App.tsx) 管理。

当前主页面上方还共用一套公共页头容器，由 `App.tsx` 统一渲染，包含：
- 页面标题
- 动态问候语
- 右上角通知与头像入口
- 浏览器预览入口当前也已显式声明 `public/logo.ico` 作为 favicon，避免把 `/favicon.ico` 404 误判成业务异常

在桌面版里，当前 `App.tsx` 还同时承接：
- 自定义菜单行
- 品牌区
- 最小化 / 最大化 / 关闭按钮 UI

左侧品牌区当前也由同一公共层负责：
- logo
- `XplorOne`
- 版本号

其中版本号当前直接读取 `package.json.version`，版本提交后会自动反映到页头。

当前核心页面与入口包括：

### 4.1 记一笔（抽屉入口）

- `QuickEntryPage`

当前不是常规整页切换，而是：
- 从左侧侧边栏右侧滑出的抽屉式入口
- 单笔模式使用单列表单
- 多笔模式继续保持宽表格并自动扩展
- 点击抽屉外部或再次点击原入口会收起

当前补充约定：
- 单笔模式底部操作条固定贴底
- 账户 / 分类下拉已改为 body portal 浮层，不再依赖表单容器内 `absolute` 展开

### 4.2 首页

- `HomeOverviewPage`

作用：
- 首页概览
- 工作台式入口
- 常用模块跳转

当前首页“最近流水”采用短日期语义：
- 只显示 `X月X日`
- 不补全年
- 这块的桌面列宽当前由行级 `grid-template-columns` 控制

### 4.3 日历

- `ReportMemberPage`

当前 `ReportMemberPage` 实际承载的是顶部导航里的“日历”页，而不再是传统意义上的成员报表页。

当前已形成独立工作台：
- 顶部汇总条
- 左侧本月收入 / 支出排行榜
- 中部月历主体
- 右侧当日收支排行榜
- 底部收入 / 支出 donut 统计
- 日历工具栏按钮

### 4.4 列表

列表分组当前包含 3 个实际页面：

- `HomeLedgerPage`
- `CategoryManagementPage`
- `AccountManagementPage`

其中 `HomeLedgerPage` 对应“流水列表”，当前已明确采用 **资金流口径**：
- 中文：`净流量 / 流入 / 流出`
- 英文：`Net Flow / Cash Inflow / Cash Outflow`
- 全局视角下普通 `transfer` 不计入总流量
- 单账户视角下，命中该账户的 `transfer` 会按流入 / 流出参与统计
- 当前从 `收支页 / 账户页 / 成员页 / 项目页` 点击“查看流水”时，也会通过受控跳转把对应筛选和时间范围带到 `HomeLedgerPage`

`CategoryManagementPage` 当前对应“收支”页，已切到新版工作台骨架：
- 顶部汇总条
- 左侧时间筛选侧栏 + 二级时间筛选
- 右侧分类列表与收入 / 支出子视图切换

`AccountManagementPage` 当前对应“账户”页，也已切到同一套工作台骨架：
- 顶部净资产汇总条
- 左侧时间筛选侧栏
- 右侧账户列表与资产 / 负债子视图切换
- 新建 / 编辑账户仍复用原账户服务链路，不单独拆后端模型

### 4.5 图表

图表分组当前包含：

- `ReportCashFlowPage`
- `ReportBasicPage`
- `ReportAccountPage`
- `ReportCategoryPage`

其中 `ReportCashFlowPage` 当前已按 `ReportBasicPage` 的工作台骨架正式落地：
- 顶部全年净现金流总览
- 左侧月度现金流进出变化趋势图
- 右侧本年现金流入 / 现金流出排行榜
- 底部现金流入 / 现金流出 donut 统计
- 内部统计口径当前固定复用 `HomeLedgerPage` 的资金流口径：
  - `净现金流`
  - `现金流入`
  - `现金流出`

其中 `ReportBasicPage` 当前已经形成新版工作台布局：
- 顶部全年净收支总览
- 左侧月度收支趋势图
- 右侧本年收入 / 支出排行榜
- 底部收入 / 支出 donut 统计

其中 `ReportAccountPage` 当前承载“资产与负债”页：
- 顶部全年净资产总览
- 左侧月度资产与负债变化趋势图
- 右侧本年资产 / 负债排行榜
- 底部资产 / 负债 donut 统计

其中 `ReportCategoryPage` 当前是专业图表主战场，已接入：
- 堆叠图
- 树状图
- 热点图
- 旭日图
- 瀑布图
- 双轴图
- 当前发布阶段已先从侧边栏隐藏“专业图表”入口，但页面实现仍保留在仓库内，后续可按产品节奏重新接回导航

### 4.6 管理

管理分组当前包含：

- `BudgetManagementPage`
- `MemberManagementPage`
- `ProjectManagementPage`

`BudgetManagementPage` 当前已切到新版工作台骨架，但保留预算页自己的结构差异：
- 顶部余额 / 当月预算 / 实际支出汇总条
- 左侧年份预算侧栏
- 右侧预算列表、当前范围胶囊与保存动作
- 当前预算页主加载已拆成两条轻量 intent：
  - `list_budget_months`
  - `get_budget_month`
  - 左侧年份预算摘要与当前月份详情分别请求，但共用同一份 renderer 预算缓存
- 首页与预算页当前会共享预算缓存：
  - 首页命中当前年 / 当前月预算数据后会先写入共享缓存
  - 从首页跳入预算页时优先复用，不再立刻补打一轮同数据请求
- 页面内继续配合共享缓存、乐观更新与最小必要刷新，不再依赖前端 `list_categories` 故障兜底

`MemberManagementPage` 当前已经形成稳定的新版管理页结构：
- 最外层白卡
- 标题区操作条
- 内部列表壳
- 分组式表格
- 查看流水已改成确认后跳转到 `HomeLedgerPage`

`ProjectManagementPage` 当前也已按成员管理页同一套结构收口：
- 标题区 `项目管理 + 显示已隐藏的项目 + 新增项目`
- 内部项目列表壳
- 分组圆角与首行贴色逻辑继续复用成员页那套表格处理方式
- 查看流水同样改成确认后跳转到 `HomeLedgerPage`

### 4.7 对话

- `InteractionChatPage`

作用：
- AI 查询
- AI 录入草稿
- AI 分析
- 自由对话

当前页面边界已稳定为：
- 外层工作区不滚
- 左侧会话栏固定
- 右侧消息区内部滚动
- 底部输入栏固定贴底

### 4.8 设置

- `SettingsPage`
- `DataSettingsPanel`
- `PersonalizationSettingsPanel`

作用：
- 模型服务
- 账本设置
- 数据设置
- 个性化设置

---

## 5. 数据层结构

### 5.1 xplorone.db

主业务库：
- 账本
- 账户
- 分类
- 流水
- 成员
- 项目
- 设置
- AI 会话与消息

入口文件：
- [D:\APP\finance-v1\src\backend\db\database.ts](/D:/APP/finance-v1/src/backend/db/database.ts)

当前关键表：
- `books`
- `accounts`
- `account_category`
- `categories`
- `transactions`
- `members`
- `projects`
- `app_settings`
- `ai_sessions`
- `ai_messages`
- `chat_entry_drafts`
- `ai_audit_log`

说明：
- `accounts.id`、`categories.id` 是 **全表自增主键**
- 不是按 `book_id` 各自编号
- 多账本、模板重建、覆盖恢复后，id 跳大是正常现象

### 5.2 主库中的预算表

预算当前已并入 `xplorone.db`，正式表为：
- `budget_months`
- `budget_lines`

旧 `xplorone-budget.db / budget.db` 当前只作为启动期 legacy 迁移输入保留，不再是运行时正式库。

入口文件：
- [D:\APP\finance-v1\src\backend\db\database.ts](/D:/APP/finance-v1/src/backend/db/database.ts)
- [D:\APP\finance-v1\src\backend\db\budgetDatabase.ts](/D:/APP/finance-v1/src/backend/db/budgetDatabase.ts)（仅 legacy 结构参考 / 迁移输入来源）

含义：
- `budget_months`：某账本某月预算头
- `budget_lines`：该月预算明细

---

## 6. 核心业务模块

### 6.1 账本

服务：
- [D:\APP\finance-v1\src\backend\service\bookService.ts](/D:/APP/finance-v1/src/backend/service/bookService.ts)

当前规则：
- 多账本已打通
- `归档` 和 `删除` 已拆开
- 模板只用于新建账本
- 已有账本不能重新套模板

### 6.2 模板

模板目录：
- [D:\APP\finance-v1\src\backend\templates\bookTemplates.ts](/D:/APP/finance-v1/src/backend/templates/bookTemplates.ts)

当前可用模板：
- `personal_v1`
- `family_v1`
- `business_v1`

模板创建链路：
- 选择模板
- 点击确认创建
- 后端单事务完成：
  - 创建 book
  - 写入 `template_code`
  - 创建根分类
  - 复制模板分类树
  - 复制模板账户

### 6.3 预算

服务：
- [D:\APP\finance-v1\src\backend\service\budgetService.ts](/D:/APP/finance-v1/src/backend/service/budgetService.ts)

当前能力：
- 一级 / 二级预算
- 当月保存
- 全年月度预算保存
- 执行状态
- 剩余比例

### 6.4 数据设置

服务：
- [D:\APP\finance-v1\src\backend\service\dataService.ts](/D:/APP/finance-v1/src/backend/service/dataService.ts)

当前模块：
- 数据路径
- 数据备份
- 数据恢复
- 数据导出
- `.xpl` 归档账本导出 / 导入
- 数据清理

当前 `.xpl` 规则：
- 只允许导出 `archived` 账本
- `.xpl` 固定为 gzip 压缩后的 UTF-8 JSON 单文件
- 导入固定创建新的 `active` 账本
- 不支持覆盖导入，不支持原地恢复

### 6.5 个性化设置

服务：
- [D:\APP\finance-v1\src\backend\service\settingsService.ts](/D:/APP/finance-v1/src/backend/service/settingsService.ts)

当前结构：
- `个人设置`
  - 头像
  - 昵称
- `界面语言`
  - `跟随系统`
  - `简体中文`
  - `English`
- `AI 偏好设置`
  - 开关
  - 身份类型
  - 行业
  - 当前关注重点
  - 回答风格
  - 年龄阶段
  - 收入特征
  - 资金责任重心
  - 补充说明

存储：
- `app_settings` 中的 `personalization_profile`
- 头像持久化字段以 `avatar_asset` 为主
- 设置读取返回给前端展示时，会补一个 `avatar_data_url` 作为预览值
- 也就是说：
  - `avatar_asset` 负责长期存储
  - `avatar_data_url` 负责当前 UI 预览

边界：
- 头像、昵称只用于 UI
- 不注入 AI
- AI 偏好只有开关打开才会进入 AI 摘要
- 语言切换当前也放在个性化设置入口里，但持久化仍归 `display_preferences` 管，不单独落在 `personalization_profile`

### 6.6 UI 国际化基础层（第 1 阶段已落地）

当前已落地文件：
- [D:\APP\finance-v1\src\shared\i18n.ts](/D:/APP/finance-v1/src/shared/i18n.ts)
- [D:\APP\finance-v1\src\renderer\i18n.tsx](/D:/APP/finance-v1/src/renderer/i18n.tsx)
- [D:\APP\finance-v1\src\renderer\locales\zh-CN.ts](/D:/APP/finance-v1/src/renderer/locales/zh-CN.ts)
- [D:\APP\finance-v1\src\renderer\locales\en-US.ts](/D:/APP/finance-v1/src/renderer/locales/en-US.ts)

当前规则：
- 只做前端 UI 文案国际化
- 普通页面壳层仍由 renderer 词典负责
- 对话系统的回答语言已改由后端聊天链路单独判断，不再由 UI 语言强制决定
- 不处理专业图表页及图内文案
- 第 2 阶段当前已覆盖高频页面：
  - 首页
  - 流水页
  - 记一笔
  - 账户页
  - 收支分类页
  - 预算页

当前语言语义：
- 持久化值：
  - `ui_language = system | zh-CN | en-US`
- 运行时生效值：
  - `effectiveUiLanguage = zh-CN | en-US`
- `system` 只在应用启动时解析一次，不做运行中系统语言热切换

当前系统语言来源：
- Electron：通过 `main.ts + preload.ts` 暴露系统偏好语言列表
- Web 预览：回退浏览器语言
- renderer 页面层不直接自行判断系统语言，只消费统一的 `effectiveUiLanguage`
- `system` 解析当前已改为：
  - 先识别中文标签
  - 再识别英文标签
  避免中文系统环境被误判成英文

---

## 7. 对话逻辑链条（重点）

这是当前软件最复杂、也是最关键的链路。

### 7.1 前端入口：InteractionChatPage

文件：
- [D:\APP\finance-v1\src\renderer\pages\InteractionChatPage.tsx](/D:/APP/finance-v1/src/renderer/pages/InteractionChatPage.tsx)

当前聊天页同时承载 4 种模式：
- `query`
- `entry`
- `analysis`
- `free_chat`

它负责：
- 切换对话模式
- 加载会话列表
- 加载消息列表
- 发起聊天请求
- 展示 AI 返回的文本、表格、动作按钮

当前前端交互还有两个已落地的结构约定：
- 左侧会话栏是 **4 个模块会话的混排总列表**
- 每条会话前会带对应模块图标
- 右下角模式切换只决定“本次发送走哪条链路”，不等于左侧整栏切换
- 点击左侧某条会话后，会根据该会话的 `scope` 自动回切对应模式

前端请求的 intent 分别是：
- `chat_query`
- `chat_entry`
- `chat_analysis`
- `chat_free_talk`

当前前端还会把 `effectiveUiLanguage` 作为 `ui_language` 传给聊天后端。
这只是兜底语言，不是强制回答语言；真正的 `response_language` 由后端根据本次输入、同会话上一条明确用户语言和 UI 语言兜底共同决定。

### 7.2 会话与消息持久化

相关表：
- `ai_sessions`
- `ai_messages`
- `chat_entry_drafts`
- `ai_audit_log`

相关 Repo 在：
- [D:\APP\finance-v1\src\backend\db\repos\index.ts](/D:/APP/finance-v1/src/backend/db/repos/index.ts)
- [D:\APP\finance-v1\src\backend\db\repos](/D:/APP/finance-v1/src/backend/db/repos)

含义：
- `ai_sessions`：会话
- `ai_messages`：消息
- `chat_entry_drafts`：录入草稿
- `ai_audit_log`：请求审计和结果状态

当前会话作用域已经固定为：
- `query` -> `chat:query`
- `entry` -> `chat:entry`
- `analysis` -> `chat:analysis`
- `free_chat` -> `chat:free_talk`

补充约定：
- `查询` 和 `录入` 从新对话开始已拆开，不再混在同一会话里
- 左侧虽然混排展示，但底层 `scope` 仍然严格分开
- `analysis` 和 `free_chat` 也各自拥有独立历史，不与查询 / 录入串线

### 7.3 ChatOrchestrator：查询链路

文件：
- [D:\APP\finance-v1\src\backend\service\chat\orchestrator.ts](/D:/APP/finance-v1/src/backend/service/chat/orchestrator.ts)

这是查询对话的主编排器。

链路分成三步：

1. 先解析本地规则
- 通过 `LocalIntentResolver`
- 可能得到：
  - `local_direct`
  - `local_then_confirm`
  - `fallback_to_ai`

2. 如果本地规则足够明确
- 直接执行本地查询
- 不一定需要模型参与

3. 如果本地规则不够明确
- 调 `ModelAdapter.interpretQuery(...)`
- 让模型把用户问题翻译成：
  - `intent`
  - `payload`
- 再交给 `QueryExecutor`

查询执行完成后，当前主模式是：
- **回答文本主要在 `orchestrator.ts` 本地生成**
- 例如：
  - `buildAnswerTextFromChat`
  - `buildCategorySummaryAnswerText`
  - `buildAccountBalanceAnswerText`
  - `buildComparePeriodAnswerText`
- 需要结构化展示时，也会在本地生成：
  - `buildChatTable`

也就是说，当前 `chat_query` 已经不是“查完后再统一让模型润色回答”的主链。
现在的真实状态是：
- 本地直达越来越多
- 查询回答生成越来越偏本地
- 模型主要承担：
  - query intent 解释
  - 本地规则命不中时的结构化补全

当前查询链路还已接入第一轮对话国际化：
- 后端统一生成 `ChatLanguageContext`
- 中文 / 英文规则长期同时开启，不随 UI 语言关闭
- 内部 `intent / payload / action.type / enum` 继续保持英文稳定协议
- 用户可见回答、补问、表格标题、列名、周期标签和 action 提示会按 `response_language` 输出
- 同一会话内 `and last month? / 那上个月呢？` 这类只改时间的追问，会复用上一条查询的 intent 与 payload，只替换时间范围后重新执行

### 7.4 QueryExecutor：真正执行查询

文件：
- [D:\APP\finance-v1\src\backend\service\query\queryExecutor.ts](/D:/APP/finance-v1/src/backend/service/query/queryExecutor.ts)

它负责把标准化后的 query intent 分发到：
- `TransactionQueryService`
- `AccountQueryService`
- `ReportQueryService`

当前支持的核心 query intent 包括：
- `query_transactions`
- `query_transactions_summary`
- `query_category_summary`
- `query_account_balance`
- `query_monthly_summary`
- `query_account_transactions`
- `query_compare_period_summary`

其中已经落地的增强能力包括：
- 简单期间对比（compare）
- 排名查询（Top N）
  - `收入 / 支出` 二级分类排行
  - `资产 / 负债` 具体账户余额排行

### 7.5 ChatEntryOrchestrator：录入链路

文件：
- [D:\APP\finance-v1\src\backend\service\chat\entryOrchestrator.ts](/D:/APP/finance-v1/src/backend/service/chat/entryOrchestrator.ts)

它不是普通问答，而是：
- 从自然语言里解析出待录入流水
- 形成草稿
- 让用户确认
- 再真正写入交易表

当前规则：
- 一次最多整理 5 笔
- 会把结果写成 `chat_entry_drafts`
- 前端看到的是“待录入草稿”
- 用户确认后，才通过 `TransactionService` 真正落库

补充约定：
- 单笔和多笔都先出摘要 table
- 录入成功后，原草稿消息会更新为“已提交 / 已录入流水”语义
- 补充信息优先在原草稿上增量修正，不是每次都新建记录
- 第一轮对话国际化只覆盖录入链路的用户可见输出：
  - 草稿标题
  - 字段名
  - 缺失字段提示
  - 确认 / 取消 / 提交结果
- 英文自然语言记账解析尚未纳入第一轮，后续单独实施

### 7.6 ChatAnalysisOrchestrator：分析链路

文件：
- [D:\APP\finance-v1\src\backend\service\chat\analysisOrchestrator.ts](/D:/APP/finance-v1/src/backend/service/chat/analysisOrchestrator.ts)

作用：
- 处理“为什么 / 趋势 / 建议”类问题
- 不是简单汇总，而是把账本数据组织成分析上下文

当前流程：
1. `AnalysisIntentResolver` 判断是不是分析类问题
2. 如果只是简单查询，直接委托给 `ChatOrchestrator`
3. 如果是分析问题：
  - `AnalysisContextBuilder` 组装上下文
  - `AnalysisReadinessEvaluator` 判断数据是否够分析
  - `ModelAdapter.generateAnalysisAnswer(...)` 输出结论

分析模式当前角色边界已经固定为：
- 角色定位：`财务顾问`
- 面向对象：个人与 OPC
- 默认只分析当前账本
- 会先从本地后端取数，再把结构化上下文送给模型
- 若问题只是简单查询，不会重做一套分析查询器，而是直接路由复用现有查询模块
- 当前会根据 `response_language` 选择中文或英文 system prompt；简单查询回到 Query 时会继承本次语言上下文。

### 7.7 ChatFreeTalkOrchestrator：自由对话链路

文件：
- [D:\APP\finance-v1\src\backend\service\chat\freeTalkOrchestrator.ts](/D:/APP/finance-v1/src/backend/service/chat/freeTalkOrchestrator.ts)

作用：
- 允许更开放的对话
- 例如投资、税务、泛经营问题

特点：
- 不走查询执行器
- 主要读取最近会话上下文
- 再直接让模型生成回答

自由对话当前角色边界已经固定为：
- 角色定位：`开放财务助手`
- 允许更开放的话题，例如投资思路、税务话题、泛经营问题
- v1 默认 **不注入当前账本数据**
- 也不承担规则型查询或流水录入
- 当前会根据 `response_language` 选择中文或英文 system prompt，并要求模型除非用户明确要求，否则不要混用语言。

### 7.8 ModelAdapter：模型适配层

文件：
- [D:\APP\finance-v1\src\backend\llm\modelAdapter.ts](/D:/APP/finance-v1/src/backend/llm/modelAdapter.ts)

作用：
- 封装对 OpenAI-compatible 接口的调用
- 提供几种统一能力：
  - `interpretQuery`
  - `generateAnswer`
  - `generateAnalysisAnswer`
  - `generateFreeTalkAnswer`

这层不关心页面，只关心：
- 模型连接
- 提示词
- 请求格式
- 返回解析

### 7.9 个性化设置如何进入 AI

入口：
- [D:\APP\finance-v1\src\backend\service\settingsService.ts](/D:/APP/finance-v1/src/backend/service/settingsService.ts)

当前做法：
- `SettingsService.getAiPersonalizationSummary()`
- 返回的是 **稳定、简短、可控的自然语言摘要**
- 不是原始 JSON

接入位置：
- 查询链路
- 分析链路
- 自由对话链路

边界：
- 只有 `enabled_for_ai = true` 时才注入
- 头像、昵称不注入

### 7.10 模型服务当前语义与适配边界

模型服务当前已经不再只是“保存一组 `base_url / api_key / model_name`”的简单表单，而是正式拆成 3 条动作语义：

- `保存 AI 配置`
  - 保存当前草稿配置
- `测试连接`
  - 测试当前配置是否可连通
- `启用当前配置`
  - 把当前配置切成 AI 对话实际使用的模型

当前页面还会单独展示：
- 当前已启用模型
- 当前草稿配置自己的状态（是否已保存 key、是否已启用）

这两层已经明确分开：
- 当前启用模型是全局唯一状态
- 不会随着前端切换预设而变化

当前模型密钥读取与复用边界也已收口为：
- 优先按：
  - `provider_name`
  - `base_url`
  - `model_name`
  精确匹配
- 但如果只是同一接口地址下切换不同模型，测试 / 保存 / 启用当前都允许沿用该接口下已保存的 API key

同时，模型调用的隐性兼容策略已经开始按 provider / model 分流，例如：
- Kimi K2.5 的 temperature 固定策略
- 严格 JSON 探活失败后的宽松文本 / payload 探活回退
- `<think>...</think>`、代码块与包裹文本的清洗

这说明当前 `ModelAdapter` 已经开始承担“统一 OpenAI 兼容调用 + 按模型补兼容”的双重职责；后续继续扩模型服务时，应优先在这一层收口，而不是把这些条件零散写回页面层。

--- 

## 7.11 查询 Top N / 排名能力（当前已落地）

这部分属于 `query` 模块中的本地直达增强能力。

当前已支持两类：
- `收入 / 支出` 的二级分类 Top N
- `资产 / 负债` 的账户余额 Top N

入口仍然走：
- `LocalIntentResolver`
- `QueryExecutor`
- `ChatOrchestrator`

规则概述：
- 收支排行：统计区间内的合计值
- 余额排行：指定时点的余额值
- 收支排行缺时间时，直接补问
- 余额排行缺时点时，默认按今天
- 收支排行只统计到二级分类
- 资产 / 负债排行统计到具体账户
- 停用账户可以参与余额排行
- 隐藏账户不参与余额排行
- 结果当前通过 markdown 有序列表直接展示，不新增前端 list schema

---

## 8. 设置页结构

文件：
- [D:\APP\finance-v1\src\renderer\pages\SettingsPage.tsx](/D:/APP/finance-v1/src/renderer/pages/SettingsPage.tsx)

当前设置侧栏入口：
- 个性化设置
- 显示设置
- 提醒设置
- 账本设置
- 模型服务
- 商业授权中心
- 数据设置
- 已归档账本

当前设置页里已经补入：

- `XplorOne MCP`
- `MCP 客户端令牌`
- `商业授权中心`
- `提醒设置`
- 顶部公共页头里的提醒中心

当前“已归档账本”区还已接入：

- 导出单个归档账本为 `.xpl`
- 导入 `.xpl` 并创建新的活动账本
- 导入前预检账本摘要、时间范围与源账本存在性

它们当前主要负责：

- 展示 MCP 运行状态与 endpoint
- 说明只读范围与外部 agent 边界
- 分别管理 `Codex / WorkBuddy` 的客户端 token
- 支持复制 token、短时显示完整 token、重新生成 token

补充子页面：
- [D:\APP\finance-v1\src\renderer\pages\DataSettingsPanel.tsx](/D:/APP/finance-v1/src/renderer/pages/DataSettingsPanel.tsx)
- [D:\APP\finance-v1\src\renderer\pages\PersonalizationSettingsPanel.tsx](/D:/APP/finance-v1/src/renderer/pages/PersonalizationSettingsPanel.tsx)
- [D:\APP\finance-v1\src\renderer\pages\DisplaySettingsPanel.tsx](/D:/APP/finance-v1/src/renderer/pages/DisplaySettingsPanel.tsx)
- [D:\APP\finance-v1\src\renderer\pages\NotificationSettingsPanel.tsx](/D:/APP/finance-v1/src/renderer/pages/NotificationSettingsPanel.tsx)
- 当前 `DataSettingsPanel / PersonalizationSettingsPanel / DisplaySettingsPanel / NotificationSettingsPanel` 的顶层结构都已收口为“单主卡 + 中间分割线”的设置页版式，不再把相邻设置块拆成多张平级小卡

显示设置当前已落库到：
- `app_settings.display_preferences`

对应 shared / renderer 辅助层：
- [D:\APP\finance-v1\src\shared\displayPreferences.ts](/D:/APP/finance-v1/src/shared/displayPreferences.ts)
- [D:\APP\finance-v1\src\renderer\utils\displayPreferences.ts](/D:/APP/finance-v1/src/renderer/utils/displayPreferences.ts)

当前显示设置关于日期的真实边界已经收口为：
- 只有两种完整日期格式：
  - `2026年4月16日`
  - `2026年04月16日`
- 金额符号当前支持：
  - `￥`
  - `$`
  - `€`
- 默认完整日期显示改为中文格式
- 完整日期与日期时间会跟随这套偏好统一格式化
- 只显示 `X月X日 / 04.16` 的短标签不强制补年

模型设置当前主要由以下结构协同：

- `model_providers`
  - 保存 OpenAI 兼容接口地址、模型名、预设 code、启用状态和凭据引用
- 本地凭据 vault
  - 保存模型 API Key 的加密材料
- `src/backend/llm/modelConfigService.ts`
  - 负责保存、测试、启用和读取当前模型配置
- `src/backend/llm/modelFetch.ts`
  - Electron 下优先使用 `electron.net.fetch`
  - Web / Node 调试态回退普通 `fetch`

显示语言和账本数据语言要分开理解：

- UI 文案由 `src/renderer/locales/*` 控制。
- 新建账本模板按当前 UI 语言单语落库。
- 已有账本的分类、账户、项目名称不因为切换 UI 语言而改库。
- 前端展示层通过模板文字映射、账户名映射和 icon 映射补齐演示与国际版展示。

提醒设置当前已落库到：
- `app_settings.notification_preferences`

提醒中心当前主链路为：
- renderer 顶部铃铛入口
- `App.tsx` 提醒弹层
- `NotificationService`
- `notification_items`

当前提醒动作固定只走受控跳转：
- `quick_entry`
- `manage_budget`
- `settings`
- `home`
- `transactions`

---

## 9. 专业图表当前状态

主页面：
- [D:\APP\finance-v1\src\renderer\pages\ReportCategoryPage.tsx](/D:/APP/finance-v1/src/renderer/pages/ReportCategoryPage.tsx)

当前图表类型：
- 堆叠图
- 树状图
- 热点图
- 旭日图
- 瀑布图
- 双轴图

热点图当前关键规则已经定死：
- 只支持收入 / 支出
- 资产 / 负债置灰不可选
- 季 / 月置灰不可选
- 按月份分组
- 按周序列展开
- 每天拆 3 个时段

---

## 10. 关键文件职责速查

最重要的文件可以快速理解为：

- [D:\APP\finance-v1\src\main\main.ts](/D:/APP/finance-v1/src/main/main.ts)
  - Electron 主进程入口，创建窗口、注册 IPC，并在初始化前接入运行时 identity / `baseDir` 迁移
- [D:\APP\finance-v1\src\main\runtimeIdentity.ts](/D:/APP/finance-v1/src/main/runtimeIdentity.ts)
  - 统一解析 `XPLORONE_BASE_DIR / FINANCE_BASE_DIR`、执行默认目录复制迁移、补齐新 DB 文件名并写迁移状态
- [D:\APP\finance-v1\src\preload\preload.ts](/D:/APP/finance-v1/src/preload/preload.ts)
  - 安全桥接层，把 IPC 能力暴露给页面，包括目录/文件选择和局部 PNG 导出
- [D:\APP\finance-v1\src\renderer\App.tsx](/D:/APP/finance-v1/src/renderer/App.tsx)
  - 前端总入口，管理导航、页面切换、顶部头像、局部错误边界
- [D:\APP\finance-v1\src\backend\service\appService.ts](/D:/APP/finance-v1/src/backend/service/appService.ts)
  - 后端总装配与总分发
- [D:\APP\finance-v1\src\backend\api\server.ts](/D:/APP/finance-v1/src/backend/api/server.ts)
  - 本地 HTTP API 服务入口，负责 token 校验、`/api/execute`、`/api/query/execute`
- [D:\APP\finance-v1\src\backend\api\queryRoutes.ts](/D:/APP/finance-v1/src/backend/api/queryRoutes.ts)
  - 只读查询 route，负责 `source / scope` 准入和 query 请求形状校验
- [D:\APP\finance-v1\src\backend\mcp\xploroneMcpServer.ts](/D:/APP/finance-v1/src/backend/mcp/xploroneMcpServer.ts)
  - XplorOne 本地 MCP 服务入口，对外暴露只读 MCP tools，并继续复用本地 API / query route
- [D:\APP\finance-v1\src\backend\mcp\localApiClient.ts](/D:/APP/finance-v1/src/backend/mcp/localApiClient.ts)
  - MCP 到本地 API 的客户端封装
- [D:\APP\finance-v1\skills\xplorone\SKILL.md](/D:/APP/finance-v1/skills/xplorone/SKILL.md)
  - 统一 XplorOne skill 源目录，供安装包分发，也作为 Codex 镜像同步来源
- [D:\APP\finance-v1\.codex\skills\xplorone\SKILL.md](/D:/APP/finance-v1/.codex/skills/xplorone/SKILL.md)
  - Codex repo-local XplorOne skill 镜像，用于当前仓库内直接触发
- [D:\APP\finance-v1\scripts\sync-xplorone-skill.js](/D:/APP/finance-v1/scripts/sync-xplorone-skill.js)
  - 把统一 skill 源目录同步到 `.codex/skills/xplorone`
- [D:\APP\finance-v1\build\installer.nsh](/D:/APP/finance-v1/build/installer.nsh)
  - NSIS 安装器自定义页，提供 XplorOne skill 可选安装与用途说明
- [D:\APP\finance-v1\src\main\localApiManager.ts](/D:/APP/finance-v1/src/main/localApiManager.ts)
  - 本地 API 启停管理，区分手动开启与 MCP 临时租用
- [D:\APP\finance-v1\src\main\localMcpManager.ts](/D:/APP/finance-v1/src/main/localMcpManager.ts)
  - MCP 生命周期托管、健康检查与错误状态管理
- [D:\APP\finance-v1\src\main\mcpClientTokenStore.ts](/D:/APP/finance-v1/src/main/mcpClientTokenStore.ts)
  - MCP 客户端 token 生成、safeStorage 加密存储、节流更新最近使用时间
- [D:\APP\finance-v1\src\main\mcpStandalone.ts](/D:/APP/finance-v1/src/main/mcpStandalone.ts)
  - 独立 MCP 进程入口，用于当前开发态 / 调试态启动只读 MCP 服务
- [D:\APP\finance-v1\src\main\localApiTokenStore.ts](/D:/APP/finance-v1/src/main/localApiTokenStore.ts)
  - 本地 API token 生成与持久化
- [D:\APP\finance-v1\src\backend\db\database.ts](/D:/APP/finance-v1/src/backend/db/database.ts)
  - 主业务库 schema、预算表与 legacy budget merge
- [D:\APP\finance-v1\src\backend\db\budgetDatabase.ts](/D:/APP/finance-v1/src/backend/db/budgetDatabase.ts)
  - 旧预算库 schema 参考与 legacy 迁移输入
- [D:\APP\finance-v1\src\backend\service\bookService.ts](/D:/APP/finance-v1/src/backend/service/bookService.ts)
  - 账本、模板创建、归档/删除
- [D:\APP\finance-v1\src\backend\templates\bookTemplates.ts](/D:/APP/finance-v1/src/backend/templates/bookTemplates.ts)
  - 模板定义与校验目录
- [D:\APP\finance-v1\src\backend\service\budgetService.ts](/D:/APP/finance-v1/src/backend/service/budgetService.ts)
  - 预算业务逻辑
- [D:\APP\finance-v1\src\backend\service\dataService.ts](/D:/APP/finance-v1/src/backend/service/dataService.ts)
  - 备份、恢复、导出、清理
- [D:\APP\finance-v1\src\backend\service\settingsService.ts](/D:/APP/finance-v1/src/backend/service/settingsService.ts)
  - UI 设置、个性化设置、头像存储、AI 个性化摘要
- [D:\APP\finance-v1\src\renderer\pages\InteractionChatPage.tsx](/D:/APP/finance-v1/src/renderer/pages/InteractionChatPage.tsx)
  - 对话页 UI 与模式切换
- [D:\APP\finance-v1\src\backend\service\chat\orchestrator.ts](/D:/APP/finance-v1/src/backend/service/chat/orchestrator.ts)
  - 查询问答编排
- [D:\APP\finance-v1\src\backend\service\chat\entryOrchestrator.ts](/D:/APP/finance-v1/src/backend/service/chat/entryOrchestrator.ts)
  - 录入草稿编排
- [D:\APP\finance-v1\src\backend\service\chat\analysisOrchestrator.ts](/D:/APP/finance-v1/src/backend/service/chat/analysisOrchestrator.ts)
  - 分析问答编排
- [D:\APP\finance-v1\src\backend\service\chat\freeTalkOrchestrator.ts](/D:/APP/finance-v1/src/backend/service/chat/freeTalkOrchestrator.ts)
  - 自由对话编排
- [D:\APP\finance-v1\src\backend\llm\modelAdapter.ts](/D:/APP/finance-v1/src/backend/llm/modelAdapter.ts)
  - 模型接口适配
- [D:\APP\finance-v1\scripts\win-prepackaged-release.js](/D:/APP/finance-v1/scripts/win-prepackaged-release.js)
  - 当前 Windows 正式发布脚本，负责 `win-unpacked -> rcedit 修补 -> portable / nsis` 的 `Windows prepackaged release pipeline`

---

## 11. 当前阅读建议

如果新线程要继续编码，建议按这个顺序读：

1. [D:\APP\finance-v1\SYSTEM_ARCHITECTURE.md](/D:/APP/finance-v1/SYSTEM_ARCHITECTURE.md)
2. [D:\APP\finance-v1\CODING_PLAYBOOK.md](/D:/APP/finance-v1/CODING_PLAYBOOK.md)
3. [D:\APP\finance-v1\PROJECT_MEMORY.md](/D:/APP/finance-v1/PROJECT_MEMORY.md)
4. `git status`

这样能分别拿到：
- 当前软件怎么组织
- 编程过程中要避开什么坑
- 当前项目有哪些长期约定和实现边界
---

## 12. 2026-04 模型密钥存储收口

- 模型密钥主路径已切换到 Electron 主进程 `safeStorage`
- 新持久化文件为 `config/model-credentials.json`
- `model_credentials` 表现在只承担配置壳职责：
  - `secret_ciphertext = "__SAFE_STORAGE__"`
  - `key_version >= 2` 表示真实密钥已迁到 `safeStorage`
- `keytar` 不再是项目支持路径
- `data/model-credentials.enc.json + config/credential-seed.txt` 不再参与日常读写
- 旧文件当前只作为一次性本机迁移来源
- 当前机器存在旧记录时，Electron 启动会自动做一次性迁移到 `config/model-credentials.json`
- 纯 Node `start:api` 不支持模型密钥、模型连接测试和 AI 聊天
- `full_app` 备份现在包含：
  - `config/model-credentials.json`
  - `config/mcp-client-tokens.json`
- 该模型密钥备份文件只承诺“当前机器密钥环境下可恢复”，不承诺跨机器可移植
