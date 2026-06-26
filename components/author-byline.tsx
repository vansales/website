import Link from "next/link";
import { Users } from "lucide-react";
import { type Lang } from "@/lib/use-lang";
import { type AuthorPersona } from "@/lib/articles";

type Variant = "full" | "short";

const BYLINES: Record<AuthorPersona, Record<Lang, { name: string; full: string; short: string }>> = {
  founder: {
    en: {
      name: "Jay Monthon, Co-Founder & CEO",
      full: "Jay has spent over a decade in FMCG distribution and enterprise IT across Thailand, Cambodia, and Vietnam. He founded Vansales to turn distribution from an art that relies on experience into a system that can be measured, controlled, and scaled.",
      short: "Jay is Co-Founder & CEO of Vansales, building sales and distribution infrastructure for FMCG teams across Southeast Asia.",
    },
    th: {
      name: "เจ มณฑล — Co-Founder & CEO, Vansales",
      full: 'เจอยู่ในวงการกระจายสินค้า FMCG และไอทีองค์กรมากว่า 10 ปี ทั้งในไทย กัมพูชา และเวียดนาม เขาก่อตั้ง Vansales ขึ้นเพื่อเปลี่ยนการกระจายสินค้าจาก "ศิลปะที่อาศัยประสบการณ์" ให้กลายเป็น "ระบบที่วัดผล ควบคุม และขยายได้"',
      short: "เจ คือ Co-Founder & CEO ของ Vansales ผู้สร้างโครงสร้างพื้นฐานด้านงานขายและการกระจายสินค้าสำหรับทีม FMCG ทั่วเอเชียตะวันออกเฉียงใต้",
    },
  },
  team: {
    en: {
      name: "The Vansales Team",
      full: "Vansales builds sales and distribution software for FMCG teams across Thailand and Southeast Asia. We share what we learn working alongside distributors — turning field operations into systems that can be measured, controlled, and scaled.",
      short: "The Vansales team builds sales and distribution software for FMCG teams across Southeast Asia, and writes about what we learn along the way.",
    },
    th: {
      name: "ทีม Vansales",
      full: "Vansales พัฒนาซอฟต์แวร์งานขายและกระจายสินค้าสำหรับทีม FMCG ทั่วไทยและเอเชียตะวันออกเฉียงใต้ เราแบ่งปันสิ่งที่ได้เรียนรู้จากการทำงานเคียงข้างดิสทริบิวเตอร์ — เปลี่ยนงานหน้างานให้เป็นระบบที่วัดผล ควบคุม และขยายได้",
      short: "ทีม Vansales พัฒนาซอฟต์แวร์งานขายและกระจายสินค้าสำหรับทีม FMCG ทั่วเอเชียตะวันออกเฉียงใต้ และเขียนแบ่งปันสิ่งที่ได้เรียนรู้ระหว่างทาง",
    },
  },
  "field-team": {
    en: {
      name: "Vansales Field Team",
      full: "The Vansales Field Team works alongside FMCG distributors across Thailand and Southeast Asia — setting up routes, riding along on cash vans, and tracking the numbers that decide whether a van turns a profit. These playbooks come from what we see on the ground, every day.",
      short: "The Vansales Field Team helps FMCG distributors across Southeast Asia turn field sales into measurable, profitable operations — these playbooks come from the ground up.",
    },
    th: {
      name: "Vansales Field Team",
      full: "Vansales Field Team คือทีมที่ทำงานเคียงข้างดิสทริบิวเตอร์ FMCG ทั่วไทยและเอเชียตะวันออกเฉียงใต้ — ตั้งแต่วางแผน route ขึ้นรถขายไปกับเซลส์จริง ไปจนถึงติดตามตัวเลขที่ตัดสินว่ารถขายคันนั้นกำไรหรือขาดทุน Playbook เหล่านี้กลั่นมาจากสิ่งที่เราเห็นหน้างานจริงทุกวัน",
      short: "Vansales Field Team ช่วยดิสทริบิวเตอร์ FMCG ทั่วเอเชียตะวันออกเฉียงใต้เปลี่ยนงานขายหน้างานให้วัดผลได้และทำกำไรได้จริง — Playbook ทุกชิ้นมาจากประสบการณ์หน้างาน",
    },
  },
};

/** Author byline + bio card shown at the foot of a Resources article.
 * Persona comes from the article frontmatter (`author:`); copy follows the
 * article's language. */
export function AuthorByline({
  persona,
  locale = "en",
  variant = "full",
}: {
  persona: AuthorPersona;
  locale?: Lang;
  variant?: Variant;
}) {
  const data = BYLINES[persona][locale];
  const writtenBy = locale === "th" ? "เขียนโดย" : "Written by";

  return (
    <aside className="mt-12 flex gap-4 border-t pt-6">
      {persona === "field-team" ? (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Users className="h-6 w-6" />
        </span>
      ) : (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
          {persona === "team" ? "V" : "J"}
        </span>
      )}
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{writtenBy}</p>
        <Link href="/about" className="font-semibold tracking-tight transition hover:text-primary">
          {data.name}
        </Link>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{data[variant]}</p>
      </div>
    </aside>
  );
}
