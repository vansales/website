import { cookies, headers } from "next/headers";
import type { Lang } from "./use-lang";

export const LANG_COOKIE = "vansales-lang";

/**
 * Resolve the language on the server so the first paint is already correct
 * (no client-side flash): saved cookie first, otherwise the browser's
 * Accept-Language preference order (Thai → th, English → en), else English.
 */
export function resolveLang(): Lang {
  const cookie = cookies().get(LANG_COOKIE)?.value;
  if (cookie === "en" || cookie === "th") return cookie;

  const accept = headers().get("accept-language") ?? "";
  for (const part of accept.split(",")) {
    const code = part.trim().toLowerCase();
    if (code.startsWith("th")) return "th";
    if (code.startsWith("en")) return "en";
  }
  return "en";
}
