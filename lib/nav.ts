import { type Lang } from "@/lib/use-lang";

export interface NavChild {
  label: string;
  href: string;
  desc?: string;
}

export interface NavGroup {
  label: string;
  items: NavChild[];
}

export interface NavNode {
  label: string;
  href?: string;
  /** Single-column dropdown (e.g. Solutions). */
  children?: NavChild[];
  /** Multi-column mega menu (e.g. Features). */
  groups?: NavGroup[];
  /** "See all" link shown at the foot of a mega menu. */
  allHref?: string;
  allLabel?: string;
}

/** Primary site navigation, shared by every header (desktop + mobile).
 * Features is a grouped mega menu; Solutions is a simple dropdown. */
const NAV: Record<Lang, NavNode[]> = {
  en: [
    {
      label: "Features",
      href: "/features",
      allHref: "/features",
      allLabel: "All features",
      groups: [
        {
          label: "Sell",
          items: [
            { label: "Orders", href: "/features/orders", desc: "Take & track orders" },
            { label: "Customers", href: "/features/customers", desc: "Know every shop" },
            { label: "Payments", href: "/features/payments", desc: "Collect on the spot" },
          ],
        },
        {
          label: "Distribute",
          items: [
            { label: "Stock", href: "/features/stock", desc: "Across every branch" },
            { label: "Routes & field", href: "/features/route", desc: "Plan & track visits" },
            { label: "Delivery", href: "/features/delivery", desc: "Deliver with proof" },
          ],
        },
        {
          label: "Run & scale",
          items: [
            { label: "Reports", href: "/features/reports", desc: "See it live" },
            { label: "Mobile", href: "/features/mobile", desc: "Run it on a phone" },
            { label: "Multi-branch", href: "/features/multi-branch", desc: "Scale to many branches" },
          ],
        },
      ],
    },
    {
      label: "Solutions",
      children: [
        { label: "Industries", href: "/solutions", desc: "Built for your sector" },
        { label: "Benefits", href: "/#benefits", desc: "Outcomes you can expect" },
      ],
    },
    { label: "Contact", href: "/#contact" },
    { label: "Resources", href: "/resources" },
  ],
  th: [
    {
      label: "ฟีเจอร์",
      href: "/features",
      allHref: "/features",
      allLabel: "ดูฟีเจอร์ทั้งหมด",
      groups: [
        {
          label: "การขาย",
          items: [
            { label: "ออเดอร์", href: "/features/orders", desc: "รับและติดตามออเดอร์" },
            { label: "ลูกค้า", href: "/features/customers", desc: "รู้จักทุกร้าน" },
            { label: "เก็บเงิน", href: "/features/payments", desc: "เก็บเงินหน้างาน" },
          ],
        },
        {
          label: "กระจายสินค้า",
          items: [
            { label: "สต๊อก", href: "/features/stock", desc: "ทุกคลังทุกสาขา" },
            { label: "เส้นทาง", href: "/features/route", desc: "วางแผน–ติดตามการเข้าร้าน" },
            { label: "จัดส่ง", href: "/features/delivery", desc: "ส่งพร้อมหลักฐาน" },
          ],
        },
        {
          label: "บริหาร–ขยาย",
          items: [
            { label: "รายงาน", href: "/features/reports", desc: "เห็นแบบเรียลไทม์" },
            { label: "มือถือ", href: "/features/mobile", desc: "ทำงานบนมือถือ" },
            { label: "หลายสาขา", href: "/features/multi-branch", desc: "รองรับหลายสาขา" },
          ],
        },
      ],
    },
    {
      label: "โซลูชัน",
      children: [
        { label: "อุตสาหกรรม", href: "/solutions", desc: "ออกแบบมาเพื่อธุรกิจของคุณ" },
        { label: "ประโยชน์", href: "/#benefits", desc: "ผลลัพธ์ที่คุณจะได้รับ" },
      ],
    },
    { label: "ติดต่อ", href: "/#contact" },
    { label: "แหล่งข้อมูล", href: "/resources" },
  ],
};

export function navItems(lang: Lang): NavNode[] {
  return NAV[lang];
}
