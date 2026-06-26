import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { resolveLang } from "@/lib/server-lang";
import { localized } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const T = {
  en: {
    code: "404",
    title: "We couldn't find that page",
    body: "The page may have moved or no longer exists — our website was recently rebuilt, so some older links have changed. Here's where to pick up from:",
    home: "Back to home",
    explore: "Explore",
    links: [
      { label: "Features", href: "/features" },
      { label: "Industries", href: "/solutions" },
      { label: "Resources", href: "/resources" },
      { label: "Contact us", href: "/#contact" },
    ],
    legalTitle: "Looking for our policies?",
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
  th: {
    code: "404",
    title: "ไม่พบหน้าที่คุณกำลังหา",
    body: "หน้านี้อาจถูกย้ายหรือไม่มีอยู่แล้ว — เว็บไซต์ของเราเพิ่งปรับใหม่ ลิงก์เก่าบางอันจึงเปลี่ยนไป ลองเริ่มจากตรงนี้ได้เลย:",
    home: "กลับหน้าแรก",
    explore: "สำรวจเพิ่มเติม",
    links: [
      { label: "ฟีเจอร์", href: "/features" },
      { label: "อุตสาหกรรม", href: "/solutions" },
      { label: "แหล่งข้อมูล", href: "/resources" },
      { label: "ติดต่อเรา", href: "/#contact" },
    ],
    legalTitle: "กำลังมองหานโยบายของเรา?",
    legal: [
      { label: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
      { label: "ข้อกำหนดการใช้งาน", href: "/terms" },
      { label: "นโยบายคุกกี้", href: "/cookie-policy" },
    ],
  },
} as const;

export default function NotFound() {
  const lang = resolveLang();
  const t = T[lang];

  return (
    <div className="bg-background text-foreground antialiased">
      <SiteHeader lang={lang} />

      <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <span className="text-[5rem] font-bold leading-none tracking-tight text-primary/20 sm:text-[7rem]">
          {t.code}
        </span>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{t.title}</h1>
        <p className="mt-4 max-w-md text-muted-foreground">{t.body}</p>

        <Link
          href={localized("/", lang)}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          <Home className="h-4 w-4" /> {t.home}
        </Link>

        {/* Quick links */}
        <div className="mt-14 w-full">
          <p className="mb-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">{t.explore}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.links.map((l) => (
              <Link
                key={l.href}
                href={localized(l.href, lang)}
                className="group flex items-center justify-between rounded-xl border bg-card px-4 py-3 text-left text-sm font-medium transition hover:bg-muted"
              >
                {l.label}
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            ))}
          </div>
        </div>

        {/* Legal (most old links that 404 are policy pages) */}
        <div className="mt-10 w-full border-t pt-8">
          <p className="mb-3 text-sm text-muted-foreground">{t.legalTitle}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {t.legal.map((l) => (
              <Link
                key={l.href}
                href={localized(l.href, lang)}
                className="rounded-full border bg-card px-4 py-1.5 text-sm font-medium transition hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
