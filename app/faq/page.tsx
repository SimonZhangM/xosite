import Script from "next/script";

import { breadcrumbJsonLd, faqPageJsonLd, buildPageMetadata, safeJsonLd, webPageJsonLd } from "../seo";
import { faqPageCopy } from "../site-copy";
import { FaqContent } from "./faq-content";

const title = "XplorOne 常见问题 | 本地优先、AI 边界与下载说明";
const description = "查看 XplorOne 常见问题，包括适合人群、本地优先数据边界、AI 请求边界、API Key、备份迁移和平台支持。";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Script
        id="xosite-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd([
            webPageJsonLd({ path: "/faq", name: title, description }),
            breadcrumbJsonLd([
              { name: "首页", path: "/" },
              { name: "常见问题", path: "/faq" },
            ]),
            faqPageJsonLd(faqPageCopy.zh.items),
          ]),
        }}
      />
      <FaqContent />
    </>
  );
}
