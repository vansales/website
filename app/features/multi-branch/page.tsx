import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Multi-branch & network",
  description:
    "One platform for your whole distribution network — from a single shop to a multi-company group with branches and sub-distributors.",
};

import {
  Network,
  LayoutDashboard,
  ShieldCheck,
  Boxes,
  Layers,
  Store,
  ArrowRight,
} from "lucide-react";
import { resolveLang } from "@/lib/server-lang";
import { localized } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const CAP_ICONS: ReactNode[] = [
  <Network key="n" />,
  <LayoutDashboard key="d" />,
  <ShieldCheck key="s" />,
  <Boxes key="b" />,
  <Layers key="l" />,
  <Store key="a" />,
];

const STR = {
  en: {
    eyebrow: "Multi-branch & network",
    title: "One platform for your whole distribution network",
    sub: "From a single shop to a multi-company group with branches and sub-distributors — Vansales fits your structure, not the other way round.",
    cta1: "Book a demo",
    cta2: "Contact us",

    modelEyebrow: "How it works",
    modelTitle: "A flexible hierarchy that mirrors your business",
    modelBody:
      "Model your organisation as a tree — group, company, branch, agent. Each unit works in its own space, while owners roll it all up into a single view.",
    org: { group: "Owner / Group", companyA: "Company A", companyB: "Company B", agent: "Distributor", branch1: "Branch 1", branch2: "Branch 2", agentBranch: "Agent branch" },

    fitTitle: "Built for every structure",
    fitSub: "However your business is set up, it maps cleanly onto Vansales.",
    structures: [
      { title: "Multiple companies, one owner", body: "Run several legal entities under one group, with consolidated visibility across all of them.", root: "Owner", kids: ["Co A", "Co B", "Co C"] },
      { title: "One company, many branches", body: "A single company with multiple branches — each with its own stock, team and targets.", root: "Company", kids: ["Branch 1", "Branch 2", "Branch 3"] },
      { title: "Company + sub-distributors", body: "The brand owner pays for the system and lets appointed agents use it — while keeping full sight of their sales.", root: "Brand", kids: ["Agent A", "Agent B"] },
      { title: "Agents with their own branches", body: "A sub-distributor that also runs several branches of its own — nested neatly under the network.", root: "Agent", kids: ["Branch 1", "Branch 2"] },
    ],

    capTitle: "What you get",
    caps: [
      { title: "Flexible hierarchy", body: "Build any structure — group, company, branch, agent — and reshape it as you grow." },
      { title: "Consolidated reporting", body: "Owners see sales, stock and targets rolled up across the whole network in one dashboard." },
      { title: "Role-based access", body: "Each level sees only its own scope; head office sees everything." },
      { title: "Stock by branch & van", body: "Track inventory by warehouse, branch and sales truck — no more guesswork." },
      { title: "Shared or separate data", body: "Share products and price lists across the group, or keep them separate per entity." },
      { title: "Manage your agents", body: "Onboard sub-distributors, set their scope, and track their performance — even when they're a separate business." },
    ],

    splitTitle: "See everything, control everything",
    splitOwnerH: "Owner / head office",
    splitOwnerD: "A consolidated view across every company, branch and agent — total sales, stock and field activity, in real time.",
    splitUnitH: "Each branch or agent",
    splitUnitD: "A focused view of their own customers, stock and targets — clear and uncluttered.",

    ctaTitle: "Ready to map your network?",
    ctaSub: "See how Vansales fits your company, branches and agents.",
  },
  th: {
    eyebrow: "หลายสาขา & เครือข่าย",
    title: "ระบบเดียว เห็นทั้งเครือข่ายการกระจายสินค้าของคุณ",
    sub: "ตั้งแต่ร้านเดียว ไปจนถึงกลุ่มบริษัทที่มีหลายสาขาและตัวแทนจำหน่าย — Vansales ปรับตามโครงสร้างของคุณ ไม่ใช่ให้คุณปรับตามระบบ",
    cta1: "นัดหมายเดโม",
    cta2: "ติดต่อเรา",

    modelEyebrow: "หลักการทำงาน",
    modelTitle: "ลำดับชั้นที่ยืดหยุ่น สะท้อนองค์กรของคุณได้จริง",
    modelBody:
      "จำลององค์กรเป็นแผนผังต้นไม้ — กลุ่ม บริษัท สาขา ตัวแทน แต่ละหน่วยทำงานในพื้นที่ของตัวเอง ขณะที่เจ้าของเห็นภาพรวมทั้งหมดได้ในมุมมองเดียว",
    org: { group: "เจ้าของ / กลุ่ม", companyA: "บริษัท A", companyB: "บริษัท B", agent: "ตัวแทน", branch1: "สาขา 1", branch2: "สาขา 2", agentBranch: "สาขาตัวแทน" },

    fitTitle: "รองรับทุกโครงสร้าง",
    fitSub: "ไม่ว่าธุรกิจคุณจัดโครงสร้างแบบไหน ก็จับลงบน Vansales ได้พอดี",
    structures: [
      { title: "หลายบริษัท เจ้าของเดียว", body: "บริหารหลายนิติบุคคลภายใต้กลุ่มเดียว พร้อมเห็นภาพรวมรวมศูนย์ของทุกบริษัท", root: "เจ้าของ", kids: ["บริษัท A", "บริษัท B", "บริษัท C"] },
      { title: "บริษัทเดียว หลายสาขา", body: "บริษัทเดียวที่มีหลายสาขา แต่ละสาขามีสต๊อก ทีม และเป้าหมายเป็นของตัวเอง", root: "บริษัท", kids: ["สาขา 1", "สาขา 2", "สาขา 3"] },
      { title: "บริษัท + ตัวแทนจำหน่าย", body: "เจ้าของแบรนด์จ่ายค่าระบบ แล้วเปิดให้ตัวแทนที่แต่งตั้งใช้งาน โดยยังเห็นยอดขายของตัวแทนได้เต็มที่", root: "แบรนด์", kids: ["ตัวแทน A", "ตัวแทน B"] },
      { title: "ตัวแทนที่มีสาขาของตัวเอง", body: "ตัวแทนจำหน่ายที่มีหลายสาขาของตัวเอง ก็ซ้อนเข้ามาในเครือข่ายได้เรียบร้อย", root: "ตัวแทน", kids: ["สาขา 1", "สาขา 2"] },
    ],

    capTitle: "สิ่งที่คุณได้",
    caps: [
      { title: "ลำดับชั้นยืดหยุ่น", body: "สร้างโครงสร้างได้ทุกแบบ — กลุ่ม บริษัท สาขา ตัวแทน และปรับเปลี่ยนได้เมื่อธุรกิจโตขึ้น" },
      { title: "รายงานรวมศูนย์", body: "เจ้าของเห็นยอดขาย สต๊อก และเป้าหมาย รวมทั้งเครือข่าย ในแดชบอร์ดเดียว" },
      { title: "สิทธิ์ตามบทบาท", body: "แต่ละชั้นเห็นเฉพาะขอบเขตของตัวเอง ส่วนสำนักงานใหญ่เห็นได้ทั้งหมด" },
      { title: "สต๊อกแยกสาขา & รถ", body: "ติดตามสินค้าคงคลังแยกตามคลัง สาขา และรถขาย ไม่ต้องเดาอีกต่อไป" },
      { title: "ใช้ข้อมูลร่วมหรือแยก", body: "ใช้สินค้าและรายการราคาร่วมกันทั้งกลุ่ม หรือแยกตามแต่ละหน่วยก็ได้" },
      { title: "จัดการตัวแทน", body: "เพิ่มตัวแทนจำหน่าย กำหนดขอบเขต และติดตามผลงาน แม้ตัวแทนจะเป็นคนละกิจการ" },
    ],

    splitTitle: "เห็นทุกอย่าง คุมทุกอย่าง",
    splitOwnerH: "เจ้าของ / สำนักงานใหญ่",
    splitOwnerD: "มุมมองรวมศูนย์ ครอบคลุมทุกบริษัท สาขา และตัวแทน — เห็นยอดขาย สต๊อก และงานภาคสนามแบบเรียลไทม์",
    splitUnitH: "แต่ละสาขาหรือตัวแทน",
    splitUnitD: "มุมมองที่โฟกัสเฉพาะลูกค้า สต๊อก และเป้าหมายของตัวเอง ชัดเจน ไม่รกตา",

    ctaTitle: "พร้อมวางผังเครือข่ายของคุณแล้วหรือยัง?",
    ctaSub: "ดูว่า Vansales เข้ากับบริษัท สาขา และตัวแทนของคุณได้อย่างไร",
  },
} as const;

type OrgLabels = { group: string; companyA: string; companyB: string; agent: string; branch1: string; branch2: string; agentBranch: string };

function OrgChart({ labels }: { labels: OrgLabels }) {
  const node = (x: number, y: number, text: string, variant: "root" | "mid" | "leaf") => {
    const fill = variant === "root" ? "#1765B3" : variant === "mid" ? "#ffffff" : "#eef4fc";
    const stroke = variant === "leaf" ? "#cfe0f5" : "#1765B3";
    const textFill = variant === "root" ? "#ffffff" : "#1c4f86";
    return (
      <g>
        <rect x={x} y={y} width={120} height={42} rx={9} fill={fill} stroke={stroke} strokeWidth={1.5} />
        <text x={x + 60} y={y + 26} textAnchor="middle" fontSize="13" fontWeight="600" fill={textFill}>{text}</text>
      </g>
    );
  };
  const line = (x1: number, y1: number, x2: number, y2: number) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#bcd2ee" strokeWidth={1.5} />
  );
  return (
    <svg viewBox="0 0 640 320" className="w-full" role="img" aria-label="Organisation hierarchy">
      {/* connectors: group -> level 2 */}
      {line(320, 66, 320, 96)}
      {line(130, 96, 550, 96)}
      {line(130, 96, 130, 128)}
      {line(320, 96, 320, 128)}
      {line(550, 96, 550, 128)}
      {/* company A -> branches */}
      {line(130, 170, 130, 204)}
      {line(70, 204, 200, 204)}
      {line(70, 204, 70, 236)}
      {line(200, 204, 200, 236)}
      {/* agent -> branch */}
      {line(550, 170, 550, 236)}
      {/* nodes */}
      {node(260, 24, labels.group, "root")}
      {node(70, 128, labels.companyA, "mid")}
      {node(260, 128, labels.companyB, "mid")}
      {node(490, 128, labels.agent, "mid")}
      {node(10, 236, labels.branch1, "leaf")}
      {node(140, 236, labels.branch2, "leaf")}
      {node(490, 236, labels.agentBranch, "leaf")}
    </svg>
  );
}

function MiniTree({ root, kids }: { root: string; kids: readonly string[] }) {
  return (
    <div className="flex flex-col items-center">
      <span className="rounded-md bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{root}</span>
      <span className="h-4 w-px bg-border" />
      <div className="flex flex-wrap justify-center gap-2 border-t border-border pt-3">
        {kids.map((k) => (
          <span key={k} className="rounded-md border bg-card px-2.5 py-1 text-xs text-foreground">{k}</span>
        ))}
      </div>
    </div>
  );
}

export default function MultiBranchPage() {
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

      {/* The model */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{t.modelEyebrow}</span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{t.modelTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.modelBody}</p>
          </div>
          <div className="rounded-2xl border bg-gradient-to-br from-[#eef4fc] to-[#f8fafc] p-6 ring-1 ring-black/5 sm:p-8">
            <OrgChart labels={t.org} />
          </div>
        </div>
      </section>

      {/* Built for every structure */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.fitTitle}</h2>
            <p className="mt-3 text-muted-foreground">{t.fitSub}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.structures.map((s) => (
              <div key={s.title} className="flex flex-col gap-5 rounded-2xl border bg-card p-6 sm:flex-row sm:items-center">
                <div className="sm:w-1/2">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.body}</p>
                </div>
                <div className="flex justify-center rounded-xl bg-muted/40 p-4 sm:w-1/2">
                  <MiniTree root={s.root} kids={s.kids} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight sm:text-3xl">{t.capTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.caps.map((c, i) => (
              <div key={c.title} className="rounded-2xl border bg-card p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&>svg]:size-5">{CAP_ICONS[i]}</div>
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consolidated vs isolated */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight sm:text-3xl">{t.splitTitle}</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border bg-primary p-7 text-primary-foreground">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 [&>svg]:size-5"><LayoutDashboard /></div>
              <h3 className="text-lg font-semibold">{t.splitOwnerH}</h3>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/80">{t.splitOwnerD}</p>
            </div>
            <div className="rounded-2xl border bg-card p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&>svg]:size-5"><Store /></div>
              <h3 className="text-lg font-semibold">{t.splitUnitH}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.splitUnitD}</p>
            </div>
          </div>
        </div>
      </section>

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
