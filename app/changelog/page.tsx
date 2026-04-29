import Script from "next/script";

import { ChangelogContent } from "./changelog-content";
import { breadcrumbJsonLd, buildPageMetadata, safeJsonLd, webPageJsonLd } from "../seo";

const title = "XplorOne 软件更新日志 | 版本发布与开发进展";
const description = "查看 XplorOne 软件版本更新、最新发布重点、历史开发进展和 Windows 版能力变化。";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/changelog",
  type: "article",
});

export default function ChangelogPage() {
  return (
    <>
      <Script
        id="xosite-changelog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd([
            webPageJsonLd({ path: "/changelog", name: title, description }),
            breadcrumbJsonLd([
              { name: "首页", path: "/" },
              { name: "更新日志", path: "/changelog" },
            ]),
          ]),
        }}
      />
      <ChangelogContent />
    </>
  );
}
