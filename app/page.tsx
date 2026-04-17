import Image from "next/image";
import Link from "next/link";

import { Container, SectionHeading, SiteShell, StatusPill } from "./components/site-chrome";
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
      <section id="hero" className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(46,107,255,0.18),transparent_45%),radial-gradient(circle_at_top_right,rgba(255,125,59,0.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.15),rgba(245,247,251,0))]" />
        <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.06fr)] lg:items-center">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill status={siteConfig.status} />
              <span className="rounded-full border border-[var(--line)] bg-white/80 px-3 py-1.5 text-sm text-[var(--text-muted)]">
                {siteConfig.version}
              </span>
              <span className="rounded-full border border-[var(--line)] bg-white/80 px-3 py-1.5 text-sm text-[var(--text-muted)]">
                本地优先
              </span>
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue-strong)]">
              为超级个体与自由职业者准备
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-5xl lg:text-6xl">
              {siteConfig.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              看懂收支、账户、预算与经营状态。不必先成为会计，也不必先把数据交给云端。
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-soft)]">
              XplorOne 不是又一个记账 App，而是一套帮助超级个体和自由职业者看懂资金状态、经营节奏与真实收支的本地财务工作台。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent-warm)] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(255,125,59,0.3)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-warm-strong)]"
              >
                Windows 版即将开放
              </Link>
              <Link
                href="/#previews"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-6 py-3.5 text-base font-semibold text-[var(--text-strong)] transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue-strong)]"
              >
                查看界面预览
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["多账本与预算", "从账户结构到预算执行，先建立秩序。"],
                ["图表与经营视角", "不只看流水，还能看清趋势与风险。"],
                ["AI 查询与联动", "查询、分析、联动，不让 AI 抢走产品本体。"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-[1.5rem] border border-[var(--line)] bg-white/88 p-4 shadow-[var(--shadow-soft)]">
                  <p className="text-sm font-semibold text-[var(--text-strong)]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 bottom-0 top-8 rounded-[2rem] bg-[linear-gradient(180deg,rgba(46,107,255,0.14),rgba(255,255,255,0))]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.14)] sm:p-4">
              <div className="relative aspect-[1.08/1] overflow-hidden rounded-[1.5rem] bg-[var(--surface-soft)]">
                <Image
                  src="/screenshots/xoplorone-workbench.png"
                  alt="XplorOne 工作台首页截图"
                  fill
                  priority
                  className="object-cover object-left-top md:hidden"
                  sizes="100vw"
                />
                <Image
                  src="/screenshots/xoplorone-workbench.png"
                  alt="XplorOne 工作台首页截图"
                  fill
                  priority
                  className="hidden object-contain object-top md:block"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="用户问题"
            title="你真正关心的，不只是记账"
            description="首版官网先从真实问题切入，而不是先堆功能名词。对超级个体和自由职业者来说，财务焦虑往往来自“感觉模糊”，不是来自少一个按钮。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {problemCards.map((item) => (
              <article
                key={item}
                className="group rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="h-11 w-11 rounded-2xl bg-[linear-gradient(135deg,rgba(46,107,255,0.16),rgba(17,209,175,0.14))]" />
                <p className="mt-6 text-lg font-semibold leading-8 text-[var(--text-strong)]">{item}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  这类问题不靠一张流水表就能解决，它需要结构、上下文和持续可复用的工作台。
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="产品判断"
            title="为什么它不是又一个记账 App"
            description="XplorOne 不主打企业财务系统，也不走全能 AI 平台路线。它更像是给轻经营者准备的一张财务工作台。"
          />
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white shadow-[var(--shadow-soft)]">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-[var(--surface-soft)]">
                  <tr className="text-sm text-[var(--text-soft)]">
                    <th className="px-5 py-4 font-semibold">维度</th>
                    <th className="px-5 py-4 font-semibold">普通记账 App</th>
                    <th className="px-5 py-4 font-semibold">传统财务软件</th>
                    <th className="px-5 py-4 font-semibold text-[var(--brand-blue-strong)]">XplorOne</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.dimension} className="border-t border-[var(--line)] align-top">
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

      <section id="capabilities" className="py-16 sm:py-20">
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
                className={`rounded-[1.6rem] border p-5 shadow-[var(--shadow-soft)] ${
                  index === 3
                    ? "border-[rgba(46,107,255,0.2)] bg-[linear-gradient(180deg,rgba(46,107,255,0.08),rgba(255,255,255,0.96))]"
                    : "border-[var(--line)] bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[var(--text-strong)]">{card.title}</h3>
                  {index === 3 ? <StatusPill status="已支持" compact /> : null}
                </div>
                <p className="mt-4 text-sm font-medium leading-7 text-[var(--text-strong)]">
                  {card.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{card.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="previews" className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="界面预览"
            title="首版用真实截图说话，而不是概念插画"
            description="首页主截图区只展示真正代表产品结构的 5 个业务页面。聊天页不会抢 Hero，也不会替代产品本体。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-white shadow-[var(--shadow-soft)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 48vw, 100vw"
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

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)]">
            <SectionHeading
              eyebrow="本地优先"
              title="为什么它更让人放心"
              description="本地优先并不是一句抽象口号，而是一条产品边界：核心账本数据默认保存在你的电脑里，本地查询、本地展示与本地数据管理优先。"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "核心账本数据默认保存在本地",
                "不是先上云，再跟你谈隐私",
                "AI 能力有边界，不是随意改数据",
                "查询、展示和后续操作尽量保持统一口径",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-[var(--line)] bg-[var(--surface-soft)] p-4 text-sm leading-7 text-[var(--text-strong)]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.4rem] border border-[rgba(46,107,255,0.16)] bg-[rgba(46,107,255,0.06)] p-5">
              <p className="text-sm leading-7 text-[var(--text-muted)]">
                XplorOne 采用本地优先设计。核心账本数据默认保存在你的电脑里；涉及外部 AI 模型时，具体请求边界取决于你启用的模型与功能。
              </p>
            </div>
            <details className="mt-6 rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface-soft)] p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-[var(--text-strong)]">
                展开技术细节
              </summary>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Electron 桌面应用",
                  "React + TypeScript",
                  "本地数据库",
                  "统一 service 层",
                  "Local API",
                  "只读 MCP（详细说明稍后开放）",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-[var(--text-muted)]">
                    {item}
                  </div>
                ))}
              </div>
            </details>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] border border-[rgba(46,107,255,0.16)] bg-[linear-gradient(180deg,rgba(46,107,255,0.08),rgba(255,255,255,0.96))] p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-strong)]">
                AI 与联动
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-strong)]">
                AI 帮你查、帮你看、帮你联动，而不是只会聊天
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                聊天页不进入首页主截图区，但 AI 能力会在产品后半段被认真介绍。它更像工作台的延伸：查询真实数据、分析结构，再把你带回正确页面。
              </p>
              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/90 bg-white shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/screenshots/xoplorone-chat-page.png"
                    alt="XplorOne AI 查询与联动界面"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 44vw, 100vw"
                  />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
                MCP 首页只做简要提及，详细介绍与操作步骤会放到后续二级页。
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="使用场景"
            title="不是企业大系统，而是一套轻经营者也愿意打开的工作台"
            description="首页场景表达不会把“一人公司”放到前面，而是围绕更容易代入的真实角色展开。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {scenarioCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-lg font-semibold text-[var(--text-strong)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-16 sm:pb-24 sm:pt-20">
        <Container>
          <div className="rounded-[2.2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,242,255,0.94))] p-7 shadow-[var(--shadow-soft)] sm:p-9">
            <SectionHeading
              eyebrow="FAQ 与下一步"
              title="先把关键问题说清楚，再决定什么时候开始下载体验"
              description="首版 FAQ 会保持口径谨慎，特别是在本地优先与外部 AI 边界上，不做过满承诺。"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqItems.slice(0, 4).map((item) => (
                <article key={item.question} className="rounded-[1.4rem] border border-[var(--line)] bg-white p-5">
                  <h3 className="text-base font-semibold text-[var(--text-strong)]">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.answer}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue-strong)]"
              >
                查看完整 FAQ
              </Link>
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent-warm)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm-strong)]"
              >
                查看下载进度
              </Link>
              <Link
                href="/changelog"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:bg-white"
              >
                查看更新日志
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
