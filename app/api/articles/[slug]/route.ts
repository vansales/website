import { NextResponse } from "next/server";
import { getArticle } from "@/lib/articles";
import { CACHE_HEADERS, origin, parseLang, toAppItem } from "@/lib/app-api";

/**
 * One article for the mobile app, with its Markdown body. Root-relative links
 * and images in the body are made absolute so the app can load them directly.
 * Articles not marked for the app return 404.
 *
 *   GET /api/articles/<slug>?lang=th
 */
export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lang = parseLang(req);
  const article = getArticle(slug, lang);
  if (!article?.app) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  const base = origin(req);
  const content = article.content.replace(/\]\(\//g, `](${base}/`);

  return NextResponse.json(
    { ...toAppItem(article, lang, base), isFallback: article.isFallback, content },
    { headers: CACHE_HEADERS },
  );
}
