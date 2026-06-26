import { NextResponse, type NextRequest } from "next/server";

const LANG_COOKIE = "vansales-lang";

/** First Accept-Language match wins: Thai only if preferred over English. */
function prefersThai(accept: string): boolean {
  for (const part of accept.split(",")) {
    const code = part.trim().toLowerCase();
    if (code.startsWith("th")) return true;
    if (code.startsWith("en")) return false;
  }
  return false;
}

/**
 * Path-based i18n. English is the default and lives at the root (`/...`);
 * Thai is served under `/th/...`. `/en/...` also serves English (canonical
 * points back to the root version).
 *
 * The middleware strips the locale prefix, serves the existing (unprefixed)
 * route, and passes the resolved language + canonical path to the app via
 * request headers (read in lib/server-lang.ts).
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const first = pathname.split("/")[1];

  let lang: "en" | "th" = "en";
  let prefix = "";
  let stripped = pathname;

  if (first === "th") {
    lang = "th";
    prefix = "/th";
    stripped = pathname.slice(3) || "/";
  } else if (first === "en") {
    lang = "en";
    prefix = "/en";
    stripped = pathname.slice(3) || "/";
  }

  // Auto-language on an unprefixed (root English) request: send a Thai-preferring
  // visitor to /th on first arrival. A saved choice (the lang cookie, set by the
  // switcher) always wins over the browser's Accept-Language. /th and /en are
  // explicit and never redirected — so there is no loop and every language
  // version stays directly reachable (e.g. for crawlers via hreflang).
  if (!prefix) {
    const saved = req.cookies.get(LANG_COOKIE)?.value;
    const wantThai =
      saved === "th" ||
      (saved !== "en" && prefersThai(req.headers.get("accept-language") ?? ""));
    if (wantThai) {
      const url = req.nextUrl.clone();
      url.pathname = pathname === "/" ? "/th" : `/th${pathname}`;
      const res = NextResponse.redirect(url, 307);
      res.headers.set("Vary", "Accept-Language, Cookie");
      return res;
    }
  }

  const headers = new Headers(req.headers);
  headers.set("x-lang", lang);
  headers.set("x-prefix", prefix); // "", "/en", or "/th"
  headers.set("x-path", stripped); // locale-stripped path (canonical base)

  if (prefix) {
    const url = req.nextUrl.clone();
    url.pathname = stripped;
    return NextResponse.rewrite(url, { request: { headers } });
  }
  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Run on page routes only — skip Next internals, the API, and static files
  // (anything with a dot, e.g. robots.txt / sitemap.xml / icon.svg).
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
