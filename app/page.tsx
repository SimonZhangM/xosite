import Image from "next/image";
import Link from "next/link";

import { Container, SiteShell, StatusPill } from "./components/site-chrome";
import { PreviewSwitcher } from "./components/preview-switcher";
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
        className="relative overflow-hidden bg-[#FDFCF8] py-16 sm:py-20"
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
      <section className="bg-[#FFFFFF] py-16 sm:py-20 animate-on-scroll">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-soft)]">
              <Image
                src="/thinking-problem.svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
                aria-hidden="true"
              />
              <span className="text-black">用户问题</span>
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
              你真正关心的，不只是记账
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
              对超级个体和自由职业者来说，财务焦虑往往来自「感觉模糊」，不是来自少一个按钮。
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {problemCards.map((item) => (
              <article
                key={item.text}
                className="group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] hover:border-[var(--line-strong)]"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <Image
                    src={item.iconSrc ?? "/reports.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-5 text-base font-semibold leading-8 text-[var(--text-strong)]">{item.text}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 对比表格 ===== */}
      <section className="bg-[#FDFCF8] py-16 sm:py-20 animate-on-scroll">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-soft)]">
              <Image
                src="/find.svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
                aria-hidden="true"
              />
              <span className="text-black">产品定位</span>
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
              它不是又一个记账 App，而是一套财务工作台
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
              XplorOne 不主打企业财务系统，也不走全能 AI 平台路线。它更适合超级个体与自由职业者，用来理清财务结构、看懂资金状态。
            </p>
          </div>
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
      <section id="capabilities" className="bg-[#FFFFFF] py-16 sm:py-20 animate-on-scroll">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-soft)]">
              <Image
                src="/flashlamp.svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
                aria-hidden="true"
              />
              <span className="text-black">核心能力</span>
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
              先把财务结构理清，再把查询、联动和开放能力接起来
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
              账本、账户、分类、预算和图表，先把财务结构搭起来；查询、联动与开放接口，再让这套结构真正流动起来。
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
      <section id="previews" className="bg-[#FDFCF8] py-16 sm:py-20 animate-on-scroll">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-soft)]">
              <Image
                src="/page.svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
                aria-hidden="true"
              />
              <span className="text-black">界面预览</span>
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
              真实页面，比概念图更能说明这是什么产品
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
              你看到的不是一组好看的示意图，而是 XplorOne 正在使用的核心页面。看一眼，会比很多介绍都更清楚。
            </p>
          </div>
          <div className="mt-10">
            <PreviewSwitcher items={galleryItems} />
          </div>
        </Container>
      </section>

      {/* ===== 信任边界 ===== */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20 animate-on-scroll">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-soft)]">
              <Image
                src="/protection.svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
                aria-hidden="true"
              />
              <span className="text-black">信任边界</span>
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
              把数据留在自己手里，安心才更具体
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
              从账本保存到归档迁移，从分析边界到密钥保护，XplorOne 更在意的不只是功能能不能做，也在意哪些该做、哪些不该越界。
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: "💾",
                title: "本地账本",
                description: "核心账本默认保存在本地。就算断网，你也照样能看账、管账，心里更有底。",
              },
              {
                icon: "🔒",
                title: "只读分析",
                description: "AI 可以帮你读账、看趋势、做分析，但不会直接改动你的账本数据。该看的能看，不该碰的就不碰。",
              },
              {
                icon: "📦",
                title: "归档迁移",
                description: "支持 .xpl 归档备份与迁移。换设备也好，自己留存也好，数据都能跟着你走。",
              },
              {
                icon: "🛡️",
                title: "密钥保护",
                description: "模型密钥会由系统侧统一保护和管理，不需要你反复操心，配置边界也更清楚。",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-[var(--line)] bg-[#F8FAFD] p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[var(--shadow-lift)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                  {item.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[var(--text-strong)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 使用场景（带图标） ===== */}
      <section className="bg-[#FDFCF8] py-16 sm:py-20 animate-on-scroll">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-soft)]">
              <Image
                src="/workbench.svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
                aria-hidden="true"
              />
              <span className="text-black">适合谁用</span>
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
              给超级个体和自由职业者的财务工作台
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
              不必先学会计，也不必先上重系统。只要你每天都在和收入、支出、账户和预算打交道，XplorOne 就更适合这样的工作方式。
            </p>
          </div>
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
      <section className="bg-[#FFFFFF] pb-20 pt-16 sm:pb-24 sm:pt-20 animate-on-scroll">
        <Container>
          <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,245,249,0.94))] p-7 shadow-[var(--shadow-soft)] sm:p-9">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-soft)]">
                <Image
                  src="/thinking-problem.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                />
                <span className="text-black">常见问题</span>
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
                开始使用之前，你可能最想先知道这些
              </h2>
            </div>
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
