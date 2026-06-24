import type { Metadata } from "next";
import { resolveLang } from "@/lib/server-lang";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Vansales uses cookies — just one functional cookie for language, no tracking.",
};
import { SiteFooter } from "@/components/site-footer";

const STR = {
  en: {
    eyebrow: "Legal",
    title: "Cookie Policy",
    intro: "Vansales keeps cookies to a bare minimum. This page explains exactly what we store on your device, and why.",
    whatTitle: "What we store",
    cols: ["Cookie", "Purpose", "Type", "Expires"],
    rows: [
      ["vansales-lang", "Remembers your language choice (TH / EN)", "Functional — strictly necessary", "1 year"],
    ],
    noTrackTitle: "No tracking",
    noTrack: "We do not use advertising, marketing or analytics cookies, and we do not track you across other websites. The single cookie above exists only so the site can show you the right language.",
    choicesTitle: "Your choices",
    choices: "Because this cookie is essential for the site to work in your chosen language, it is not subject to consent. You can clear or block cookies at any time in your browser settings — the site will simply fall back to detecting your browser language.",
    updatedTitle: "Updates",
    updated: "If we ever add analytics or marketing cookies, we will update this page and ask for your consent beforehand.",
  },
  th: {
    eyebrow: "ข้อกฎหมาย",
    title: "นโยบายคุกกี้",
    intro: "Vansales ใช้คุกกี้น้อยที่สุดเท่าที่จำเป็น หน้านี้อธิบายอย่างชัดเจนว่าเราเก็บอะไรไว้ในเครื่องของคุณ และเพราะเหตุใด",
    whatTitle: "สิ่งที่เราเก็บ",
    cols: ["คุกกี้", "วัตถุประสงค์", "ประเภท", "หมดอายุ"],
    rows: [
      ["vansales-lang", "จำภาษาที่คุณเลือก (ไทย / อังกฤษ)", "Functional — จำเป็นต่อการใช้งาน", "1 ปี"],
    ],
    noTrackTitle: "ไม่มีการติดตาม",
    noTrack: "เราไม่ใช้คุกกี้เพื่อการโฆษณา การตลาด หรือ analytics และไม่ติดตามคุณข้ามไปยังเว็บไซต์อื่น คุกกี้ตัวเดียวข้างต้นมีไว้เพื่อให้เว็บแสดงภาษาที่ถูกต้องเท่านั้น",
    choicesTitle: "ทางเลือกของคุณ",
    choices: "เนื่องจากคุกกี้นี้จำเป็นต่อการแสดงผลภาษาที่คุณเลือก จึงไม่อยู่ภายใต้การขอความยินยอม คุณสามารถล้างหรือบล็อกคุกกี้ได้ทุกเมื่อในการตั้งค่าเบราว์เซอร์ — โดยเว็บจะกลับไปตรวจภาษาจากเบราว์เซอร์ให้แทน",
    updatedTitle: "การอัปเดต",
    updated: "หากในอนาคตเราเพิ่มคุกกี้เพื่อ analytics หรือการตลาด เราจะอัปเดตหน้านี้และขอความยินยอมจากคุณก่อนเสมอ",
  },
} as const;

export default function CookiePolicyPage() {
  const lang = resolveLang();
  const t = STR[lang];

  return (
    <div className="bg-background text-foreground antialiased">
      <SiteHeader lang={lang} />

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{t.eyebrow}</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t.intro}</p>

        <h2 className="mt-10 text-xl font-semibold">{t.whatTitle}</h2>
        <div className="mt-4 overflow-hidden rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 text-xs text-muted-foreground">
              <tr>
                {t.cols.map((c) => <th key={c} className="px-3 py-2 font-medium">{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {t.rows.map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="px-3 py-2.5 font-mono text-[13px] text-foreground">{row[0]}</td>
                  <td className="px-3 py-2.5 text-muted-foreground">{row[1]}</td>
                  <td className="px-3 py-2.5 text-muted-foreground">{row[2]}</td>
                  <td className="px-3 py-2.5 text-muted-foreground">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-xl font-semibold">{t.noTrackTitle}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{t.noTrack}</p>

        <h2 className="mt-10 text-xl font-semibold">{t.choicesTitle}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{t.choices}</p>

        <h2 className="mt-10 text-xl font-semibold">{t.updatedTitle}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{t.updated}</p>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
