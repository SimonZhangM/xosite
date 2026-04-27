import { Container, SectionHeading, SiteShell, StatusPill } from "../components/site-chrome";
import { currentPhaseSoftwareReleases, siteConfig, softwareSeriesHighlights } from "../site-data";

export const metadata = {
  title: "更新日志 | XplorOne",
  description: "查看 XplorOne 软件版本更新、发布重点与历史开发进展。",
};

type ReleaseNote = (typeof currentPhaseSoftwareReleases)[number];

function ReleaseNoteBlock({ release, featured = false }: { release: ReleaseNote; featured?: boolean }) {
  return (
    <section className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--brand-orange)]">
            {featured ? "Latest Release" : "Release Notes"}
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
          <span className="font-semibold text-[var(--text-strong)]">[更新摘要]</span> {release.intro}
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

function CurrentPhaseReleases() {
  return (
    <section>
      <div className="max-w-3xl">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--brand-orange)]">Current 0.3 Stage</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-strong)]">当前阶段详细更新</h2>
        <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">
          0.3.x 仍属于当前开发阶段，因此从 v0.3.1 到最新版本，全部按完整分类说明展示。
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {currentPhaseSoftwareReleases.map((release, index) => (
          <ReleaseNoteBlock key={release.version} release={release} featured={index === 0} />
        ))}
      </div>
    </section>
  );
}

function SeriesHighlights() {
  return (
    <section className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-8">
      <div className="max-w-3xl">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--brand-orange)]">History Highlights</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-strong)]">历史开发信息搬迁</h2>
        <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">
          第一次搬迁时，除了最新版本，也把 CHANGELOG 中的 0.3、0.2 与早期开发脉络整理到官网。
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {softwareSeriesHighlights.map((series) => (
          <article key={series.title} className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-soft)] p-5">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-[var(--text-strong)]">
              <span aria-hidden>{series.emoji}</span>
              {series.title}
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
  );
}

export default function ChangelogPage() {
  return (
    <SiteShell>
      <section className="pb-20 pt-14 sm:pb-24 sm:pt-18">
        <Container>
          <SectionHeading
            eyebrow="Release Notes"
            title={`软件更新日志 ${siteConfig.version}`}
            description="从软件发布历史中提取最新版本信息，并把关键开发脉络整理成中文官网摘要。"
            align="center"
          />

          <div className="mx-auto mt-12 max-w-5xl space-y-10">
            <CurrentPhaseReleases />
            <SeriesHighlights />
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
