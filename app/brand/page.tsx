import type { Metadata } from "next";
import Link from "next/link";
import { resolveLang } from "@/lib/server-lang";
import { localized } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "Vansales brand assets — download the official logo, and see our colours, typography and simple usage rules.",
};

const BRAND_BLUE = "#1765B3";
const INK = "#0A0A0B";

const STR = {
  en: {
    eyebrow: "Brand",
    title: "Brand assets",
    intro:
      "Everything you need to represent Vansales correctly — logo, colours and type. If you are a partner, reseller or member of the press, please use these official assets rather than recreating them.",

    logoTitle: "Logo",
    logoLede:
      "The wordmark is the default. Use the icon on its own only where the full name is already clear (app icons, avatars, favicons). Keep clear space around the logo equal to the height of the “V”, and never place it smaller than 20 px tall.",
    onLight: "On light",
    onDark: "On dark",
    wordmark: "Wordmark",
    wordvmark: "V wordmark",
    icon: "Icon",
    vmark: "V mark",
    download: "Download SVG",
    blueSvg: "Blue SVG",
    whiteSvg: "White SVG",

    colorTitle: "Colours",
    colorLede: "Vansales blue is the primary brand colour. Use ink and white for text and surfaces.",
    colorRows: [
      { name: "Vansales Blue", hex: BRAND_BLUE, note: "Primary — logo, links, key actions" },
      { name: "Ink", hex: INK, note: "Text on light backgrounds" },
      { name: "White", hex: "#FFFFFF", note: "Text & logo on dark backgrounds" },
    ],

    typeTitle: "Typography",
    typeRows: [
      { name: "Righteous", note: "Logo wordmark only — not for body text." },
      { name: "Anuphan", note: "Headings and display." },
      { name: "IBM Plex Sans Thai", note: "Body text, EN & TH." },
    ],

    rulesTitle: "Do & don’t",
    dos: [
      "Use the official SVGs supplied on this page.",
      "Keep clear space around the logo.",
      "Use Vansales blue or a single solid colour (white / ink).",
    ],
    donts: [
      "Don’t stretch, rotate, recolour or add effects to the logo.",
      "Don’t place the logo on a busy background or low-contrast colour.",
      "Don’t recreate the wordmark in another typeface.",
    ],

    contactTitle: "Press & partners",
    contact: "Need something else — a specific format, a high-res file, or approval for a co-branded piece?",
    contactCta: "Contact us",
  },
  th: {
    eyebrow: "แบรนด์",
    title: "ชุดสื่อแบรนด์",
    intro:
      "ทุกสิ่งที่จำเป็นสำหรับการนำเสนอ Vansales อย่างถูกต้อง — โลโก้ สี และฟอนต์ หากคุณเป็นพาร์ตเนอร์ ตัวแทนจำหน่าย หรือสื่อมวลชน กรุณาใช้ไฟล์ทางการเหล่านี้แทนการสร้างขึ้นใหม่",

    logoTitle: "โลโก้",
    logoLede:
      "ใช้แบบมีชื่อ (wordmark) เป็นหลัก ใช้เฉพาะไอคอนได้ต่อเมื่อบริบทสื่อชื่อแบรนด์ชัดเจนอยู่แล้ว (ไอคอนแอป รูปโปรไฟล์ favicon) เว้นระยะรอบโลโก้เท่ากับความสูงของตัว “V” และไม่ใช้เล็กกว่า 20 px",
    onLight: "บนพื้นสว่าง",
    onDark: "บนพื้นเข้ม",
    wordmark: "โลโก้พร้อมชื่อ",
    wordvmark: "โลโก้ตัว V พร้อมชื่อ",
    icon: "ไอคอน",
    vmark: "ตัว V",
    download: "ดาวน์โหลด SVG",
    blueSvg: "SVG น้ำเงิน",
    whiteSvg: "SVG ขาว",

    colorTitle: "สี",
    colorLede: "สีน้ำเงิน Vansales คือสีหลักของแบรนด์ ใช้สีดำหมึกและขาวสำหรับตัวอักษรและพื้นผิว",
    colorRows: [
      { name: "Vansales Blue", hex: BRAND_BLUE, note: "สีหลัก — โลโก้ ลิงก์ ปุ่มสำคัญ" },
      { name: "Ink", hex: INK, note: "ตัวอักษรบนพื้นสว่าง" },
      { name: "White", hex: "#FFFFFF", note: "ตัวอักษรและโลโก้บนพื้นเข้ม" },
    ],

    typeTitle: "ตัวอักษร",
    typeRows: [
      { name: "Righteous", note: "ใช้กับโลโก้เท่านั้น — ไม่ใช้กับเนื้อหา" },
      { name: "Anuphan", note: "หัวเรื่องและตัวอักษรขนาดใหญ่" },
      { name: "IBM Plex Sans Thai", note: "เนื้อหา ทั้งไทยและอังกฤษ" },
    ],

    rulesTitle: "ควร & ไม่ควร",
    dos: [
      "ใช้ไฟล์ SVG ทางการจากหน้านี้",
      "เว้นระยะว่างรอบโลโก้ให้เพียงพอ",
      "ใช้สีน้ำเงิน Vansales หรือสีทึบสีเดียว (ขาว / ดำหมึก)",
    ],
    donts: [
      "ห้ามยืด หมุน เปลี่ยนสี หรือใส่เอฟเฟกต์กับโลโก้",
      "ห้ามวางโลโก้บนพื้นหลังที่รกหรือคอนทราสต์ต่ำ",
      "ห้ามสร้างชื่อโลโก้ขึ้นใหม่ด้วยฟอนต์อื่น",
    ],

    contactTitle: "สื่อมวลชน & พาร์ตเนอร์",
    contact: "ต้องการไฟล์รูปแบบอื่น ไฟล์ความละเอียดสูง หรือขออนุมัติงานร่วมแบรนด์?",
    contactCta: "ติดต่อเรา",
  },
} as const;

export default async function BrandPage() {
  const lang = await resolveLang();
  const t = STR[lang];
  const contactHref = lang === "th" ? "/th#contact" : "/#contact";

  return (
    <div className="bg-background text-foreground antialiased">
      <SiteHeader lang={lang} />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          {t.eyebrow}
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t.intro}</p>

        {/* Logo */}
        <h2 className="mt-14 text-xl font-semibold">{t.logoTitle}</h2>
        <p className="mt-3 text-muted-foreground">{t.logoLede}</p>
        <Link href={localized("/brand/construction", lang)} className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
          {lang === "th" ? "ดูการประกอบเชิงเรขาคณิต →" : "See the geometric construction →"}
        </Link>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { name: t.wordmark, base: "vansales-wordmark", h: "h-7" },
            { name: t.wordvmark, base: "vansales-wordvmark", h: "h-7" },
            { name: t.icon, base: "vansales-mark", h: "h-11" },
            { name: t.vmark, base: "vansales-vmark", h: "h-11" },
          ].map((a) => (
            <div key={a.base} className="overflow-hidden rounded-xl border">
              <div className="grid grid-cols-2">
                <div className="flex min-h-[104px] items-center justify-center bg-white p-6">
                  <img src={`/brand/${a.base}.svg`} alt={`Vansales ${a.name}`} className={a.h} />
                </div>
                <div className="flex min-h-[104px] items-center justify-center p-6" style={{ backgroundColor: INK }}>
                  <img src={`/brand/${a.base}-white.svg`} alt={`Vansales ${a.name}`} className={a.h} />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t px-4 py-3">
                <span className="text-sm font-medium">{a.name}</span>
                <span className="flex gap-4 text-sm">
                  <a href={`/brand/${a.base}.svg`} download className="font-medium text-primary hover:underline">{t.blueSvg}</a>
                  <a href={`/brand/${a.base}-white.svg`} download className="font-medium text-primary hover:underline">{t.whiteSvg}</a>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Colours */}
        <h2 className="mt-14 text-xl font-semibold">{t.colorTitle}</h2>
        <p className="mt-3 text-muted-foreground">{t.colorLede}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {t.colorRows.map((c) => (
            <div key={c.name} className="overflow-hidden rounded-xl border">
              <div className="h-24 w-full border-b" style={{ backgroundColor: c.hex }} />
              <div className="p-4">
                <p className="font-medium">{c.name}</p>
                <p className="mt-0.5 font-mono text-sm text-muted-foreground">{c.hex}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Typography */}
        <h2 className="mt-14 text-xl font-semibold">{t.typeTitle}</h2>
        <div className="mt-6 divide-y rounded-xl border">
          {t.typeRows.map((f) => (
            <div key={f.name} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="text-lg font-semibold">{f.name}</span>
              <span className="text-sm text-muted-foreground">{f.note}</span>
            </div>
          ))}
        </div>

        {/* Do & don't */}
        <h2 className="mt-14 text-xl font-semibold">{t.rulesTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-success/30 bg-success/10 p-5">
            <ul className="space-y-2 text-sm">
              {t.dos.map((d) => (
                <li key={d} className="flex gap-2">
                  <span aria-hidden className="text-success">✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-5">
            <ul className="space-y-2 text-sm">
              {t.donts.map((d) => (
                <li key={d} className="flex gap-2">
                  <span aria-hidden className="text-destructive">✕</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-14 rounded-xl bg-muted/50 p-6">
          <h2 className="text-xl font-semibold">{t.contactTitle}</h2>
          <p className="mt-2 text-muted-foreground">{t.contact}</p>
          <a
            href={contactHref}
            className="mt-4 inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            {t.contactCta}
          </a>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
