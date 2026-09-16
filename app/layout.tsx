import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans_Thai, Anuphan } from "next/font/google";
import { resolveLang, currentPath } from "@/lib/server-lang";
import { localized } from "@/lib/i18n";
import { CookieNotice } from "@/components/cookie-notice";
import { BackToTop } from "@/components/back-to-top";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// Fonts self-hosted by Next (no render-blocking Google Fonts @import chain):
// preloaded, swap, and exposed as CSS variables the Tailwind theme reads.
// `sans` = body (IBM Plex Sans Thai), `display` = headings (Anuphan). The logo
// wordmark is outlined SVG paths, so the Righteous webfont isn't loaded at all.
const sans = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const display = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

/** Site-wide metadata. `alternates` (canonical + hreflang) is computed per
 * request from the active locale + path, so every page that doesn't set its
 * own alternates is covered. English is canonical at the root; Thai at /th. */
export async function generateMetadata(): Promise<Metadata> {
  const lang = await resolveLang();
  const path = await currentPath();
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

export default async function RootLayout({ children }: { children: ReactNode }) {
  const lang = await resolveLang();
  return (
    <html lang={lang} className={`${sans.variable} ${display.variable}`}>
      <body>
        {children}
        <BackToTop />
        <CookieNotice lang={lang} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
