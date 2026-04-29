"use client";

import { Container, SiteShell } from "../components/site-chrome";
import { useLanguage } from "../i18n";

const copy = {
  zh: {
    eyebrow: "Privacy",
    title: "隐私政策",
    description:
      "这份页面用于说明 XplorOne 官网与桌面软件当前的隐私处理边界。它会随着产品能力和发布形态继续更新。",
    sections: [
      {
        title: "本地优先",
        body: "XplorOne 的核心账本数据默认保存在您的电脑里。本地记账、账本管理、账户分类、流水、报表、基础查询、备份与恢复等能力，不需要把账本发送到 XplorOne 服务器。",
      },
      {
        title: "外部 AI 与 BYOK",
        body: "当您主动启用 AI 助手并配置自己的模型 API Key 时，XplorOne 可能会把完成该次 AI 任务所需的相关信息发送给您选择的模型服务。具体请求边界取决于您启用的模型与功能。",
      },
      {
        title: "密钥与本地保护",
        body: "模型密钥会尽量交由系统侧能力保护和管理，减少重复暴露。请您仍然妥善保管您自己的 API Key、安装包来源和本地备份文件。",
      },
      {
        title: "MCP 与本地接口",
        body: "本地 API 与只读 MCP 属于进阶能力。相关 token 和连接权限应只授予可信工具；只读边界不代表可以忽视本机环境安全。",
      },
      {
        title: "反馈与仓库",
        body: "当您通过 GitHub Issues、Discussions 或邮件提交反馈时，您主动提供的内容会按对应平台和邮件服务的规则处理。请不要在公开反馈中提交私密账本、密钥或个人敏感信息。",
      },
    ],
  },
  en: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    description:
      "This page explains the current privacy boundaries of the XplorOne website and desktop app. It will evolve as the product and release model evolve.",
    sections: [
      {
        title: "Local-first by default",
        body: "Core book data is stored on your computer by default. Local bookkeeping, books, accounts, categories, transactions, reports, basic queries, backup, and restore do not require sending your ledger to XplorOne servers.",
      },
      {
        title: "External AI and BYOK",
        body: "When you actively enable AI Assistant and configure your own model API key, XplorOne may send the information required for that AI task to the model service you choose. The exact boundary depends on the model and feature you enable.",
      },
      {
        title: "Keys and local protection",
        body: "Model keys are handled through system-side protection where possible to reduce repeated exposure. You should still protect your API keys, installer source, and local backup files carefully.",
      },
      {
        title: "MCP and local interfaces",
        body: "Local API and read-only MCP are advanced capabilities. Tokens and connection permissions should only be granted to trusted tools; read-only boundaries do not replace local device security.",
      },
      {
        title: "Feedback and repository",
        body: "When you submit feedback through GitHub Issues, Discussions, or email, the content you provide is handled under those platforms and services. Do not post private ledgers, keys, or sensitive personal data in public feedback.",
      },
    ],
  },
} as const;

export function PrivacyContent() {
  return (
    <SiteShell>
      <PrivacyBody />
    </SiteShell>
  );
}

function PrivacyBody() {
  const { locale } = useLanguage();
  const page = copy[locale];

  return (
    <section className="pb-20 pt-14 sm:pb-24 sm:pt-18">
      <Container className="max-w-4xl">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--brand-orange)]">
          {page.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text-strong)]">
          {page.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">{page.description}</p>

        <div className="mt-10 space-y-5">
          {page.sections.map((section) => (
            <article key={section.title} className="rounded-[1.5rem] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl font-semibold text-[var(--text-strong)]">{section.title}</h2>
              <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">{section.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
