import type { MetadataRoute } from "next";

import { siteConfig } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/download", "/faq", "/changelog"];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
