import Image from "next/image";
import Link from "next/link";

import { Container, SectionHeading, SiteShell, StatusPill } from "./components/site-chrome";
import { ScrollAnimator } from "./components/scroll-animate";
import {
  capabilityCards,
  compareRows,
  faqItems,
  galleryItems,
  problemCards,
  scenarioCards,
  siteConfig,
} from "./site-data";

export default function HomePage() {
  return (
    <SiteShell>
      <ScrollAnimator>
      {/* ===== Hero：从 10 层压缩到 5 层 ===== */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-b from-white to-[var(--surface-soft)] py-16 sm:py-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.05),transparent_42%),radial-gradient(circle_at_top_right,rgba(255,125,59,0.03),transparent_38%)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <div className="max-w-2xl">
            {/* 层1: StatusPill（小，右上感） */}
            <div className="flex items-center gap-3">
              <StatusPill status={siteConfig.status} />
            </div>

            {/* 层2: H1 主标题 */}
            <h1 className="mt-6 max-w-3xl text-balance text-4xl leading-[1.15] font-bold tracking-tight text-[var(--text-strong)] sm:text-5xl lg:text-[3.15rem]">
              {siteConfig.title}
            </h1>

            {/* 层3: 一段描述 */}
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
              看懂收支、账户、预算与经营状态。本地优先，数据留在你的电脑上。
            </p>

            {/* 层4: 双 CTA */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/download"
                className="group inline-flex items-center justify-center rounded-full bg-[var(--brand-warm)] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,125,59,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-warm-strong)]"
              >
                Windows 版即将开放
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/#previews"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-7 py-3 text-sm font-semibold text-[var(--text-strong)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary-strong)]"
              >
                查看界面预览
              </Link>
            </div>

            {/* 层5: 简洁特性条 */}
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" /> 多账本管理
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" /> 预算与图表
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-warm)]" /> AI 查询联动
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--text-soft)]" /> 本地优先
              </span>
            </div>
          </div>

          {/* 右侧桌面端截图 — 固定最大高度防止溢出 */}
          <div className="relative hidden lg:flex lg:justify-end">
            <div className="relative w-full max-w-[620px] overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-2 shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-[340px] overflow-hidden rounded-xl bg-[var(--surface-soft)]">
                <Image
                  src="/screenshots/xoplorone-workbench.png"
                  alt="XplorOne 工作台首页截图"
                  fill
                  priority
                  className="object-cover object-left-top"
                  sizes="(min-width: 1024px) 45vw, 100%"
                />
              </div>
            </div>
          </div>

          {/* 移动端截图 */}
          <div className="mt-6 lg:hidden">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-2 shadow-[var(--shadow-soft)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--surface-soft)]">
                <Image
                  src="/screenshots/xoplorone-workbench.png"
                  alt="XplorOne 工作台首页截图"
                  fill
                  priority
                  className="object-cover object-left-top"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 问题卡（带图标） ===== */}
      <section className="bg-[var(--surface-soft)] py-16 sm:py-20 animate-on-scroll">
        <Container>
          <SectionHeading
            eyebrow="用户问题"
            title="你真正关心的，不只是记账"
            description="对超级个体和自由职业者来说，财务焦虑往往来自「感觉模糊」，不是来自少一个按钮。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {problemCards.map((item) => (
              <article
                key={item.text}
                className="group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] hover:border-[var(--line-strong)]"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: item.iconBg }}
                >
                  {item.icon}
                </div>
                <p className="mt-5 text-base font-semibold leading-8 text-[var(--text-strong)]">{item.text}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 对比表格 ===== */}
      <section className="py-16 sm:py-20 animate-on-scroll">
        <Container>
          <SectionHeading
            eyebrow="产品判断"
            title="为什么它不是又一个记账 App"
            description="XplorOne 不主打企业财务系统，也不走全能 AI 平台路线。它更像是给轻经营者准备的一张财务工作台。"
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-[var(--surface-soft)]">
                  <tr className="text-sm text-[var(--text-soft)]">
                    <th className="px-5 py-4 font-semibold">维度</th>
                    <th className="px-5 py-4 font-semibold">普通记账 App</th>
                    <th className="px-5 py-4 font-semibold">传统财务软件</th>
                    <th className="px-5 py-4 font-semibold text-[var(--brand-primary-strong)]">XplorOne</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.dimension} className="border-t border-[var(--line)] align-top transition-colors duration-150 hover:bg-[var(--surface-soft)]">
                      <th className="px-5 py-5 text-sm font-semibold text-[var(--text-strong)]">{row.dimension}</th>
                      <td className="px-5 py-5 text-sm leading-7 text-[var(--text-muted)]">{row.app}</td>
                      <td className="px-5 py-5 text-sm leading-7 text-[var(--text-muted)]">{row.finance}</td>
                      <td className="px-5 py-5 text-sm leading-7 text-[var(--text-strong)]">{row.xplorone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 能力卡（带图标 + 左边框区分） ===== */}
      <section id="capabilities" className="bg-[var(--surface-soft)] py-16 sm:py-20 animate-on-scroll">
        <Container>
          <SectionHeading
            eyebrow="核心能力"
            title="先把财务结构理清，再谈更高效的查询与联动"
            description="AI 在这里不是主角，它只是帮助你更快找到结构、趋势和页面上下文。真正先成立的，是账本、预算、图表和可理解的工作流。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {capabilityCards.map((card, index) => (
              <article
                key={card.title}
                className={`group relative overflow-hidden rounded-2xl border p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${
                  index === 3
                    ? "border-[rgba(37,99,235,0.18)] bg-[linear-gradient(180deg,rgba(37,99,235,0.06),rgba(255,255,255,0.98))]"
                    : "border-[var(--line)] bg-white"
                }`}
              >
                {/* 左边框装饰 */}
                {index !== 3 && (
                  <div className="absolute left-0 top-5 bottom-5 w-0.5 rounded-full bg-transparent transition-all duration-300 group-hover:bg-[var(--brand-primary)] group-hover:h-auto" style={{ height: "calc(100% - 2.5rem)", top: "1.25rem" }} />
                )}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{card.icon}</span>
                    <h3 className="text-base font-semibold text-[var(--text-strong)]">{card.title}</h3>
                  </div>
                  {index === 3 ? <StatusPill status="已支持" compact /> : null}
                </div>
                <p className="mt-4 text-sm font-medium leading-7 text-[var(--text-strong)]">
                  {card.description}
                </p>
                <p className="mt-2.5 text-sm leading-7 text-[var(--text-muted)]">{card.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 截图预览 ===== */}
      <section id="previews" className="py-16 sm:py-20 animate-on-scroll">
        <Container>
          <SectionHeading
            eyebrow="界面预览"
            title="用真实截图说话，而不是概念插画"
            description="首版展示真正代表产品结构的 5 个业务页面。聊天页不会抢 Hero，也不会替代产品本体。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 48vw, 100%"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-semibold text-[var(--text-strong)]">{item.title}</h3>
                  <p className="text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 本地优先 + AI 联动（精简版） ===== */}
      <section className="bg-[var(--surface-soft)] py-16 sm:py-20 animate-on-scroll">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <div className="rounded-2xl border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)]">
            <SectionHeading
              eyebrow="本地优先"
              title="数据留在你的电脑上，这比任何承诺都更让人放心"
              description=""
            />
            <div className="mt-8 space-y-4">
              {[
                { icon: "💾", text: "核心数据默认保存在本地，断网也能查账" },
                { icon: "🔒", iconColor: "var(--brand-teal)", text: "AI 可以读取账本分析，但不能改写任何数据" },
                { icon: "📦", iconColor: "var(--brand-warm)", text: ".xpl 归档格式随时备份迁移，数据永远属于你" },
                { icon: "🛡️", iconColor: "var(--brand-primary)", text: "模型密钥经系统级加密保护" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="group flex items-start gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-4 transition-all duration-200 hover:bg-white hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-base shadow-sm">{item.icon}</span>
                  <p className="text-sm leading-7 text-[var(--text-strong)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-[rgba(37,99,235,0.14)] bg-[linear-gradient(180deg,rgba(37,99,235,0.06),rgba(255,255,255,0.98))] p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-primary-strong)]">
                AI 与联动
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-strong)]">
                AI 帮你查、帮你看、帮你联动
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                不只是聊天——AI 能直接查询你的真实账本数据、分析结构趋势，再把你带到正确的操作页面。
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-white/90 bg-white shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/screenshots/xoplorone-chat-page.png"
                    alt="XplorOne AI 查询与联动界面"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 44vw, 100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 使用场景（带图标） ===== */}
      <section className="bg-[var(--surface-soft)] py-16 sm:py-20 animate-on-scroll">
        <Container>
          <SectionHeading
            eyebrow="使用场景"
            title="不是企业大系统，是一套轻经营者也愿意打开的工作台"
            description=""
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {scenarioCards.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-[var(--text-strong)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== FAQ ===== */}
      <section className="pb-20 pt-16 sm:pb-24 sm:pt-20 animate-on-scroll">
        <Container>
          <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,245,249,0.94))] p-7 shadow-[var(--shadow-soft)] sm:p-9">
            <SectionHeading
              eyebrow="FAQ 与下一步"
              title="先把关键问题说清楚，再决定什么时候开始下载体验"
              description="首版 FAQ 保持口径谨慎，特别是在本地优先与外部 AI 边界上，不做过满承诺。"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqItems.slice(0, 4).map((item) => (
                <article key={item.question} className="rounded-2xl border border-[var(--line)] bg-white p-5 transition-all duration-200 hover:shadow-[var(--shadow-soft)]">
                  <h3 className="text-base font-semibold text-[var(--text-strong)]">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.answer}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary-strong)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)]"
              >
                查看完整 FAQ
              </Link>
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-warm)] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-warm-strong)] hover:shadow-[0_10px_28px_rgba(255,125,59,0.28)]"
              >
                查看下载进度
              </Link>
              <Link
                href="/changelog"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[var(--shadow-soft)]"
              >
                查看更新日志
              </Link>
            </div>
          </div>
        </Container>
      </section>
      </ScrollAnimator>
    </SiteShell>
  );
}
