import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import {
  organizationJsonLd,
  safeJsonLd,
  seoKeywords,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "./seo";
import { siteConfig } from "./site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: seoKeywords,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "finance",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    type: "website",
    locale: "zh_CN",
    siteName: siteConfig.name,
    url: siteConfig.siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} website preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        <Script id="xosite-appearance-bootstrap" strategy="beforeInteractive">
          {`(() => {
            try {
              const key = "xosite-appearance";
              const saved = window.localStorage.getItem(key);
              const appearance = saved === "dark" || saved === "light" || saved === "system"
                ? saved
                : "system";
              const media = window.matchMedia("(prefers-color-scheme: dark)");
              const resolved = appearance === "system"
                ? (media.matches ? "dark" : "light")
                : appearance;

              document.documentElement.dataset.appearance = appearance;
              document.documentElement.dataset.resolvedTheme = resolved;
            } catch {}
          })();`}
        </Script>
        <Script
          id="xosite-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd([
              organizationJsonLd(),
              websiteJsonLd(),
              softwareApplicationJsonLd(),
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
