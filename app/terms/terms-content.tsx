"use client";

import { Container, SiteShell } from "../components/site-chrome";
import { useLanguage } from "../i18n";

const copy = {
  zh: {
    eyebrow: "Terms",
    title: "用户协议",
    description:
      "这份页面用于说明 XplorOne 当前发布版本的基本使用边界。更完整的法律文本会随正式商业化和授权策略继续补充。",
    sections: [
      {
        title: "软件属性",
        body: "XplorOne 是专有软件，并非以开源许可证发布。公开 GitHub 仓库主要用于版本发布、文档说明、路线更新与社区反馈，不代表完整源代码开放。",
      },
      {
        title: "下载安装",
        body: "请优先从 XplorOne 官网或官方 GitHub Release 获取 Windows 安装包。不要把 GitHub Release 中的 Source code 压缩包当作安装包使用。",
      },
      {
        title: "用户责任",
        body: "您需要自行确认数据录入、备份、模型 API Key、第三方模型服务和本机环境的安全性。任何写入动作都应在确认后执行。",
      },
      {
        title: "AI 辅助边界",
        body: "AI 助手用于分析、解释和对话辅助，不构成财务、税务、法律或投资建议。涉及外部模型时，请同时遵守对应模型服务商的条款。",
      },
      {
        title: "反馈与联系",
        body: "安装问题和 Bug 可通过 GitHub Issues 提交；想法、建议和使用反馈可通过 GitHub Discussions 提交；商务、合作和授权可联系 simonzhang2026@163.com。",
      },
    ],
  },
  en: {
    eyebrow: "Terms",
    title: "Terms of Use",
    description:
      "This page describes the basic usage boundaries for the current XplorOne release. More complete legal terms will be added as commercialization and licensing become clearer.",
    sections: [
      {
        title: "Software status",
        body: "XplorOne is proprietary software and is not released under an open-source license. The public GitHub repository is mainly for releases, documentation, roadmap updates, and community feedback; it does not mean the full source code is open.",
      },
      {
        title: "Download and installation",
        body: "Use the XplorOne website or official GitHub Release for the Windows installer. Do not use the Source code archive from GitHub Releases as the installer.",
      },
      {
        title: "User responsibility",
        body: "You are responsible for data entry, backups, model API keys, third-party model services, and local device security. Any write action should be performed only after confirmation.",
      },
      {
        title: "AI assistance boundary",
        body: "AI Assistant supports analysis, explanation, and conversation. It is not financial, tax, legal, or investment advice. When external models are involved, the provider's own terms also apply.",
      },
      {
        title: "Feedback and contact",
        body: "Use GitHub Issues for installation problems and bugs, GitHub Discussions for ideas and product feedback, and simonzhang2026@163.com for business, cooperation, and licensing.",
      },
    ],
  },
} as const;

export function TermsContent() {
  return (
    <SiteShell>
      <TermsBody />
    </SiteShell>
  );
}

function TermsBody() {
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
