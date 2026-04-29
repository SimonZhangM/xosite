"use client";

import Link from "next/link";

import { ArchiveIcon, BotIcon, WalletCardsIcon } from "../components/icons";
import { Container, SiteShell, StatusPill } from "../components/site-chrome";
import { useLanguage } from "../i18n";
import { downloadPageCopy } from "../site-copy";
import { downloadLinks } from "../site-data";

export function DownloadContent() {
  return (
    <SiteShell>
      <DownloadBody />
    </SiteShell>
  );
}

function DownloadBody() {
  const { locale } = useLanguage();
  const copy = downloadPageCopy[locale];
  const eyebrowClass = "text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-warm)]";
  const quickStartDoc =
    locale === "zh"
      ? "https://github.com/SimonZhangM/XplorOne/blob/main/docs/getting-started_zh-CN.md"
      : "https://github.com/SimonZhangM/XplorOne/blob/main/docs/getting-started_en-US.md";
  const byokDoc =
    locale === "zh"
      ? "https://github.com/SimonZhangM/XplorOne/blob/main/docs/byok-setup_zh-CN.md"
      : "https://github.com/SimonZhangM/XplorOne/blob/main/docs/byok-setup_en-US.md";
  const capabilityGroups =
    locale === "zh"
      ? [
          {
            title: "账本结构",
            color: "#eb7a3b",
            icon: WalletCardsIcon,
            items: copy.currentVersion.items.slice(0, 2),
          },
          {
            title: "分析与助手",
            color: "#5f86e7",
            icon: BotIcon,
            items: copy.currentVersion.items.slice(2, 4),
          },
          {
            title: "归档与扩展",
            color: "#7b5ae5",
            icon: ArchiveIcon,
            items: copy.currentVersion.items.slice(4, 6),
          },
        ]
      : [
          {
            title: "Books & Structure",
            color: "#eb7a3b",
            icon: WalletCardsIcon,
            items: copy.currentVersion.items.slice(0, 2),
          },
          {
            title: "Analysis & Assistants",
            color: "#5f86e7",
            icon: BotIcon,
            items: copy.currentVersion.items.slice(2, 4),
          },
          {
            title: "Archive & Extensions",
            color: "#7b5ae5",
            icon: ArchiveIcon,
            items: copy.currentVersion.items.slice(4, 6),
          },
        ];
  const stepNotes =
    locale === "zh"
      ? [
          "先确认安装包和运行环境都正常。",
          "从一个空账本开始会更容易理解结构。",
          "先看首页和报表，比直接堆数据更容易上手。",
          "只有需要更深入分析时，再接入自己的模型。",
        ]
      : [
          "Start by making sure the installer and runtime are working normally.",
          "A fresh book is the easiest way to understand the structure.",
          "Review Home and Reports before you add too much data.",
          "Only connect your own model when you need deeper analysis.",
        ];
  const optionalLabel = locale === "zh" ? "可选" : "Optional";

  return (
    <>
      <section className="pb-20 pt-14 sm:pb-24 sm:pt-18">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill status={copy.status} />
              <span className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1.5 text-sm text-[var(--text-muted)]">
                {copy.statusNote}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--text-strong)]">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
              {copy.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={downloadLinks.windows}
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent-warm)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm-strong)]"
              >
                {copy.buttons.progress}
              </Link>
              <Link
                href={downloadLinks.github}
                className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue-strong)]"
              >
                {copy.buttons.github}
              </Link>
              <Link
                href={downloadLinks.changelog}
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:bg-white"
              >
                {copy.buttons.changelog}
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[rgba(46,107,255,0.16)] bg-[linear-gradient(180deg,rgba(46,107,255,0.08),rgba(255,255,255,0.96))] p-7 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-strong)]">
              {copy.supportEyebrow}
            </p>
            <div className="mt-6 space-y-4">
              {copy.supportItems.map(([label, status]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-[1.2rem] border border-white/80 bg-white/88 px-4 py-3"
                >
                  <span className="text-sm font-medium text-[var(--text-strong)]">{label}</span>
                  <StatusPill status={status} compact />
                </div>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-8">
            <p className={eyebrowClass}>
              {copy.currentVersion.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-strong)]">
              {copy.currentVersion.title}
            </h2>
            <div className="mt-6 space-y-3">
              {capabilityGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <article
                    key={group.title}
                    className="rounded-[1.35rem] border border-[var(--line)] bg-[var(--surface-soft)] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                        style={{ color: group.color, borderColor: `${group.color}33` }}
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text-strong)]">
                        {group.title}
                      </h3>
                    </div>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-white/88 bg-white px-3 py-3 text-sm leading-6 text-[var(--text-muted)] text-wrap-pretty"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-8">
            <p className={eyebrowClass}>
              {copy.quickStart.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-strong)]">
              {copy.quickStart.title}
            </h2>
            <ol className="relative mt-6 space-y-3">
              <div className="absolute bottom-4 left-[1.15rem] top-4 w-px bg-[var(--line)]" />
              {copy.quickStart.steps.map((step, index) => (
                <li key={step} className="relative pl-14">
                  <span className="absolute left-0 top-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(239,127,45,0.18)] bg-white text-xs font-semibold text-[var(--brand-warm)] shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                    {index + 1}
                  </span>
                  <div
                    className={`rounded-[1.2rem] border p-4 ${
                      index === copy.quickStart.steps.length - 1
                        ? "border-dashed border-[rgba(239,127,45,0.24)] bg-[rgba(239,127,45,0.05)]"
                        : "border-[var(--line)] bg-[var(--surface-soft)]"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-base font-semibold leading-7 text-[var(--text-strong)]">
                        {step}
                      </h3>
                      {index === copy.quickStart.steps.length - 1 ? (
                        <span className="rounded-full border border-[rgba(239,127,45,0.20)] bg-white px-2.5 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[var(--brand-warm)]">
                          {optionalLabel}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                      {stepNotes[index]}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={quickStartDoc}
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent-warm)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm-strong)]"
              >
                {copy.quickStart.buttons.gettingStarted}
              </Link>
              <Link
                href={byokDoc}
                className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--text-strong)] transition hover:border-[var(--brand-warm)] hover:text-[var(--brand-warm-strong)]"
              >
                {copy.quickStart.buttons.byok}
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center rounded-full px-1 py-2.5 text-sm font-semibold text-[var(--text-muted)] transition hover:text-[var(--text-strong)]"
              >
                {copy.quickStart.buttons.privacy}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="github-status" className="pb-20 sm:pb-24">
        <Container>
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9">
            <p className={eyebrowClass}>
              {copy.github.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-strong)]">
              {copy.github.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-muted)]">
              {copy.github.description}
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
              {copy.github.note}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
