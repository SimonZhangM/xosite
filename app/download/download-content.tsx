"use client";

import Link from "next/link";

import { Container, SectionHeading, SiteShell, StatusPill } from "../components/site-chrome";
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
                href={downloadLinks.progress}
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

      <section id="release-status" className="pb-20 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow={copy.progress.eyebrow}
            title={copy.progress.title}
            description={copy.progress.description}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {copy.progress.cards.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.7rem] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold text-[var(--text-strong)]">{item.title}</h2>
                  <StatusPill status={item.status} compact />
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="github-status" className="pb-20 sm:pb-24">
        <Container>
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-strong)]">
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
