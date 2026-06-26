import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { resolveLang } from "@/lib/server-lang";
import { localized } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Resources",
  description: "Articles and insights on sales and distribution from the Vansales team.",
};
import { listArticles, formatDate } from "@/lib/articles";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const T = {
  en: {
    eyebrow: "Resources",
    title: "Articles & insights",
    sub: "Perspectives on sales, distribution, and building systems that scale.",
    empty: "No articles yet — check back soon.",
    read: "Read article",
    toolTag: "Calculator",
    toolTitle: "Cash van profit calculator",
    toolDesc: "Size a cash-van route and find your break-even — try it with your own numbers.",
    toolCta: "Open the calculator",
  },
  th: {
    eyebrow: "แหล่งข้อมูล",
    title: "Articles & insights",
    sub: "มุมมองเรื่องการขาย การกระจายสินค้า และการสร้างระบบที่ขยายได้",
    empty: "ยังไม่มีบทความ — กลับมาดูใหม่เร็ว ๆ นี้",
    read: "อ่านบทความ",
    toolTag: "เครื่องคำนวณ",
    toolTitle: "เครื่องคำนวณกำไรหน่วยรถแวน",
    toolDesc: "วางหน่วยรถเงินสดและหาจุดคุ้มทุน — ลองด้วยตัวเลขของคุณเอง",
    toolCta: "เปิดเครื่องคำนวณ",
  },
} as const;

export default function ResourcesPage() {
  const lang = resolveLang();
  const t = T[lang];
  const articles = listArticles(lang);

  return (
    <div className="bg-background text-foreground antialiased">
      <SiteHeader lang={lang} />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-12 max-w-2xl">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{t.eyebrow}</span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{t.sub}</p>
        </div>

        {/* Featured interactive tool */}
        <Link
          href={localized("/resources/cashvan-calculator", lang)}
          className="group mb-10 flex flex-col items-start gap-4 overflow-hidden rounded-2xl border bg-primary/5 p-6 transition hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{t.toolTag}</span>
            <h2 className="mt-3 text-xl font-semibold tracking-tight transition group-hover:text-primary">{t.toolTitle}</h2>
            <p className="mt-1.5 max-w-xl text-sm leading-6 text-muted-foreground">{t.toolDesc}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition group-hover:bg-primary/90">
            {t.toolCta} →
          </span>
        </Link>

        {articles.length === 0 ? (
          <p className="text-muted-foreground">{t.empty}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={localized(`/resources/${a.slug}`, lang)}
                className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {a.cover && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image src={a.cover} alt={a.coverAlt ?? a.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px" className="object-cover" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  {a.tag && <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">{a.tag}</span>}
                  <span>{formatDate(a.date, lang)}</span>
                  {!a.langs.includes(lang) && (
                    <span className="rounded-full border px-2 py-0.5 font-medium">{a.langs[0].toUpperCase()}</span>
                  )}
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight transition group-hover:text-primary">{a.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">{t.read} →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
