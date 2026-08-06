import type { Metadata } from "next";
import Link from "next/link";
import { resolveLang } from "@/lib/server-lang";
import { localized } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Account & Data Deletion",
  description: "How team members and companies request account and data deletion in Vansales, what is removed, and what the company keeps as the owner of its business data.",
};
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type Section = { h: string; p?: string; ul?: string[]; ol?: string[]; p2?: string };

const STR = {
  en: {
    eyebrow: "Legal",
    title: "Account & Data Deletion",
    updated: "Last updated: 31 July 2026",
    intro:
      "Vansales is a business service operated by Vansales Application Co., Ltd. (“Vansales”, “we”). A company subscribes to Vansales and creates user logins for its own team (for example, its salespeople and delivery staff). The company owns the account and all the business data in it — sales documents, customer lists, customer companies, orders, stock and routes — and is the controller of that data. Team members are users the company provisions; they use the app but do not own the account or its business data. Because of this, deletion works differently for a team member than for the company. This page explains both. Please read it together with our Privacy Policy.",
    sections: [
      {
        h: "Who can delete what",
        ul: [
          "Team member (for example, a salesperson or delivery staff) — can leave and stop using the app. This removes their personal login and personal data, but not the company's business records, which stay with the company.",
          "Company (account owner / admin) — manages user logins day to day (adding or removing team members) and is the only party that can instruct Vansales to delete the whole account and its business data.",
        ],
      },
      {
        h: "Team members — leaving the app",
        p: "If you are a team member and no longer work with the company (for example, you have resigned), ask your company's admin to cancel your access and remove your data:",
        ol: [
          "Tell your company's admin or staff — through the app or your company's internal channel — that you are leaving, and ask them to cancel your account and remove your sign-in from Vansales.",
          "After you have notified the admin, you can simply sign out of the app.",
          "The admin then clears your login — your username and password, and any personal sign-in you linked (such as Google or LINE) are unlinked from the account.",
          "Within about 30 days your access is fully removed and you can no longer sign in. From that point you are no longer associated with the company in Vansales.",
        ],
        p2: "This removes your personal login and personal profile. The work you recorded — sales documents, customers and other business records — stays with the company, because the company owns that data. If you later join another company that uses Vansales, that company can give you a fresh login and access; it is a separate account and does not carry over your previous data.",
      },
      {
        h: "Companies — removing a user or deleting the account",
        p: "As the account owner, the company controls both individual users and the account as a whole:",
        ul: [
          "Remove a single user — an admin can deactivate or remove a team member at any time from user management in the app (for example, when someone leaves). The person loses access, but the company keeps all business data.",
          "Delete the whole account and its data — sales documents, customer lists, customer companies and other business records are kept until the company instructs us to delete them. Only the company (account owner) can request this, by contacting Vansales. In addition, once the company stops using the service, we delete the account's data within 30 days — except for records and backups we are required to keep by law (see “What we keep, and for how long” below).",
        ],
        p2: "To protect the account, we verify that a full-deletion request comes from the account owner before we act on it, and we may ask for additional confirmation.",
      },
      {
        h: "What gets deleted",
        p: "When a team member leaves, we remove their personal data:",
        ul: [
          "their account profile — name, email, phone number and username;",
          "their login credentials and any linked personal sign-in (such as Google or LINE);",
          "usage and device logs tied to that person.",
        ],
        p2: "When the company requests deletion of the whole account, we also delete or irreversibly anonymise the account's business data — sales documents, customer lists, customer companies, orders, stock and routes — except for records we are legally required to keep (see below).",
      },
      {
        h: "What we keep, and for how long",
        p: "Some records cannot be deleted immediately, either because the company still owns and needs them, or because the law requires us to keep them:",
        ul: [
          "Business data (sales documents, customer lists, customer companies, etc.) — kept as long as the company keeps its account, and deleted only when the company instructs us to.",
          "Invoices, tax documents and accounting records — retained for the period set by Thai tax and accounting law (generally up to 5 years, and up to 10 years where a longer period applies), even after an account is closed.",
          "Records needed to resolve disputes, prevent fraud, or meet a legal obligation — kept only for as long as that purpose requires.",
        ],
        p2: "Data kept for legal reasons is access-restricted and used only for that purpose. When the retention period ends, it is deleted or anonymised.",
      },
      {
        h: "How long deletion takes",
        p: "For a team member leaving, personal login and access are removed within about 30 days. For a full account deletion requested by the company, we confirm receipt without undue delay and complete deletion within the timeframe required by law — generally within 30 days — except for legally required records described above. After we delete the active data, copies may remain in our secure backups; these backups are retained for the period required by law and our backup policy, and are then deleted or anonymised.",
      },
      {
        h: "Data about our customers' customers",
        p: "The business data a company enters may include information about its own customers (for example, the shops it sells to). For that data the company is the controller and Vansales is only the processor. If you are one of those individuals and want your data removed, please send your request to that company, and we will support them as required.",
      },
    ] as Section[],
    contactH: "Contact us",
    contactP: "To make a request or ask a question about deletion, please use our",
    contactCta: "contact form",
    privacyH: "Related",
    privacyP: "For the full details of how we collect, use and protect data, see our",
    privacyLink: "Privacy Policy",
  },
  th: {
    eyebrow: "ข้อกฎหมาย",
    title: "การลบบัญชีและข้อมูล",
    updated: "ปรับปรุงล่าสุด: 31 กรกฎาคม 2026",
    intro:
      "Vansales เป็นบริการสำหรับธุรกิจ ดำเนินการโดย บริษัท แวนเซลส์ แอปพลิเคชัน จำกัด (“Vansales” หรือ “เรา”) โดยบริษัทลูกค้าจะสมัครใช้บริการ Vansales แล้วสร้างบัญชีผู้ใช้ให้ทีมงานของตนเอง (เช่น พนักงานขาย, พนักงานจัดส่ง) บริษัทเป็นเจ้าของบัญชีและข้อมูลธุรกิจทั้งหมดในบัญชีนั้น — เอกสารการขาย รายชื่อลูกค้า บริษัทลูกค้า ออเดอร์ สต็อก และเส้นทาง — และเป็นผู้ควบคุมข้อมูลดังกล่าว ส่วนทีมงานคือผู้ใช้ที่บริษัทสร้างให้ ใช้งานแอปได้แต่ไม่ได้เป็นเจ้าของบัญชีหรือข้อมูลธุรกิจ ด้วยเหตุนี้ การลบข้อมูลของทีมงานจึงต่างจากการลบของบริษัท หน้านี้อธิบายทั้งสองกรณี โปรดอ่านควบคู่กับนโยบายความเป็นส่วนตัวของเรา",
    sections: [
      {
        h: "ใครลบอะไรได้บ้าง",
        ul: [
          "ทีมงาน (เช่น พนักงานขายหรือพนักงานจัดส่ง) — สามารถแจ้งเลิกใช้งานและออกจากแอปได้ ซึ่งจะลบข้อมูลการเข้าสู่ระบบและข้อมูลส่วนบุคคลของตนเอง แต่ไม่รวมเอกสารและข้อมูลธุรกิจของบริษัท ซึ่งยังคงอยู่กับบริษัท",
          "บริษัท (เจ้าของบัญชี / ผู้ดูแลระบบ) — เป็นผู้จัดการบัญชีผู้ใช้ในการทำงานประจำวัน (เพิ่มหรือถอดทีมงาน) และเป็นผู้เดียวที่สามารถแจ้ง Vansales ให้ลบทั้งบัญชีและข้อมูลธุรกิจได้",
        ],
      },
      {
        h: "ทีมงาน — การออกจากแอป",
        p: "หากคุณเป็นทีมงานและไม่ได้ทำงานกับบริษัทแล้ว (เช่น ลาออก) ให้แจ้งแอดมินของบริษัทเพื่อยกเลิกและลบข้อมูล ดังนี้:",
        ol: [
          "แจ้งแอดมินหรือเจ้าหน้าที่ของบริษัท (ผ่านช่องทางในแอป หรือช่องทางภายในของบริษัท) ว่าคุณเลิกใช้งาน และขอให้ยกเลิกบัญชีและลบข้อมูลการเข้าสู่ระบบของคุณออกจาก Vansales",
          "หลังจากแจ้งแอดมินแล้ว คุณสามารถออกจากระบบ (log out) ได้ทันที",
          "แอดมินจะเคลียร์ข้อมูลเข้าสู่ระบบของคุณ — ชื่อผู้ใช้และรหัสผ่าน รวมถึงการเข้าสู่ระบบส่วนตัวที่คุณผูกไว้ (เช่น Google หรือ LINE) จะถูกตัดการเชื่อมออกจากบัญชี",
          "ภายในประมาณ 30 วัน สิทธิ์การเข้าถึงของคุณจะถูกถอดออกทั้งหมดและคุณจะไม่สามารถเข้าสู่ระบบได้อีก นับจากนั้นถือว่าคุณไม่มีความเกี่ยวข้องกับบริษัทใน Vansales แล้ว",
        ],
        p2: "ขั้นตอนนี้จะลบข้อมูลเข้าสู่ระบบและโปรไฟล์ส่วนบุคคลของคุณ ส่วนงานที่คุณบันทึกไว้ — เอกสารการขาย รายชื่อลูกค้า และข้อมูลธุรกิจอื่นๆ — จะยังคงอยู่กับบริษัท เพราะบริษัทเป็นเจ้าของข้อมูลนั้น หากภายหลังคุณไปทำงานกับบริษัทอื่นที่ใช้ Vansales บริษัทใหม่สามารถสร้างบัญชีเข้าสู่ระบบและกำหนดสิทธิ์ให้คุณใหม่ได้ ซึ่งเป็นคนละบัญชีและไม่มีข้อมูลเดิมติดมาด้วย",
      },
      {
        h: "บริษัท — การถอดผู้ใช้หรือลบบัญชี",
        p: "ในฐานะเจ้าของบัญชี บริษัทควบคุมได้ทั้งผู้ใช้รายบุคคลและบัญชีทั้งหมด:",
        ul: [
          "ถอดผู้ใช้รายบุคคล — ผู้ดูแลระบบสามารถปิดการใช้งานหรือถอดทีมงานออกได้ทุกเมื่อจากการจัดการผู้ใช้ในแอป (เช่น เมื่อมีคนลาออก) ผู้ใช้รายนั้นจะหมดสิทธิ์เข้าถึง แต่บริษัทยังเก็บข้อมูลธุรกิจทั้งหมดไว้",
          "ลบทั้งบัญชีและข้อมูล — เอกสารการขาย รายชื่อลูกค้า บริษัทลูกค้า และข้อมูลธุรกิจอื่นๆ จะถูกเก็บไว้จนกว่าบริษัทจะแจ้งให้เราลบ โดยมีเพียงบริษัท (เจ้าของบัญชี) เท่านั้นที่ขอได้ ผ่านการติดต่อ Vansales นอกจากนี้ เมื่อบริษัทเลิกใช้บริการแล้ว ระบบจะดำเนินการลบข้อมูลของบัญชีออกภายใน 30 วัน ยกเว้นข้อมูลและสำเนาสำรอง (backup) ที่กฎหมายกำหนดให้ต้องเก็บ (ดูหัวข้อ “ข้อมูลที่เราเก็บไว้ และระยะเวลา” ด้านล่าง)",
        ],
        p2: "เพื่อปกป้องบัญชี เราจะตรวจสอบว่าคำขอลบทั้งบัญชีมาจากเจ้าของบัญชีจริงก่อนดำเนินการ และอาจขอการยืนยันเพิ่มเติม",
      },
      {
        h: "ข้อมูลที่จะถูกลบ",
        p: "เมื่อทีมงานออกจากแอป เราจะลบข้อมูลส่วนบุคคลของบุคคลนั้น:",
        ul: [
          "โปรไฟล์บัญชี — ชื่อ อีเมล เบอร์โทร และชื่อผู้ใช้",
          "ข้อมูลเข้าสู่ระบบ และการเข้าสู่ระบบส่วนตัวที่ผูกไว้ (เช่น Google หรือ LINE)",
          "ข้อมูล log การใช้งานและอุปกรณ์ที่ผูกกับบุคคลนั้น",
        ],
        p2: "เมื่อบริษัทขอลบทั้งบัญชี เราจะลบหรือทำให้ไม่สามารถระบุตัวตนได้อย่างถาวรสำหรับข้อมูลธุรกิจของบัญชีด้วย — เอกสารการขาย รายชื่อลูกค้า บริษัทลูกค้า ออเดอร์ สต็อก และเส้นทาง — ยกเว้นข้อมูลที่กฎหมายกำหนดให้ต้องเก็บ (ดูด้านล่าง)",
      },
      {
        h: "ข้อมูลที่เราเก็บไว้ และระยะเวลา",
        p: "ข้อมูลบางส่วนไม่สามารถลบได้ทันที เนื่องจากบริษัทยังเป็นเจ้าของและจำเป็นต้องใช้ หรือเพราะกฎหมายกำหนดให้เราต้องเก็บไว้:",
        ul: [
          "ข้อมูลธุรกิจ (เอกสารการขาย รายชื่อลูกค้า บริษัทลูกค้า ฯลฯ) — เก็บไว้ตราบเท่าที่บริษัทยังคงบัญชีไว้ และจะลบเมื่อบริษัทแจ้งให้เราลบเท่านั้น",
          "ใบแจ้งหนี้ เอกสารภาษี และเอกสารทางบัญชี — เก็บตามระยะเวลาที่กฎหมายภาษีและบัญชีของไทยกำหนด (โดยทั่วไปไม่เกิน 5 ปี และไม่เกิน 10 ปีในกรณีที่กฎหมายกำหนดนานกว่า) แม้ปิดบัญชีไปแล้ว",
          "ข้อมูลที่จำเป็นต่อการระงับข้อพิพาท ป้องกันการทุจริต หรือปฏิบัติตามกฎหมาย — เก็บเท่าที่วัตถุประสงค์นั้นกำหนดเท่านั้น",
        ],
        p2: "ข้อมูลที่เก็บด้วยเหตุผลทางกฎหมายจะถูกจำกัดการเข้าถึงและใช้เพียงเพื่อวัตถุประสงค์นั้น เมื่อพ้นระยะเวลาการเก็บรักษา ข้อมูลจะถูกลบหรือทำให้ไม่สามารถระบุตัวตนได้",
      },
      {
        h: "ระยะเวลาในการลบข้อมูล",
        p: "กรณีทีมงานออกจากแอป ข้อมูลเข้าสู่ระบบและสิทธิ์การเข้าถึงจะถูกถอดออกภายในประมาณ 30 วัน ส่วนกรณีบริษัทขอลบทั้งบัญชี เราจะยืนยันการรับคำขอโดยไม่ชักช้า และดำเนินการลบให้เสร็จภายในกรอบเวลาที่กฎหมายกำหนด — โดยทั่วไปภายใน 30 วัน — ยกเว้นข้อมูลที่กฎหมายกำหนดให้ต้องเก็บตามที่อธิบายข้างต้น ทั้งนี้ หลังจากลบข้อมูลที่ใช้งานอยู่แล้ว อาจยังมีสำเนาข้อมูลคงเหลือในระบบสำรอง (backup) ที่ปลอดภัย ซึ่งจะถูกเก็บไว้ตามระยะเวลาที่กฎหมายกำหนดและตามนโยบายการสำรองข้อมูลของเรา ก่อนจะถูกลบหรือทำให้ไม่สามารถระบุตัวตนได้",
      },
      {
        h: "ข้อมูลเกี่ยวกับลูกค้าของลูกค้าเรา",
        p: "ข้อมูลธุรกิจที่บริษัทใส่เข้ามาอาจมีข้อมูลเกี่ยวกับลูกค้าของบริษัทเอง (เช่น ร้านค้าที่บริษัทขายให้) สำหรับข้อมูลนั้นบริษัทคือผู้ควบคุมข้อมูล และ Vansales เป็นเพียงผู้ประมวลผล หากคุณเป็นบุคคลดังกล่าวและต้องการให้ลบข้อมูลของคุณ โปรดส่งคำขอไปยังบริษัทนั้น และเราจะให้การสนับสนุนตามที่จำเป็น",
      },
    ] as Section[],
    contactH: "ติดต่อเรา",
    contactP: "หากต้องการยื่นคำขอหรือสอบถามเรื่องการลบข้อมูล โปรดติดต่อผ่าน",
    contactCta: "แบบฟอร์มติดต่อ",
    privacyH: "ที่เกี่ยวข้อง",
    privacyP: "สำหรับรายละเอียดทั้งหมดว่าเราเก็บ ใช้ และคุ้มครองข้อมูลอย่างไร โปรดดู",
    privacyLink: "นโยบายความเป็นส่วนตัว",
  },
} as const;

export default async function AccountDeletionPage() {
  const lang = await resolveLang();
  const t = STR[lang];

  return (
    <div className="bg-background text-foreground antialiased">
      <SiteHeader lang={lang} />

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{t.eyebrow}</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t.updated}</p>
        <p className="mt-4 text-lg text-muted-foreground">{t.intro}</p>

        {t.sections.map((s) => (
          <div key={s.h}>
            <h2 className="mt-10 text-xl font-semibold">{s.h}</h2>
            {s.p && <p className="mt-3 leading-relaxed text-muted-foreground">{s.p}</p>}
            {s.ol && (
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 leading-relaxed text-muted-foreground">
                {s.ol.map((li) => <li key={li}>{li}</li>)}
              </ol>
            )}
            {s.ul && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted-foreground">
                {s.ul.map((li) => <li key={li}>{li}</li>)}
              </ul>
            )}
            {s.p2 && <p className="mt-3 leading-relaxed text-muted-foreground">{s.p2}</p>}
          </div>
        ))}

        <h2 className="mt-10 text-xl font-semibold">{t.contactH}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {t.contactP}{" "}
          <Link href={localized("/#contact", lang)} className="font-medium text-primary underline underline-offset-2">{t.contactCta}</Link>.
        </p>

        <h2 className="mt-10 text-xl font-semibold">{t.privacyH}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {t.privacyP}{" "}
          <Link href={localized("/privacy", lang)} className="font-medium text-primary underline underline-offset-2">{t.privacyLink}</Link>.
        </p>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
