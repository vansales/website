import { cookies, headers } from "next/headers";
import type { Lang } from "./use-lang";

export const LANG_COOKIE = "vansales-lang";

/**
 * Resolve the language on the server so the first paint is already correct
 * (no client-side flash): saved cookie first, otherwise the browser's
 * Accept-Language preference order (Thai → th, English → en), else English.
 */
export async function resolveLang(): Promise<Lang> {
  // headers()/cookies() are async as of Next 15.
  const h = await headers();

  // Set by middleware from the URL locale prefix (/th, /en, or none → en).
  const fromPath = h.get("x-lang");
  if (fromPath === "en" || fromPath === "th") return fromPath;

  // Fallbacks for any route the middleware doesn't cover.
  const cookie = (await cookies()).get(LANG_COOKIE)?.value;
  if (cookie === "en" || cookie === "th") return cookie;

  const accept = h.get("accept-language") ?? "";
  for (const part of accept.split(",")) {
    const code = part.trim().toLowerCase();
    if (code.startsWith("th")) return "th";
    if (code.startsWith("en")) return "en";
  }
  return "en";
}

/** The locale-stripped request path (e.g. "/resources/x"), from middleware. */
export async function currentPath(): Promise<string> {
  return (await headers()).get("x-path") || "/";
}

/** The URL locale prefix actually requested: "", "/en", or "/th". */
export async function localePrefix(): Promise<string> {
  return (await headers()).get("x-prefix") || "";
}
