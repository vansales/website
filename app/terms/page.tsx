import type { Metadata } from "next";
import Link from "next/link";
import { resolveLang } from "@/lib/server-lang";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of the Vansales website and service.",
};
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type Section = { h: string; p?: string; ul?: string[]; p2?: string };

const STR = {
  en: {
    eyebrow: "Legal",
    title: "Terms of Use",
    updated: "Last updated: 21 June 2026",
    intro:
      "These Terms of Use are a general summary of the rules for accessing the Vansales website (vansales.asia) and the Vansales service, provided for information only. The full, binding agreement for a paid subscription is the one you accept when you register for the service. If anything here differs from that registration agreement, the registration agreement prevails.",
    sections: [
      {
        h: "Acceptance of these terms",
        p: "By using this website or the Vansales service, you agree to these terms, our Privacy Policy and our Cookie Policy. If you do not agree to them, please do not use the website or the service.",
      },
      {
        h: "About the service",
        p: "Vansales is a sales and distribution platform for businesses with field and van-sales teams — covering order taking, stock, route planning, delivery and reporting. The features available are as described on this website, and they may change over time.",
      },
      {
        h: "Eligibility and accounts",
        ul: [
          "You must be able to enter into a binding contract and must use the service for business purposes.",
          "You are responsible for the accuracy of the information you provide.",
          "You are responsible for keeping your login credentials confidential and for all activity that takes place under your account.",
          "You may add authorised users (System Users); you remain responsible for their use of the service.",
        ],
      },
      {
        h: "Licence to use",
        p: "When you subscribe, we grant you a non-exclusive, non-transferable right to use the Vansales software for your business for the duration of your subscription, subject to these terms and the registration agreement.",
      },
      {
        h: "Acceptable use",
        p: "You agree not to:",
        ul: [
          "use the service for any unlawful purpose or in breach of the rights of others;",
          "copy, modify, resell, reverse-engineer, or attempt to extract the source code of the platform;",
          "disrupt or overload the service, or attempt to gain unauthorised access to it or to other accounts;",
          "upload malware or any unlawful, infringing or harmful content.",
        ],
        p2: "We may suspend or terminate access for serious or repeated breaches.",
      },
      {
        h: "Your data",
        p: "You own the business data you put into the service. We handle personal data as described in our Privacy Policy and, where we process data on your behalf, under a Data Processing Agreement provided at registration.",
      },
      {
        h: "Fees, subscription and renewal",
        ul: [
          "Pricing depends on the package you choose and your number of users, branches and features, and is shown to you before you subscribe or pay.",
          "Paid subscriptions run for the agreed period and renew automatically unless cancelled, as set out in the registration agreement.",
          "Fees exclude taxes unless stated otherwise, and non-payment may lead to suspension of the service.",
        ],
      },
      {
        h: "Termination and suspension",
        p: "You may stop using a free service at any time. Paid subscriptions end at the close of the paid period unless otherwise agreed. We may suspend or terminate access if you breach these terms or the registration agreement. Fees already paid are non-refundable except where the law requires.",
      },
      {
        h: "Intellectual property",
        p: "The Vansales platform, software, website and content are owned by Vansales Application Co., Ltd. or its licensors. You may not copy, distribute or modify them without our written permission. You keep ownership of your own data and content.",
      },
      {
        h: "Service availability and changes",
        p: "We work to keep the service available and secure, but we do not guarantee that it will be uninterrupted or error-free. We may update, maintain or change features, and we may amend these terms; where changes are material, we will give notice as required.",
      },
      {
        h: "Disclaimers and limitation of liability",
        p: "To the extent permitted by law, the website and service are provided “as is”. To the maximum extent allowed, our total liability for any claim is limited to the service fees you paid for the period in which the issue arose, and we are not liable for any indirect or consequential loss. Nothing in these terms limits liability that cannot be limited by law.",
      },
      {
        h: "Governing law",
        p: "These terms are governed by the laws of Thailand, and any dispute is subject to the jurisdiction of the Thai courts.",
      },
    ] as Section[],
    relatedLabel: "See also:",
    privacyLink: "Privacy Policy",
    cookieLink: "Cookie Policy",
    contactH: "Contact us",
    contactP: "Questions about these terms? Contact:",
    entity: "Vansales Application Co., Ltd.",
    emailLabel: "Email",
    email: "info@vansalesapp.com",
    phoneLabel: "Phone",
    phone: "064-714-4429, 089-925-2945",
    lineLabel: "LINE",
    line: "@vansales",
  },
  th: {
    eyebrow: "ข้อกฎหมาย",
    title: "ข้อกำหนดการใช้งาน",
    updated: "ปรับปรุงล่าสุด: 21 มิถุนายน 2026",
    intro:
      "ข้อกำหนดการใช้งานนี้เป็นสรุปกติกาโดยทั่วไปสำหรับการเข้าถึงเว็บไซต์ Vansales (vansales.asia) และบริการ Vansales จัดทำขึ้นเพื่อเป็นข้อมูลเบื้องต้นเท่านั้น ทั้งนี้ ข้อตกลงฉบับสมบูรณ์ที่มีผลผูกพันสำหรับการสมัครใช้บริการแบบเสียค่าบริการ คือฉบับที่คุณยอมรับตอนสมัครใช้งาน หากข้อความในหน้านี้ขัดกับข้อตกลงตอนสมัคร ให้ยึดข้อตกลงตอนสมัครเป็นหลัก",
    sections: [
      {
        h: "การยอมรับข้อกำหนด",
        p: "การใช้เว็บไซต์นี้หรือบริการ Vansales ถือว่าคุณยอมรับข้อกำหนดนี้ รวมถึงนโยบายความเป็นส่วนตัวและนโยบายคุกกี้ของเรา หากคุณไม่ยอมรับข้อกำหนดดังกล่าว โปรดอย่าใช้เว็บไซต์หรือบริการ",
      },
      {
        h: "เกี่ยวกับบริการ",
        p: "Vansales เป็นแพลตฟอร์มงานขายและกระจายสินค้าสำหรับธุรกิจที่มีทีมขายภาคสนามและทีมขายบนรถ ครอบคลุมการรับออเดอร์ สต๊อก การวางแผนเส้นทาง การจัดส่ง และการรายงาน ฟีเจอร์ที่ใช้ได้เป็นไปตามที่ระบุบนเว็บไซต์นี้ และอาจเปลี่ยนแปลงได้ตามเวลา",
      },
      {
        h: "คุณสมบัติผู้ใช้และบัญชี",
        ul: [
          "คุณต้องสามารถทำสัญญาที่มีผลผูกพันได้ และต้องใช้บริการเพื่อวัตถุประสงค์ทางธุรกิจ",
          "คุณรับผิดชอบต่อความถูกต้องของข้อมูลที่ให้ไว้",
          "คุณรับผิดชอบในการรักษาข้อมูลเข้าสู่ระบบให้เป็นความลับ และรับผิดชอบต่อกิจกรรมทั้งหมดที่เกิดขึ้นภายใต้บัญชีของคุณ",
          "คุณสามารถเพิ่มผู้ใช้ที่ได้รับอนุญาต (System Users) ได้ โดยคุณยังคงรับผิดชอบต่อการใช้งานของผู้ใช้เหล่านั้น",
        ],
      },
      {
        h: "สิทธิการใช้งาน",
        p: "เมื่อคุณสมัครใช้บริการ เราให้สิทธิคุณใช้ซอฟต์แวร์ Vansales แบบไม่ผูกขาด (ไม่ใช่แต่เพียงผู้เดียว) และไม่สามารถโอนสิทธิให้ผู้อื่นได้ เพื่อใช้ในธุรกิจของคุณตลอดระยะเวลาที่สมัคร ภายใต้ข้อกำหนดนี้และข้อตกลงตอนสมัคร",
      },
      {
        h: "การใช้งานที่ยอมรับได้",
        p: "คุณตกลงว่าจะไม่:",
        ul: [
          "ใช้บริการเพื่อวัตถุประสงค์ที่ผิดกฎหมาย หรือในลักษณะที่ละเมิดสิทธิของผู้อื่น",
          "คัดลอก ดัดแปลง ขายต่อ ทำวิศวกรรมย้อนกลับ หรือพยายามดึงซอร์สโค้ดของแพลตฟอร์ม",
          "รบกวนหรือทำให้บริการทำงานหนักเกินไป หรือพยายามเข้าถึงบริการหรือบัญชีของผู้อื่นโดยไม่ได้รับอนุญาต",
          "อัปโหลดมัลแวร์ หรือเนื้อหาที่ผิดกฎหมาย ละเมิดสิทธิ หรือเป็นอันตราย",
        ],
        p2: "เราอาจระงับหรือยุติการเข้าถึง ในกรณีที่มีการฝ่าฝืนอย่างร้ายแรงหรือเกิดขึ้นซ้ำ",
      },
      {
        h: "ข้อมูลของคุณ",
        p: "คุณเป็นเจ้าของข้อมูลธุรกิจที่คุณใส่เข้ามาในบริการ เราจัดการข้อมูลส่วนบุคคลตามนโยบายความเป็นส่วนตัว และในกรณีที่เราประมวลผลข้อมูลแทนคุณ จะเป็นไปตามข้อตกลงการประมวลผลข้อมูล (DPA) ที่มอบให้ตอนสมัครใช้งาน",
      },
      {
        h: "ค่าบริการ การสมัคร และการต่ออายุ",
        ul: [
          "ค่าบริการขึ้นอยู่กับแพ็กเกจที่เลือก จำนวนผู้ใช้ สาขา และฟีเจอร์ โดยจะแจ้งให้ทราบก่อนสมัครหรือชำระเงิน",
          "การสมัครแบบเสียค่าบริการมีกำหนดตามระยะที่ตกลง และต่ออายุอัตโนมัติเว้นแต่มีการยกเลิก ตามที่ระบุในข้อตกลงตอนสมัคร",
          "ค่าบริการยังไม่รวมภาษีเว้นแต่ระบุไว้เป็นอย่างอื่น และการไม่ชำระเงินอาจทำให้บริการถูกระงับ",
        ],
      },
      {
        h: "การยุติและการระงับบริการ",
        p: "คุณสามารถหยุดใช้บริการแบบไม่เสียค่าบริการได้ทุกเมื่อ ส่วนบริการแบบเสียค่าบริการจะสิ้นสุดเมื่อจบรอบที่ชำระไว้ เว้นแต่จะตกลงเป็นอย่างอื่น เราอาจระงับหรือยุติการเข้าถึงหากคุณฝ่าฝืนข้อกำหนดนี้หรือข้อตกลงตอนสมัคร ทั้งนี้ ค่าบริการที่ชำระแล้วจะไม่คืนให้เว้นแต่กฎหมายกำหนด",
      },
      {
        h: "ทรัพย์สินทางปัญญา",
        p: "แพลตฟอร์ม ซอฟต์แวร์ เว็บไซต์ และเนื้อหาของ Vansales เป็นกรรมสิทธิ์ของ บริษัท แวนเซลส์ แอปพลิเคชัน จำกัด หรือผู้ให้สิทธิ คุณไม่สามารถคัดลอก เผยแพร่ หรือดัดแปลงสิ่งเหล่านี้ได้โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร ทั้งนี้ คุณยังคงเป็นเจ้าของข้อมูลและเนื้อหาของคุณเอง",
      },
      {
        h: "ความพร้อมให้บริการและการเปลี่ยนแปลง",
        p: "เราพยายามให้บริการพร้อมใช้งานและปลอดภัย แต่ไม่รับประกันว่าจะไม่มีการหยุดชะงักหรือข้อผิดพลาด เราอาจปรับปรุง บำรุงรักษา หรือเปลี่ยนแปลงฟีเจอร์ และอาจแก้ไขข้อกำหนดนี้ กรณีมีการเปลี่ยนแปลงที่สำคัญ เราจะแจ้งให้ทราบตามที่กำหนด",
      },
      {
        h: "ข้อจำกัดความรับผิด",
        p: "เท่าที่กฎหมายอนุญาต เว็บไซต์และบริการให้บริการตามสภาพที่เป็นอยู่ (“as is”) และเท่าที่กฎหมายอนุญาตสูงสุด ความรับผิดรวมของเราต่อข้อเรียกร้องใดๆ จำกัดเพียงค่าบริการที่คุณชำระสำหรับรอบที่เกิดเหตุ และเราไม่รับผิดต่อความเสียหายทางอ้อมหรือความเสียหายสืบเนื่อง ทั้งนี้ ไม่มีข้อใดในข้อกำหนดนี้ที่จำกัดความรับผิดในส่วนที่กฎหมายไม่อนุญาตให้จำกัด",
      },
      {
        h: "กฎหมายที่ใช้บังคับ",
        p: "ข้อกำหนดนี้อยู่ภายใต้กฎหมายของประเทศไทย และข้อพิพาทใดๆ อยู่ในเขตอำนาจของศาลไทย",
      },
    ] as Section[],
    relatedLabel: "ดูเพิ่มเติม:",
    privacyLink: "นโยบายความเป็นส่วนตัว",
    cookieLink: "นโยบายคุกกี้",
    contactH: "ติดต่อเรา",
    contactP: "มีคำถามเกี่ยวกับข้อกำหนดนี้? ติดต่อ:",
    entity: "บริษัท แวนเซลส์ แอปพลิเคชัน จำกัด",
    emailLabel: "อีเมล",
    email: "info@vansalesapp.com",
    phoneLabel: "โทรศัพท์",
    phone: "064-714-4429, 089-925-2945",
    lineLabel: "LINE",
    line: "@vansales",
  },
} as const;

export default function TermsPage() {
  const lang = resolveLang();
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
            {s.ul && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted-foreground">
                {s.ul.map((li) => <li key={li}>{li}</li>)}
              </ul>
            )}
            {s.p2 && <p className="mt-3 leading-relaxed text-muted-foreground">{s.p2}</p>}
          </div>
        ))}

        <p className="mt-10 text-sm text-muted-foreground">
          {t.relatedLabel}{" "}
          <Link href="/privacy" className="font-medium text-primary underline underline-offset-2">{t.privacyLink}</Link>
          {" · "}
          <Link href="/cookie-policy" className="font-medium text-primary underline underline-offset-2">{t.cookieLink}</Link>
        </p>

        <h2 className="mt-10 text-xl font-semibold">{t.contactH}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{t.contactP}</p>
        <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed">
          <p className="font-semibold text-foreground">{t.entity}</p>
          <p className="mt-1 text-muted-foreground">
            {t.emailLabel}: <a href={`mailto:${t.email}`} className="text-primary underline underline-offset-2">{t.email}</a>
          </p>
          <p className="text-muted-foreground">{t.phoneLabel}: {t.phone}</p>
          <p className="text-muted-foreground">{t.lineLabel}: {t.line}</p>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
