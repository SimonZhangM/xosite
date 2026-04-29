import Script from "next/script";

import { PrivacyContent } from "./privacy-content";
import { breadcrumbJsonLd, buildPageMetadata, safeJsonLd, webPageJsonLd } from "../seo";

const title = "XplorOne 隐私政策 | 本地优先、外部 AI 与 BYOK 边界";
const description = "了解 XplorOne 的本地优先数据处理方式、外部 AI 请求、BYOK 模型密钥、MCP、本地接口与反馈数据边界。";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Script
        id="xosite-privacy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd([
            webPageJsonLd({ path: "/privacy", name: title, description }),
            breadcrumbJsonLd([
              { name: "首页", path: "/" },
              { name: "隐私政策", path: "/privacy" },
            ]),
          ]),
        }}
      />
      <PrivacyContent />
    </>
  );
}
