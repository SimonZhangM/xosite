"use client";

import { Container, SectionHeading, SiteShell } from "../components/site-chrome";
import { useLanguage } from "../i18n";
import { faqPageCopy } from "../site-copy";

export function FaqContent() {
  return (
    <SiteShell>
      <FaqBody />
    </SiteShell>
  );
}

function FaqBody() {
  const { locale } = useLanguage();
  const copy = faqPageCopy[locale];

  return (
    <>
      <section className="pb-20 pt-14 sm:pb-24 sm:pt-18">
        <Container>
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
            align="center"
          />

          <div className="mt-12 grid gap-5">
            {copy.items.map((item) => (
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
              {copy.feedbackEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-strong)]">
              {copy.feedbackTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-muted)]">
              {copy.feedbackDescription}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
