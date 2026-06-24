import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Lang } from "./use-lang";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");
const LANGS: Lang[] = ["en", "th"];

export interface ArticleMeta {
  slug: string;
  /** Languages this article is actually written in. */
  langs: Lang[];
  title: string;
  excerpt: string;
  date: string;
  tag?: string;
  cover?: string;
  coverAlt?: string;
}

export interface Article extends ArticleMeta {
  /** Language actually rendered (may differ from the request → fallback). */
  lang: Lang;
  requestedLang: Lang;
  isFallback: boolean;
  content: string;
}

function isDir(p: string) {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
}

function availableLangs(slug: string): Lang[] {
  return LANGS.filter((l) => fs.existsSync(path.join(ARTICLES_DIR, slug, `${l}.md`)));
}

function load(slug: string, lang: Lang) {
  const file = path.join(ARTICLES_DIR, slug, `${lang}.md`);
  const parsed = matter(fs.readFileSync(file, "utf8"));
  const d = parsed.data.date;
  const date = d instanceof Date ? d.toISOString().slice(0, 10) : String(d ?? "");
  return {
    title: String(parsed.data.title ?? slug),
    excerpt: String(parsed.data.excerpt ?? ""),
    date,
    tag: parsed.data.tag ? String(parsed.data.tag) : undefined,
    cover: parsed.data.cover ? String(parsed.data.cover) : undefined,
    coverAlt: parsed.data.coverAlt ? String(parsed.data.coverAlt) : undefined,
    content: parsed.content,
  };
}

export function formatDate(d: string, lang: Lang): string {
  if (!d) return "";
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleDateString(lang === "th" ? "th-TH" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function allSlugs(): string[] {
  if (!isDir(ARTICLES_DIR)) return [];
  return fs.readdirSync(ARTICLES_DIR).filter((s) => isDir(path.join(ARTICLES_DIR, s)));
}

/** List articles for a reader's language; falls back to an available language. */
export function listArticles(lang: Lang): ArticleMeta[] {
  return allSlugs()
    .map((slug): ArticleMeta | null => {
      const langs = availableLangs(slug);
      if (!langs.length) return null;
      const use = langs.includes(lang) ? lang : langs[0];
      const a = load(slug, use);
      return { slug, langs, title: a.title, excerpt: a.excerpt, date: a.date, tag: a.tag, cover: a.cover, coverAlt: a.coverAlt };
    })
    .filter((x): x is ArticleMeta => x !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Get one article in the requested language, falling back if unavailable. */
export function getArticle(slug: string, lang: Lang): Article | null {
  const langs = availableLangs(slug);
  if (!langs.length) return null;
  const use = langs.includes(lang) ? lang : langs[0];
  const a = load(slug, use);
  return {
    slug,
    langs,
    lang: use,
    requestedLang: lang,
    isFallback: use !== lang,
    title: a.title,
    excerpt: a.excerpt,
    date: a.date,
    tag: a.tag,
    cover: a.cover,
    coverAlt: a.coverAlt,
    content: a.content,
  };
}
