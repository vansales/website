"use client";

import { useEffect, useState } from "react";
import { Heart, Link2, Facebook, Linkedin, MessageCircle, Share2, Check } from "lucide-react";
import { cn } from "@vansales/design-system";
import { type Lang } from "@/lib/use-lang";

const STR = {
  en: { like: "Like", liked: "Liked", share: "Share", copy: "Copy link", copied: "Copied!" },
  th: { like: "ถูกใจ", liked: "ถูกใจแล้ว", share: "แชร์", copy: "คัดลอกลิงก์", copied: "คัดลอกแล้ว!" },
} as const;

/** Like (remembered per device via localStorage) + share buttons.
 * Shared links carry the page's Open Graph card — cover image, title, and a
 * link back to the original article. */
export function ArticleActions({ slug, title, lang }: { slug: string; title: string; lang: Lang }) {
  const t = STR[lang];
  const [liked, setLiked] = useState(false);
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [nativeShare, setNativeShare] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
    try { setLiked(localStorage.getItem(`like:${slug}`) === "1"); } catch {}
    setNativeShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, [slug]);

  const toggleLike = () => {
    const next = !liked;
    setLiked(next);
    try { localStorage.setItem(`like:${slug}`, next ? "1" : "0"); } catch {}
  };

  const enc = encodeURIComponent(url);
  const open = (href: string) => window.open(href, "_blank", "noopener,noreferrer,width=620,height=640");
  const fb = () => open(`https://www.facebook.com/sharer/sharer.php?u=${enc}`);
  const line = () => open(`https://social-plugins.line.me/lineit/share?url=${enc}`);
  const linkedin = () => open(`https://www.linkedin.com/sharing/share-offsite/?url=${enc}`);
  const doNative = () => { void navigator.share?.({ title, url }).catch(() => {}); };
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  };

  const iconBtn = "flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition hover:border-primary hover:text-primary";

  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-6">
      {/* Like */}
      <button
        type="button"
        onClick={toggleLike}
        aria-pressed={liked}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition",
          liked ? "border-rose-200 bg-rose-50 text-rose-600" : "text-muted-foreground hover:border-primary hover:text-primary"
        )}
      >
        <Heart className={cn("h-4 w-4 transition", liked && "scale-110 fill-rose-500 text-rose-500")} />
        {liked ? t.liked : t.like}
      </button>

      {/* Share */}
      <div className="flex items-center gap-2">
        <span className="mr-1 text-sm text-muted-foreground">{t.share}</span>
        {nativeShare && (
          <button type="button" onClick={doNative} aria-label={t.share} className={iconBtn}><Share2 className="h-[18px] w-[18px]" /></button>
        )}
        <button type="button" onClick={fb} aria-label="Facebook" className={iconBtn}><Facebook className="h-[18px] w-[18px]" /></button>
        <button type="button" onClick={line} aria-label="LINE" className={iconBtn}><MessageCircle className="h-[18px] w-[18px]" /></button>
        <button type="button" onClick={linkedin} aria-label="LinkedIn" className={iconBtn}><Linkedin className="h-[18px] w-[18px]" /></button>
        <button type="button" onClick={copy} aria-label={t.copy} className={cn(iconBtn, copied && "border-emerald-300 text-emerald-600")}>
          {copied ? <Check className="h-[18px] w-[18px]" /> : <Link2 className="h-[18px] w-[18px]" />}
        </button>
      </div>
    </div>
  );
}
