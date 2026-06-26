"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { type Lang } from "@/lib/use-lang";
import { localized } from "@/lib/i18n";

const ACK_KEY = "vansales-cookie-ack";

const T = {
  en: {
    text: "We use just one cookie to remember your language — none for tracking.",
    learn: "Cookie Policy",
    ok: "Got it",
  },
  th: {
    text: "เราใช้คุกกี้เพียงตัวเดียวเพื่อจดจำภาษาที่คุณเลือก ไม่มีการติดตามใด ๆ",
    learn: "นโยบายคุกกี้",
    ok: "รับทราบ",
  },
} as const;

export function CookieNotice({ lang }: { lang: Lang }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(ACK_KEY)) setShow(true);
    } catch {
      /* ignore */
    }
  }, []);

  if (!show) return null;
  const t = T[lang];
  const dismiss = () => {
    try {
      localStorage.setItem(ACK_KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border bg-card/95 p-4 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-4">
      <p className="text-sm leading-6 text-muted-foreground">
        🍪 {t.text}{" "}
        <Link href={localized("/cookie-policy", lang)} className="font-medium text-primary underline underline-offset-2">{t.learn}</Link>
      </p>
      <button
        onClick={dismiss}
        className="mt-3 w-full shrink-0 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:mt-0 sm:w-auto"
      >
        {t.ok}
      </button>
    </div>
  );
}
