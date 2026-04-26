import { Container, SectionHeading, SiteShell, StatusPill } from "../components/site-chrome";
import { productUpdates } from "../site-data";

export const metadata = {
  title: "更新日志 | XplorOne",
  description: "查看 XplorOne 软件发展进展，了解当前发布进度与功能状态。",
};

function Timeline({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: { date: string; title: string; summary: string; status: "即将开放" | "内测中" | "规划中" | "已支持" }[];
}) {
  return (
    <section className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-strong)]">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{description}</p>
      </div>
      <div className="mt-8 space-y-5">
        {items.map((item) => (
          <article key={`${title}-${item.title}`} className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-soft)] p-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-[var(--text-soft)]">{item.date}</span>
              <StatusPill status={item.status} compact />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[var(--text-strong)]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.summary}</p>
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
            eyebrow="Release Progress"
            title="软件发展进展"
            description="记录产品能力基线、版本状态与下载发布进度。"
            align="center"
          />

          <div className="mx-auto mt-12 max-w-4xl">
            <Timeline
              title="软件发展进展"
              description="记录产品能力基线、版本状态与下载发布进度。"
              items={productUpdates}
            />
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
