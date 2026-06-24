import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { resolveLang } from "@/lib/server-lang";
import { getArticle, formatDate } from "@/lib/articles";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArticleBody } from "@/components/article-body";
import { ArticleActions } from "@/components/article-actions";

const T = {
  en: {
    back: "All articles",
    fallback: "This article isn't available in your language yet — showing the English version.",
  },
  th: {
    back: "บทความทั้งหมด",
    fallback: "บทความนี้ยังไม่มีในภาษาที่คุณเลือก — แสดงฉบับภาษาอังกฤษแทน",
  },
} as const;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug, resolveLang());
  if (!article) return {};
  const url = `/resources/${params.slug}`;
  const images = article.cover ? [article.cover] : undefined;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url,
      images,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: article.title,
      description: article.excerpt,
      images,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const lang = resolveLang();
  const t = T[lang];
  const article = getArticle(params.slug, lang);
  if (!article) notFound();

  return (
    <div className="bg-background text-foreground antialiased">
      <SiteHeader lang={lang} />

      <article className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20">
        <Link href="/resources" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
          ← {t.back}
        </Link>

        <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
          {article.tag && <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">{article.tag}</span>}
          <span>{formatDate(article.date, lang)}</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-[2.5rem]">{article.title}</h1>

        {article.cover && (
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
            <Image src={article.cover} alt={article.coverAlt ?? article.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </div>
        )}

        {article.isFallback && (
          <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
            {t.fallback}
          </div>
        )}

        <div className="mt-8">
          <ArticleBody content={article.content} />
        </div>

        <ArticleActions slug={params.slug} title={article.title} lang={lang} />
      </article>

      <SiteFooter lang={lang} />
    </div>
  );
}
