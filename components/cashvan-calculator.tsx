"use client";

import { useMemo, useState, type ReactNode } from "react";
import { type Lang } from "@/lib/use-lang";
import { Check, X } from "lucide-react";

interface Product {
  name: string;
  srp: number;
  gp: number; // gross-profit %
  units: number; // units per bill
}

const DEFAULT_PRODUCTS: Product[] = [
  { name: "A", srp: 250, gp: 20, units: 1 },
  { name: "B", srp: 200, gp: 15, units: 2 },
  { name: "C", srp: 180, gp: 10, units: 1 },
];

const STR = {
  en: {
    costTitle: "Monthly cost per van",
    salary: "Salary",
    allowance: "Allowance",
    car: "Vehicle + fuel",
    others: "Other (software, SIM…)",
    totalCost: "Total cost",
    basketTitle: "Average basket per bill",
    colProduct: "Item",
    colSrp: "Price",
    colGp: "GP %",
    colUnits: "Units",
    addProduct: "+ Add item",
    salesPerBill: "Sales / bill",
    profitPerBill: "Profit / bill",
    margin: "Margin",
    opsTitle: "Route & coverage",
    workingDays: "Working days / month",
    frequency: "Visits per outlet / month",
    freqHint: "weekly = 4 · biweekly = 2 · monthly = 1",
    callsPerDay: "Target calls / day",
    visitPct: "Visit achievement",
    strikePct: "Order strike rate",
    outletPct: "Buying outlets",
    resultsTitle: "Results per van · month",
    netProfit: "Net profit / month",
    pass: "Profitable",
    fail: "Not yet profitable",
    passNote: "Each van clears its cost and earns a margin.",
    failNote: (n: number) => `Short by ${n} bills/month to break even.`,
    breakeven: "Break-even",
    breakevenU: "bills / month",
    billsClosed: "Bills closed",
    billsClosedU: "/ month",
    sales: "Sales / month",
    grossMargin: "Gross margin",
    outlets: "Outlets covered",
    buyingOutlets: "Buying outlets",
    funnel: "Sales funnel / month",
    planned: "Planned calls",
    visited: "Visited",
    bills: "Bills",
    perDay: "Per working day",
    billsPerDay: "Bills / day",
    salesPerDay: "Sales / day",
    reset: "Reset to sample",
    vansLabel: "Number of vans",
    perVanTag: "per van",
    fleetSales: "Total sales",
    fleetGross: "Total gross margin",
    note: "Figures are estimates from the inputs above — adjust them to your own operation.",
  },
  th: {
    costTitle: "ต้นทุนต่อรถ / เดือน",
    salary: "เงินเดือน",
    allowance: "เบี้ยเลี้ยง",
    car: "รถ + น้ำมัน",
    others: "อื่นๆ (ซอฟต์แวร์, ซิม…)",
    totalCost: "ต้นทุนรวม",
    basketTitle: "ตะกร้าเฉลี่ยต่อบิล",
    colProduct: "สินค้า",
    colSrp: "ราคาขาย",
    colGp: "กำไร %",
    colUnits: "จำนวน",
    addProduct: "+ เพิ่มสินค้า",
    salesPerBill: "ยอดขาย / บิล",
    profitPerBill: "กำไร / บิล",
    margin: "มาร์จิน",
    opsTitle: "เส้นทางและการเข้าเยี่ยม",
    workingDays: "วันทำงาน / เดือน",
    frequency: "ความถี่เข้าร้าน / เดือน",
    freqHint: "รายสัปดาห์ = 4 · 2 สัปดาห์ครั้ง = 2 · รายเดือน = 1",
    callsPerDay: "เป้าเข้าร้าน / วัน",
    visitPct: "เข้าเยี่ยมได้จริง",
    strikePct: "อัตราปิดการขาย",
    outletPct: "ร้านที่ซื้อ",
    resultsTitle: "ผลลัพธ์ต่อรถ · เดือน",
    netProfit: "กำไรสุทธิ / เดือน",
    pass: "มีกำไร",
    fail: "ยังไม่คุ้มทุน",
    passNote: "รถคันนี้คุ้มต้นทุนและเหลือกำไร",
    failNote: (n: number) => `ขาดอีก ${n} บิล/เดือน ถึงจะคุ้มทุน`,
    breakeven: "จุดคุ้มทุน",
    breakevenU: "บิล / เดือน",
    billsClosed: "บิลที่ปิดได้",
    billsClosedU: "/ เดือน",
    sales: "ยอดขาย / เดือน",
    grossMargin: "กำไรขั้นต้น",
    outlets: "ร้านที่ดูแล",
    buyingOutlets: "ร้านที่ซื้อจริง",
    funnel: "กรวยการขาย / เดือน",
    planned: "แผนเข้าเยี่ยม",
    visited: "เข้าเยี่ยมจริง",
    bills: "ปิดบิล",
    perDay: "ต่อวันทำงาน",
    billsPerDay: "บิล / วัน",
    salesPerDay: "ยอดขาย / วัน",
    reset: "รีเซ็ตเป็นตัวอย่าง",
    vansLabel: "จำนวนหน่วยรถ",
    perVanTag: "ต่อคัน",
    fleetSales: "ยอดขายรวม",
    fleetGross: "กำไรขั้นต้นรวม",
    note: "ตัวเลขเป็นการประมาณจากค่าที่กรอกด้านบน — ปรับให้ตรงกับหน่วยรถของคุณได้เลย",
  },
} as const;

const DEFAULT_OPS = { workingDays: 24, frequency: 2, callsPerDay: 25, visitPct: 90, strikePct: 60, outletPct: 80 };
const DEFAULT_COST = { salary: 15000, allowance: 3000, car: 17000, others: 2000 };

export function CashvanCalculator({ lang }: { lang: Lang }) {
  const t = STR[lang];
  const [cost, setCost] = useState(DEFAULT_COST);
  const [ops, setOps] = useState(DEFAULT_OPS);
  const [products, setProducts] = useState<Product[]>(DEFAULT_PRODUCTS);
  const [vans, setVans] = useState(1);

  const nf = useMemo(() => new Intl.NumberFormat(lang === "th" ? "th-TH" : "en-US", { maximumFractionDigits: 0 }), [lang]);
  const money = (n: number) => `฿${nf.format(Math.round(isFinite(n) ? n : 0))}`;
  const num = (n: number) => nf.format(Math.round(isFinite(n) ? n : 0));

  const r = useMemo(() => {
    const totalCost = cost.salary + cost.allowance + cost.car + cost.others;
    const thbPerBill = products.reduce((s, p) => s + p.srp * p.units, 0);
    const profitPerBill = products.reduce((s, p) => s + p.srp * (p.gp / 100) * p.units, 0);
    const marginPct = thbPerBill > 0 ? (profitPerBill / thbPerBill) * 100 : 0;
    const breakeven = profitPerBill > 0 ? Math.round(totalCost / profitPerBill) : Infinity;
    const plannedCalls = ops.callsPerDay * ops.workingDays;
    const outlets = ops.frequency > 0 ? plannedCalls / ops.frequency : 0;
    const visited = plannedCalls * (ops.visitPct / 100);
    const effectiveBills = visited * (ops.strikePct / 100);
    const effectiveOutlets = outlets * (ops.outletPct / 100);
    const sales = effectiveBills * thbPerBill;
    const grossMargin = effectiveBills * profitPerBill;
    const netProfit = grossMargin - totalCost;
    const pass = isFinite(breakeven) && effectiveBills >= breakeven;
    const shortBy = Math.max(0, Math.ceil(breakeven - effectiveBills));
    return {
      totalCost, thbPerBill, profitPerBill, marginPct, breakeven, plannedCalls,
      outlets, visited, effectiveBills, effectiveOutlets, sales, grossMargin, netProfit,
      pass, shortBy, billsPerDay: effectiveBills / (ops.workingDays || 1), salesPerDay: sales / (ops.workingDays || 1),
    };
  }, [cost, ops, products]);

  const setProduct = (i: number, patch: Partial<Product>) =>
    setProducts((ps) => ps.map((p, j) => (j === i ? { ...p, ...patch } : p)));
  const addProduct = () => setProducts((ps) => [...ps, { name: String.fromCharCode(65 + ps.length), srp: 0, gp: 0, units: 1 }]);
  const removeProduct = (i: number) => setProducts((ps) => (ps.length > 1 ? ps.filter((_, j) => j !== i) : ps));
  const reset = () => { setCost(DEFAULT_COST); setOps(DEFAULT_OPS); setProducts(DEFAULT_PRODUCTS); setVans(1); };

  // funnel bar widths relative to planned calls
  const fw = (n: number) => (r.plannedCalls > 0 ? Math.max(4, (n / r.plannedCalls) * 100) : 0);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_minmax(320px,380px)]">
      {/* ---------- Inputs ---------- */}
      <div className="space-y-6">
        {/* Costs */}
        <Card>
          <CardTitle>{t.costTitle}</CardTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label={t.salary} value={cost.salary} onChange={(v) => setCost({ ...cost, salary: v })} suffix="฿" />
            <Field label={t.allowance} value={cost.allowance} onChange={(v) => setCost({ ...cost, allowance: v })} suffix="฿" />
            <Field label={t.car} value={cost.car} onChange={(v) => setCost({ ...cost, car: v })} suffix="฿" />
            <Field label={t.others} value={cost.others} onChange={(v) => setCost({ ...cost, others: v })} suffix="฿" />
          </div>
          <Total label={t.totalCost} value={money(r.totalCost)} />
        </Card>

        {/* Basket */}
        <Card>
          <CardTitle>{t.basketTitle}</CardTitle>
          <div className="space-y-2">
            <div className="grid grid-cols-[1fr_72px_64px_56px_28px] gap-2 px-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              <span>{t.colProduct}</span><span className="text-right">{t.colSrp}</span><span className="text-right">{t.colGp}</span><span className="text-right">{t.colUnits}</span><span />
            </div>
            {products.map((p, i) => (
              <div key={i} className="grid grid-cols-[1fr_72px_64px_56px_28px] items-center gap-2">
                <input value={p.name} onChange={(e) => setProduct(i, { name: e.target.value })} className="h-9 rounded-lg border bg-background px-2.5 text-sm outline-none focus:border-primary" />
                <Cell value={p.srp} onChange={(v) => setProduct(i, { srp: v })} />
                <Cell value={p.gp} onChange={(v) => setProduct(i, { gp: v })} />
                <Cell value={p.units} onChange={(v) => setProduct(i, { units: v })} />
                <button onClick={() => removeProduct(i)} aria-label="remove" className="flex h-9 w-7 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground disabled:opacity-30" disabled={products.length <= 1}>
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
          <button onClick={addProduct} className="mt-1 text-sm font-medium text-primary hover:underline">{t.addProduct}</button>
          <div className="mt-4 grid grid-cols-3 gap-3 border-t pt-4 text-center">
            <Mini label={t.salesPerBill} value={money(r.thbPerBill)} />
            <Mini label={t.profitPerBill} value={money(r.profitPerBill)} />
            <Mini label={t.margin} value={`${r.marginPct.toFixed(1)}%`} />
          </div>
        </Card>

        {/* Operations */}
        <Card>
          <CardTitle>{t.opsTitle}</CardTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label={t.workingDays} value={ops.workingDays} onChange={(v) => setOps({ ...ops, workingDays: v })} />
            <Field label={t.frequency} value={ops.frequency} onChange={(v) => setOps({ ...ops, frequency: v })} hint={t.freqHint} />
            <Field label={t.callsPerDay} value={ops.callsPerDay} onChange={(v) => setOps({ ...ops, callsPerDay: v })} />
            <Field label={t.visitPct} value={ops.visitPct} onChange={(v) => setOps({ ...ops, visitPct: v })} suffix="%" />
            <Field label={t.strikePct} value={ops.strikePct} onChange={(v) => setOps({ ...ops, strikePct: v })} suffix="%" />
            <Field label={t.outletPct} value={ops.outletPct} onChange={(v) => setOps({ ...ops, outletPct: v })} suffix="%" />
          </div>
        </Card>
      </div>

      {/* ---------- Results ---------- */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="space-y-4 rounded-2xl border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">{t.resultsTitle}</h3>
            <button onClick={reset} className="text-xs text-muted-foreground hover:text-foreground hover:underline">{t.reset}</button>
          </div>

          {/* Fleet size */}
          <div className="flex items-center justify-between rounded-xl border px-3 py-2">
            <span className="text-sm font-medium">{t.vansLabel}</span>
            <div className="flex items-center gap-1.5">
              <button onClick={() => setVans((v) => Math.max(1, v - 1))} aria-label="decrease" className="flex h-7 w-7 items-center justify-center rounded-lg border text-base leading-none text-muted-foreground transition hover:bg-muted">−</button>
              <input type="number" inputMode="numeric" min={1} value={vans} onChange={(e) => setVans(Math.max(1, Math.floor(Number(e.target.value) || 1)))} className="h-8 w-14 rounded-lg border bg-background text-center text-sm font-semibold outline-none focus:border-primary" />
              <button onClick={() => setVans((v) => v + 1)} aria-label="increase" className="flex h-7 w-7 items-center justify-center rounded-lg border text-base leading-none text-muted-foreground transition hover:bg-muted">+</button>
            </div>
          </div>

          {/* Net profit (fleet) + pass/fail */}
          <div className={`rounded-xl p-4 ${r.pass ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900"}`}>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className={`flex h-5 w-5 items-center justify-center rounded-full ${r.pass ? "bg-emerald-500" : "bg-amber-500"} text-white`}>
                {r.pass ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
              </span>
              {r.pass ? t.pass : t.fail}
            </div>
            <div className="mt-2 text-3xl font-bold tracking-tight">{money(r.netProfit * vans)}</div>
            <p className="mt-1 text-xs opacity-80">
              {t.netProfit}
              {vans > 1 ? ` · ${money(r.netProfit)} / ${t.perVanTag} × ${vans}` : ` · ${r.pass ? t.passNote : t.failNote(r.shortBy)}`}
            </p>
          </div>

          {/* Fleet totals (only when more than one van) */}
          {vans > 1 && (
            <div className="grid grid-cols-2 gap-3">
              <Kpi label={t.fleetSales} value={money(r.sales * vans)} />
              <Kpi label={t.fleetGross} value={money(r.grossMargin * vans)} />
            </div>
          )}

          {/* KPI grid — per van */}
          {vans > 1 && <p className="-mb-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{t.perVanTag}</p>}
          <div className="grid grid-cols-2 gap-3">
            <Kpi label={t.breakeven} value={isFinite(r.breakeven) ? num(r.breakeven) : "—"} unit={t.breakevenU} />
            <Kpi label={t.billsClosed} value={num(r.effectiveBills)} unit={t.billsClosedU} highlight={r.pass} />
            <Kpi label={t.sales} value={money(r.sales)} />
            <Kpi label={t.grossMargin} value={money(r.grossMargin)} />
            <Kpi label={t.outlets} value={num(r.outlets)} />
            <Kpi label={t.buyingOutlets} value={num(r.effectiveOutlets)} />
          </div>

          {/* Funnel */}
          <div className="rounded-xl border p-3">
            <p className="mb-2 text-xs font-medium text-muted-foreground">{t.funnel}</p>
            <FunnelRow label={t.planned} value={num(r.plannedCalls)} width={fw(r.plannedCalls)} tone="bg-primary/30" />
            <FunnelRow label={t.visited} value={num(r.visited)} width={fw(r.visited)} tone="bg-primary/55" />
            <FunnelRow label={t.bills} value={num(r.effectiveBills)} width={fw(r.effectiveBills)} tone="bg-primary" />
          </div>

          {/* Per day */}
          <div className="flex items-center justify-between rounded-xl bg-muted/50 px-3 py-2 text-xs">
            <span className="text-muted-foreground">{t.perDay}</span>
            <span className="font-medium">{num(r.billsPerDay)} {t.billsPerDay} · {money(r.salesPerDay)}</span>
          </div>

          <p className="text-[11px] leading-relaxed text-muted-foreground">{t.note}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- small UI helpers ---------- */
function Card({ children }: { children: ReactNode }) {
  return <div className="space-y-4 rounded-2xl border bg-card p-5">{children}</div>;
}
function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-sm font-semibold">{children}</h3>;
}
function Field({ label, value, onChange, suffix, hint }: { label: string; value: number; onChange: (v: number) => void; suffix?: string; hint?: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-muted-foreground">{label}</span>
      <div className="relative">
        <input type="number" inputMode="numeric" value={value} onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="h-9 w-full rounded-lg border bg-background px-2.5 pr-7 text-sm outline-none focus:border-primary" />
        {suffix && <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">{suffix}</span>}
      </div>
      {hint && <span className="mt-1 block text-[11px] text-muted-foreground">{hint}</span>}
    </label>
  );
}
function Cell({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return <input type="number" inputMode="numeric" value={value} onChange={(e) => onChange(Number(e.target.value) || 0)} className="h-9 w-full rounded-lg border bg-background px-2 text-right text-sm outline-none focus:border-primary" />;
}
function Total({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-primary/5 px-3 py-2.5">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-base font-bold text-primary">{value}</span>
    </div>
  );
}
function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-base font-bold">{value}</div>
      <div className="text-[11px] text-muted-foreground">{label}</div>
    </div>
  );
}
function Kpi({ label, value, unit, highlight }: { label: string; value: string; unit?: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-3 ${highlight ? "border-primary/40 bg-primary/5" : ""}`}>
      <div className="text-[11px] text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-lg font-bold tracking-tight">{value}</div>
      {unit && <div className="text-[10px] text-muted-foreground">{unit}</div>}
    </div>
  );
}
function FunnelRow({ label, value, width, tone }: { label: string; value: string; width: number; tone: string }) {
  return (
    <div className="mb-1.5 last:mb-0">
      <div className="mb-0.5 flex items-center justify-between text-[11px]">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div className={`h-full rounded-full ${tone}`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
