import { Container, SectionHeading, SiteShell } from "../components/site-chrome";
import { faqItems } from "../site-data";

export const metadata = {
  title: "FAQ | XplorOne",
  description: "查看 XplorOne 的常见问题，包括适合谁、本地优先边界、AI 请求边界和后续发布安排。",
};

export default function FaqPage() {
  return (
    <SiteShell>
      <section className="pb-20 pt-14 sm:pb-24 sm:pt-18">
        <Container>
          <SectionHeading
            eyebrow="常见问题"
            title="把边界说清楚，比一句口号更重要"
            description="FAQ 首版优先回答用户真正关心的事：适合谁、和普通记账软件有什么不同、本地优先意味着什么，以及外部 AI 请求边界怎么理解。"
            align="center"
          />

          <div className="mt-12 grid gap-5">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.8rem] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-7"
              >
                <h2 className="text-xl font-semibold tracking-tight text-[var(--text-strong)]">{item.question}</h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="feedback" className="pb-20 sm:pb-24">
        <Container>
          <div className="rounded-[2rem] border border-[rgba(46,107,255,0.16)] bg-[linear-gradient(180deg,rgba(46,107,255,0.08),rgba(255,255,255,0.96))] p-7 shadow-[var(--shadow-soft)] sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-strong)]">
              反馈入口
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-strong)]">
              当前先通过官网更新与后续仓库入口承接反馈
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-muted)]">
              首版还没有单独的邮件表单或等待名单系统，因此这里不会放一个无法承接的假入口。后续公开仓库后，反馈会优先通过 GitHub 和更新日志入口同步承接。
            </p>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
