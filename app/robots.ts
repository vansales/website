import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://vansales.asia/sitemap.xml",
    host: "https://vansales.asia",
  };
}
