"use client";

import { useState } from "react";
import {
  ChevronLeft,
  BarChart3,
  MapPin,
  ShoppingCart,
  Wallet,
  Banknote,
  CreditCard,
  QrCode,
  Navigation,
  Check,
} from "lucide-react";
import { cn } from "@vansales/design-system";

type Screen = "order" | "sales" | "route";

/** The home-page phone mock (order / sales / route switcher), copied so the
 * Features "Works on mobile" section can default to the sales report. */
export function PhoneMock({ defaultScreen = "sales", lang = "en" }: { defaultScreen?: Screen; lang?: "en" | "th" }) {
  const L = (en: string, th: string) => (lang === "th" ? th : en);
  const ORDER = {
    appbar: L("New order", "ออเดอร์ใหม่"),
    badge: L("Synced", "ซิงค์แล้ว"),
    customer: L("Somchai Minimart", "ร้านสมชายมินิมาร์ท"),
    customerSub: L("Route 7 · Bang Na", "สาย 7 · บางนา"),
    items: [
      { n: L("Drinking water ×24", "น้ำดื่ม ×24"), p: "฿1,200" },
      { n: L("UHT milk ×12", "นมยูเอชที ×12"), p: "฿540" },
      { n: L("Instant noodles ×30", "บะหมี่กึ่งสำเร็จรูป ×30"), p: "฿180" },
    ],
    totalLabel: L("Total", "ยอดรวม"),
    total: "฿1,920",
    pay: L("Collect payment", "รับชำระเงิน"),
    pm: [L("Cash", "เงินสด"), L("Transfer", "โอน"), L("QR", "QR")],
  };
  const SALES = {
    appbar: L("My sales", "ยอดขายของฉัน"),
    live: L("Live", "เรียลไทม์"),
    kpiLabel: L("Sales today", "ยอดขายวันนี้"),
    kpiValue: "฿128,400",
    kpiDelta: L("▲ 12% vs yesterday", "▲ 12% จากเมื่อวาน"),
    chartLabel: L("Last 7 days", "7 วันล่าสุด"),
    topLabel: L("Top products", "สินค้าขายดี"),
    top: [
      { n: L("Drinking water", "น้ำดื่ม"), v: "฿42,300" },
      { n: L("UHT milk", "นมยูเอชที"), v: "฿28,100" },
      { n: L("Instant noodles", "บะหมี่กึ่งสำเร็จรูป"), v: "฿19,800" },
    ],
  };
  const ROUTE = {
    appbar: L("Today's route", "เส้นทางวันนี้"),
    count: L("4 stops", "4 จุด"),
    stopsLabel: L("Stops", "จุดส่ง"),
    next: L("Next", "ถัดไป"),
    start: L("Start navigation", "เริ่มนำทาง"),
    stops: [
      { n: L("Somchai Minimart", "ร้านสมชายมินิมาร์ท"), t: L("09:00 · done", "09:00 · เสร็จแล้ว"), st: "done" },
      { n: L("Rungrueang Store", "ร้านรุ่งเรือง"), t: "10:30 · 1.2 km", st: "next" },
      { n: L("Chok Dee Mart", "ร้านโชคดีมาร์ท"), t: "11:15 · 3.0 km", st: "pending" },
      { n: L("Wattana Shop", "ร้านวัฒนา"), t: "13:00 · 5.4 km", st: "pending" },
    ],
  };
  const TOGGLE = { order: L("Order", "ออเดอร์"), sales: L("Sales", "ยอดขาย"), route: L("Route", "เส้นทาง") } as const;
  const [screen, setScreen] = useState<Screen>(defaultScreen);
  const pmIcons = [Banknote, CreditCard, QrCode];
  const bars = [40, 55, 48, 66, 60, 82, 95];
  const head = {
    order: { icon: <ChevronLeft className="h-4 w-4" />, title: ORDER.appbar, badge: ORDER.badge },
    sales: { icon: <BarChart3 className="h-4 w-4" />, title: SALES.appbar, badge: SALES.live },
    route: { icon: <MapPin className="h-4 w-4" />, title: ROUTE.appbar, badge: ROUTE.count },
  }[screen];

  return (
    <div className="mx-auto w-[268px]">
      <div className="rounded-[2.6rem] border border-black/10 bg-zinc-900 p-2.5 shadow-2xl">
        <div className="flex min-h-[548px] flex-col overflow-hidden rounded-[2.1rem] bg-background">
          <div className="relative bg-primary px-4 pb-3 pt-2.5 text-primary-foreground">
            <div className="absolute left-1/2 top-1.5 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/25" />
            <div className="mt-3 flex items-center gap-2">
              {head.icon}
              <span className="text-sm font-semibold">{head.title}</span>
              <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium">{head.badge}</span>
            </div>
          </div>

          {screen === "order" ? (
            <div className="flex flex-1 flex-col p-3 text-[12px]" key="order">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 rounded-xl border bg-card p-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary"><ShoppingCart className="h-4 w-4" /></span>
                  <div className="leading-tight">
                    <div className="font-semibold text-foreground">{ORDER.customer}</div>
                    <div className="text-[10px] text-muted-foreground">{ORDER.customerSub}</div>
                  </div>
                </div>
                <div className="rounded-xl border bg-card">
                  {ORDER.items.map((it, i) => (
                    <div key={i} className={`flex items-center justify-between px-3 py-2.5 ${i > 0 ? "border-t" : ""}`}>
                      <span className="text-foreground">{it.n}</span>
                      <span className="font-medium text-foreground">{it.p}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between border-t px-3 py-2.5">
                    <span className="text-muted-foreground">{ORDER.totalLabel}</span>
                    <span className="text-base font-bold text-primary">{ORDER.total}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1" />
              <div className="space-y-2.5">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-[13px] font-semibold text-primary-foreground">
                  <Wallet className="h-4 w-4" /> {ORDER.pay}
                </button>
                <div className="flex items-center justify-center gap-4 text-[10px] text-muted-foreground">
                  {ORDER.pm.map((p, i) => {
                    const Icon = pmIcons[i];
                    return <span key={p} className="flex items-center gap-1"><Icon className="h-3.5 w-3.5" /> {p}</span>;
                  })}
                </div>
              </div>
            </div>
          ) : screen === "sales" ? (
            <div className="flex flex-1 flex-col gap-2.5 p-3 text-[12px]" key="sales">
              <div className="rounded-xl bg-primary p-3 text-primary-foreground">
                <div className="text-[10px] opacity-80">{SALES.kpiLabel}</div>
                <div className="text-2xl font-bold leading-tight">{SALES.kpiValue}</div>
                <div className="text-[10px] font-medium">{SALES.kpiDelta}</div>
              </div>
              <div className="rounded-xl border bg-card p-3">
                <div className="mb-2 text-[10px] text-muted-foreground">{SALES.chartLabel}</div>
                <div className="flex items-end gap-1.5" style={{ height: 92 }}>
                  {bars.map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-primary" style={{ height: `${h}%`, opacity: 0.5 + i * 0.07 }} />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border bg-card">
                <div className="border-b px-3 py-2 text-[10px] font-medium text-muted-foreground">{SALES.topLabel}</div>
                {SALES.top.map((it, i) => (
                  <div key={i} className={`flex items-center justify-between px-3 py-2 ${i > 0 ? "border-t" : ""}`}>
                    <span className="text-foreground">{it.n}</span>
                    <span className="font-medium text-foreground">{it.v}</span>
                  </div>
                ))}
              </div>
              <div className="flex-1" />
            </div>
          ) : (
            <div className="flex flex-1 flex-col p-3 text-[12px]" key="route">
              <div className="space-y-2.5">
                <div className="overflow-hidden rounded-xl border bg-[#e9eef4]">
                  <svg viewBox="0 0 240 132" className="block w-full">
                    <rect width="240" height="132" fill="#e9eef4" />
                    <g fill="#dce3ec">
                      <rect x="14" y="14" width="50" height="34" rx="4" />
                      <rect x="82" y="8" width="58" height="26" rx="4" />
                      <rect x="160" y="16" width="66" height="40" rx="4" />
                      <rect x="18" y="70" width="52" height="48" rx="4" />
                      <rect x="150" y="78" width="74" height="44" rx="4" />
                    </g>
                    <g stroke="#f3f6fa" strokeWidth="5">
                      <line x1="0" y1="60" x2="240" y2="60" />
                      <line x1="112" y1="0" x2="112" y2="132" />
                    </g>
                    <polyline points="30,104 82,66 142,90 206,40" fill="none" stroke="#bcd6f5" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="30,104 82,66 142,90 206,40" fill="none" stroke="#1765B3" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <g fontSize="9" fontWeight="700" textAnchor="middle">
                      <circle cx="30" cy="104" r="9" fill="#16a34a" /><text x="30" y="107.5" fill="#fff">✓</text>
                      <circle cx="82" cy="66" r="10.5" fill="#1765B3" stroke="#fff" strokeWidth="2.5" /><text x="82" y="69.5" fill="#fff">2</text>
                      <circle cx="142" cy="90" r="9" fill="#fff" stroke="#9aa7b6" strokeWidth="2" /><text x="142" y="93" fill="#5b6b7d">3</text>
                      <circle cx="206" cy="40" r="9" fill="#fff" stroke="#9aa7b6" strokeWidth="2" /><text x="206" y="43" fill="#5b6b7d">4</text>
                    </g>
                  </svg>
                </div>
                <div className="rounded-xl border bg-card">
                  <div className="flex items-center justify-between border-b px-3 py-2 text-[10px] font-medium text-muted-foreground">
                    <span>{ROUTE.stopsLabel}</span><span>{ROUTE.count}</span>
                  </div>
                  {ROUTE.stops.map((st, i) => {
                    const done = st.st === "done";
                    const next = st.st === "next";
                    return (
                      <div key={i} className={`flex items-center gap-2.5 px-3 py-2 ${i > 0 ? "border-t" : ""}`}>
                        <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold", done ? "bg-success text-white" : next ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground")}>
                          {done ? <Check className="h-3 w-3" /> : i + 1}
                        </span>
                        <div className="flex-1 leading-tight">
                          <div className="font-medium text-foreground">{st.n}</div>
                          <div className="text-[10px] text-muted-foreground">{st.t}</div>
                        </div>
                        {next && <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-medium text-primary">{ROUTE.next}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex-1" />
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-[13px] font-semibold text-primary-foreground">
                <Navigation className="h-4 w-4" /> {ROUTE.start}
              </button>
            </div>
          )}

          <div className="pb-2 pt-1"><div className="mx-auto h-1 w-24 rounded-full bg-foreground/20" /></div>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <div className="inline-flex rounded-full border bg-card p-1 shadow-sm">
          {(["order", "sales", "route"] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setScreen(k)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-medium transition",
                screen === k ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {TOGGLE[k]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
