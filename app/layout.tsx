import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import { siteConfig } from "./site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "XplorOne",
    "本地优先",
    "财务工作台",
    "超级个体",
    "自由职业者",
    "预算",
    "收支结构",
    "经营视角",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    type: "website",
    locale: "zh_CN",
    siteName: siteConfig.name,
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full" suppressHydrationWarning>
      <body className="min-h-full">
        <Script id="xosite-language-bootstrap" strategy="beforeInteractive">
          {`(() => {
            try {
              const key = "xosite-language";
              const stored = window.localStorage.getItem(key);
              if (stored === "zh-CN" || stored === "en-US") {
                document.documentElement.lang = stored;
                return;
              }

              const languages = navigator.languages && navigator.languages.length
                ? navigator.languages
                : [navigator.language];
              const resolved = languages.some((language) => String(language).toLowerCase().startsWith("zh"))
                ? "zh-CN"
                : "en-US";

              document.documentElement.lang = resolved;
            } catch {}
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
