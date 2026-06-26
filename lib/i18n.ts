import { type Lang } from "./use-lang";

/** Build a locale-aware href: Thai gets a /th prefix, English stays at root.
 * Pure (no server/client deps) so it's safe to import anywhere. */
export function localized(path: string, lang: Lang): string {
  if (lang !== "th") return path;
  if (path === "/") return "/th";
  return path.startsWith("/") ? `/th${path}` : path;
}
