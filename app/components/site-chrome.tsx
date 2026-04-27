"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

import {
  emitPreferenceChange,
  LanguageProvider,
  languageOptions,
  preferenceEventName,
  setStoredLanguage,
  useLanguage,
} from "../i18n";
import { commonCopy } from "../site-copy";
import type { StatusLabel } from "../site-data";

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
  const { statusText } = useLanguage();

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium tracking-[0.02em] ${
        compact ? "px-2.5 py-1 text-[0.72rem]" : "px-3 py-1.5 text-sm"
      } ${statusStyles[status]}`}
    >
      {statusText(status)}
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
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-warm)]">
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
  const { locale } = useLanguage();
  const copy = commonCopy[locale];

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
          ? "border-b border-[var(--line)] bg-[#FEFEFD] shadow-[0_1px_12px_rgba(0,0,0,0.05)]"
          : "border-b border-white/70 bg-[#FEFEFD]"
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
          {copy.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--brand-warm-strong)] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:scale-x-0 after:bg-[var(--brand-warm)] after:transition-transform after:duration-200 hover:after:scale-x-100"
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
            {copy.headerCta}
          </Link>

          {/* 移动端汉堡按钮 */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden transition-colors hover:bg-[var(--surface-soft)]"
            aria-label={mobileOpen ? copy.mobileMenuClose : copy.mobileMenuOpen}
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
          {copy.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className="block rounded-lg px-4 py-2.5 text-base font-medium text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--brand-warm-strong)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/download"
            onClick={closeMobile}
            className="mt-2 block w-full rounded-full bg-[var(--brand-warm)] px-5 py-2.5 text-center text-sm font-semibold text-white shadow-[0_10px_28px_rgba(255,125,59,0.25)]"
          >
            {copy.headerCta}
          </Link>
        </Container>
      </div>
    </header>
  );
}

/* ===== Footer preferences ===== */

type AppearanceMode = "dark" | "light" | "system";

function subscribePreference(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(preferenceEventName, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(preferenceEventName, callback);
  };
}

function getStoredAppearance() {
  const savedAppearance = window.localStorage.getItem("xosite-appearance") as AppearanceMode | null;
  return savedAppearance && ["dark", "light", "system"].includes(savedAppearance)
    ? savedAppearance
    : "system";
}

function getServerAppearance() {
  return "system" as AppearanceMode;
}

function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.2 2.1 3.3 4.9 3.3 8.5s-1.1 6.4-3.3 8.5" />
      <path d="M12 3.5C9.8 5.6 8.7 8.4 8.7 12s1.1 6.4 3.3 8.5" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6.5 12.5 3.3 3.2 7.7-8.2" />
    </svg>
  );
}

function FooterPreferences() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const { locale, language } = useLanguage();
  const copy = commonCopy[locale];
  const appearance = useSyncExternalStore(
    subscribePreference,
    getStoredAppearance,
    getServerAppearance,
  );

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const resolved = appearance === "system" ? (media.matches ? "dark" : "light") : appearance;
      root.dataset.appearance = appearance;
      root.dataset.resolvedTheme = resolved;
    };

    applyTheme();
    media.addEventListener("change", applyTheme);

    return () => media.removeEventListener("change", applyTheme);
  }, [appearance]);

  const chooseLanguage = (option: (typeof languageOptions)[number]) => {
    setStoredLanguage(option.code);
    setLanguageOpen(false);
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative">
        {languageOpen && (
          <div className="absolute bottom-[calc(100%+0.65rem)] left-0 w-52 overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_18px_46px_rgba(15,23,42,0.16)]">
            {languageOptions.map((option) => {
              const isActive = option.code === language.code;

              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => chooseLanguage(option)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm transition-colors ${
                    isActive ? "bg-[rgba(239,127,45,0.08)] text-[var(--brand-warm-strong)]" : "text-[var(--text-strong)] hover:bg-[var(--surface-soft)]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-semibold tracking-[0.08em]">{option.region}</span>
                    <span className="text-base">{option.label}</span>
                  </span>
                  {isActive && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-warm)] text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
        <button
          type="button"
          onClick={() => setLanguageOpen((value) => !value)}
          className={`inline-flex h-11 items-center gap-2 rounded-xl border bg-white px-4 text-sm font-semibold text-[var(--text-strong)] shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition-colors ${
            languageOpen ? "border-[rgba(239,127,45,0.34)]" : "border-[var(--line)] hover:border-[var(--line-strong)]"
          }`}
          aria-expanded={languageOpen}
          aria-label={copy.languageAria}
        >
          <GlobeIcon className="h-4.5 w-4.5 text-[var(--text-soft)]" />
          {language.short}
          <span className={`text-[var(--text-soft)] transition-transform ${languageOpen ? "rotate-180" : ""}`}>⌄</span>
        </button>
      </div>

      <div className="inline-flex h-11 items-center gap-1 rounded-xl border border-[var(--line)] bg-white p-1 shadow-[0_8px_22px_rgba(15,23,42,0.06)]">
        {copy.appearanceOptions.map((option) => {
          const isActive = option.value === appearance;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                window.localStorage.setItem("xosite-appearance", option.value);
                emitPreferenceChange();
              }}
              className={`h-9 rounded-lg px-3 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-white text-[var(--text-strong)] shadow-[0_6px_16px_rgba(15,23,42,0.10)] ring-1 ring-[var(--line)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-strong)]"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FeedbackPopover() {
  const [open, setOpen] = useState(false);
  const { locale } = useLanguage();
  const copy = commonCopy[locale].footer;

  return (
    <div className="relative inline-block">
      {open && (
        <div className="absolute bottom-[calc(100%+0.65rem)] left-0 z-10 flex w-72 items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-4 shadow-[0_18px_46px_rgba(15,23,42,0.16)]">
          <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-xl border border-dashed border-[var(--line-strong)] bg-[var(--surface-soft)] text-xs text-[var(--text-soft)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="mb-1 h-8 w-8 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            {copy.feedbackQr}
          </div>
          <p
            className="text-xs leading-6 text-[var(--text-soft)]"
            dangerouslySetInnerHTML={{ __html: copy.feedbackText }}
          />
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="text-sm text-[var(--text-muted)] transition-colors duration-150 relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-[var(--brand-warm)] after:transition-all hover:text-[var(--text-strong)] hover:after:w-full"
        aria-expanded={open}
      >
        {copy.connectLinks.find((item) => "feedbackPopover" in item && item.feedbackPopover)?.label ?? "Feedback"}
      </button>
    </div>
  );
}

/* ===== Footer（三列：品牌 / 产品 / 联系我们） ===== */

export function SiteFooter() {
  const { locale } = useLanguage();
  const copy = commonCopy[locale].footer;

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
            {copy.tagline}
          </h3>
          <p className="max-w-md text-sm leading-7 text-[var(--text-muted)]">
            {copy.description}
          </p>
        </div>

        {/* 第二列：产品 */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-soft)]">{copy.productTitle}</h4>
          <ul className="space-y-2.5">
            {copy.productLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--text-muted)] transition-colors duration-150 relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-[var(--brand-warm)] after:transition-all hover:text-[var(--text-strong)] hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 第三列：联系我们 */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-soft)]">{copy.contactTitle}</h4>
          <ul className="space-y-2.5">
            {copy.connectLinks.map((item) => (
              <li key={item.label}>
                {"feedbackPopover" in item && item.feedbackPopover ? (
                  <FeedbackPopover />
                ) : "placeholder" in item && item.placeholder ? (
                  <span className="text-sm text-[var(--text-soft)] cursor-default">
                    {item.label} ({copy.placeholderSuffix})
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-muted)] transition-colors duration-150 relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-[var(--brand-warm)] after:transition-all hover:text-[var(--text-strong)] hover:after:w-full"
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
      <Container className="flex flex-col gap-5 border-t border-[var(--line)] py-6 text-xs text-[var(--text-soft)] lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p>{copy.copyright}</p>
          <div className="flex gap-4">
            <span className="cursor-default hover:text-[var(--text-muted)] transition-colors">{copy.privacy}</span>
            <span className="cursor-default hover:text-[var(--text-muted)] transition-colors">{copy.terms}</span>
          </div>
        </div>
        <FooterPreferences />
      </Container>
    </footer>
  );
}

/* ===== SiteShell ===== */

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </LanguageProvider>
  );
}
