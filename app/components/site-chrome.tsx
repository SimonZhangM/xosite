"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";

import { footerLinks, navItems, siteConfig, type StatusLabel } from "../site-data";

/* ===== 状态标签 ===== */

const statusStyles: Record<StatusLabel, string> = {
  即将开放: "bg-[var(--brand-warm)]/15 text-[var(--brand-warm-strong)]",
  内测中: "bg-[var(--brand-primary)]/12 text-[var(--brand-primary-strong)]",
  规划中: "bg-[#8B5CF6]/14 text-[#6D28D9]",
  已支持: "bg-[var(--brand-teal)]/14 text-[var(--brand-teal-strong)]",
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

/* ===== 容器 ===== */

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

/* ===== 区块标题 ===== */

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
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary-strong)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">{description}</p>
    </div>
  );
}

/* ===== Header（三段式：品牌 / 导航 / 操作） ===== */

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 移动端打开菜单时锁定 body 滚动 */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow duration-300 ${
        scrolled
          ? "border-b border-[var(--line)] bg-white/95 shadow-[0_1px_12px_rgba(0,0,0,0.05)] backdrop-blur-xl"
          : "border-b border-white/70 bg-[rgba(248,250,252,0.92)] backdrop-blur-xl"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-18">
        {/* 左：Logo + 品牌名 */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={closeMobile}>
          <Image
            src="/logo.png"
            alt="XplorOne"
            width={36}
            height={36}
            className="rounded-lg transition-transform duration-200 group-hover:scale-105"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-[var(--text-strong)] hidden sm:block">
            XplorOne
          </span>
        </Link>

        {/* 中：导航链接 — 桌面端可见 */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--brand-primary-strong)] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:scale-x-0 after:bg-[var(--brand-primary)] after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 右：操作区 */}
        <div className="flex items-center gap-3">
          {/* CTA 按钮 */}
          <Link
            href="/download"
            className="hidden inline-flex items-center rounded-full bg-[var(--brand-warm)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(255,125,59,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-warm-strong)] hover:shadow-[0_14px_34px_rgba(255,125,59,0.32)] sm:inline-flex"
          >
            Windows 版即将开放
          </Link>

          {/* 移动端汉堡按钮 */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden transition-colors hover:bg-[var(--surface-soft)]"
            aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          >
            <span
              className={`block h-0.5 w-4.5 bg-[var(--text-strong)] transition-all duration-200 ${
                mobileOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4.5 bg-[var(--text-strong)] transition-all duration-200 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4.5 bg-[var(--text-strong)] transition-all duration-200 ${
                mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </Container>

      {/* 移动端下拉导航面板 */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-80 border-t border-[var(--line)]" : "max-h-0"
        }`}
      >
        <Container className="py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className="block rounded-lg px-4 py-2.5 text-base font-medium text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--brand-primary-strong)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/download"
            onClick={closeMobile}
            className="mt-2 block w-full rounded-full bg-[var(--brand-warm)] px-5 py-2.5 text-center text-sm font-semibold text-white shadow-[0_10px_28px_rgba(255,125,59,0.25)]"
          >
            Windows 版即将开放
          </Link>
        </Container>
      </div>
    </header>
  );
}

/* ===== Footer（三列：品牌 / 产品 / 联系我们） ===== */

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-white/90">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        {/* 第一列：品牌 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={28} height={28} className="rounded-md opacity-80" />
            <span className="text-base font-semibold text-[var(--text-strong)]">XplorOne</span>
          </div>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text-strong)]">
            让财务从模糊感觉，变成清晰结构。
          </h3>
          <p className="max-w-md text-sm leading-7 text-[var(--text-muted)]">
            本地优先的桌面财务工作台，帮超级个体与自由职业者看懂资金与经营。
          </p>
          {/* 公众号二维码占位 */}
          <div className="mt-4 flex items-start gap-3">
            <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-xl border border-dashed border-[var(--line-strong)] bg-[var(--surface-soft)] text-xs text-[var(--text-soft)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="mb-1 h-8 w-8 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              公众号
            </div>
            <p className="pt-3 text-xs leading-6 text-[var(--text-soft)]">
              扫码关注公众号<br />获取产品更新动态
            </p>
          </div>
        </div>

        {/* 第二列：产品 */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-soft)]">产品</h4>
          <ul className="space-y-2.5">
            {footerLinks.product.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--text-muted)] transition-colors duration-150 relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-[var(--brand-primary)] after:transition-all hover:text-[var(--text-strong)] hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 第三列：联系我们 */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-soft)]">联系我们</h4>
          <ul className="space-y-2.5">
            {footerLinks.connect.map((item) => (
              <li key={item.label}>
                {item.placeholder ? (
                  <span className="text-sm text-[var(--text-soft)] cursor-default">
                    {item.label}{item.qrPlaceholder ? "" : "（即将开放）"}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-muted)] transition-colors duration-150 relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-[var(--brand-primary)] after:transition-all hover:text-[var(--text-strong)] hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* 底栏 */}
      <Container className="flex flex-col gap-2 border-t border-[var(--line)] pt-5 text-xs text-[var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 XplorOne. 保留所有权利。</p>
        <div className="flex gap-4">
          <span className="cursor-default hover:text-[var(--text-muted)] transition-colors">隐私政策</span>
          <span className="cursor-default hover:text-[var(--text-muted)] transition-colors">用户协议</span>
        </div>
      </Container>
    </footer>
  );
}

/* ===== SiteShell ===== */

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
