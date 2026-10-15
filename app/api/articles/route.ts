import { NextResponse } from "next/server";
import { listArticles } from "@/lib/articles";
import { CACHE_HEADERS, origin, parseLang, toAppItem } from "@/lib/app-api";

/**
 * Articles for the mobile app, grouped by placement (newest first).
 * Only articles with `app: featured` or `app: news` in their frontmatter appear.
 *
 *   GET /api/articles?lang=th
 */
export function GET(req: Request) {
  const lang = parseLang(req);
  const base = origin(req);
  const items = listArticles(lang)
    .filter((a) => a.app)
    .map((a) => toAppItem(a, lang, base));

  return NextResponse.json(
    {
      lang,
      featured: items.filter((a) => a.placement === "featured"),
      news: items.filter((a) => a.placement === "news"),
    },
    { headers: CACHE_HEADERS },
  );
}
