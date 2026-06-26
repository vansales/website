import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { resolveLang } from "@/lib/server-lang";
import { CookieNotice } from "@/components/cookie-notice";
import { BackToTop } from "@/components/back-to-top";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://vansales.ai"),
  title: {
    default: "Vansales — Sales & distribution platform",
    template: "%s — Vansales",
  },
  description:
    "All-in-one sales & delivery management that helps teams across Thailand and Southeast Asia work faster and more accurately.",
  applicationName: "Vansales",
  openGraph: {
    type: "website",
    siteName: "Vansales",
    title: "Vansales — Sales & distribution platform",
    description:
      "Manage orders, customers, stock, delivery routes and sales reports in real time — built for field sales and distribution teams.",
    url: "https://vansales.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansales — Sales & distribution platform",
    description:
      "Manage orders, customers, stock, delivery routes and sales reports in real time.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const lang = resolveLang();
  return (
    <html lang={lang}>
      <body>
        {children}
        <BackToTop />
        <CookieNotice lang={lang} />
        <SpeedInsights />
      </body>
    </html>
  );
}
