import type { MetadataRoute } from "next";
import { allSlugs } from "@/lib/articles";

const BASE = "https://vansales.ai";

const FEATURE_SLUGS = ["orders", "customers", "stock", "route", "payments", "delivery", "reports", "mobile"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    "/about",
    "/features",
    "/features/multi-branch",
    ...FEATURE_SLUGS.map((s) => `/features/${s}`),
    "/solutions",
    "/resources",
    "/resources/cashvan-calculator",
    ...allSlugs().map((s) => `/resources/${s}`),
    "/privacy",
    "/terms",
    "/cookie-policy",
  ];
  const th = (p: string) => (p === "/" ? "/th" : `/th${p}`);
  return paths.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : p.startsWith("/features") ? 0.8 : 0.6,
    alternates: {
      languages: {
        en: `${BASE}${p}`,
        th: `${BASE}${th(p)}`,
      },
    },
  }));
}
