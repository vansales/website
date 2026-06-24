"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo, Button, cn } from "@vansales/design-system";
import { type Lang, LANG_COOKIE } from "@/lib/use-lang";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopNav } from "@/components/desktop-nav";
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

/** Shared header for content pages. Switching language sets the cookie and
 * refreshes so the server re-renders the page (and any article) in that
 * language. */
export function SiteHeader({ lang }: { lang: Lang }) {
  const router = useRouter();
  const t = CHROME[lang];

  const setLang = (l: Lang) => {
    document.cookie = `${LANG_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };

  return (
    <>
      <div className="bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground">
        {t.announce} · <Link href="/features/multi-branch" className="underline underline-offset-2">{t.learnMore}</Link>
      </div>
      <header className="sticky top-0 z-40 border-b border-white/15 bg-[#1763ad]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="Vansales home" className="shrink-0">
            <Logo height={30} icon="square" color="#ffffff" />
          </Link>
          <DesktopNav items={navItems(lang)} />
          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-full border border-white/25 p-0.5 text-xs">
              {(["en", "th"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "rounded-full px-2.5 py-1 font-medium transition",
                    lang === l ? "bg-white text-primary" : "text-white/70 hover:text-white"
                  )}
                >
                  {l === "en" ? "EN" : "ไทย"}
                </button>
              ))}
            </div>
            <a href={`https://manager.vansales.asia/auth/login?lang=${lang}`} target="_blank" rel="noopener noreferrer" className="hidden text-sm font-medium text-white/70 hover:text-white md:block">{t.signIn}</a>
            <a href="/#contact" className="hidden sm:block"><Button className="bg-white text-primary hover:bg-white/90">{t.contactSales}</Button></a>
            <MobileNav items={navItems(lang)} signIn={t.signIn} signInHref={`https://manager.vansales.asia/auth/login?lang=${lang}`} contactSales={t.contactSales} contactHref="/#contact" />
          </div>
        </div>
      </header>
    </>
  );
}
