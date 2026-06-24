import type { ReactNode } from "react";
import {
  ChevronLeft,
  ShoppingCart,
  Wallet,
  QrCode,
  Banknote,
  CreditCard,
  Check,
  Users,
  Package,
  Truck,
  Plug,
  Tag,
} from "lucide-react";

function Frame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border bg-card shadow-2xl">
      <div className="flex items-center gap-1.5 border-b bg-muted/50 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 rounded bg-background px-2 py-0.5 text-[10px] text-muted-foreground">{url}</span>
      </div>
      {children}
    </div>
  );
}

/** Reports / dashboard — browser frame with KPIs + bar chart. */
export function ReportsMock() {
  const bars = [42, 58, 50, 67, 78, 90];
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border bg-card shadow-2xl">
      <div className="flex items-center gap-1.5 border-b bg-muted/50 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 rounded bg-background px-2 py-0.5 text-[10px] text-muted-foreground">app.vansales.asia/dashboard</span>
      </div>
      <div className="p-3 text-[11px]">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-semibold">Sales overview</span>
          <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">Today</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-primary p-2 text-primary-foreground">
            <div className="text-[9px] opacity-80">Sales today</div>
            <div className="text-sm font-semibold">฿128,400</div>
            <div className="text-[9px] font-medium">▲ 12%</div>
          </div>
          <div className="rounded-lg border p-2"><div className="text-[9px] text-muted-foreground">Orders</div><div className="text-sm font-semibold">48</div></div>
          <div className="rounded-lg border p-2"><div className="text-[9px] text-muted-foreground">Target</div><div className="text-sm font-semibold">82%</div></div>
        </div>
        <div className="mt-3 rounded-lg border p-2">
          <div className="flex items-end gap-1.5" style={{ height: 70 }}>
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary" style={{ height: `${h}%`, opacity: 0.5 + i * 0.08 }} />
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-lg border px-2.5 py-2">
          <span className="font-medium">SO-1042 · Rungrueang</span>
          <span className="rounded-full bg-success/15 px-2 py-0.5 text-[9px] font-medium text-success">Paid</span>
        </div>
      </div>
    </div>
  );
}

/** Mobile — phone showing the order/bill screen. */
export function MobileMock() {
  const items = [
    ["Drinking water ×24", "฿1,200"],
    ["UHT milk ×12", "฿540"],
    ["Instant noodles ×30", "฿180"],
  ];
  return (
    <div className="w-[200px] rounded-[2.2rem] border border-black/10 bg-zinc-900 p-2 shadow-2xl">
      <div className="flex min-h-[420px] flex-col overflow-hidden rounded-[1.7rem] bg-background">
        <div className="relative bg-primary px-3 pb-2.5 pt-2 text-primary-foreground">
          <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-black/25" />
          <div className="flex items-center gap-1.5 text-[12px] font-semibold">
            <ChevronLeft className="h-3.5 w-3.5" /> New order
            <span className="ml-auto rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-medium">Synced</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-2.5 text-[11px]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 rounded-lg border p-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary"><ShoppingCart className="h-3.5 w-3.5" /></span>
              <div className="leading-tight"><div className="font-semibold text-foreground">Somchai Minimart</div><div className="text-[9px] text-muted-foreground">Route 7 · Bang Na</div></div>
            </div>
            <div className="rounded-lg border">
              {items.map((it, i) => (
                <div key={i} className={`flex justify-between px-2.5 py-2 ${i > 0 ? "border-t" : ""}`}>
                  <span className="text-foreground">{it[0]}</span>
                  <span className="font-medium text-foreground">{it[1]}</span>
                </div>
              ))}
              <div className="flex justify-between border-t px-2.5 py-2.5"><span className="text-muted-foreground">Total</span><span className="font-bold text-primary">฿1,920</span></div>
            </div>
          </div>
          <div className="flex-1" />
          <div className="flex items-center justify-center gap-1.5 rounded-lg bg-primary py-2.5 text-[12px] font-semibold text-primary-foreground">
            <Wallet className="h-3.5 w-3.5" /> Collect payment
          </div>
        </div>
        <div className="pb-2 pt-0.5"><div className="mx-auto h-1 w-16 rounded-full bg-foreground/20" /></div>
      </div>
    </div>
  );
}

/** Route map — card with a stylised map + stop list. */
export function RouteMock() {
  const stops = [
    { n: "Somchai Minimart", t: "09:00 · done", st: "done" as const },
    { n: "Rungrueang Store", t: "10:30 · 1.2 km", st: "next" as const },
    { n: "Chok Dee Mart", t: "11:15 · 3.0 km", st: "pending" as const },
  ];
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border bg-card shadow-2xl">
      <svg viewBox="0 0 320 168" className="block w-full">
        <rect width="320" height="168" fill="#e9eef4" />
        <g fill="#dce3ec">
          <rect x="18" y="18" width="66" height="44" rx="5" />
          <rect x="110" y="12" width="78" height="34" rx="5" />
          <rect x="214" y="20" width="88" height="52" rx="5" />
          <rect x="24" y="92" width="70" height="60" rx="5" />
          <rect x="200" y="100" width="98" height="56" rx="5" />
        </g>
        <g stroke="#f3f6fa" strokeWidth="6">
          <line x1="0" y1="78" x2="320" y2="78" />
          <line x1="150" y1="0" x2="150" y2="168" />
        </g>
        <polyline points="40,132 110,86 188,116 272,52" fill="none" stroke="#bcd6f5" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="40,132 110,86 188,116 272,52" fill="none" stroke="#1765B3" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <g fontSize="11" fontWeight="700" textAnchor="middle">
          <circle cx="40" cy="132" r="11" fill="#16a34a" /><text x="40" y="136" fill="#fff">✓</text>
          <circle cx="110" cy="86" r="13" fill="#1765B3" stroke="#fff" strokeWidth="3" /><text x="110" y="90" fill="#fff">2</text>
          <circle cx="188" cy="116" r="11" fill="#fff" stroke="#9aa7b6" strokeWidth="2.5" /><text x="188" y="120" fill="#5b6b7d">3</text>
          <circle cx="272" cy="52" r="11" fill="#fff" stroke="#9aa7b6" strokeWidth="2.5" /><text x="272" y="56" fill="#5b6b7d">4</text>
        </g>
      </svg>
      <div className="divide-y">
        {stops.map((s, i) => {
          const done = s.st === "done";
          const next = s.st === "next";
          return (
            <div key={i} className="flex items-center gap-3 px-4 py-2.5 text-[12px]">
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${done ? "bg-success text-white" : next ? "bg-primary text-primary-foreground" : "border text-muted-foreground"}`}>
                {done ? <Check className="h-3 w-3" /> : i + 1}
              </span>
              <div className="flex-1 leading-tight">
                <div className="font-medium text-foreground">{s.n}</div>
                <div className="text-[10px] text-muted-foreground">{s.t}</div>
              </div>
              {next && <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-medium text-primary">Next</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** A realistic-looking QR: real finder patterns + deterministic data modules. */
function QrPattern({ size = 104 }: { size?: number }) {
  const n = 21;
  const cell = size / n;
  const reserved = (r: number, c: number) => (r < 8 && c < 8) || (r < 8 && c > 12) || (r > 12 && c < 8);
  const finderOn = (r: number, c: number) => {
    for (const [br, bc] of [[0, 0], [0, 14], [14, 0]] as const) {
      if (r >= br && r < br + 7 && c >= bc && c < bc + 7) {
        const rr = r - br, cc = c - bc;
        const ring = rr === 0 || rr === 6 || cc === 0 || cc === 6;
        const center = rr >= 2 && rr <= 4 && cc >= 2 && cc <= 4;
        return ring || center;
      }
    }
    return false;
  };
  const rects: ReactNode[] = [];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const on = reserved(r, c) ? finderOn(r, c) : (r * 5 + c * 3 + ((r * c) % 5)) % 7 < 3;
      if (on) rects.push(<rect key={`${r}-${c}`} x={+(c * cell).toFixed(2)} y={+(r * cell).toFixed(2)} width={+cell.toFixed(2)} height={+cell.toFixed(2)} />);
    }
  }
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} shapeRendering="crispEdges" className="block">
      <g fill="#0f172a">{rects}</g>
    </svg>
  );
}

/** Payment — collect screen with amount, QR and methods. */
export function PaymentMock() {
  const methods = [
    { icon: <QrCode className="h-3.5 w-3.5" />, label: "QR", on: true },
    { icon: <Banknote className="h-3.5 w-3.5" />, label: "Cash" },
    { icon: <CreditCard className="h-3.5 w-3.5" />, label: "Transfer" },
  ];
  return (
    <div className="w-[260px] rounded-2xl border bg-card p-5 text-center shadow-2xl">
      <div className="text-[11px] text-muted-foreground">Amount due · Somchai Minimart</div>
      <div className="mt-1 text-3xl font-bold tracking-tight text-foreground">฿1,920</div>
      <div className="mx-auto mt-4 w-fit rounded-xl border bg-white p-2.5 shadow-sm">
        <QrPattern size={104} />
      </div>
      <div className="mt-4 flex justify-center gap-2 text-[11px]">
        {methods.map((m) => (
          <span key={m.label} className={`flex items-center gap-1 rounded-full px-2.5 py-1 font-medium ${m.on ? "bg-primary/10 text-primary" : "border text-muted-foreground"}`}>
            {m.icon} {m.label}
          </span>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground">
        Confirm payment
      </div>
    </div>
  );
}

/** Orders — browser frame: order detail with a status pipeline. */
export function OrderMock() {
  const steps = ["Taken", "Picked", "Delivering", "Closed"];
  const active = 2;
  const items = [
    ["Drinking water ×24", "฿1,200"],
    ["UHT milk ×12", "฿540"],
    ["Instant noodles ×30", "฿180"],
  ];
  return (
    <Frame url="app.vansales.asia/orders/SO-1042">
      <div className="p-3 text-[11px]">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-semibold">Order SO-1042</span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">In delivery</span>
        </div>
        <div className="flex items-center">
          {steps.map((st, i) => (
            <div key={st} className={i < steps.length - 1 ? "flex flex-1 items-center" : "flex items-center"}>
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold ${i < active ? "bg-success text-white" : i === active ? "bg-primary text-primary-foreground" : "border text-muted-foreground"}`}>
                {i < active ? <Check className="h-3 w-3" /> : i + 1}
              </span>
              {i < steps.length - 1 && <span className={`mx-1 h-0.5 flex-1 rounded ${i < active ? "bg-success" : "bg-border"}`} />}
            </div>
          ))}
        </div>
        <div className="mt-1.5 text-[9px] text-muted-foreground">
          Taken → Picked → <span className="font-medium text-primary">Delivering</span> → Closed
        </div>
        <div className="mt-3 rounded-lg border">
          <div className="border-b px-2.5 py-1.5 font-medium">Somchai Minimart</div>
          {items.map((it, i) => (
            <div key={i} className="flex justify-between border-b px-2.5 py-1.5">
              <span className="text-foreground">{it[0]}</span>
              <span className="font-medium text-foreground">{it[1]}</span>
            </div>
          ))}
          <div className="flex justify-between px-2.5 py-2"><span className="text-muted-foreground">Total</span><span className="font-bold text-primary">฿1,920</span></div>
        </div>
      </div>
    </Frame>
  );
}

/** Customers — profile card with credit and purchase history. */
export function CustomerMock() {
  const buys = [["12 Jun", "฿1,920"], ["5 Jun", "฿2,340"], ["28 May", "฿1,680"]];
  return (
    <div className="w-full max-w-xs rounded-2xl border bg-card p-4 text-[11px] shadow-2xl">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Users className="h-5 w-5" /></span>
        <div>
          <div className="text-sm font-semibold text-foreground">Somchai Minimart</div>
          <div className="text-[10px] text-muted-foreground">Route 7 · Bang Na</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg border p-2"><div className="text-[9px] text-muted-foreground">Credit limit</div><div className="text-sm font-semibold">฿50,000</div></div>
        <div className="rounded-lg border p-2"><div className="text-[9px] text-muted-foreground">Outstanding</div><div className="text-sm font-semibold">฿12,400</div></div>
      </div>
      <div className="mt-3 text-[10px] font-medium text-muted-foreground">Recent purchases</div>
      <div className="mt-1 rounded-lg border">
        {buys.map((b, i) => (
          <div key={i} className={`flex justify-between px-2.5 py-1.5 ${i > 0 ? "border-t" : ""}`}>
            <span className="text-muted-foreground">{b[0]}</span>
            <span className="font-medium text-foreground">{b[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Stock — on-hand list with quantity bars and a low-stock alert. */
export function StockMock() {
  const rows = [
    { n: "Drinking water 600ml", q: "1,240", pct: 80, low: false },
    { n: "UHT milk 1L", q: "320", pct: 22, low: true },
    { n: "Instant noodles", q: "4,800", pct: 95, low: false },
    { n: "Snack pack", q: "150", pct: 12, low: true },
  ];
  return (
    <div className="w-full max-w-sm rounded-2xl border bg-card p-4 text-[11px] shadow-2xl">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-semibold"><Package className="h-4 w-4 text-primary" /> Stock on hand</span>
        <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">Main warehouse</span>
      </div>
      <div className="space-y-2.5">
        {rows.map((r, i) => (
          <div key={i}>
            <div className="flex items-center justify-between">
              <span className="text-foreground">{r.n}</span>
              <span className={`font-medium ${r.low ? "text-destructive" : "text-foreground"}`}>
                {r.q}
                {r.low && <span className="ml-1.5 rounded-full bg-destructive/10 px-1.5 py-0.5 text-[8px] font-semibold text-destructive">Low</span>}
              </span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-muted"><div className={`h-full rounded-full ${r.low ? "bg-destructive" : "bg-primary"}`} style={{ width: `${r.pct}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Delivery — progress with a list of drops and their status. */
export function DeliveryMock() {
  const drops = [
    { n: "Somchai Minimart", t: "Delivered 09:05", st: "done" as const },
    { n: "Rungrueang Store", t: "ETA 10:40", st: "next" as const },
    { n: "Chok Dee Mart", t: "Pending", st: "pending" as const },
  ];
  return (
    <div className="w-full max-w-sm rounded-2xl border bg-card p-4 text-[11px] shadow-2xl">
      <div className="mb-1 flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-semibold"><Truck className="h-4 w-4 text-primary" /> Today&apos;s delivery</span>
        <span className="font-semibold text-primary">18/20</span>
      </div>
      <div className="mb-3 h-2 rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: "90%" }} /></div>
      <div className="rounded-lg border">
        {drops.map((d, i) => {
          const done = d.st === "done";
          const next = d.st === "next";
          return (
            <div key={i} className={`flex items-center gap-3 px-3 py-2 ${i > 0 ? "border-t" : ""}`}>
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold ${done ? "bg-success text-white" : next ? "bg-primary text-primary-foreground" : "border text-muted-foreground"}`}>
                {done ? <Check className="h-3 w-3" /> : i + 1}
              </span>
              <div className="flex-1 leading-tight"><div className="font-medium text-foreground">{d.n}</div><div className="text-[9px] text-muted-foreground">{d.t}</div></div>
              {next && <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[8px] font-medium text-primary">Next</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function PaymentIntegrationsMock() {
  const methods = [
    { label: "QR Payment", icon: <QrCode className="h-3 w-3" /> },
    { label: "TrueMoney", icon: <Wallet className="h-3 w-3" /> },
  ];
  const gateways = ["Stripe", "Beam", "Omise", "2C2P"];
  return (
    <div className="w-[300px] rounded-2xl border bg-card p-4 shadow-2xl sm:w-[330px]">
      <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-foreground">Payment received · ฿1,920</div>
          <div className="text-[11px] text-muted-foreground">PromptPay QR · auto-confirmed</div>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-600">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Live
        </span>
      </div>
      <div className="mt-4 text-[11px] font-medium text-muted-foreground">Payment methods</div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {methods.map((m) => (
          <span key={m.label} className="inline-flex items-center gap-1 rounded-md border bg-muted/40 px-2 py-1 text-[11px] font-medium text-foreground">
            <span className="text-muted-foreground">{m.icon}</span> {m.label}
          </span>
        ))}
      </div>
      <div className="mt-3 text-[11px] font-medium text-muted-foreground">Payment gateways</div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {gateways.map((g) => (
          <span key={g} className="inline-flex items-center gap-1 rounded-md border bg-muted/40 px-2 py-1 text-[11px] font-medium text-foreground">
            <Plug className="h-3 w-3 text-muted-foreground" /> {g}
          </span>
        ))}
      </div>
    </div>
  );
}

export function OrderUnitsMock() {
  const lines = [
    { n: "Drinking water 600ml", u: "2 ลัง", p: "฿1,200" },
    { n: "UHT milk ×12", u: "1 ลัง · 2 โหล", p: "฿540", hot: true },
    { n: "Instant noodles", u: "30 ชิ้น", p: "฿180" },
  ];
  const units = ["ชิ้น", "แพ็ค", "โหล", "ลัง"];
  return (
    <div className="relative">
      <div className="w-[268px] rounded-[2.6rem] border border-black/10 bg-zinc-900 p-2.5 shadow-2xl">
        <div className="flex min-h-[470px] flex-col overflow-hidden rounded-[2.1rem] bg-background">
          <div className="bg-primary px-3 pb-2.5 pt-2 text-primary-foreground">
            <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-black/25" />
            <div className="flex items-center gap-1.5 text-[12px] font-semibold">
              <ChevronLeft className="h-3.5 w-3.5" /> New order
              <span className="ml-auto rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-medium">3 items</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-2.5 text-[11px]">
            <div className="flex items-center gap-2 rounded-lg border p-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary"><ShoppingCart className="h-3.5 w-3.5" /></span>
              <div className="leading-tight"><div className="font-semibold text-foreground">Somchai Minimart</div><div className="text-[9px] text-muted-foreground">Route 7 · Bang Na</div></div>
            </div>
            <div className="overflow-hidden rounded-lg border">
              {lines.map((l, i) => (
                <div key={i} className={`flex items-center justify-between gap-2 px-2.5 py-2 ${i > 0 ? "border-t" : ""} ${l.hot ? "bg-primary/5 ring-1 ring-inset ring-primary/40" : ""}`}>
                  <div className="min-w-0 leading-tight">
                    <div className="truncate text-foreground">{l.n}</div>
                    <div className="text-[9px] text-muted-foreground">{l.u}</div>
                  </div>
                  <span className="shrink-0 font-medium text-foreground">{l.p}</span>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-dashed py-1.5 text-center text-[10px] text-muted-foreground">+ เพิ่มสินค้า</div>
            <div className="flex-1" />
            <div className="flex justify-between rounded-lg border px-2.5 py-2"><span className="text-muted-foreground">Total</span><span className="font-bold text-primary">฿1,920</span></div>
            <div className="rounded-lg bg-primary py-2.5 text-center text-[12px] font-semibold text-primary-foreground">Confirm order</div>
          </div>
          <div className="pb-2 pt-0.5"><div className="mx-auto h-1 w-16 rounded-full bg-foreground/20" /></div>
        </div>
      </div>
      {/* floating zoom callout — unit & promotion picker */}
      <div className="absolute bottom-28 -left-6 w-[156px] rounded-xl border bg-card p-2.5 shadow-xl">
        <div className="text-[10px] font-semibold text-foreground">UHT milk ×12</div>
        <div className="mt-0.5 text-[8px] text-muted-foreground">เลือกหน่วย</div>
        <div className="mt-1.5 flex flex-wrap gap-1">
          {units.map((u) => (
            <span key={u} className={`rounded-md px-1.5 py-0.5 text-[9px] font-medium ${u === "ลัง" ? "bg-primary text-primary-foreground" : "border text-muted-foreground"}`}>{u}</span>
          ))}
        </div>
        <div className="mt-1.5 inline-flex items-center gap-1 rounded-md bg-primary/10 px-1.5 py-0.5 text-[9px] font-medium text-primary"><Tag className="h-2.5 w-2.5" /> ซื้อ 10 แถม 1</div>
      </div>
    </div>
  );
}

export function PodMock() {
  const items = [["Drinking water 600ml", "2 ลัง"], ["UHT milk ×12", "1 ลัง"], ["Instant noodles", "30 ชิ้น"]];
  return (
    <div className="w-[268px] rounded-[2.6rem] border border-black/10 bg-zinc-900 p-2.5 shadow-2xl">
      <div className="flex min-h-[470px] flex-col overflow-hidden rounded-[2.1rem] bg-background">
        <div className="bg-primary px-3 pb-2.5 pt-2 text-primary-foreground">
          <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-black/25" />
          <div className="flex items-center gap-1.5 text-[12px] font-semibold">
            <ChevronLeft className="h-3.5 w-3.5" /> Proof of delivery
            <span className="ml-auto rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-medium">INV-2087</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 p-2.5 text-[11px]">
          <div className="flex items-center gap-2 rounded-lg border p-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/10 text-green-600"><Check className="h-4 w-4" /></span>
            <div className="leading-tight"><div className="font-semibold text-foreground">Somchai Minimart</div><div className="text-[9px] text-muted-foreground">Stop 2 of 4 · 10:32</div></div>
            <span className="ml-auto rounded-full bg-green-500/10 px-2 py-0.5 text-[9px] font-semibold text-green-600">Delivered</span>
          </div>
          <div className="rounded-lg border">
            {items.map((it, i) => (
              <div key={i} className={`flex items-center justify-between px-2.5 py-1.5 ${i > 0 ? "border-t" : ""}`}>
                <span className="flex items-center gap-1.5 text-foreground"><Check className="h-3 w-3 text-green-600" /> {it[0]}</span>
                <span className="text-[9px] text-muted-foreground">{it[1]}</span>
              </div>
            ))}
          </div>
          <div className="rounded-lg border p-2.5">
            <div className="text-[9px] text-muted-foreground">Customer signature</div>
            <div className="mt-1 flex h-14 items-center justify-center rounded-md bg-muted/40 text-zinc-500">
              <svg viewBox="0 0 130 44" className="h-10 w-[88%]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 30 C 14 8, 22 8, 26 26 S 38 44, 46 24 C 52 10, 58 36, 66 26 C 74 16, 78 32, 92 18 C 104 6, 110 30, 124 16" />
              </svg>
            </div>
            <div className="mt-1.5 flex items-center gap-1 text-[9px] text-muted-foreground"><Check className="h-2.5 w-2.5 text-green-600" /> Signed on device · photo attached</div>
          </div>
          <div className="flex-1" />
          <div className="rounded-lg bg-primary py-2.5 text-center text-[12px] font-semibold text-primary-foreground">Confirm delivery</div>
        </div>
        <div className="pb-2 pt-0.5"><div className="mx-auto h-1 w-16 rounded-full bg-foreground/20" /></div>
      </div>
    </div>
  );
}

export const FEATURE_MOCKS = {
  order: OrderMock,
  customer: CustomerMock,
  stock: StockMock,
  route: RouteMock,
  payment: PaymentMock,
  delivery: DeliveryMock,
  reports: ReportsMock,
  mobile: MobileMock,
  paymentIntegrations: PaymentIntegrationsMock,
  orderUnits: OrderUnitsMock,
  pod: PodMock,
} as const;

export type MockKind = keyof typeof FEATURE_MOCKS;
