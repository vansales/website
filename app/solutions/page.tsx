import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Vansales adapts to how your industry sells and distributes — FMCG, food & beverage, pharma, retail & wholesale, brand owners, and automotive parts.",
};

import {
  ShoppingBasket,
  UtensilsCrossed,
  Pill,
  Store,
  Factory,
  Wrench,
  Check,
  ArrowRight,
} from "lucide-react";
import { resolveLang } from "@/lib/server-lang";
import { localized } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SolutionsHeroArt } from "@/components/solutions-hero-art";

// Icons are language-neutral; paired with per-language copy by index.
const ICONS: ReactNode[] = [
  <ShoppingBasket key="1" />,
  <UtensilsCrossed key="2" />,
  <Pill key="3" />,
  <Store key="4" />,
  <Factory key="5" />,
  <Wrench key="6" />,
];

const STR = {
  en: {
    eyebrow: "Solutions",
    title: "Built for the way your industry sells and distributes",
    sub: "Every sector moves goods differently. Vansales adapts to how your team takes orders, manages stock, and delivers — whether you run a fleet of sales reps or a network of distributors.",
    cta1: "Book a demo",
    cta2: "Talk to our team",
    industriesHeading: "Industries we serve",
    industriesSub: "From a single warehouse to a multi-branch distribution network — teams across these sectors run on Vansales every day.",
    industries: [
      {
        title: "FMCG",
        body: "Move fast-moving products through long retail networks without losing track. Real-time stock, route planning, and on-site ordering keep every shelf filled and every order accurate.",
      },
      {
        title: "Food & beverage",
        body: "Keep fresh products moving on tight schedules. Plan delivery routes, track stock, and collect payment on delivery — so nothing sits spoiling in a warehouse.",
      },
      {
        title: "Pharmaceuticals & healthcare",
        body: "Distribute to pharmacies, clinics, and hospitals with the accuracy this sector demands. Track every order and delivery end to end, with proof at each step.",
      },
      {
        title: "Retail & wholesale",
        body: "Serve retail shops and wholesale buyers from one system. Manage tiered pricing, customer credit, and outstanding bills, with a clear view of every account.",
      },
      {
        title: "Brand owners & manufacturers",
        body: "Take your products to market through both your own reps and partner distributors. See sell-through and stock across every channel in real time.",
      },
      {
        title: "Automotive parts",
        body: "Manage thousands of SKUs across branches and vans. Find the right part fast, check stock anywhere, and fulfil orders without the guesswork.",
      },
    ],
    supportHeading: "How Vansales supports your industry",
    supportSub: "The same foundation underneath every sector — adapted to how you work.",
    support: [
      "Van sales & field teams — take orders and collect payment on site, on a single phone.",
      "Multi-tier distribution — sell through your own reps and partner distributors, with stock and pricing per channel.",
      "Real-time stock & routes — know what's on hand and on the truck, and plan the most efficient routes.",
      "Delivery with proof — track every drop on the map, with a signature or photo on delivery.",
      "Live reports — see sales, targets, and outstanding bills across the whole operation, instantly.",
    ],
    ctaTitle: "Not sure where your business fits?",
    ctaSub: "Tell us how you sell and distribute, and we'll show you how Vansales adapts to your operation.",
    ctaBtn: "Talk to our team",
  },
  th: {
    eyebrow: "โซลูชัน",
    title: "ออกแบบมาให้เข้ากับวิธีขายและกระจายสินค้าของแต่ละธุรกิจ",
    sub: "แต่ละอุตสาหกรรมเคลื่อนสินค้าไม่เหมือนกัน Vansales ปรับให้เข้ากับวิธีที่ทีมคุณเปิดออเดอร์ จัดการสต๊อก และส่งของ ไม่ว่าจะใช้ทีมเซลส์วิ่งเอง หรือกระจายผ่านเครือข่ายตัวแทนจำหน่าย",
    cta1: "นัดหมายเดโม",
    cta2: "คุยกับทีมงาน",
    industriesHeading: "อุตสาหกรรมที่เราดูแล",
    industriesSub: "ตั้งแต่คลังเดียว ไปจนถึงเครือข่ายกระจายสินค้าหลายสาขา — ทีมในอุตสาหกรรมเหล่านี้ใช้ Vansales ทำงานทุกวัน",
    industries: [
      {
        title: "สินค้าอุปโภคบริโภค (FMCG)",
        body: "ดันสินค้าหมุนเร็วผ่านเครือข่ายร้านค้าจำนวนมากได้โดยไม่หลุดมือ สต๊อกเรียลไทม์ การวางเส้นทาง และการเปิดออเดอร์หน้างาน ช่วยให้ทุกชั้นวางมีของและทุกออเดอร์แม่นยำ",
      },
      {
        title: "อาหารและเครื่องดื่ม",
        body: "ส่งสินค้าสดให้ทันรอบเวลาที่จำกัด วางแผนเส้นทางจัดส่ง ติดตามสต๊อก และเก็บเงินตอนส่ง — ของไม่ค้างเสียอยู่ในคลัง",
      },
      {
        title: "ยาและเวชภัณฑ์",
        body: "กระจายสินค้าสู่ร้านขายยา คลินิก และโรงพยาบาล ด้วยความแม่นยำที่อุตสาหกรรมนี้ต้องการ ติดตามทุกออเดอร์และการจัดส่งครบทุกขั้นตอน พร้อมหลักฐานในแต่ละจุด",
      },
      {
        title: "ค้าปลีกและค้าส่ง",
        body: "ดูแลทั้งร้านค้าปลีกและลูกค้าค้าส่งในระบบเดียว จัดการราคาหลายระดับ เครดิตลูกค้า และบิลค้าง พร้อมเห็นภาพรวมทุกบัญชีอย่างชัดเจน",
      },
      {
        title: "เจ้าของแบรนด์และผู้ผลิต",
        body: "พาสินค้าออกสู่ตลาดทั้งผ่านทีมเซลส์ของคุณเองและตัวแทนจำหน่าย เห็นยอดขายและสต๊อกในทุกช่องทางแบบเรียลไทม์",
      },
      {
        title: "อะไหล่ยานยนต์",
        body: "จัดการสินค้าหลายพันรายการข้ามสาขาและรถเซลส์ ค้นหาอะไหล่ที่ใช่ได้เร็ว เช็คสต๊อกได้ทุกที่ และจ่ายของตามออเดอร์โดยไม่ต้องเดา",
      },
    ],
    supportHeading: "Vansales ช่วยอุตสาหกรรมของคุณอย่างไร",
    supportSub: "พื้นฐานเดียวกันที่อยู่เบื้องหลังทุกอุตสาหกรรม — ปรับให้เข้ากับวิธีทำงานของคุณ",
    support: [
      "เซลส์วิ่งและทีมภาคสนาม — เปิดออเดอร์และเก็บเงินหน้างานได้ในมือถือเครื่องเดียว",
      "กระจายสินค้าหลายชั้น — ขายผ่านทีมเซลส์ของคุณและตัวแทนจำหน่าย พร้อมแยกสต๊อกและราคาตามช่องทาง",
      "สต๊อกและเส้นทางเรียลไทม์ — รู้ของในคลังและบนรถ พร้อมวางเส้นทางที่คุ้มที่สุด",
      "จัดส่งพร้อมหลักฐาน — ติดตามทุกจุดส่งบนแผนที่ พร้อมลายเซ็นหรือรูปถ่ายตอนส่ง",
      "รายงานเรียลไทม์ — เห็นยอดขาย เป้า และบิลค้างทั้งระบบได้ทันที",
    ],
    ctaTitle: "ไม่แน่ใจว่าธุรกิจคุณเข้ากับแบบไหน?",
    ctaSub: "บอกเราว่าคุณขายและกระจายสินค้าอย่างไร แล้วเราจะแสดงให้เห็นว่า Vansales ปรับเข้ากับงานของคุณได้อย่างไร",
    ctaBtn: "คุยกับทีมงาน",
  },
} as const;

export default function SolutionsPage() {
  const lang = resolveLang();
  const t = STR[lang];

  return (
    <div className="bg-background text-foreground antialiased">
      <SiteHeader lang={lang} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1765B3] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at top, #3f8ae0, #0f4f93 70%)" }} />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 text-center sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-24 lg:text-left">
          <div>
            <span className="mb-5 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium">{t.eyebrow}</span>
            <h1 className="text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-[2.75rem]">{t.title}</h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75 lg:mx-0">{t.sub}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href={localized("/#contact", lang)}><span className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/90">{t.cta1} <ArrowRight className="h-4 w-4" /></span></a>
              <a href={localized("/#contact", lang)}><span className="inline-flex items-center rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">{t.cta2}</span></a>
            </div>
          </div>
          <div className="relative">
            <SolutionsHeroArt lang={lang} className="mx-auto w-full max-w-xl" />
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.industriesHeading}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.industriesSub}</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.industries.map((ind, i) => (
              <div key={ind.title} className="rounded-2xl border bg-card p-6 transition hover:shadow-md">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&>svg]:size-5">
                  {ICONS[i]}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we support */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.supportHeading}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.supportSub}</p>
          </div>
          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {t.support.map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-xl border bg-card p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>
                <span className="text-sm leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-20 text-center text-primary-foreground sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">{t.ctaTitle}</h2>
          <p className="mt-4 text-primary-foreground/80">{t.ctaSub}</p>
          <div className="mt-8 flex justify-center">
            <a href={localized("/#contact", lang)}><span className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/90">{t.ctaBtn} <ArrowRight className="h-4 w-4" /></span></a>
          </div>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
