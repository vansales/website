"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@vansales/design-system";
import { type Lang } from "@/lib/use-lang";

/** Strip any /en or /th prefix to get the locale-neutral base path. */
function basePath(pathname: string): string {
  if (pathname === "/th" || pathname === "/en") return "/";
  if (pathname.startsWith("/th/") || pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

function targetUrl(pathname: string, to: Lang): string {
  const base = basePath(pathname);
  if (to === "th") return base === "/" ? "/th" : `/th${base}`;
  return base; // English lives at the root (no prefix)
}

/** EN / ไทย switch that navigates to the same page in the other locale. */
export function LangSwitch({ lang, onDark }: { lang: Lang; onDark?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const go = (l: Lang) => {
    if (l !== lang) router.push(targetUrl(pathname, l));
  };
  return (
    <div className={cn("inline-flex rounded-full border p-0.5 text-xs", onDark ? "border-white/25" : "border-border")}>
      {(["en", "th"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => go(l)}
          className={cn(
            "rounded-full px-2.5 py-1 font-medium transition",
            lang === l
              ? onDark
                ? "bg-white text-primary"
                : "bg-primary text-primary-foreground"
              : onDark
                ? "text-white/70 hover:text-white"
                : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l === "en" ? "EN" : "ไทย"}
        </button>
      ))}
    </div>
  );
}
