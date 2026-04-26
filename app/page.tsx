import Image from "next/image";
import Link from "next/link";

import {
  ArchiveIcon,
  ArrowRightIcon,
  BotIcon,
  ChartLineIcon,
  DatabaseIcon,
  LinkFlowIcon,
  LockKeyIcon,
  PlugIcon,
  ShieldIcon,
  TargetIcon,
  WalletCardsIcon,
} from "./components/icons";
import { Container, SiteShell, StatusPill } from "./components/site-chrome";
import { PreviewSwitcher } from "./components/preview-switcher";
import { ScrollAnimator } from "./components/scroll-animate";
import {
  aiFlowSteps,
  capabilityGroups,
  compareRows,
  faqItems,
  galleryItems,
  problemCards,
  siteConfig,
  trustBoundaries,
} from "./site-data";

const iconMap = {
  archive: ArchiveIcon,
  bot: BotIcon,
  chart: ChartLineIcon,
  database: DatabaseIcon,
  link: LinkFlowIcon,
  lock: LockKeyIcon,
  plug: PlugIcon,
  shield: ShieldIcon,
  target: TargetIcon,
  wallet: WalletCardsIcon,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-warm)]">
      {children}
    </p>
  );
}

function IconBox({
  icon,
  className = "",
  color = "var(--brand-warm)",
}: {
  icon: keyof typeof iconMap;
  className?: string;
  color?: string;
}) {
  const Icon = iconMap[icon];

  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)] ${className}`}
      style={{ color, borderColor: `${color}33` }}
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}

const trustBoundaryColors = ["#e95556", "#eb7a3b", "#7b5ae5", "#5f86e7"];

export default function HomePage() {
  return (
    <SiteShell>
      <ScrollAnimator>
        <section
          id="hero"
          className="relative isolate overflow-hidden bg-[#0d2238] py-16 text-white sm:py-20 lg:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(20,184,141,0.16),transparent_28%),radial-gradient(circle_at_78%_8%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(239,127,45,0.20),transparent_28%)]" />
          <Container className="relative grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <StatusPill status={siteConfig.status} />
                <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-sm font-medium text-white/70">
                  {siteConfig.version}
                </span>
              </div>

              <h1 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[4.5rem]">
                {siteConfig.heroTitle}
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-white/70">
                {siteConfig.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/download"
                  className="group inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand-warm)] px-6 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(255,125,59,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-warm-strong)]"
                >
                  Windows 版即将开放
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/#previews"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/8 px-6 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/12"
                >
                  查看真实界面
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-2">
                {siteConfig.heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 font-mono text-xs text-white/72"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Local ledger stays on device", "AI reads, never rewrites"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 font-mono text-xs text-white/72"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/14 bg-white shadow-[0_36px_110px_rgba(0,0,0,0.38)]">
                <div className="relative aspect-[1799/1305] overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/screenshots/xoplorone-workbench.png"
                    alt="XplorOne 工作台首页截图"
                    fill
                    priority
                    className="scale-[1.006] object-cover object-[center_top]"
                    sizes="(min-width: 1024px) 56vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 sm:py-20 animate-on-scroll">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <SectionLabel>Trust Boundary</SectionLabel>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
                  本地优先不是口号，是产品边界
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-muted)]">
                  XplorOne 先把账本、密钥、备份和 AI 权限说清楚，再谈自动化和智能分析。
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {trustBoundaries.map((item, index) => (
                  <article key={item.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-5">
                    <IconBox icon={item.icon as keyof typeof iconMap} color={trustBoundaryColors[index]} />
                    <h3 className="mt-5 text-lg font-semibold text-[var(--text-strong)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f7faff] py-16 sm:py-20 animate-on-scroll">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <SectionLabel>User Questions</SectionLabel>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
                  你真正关心的，不只是记账
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                  对超级个体和自由职业者来说，财务焦虑往往来自“感觉模糊”。官网需要先把这种模糊说中，再给出工作台的答案。
                </p>
                <div className="mt-6.5 overflow-hidden rounded-2xl border border-[var(--line)] bg-white">
                  {compareRows.map((row) => (
                    <div key={row.dimension} className="grid gap-3 border-b border-[var(--line)] p-4.5 last:border-b-0 sm:grid-cols-[10rem_1fr]">
                      <span className="text-sm font-semibold text-[var(--text-strong)]">{row.dimension}</span>
                      <p className="text-sm leading-7 text-[var(--text-muted)] sm:-ml-2.5">
                        {row.value}
                        <span className="mx-2 text-[var(--brand-warm)]">→</span>
                        <span className="font-semibold text-[var(--text-strong)]">{row.xplorone}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute bottom-8 left-4 top-8 w-px bg-[var(--line-strong)]" />
                <div className="space-y-4">
                  {problemCards.map((item, index) => (
                    <article key={item.text} className="relative pl-12">
                      <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(239,127,45,0.20)] bg-white text-sm font-semibold text-[var(--brand-warm)] shadow-[var(--shadow-soft)]">
                        {index + 1}
                      </span>
                      <div className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-[var(--shadow-soft)]">
                        <h3 className="text-base font-semibold leading-7 text-[var(--text-strong)]">{item.text}</h3>
                        <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="capabilities" className="bg-white py-16 sm:py-20 animate-on-scroll">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Capability Map</SectionLabel>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
                工作台能力分两层：先结构，再联动
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                这能让页面从“功能清单”变成“产品架构”：用户知道每个能力为什么存在，也知道 AI 该站在什么位置。
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {capabilityGroups.map((group) => (
                <section key={group.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-6">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-warm)]">
                    {group.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-strong)]">{group.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{group.description}</p>
                  <div className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <article key={item.title} className="flex gap-4 rounded-xl border border-[var(--line)] bg-white p-4">
                        <IconBox
                          icon={item.icon as keyof typeof iconMap}
                          className="h-10 w-10"
                          color={item.iconColor}
                        />
                        <div>
                          <h4 className="text-base font-semibold text-[var(--text-strong)]">{item.title}</h4>
                          <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#0d2238] py-16 text-white sm:py-20 animate-on-scroll">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.22fr] lg:items-center">
              <div>
                <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-warm)]">
                  AI Flow
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  AI 不漂在外面，它回到真实页面里
                </h2>
                <p className="mt-4 text-base leading-8 text-white/68">
                  新版表达会把 AI 从“聊天窗口噱头”降落到工作流：读结构、给判断、带用户回到页面和筛选结果。
                </p>
                <div className="mt-8 space-y-3">
                  {aiFlowSteps.map((step, index) => (
                    <article key={step.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/6 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#0d2238]">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold">{step.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-white/64">{step.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/14 bg-white shadow-[0_32px_90px_rgba(0,0,0,0.34)]">
                <div className="relative aspect-[1799/1305] overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/screenshots/xoplorone-chat-page.png"
                    alt="XplorOne AI 助手页面截图"
                    fill
                    className="scale-[1.006] object-cover object-[center_top]"
                    sizes="(min-width: 1024px) 54vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="previews" className="bg-[#f7faff] py-16 sm:py-20 animate-on-scroll">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Product Browser</SectionLabel>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
                真实页面，比概念图更能说明这是什么产品
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                用真实界面承接信任。每张截图都对应一个核心使用场景，而不是装饰性的演示图。
              </p>
            </div>
            <div className="mt-10">
              <PreviewSwitcher items={galleryItems} />
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 sm:py-20 animate-on-scroll">
          <Container>
            <div className="grid gap-5 rounded-2xl border border-[var(--line)] bg-[var(--text-strong)] p-6 text-white shadow-[var(--shadow-lift)] lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/56">Release Status</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">Windows 版整理中，官网先承接产品理解</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">
                  当前阶段不制造假的下载入口，先把定位、截图、FAQ 和更新口径做好，再开放安装包。
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/download"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--brand-warm)] px-5 text-sm font-semibold text-white transition hover:bg-[var(--brand-warm-strong)]"
                >
                  查看下载进度
                </Link>
                <Link
                  href="/changelog"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/16 bg-white/8 px-5 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  查看更新日志
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f7faff] pb-20 pt-16 sm:pb-24 sm:pt-20 animate-on-scroll">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
                开始使用之前，先把关键边界说清楚
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {faqItems.slice(0, 4).map((item) => (
                <article key={item.question} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                  <h3 className="text-base font-semibold text-[var(--text-strong)]">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.answer}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/faq"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-5 text-sm font-semibold text-[var(--text-strong)] transition hover:border-[var(--brand-warm)] hover:text-[var(--brand-warm-strong)]"
              >
                查看完整 FAQ
              </Link>
            </div>
          </Container>
        </section>
      </ScrollAnimator>
    </SiteShell>
  );
}
