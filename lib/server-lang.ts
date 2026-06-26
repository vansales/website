import { cookies, headers } from "next/headers";
import type { Lang } from "./use-lang";

export const LANG_COOKIE = "vansales-lang";

/**
 * Resolve the language on the server so the first paint is already correct
 * (no client-side flash): saved cookie first, otherwise the browser's
 * Accept-Language preference order (Thai → th, English → en), else English.
 */
export function resolveLang(): Lang {
  // Set by middleware from the URL locale prefix (/th, /en, or none → en).
  const fromPath = headers().get("x-lang");
  if (fromPath === "en" || fromPath === "th") return fromPath;

  // Fallbacks for any route the middleware doesn't cover.
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

/** The locale-stripped request path (e.g. "/resources/x"), from middleware. */
export function currentPath(): string {
  return headers().get("x-path") || "/";
}

/** The URL locale prefix actually requested: "", "/en", or "/th". */
export function localePrefix(): string {
  return headers().get("x-prefix") || "";
}
