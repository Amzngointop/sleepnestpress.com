import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { guides } from "@/data/guides";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date().toISOString();

  const staticPages = [
    { url: base, lastModified: now, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/sleep-guides`, lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/the-wind-down`, lastModified: now, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/our-method`, lastModified: now, priority: 0.5, changeFrequency: "yearly" as const },
    { url: `${base}/say-goodnight`, lastModified: now, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${base}/affiliate-disclosure`, lastModified: now, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/privacy-policy`, lastModified: now, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/terms`, lastModified: now, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const articlePages = articles.map((a) => ({
    url: `${base}/best/${a.slug}`,
    lastModified: now,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const guidePages = guides.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...articlePages, ...guidePages];
}
