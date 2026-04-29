import type { MetadataRoute } from "next";

import { siteConfig } from "./site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    lastModified: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", lastModified: "2026-04-29", changeFrequency: "weekly", priority: 1 },
    { path: "/download", lastModified: "2026-04-29", changeFrequency: "weekly", priority: 0.9 },
    { path: "/faq", lastModified: "2026-04-29", changeFrequency: "monthly", priority: 0.8 },
    { path: "/changelog", lastModified: "2026-04-29", changeFrequency: "weekly", priority: 0.8 },
    { path: "/privacy", lastModified: "2026-04-29", changeFrequency: "yearly", priority: 0.4 },
    { path: "/terms", lastModified: "2026-04-29", changeFrequency: "yearly", priority: 0.4 },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
