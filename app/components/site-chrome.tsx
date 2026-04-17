import Link from "next/link";
import type { ReactNode } from "react";

import { footerLinks, navItems, type StatusLabel } from "../site-data";

const statusStyles: Record<StatusLabel, string> = {
  即将开放: "bg-[var(--accent-warm)]/15 text-[var(--accent-warm-strong)]",
  内测中: "bg-[var(--brand-blue)]/12 text-[var(--brand-blue-strong)]",
  规划中: "bg-[var(--accent-violet)]/14 text-[var(--accent-violet-strong)]",
  已支持: "bg-[var(--accent-green)]/14 text-[var(--accent-green-strong)]",
};

export function StatusPill({
  status,
  compact = false,
}: {
  status: StatusLabel;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium tracking-[0.02em] ${
        compact ? "px-2.5 py-1 text-[0.72rem]" : "px-3 py-1.5 text-sm"
      } ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-strong)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">{description}</p>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-[rgba(245,247,251,0.88)] backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 text-[var(--text-strong)]">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[linear-gradient(135deg,var(--brand-blue),var(--accent-warm))] text-base font-bold text-white shadow-[0_12px_30px_rgba(46,107,255,0.25)]">
            XO
          </span>
          <span className="flex flex-col">
            <span className="text-base font-semibold tracking-[0.01em]">XplorOne</span>
            <span className="text-xs text-[var(--text-soft)]">本地优先财务工作台</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--text-muted)] md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--text-strong)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/download"
          className="inline-flex items-center rounded-full bg-[var(--accent-warm)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(255,125,59,0.28)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-warm-strong)]"
        >
          Windows 版即将开放
        </Link>
      </Container>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-white/85">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.6fr_1fr] md:items-end">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-strong)]">
            XplorOne
          </p>
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-[var(--text-strong)]">
            让财务从模糊感觉，变成清晰结构。
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[var(--text-muted)]">
            首版官网聚焦产品认知、功能结构和发布节奏。下载状态、产品更新和后续页面会持续同步到这里。
          </p>
        </div>

        <div className="grid gap-3 text-sm text-[var(--text-muted)] sm:grid-cols-2">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--text-strong)]">
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-[var(--line)] py-5 text-xs text-[var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 XplorOne. 保留产品与品牌展示相关权利。</p>
        <p>产品官网首版 · Next.js + Vercel Ready</p>
      </Container>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
