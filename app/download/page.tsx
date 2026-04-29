import { DownloadContent } from "./download-content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  downloadHowToJsonLd,
  safeJsonLd,
  softwareApplicationJsonLd,
  webPageJsonLd,
} from "../seo";
import Script from "next/script";

const title = "下载 XplorOne Windows 版 | 本地优先财务工作台";
const description = "下载 XplorOne Windows x64 安装包，查看当前版本能力、GitHub Release、更新日志和安装安全提示。";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/download",
});

export default function DownloadPage() {
  return (
    <>
      <Script
        id="xosite-download-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd([
            webPageJsonLd({ path: "/download", name: title, description }),
            breadcrumbJsonLd([
              { name: "首页", path: "/" },
              { name: "下载", path: "/download" },
            ]),
            softwareApplicationJsonLd(),
            downloadHowToJsonLd(),
          ]),
        }}
      />
      <DownloadContent />
    </>
  );
}
