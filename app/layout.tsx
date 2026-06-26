import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { resolveLang, currentPath } from "@/lib/server-lang";
import { localized } from "@/lib/i18n";
import { CookieNotice } from "@/components/cookie-notice";
import { BackToTop } from "@/components/back-to-top";

/** Site-wide metadata. `alternates` (canonical + hreflang) is computed per
 * request from the active locale + path, so every page that doesn't set its
 * own alternates is covered. English is canonical at the root; Thai at /th. */
export function generateMetadata(): Metadata {
  const lang = resolveLang();
  const path = currentPath();
  const canonical = lang === "th" ? localized(path, "th") : path;
  return {
    metadataBase: new URL("https://vansales.ai"),
    title: {
      default: "Vansales — Sales & distribution platform",
      template: "%s — Vansales",
    },
    description:
      "All-in-one sales & delivery management that helps teams across Thailand and Southeast Asia work faster and more accurately.",
    applicationName: "Vansales",
    alternates: {
      canonical,
      languages: {
        en: path,
        th: localized(path, "th"),
        "x-default": path,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Vansales",
      title: "Vansales — Sales & distribution platform",
      description:
        "Manage orders, customers, stock, delivery routes and sales reports in real time — built for field sales and distribution teams.",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: "Vansales — Sales & distribution platform",
      description:
        "Manage orders, customers, stock, delivery routes and sales reports in real time.",
    },
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const lang = resolveLang();
  return (
    <html lang={lang}>
      <body>
        {children}
        <BackToTop />
        <CookieNotice lang={lang} />
      </body>
    </html>
  );
}
