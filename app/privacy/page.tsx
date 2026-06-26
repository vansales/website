import type { Metadata } from "next";
import Link from "next/link";
import { resolveLang } from "@/lib/server-lang";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Vansales Application Co., Ltd. collects, uses, shares and protects personal data.",
};
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type Section = { h: string; p?: string; ul?: string[]; p2?: string };

const STR = {
  en: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: 21 June 2026",
    intro:
      "This Privacy Policy explains how Vansales Application Co., Ltd. (“Vansales”, “we”) collects, uses, shares and protects personal data — both through this website and through the Vansales service and mobile application. Please read it together with our Terms of Service and, for business customers, the Data Processing Agreement (DPA) provided when you register.",
    sections: [
      {
        h: "Our two roles (controller and processor)",
        p: "Depending on the data involved, Vansales acts in one of two roles under data-protection law:",
        ul: [
          "Controller — for this website and for the personal data of people who register and manage a Vansales account (such as the account owner and its users). We decide why and how this data is used, and this policy governs it.",
          "Processor — for the business data a customer enters into the app (their shops, orders, and their own staff and customers). The customer is the controller of that data; we process it only on their instructions, under a Data Processing Agreement (DPA). See “Data we process for our customers” below.",
        ],
      },
      {
        h: "Information we collect",
        p: "Depending on how you interact with us, we may collect the following:",
        ul: [
          "Website enquiries: your name, company or shop name, email, phone number and sales team size.",
          "Account & registration: your name, email, phone number, business name and address, and your tax registration number — used to set up your account and to issue invoices and tax documents.",
          "Account credentials: your username and password (stored securely).",
          "Usage & technical data: log data, device and browser information, and a language cookie, when you use the website or app.",
        ],
        p2: "We collect your tax registration number only to issue invoices and tax documents and to meet legal requirements. We do not collect payment-card details, and we do not collect special-category sensitive data such as health, religion or biometric data. If you choose not to provide the details needed to open an account or issue tax documents, we may be unable to provide the service.",
      },
      {
        h: "Why we use your data, and our legal basis",
        p: "We use personal data for the purposes below, each with a legal basis under the PDPA (and equivalent laws where they apply):",
        ul: [
          "To provide and operate the service and manage your account — performance of a contract.",
          "To issue invoices and tax documents, and meet our legal obligations — contract and legal obligation.",
          "To respond to enquiries, demos and support requests — your consent and our legitimate interest.",
          "To improve, maintain and secure the service — our legitimate interest.",
          "To send product or marketing updates, only if you opt in — your consent, which you can withdraw at any time.",
        ],
      },
      {
        h: "How we share data",
        p: "We share personal data only with:",
        ul: [
          "Service providers (sub-processors) who help us run the service — for example, cloud hosting and Web3Forms, which forwards website enquiries to our inbox. They may use the data only to provide their service to us.",
          "Professional advisers and government authorities, where required or permitted by law.",
        ],
        p2: "We do not sell your personal data.",
      },
      {
        h: "International data transfers",
        p: "Our service uses cloud infrastructure and tools that may store or process data outside Thailand. Where we transfer personal data abroad, we take the steps required by the PDPA (and other applicable laws) to ensure an adequate level of protection — for example, using providers with recognised security standards and appropriate contractual safeguards.",
      },
      {
        h: "How long we keep data",
        p: "We keep personal data only as long as it is needed for the purposes above, or as required by law (for example, tax and accounting records must be kept for the period set by Thai law). Website enquiry details are kept only as long as needed to follow up, then deleted. When data is no longer needed, we delete or anonymise it.",
      },
      {
        h: "Your rights",
        p: "Subject to the conditions in the law, you may ask us to:",
        ul: [
          "access or obtain a copy of your personal data;",
          "correct data that is inaccurate or incomplete;",
          "delete your data or withdraw your consent;",
          "object to or restrict certain processing;",
          "have your personal data ported to you or another provider.",
        ],
        p2: "We will respond within the timeframe required by law (generally within 30 days). You also have the right to lodge a complaint with the Personal Data Protection Committee (PDPC) in Thailand, or with your local supervisory authority.",
      },
      {
        h: "Security",
        p: "We protect personal data with measures appropriate to the risk: HTTPS for the website, access controls, encryption where appropriate, and cloud systems that follow recognised security standards. No method of transmission or storage is ever completely secure, but we take reasonable steps to protect your information and to respond to any incidents.",
      },
      {
        h: "Data breaches",
        p: "If a personal data breach occurs that is likely to affect your rights, we will notify the PDPC without undue delay and, where feasible, within 72 hours, and will inform affected individuals where the law requires. We will also take steps to contain the incident and prevent it from happening again.",
      },
      {
        h: "Children's data",
        p: "Vansales is a business tool and is not directed at children. We do not knowingly collect personal data from anyone under 20. If you believe a minor has given us their data, please contact us and we will delete it.",
      },
      {
        h: "Data we process for our customers (processor role)",
        p: "When a customer uses the Vansales app, they upload business data about their own shops, orders, staff and customers. For that data, the customer is the controller and Vansales is the processor: we process it only to provide the service, on the customer’s documented instructions, under a Data Processing Agreement signed at registration.",
        p2: "If you are a data subject of one of our customers (for example, a shop contacted by a Vansales user), please direct your privacy requests to that customer, and we will support them as required.",
      },
      {
        h: "International users and regional terms",
        p: "Vansales is based in Thailand and this policy follows the PDPA. If you use our service from another country, additional local data-protection laws may apply to you. We will add region-specific terms here as we expand. In general, the following applies:",
        ul: [
          "Thailand — the PDPA applies and your supervisory authority is the PDPC.",
          "Other countries — where local laws apply (such as the EU GDPR or other national data-protection laws), you keep the rights those laws give you.",
        ],
        p2: "Where requirements differ, we apply the standard that gives you the stronger protection.",
      },
    ] as Section[],
    cookiesH: "Cookies",
    cookiesP: "This website uses only one functional cookie. For full details, please see our",
    cookiesLink: "Cookie Policy",
    contactH: "Contact us",
    contactP: "For any privacy question, to exercise your rights, or to reach our data protection contact, please use our",
    contactCta: "contact form",
    updatesH: "Updates to this policy",
    updatesP:
      "We may update this policy from time to time. The latest version will always be on this page, with a revised date shown above. For significant changes we will give notice through the service or by email.",
  },
  th: {
    eyebrow: "ข้อกฎหมาย",
    title: "นโยบายความเป็นส่วนตัว",
    updated: "ปรับปรุงล่าสุด: 21 มิถุนายน 2026",
    intro:
      "นโยบายนี้อธิบายว่า บริษัท แวนเซลส์ แอปพลิเคชัน จำกัด (“Vansales” หรือ “เรา”) เก็บรวบรวม ใช้ เปิดเผย และคุ้มครองข้อมูลส่วนบุคคลอย่างไร ทั้งผ่านเว็บไซต์นี้ และผ่านบริการและแอปพลิเคชัน Vansales โปรดอ่านนโยบายนี้ควบคู่กับข้อตกลงการใช้บริการ และสำหรับลูกค้าธุรกิจ โปรดอ่านควบคู่กับข้อตกลงการประมวลผลข้อมูล (DPA) ที่มอบให้ตอนสมัครใช้งาน",
    sections: [
      {
        h: "สองบทบาทของเรา (ผู้ควบคุม และ ผู้ประมวลผล)",
        p: "ขึ้นอยู่กับชนิดของข้อมูล Vansales จะทำหน้าที่อย่างใดอย่างหนึ่งในสองบทบาทตามกฎหมายคุ้มครองข้อมูล:",
        ul: [
          "ผู้ควบคุมข้อมูล (Controller) — สำหรับเว็บไซต์นี้ และสำหรับข้อมูลส่วนบุคคลของผู้ที่สมัครและดูแลบัญชี Vansales (เช่น เจ้าของบัญชีและผู้ใช้งาน) เราเป็นผู้กำหนดวัตถุประสงค์และวิธีการใช้ข้อมูล และนโยบายฉบับนี้เป็นผู้กำกับดูแล",
          "ผู้ประมวลผลข้อมูล (Processor) — สำหรับข้อมูลธุรกิจที่ลูกค้าใส่เข้ามาในแอป (ร้านค้า ออเดอร์ พนักงานและลูกค้าของลูกค้าเอง) ลูกค้าคือผู้ควบคุมข้อมูลนั้น เราประมวลผลตามคำสั่งของลูกค้าภายใต้ข้อตกลงการประมวลผลข้อมูล (DPA) เท่านั้น ดูหัวข้อ “ข้อมูลที่เราประมวลผลแทนลูกค้า” ด้านล่าง",
        ],
      },
      {
        h: "ข้อมูลที่เราเก็บ",
        p: "ขึ้นอยู่กับวิธีที่คุณติดต่อกับเรา เราอาจเก็บข้อมูลต่อไปนี้:",
        ul: [
          "การติดต่อผ่านเว็บ: ชื่อ ชื่อบริษัท/ร้าน อีเมล เบอร์โทร และขนาดทีมขาย",
          "การสมัครและบัญชี: ชื่อ อีเมล เบอร์โทร ชื่อและที่อยู่ธุรกิจ และเลขประจำตัวผู้เสียภาษี — เพื่อเปิดบัญชีและออกใบแจ้งหนี้/เอกสารภาษี",
          "ข้อมูลบัญชี: ชื่อผู้ใช้และรหัสผ่าน (จัดเก็บอย่างปลอดภัย)",
          "ข้อมูลการใช้งานและทางเทคนิค: ข้อมูล log ข้อมูลอุปกรณ์และเบราว์เซอร์ และคุกกี้ภาษา เมื่อคุณใช้เว็บไซต์หรือแอป",
        ],
        p2: "เราเก็บเลขประจำตัวผู้เสียภาษีเฉพาะเพื่อออกใบแจ้งหนี้และเอกสารภาษี และปฏิบัติตามกฎหมายเท่านั้น ทั้งนี้เราไม่เก็บข้อมูลบัตรชำระเงิน และไม่เก็บข้อมูลอ่อนไหว (เช่น สุขภาพ ศาสนา หรือข้อมูลชีวภาพ) หากคุณเลือกไม่ให้ข้อมูลที่จำเป็นต่อการเปิดบัญชีหรือออกเอกสารภาษี เราอาจไม่สามารถให้บริการได้",
      },
      {
        h: "วัตถุประสงค์และฐานทางกฎหมาย",
        p: "เราใช้ข้อมูลส่วนบุคคลตามวัตถุประสงค์ต่อไปนี้ โดยแต่ละข้อมีฐานทางกฎหมายตาม PDPA (และกฎหมายเทียบเท่าหากบังคับใช้):",
        ul: [
          "ให้บริการ ดำเนินการระบบ และดูแลบัญชีของคุณ — เพื่อปฏิบัติตามสัญญา",
          "ออกใบแจ้งหนี้และเอกสารภาษี และปฏิบัติตามกฎหมาย — สัญญาและหน้าที่ตามกฎหมาย",
          "ตอบคำถาม ขอเดโม และให้การสนับสนุน — ความยินยอมและประโยชน์โดยชอบด้วยกฎหมาย",
          "ปรับปรุง ดูแล และรักษาความปลอดภัยของบริการ — ประโยชน์โดยชอบด้วยกฎหมาย",
          "ส่งข่าวสารผลิตภัณฑ์หรือการตลาด เฉพาะเมื่อคุณสมัครรับ — ความยินยอม ซึ่งคุณถอนได้ทุกเมื่อ",
        ],
      },
      {
        h: "การเปิดเผย/แบ่งปันข้อมูล",
        p: "เราแบ่งปันข้อมูลส่วนบุคคลเฉพาะกับ:",
        ul: [
          "ผู้ให้บริการ (ผู้ประมวลผลช่วง/sub-processor) ที่ช่วยเราดำเนินการ เช่น บริการคลาวด์ และ Web3Forms ซึ่งส่งต่อข้อความจากฟอร์มมายังกล่องข้อความของเรา โดยผู้ให้บริการเหล่านี้ใช้ข้อมูลได้เพียงเพื่อให้บริการแก่เราเท่านั้น",
          "ที่ปรึกษาวิชาชีพ และหน่วยงานราชการ เมื่อกฎหมายกำหนดหรืออนุญาต",
        ],
        p2: "เราไม่ขายข้อมูลส่วนบุคคลของคุณ",
      },
      {
        h: "การโอนข้อมูลข้ามประเทศ",
        p: "บริการของเราใช้โครงสร้างพื้นฐานคลาวด์และเครื่องมือที่อาจจัดเก็บหรือประมวลผลข้อมูลนอกประเทศไทย กรณีที่มีการโอนข้อมูลส่วนบุคคลไปต่างประเทศ เราจะดำเนินการตามที่ PDPA (และกฎหมายอื่นที่บังคับใช้) กำหนด เพื่อให้ข้อมูลได้รับการคุ้มครองในระดับที่เพียงพอ เช่น เลือกผู้ให้บริการที่มีมาตรฐานความปลอดภัยที่ยอมรับ และมีข้อสัญญาคุ้มครองที่เหมาะสม",
      },
      {
        h: "ระยะเวลาการเก็บรักษา",
        p: "เราเก็บข้อมูลส่วนบุคคลไว้เท่าที่จำเป็นตามวัตถุประสงค์ข้างต้น หรือตามที่กฎหมายกำหนด (เช่น เอกสารภาษีและบัญชีต้องเก็บตามระยะเวลาที่กฎหมายไทยกำหนด) ข้อมูลการติดต่อจากเว็บจะเก็บไว้เท่าที่จำเป็นต่อการติดตาม แล้วจึงลบทิ้ง เมื่อไม่จำเป็นต้องใช้ข้อมูลอีกต่อไป เราจะลบหรือทำให้ไม่สามารถระบุตัวตนได้",
      },
      {
        h: "สิทธิของคุณ",
        p: "ภายใต้เงื่อนไขที่กฎหมายกำหนด คุณสามารถขอให้เรา:",
        ul: [
          "เข้าถึงหรือขอสำเนาข้อมูลส่วนบุคคลของคุณ",
          "แก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่สมบูรณ์",
          "ลบข้อมูล หรือถอนความยินยอม",
          "คัดค้านหรือจำกัดการประมวลผลบางอย่าง",
          "ขอให้โอนข้อมูลส่วนบุคคลของคุณไปยังคุณหรือผู้ให้บริการรายอื่น",
        ],
        p2: "เราจะดำเนินการภายในกรอบเวลาที่กฎหมายกำหนด (โดยทั่วไปภายใน 30 วัน) ทั้งนี้คุณมีสิทธิร้องเรียนต่อคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (PDPC) ในประเทศไทย หรือหน่วยงานกำกับดูแลในประเทศของคุณ",
      },
      {
        h: "ความปลอดภัย",
        p: "เราปกป้องข้อมูลส่วนบุคคลด้วยมาตรการที่เหมาะสมกับความเสี่ยง: ใช้ HTTPS สำหรับเว็บไซต์ ควบคุมการเข้าถึง เข้ารหัสเมื่อเหมาะสม และใช้ระบบคลาวด์ที่เป็นไปตามมาตรฐานความปลอดภัยที่ยอมรับ แม้ไม่มีวิธีใดปลอดภัย 100% แต่เราดำเนินการอย่างเหมาะสมเพื่อปกป้องข้อมูลและรับมือเหตุการณ์ที่อาจเกิดขึ้น",
      },
      {
        h: "เหตุละเมิดข้อมูล",
        p: "หากเกิดเหตุละเมิดข้อมูลส่วนบุคคลที่อาจกระทบต่อสิทธิของคุณ เราจะแจ้งต่อ PDPC โดยไม่ชักช้าและภายใน 72 ชั่วโมงเท่าที่ทำได้ และจะแจ้งผู้ที่ได้รับผลกระทบเมื่อกฎหมายกำหนด พร้อมดำเนินการควบคุมเหตุการณ์และป้องกันไม่ให้เกิดซ้ำ",
      },
      {
        h: "ข้อมูลของผู้เยาว์",
        p: "Vansales เป็นเครื่องมือสำหรับธุรกิจ ไม่ได้มุ่งเป้าไปที่เด็ก เราไม่มีเจตนาเก็บข้อมูลส่วนบุคคลของผู้ที่อายุต่ำกว่า 20 ปี หากคุณเชื่อว่าผู้เยาว์ได้ให้ข้อมูลกับเรา โปรดติดต่อเรา แล้วเราจะลบข้อมูลนั้น",
      },
      {
        h: "ข้อมูลที่เราประมวลผลแทนลูกค้า (บทบาทผู้ประมวลผล)",
        p: "เมื่อลูกค้าใช้แอป Vansales ลูกค้าจะนำเข้าข้อมูลธุรกิจเกี่ยวกับร้านค้า ออเดอร์ พนักงานและลูกค้าของตนเอง สำหรับข้อมูลนั้นลูกค้าคือผู้ควบคุมข้อมูล และ Vansales เป็นผู้ประมวลผล โดยเราประมวลผลเพียงเพื่อให้บริการ ตามคำสั่งที่เป็นลายลักษณ์อักษรของลูกค้า ภายใต้ข้อตกลงการประมวลผลข้อมูลที่ลงนามตอนสมัครใช้งาน",
        p2: "หากคุณเป็นเจ้าของข้อมูลส่วนบุคคลของลูกค้าเรารายใดรายหนึ่ง (เช่น ร้านค้าที่ได้รับการติดต่อจากผู้ใช้ Vansales) โปรดส่งคำขอเรื่องความเป็นส่วนตัวไปยังลูกค้ารายนั้น และเราจะให้การสนับสนุนตามที่จำเป็น",
      },
      {
        h: "ผู้ใช้งานต่างประเทศและเงื่อนไขรายภูมิภาค",
        p: "Vansales ตั้งอยู่ในประเทศไทยและนโยบายนี้อิงตาม PDPA หากคุณใช้บริการจากประเทศอื่น อาจมีกฎหมายคุ้มครองข้อมูลในประเทศนั้นบังคับใช้เพิ่มเติม เราจะเพิ่มเงื่อนไขเฉพาะภูมิภาคไว้ที่นี่เมื่อขยายการให้บริการ โดยทั่วไป:",
        ul: [
          "ประเทศไทย — ใช้ PDPA และหน่วยงานกำกับดูแลคือ PDPC",
          "ประเทศอื่น — หากกฎหมายท้องถิ่นบังคับใช้ (เช่น GDPR ของสหภาพยุโรป หรือกฎหมายคุ้มครองข้อมูลของประเทศนั้น) คุณยังคงมีสิทธิตามกฎหมายเหล่านั้น",
        ],
        p2: "เมื่อข้อกำหนดต่างกัน เราจะใช้มาตรฐานที่ให้การคุ้มครองแก่คุณมากกว่า",
      },
    ] as Section[],
    cookiesH: "คุกกี้",
    cookiesP: "เว็บไซต์นี้ใช้คุกกี้เพื่อการใช้งานเพียงตัวเดียว ดูรายละเอียดทั้งหมดได้ที่",
    cookiesLink: "นโยบายคุกกี้",
    contactH: "ติดต่อเรา",
    contactP: "หากมีคำถามเรื่องความเป็นส่วนตัว ต้องการใช้สิทธิของคุณ หรือต้องการติดต่อผู้ดูแลข้อมูลส่วนบุคคล โปรดติดต่อผ่าน",
    contactCta: "แบบฟอร์มติดต่อ",
    updatesH: "การปรับปรุงนโยบาย",
    updatesP:
      "เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว โดยฉบับล่าสุดจะอยู่บนหน้านี้เสมอ พร้อมระบุวันที่แก้ไขไว้ด้านบน กรณีมีการเปลี่ยนแปลงที่สำคัญ เราจะแจ้งให้ทราบผ่านบริการหรือทางอีเมล",
  },
} as const;

export default function PrivacyPolicyPage() {
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

        <h2 className="mt-10 text-xl font-semibold">{t.cookiesH}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {t.cookiesP}{" "}
          <Link href="/cookie-policy" className="font-medium text-primary underline underline-offset-2">{t.cookiesLink}</Link>.
        </p>

        <h2 className="mt-10 text-xl font-semibold">{t.contactH}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {t.contactP}{" "}
          <Link href="/#contact" className="font-medium text-primary underline underline-offset-2">{t.contactCta}</Link>.
        </p>

        <h2 className="mt-10 text-xl font-semibold">{t.updatesH}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{t.updatesP}</p>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
