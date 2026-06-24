import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash van profit calculator",
  description:
    "A simple model to size a cash-van route — cost, profit per bill, and the visit funnel — so you know your break-even. Try it with your own numbers.",
};

import { Wallet, ShoppingBasket, Route, ArrowRight } from "lucide-react";
import { resolveLang } from "@/lib/server-lang";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CashvanCalculator } from "@/components/cashvan-calculator";

const T = {
  en: {
    eyebrow: "Resources · Tool",
    title: "Make your cash van profitable",
    sub: "A simple model to size a cash-van route — the cost of a van, the profit in each bill, and the visit funnel — so you know your break-even before the wheels roll. Then try it with your own numbers.",
    jump: "Try the calculator",
    methodTitle: "The model in three steps",
    steps: [
      { icon: <Wallet />, h: "Start from the real cost", p: "A van is more than a salary. Add allowance, vehicle and fuel, plus software and SIM — that's the number you have to beat every month." },
      { icon: <ShoppingBasket />, h: "Profit per bill, not just sales", p: "What matters is the margin in an average basket. Price × GP% × units across the items in a typical bill gives the profit each drop actually earns." },
      { icon: <Route />, h: "Work the visit funnel", p: "Calls per day and working days set your planned visits. A share turn into visits, then into bills. Compare bills closed to your break-even — that's the whole game." },
    ],
    calcTitle: "Try it with your numbers",
    calcSub: "Every field is editable — adjust costs, the basket, and your hit rates to match your own route.",
    ctaTitle: "Vansales tracks all of this for you",
    ctaSub: "Calls, bills, baskets, margin and stock per van — live, with no spreadsheets.",
    cta1: "Get started",
    cta2: "See features",
  },
  th: {
    eyebrow: "แหล่งข้อมูล · เครื่องมือ",
    title: "ทำหน่วยรถแวนให้มีกำไร",
    sub: "โมเดลง่ายๆ สำหรับวางหน่วยรถเงินสด — ต้นทุนของรถ กำไรในแต่ละบิล และกรวยการเข้าเยี่ยม — ให้รู้จุดคุ้มทุนก่อนออกรถ แล้วลองคำนวณด้วยตัวเลขของคุณเอง",
    jump: "ลองเครื่องคำนวณ",
    methodTitle: "โมเดล 3 ขั้น",
    steps: [
      { icon: <Wallet />, h: "เริ่มจากต้นทุนจริง", p: "รถหนึ่งคันไม่ได้มีแค่เงินเดือน รวมเบี้ยเลี้ยง ค่ารถและน้ำมัน บวกซอฟต์แวร์และซิม — นั่นคือตัวเลขที่ต้องทำให้ได้ทุกเดือน" },
      { icon: <ShoppingBasket />, h: "กำไรต่อบิล ไม่ใช่แค่ยอดขาย", p: "สิ่งที่สำคัญคือมาร์จินในตะกร้าเฉลี่ย ราคา × %กำไร × จำนวน ของสินค้าในบิลทั่วไป จะบอกกำไรจริงที่ได้ในแต่ละการส่ง" },
      { icon: <Route />, h: "ทำงานกับกรวยการเข้าเยี่ยม", p: "เป้าเข้าร้านต่อวันและวันทำงานกำหนดแผนเข้าเยี่ยม ส่วนหนึ่งกลายเป็นการเข้าเยี่ยมจริง แล้วเป็นบิล เทียบบิลที่ปิดได้กับจุดคุ้มทุน — นั่นคือเกมทั้งหมด" },
    ],
    calcTitle: "ลองคำนวณด้วยตัวเลขของคุณ",
    calcSub: "ทุกช่องแก้ไขได้ — ปรับต้นทุน ตะกร้าสินค้า และอัตราต่างๆ ให้ตรงกับหน่วยรถของคุณ",
    ctaTitle: "Vansales เก็บตัวเลขพวกนี้ให้คุณทั้งหมด",
    ctaSub: "จำนวนเข้าร้าน บิล ตะกร้า มาร์จิน และสต๊อกรายคัน — แบบเรียลไทม์ ไม่ต้องใช้สเปรดชีต",
    cta1: "เริ่มต้นใช้งาน",
    cta2: "ดูฟีเจอร์",
  },
} as const;

export default function CashvanCalculatorPage() {
  const lang = resolveLang();
  const t = T[lang];

  return (
    <div className="bg-background text-foreground antialiased">
      <SiteHeader lang={lang} />

      {/* Cover / hero */}
      <section className="relative overflow-hidden bg-[#1765B3] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at top, #3f8ae0, #0f4f93 70%)" }} />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 text-center sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-20 lg:text-left">
          <div>
            <span className="mb-5 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium">{t.eyebrow}</span>
            <h1 className="text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-[2.6rem]">{t.title}</h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75 lg:mx-0">{t.sub}</p>
            <a href="#calculator" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/90">
              {t.jump} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative">
            <CoverArt className="mx-auto w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">{t.methodTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {t.steps.map((s, i) => (
              <div key={i} className="rounded-2xl border bg-card p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&>svg]:size-5">{s.icon}</div>
                <h3 className="font-semibold tracking-tight">{i + 1}. {s.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="scroll-mt-24 bg-muted/30 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.calcTitle}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t.calcSub}</p>
          </div>
          <CashvanCalculator lang={lang} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-16 text-center text-primary-foreground sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">{t.ctaTitle}</h2>
          <p className="mt-4 text-primary-foreground/80">{t.ctaSub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/#contact"><span className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/90">{t.cta1} <ArrowRight className="h-4 w-4" /></span></a>
            <a href="/features"><span className="inline-flex items-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">{t.cta2}</span></a>
          </div>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}

/** Cover illustration: a cash van beside a rising profit chart with a ฿ coin. */
function CoverArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 460 300" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cash van and a rising profit chart" strokeLinejoin="round" strokeLinecap="round">
      {/* ground */}
      <line x1="24" y1="250" x2="436" y2="250" stroke="#fff" strokeOpacity="0.22" strokeWidth="2" />

      {/* rising bars */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={262 + i * 44} y={250 - (70 + i * 42)} width="30" height={70 + i * 42} rx="4" fill="#fff" fillOpacity={0.12 + i * 0.06} stroke="#fff" strokeWidth="2" />
      ))}
      {/* trend line + arrow */}
      <path d="M268 196 L312 168 L356 132 L404 92" fill="none" stroke="#cfe3fb" strokeWidth="3" />
      <path d="M390 90 L406 88 L404 104" fill="none" stroke="#cfe3fb" strokeWidth="3" />

      {/* ฿ coin */}
      <circle cx="402" cy="58" r="24" fill="#fff" />
      <text x="402" y="67" textAnchor="middle" fontSize="26" fontWeight="800" fill="#1765B3" fontFamily="system-ui, sans-serif">฿</text>

      {/* van */}
      <g>
        <rect x="56" y="150" width="116" height="74" rx="9" fill="#fff" stroke="#fff" strokeWidth="2" />
        <path d="M172 174 h34 l26 26 v24 h-60 z" fill="#dbe9fb" stroke="#fff" strokeWidth="2" />
        <rect x="180" y="180" width="28" height="20" rx="3" fill="#1765B3" />
        <circle cx="92" cy="228" r="15" fill="#0f4f93" stroke="#fff" strokeWidth="3" />
        <circle cx="206" cy="228" r="15" fill="#0f4f93" stroke="#fff" strokeWidth="3" />
        <rect x="72" y="168" width="26" height="8" rx="4" fill="#1765B3" />
        <rect x="72" y="184" width="44" height="8" rx="4" fill="#cde0f7" />
      </g>
    </svg>
  );
}
