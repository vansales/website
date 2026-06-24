"use client";

import { Logo, Footer } from "@vansales/design-system";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import { type Lang } from "@/lib/use-lang";

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/vansalesapp", icon: <Facebook className="h-[18px] w-[18px]" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/vansales/", icon: <Linkedin className="h-[18px] w-[18px]" /> },
  { label: "LINE", href: "https://page.line.me/039ngfox?openQrModal=true", icon: <MessageCircle className="h-[18px] w-[18px]" /> },
];

const FOOTER = {
  en: {
    desc: "All-in-one sales & distribution management, built for teams across Thailand and Southeast Asia.",
    cols: [
      { title: "Product", links: [{ label: "Features", href: "/features" }, { label: "Industries", href: "/solutions" }, { label: "Benefits", href: "/#benefits" }] },
      { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/#contact" }] },
      { title: "Legal", links: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Use", href: "/terms" }, { label: "Cookie Policy", href: "/cookie-policy" }] },
    ],
    bottom: "© 2026 Vansales. All rights reserved.",
  },
  th: {
    desc: "ระบบจัดการงานขายและกระจายสินค้าครบวงจร สำหรับทีมทั่วไทยและเอเชียตะวันออกเฉียงใต้",
    cols: [
      { title: "ผลิตภัณฑ์", links: [{ label: "ฟีเจอร์", href: "/features" }, { label: "อุตสาหกรรม", href: "/solutions" }, { label: "ประโยชน์", href: "/#benefits" }] },
      { title: "บริษัท", links: [{ label: "เกี่ยวกับเรา", href: "/about" }, { label: "แหล่งข้อมูล", href: "/resources" }, { label: "ติดต่อ", href: "/#contact" }] },
      { title: "กฎหมาย", links: [{ label: "นโยบายความเป็นส่วนตัว", href: "/privacy" }, { label: "ข้อกำหนดการใช้งาน", href: "/terms" }, { label: "นโยบายคุกกี้", href: "/cookie-policy" }] },
    ],
    bottom: "© 2026 Vansales สงวนลิขสิทธิ์",
  },
} as const;

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = FOOTER[lang];
  return (
    <Footer
      brand={<Logo height={26} icon="square" />}
      description={t.desc}
      social={SOCIAL}
      columns={t.cols.map((c) => ({ title: c.title, links: c.links.map((l) => ({ label: l.label, href: l.href })) }))}
      bottom={t.bottom}
    />
  );
}
