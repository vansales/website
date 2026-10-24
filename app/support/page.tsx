import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { resolveLang } from "@/lib/server-lang";
import { localized } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Support & SLA",
  description: "How to get help with Vansales: helpdesk, hotline and LINE, system status, support hours, and our response and resolution times by severity.",
};

const HELPDESK = "https://helpdesk.vansales.ai";
const STATUS = "https://status.vansales.ai";
const PHONE = "(+66) 0 8925 2945";
const PHONE_HREF = "tel:+6689252945";

type Severity = { key: "critical" | "high" | "medium" | "low"; name: string; def: string; response: string; update: string; resolve: string; type: string; channel: string };

const DOT: Record<Severity["key"], string> = {
  critical: "bg-destructive",
  high: "bg-warning",
  medium: "bg-primary",
  low: "bg-muted-foreground",
};

const STR = {
  en: {
    eyebrow: "Support",
    title: "Support & service levels",
    intro: "Our support team works in Thai and English. Here is how to reach us, how we handle each issue, and how quickly you can expect a response.",
    channels: [
      { h: "Helpdesk", p: "Report an issue and follow its progress. Every issue gets a ticket, so nothing gets lost.", cta: "Open helpdesk", href: HELPDESK },
      { h: "Hotline", p: `For critical issues, when nobody can work, call ${PHONE}.`, cta: "Call now", href: PHONE_HREF },
      { h: "System status", p: "If the app seems down, check here first for live status and incident updates.", cta: "View status", href: STATUS },
    ],
    otherH: "Other ways to reach us",
    otherP: "Chat with us on our LINE Official Account, or through the LINE support group set up for your company. We also offer remote assistance and, when needed, on-site support.",
    lineAlt: "QR code for the official Vansales LINE account",
    tiersH: "How we handle an issue",
    tiersP: "Issues move up through support tiers until they are solved. Each fix also updates our knowledge base, so the next answer is faster.",
    tiers: [
      { t: "Tier 0", h: "Your team", p: "Your users and your own IT or key users try the knowledge base and basic checks first." },
      { t: "Tier 1", h: "Customer Support", p: "Takes the call or chat, records the details, gives first-line help and finds the cause." },
      { t: "Tier 2", h: "Technical Support", p: "Diagnoses the root cause and provides a fix or a workaround." },
      { t: "Tier 3", h: "Engineers & Developers", p: "Develops and releases a patch, backed by system monitoring and logs." },
    ],
    slaH: "Response and resolution times",
    slaP: "Each issue is given a severity when it is reported. Times below are our service level commitments for each severity.",
    labels: { response: "First response", update: "Status updates", resolve: "Resolution", type: "Fixed by", channel: "Channel" },
    severities: [
      { key: "critical", name: "Critical", def: "Production has stopped for all users.", response: "30 minutes", update: "Every 30 minutes", resolve: "1–6 hours", type: "Hotfix or workaround", channel: "Helpdesk or hotline" },
      { key: "high", name: "High", def: "Work is significantly affected but not stopped. A workaround exists.", response: "2 hours", update: "Every 3 hours", resolve: "6–24 hours", type: "Hotfix or workaround", channel: "Helpdesk" },
      { key: "medium", name: "Medium", def: "Work is affected but not stopped. A workaround exists.", response: "24 hours", update: "Daily", resolve: "2–3 days", type: "Regular test and release cycle", channel: "Helpdesk" },
      { key: "low", name: "Low", def: "A minor defect with little impact on the application.", response: "48 hours", update: "Every 2 days", resolve: "4–6 days", type: "Regular test and release cycle", channel: "Helpdesk" },
    ] as Severity[],
    notes: [
      "Change requests and new feature requests are not covered by the SLA.",
      "Databases and applications are backed up daily at 02:00, keeping the last 7 versions.",
    ],
    hoursH: "Support hours",
    hoursP: "All times are Thailand time (ICT).",
    hoursCols: ["Day", "Hours", "Who is available"],
    hours: [
      ["Monday – Friday", "09:00–18:00", "Full team: customer support, technical support and developers"],
      ["Saturday", "09:00–18:00", "Customer support, with technical support on standby"],
      ["Sunday & public holidays", "09:00–18:00", "Customer support on standby"],
    ],
    reportH: "How to report an issue so we can fix it fast",
    report: [
      "What happened, and what you expected to happen",
      "Document numbers (order, invoice) or the customer involved",
      "A screenshot or short screen recording",
      "Who it affects: one user, one team, or everyone",
      "The phone model and app version, for mobile issues",
      "When it started",
    ],
    moreH: "Getting started",
    moreP: "Planning a move to Vansales? Read",
    moreLink: "how to prepare for a smooth start",
  },
  th: {
    eyebrow: "ช่วยเหลือ",
    title: "ศูนย์ช่วยเหลือและระดับการให้บริการ",
    intro: "ทีมซัพพอร์ตของเราให้บริการทั้งภาษาไทยและภาษาอังกฤษ หน้านี้รวมช่องทางติดต่อ ขั้นตอนการดูแลแต่ละปัญหา และระยะเวลาที่คุณจะได้รับการตอบกลับ",
    channels: [
      { h: "Helpdesk", p: "แจ้งปัญหาและติดตามความคืบหน้าได้ตลอด ทุกเรื่องมีเลข ticket ไม่มีตกหล่น", cta: "เปิด Helpdesk", href: HELPDESK },
      { h: "สายด่วน", p: `กรณีวิกฤต ทุกคนทำงานไม่ได้ โทร ${PHONE}`, cta: "โทรเลย", href: PHONE_HREF },
      { h: "สถานะระบบ", p: "ถ้าแอปดูเหมือนใช้งานไม่ได้ เช็กสถานะล่าสุดและประกาศเหตุขัดข้องที่นี่ก่อน", cta: "ดูสถานะระบบ", href: STATUS },
    ],
    otherH: "ช่องทางอื่น",
    otherP: "แชทกับเราผ่าน LINE Official Account หรือกลุ่ม LINE ซัพพอร์ตที่ตั้งไว้ให้บริษัทของคุณ นอกจากนี้ยังมีบริการช่วยเหลือผ่านการรีโมต และเข้าไปดูแลถึงหน้างานเมื่อจำเป็น",
    lineAlt: "QR code บัญชี LINE ทางการของ Vansales",
    tiersH: "ขั้นตอนการดูแลปัญหา",
    tiersP: "ปัญหาจะถูกส่งต่อตามลำดับขั้นจนกว่าจะแก้ได้ ทุกครั้งที่แก้เสร็จ เราจะอัปเดตคลังความรู้ (knowledge base) เพื่อให้ตอบครั้งต่อไปได้เร็วขึ้น",
    tiers: [
      { t: "Tier 0", h: "ทีมของคุณ", p: "ผู้ใช้และทีม IT หรือ key user ของบริษัท ลองดูคลังความรู้และเช็กเบื้องต้นก่อน" },
      { t: "Tier 1", h: "Customer Support", p: "รับเรื่องทางโทรศัพท์หรือแชท บันทึกรายละเอียด ช่วยแก้เบื้องต้น และหาสาเหตุ" },
      { t: "Tier 2", h: "Technical Support", p: "วิเคราะห์หาต้นเหตุ และแก้ไขหรือหาทางเลี่ยงให้ใช้งานต่อได้" },
      { t: "Tier 3", h: "วิศวกรและนักพัฒนา", p: "พัฒนาและปล่อย patch แก้ไข โดยมีระบบ monitoring และ log คอยช่วย" },
    ],
    slaH: "ระยะเวลาตอบกลับและแก้ไข",
    slaP: "ทุกเรื่องที่แจ้งเข้ามาจะถูกกำหนดระดับความรุนแรง ระยะเวลาด้านล่างคือระดับการให้บริการที่เรายึดถือสำหรับแต่ละระดับ",
    labels: { response: "ตอบกลับครั้งแรก", update: "อัปเดตสถานะ", resolve: "แก้ไขภายใน", type: "วิธีแก้ไข", channel: "ช่องทาง" },
    severities: [
      { key: "critical", name: "วิกฤต", def: "ระบบหยุดทำงาน ผู้ใช้ทุกคนทำงานไม่ได้", response: "30 นาที", update: "ทุก 30 นาที", resolve: "1–6 ชั่วโมง", type: "Hotfix หรือทางเลี่ยงชั่วคราว", channel: "Helpdesk หรือสายด่วน" },
      { key: "high", name: "สูง", def: "กระทบการทำงานมาก แต่ยังไม่หยุด และมีทางเลี่ยงให้ใช้ได้", response: "2 ชั่วโมง", update: "ทุก 3 ชั่วโมง", resolve: "6–24 ชั่วโมง", type: "Hotfix หรือทางเลี่ยงชั่วคราว", channel: "Helpdesk" },
      { key: "medium", name: "ปานกลาง", def: "กระทบการทำงานบ้าง แต่ยังไม่หยุด และมีทางเลี่ยงให้ใช้ได้", response: "24 ชั่วโมง", update: "ทุกวัน", resolve: "2–3 วัน", type: "ทดสอบและปล่อยตามรอบปกติ", channel: "Helpdesk" },
      { key: "low", name: "ต่ำ", def: "ข้อบกพร่องเล็กน้อย กระทบการใช้งานไม่มาก", response: "48 ชั่วโมง", update: "ทุก 2 วัน", resolve: "4–6 วัน", type: "ทดสอบและปล่อยตามรอบปกติ", channel: "Helpdesk" },
    ] as Severity[],
    notes: [
      "คำขอเปลี่ยนแปลง (CR) และคำขอฟีเจอร์ใหม่ ไม่อยู่ในข้อตกลงระดับการให้บริการ (SLA)",
      "สำรองฐานข้อมูลและแอปพลิเคชันทุกวันเวลา 02:00 น. เก็บย้อนหลัง 7 ชุด",
    ],
    hoursH: "เวลาให้บริการ",
    hoursP: "เวลาทั้งหมดเป็นเวลาประเทศไทย",
    hoursCols: ["วัน", "เวลา", "ทีมที่ให้บริการ"],
    hours: [
      ["จันทร์ – ศุกร์", "09:00–18:00", "ทีมเต็ม: Customer Support, Technical Support และนักพัฒนา"],
      ["เสาร์", "09:00–18:00", "Customer Support และ Technical Support สแตนด์บาย"],
      ["อาทิตย์และวันหยุดนักขัตฤกษ์", "09:00–18:00", "Customer Support สแตนด์บาย"],
    ],
    reportH: "แจ้งปัญหาอย่างไรให้แก้ได้เร็ว",
    report: [
      "เกิดอะไรขึ้น และควรจะเป็นอย่างไร",
      "เลขที่เอกสาร (ออเดอร์ ใบแจ้งหนี้) หรือร้านค้าที่เกี่ยวข้อง",
      "ภาพหน้าจอ หรือคลิปบันทึกหน้าจอสั้นๆ",
      "กระทบใครบ้าง: คนเดียว ทั้งทีม หรือทุกคน",
      "รุ่นมือถือและเวอร์ชันแอป กรณีเป็นปัญหาบนมือถือ",
      "เริ่มเกิดตั้งแต่เมื่อไร",
    ],
    moreH: "เริ่มต้นใช้งาน",
    moreP: "กำลังวางแผนย้ายมาใช้ Vansales อ่าน",
    moreLink: "วิธีเตรียมตัวให้เริ่มงานได้ราบรื่น",
  },
} as const;

export default async function SupportPage() {
  const lang = await resolveLang();
  const t = STR[lang];

  return (
    <div className="bg-background text-foreground antialiased">
      <SiteHeader lang={lang} />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{t.eyebrow}</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.intro}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {t.channels.map((c) => (
            <div key={c.h} className="flex flex-col rounded-xl border border-border bg-card p-5 text-card-foreground">
              <h2 className="text-lg font-semibold">{c.h}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.p}</p>
              <a
                href={c.href}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mt-4 inline-flex w-fit items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                {c.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-xl border border-border p-5 sm:flex-row sm:items-center">
          <Image src="/marketing/line-qr.png" alt={t.lineAlt} width={96} height={96} className="h-24 w-24 shrink-0" />
          <div>
            <h2 className="text-lg font-semibold">{t.otherH}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.otherP}</p>
          </div>
        </div>

        <h2 className="mt-16 text-2xl font-semibold">{t.tiersH}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{t.tiersP}</p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.tiers.map((s) => (
            <li key={s.t} className="rounded-xl border border-border p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">{s.t}</span>
              <h3 className="mt-1 font-semibold">{s.h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-16 text-2xl font-semibold">{t.slaH}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{t.slaP}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.severities.map((s) => (
            <div key={s.key} className="rounded-xl border border-border bg-card p-5 text-card-foreground">
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${DOT[s.key]}`} aria-hidden />
                <h3 className="font-semibold">{s.name}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.def}</p>
              <dl className="mt-4 space-y-2 text-sm">
                {(["response", "update", "resolve", "type", "channel"] as const).map((k) => (
                  <div key={k}>
                    <dt className="text-xs text-muted-foreground">{t.labels[k]}</dt>
                    <dd className={k === "response" || k === "resolve" ? "font-semibold" : ""}>{s[k]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {t.notes.map((n) => <li key={n}>{n}</li>)}
        </ul>

        <h2 className="mt-16 text-2xl font-semibold">{t.hoursH}</h2>
        <p className="mt-3 text-muted-foreground">{t.hoursP}</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted">
              <tr>{t.hoursCols.map((c) => <th key={c} className="px-4 py-3 font-semibold">{c}</th>)}</tr>
            </thead>
            <tbody>
              {t.hours.map((r) => (
                <tr key={r[0]} className="border-t border-border">
                  <td className="whitespace-nowrap px-4 py-3 font-medium">{r[0]}</td>
                  <td className="whitespace-nowrap px-4 py-3">{r[1]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-16 text-2xl font-semibold">{t.reportH}</h2>
        <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-relaxed text-muted-foreground">
          {t.report.map((r) => <li key={r}>{r}</li>)}
        </ul>

        <h2 className="mt-16 text-2xl font-semibold">{t.moreH}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {t.moreP}{" "}
          <Link href={localized("/resources/preparing-to-migrate-to-vansales", lang)} className="font-medium text-primary underline underline-offset-2">{t.moreLink}</Link>.
        </p>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
