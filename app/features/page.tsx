import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Orders, customers, stock, routes, payments, delivery and reports — everything your sales and distribution team needs, in one place.",
};

import {
  ShoppingCart,
  Users,
  Boxes,
  Route,
  Wallet,
  Truck,
  BarChart3,
  Smartphone,
  Check,
  ArrowRight,
} from "lucide-react";
import type { ReactNode } from "react";
import { resolveLang } from "@/lib/server-lang";
import { localized } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FEATURE_MOCKS, type MockKind } from "@/components/feature-mocks";
import { PhoneMock } from "@/components/phone-mock";

// Media is language-neutral; paired with the per-language copy by index.
// Every section shows a product UI mockup for a consistent, on-brand look.
const MEDIA: { icon: ReactNode; mock: MockKind; slug?: string }[] = [
  { icon: <ShoppingCart />, mock: "order", slug: "orders" },
  { icon: <Users />, mock: "customer", slug: "customers" },
  { icon: <Boxes />, mock: "stock", slug: "stock" },
  { icon: <Route />, mock: "route", slug: "route" },
  { icon: <Wallet />, mock: "payment", slug: "payments" },
  { icon: <Truck />, mock: "delivery", slug: "delivery" },
  { icon: <BarChart3 />, mock: "reports", slug: "reports" },
  { icon: <Smartphone />, mock: "mobile", slug: "mobile" },
];

const STR = {
  en: {
    eyebrow: "Features",
    title: "Everything your sales & distribution team needs, in one place",
    sub: "From taking an order at the counter to delivering at the customer's door — it all runs in one system. Faster, more accurate, and fully under control.",
    cta1: "Book a demo",
    cta2: "Contact us",
    learnMore: "Learn more",
    sections: [
      { tag: "Orders", title: "Order management, end to end", body: "Take orders, track their status, and close the sale — all in one place, from the counter to the back office. Stock, pricing, and credit are applied automatically, so nothing slips through.", points: ["Take orders and issue receipts on site in seconds", "Track order status in real time: taken → picked → delivered → closed", "Apply pricing, promotions, and customer credit automatically"] },
      { tag: "Customers", title: "Know every customer", body: "Purchase history, credit, and contacts for every customer — right in your rep's hand, so they know the shop before they even walk in.", points: ["Purchase history for every shop", "Credit limit and outstanding balance", "Shop location, notes, and contacts"] },
      { tag: "Stock", title: "Stock across every branch", body: "Check what's on hand across every warehouse and branch — including what's loaded on the sales truck — so you spot a shortage before the customer does.", points: ["Real-time stock across warehouses and branches", "Van stock loaded on each truck", "Low-stock alerts before you run dry"] },
      { tag: "Field", title: "Routes & field team", body: "Plan routes, track your team's location, and check in at every shop — so you know who's where, and whether each planned visit actually happened.", points: ["Auto-plan and optimize sales routes", "Live GPS tracking of the field team", "Check-ins and daily visit plans"] },
      { tag: "Payments", title: "Get paid on the spot", body: "Collect payment on site — cash, transfer, or QR — and manage credit and outstanding bills, so the money never lags behind the sale.", points: ["Accept cash, transfer, or QR", "Manage credit and outstanding balances", "Issue receipts and tax invoices on site"] },
      { tag: "Delivery", title: "Delivery & distribution", body: "Plan deliveries and track vehicles and the status of every drop on the map, with proof of delivery — fewer leftovers, and accurate ETAs for customers.", points: ["Auto-route deliveries to save time and fuel", "Live status for every drop on the map", "Proof of delivery — signature or photo"] },
      { tag: "Insights", title: "Real-time reports", body: "See sales, targets, and the whole business live — so you can act right away, without waiting for month-end.", points: ["Today's sales versus target, at a glance", "Reports by product, rep, or area", "Export your data anytime"] },
      { tag: "Mobile", title: "Works on mobile", body: "Everything runs on a single phone, out in the field, with data synced back to the office automatically.", points: ["Take orders and collect payment on mobile", "Works on iOS and Android", "Syncs to the central system in real time"] },
    ],
    ctaTitle: "Ready to put it all to work?",
    ctaSub: "See how Vansales fits your sales and distribution operation.",
  },
  th: {
    eyebrow: "ฟีเจอร์",
    title: "ทุกอย่างที่ทีมขายและกระจายสินค้าต้องใช้ ในที่เดียว",
    sub: "ตั้งแต่เปิดออเดอร์หน้าร้าน ไปจนถึงส่งของถึงมือลูกค้า — จบในระบบเดียว ทำงานเร็วขึ้น แม่นยำขึ้น ควบคุมได้ทุกขั้นตอน",
    cta1: "นัดหมายเดโม",
    cta2: "ติดต่อเรา",
    learnMore: "ดูเพิ่มเติม",
    sections: [
      { tag: "ออเดอร์", title: "บริหารออเดอร์ครบวงจร", body: "เปิดบิล รับออเดอร์ ติดตามสถานะ ไปจนปิดการขาย — จบในที่เดียว ตั้งแต่หน้าร้านถึงหลังบ้าน เชื่อมสต๊อก ราคา และเครดิตให้อัตโนมัติ ไม่มีตกหล่น", points: ["เปิดบิล/ออกใบเสร็จหน้างานในไม่กี่วินาที", "ติดตามสถานะออเดอร์แบบเรียลไทม์: รับ → จัด → ส่ง → ปิด", "ดึงราคา โปรโมชัน และเครดิตลูกค้าให้อัตโนมัติ"] },
      { tag: "ลูกค้า", title: "ฐานข้อมูลลูกค้า รู้จักทุกร้าน", body: "ประวัติการซื้อ เครดิต และข้อมูลติดต่อของลูกค้าทุกราย อยู่ในมือเซลส์ — เข้าใจลูกค้าตั้งแต่ก่อนเดินเข้าร้าน", points: ["ประวัติการซื้อย้อนหลังรายร้าน", "วงเงินเครดิตและยอดค้างชำระ", "ตำแหน่งร้าน โน้ต และผู้ติดต่อ"] },
      { tag: "สต๊อก", title: "จัดการสต๊อกหลายสาขา", body: "เช็คของคงเหลือได้ทุกคลัง ทุกสาขา รวมถึงสต๊อกบนรถเซลส์ — รู้ว่าของจะหมดก่อนลูกค้าจะทวงถาม", points: ["สต๊อกเรียลไทม์ หลายคลัง หลายสาขา", "สต๊อกบนรถเซลส์ (van stock)", "แจ้งเตือนเมื่อสินค้าใกล้หมด"] },
      { tag: "ภาคสนาม", title: "เส้นทางและทีมขายภาคสนาม", body: "วางแผนเส้นทาง ติดตามตำแหน่งทีม และเช็คอินเข้าร้าน — รู้ว่าใครอยู่ไหน และเข้าร้านครบตามแผนหรือไม่", points: ["วางและจัดเส้นทางขายอัตโนมัติ", "ติดตามตำแหน่งทีมแบบเรียลไทม์ (GPS)", "เช็คอิน และแผนเยี่ยมร้านรายวัน"] },
      { tag: "เก็บเงิน", title: "เก็บเงินและวางบิล", body: "เก็บเงินหน้างานได้ทันที ทั้งเงินสด โอน และ QR พร้อมจัดการเครดิตและบิลค้าง — เงินไม่ตามหลังการขาย", points: ["รับชำระ เงินสด / โอน / QR", "จัดการเครดิตและยอดค้าง", "ออกใบเสร็จ/ใบกำกับภาษีหน้างาน"] },
      { tag: "จัดส่ง", title: "จัดส่งและกระจายสินค้า", body: "วางแผนจัดส่ง ติดตามรถและสถานะแต่ละจุดบนแผนที่ พร้อมหลักฐานการส่ง — ลดของตกค้าง ลูกค้ารู้เวลาส่งที่แม่นยำ", points: ["จัดเส้นทางส่งอัตโนมัติ ประหยัดเวลาและน้ำมัน", "ติดตามสถานะการส่งแต่ละจุดแบบเรียลไทม์", "หลักฐานการส่ง (ลายเซ็น/รูปถ่าย)"] },
      { tag: "รายงาน", title: "รายงานและแดชบอร์ดเรียลไทม์", body: "เห็นยอดขาย เป้า และภาพรวมธุรกิจแบบเรียลไทม์ ตัดสินใจได้ทันที ไม่ต้องรอสิ้นเดือน", points: ["แดชบอร์ดยอดขายวันนี้ เทียบเป้า", "รายงานแยกตามสินค้า เซลส์ หรือพื้นที่", "ส่งออกข้อมูลได้ทุกเมื่อ"] },
      { tag: "มือถือ", title: "ใช้งานบนมือถือ ได้ทุกที่", body: "ทำงานได้ครบบนมือถือเครื่องเดียวถึงหน้างานจริง ข้อมูลซิงค์เข้าหลังบ้านอัตโนมัติ", points: ["เปิดบิล รับออเดอร์ เก็บเงิน บนมือถือ", "รองรับทั้ง iOS และ Android", "ซิงค์เข้าระบบกลางแบบเรียลไทม์"] },
    ],
    ctaTitle: "พร้อมใช้งานจริงแล้วหรือยัง?",
    ctaSub: "ดูว่า Vansales เข้ากับงานขายและกระจายสินค้าของคุณอย่างไร",
  },
} as const;

export default function FeaturesPage() {
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
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-24">
          <span className="mb-5 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium">{t.eyebrow}</span>
          <h1 className="text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-[2.75rem]">{t.title}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">{t.sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={localized("/#contact", lang)}><span className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/90">{t.cta1} <ArrowRight className="h-4 w-4" /></span></a>
            <a href={localized("/#contact", lang)}><span className="inline-flex items-center rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">{t.cta2}</span></a>
          </div>
        </div>
      </section>

      {/* Feature sections — alternating */}
      {t.sections.map((s, i) => {
        const m = MEDIA[i];
        const flipped = i % 2 === 1;
        const Mock = FEATURE_MOCKS[m.mock] as (p: { lang?: "en" | "th" }) => JSX.Element;
        return (
          <section key={s.title} className={i % 2 === 1 ? "bg-muted/30 px-4 py-20 sm:px-6" : "px-4 py-20 sm:px-6"}>
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
              <div className={flipped ? "lg:order-2" : ""}>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  <span className="[&>svg]:size-3.5">{m.icon}</span> {s.tag}
                </div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{s.body}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>
                      <span className="text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
                {m.slug && (
                  <Link href={localized(`/features/${m.slug}`, lang)} className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {t.learnMore} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </div>

              <div className={flipped ? "lg:order-1" : ""}>
                <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef4fc] to-[#f8fafc] p-6 ring-1 ring-black/5 sm:p-10">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fc4ff]/30 blur-3xl" />
                  <div className="relative">
                    {m.mock === "mobile" ? <PhoneMock defaultScreen="sales" lang={lang} /> : <Mock lang={lang} />}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-primary px-4 py-20 text-center text-primary-foreground sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">{t.ctaTitle}</h2>
          <p className="mt-4 text-primary-foreground/80">{t.ctaSub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={localized("/#contact", lang)}><span className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/90">{t.cta1} <ArrowRight className="h-4 w-4" /></span></a>
            <a href={localized("/#contact", lang)}><span className="inline-flex items-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">{t.cta2}</span></a>
          </div>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
