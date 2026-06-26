"use client";

import Link from "next/link";
import { Logo, Button } from "@vansales/design-system";
import { type Lang } from "@/lib/use-lang";
import { localized } from "@/lib/i18n";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopNav } from "@/components/desktop-nav";
import { LangSwitch } from "@/components/lang-switch";
import { navItems } from "@/lib/nav";

const CHROME = {
  en: {
    announce: "🎉 New: multi-branch delivery with real-time route maps",
    learnMore: "Learn more",
    signIn: "Sign in",
    contactSales: "Contact us",
  },
  th: {
    announce: "🎉 ใหม่: จัดส่งข้ามสาขา พร้อมแผนที่เส้นทางแบบเรียลไทม์",
    learnMore: "ดูเพิ่มเติม",
    signIn: "เข้าสู่ระบบ",
    contactSales: "ติดต่อเรา",
  },
} as const;

/** Shared header for content pages. Language is part of the URL (/th/…), so the
 * switcher navigates to the same page in the other locale. */
export function SiteHeader({ lang }: { lang: Lang }) {
  const t = CHROME[lang];

  return (
    <>
      <div className="bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground">
        {t.announce} · <Link href={localized("/features/multi-branch", lang)} className="underline underline-offset-2">{t.learnMore}</Link>
      </div>
      <header className="sticky top-0 z-40 border-b border-white/15 bg-[#1763ad]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href={localized("/", lang)} aria-label="Vansales home" className="shrink-0">
            <Logo height={30} icon="square" color="#ffffff" />
          </Link>
          <DesktopNav items={navItems(lang)} />
          <div className="flex items-center gap-3">
            <LangSwitch lang={lang} onDark />
            <a href={`https://manager.vansales.asia/auth/login?lang=${lang}`} target="_blank" rel="noopener noreferrer" className="hidden text-sm font-medium text-white/70 hover:text-white md:block">{t.signIn}</a>
            <a href={localized("/#contact", lang)} className="hidden sm:block"><Button className="bg-white text-primary hover:bg-white/90">{t.contactSales}</Button></a>
            <MobileNav items={navItems(lang)} signIn={t.signIn} signInHref={`https://manager.vansales.asia/auth/login?lang=${lang}`} contactSales={t.contactSales} contactHref={localized("/#contact", lang)} />
          </div>
        </div>
      </header>
    </>
  );
}
