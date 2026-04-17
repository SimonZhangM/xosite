# Project Memory

## 适用范围

- 本文件用于记录项目级记忆、命令、版本规则和一些已经稳定下来的实现约定。
- 如果是新线程开始编程，建议先读：
  - `D:\APP\finance-v1\SYSTEM_ARCHITECTURE.md`
  - `D:\APP\finance-v1\CODING_PLAYBOOK.md`
  - 再读本文件
  - 再看 `git status`

## 当前补充约定

### 1. 经验文件分工

- `D:\APP\finance-v1\CODING_PLAYBOOK.md`
  - 记录“编程过程中的硬经验、排错思路、已踩过的坑”
- `D:\APP\finance-v1\PROJECT_MEMORY.md`
  - 记录“项目命令、版本约定、实现边界和长期有效的项目记忆”
- `D:\APP\finance-v1\SYSTEM_ARCHITECTURE.md`
  - 记录“软件当前架构、核心链路和关键文件职责”

### 2. 个性化设置当前实现约定

- 个性化设置当前通过 `app_settings` 中的单一 key 保存：
  - `personalization_profile`
- 当前所有个性化设置均视为当前 `baseDir` 下唯一活跃 Profile 的配置。
- 头像存储当前已切换到本地 asset 模式，优先落在：
  - `...\\XplorOne\\config\\avatars\\profile-avatar.*`
- 头像上传时会先做透明留白裁切和头像规格化处理，再保存。
- `avatar_asset` 是持久化存储字段。
- `avatar_data_url` 是返回给前端显示时的派生预览字段，不作为长期存储主字段。
- 头像、昵称只用于本地 UI 展示，不参与 AI 上下文注入。
- AI 偏好只有在 `enabled_for_ai = true` 时才会进入 AI 请求。
- AI 注入不直接传原始 JSON，而是传稳定、简短的自然语言摘要。

### 2.1 显示设置与显示偏好长期约定

- 显示设置当前通过 `app_settings` 中的单一 key 保存：
  - `display_preferences`
- 当前显示偏好已固定包含：
  - 周起始日
  - 日期格式
  - 千分位与小数位数
  - 全局字号级别
  - 记一笔默认账户 / 成员 / 项目
  - `保存后继续保持记一笔打开`
- 当前 renderer 侧已经有正式辅助层：
  - `src/shared/displayPreferences.ts`
  - `src/renderer/utils/displayPreferences.ts`
- 后续只要动这些能力，优先继续复用这套辅助层：
  - 金额展示格式化
  - 日期展示格式化
  - 每周起始日计算
  - 根字号缩放
- 当前完整日期格式选项已固定只保留两种：
  - `2026年4月16日`
  - `2026年04月16日`
- 默认完整日期显示固定为中文格式，不再把 `YYYY-MM-DD` 当作用户设置选项保留。
- 只要是“完整日期”或“日期+时间”的展示，优先继续走 `formatDisplayDate / formatDisplayDateTime`；如果页面本来只显示 `X月X日`、`04.16` 这类短标签，不要为了统一格式强行补全年。
- `记一笔` 的默认账户 / 成员 / 项目 当前也以这套显示偏好为准，不要再把默认值散落回页面本地 state 常量里。

### 2.2 提醒设置与提醒中心长期约定

- 提醒设置当前通过 `app_settings` 中的单一 key 保存：
  - `notification_preferences`
- 当前顶部公共页头已经正式接入提醒中心，不再只是静态铃铛图标。
- 当前提醒数据主表固定为：
  - `notification_items`
- 当前提醒动作导航固定只允许：
  - `quick_entry`
  - `manage_budget`
  - `settings`
  - `home`
  - `transactions`
- 当前提醒中心的 UI 规则固定为：
  - 右上角铃铛可显示未读角标
  - 支持 `全部 / 未读` 过滤
  - 支持 `全部已读`
  - 单条支持 `标记已读 / 忽略 / 主动作跳转`
- 以后只要动提醒系统，优先继续沿用：
  - `NotificationService`
  - `notification_items`
  - `NotificationSettingsPanel`
  - `App.tsx` 顶部提醒弹层
  这条主链，不要重新分叉出第二套通知入口。

### 3. XplorOne 技术身份迁移长期约定

- 当前技术身份主族已经切到：
  - `XPLORONE_*`
  - `%APPDATA%\\XplorOne`
  - `xplorone.db`
  - `xplorone-ai`
  - `com.xplorone.app`
- 当前兼容读取仍保留：
  - `FINANCE_*`
  - `%APPDATA%\\finance-v1`
  - `finance.db`
  - `finance-v1-ai`
- 旧预算库兼容当前固定为：
  - `xplorone-budget.db / budget.db` 只作为启动期 legacy merge 输入
  - 运行时唯一真实来源固定为主库 `xplorone.db` 中的 `budget_months / budget_lines`
- 当前兼容策略固定为：
  - `XPLORONE_*` 优先
  - `FINANCE_*` fallback
  - 默认目录迁移只做复制，不删除旧目录
  - 同一 `baseDir` 内若只存在旧主库文件名，会先补齐到新文件名
  - 若仍存在旧预算库文件，会在主库初始化期自动吸收，但不再作为运行时双库依赖
- 当前不建议长期并行使用旧 `Finance V1` 和新 `XplorOne` 处理同一份数据。

### 3.1 `.xpl` 单账本迁移包长期约定

- `.xpl` 当前定位固定为：
  - 单账本迁移包
  - 只服务已归档账本导出 / 导入
- 文件格式固定为：
  - gzip 压缩后的 UTF-8 JSON 单文件
- 导出边界固定为：
  - 只允许导出 `archived` 账本
  - 只包含账本业务数据快照
  - 不包含 AI 历史、审计日志、全局设置和本地敏感配置
- 导入边界固定为：
  - 只允许导入为新的 `active` 账本
  - 不支持覆盖导入
  - 不支持原地恢复
- 导入链路当前复用现有 snapshot restore 主链，并补齐新账本语义下的 ID 映射与一致性校验
- 导入前会按导出包中的 `book_uid` 预检源账本是否仍存在；该提示只用于用户确认，不改变“导入为新账本”的最终语义

### 4. 对话页滚动归属约定

- 对话页当前已明确采用“外层不滚、右侧内部滚”的结构。
- 页面行为固定为：
  - 左侧会话栏固定显示
  - 右侧消息区内部滚动
  - 底部输入栏固定显示，不跟随消息区滚走
- 如果后续发现“底部输入栏悬空”或“整张对话卡没铺到底”，先检查高度链路有没有真正打通：
  - `workspace.workspace-static`
  - `workspace.workspace-static > .workspace-content-fill`
  - `workspace-content-fill > .interaction-chat-page`
  不要先靠写死 `calc(...)` 高度或临时 `sticky` 顶住。
- 如果后续再改对话页滚动，不要先靠 `sticky` 硬顶，先确认真正的滚动容器是不是已经切对。

### 5. 首页最近流水短日期约定

- 首页“最近流水”的日期当前固定显示为 `X月X日`，不再显示“今天 / 昨天”。
- 这块属于短标签语义，不走完整日期展示规则，也不要强行补全年。
- 流水页表格中的日期当前也继续固定显示为 `X月X日` 短标签；即使完整日期显示偏好改成中文长日期，这一列也不跟着拉长。
- 如果后续再调这列宽度，优先先看真正生效的是：
  - `overview-recent-row` 的 `grid-template-columns`
  - 还是旧的 `overview-recent-date` `flex-basis` 兜底规则
  不要只改一处就以为桌面态一定会生效。

### 5.1 范围胶囊当前统一约定

- 流水页、账户页、收支分类页当前范围胶囊已统一复用：
  - `home-ledger-scope-chip`
- 如果后续再调“当前范围 / 当前时间块 / 当前筛选范围”这类胶囊，优先继续收口到同一套 class，不要在三个页面各自再长出一版颜色和高度。

### 6. 首页 AI 助手卡跳转约定

- 首页第 8 张卡的 4 条入口，不是普通链接。
- 当前固定行为是：
  - 点击某一条后，直接切到对应对话模块
  - 预填该条对应的问题/内容
  - 强制新建对话，不落到最近一次旧会话
- 这条约定优先保证“工作台入口感”，不要轻易改回“进入旧会话继续聊”。

### 7. Donut 图单分片整圆特判

- 当前项目中的 donut 图已验证：
  - 当只有 1 个有效分片，且占比为 `100%` 时
  - 不能直接走普通弧线路径
- 否则会出现：
  - 文字和引导线正常
  - 但圆环本体消失
- 当前约定：
  - `100%` 单分片必须走整圆特判路径
  - 后续如果再抽公共 donut 组件，这条规则要一并带走

### 7. AI 对话四模块长期约定

当前对话系统已经稳定为 4 个模块：

- `query`
  - 定位：快速查结果
  - intent：`chat_query`
  - scope：`chat:query`
- `entry`
  - 定位：快速记流水
  - intent：`chat_entry`
  - scope：`chat:entry`
- `analysis`
  - 定位：基于当前账本做财务分析、归因和建议
  - intent：`chat_analysis`
  - scope：`chat:analysis`
- `free_chat`
  - 定位：开放式 AI 对话
  - intent：`chat_free_talk`
  - scope：`chat:free_talk`

这 4 个模块是长期约定，后续不要再把它们重新混成“一个聊天框猜所有意图”的旧模式。

### 8. 查询和录入会话隔离约定

当前已明确：
- `查询` 和 `录入` 从新对话开始已拆开
- 不再混在同一会话里
- 左侧虽然混排展示，但底层 `scope` 仍然严格分开

这条约定的含义是：
- 会话列表是统一展示层
- 不等于底层 session 复用
- 查询、录入、分析、自由对话各自保留自己的上下文边界

### 9. 分析 / 自由对话角色边界约定

分析模块角色固定为：
- `财务顾问`
- 面向个人与 OPC
- 默认只分析当前账本
- 先本地取数，再把结构化分析上下文送给模型
- 如果问题只是简单查询，直接路由回现有查询模块

自由对话模块角色固定为：
- `开放财务助手`
- 允许更开放的话题，例如投资思路、税务话题、泛经营问题
- v1 默认不注入当前账本数据
- 不承担规则型查询或流水录入

### 10. 排名查询（Top N）长期约定

当前查询模块已经落地 Top N / 排名能力，稳定边界如下：

- 收支排行：
  - 只支持 `收入 / 支出`
  - 统计到二级分类
  - 口径是指定时间范围内的区间合计值
  - 缺时间时直接补问，不默认猜
- 余额排行：
  - 只支持 `资产 / 负债`
  - 统计到具体账户
  - 口径是指定时点的余额值
  - 缺时点时默认按今天
- 展示：
  - 当前统一用 markdown 有序列表
  - 不新增前端 list schema
- 账户规则：
  - 停用账户可显示
  - 隐藏账户不显示
- 命中边界：
  - 只接“我要一个列表”的问题
  - 如果混入分析、趋势、比较、建议语义，优先回退 AI

### 11. 流水页当前交互约定

- 流水页顶部当前固定为“净收入汇总条 + 筛选 / 导出按钮”的结构，不再回到旧版搜索栏 + 工具栏并排的样式。
- 左侧侧栏当前固定包含两层筛选：
  - 第一层：时间 / 分类 / 账户切换
  - 第二层：当处于时间模式时，显示“年份 + 细分粒度”的二次筛选
- 时间模式下，选中的月份 / 季度 / 半年卡片会额外显示：
  - 所属年份
  - 截至当前时间块的当年累计结余
- 流水列表表头当前排序规则：
  - 金额：三态切换
  - 账户：按拼音正序 / 倒序 / 复原
  - 性质：按拼音正序 / 倒序 / 复原
  - 时间：正倒序切换
- 如果后续再改流水页，优先保持这套“顶部汇总 + 左侧双层筛选 + 右侧搜索排序”的整体结构，不要轻易退回旧版工具栏堆叠布局。

### 12. 账户页当前交互约定

- 账户页当前固定参考流水页新版工作台布局，不再回到旧版“标题 + 工具栏 + 表格”上下堆叠模式。
- 顶部结构固定为：
  - 净资产汇总条
  - 右侧 `新建账户` 主按钮
- 右侧子页标题区当前固定包含：
  - `账户列表`
  - 当前范围胶囊
  - `资产账户 / 负债账户` 图标切换按钮
  - `显示已隐藏账户`
- 账户切换按钮当前约定：
  - 中文文字色保持一致，不因选中态变色
- `资产` 图标固定 `#4dafa2`
- `负债` 图标固定 `#5c97f5`
- 左侧时间侧栏当前沿用流水页同款时间桶卡片样式；如果后续继续调整账户页，优先复用流水页那套筛选骨架，不要重新分叉出另一套视觉规则。

### 13. 收支分类页与预算页当前交互约定

- 收支分类页当前固定参考账户页新版工作台布局：
  - 顶部汇总条
  - 左侧时间筛选侧栏
  - 二级时间筛选
  - 右侧“分类列表 + 范围胶囊 + 支出类型 / 收入类型 + 显示已隐藏分类”
- 预算页当前也固定参考账户页新版工作台布局，但有一条明确例外：
  - 左侧只保留年份预算筛选，不加二级时间筛选
- 预算页右侧标题区当前固定包含：
  - `预算列表`
  - 当前范围胶囊
  - `保存为当月预算`
  - `保存为全年预算`
  - 预算状态框
- 如果后续继续调整分类页或预算页，优先继续复用账户页 / 流水页的工作台骨架，不要再各自长出新的标题栏和工具栏体系。

### 13.1 成员页与项目页当前交互约定

- 成员管理页当前固定使用：
  - 最外层白卡 + 通用边框 / 薄阴影
  - 标题区 `成员管理 + 显示已隐藏的成员 + 添加角色`
  - 内部列表壳 + 分组式表格
- 成员页表格当前不是普通平表，而是“按组 `tbody`” 的结构：
  - 第一组有自己的顶部圆角
  - 后续组有自己的分组圆角
  - 首行与表头之间通过 shell 层补丁色块处理细缝
- 项目管理页当前要继续参考成员管理页，而不是回退到旧版 `project-manage-*` 工具栏布局。
- 项目页当前固定包含：
  - `项目管理`
  - `显示已隐藏的项目`
  - `新增项目`
  - 内部项目列表壳
- 如果后续继续调整成员页或项目页，优先保持：
  - header 结构一致
  - 表格壳层一致
  - 分组圆角 / 首行贴色处理一致

### 14. 公共页头与版本号显示约定

- 顶部页头当前是各主页面共用的公共容器，不是单页私有实现。
- 页头问候语当前按时间段动态变化，并采用：
  - 天气 emoji
  - 文案
  - 表情 emoji
- 当前版本号显示规则已经固定为：
  - 页头品牌区直接读取 `package.json.version`
  - 不再手写在 `App.tsx` 常量里
- 以后如果用户要求版本提交：
  - 更新 `package.json`
  - 更新 `package-lock.json`
  - 页面抬头版本号会自动同步
  - 不需要再单独改页头版本文本

### 14.1 桌面标题栏当前实现约定

- 窗口版当前已经切到自定义桌面标题栏，不再依赖原生标题区直出。
- 当前固定由三层协作完成：
  - `main.ts`
  - `preload.ts`
  - `App.tsx`
- 其中：
  - `main.ts` 负责无边框窗口、原生菜单弹出与窗口控制
  - `preload.ts` 负责把菜单与窗口控制白名单桥接给 renderer
  - `App.tsx` 负责渲染层菜单行、品牌区与窗口按钮 UI
- 以后只要动桌面标题栏，不要只改样式；先确认 `main / preload / renderer` 三层语义是否一起对齐。

### 15. Electron 图片导出长期约定

- 当前像日历页这类复杂工作台，如果包含：
  - 本地图标
  - `foreignObject`
  - 内联样式中的 `url(...)`
  - 或多层 SVG / DOM 混排
- 前端纯 `canvas.toDataURL()` 很容易踩到 `tainted canvas`
- 当前更稳的桌面端做法已经固定为：
  - Renderer 只负责计算目标区域 `getBoundingClientRect()`
  - 通过 `preload -> IPC` 把矩形传给主进程
  - `main.ts` 里用 `BrowserWindow.webContents.capturePage(...)` 直接截取区域并保存 PNG
- 如果后续又遇到“导出图片报 tainted canvas”，优先检查能否直接走主进程原生截图，而不是继续补前端 canvas 绕法。

### 16. 记一笔浮层下拉长期约定

- `QuickEntryPage` 里的账户 / 分类双栏下拉，当前已经不是表单内部的普通绝对定位弹层。
- 稳定做法已经固定为：
  - 浮层渲染到 `document.body`
  - 使用 `position: fixed`
  - 跟随触发器定位
  - 按视口可用空间自动决定向上或向下展开
- 只要这类浮层仍然挂在原表单容器里，桌面壳层和工作区的 `overflow` 很容易把它截断。
- 所以后续如果再扩展“记一笔”下拉，不要回退到原来的 `absolute + 容器内展开` 方案。

### 17. 外部 agent / MCP 集成长期约定

- 当前项目已经具备本地 HTTP API，不要把未来的 agent 集成理解为“从数据库重新开口子”。
- 外部 agent 集成优先复用现有：
  - 本地 API
  - intent
  - QueryRequestService / QueryExecutor
- 长期原则：
  - 不让外部 agent 直接操作 SQLite
  - 优先走业务层，不绕过现有服务边界
- 第一阶段优先做：
  - 只读查询
  - 由外部 agent 自己的模型解释结果
- 当前软件内置模型的定位保持为：
  - 只服务软件内部 `chat_query / chat_analysis / chat_free_talk`
  - 不作为外部 agent 集成的唯一模型前提
- 如果后续开放写入：
  - 优先复用现有草稿 / 确认链路
  - 不直接开放“裸写 transaction 表”
- 对外只读查询优先复用现有 query route 的 `source / scope / request_id / audit` 机制，不要再平行造一套无审计读接口。

### 17.1 当前已落地的 MCP 只读基线

- 当前仓库里 **只读 MCP v1 已经实际落地**，不是停留在方案阶段。
- 当前 MCP 服务固定建立在：
  - 本地 HTTP API
  - `QueryRequestService`
  - `QueryExecutor`
  之上
- 当前 MCP 固定边界：
  - 只读
  - 默认只查当前 active book
  - 显式 `book_id` 直接拒绝
  - 查询参数不足返回结构化 `NEED_CONFIRMATION`
- 当前稳定 tools 固定为：
  - `get_runtime_info`
  - `list_books`
  - `list_reference_data`
  - `query_transactions`
  - `query_account_transactions`
  - `get_finance_summary`
- 当前 Codex 桌面端真实线程已经验证可用，所以后续如果继续做 skill 或产品化设置页，不需要再回头争论“本地 MCP 是否跑得通”。

### 17.2 当前 MCP 产品化已进入可用收口阶段

- 当前已落地的产品化点包括：
  - 主程序后台托管 MCP
  - `Codex / WorkBuddy` 两类客户端独立 token
  - 设置页中的 `XplorOne MCP` 状态区
  - 设置页中的 token 复制 / 显示 / 重置
  - Electron `safeStorage` 加密保存 MCP client token
  - Local API 与 MCP 之间的“手动开启 / MCP 临时租用”来源语义
- 当前仍保留的开发态入口包括：
  - `start:mcp`
  - `start:api`
- 但它们现在只是调试路径，不再代表正式用户路径。
- 后续如果继续推进 MCP，原则上应该：
  - 在现有只读 MCP 基线上继续收口
  - 继续沿用 `XplorOne MCP -> Local API -> QueryExecutor`
  - 不要重写一套新的 MCP 后端

### 17.3 当前 MCP token 与服务边界长期约定

- 内部 API token 与 MCP client token 当前已经彻底分开：
  - 内部 API token
    - 首次初始化生成
    - 只给 `MCP -> Local API`
    - 不进 UI
    - 不跟随外部 token 旋转
  - MCP client token
    - 当前只给 `Codex / WorkBuddy`
    - 每类客户端最多一个有效 token
    - 由设置页管理
- 当前 MCP client token 采用：
  - `safeStorage` 加密
  - 本地元数据文件记录 `client_id / preview / encrypted_token`
- `env_var_name` 当前只是推荐配置名，不是系统内部主键
- token 旋转语义已经固定为：
  - 从旋转完成后的下一次请求开始，旧 token 立即失效
- `last_used_at` 当前会节流落盘，不按每次请求都立刻写盘

### 17.4 repo-local XplorOne skill 长期约定

- 当前仓库内已经正式落地：
  - `D:\APP\finance-v1\.codex\skills\xplorone\`
- 这份 skill 当前不是临时实验产物，而是：
  - XplorOne Read-Only MCP v1 的 agent 使用规范
  - 后续 Codex / WorkBuddy 接入说明与行为收口的长期来源之一
- 当前结构约定固定为：
  - 一个主 skill
  - 多个 `references/`
  - 不做单文件大手册
- 当前 `.gitignore` 已单独放行：
  - `.codex/skills/xplorone/**`
  让这份 skill 可以进入 git；但 `.codex` 其余运行痕迹仍保持忽略
- 当前 validator 在 Windows 上对主 `SKILL.md` 的编码较敏感，因此长期约定是：
  - 主 `SKILL.md` 尽量保持 ASCII
  - 中文细节和例子写在 `references/`
- 当前 skill 已固定的几个关键输出规则包括：
  - 默认不输出 raw JSON
  - 明细交易默认中文表头：
    - `日期 / 类型 / 分类 / 账户 / 金额（元）`
  - 账户列默认合并展示
  - 双账户流向按：
    - `账户A->账户B`
    展示
  - 账户名与分类名必须来自当前账本 reference data，不允许写死或猜测

### 18. 基础报表页当前交互约定

- 基础报表页当前固定为“左主区 + 右排行 + 下方 donut”的工作台结构，不再回到旧版“月度图 + 分布卡片四宫格”的布局。
- 右侧两个排行榜当前固定为：
  - `本年收入排行榜`
  - `本年支出排行榜`
- 统计口径当前约定为：
  - 收入排行按全年累计收入分类
  - 支出排行按全年累计支出的一级分类
- 排行右侧统计区当前已固定为“占比 · ￥金额”的组合展示；如果后续继续细修，优先复用现有结构，不要再单独拼新的金额块。
- 底部两张 donut 当前也按全年累计口径统计，并和日历页 donut 共用相近的卡片高度与外廓语言。

## better-sqlite3（bsql）双 runtime 约定

当前稳定基线已经不是“手动来回切 ABI”，而是“双 runtime / 双 binary”：

- Web 预览 / 系统 Node
  - 使用：`native/better-sqlite3/node-v137-win32-x64/better_sqlite3.node`
- Electron 桌面版 / 打包版
  - 使用：`native/better-sqlite3/electron-v145-win32-x64/better_sqlite3.node`

运行时解析入口统一在：

- `D:\APP\finance-v1\src\backend\db\sqliteDriver.ts`

### 1. Web 预览入口

- `start-preview.bat`
- 对应系统 Node 链路
- 不负责桌面版启动

### 2. 桌面窗口版入口

- `start-electron.bat`
- `npm run start`
- 对应 Electron 链路
- 当前默认会带 `DISABLE_LOCAL_API_ON_BOOT=1`

### 3. 固化当前可用 binary

当某个 runtime 下的 `better-sqlite3` 已经验证可用后，执行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\stage-better-sqlite3.ps1 -Runtime node
```

或：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\stage-better-sqlite3.ps1 -Runtime electron
```

### 4. 双 runtime 自检

```powershell
npm run build
powershell -ExecutionPolicy Bypass -File .\scripts\verify-sqlite-runtimes.ps1
```

## 说明

- `bsql` = `better-sqlite3`
- 当前不再把“手动切换 `node_modules/better-sqlite3/build/Release` 里的单一 binary”当成稳定方案
- Web 版当前对应 Node ABI `137`
- 桌面版当前对应 Electron ABI `145`
- 发布时只按 Electron 线打包，只带 Electron 对应那份 native binary

## 问题处理思路

- 先区分“开发双线并存”与“发布只认 Electron”两个目标
- 如果某个 runtime 出错，先确认它是否命中了对应 `native/better-sqlite3/.../better_sqlite3.node`
- 如果 staged binary 缺失，再去补 staging，而不是先回到旧的手动来回切 ABI 方案

## Git / 版本说明约定

- 版本中文说明清单文件：
  - `D:\APP\finance-v1\CHANGELOG.zh-CN.md`
- 开发记忆文件：
  - `D:\APP\finance-v1\PROJECT_MEMORY.md`
- 该文件按 `tag` 逐条对应维护，不做整合式总说明。
- 以后每次用户要求：
  - `git 0.0.x`
  - `git 下一个版本`
  - `这次版更 git`
  都需要在完成版本 `commit + tag` 的同时，同步更新 `CHANGELOG.zh-CN.md`
- 如果这次版本里有结构性变化，还应顺手同步检查 4 个根文档：
  - `SYSTEM_ARCHITECTURE.md`
  - `CODING_PLAYBOOK.md`
  - `PROJECT_MEMORY.md`
  - `CURRENT_STATE.md`
- 推荐顺序：
  - 先确认下一个版本号
  - 先更新 `CHANGELOG.zh-CN.md` 中对应版本条目
  - 再执行版本提交与打 `tag`
  - 最后向用户汇报：
    - 版本号
    - commit id
    - tag
    - 中文核心更新摘要
- 中文版本说明优先记录：
  - 用户可感知变化
  - 结构性变化
  - 规则性变化
- 如本次重要改动较多，单个版本条目最多控制在 `10` 条。
- 不要把零碎实现细节堆进去，优先写“这个版本对产品/页面/数据链路实际产生了什么变化”。
- 默认不 `push`，除非用户明确说 `push`。
- 如果历史版本缺少中文说明，可以按相邻 `tag` 的 `git diff` 倒推补录。
- 如果发现两个 `tag` 指向同一提交，要如实写明“同一代码快照”，不要虚构差异。
- 版本提交流程不能停在 `git commit`；必须当场补 `git tag vX.Y.Z`，并用 `git log --decorate` / `git tag` 再复核一轮，确认最新提交已挂上正确 tag 后才算真正收尾。
## 2026-04 模型密钥迁移记忆

- 模型密钥已从旧文件模式切到 Electron 主进程 `safeStorage`
- 当前机器存在旧记录时，允许从：
  - `data/model-credentials.enc.json`
  - `config/credential-seed.txt`
  做一次性本机迁移
- 迁移成功后只认 `config/model-credentials.json`
- 旧迁移文件当前只作为迁移输入，不允许继续覆盖已经存在的新 vault 条目
- 迁移缓存只记录本次真正迁入的新值，避免旧文件把更晚更新的 key 污染回进程内缓存
- `keytar` 已明确不再支持
- `full_app` 备份要带 `config/model-credentials.json`
- 该备份语义是“当前机器密钥环境下可恢复”，不是跨机凭据包
