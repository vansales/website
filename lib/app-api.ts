import type { ArticleMeta } from "./articles";
import type { Lang } from "./use-lang";

/** Edge-cache API responses briefly; the app may serve stale while revalidating. */
export const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
};

export function parseLang(req: Request): Lang {
  return new URL(req.url).searchParams.get("lang") === "th" ? "th" : "en";
}

/** Absolute site origin for links/images the app opens (the request's own host). */
export function origin(req: Request): string {
  return new URL(req.url).origin;
}

/** Root-relative link → absolute, so the app can load it as-is. */
export function absolute(base: string, href?: string): string | undefined {
  if (!href) return undefined;
  return href.startsWith("/") ? `${base}${href}` : href;
}

/**
 * Web page for an article in the given language. English uses the explicit
 * `/en` prefix so a Thai-preferring browser isn't redirected to `/th`.
 */
export function webUrl(base: string, slug: string, lang: Lang): string {
  return `${base}/${lang}/resources/${slug}`;
}

/** The article card as the app sees it (shared by the list and detail routes). */
export function toAppItem(a: ArticleMeta & { lang?: Lang }, lang: Lang, base: string) {
  const rendered = a.lang ?? (a.langs.includes(lang) ? lang : a.langs[0]);
  return {
    slug: a.slug,
    placement: a.app,
    lang: rendered,
    title: a.title,
    excerpt: a.excerpt,
    date: a.date,
    tag: a.tag ?? null,
    cover: absolute(base, a.cover) ?? null,
    coverAlt: a.coverAlt ?? null,
    url: webUrl(base, a.slug, rendered),
  };
}
