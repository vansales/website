import { NextResponse, type NextRequest } from "next/server";

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
