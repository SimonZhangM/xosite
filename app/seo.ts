import type { Metadata } from "next";

import { downloadLinks, siteConfig } from "./site-data";

export const seoKeywords = [
  "XplorOne",
  "本地优先财务软件",
  "个人财务工作台",
  "自由职业者记账",
  "超级个体财务管理",
  "Windows 记账软件",
  "预算管理",
  "现金流分析",
  "AI 财务助手",
];

const defaultOgImage = "/opengraph-image";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  robots,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  robots?: Metadata["robots"];
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title: { absolute: title },
    description,
    keywords: seoKeywords,
    alternates: {
      canonical: path,
    },
    robots,
    openGraph: {
      title,
      description,
      type,
      locale: "zh_CN",
      siteName: siteConfig.name,
      url,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} website preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/logo.png"),
    email: siteConfig.contactEmail,
    sameAs: [siteConfig.githubUrl],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    inLanguage: ["zh-CN", "en-US"],
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.siteUrl}/#software`,
    name: siteConfig.name,
    alternateName: "XplorOne Desktop",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Windows",
    softwareVersion: siteConfig.version.replace(/^v/i, ""),
    url: siteConfig.siteUrl,
    downloadUrl: downloadLinks.windows,
    installUrl: downloadLinks.windows,
    codeRepository: siteConfig.githubUrl,
    releaseNotes: downloadLinks.release,
    image: absoluteUrl("/screenshots/xoplorone-workbench.png"),
    screenshot: [
      absoluteUrl("/screenshots/xoplorone-workbench.png"),
      absoluteUrl("/screenshots/xoplorone-cashflow-page.png"),
      absoluteUrl("/screenshots/xoplorone-budget-page.png"),
      absoluteUrl("/screenshots/xoplorone-chat-page.png"),
    ],
    description: siteConfig.description,
    featureList: [
      "本地优先账本",
      "多账本与账户结构",
      "预算管理",
      "现金流与资产分析",
      "本地查询助手",
      "只读 AI 财务分析",
      ".xpl 归档备份与迁移",
    ],
    softwareHelp: absoluteUrl("/faq"),
    inLanguage: ["zh-CN", "en-US"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  };
}

export function webPageJsonLd({
  path,
  name,
  description,
  dateModified = "2026-04-29",
}: {
  path: string;
  name: string;
  description: string;
  dateModified?: string;
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: ["zh-CN", "en-US"],
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    about: {
      "@id": `${siteConfig.siteUrl}/#software`,
    },
    dateModified,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  };
}

export function breadcrumbJsonLd(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function downloadHowToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "如何下载并开始使用 XplorOne Windows 版",
    description: "下载 XplorOne Windows x64 安装包，创建本地账本，并按需配置自己的模型 API Key。",
    totalTime: "PT10M",
    supply: [
      {
        "@type": "HowToSupply",
        name: "Windows x64 电脑",
      },
      {
        "@type": "HowToSupply",
        name: "XplorOne 安装包",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "下载安装包",
        text: "从官网下载安装 XplorOne Windows x64 安装包。",
        url: downloadLinks.windows,
      },
      {
        "@type": "HowToStep",
        name: "创建本地账本",
        text: "首次打开后创建本地账本，并设置账户、分类和预算结构。",
        url: absoluteUrl("/download"),
      },
      {
        "@type": "HowToStep",
        name: "查看首页和报表",
        text: "先通过首页、现金流、预算和报表页面理解财务结构。",
        url: absoluteUrl("/#previews"),
      },
      {
        "@type": "HowToStep",
        name: "按需启用 AI 助手",
        text: "需要更深入的财务分析时，再配置自己的模型 API Key，并理解只读 AI 边界。",
        url: absoluteUrl("/faq"),
      },
    ],
  };
}

export function faqPageJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
