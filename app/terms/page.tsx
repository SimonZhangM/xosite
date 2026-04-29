import Script from "next/script";

import { TermsContent } from "./terms-content";
import { breadcrumbJsonLd, buildPageMetadata, safeJsonLd, webPageJsonLd } from "../seo";

const title = "XplorOne 用户协议 | 软件属性、下载与 AI 辅助边界";
const description = "了解 XplorOne 当前发布版本的软件属性、下载安装边界、用户责任、AI 辅助边界与反馈入口。";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Script
        id="xosite-terms-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd([
            webPageJsonLd({ path: "/terms", name: title, description }),
            breadcrumbJsonLd([
              { name: "首页", path: "/" },
              { name: "用户协议", path: "/terms" },
            ]),
          ]),
        }}
      />
      <TermsContent />
    </>
  );
}
