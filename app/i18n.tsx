"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

import type { StatusLabel } from "./site-data";

export type LanguageCode = "zh-CN" | "en-US";
export type LocaleKey = "zh" | "en";
export type Localized<T> = Record<LocaleKey, T>;

export type LanguageOption = {
  code: LanguageCode;
  short: "CN" | "EN";
  region: "CN" | "US";
  label: string;
};

export const languageOptions: LanguageOption[] = [
  { code: "zh-CN", short: "CN", region: "CN", label: "简体中文" },
  { code: "en-US", short: "EN", region: "US", label: "English" },
];

export const preferenceEventName = "xosite-preference-change";

const languageStorageKey = "xosite-language";

function detectPreferredLanguageCode(languages: readonly string[]): LanguageCode {
  for (const language of languages) {
    const normalized = language.toLowerCase();

    if (normalized.startsWith("zh")) {
      return "zh-CN";
    }

    if (normalized.startsWith("en")) {
      return "en-US";
    }
  }

  return "en-US";
}

function subscribePreference(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(preferenceEventName, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(preferenceEventName, callback);
  };
}

export function emitPreferenceChange() {
  window.dispatchEvent(new Event(preferenceEventName));
}

function normalizeLanguage(value: string | null): LanguageCode {
  return value === "en-US" ? "en-US" : "zh-CN";
}

function getStoredLanguageCode(): LanguageCode {
  const storedLanguage = window.localStorage.getItem(languageStorageKey);

  if (storedLanguage) {
    return normalizeLanguage(storedLanguage);
  }

  const browserLanguages =
    window.navigator.languages && window.navigator.languages.length > 0
      ? window.navigator.languages
      : [window.navigator.language];

  return detectPreferredLanguageCode(browserLanguages);
}

function getServerLanguageCode(): LanguageCode {
  return "zh-CN";
}

export function setStoredLanguage(code: LanguageCode) {
  window.localStorage.setItem(languageStorageKey, code);
  emitPreferenceChange();
}

const statusText: Record<StatusLabel, Localized<string>> = {
  即将开放: { zh: "即将开放", en: "Coming soon" },
  内测中: { zh: "内测中", en: "Beta" },
  规划中: { zh: "规划中", en: "Planned" },
  已支持: { zh: "已支持", en: "Supported" },
};

type LanguageContextValue = {
  languageCode: LanguageCode;
  locale: LocaleKey;
  language: LanguageOption;
  statusText: (status: StatusLabel) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const languageCode = useSyncExternalStore(subscribePreference, getStoredLanguageCode, getServerLanguageCode);
  const locale: LocaleKey = languageCode === "en-US" ? "en" : "zh";
  const language = languageOptions.find((item) => item.code === languageCode) ?? languageOptions[0];

  useEffect(() => {
    document.documentElement.lang = language.code;
  }, [language.code]);

  return (
    <LanguageContext.Provider
      value={{
        languageCode,
        locale,
        language,
        statusText: (status) => statusText[status][locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export function pickLocalized<T>(value: Localized<T>, locale: LocaleKey): T {
  return value[locale];
}
