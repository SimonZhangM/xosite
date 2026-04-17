import { Container, SectionHeading, SiteShell, StatusPill } from "../components/site-chrome";
import { productUpdates, websiteUpdates } from "../site-data";

export const metadata = {
  title: "更新日志 | XplorOne",
  description: "查看 XplorOne 官网更新和产品更新，了解当前发布进度与功能状态。",
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
            eyebrow="更新日志"
            title="官网更新和产品更新，从第一天开始分开记录"
            description="用户来到 changelog 时，应该一眼分清“这是官网改了”还是“这是产品状态变了”。首版就按两条时间线分开维护。"
            align="center"
          />

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            <Timeline
              title="官网更新"
              description="记录站点结构、页面、视觉和发布流程层面的变化。"
              items={websiteUpdates}
            />
            <Timeline
              title="产品更新"
              description="记录产品能力基线、版本状态与下载发布进度。"
              items={productUpdates}
            />
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
