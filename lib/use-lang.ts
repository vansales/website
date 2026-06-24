import { useState } from "react";

export type Lang = "en" | "th";

export const LANG_COOKIE = "vansales-lang";

/**
 * Language state seeded by the server-resolved value (`initial`), so the first
 * render already matches and there is no client-side switch/flash.
 *
 * The choice is persisted to a cookie so the next request renders the right
 * language on the server, and so it stays consistent across pages.
 */
export function useLang(initial: Lang): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>(initial);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      document.cookie = `${LANG_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      /* ignore persistence failures */
    }
  };

  return [lang, setLang];
}
