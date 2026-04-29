"use client";

import { Container, SectionHeading, SiteShell, StatusPill } from "../components/site-chrome";
import { useLanguage } from "../i18n";
import { changelogPageCopy } from "../site-copy";

type ReleaseNote = (typeof changelogPageCopy.zh.releases)[number] | (typeof changelogPageCopy.en.releases)[number];
const eyebrowClass = "text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-warm)]";

function ReleaseNoteBlock({
  release,
  featured = false,
  latestEyebrow,
  releaseEyebrow,
  summaryLabel,
}: {
  release: ReleaseNote;
  featured?: boolean;
  latestEyebrow: string;
  releaseEyebrow: string;
  summaryLabel: string;
}) {
  return (
    <section className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div className="max-w-3xl">
          <p className={eyebrowClass}>
            {featured ? latestEyebrow : releaseEyebrow}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text-strong)]">
              {release.version}：{release.focus}
            </h2>
            {featured ? <StatusPill status={release.status} compact /> : null}
          </div>
          <p className="mt-3 text-sm font-medium text-[var(--text-soft)]">{release.date}</p>
        </div>
      </div>

      <div className="mt-7 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-soft)] p-5">
        <p className="text-base leading-8 text-[var(--text-muted)]">
          <span className="font-semibold text-[var(--text-strong)]">{summaryLabel}</span> {release.intro}
        </p>
      </div>

      <div className="mt-8 space-y-7">
        {release.categories.map((category) => (
          <article key={category.label} className="border-t border-[var(--line)] pt-6 first:border-t-0 first:pt-0">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-[var(--text-strong)]">
              <span aria-hidden>{category.emoji}</span>
              {category.label}
            </h3>
            <ul className="mt-3 space-y-1 text-sm leading-6 text-[var(--text-muted)]">
              {category.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="shrink-0 text-[var(--brand-orange)]">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ChangelogBody() {
  const { locale } = useLanguage();
  const copy = changelogPageCopy[locale];

  return (
    <section className="pb-20 pt-14 sm:pb-24 sm:pt-18">
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={`${copy.title} ${copy.releases[0]?.version ?? ""}`}
          description={copy.description}
          align="center"
        />

        <div className="mx-auto mt-12 max-w-5xl space-y-10">
          <section>
            <div className="space-y-8">
              {copy.releases.map((release, index) => (
                <ReleaseNoteBlock
                  key={release.version}
                  release={release}
                  featured={index === 0}
                  latestEyebrow={copy.latestEyebrow}
                  releaseEyebrow={copy.releaseEyebrow}
                  summaryLabel={copy.summaryLabel}
                />
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-8">
            <div className="max-w-3xl">
              <p className={eyebrowClass}>{copy.historyEyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-strong)]">{copy.historyTitle}</h2>
              <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">{copy.historyDescription}</p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {copy.series.map((series) => (
                <article key={series.title} className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-soft)] p-5">
                  <h3 className="grid min-h-[4.75rem] grid-cols-[auto_1fr] items-start gap-2 text-xl font-semibold text-[var(--text-strong)]">
                    <span aria-hidden className="pt-1 leading-none">{series.emoji}</span>
                    <span className="block leading-[1.2]">{series.title}</span>
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{series.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--text-muted)]">
                    {series.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}

export function ChangelogContent() {
  return (
    <SiteShell>
      <ChangelogBody />
    </SiteShell>
  );
}
