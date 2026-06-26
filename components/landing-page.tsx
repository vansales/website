"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Lang } from "@/lib/use-lang";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopNav } from "@/components/desktop-nav";
import { LangSwitch } from "@/components/lang-switch";
import { navItems } from "@/lib/nav";
import { localized } from "@/lib/i18n";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import {
  ShoppingCart,
  Users,
  Boxes,
  MapPin,
  BarChart3,
  Smartphone,
  Star,
  Check,
  ArrowRight,
  LayoutDashboard,
  Truck,
  FileText,
  Bell,
  TrendingUp,
  Wallet,
  ShieldCheck,
  Gauge,
  Phone,
  ChevronLeft,
  ChevronRight,
  QrCode,
  Banknote,
  CreditCard,
  Navigation,
} from "lucide-react";
import {
  Logo,
  Button,
  Badge,
  Testimonial,
  CTASection,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  cn,
} from "@vansales/design-system";

const fieldSales = "/marketing/field-sales.jpg";
const delivery = "/marketing/delivery.jpg";

// Maps each home "feats" card (by index, same order in en + th) to its
// feature detail page.
const FEAT_SLUGS = ["orders", "customers", "stock", "route", "reports", "mobile"];


const STR = {
  en: {
    announce: "🎉 New: multi-branch delivery and real-time route tracking",
    learnMore: "Learn more",
    signIn: "Sign in",
    contactSales: "Contact us",
    heroBadge: "New · Multi-branch ready",
    heroTitle1: "All-in-one sales\n& delivery management",
    heroHighlight: "platform",
    heroSub:
      "Manage orders, customers, stock, delivery routes and sales reports in real time — so your field team works faster and gets more done.",
    ctaDemo: "Book a demo",
    ctaFeatures: "See features",
    trust: "Trusted by sales & delivery teams nationwide",
    dash: {
      overview: "Sales overview",
      today: "Today",
      salesToday: "Sales today",
      orders: "Orders",
      target: "Monthly target",
      so: "SO-1042 · Rungrueang",
      paid: "Paid",
    },
    mobile: {
      eyebrow: "Mobile app",
      title: "Your storefront, in your sales rep's pocket",
      sub: "Take orders and collect payment from any phone — built for speed in the field, with everything synced to the back office.",
      points: [
        "Ring up an order in seconds at the counter",
        "Customer history, prices & credit on screen",
        "Tap to collect — cash, transfer or QR",
      ],
      appbar: "New order",
      badge: "Synced",
      customer: "Somchai Minimart",
      customerSub: "Route 7 · Bang Na",
      items: [
        { n: "Drinking water 600ml ×24", p: "฿1,200" },
        { n: "UHT milk ×12", p: "฿540" },
        { n: "Instant noodles ×30", p: "฿180" },
      ],
      totalLabel: "Total",
      total: "฿1,920",
      pay: "Place order & collect payment",
      pm: ["Cash", "Transfer", "QR"],
      toggle: { order: "Order", sales: "Sales", route: "Route" },
      sales: {
        appbar: "My sales",
        live: "Live",
        kpiLabel: "Sales today",
        kpiValue: "฿128,400",
        kpiDelta: "▲ 12% vs yesterday",
        chartLabel: "Last 7 days",
        topLabel: "Top products",
        top: [
          { n: "Drinking water", v: "฿42,300" },
          { n: "UHT milk", v: "฿28,100" },
          { n: "Instant noodles", v: "฿19,800" },
        ],
      },
      route: {
        appbar: "Today's route",
        count: "4 stops",
        stopsLabel: "Stops",
        next: "Next",
        start: "Start navigation",
        stops: [
          { n: "Somchai Minimart", t: "09:00 · done", st: "done" },
          { n: "Rungrueang Store", t: "10:30 · 1.2 km", st: "next" },
          { n: "Chok Dee Mart", t: "11:15 · 3.0 km", st: "pending" },
          { n: "Wattana Shop", t: "13:00 · 5.4 km", st: "pending" },
        ],
      },
    },
    chipUp: "Sales +12%",
    chipVs: "vs yesterday",
    valuesEyebrow: "Why Vansales",
    valuesTitle: "Results your business can feel",
    valuesSub: "Built specifically for sales & delivery teams — do less, sell more.",
    values: [
      { icon: <TrendingUp />, t: "Grow sales", d: "Close more deals with customer and stock data at your fingertips" },
      { icon: <Wallet />, t: "Cut costs", d: "Plan routes and stock efficiently — less waste, lower fuel bills" },
      { icon: <ShieldCheck />, t: "Fewer errors", d: "Accurate orders and invoices — nothing slips through, fully auditable" },
      { icon: <Gauge />, t: "Real-time view", d: "Decide faster with live dashboards and reports" },
    ],
    industriesLabel: "Great for:",
    industries: ["FMCG", "Beverage", "Food & Bakery", "Wholesale & Distribution", "Direct store sales"],
    featEyebrow: "Features",
    featTitle: "Everything your sales team needs, in one place",
    featSub: "A complete toolkit that helps sales and delivery teams work faster and more accurately.",
    featAll: "Explore all features",
    feats: [
      { icon: <ShoppingCart />, t: "Order management", d: "Create, track and close sales in a few clicks, with real-time status" },
      { icon: <Users />, t: "Customer database", d: "Purchase history, credit and contacts for every customer", tone: "brand" as const },
      { icon: <Boxes />, t: "Stock management", d: "Check stock across every branch, with alerts when it runs low" },
      { icon: <MapPin />, t: "Routes & maps", d: "Plan sales routes and track your field team live", tone: "brand" as const },
      { icon: <BarChart3 />, t: "Sales reports", d: "Dashboards and charts measured against daily and monthly targets" },
      { icon: <Smartphone />, t: "Works on mobile", d: "Create and record orders on site, right from your phone" },
    ],
    dd1Badge: "Field",
    dd1Title: "Take orders and collect payment on site",
    dd1Sub:
      "Your team closes the whole sale right at the customer's store — with instant access to purchase history and credit, invoicing in seconds, and less paperwork. Everything syncs to the central system in real time.",
    dd1Points: [
      "Create orders and receipts on site in seconds",
      "See customer purchase history & credit on the spot",
      "Everything syncs to the central system in real time",
    ],
    dd1Chip: "24 orders today",
    dd2Badge: "Delivery",
    dd2Title: "Track deliveries in real time",
    dd2Sub:
      "Plan routes and track vehicle locations and the status of every drop on the map. Customers get accurate ETAs, and fewer deliveries get missed.",
    dd2Points: [
      "Auto-routing to save time and fuel",
      "See team locations and status live",
      "Complete proof of delivery (signature/photo)",
    ],
    dd2Chip: "18/20 stops delivered",
    contactEyebrow: "Contact us",
    contactTitle: "Let's build the next level of distribution, together.",
    contactSub:
      "Tell us what you need — our specialists will recommend the right package, answer your questions, and show you a demo.",
    contactPoints: [
      "A free consultation and a demo for your business",
      "Our team helps you set up and import your data",
      "Honest advice on the right fit — no pressure",
    ],
    contactPhone: "Call us at (+66) 0 8925 2945 (Mon–Sat 9:00–18:00)",
    fName: "Full name",
    fNameP: "Your name",
    fCompany: "Company",
    fCompanyP: "Company / shop name",
    fEmail: "Email",
    fPhone: "Phone",
    fSize: "Sales team size",
    fSizeP: "Select team size",
    sizes: ["1–10 people", "11–50 people", "51–200 people", "200+ people"],
    fTopic: "How can we help?",
    fTopicP: "Select a topic",
    topics: ["Book a demo", "Packages & pricing", "Product consultation", "Partnership", "Something else"],
    fMessage: "Message (optional)",
    fMessageP: "Tell us a bit about what you need",
    submit: "Talk to our team",
    sending: "Sending…",
    sentTitle: "Thanks — we've got your message",
    sentBody: "Our team will get back to you within one business day.",
    errMsg: "Something went wrong. Please try again or call us.",
    pdpaPre: "By submitting, you accept our ",
    pdpaLink: "Privacy Policy",
    testiEyebrow: "Customer voices",
    testiTitle: "Sales teams really do work easier",
    testimonials: [
      { rating: 5, quote: "Managing the team is far easier — accurate routes, more reach, fewer errors. A new rep can pick it up instantly.", author: "Marketing & Sales Director", role: "Inter Rungruang Group", initials: "IR" },
      { rating: 5, quote: "Exactly what van sales needs — sales tracking, route planning, reaching customers efficiently. A truly professional team.", author: "IT Manager", role: "N.C.S. Gold Bread", initials: "NC" },
      { rating: 5, quote: "Easy and uncomplicated. You can access your data anywhere, and support is always ready to help.", author: "Anon", role: "Google Play review", initials: "A" },
      { rating: 5, quote: "We close orders much faster, with sales updating in real time across every branch.", author: "Sales Manager", role: "FMCG wholesale business", initials: "SM" },
      { rating: 5, quote: "Summary reports help us decide faster — no more monthly Excel.", author: "Business Owner", role: "Beverage business", initials: "BO" },
      { rating: 4, quote: "Staff record orders right on site — far less paperwork.", author: "Field Team Lead", role: "Distribution business", initials: "FL" },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Questions? We have answers",
    faqs: [
      { q: "How do we get started?", a: "Tell us about your business through the form or by phone — our team will set up a demo and guide you through onboarding." },
      { q: "Does it support multiple branches?", a: "Yes — manage multiple branches and view combined or per-branch reports." },
      { q: "Does it really work offline?", a: "Yes — record orders on site even without a signal, then sync automatically once you're back online." },
      { q: "Can I migrate existing data?", a: "Yes — import your own customer and product data using our ready-made templates and import tools." },
    ],
    ctaTitle: "Ready to grow your sales?",
    ctaSub: "Book a free demo with our team and see it working with your business.",
    ctaPrimary: "Book a demo",
    ctaSecondary: "Contact us",
    footerDesc: "All-in-one sales & delivery management that helps your team work faster and more accurately.",
    footerCols: [
      { title: "Product", links: ["Features", "Benefits", "Updates"] },
      { title: "Company", links: ["About", "Blog", "Careers"] },
      { title: "Help", links: ["Help center", "Contact us", "Privacy"] },
    ],
    footerBottom: "© 2026 Vansales. All rights reserved.",
  },
  th: {
    announce: "🎉 ใหม่: รองรับการจัดส่งหลายสาขา และแผนที่เส้นทางแบบเรียลไทม์",
    learnMore: "ดูเพิ่มเติม",
    signIn: "เข้าสู่ระบบ",
    contactSales: "ติดต่อเรา",
    heroBadge: "ใหม่ · รองรับหลายสาขา",
    heroTitle1: "ระบบบริหารงานขาย\nและจัดส่ง",
    heroHighlight: "ครบวงจร",
    heroSub:
      "จัดการคำสั่งซื้อ ลูกค้า สต๊อก เส้นทางจัดส่ง และรายงานยอดขายแบบเรียลไทม์ — ให้ทีมขายภาคสนามทำงานเร็วและแม่นยำขึ้น",
    ctaDemo: "นัดหมายเดโม",
    ctaFeatures: "ดูฟีเจอร์",
    trust: "ไว้วางใจโดยทีมขายและจัดส่งทั่วประเทศ",
    dash: {
      overview: "ภาพรวมยอดขาย",
      today: "วันนี้",
      salesToday: "ยอดขายวันนี้",
      orders: "ออเดอร์",
      target: "เป้าเดือนนี้",
      so: "SO-1042 · รุ่งเรือง",
      paid: "ชำระแล้ว",
    },
    mobile: {
      eyebrow: "แอปมือถือ",
      title: "ยกหน้าร้านไปไว้ในมือทีมขาย",
      sub: "เปิดบิล รับออเดอร์ และเก็บเงินจากมือถือเครื่องเดียว ออกแบบมาเพื่อความเร็วหน้างาน ข้อมูลซิงค์เข้าหลังบ้านอัตโนมัติ",
      points: [
        "เปิดบิลหน้าร้านได้ในไม่กี่วินาที",
        "เห็นประวัติ ราคา และเครดิตลูกค้าบนจอ",
        "กดเก็บเงินได้เลย — เงินสด / โอน / QR",
      ],
      appbar: "ออเดอร์ใหม่",
      badge: "ซิงค์แล้ว",
      customer: "ร้านสมชายมินิมาร์ท",
      customerSub: "สาย 7 · บางนา",
      items: [
        { n: "น้ำดื่ม 600ml ×24", p: "฿1,200" },
        { n: "นม UHT ×12", p: "฿540" },
        { n: "บะหมี่กึ่งฯ ×30", p: "฿180" },
      ],
      totalLabel: "รวมทั้งสิ้น",
      total: "฿1,920",
      pay: "เปิดบิล & เก็บเงิน",
      pm: ["เงินสด", "โอน", "QR"],
      toggle: { order: "ออเดอร์", sales: "ยอดขาย", route: "เส้นทาง" },
      sales: {
        appbar: "ยอดขายของฉัน",
        live: "เรียลไทม์",
        kpiLabel: "ยอดขายวันนี้",
        kpiValue: "฿128,400",
        kpiDelta: "▲ 12% เทียบเมื่อวาน",
        chartLabel: "7 วันล่าสุด",
        topLabel: "สินค้าขายดี",
        top: [
          { n: "น้ำดื่ม", v: "฿42,300" },
          { n: "นม UHT", v: "฿28,100" },
          { n: "บะหมี่กึ่งฯ", v: "฿19,800" },
        ],
      },
      route: {
        appbar: "เส้นทางวันนี้",
        count: "4 จุด",
        stopsLabel: "จุดแวะ",
        next: "ถัดไป",
        start: "เริ่มนำทาง",
        stops: [
          { n: "ร้านสมชายมินิมาร์ท", t: "09:00 · เสร็จแล้ว", st: "done" },
          { n: "ร้านรุ่งเรือง", t: "10:30 · 1.2 กม.", st: "next" },
          { n: "ร้านโชคดี", t: "11:15 · 3.0 กม.", st: "pending" },
          { n: "ร้านวัฒนา", t: "13:00 · 5.4 กม.", st: "pending" },
        ],
      },
    },
    chipUp: "ยอดขาย +12%",
    chipVs: "เทียบเมื่อวาน",
    valuesEyebrow: "ทำไมต้อง Vansales",
    valuesTitle: "ผลลัพธ์ที่ธุรกิจสัมผัสได้จริง",
    valuesSub: "ออกแบบมาเพื่อทีมขายและจัดส่งโดยเฉพาะ ช่วยให้ทำงานน้อยลงแต่ขายได้มากขึ้น",
    values: [
      { icon: <TrendingUp />, t: "เพิ่มยอดขาย", d: "ทีมขายปิดดีลได้มากขึ้นด้วยข้อมูลลูกค้าและสต๊อกครบในมือ" },
      { icon: <Wallet />, t: "ลดต้นทุน", d: "จัดเส้นทางและสต๊อกอย่างมีประสิทธิภาพ ลดของเสียและค่าน้ำมัน" },
      { icon: <ShieldCheck />, t: "ลดข้อผิดพลาด", d: "ออเดอร์และบิลแม่นยำ ไม่ตกหล่น ตรวจสอบย้อนหลังได้" },
      { icon: <Gauge />, t: "เห็นภาพรวมเรียลไทม์", d: "ตัดสินใจได้ไวจากแดชบอร์ดและรายงานแบบเรียลไทม์" },
    ],
    industriesLabel: "เหมาะกับธุรกิจ:",
    industries: ["FMCG", "เครื่องดื่ม", "อาหาร & เบเกอรี่", "ค้าส่ง-กระจายสินค้า", "ขายตรงหน้าร้าน"],
    featEyebrow: "ฟีเจอร์",
    featTitle: "ทุกอย่างที่ทีมขายต้องการ ในที่เดียว",
    featSub: "เครื่องมือครบครันที่ช่วยให้ทีมขายและจัดส่งทำงานได้เร็วและแม่นยำขึ้น",
    featAll: "ดูฟีเจอร์ทั้งหมด",
    feats: [
      { icon: <ShoppingCart />, t: "จัดการคำสั่งซื้อ", d: "สร้าง ติดตาม และปิดการขายในไม่กี่คลิก พร้อมสถานะเรียลไทม์" },
      { icon: <Users />, t: "ฐานข้อมูลลูกค้า", d: "ประวัติการซื้อ เครดิต และการติดต่อของลูกค้าทุกราย", tone: "brand" as const },
      { icon: <Boxes />, t: "จัดการสต๊อก", d: "เช็คสินค้าคงเหลือทุกสาขา แจ้งเตือนเมื่อใกล้หมด" },
      { icon: <MapPin />, t: "เส้นทางและแผนที่", d: "วางแผนเส้นทางขาย ติดตามตำแหน่งทีมภาคสนามแบบเรียลไทม์", tone: "brand" as const },
      { icon: <BarChart3 />, t: "รายงานยอดขาย", d: "แดชบอร์ดและกราฟสรุปยอดขาย เทียบเป้ารายวัน-เดือน" },
      { icon: <Smartphone />, t: "ใช้งานบนมือถือ", d: "เปิดบิลและบันทึกออเดอร์หน้างานได้ทันทีจากมือถือ" },
    ],
    dd1Badge: "ภาคสนาม",
    dd1Title: "เปิดบิล รับออเดอร์ เก็บเงิน จบที่หน้าร้าน",
    dd1Sub:
      "ทีมขายปิดการขายครบวงจรที่หน้าร้านลูกค้า เห็นประวัติการซื้อและเครดิตทันที ออกบิลไว ลดงานเอกสาร ข้อมูลเข้าระบบกลางแบบเรียลไทม์",
    dd1Points: [
      "เปิดบิล/ใบเสร็จหน้างานในไม่กี่วินาที",
      "เห็นประวัติซื้อและเครดิตลูกค้าทันทีหน้างาน",
      "ข้อมูลเข้าระบบกลางอัตโนมัติ แบบเรียลไทม์",
    ],
    dd1Chip: "เปิดบิลแล้ว 24 ใบวันนี้",
    dd2Badge: "จัดส่ง",
    dd2Title: "ติดตามการจัดส่งแบบเรียลไทม์",
    dd2Sub:
      "วางแผนเส้นทาง ติดตามตำแหน่งรถและสถานะการจัดส่งของแต่ละจุดบนแผนที่ ลูกค้ารู้เวลาส่งที่แม่นยำ ลดของตกค้าง",
    dd2Points: [
      "จัดเส้นทางอัตโนมัติ ประหยัดเวลาและน้ำมัน",
      "เห็นตำแหน่งทีมและสถานะทุกจุดแบบเรียลไทม์",
      "หลักฐานการส่ง (ลายเซ็น/รูปถ่าย) ครบถ้วน",
    ],
    dd2Chip: "ส่งสำเร็จ 18/20 จุด",
    contactEyebrow: "ติดต่อเรา",
    contactTitle: "พร้อมสร้างการเปลี่ยนแปลงไปพร้อมกันแล้วหรือยัง",
    contactSub:
      "บอกความต้องการของคุณ ผู้เชี่ยวชาญของเราจะช่วยแนะนำแพ็กเกจที่ใช่ ตอบคำถาม และพาชมเดโม",
    contactPoints: [
      "ปรึกษาฟรี พร้อมเดโมเฉพาะธุรกิจของคุณ",
      "มีทีมช่วยตั้งระบบและนำเข้าข้อมูลให้",
      "แนะนำตรงไปตรงมาว่าอะไรเหมาะ ไม่กดดัน",
    ],
    contactPhone: "โทรเลย (+66) 0 8925 2945 (จ.–ส. 9:00–18:00)",
    fName: "ชื่อ–นามสกุล",
    fNameP: "กรอกชื่อของคุณ",
    fCompany: "บริษัท",
    fCompanyP: "ชื่อบริษัท/ร้าน",
    fEmail: "อีเมล",
    fPhone: "เบอร์โทร",
    fSize: "ขนาดทีมขาย",
    fSizeP: "เลือกจำนวนพนักงาน",
    sizes: ["1–10 คน", "11–50 คน", "51–200 คน", "มากกว่า 200 คน"],
    fTopic: "เรื่องที่ต้องการติดต่อ",
    fTopicP: "เลือกหัวข้อ",
    topics: ["นัดหมายเดโม", "แพ็กเกจและราคา", "ปรึกษาการใช้งาน", "เป็นพาร์ทเนอร์", "อื่น ๆ"],
    fMessage: "ข้อความ (ไม่บังคับ)",
    fMessageP: "เล่าสั้นๆ ว่าคุณต้องการอะไร",
    submit: "ปรึกษาทีมงาน",
    sending: "กำลังส่ง…",
    sentTitle: "ขอบคุณ — เราได้รับข้อความของคุณแล้ว",
    sentBody: "ทีมงานจะติดต่อกลับภายใน 1 วันทำการ",
    errMsg: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง หรือโทรหาเรา",
    pdpaPre: "การส่งฟอร์มถือว่าคุณยอมรับ",
    pdpaLink: "นโยบายความเป็นส่วนตัว",
    testiEyebrow: "เสียงจากผู้ใช้งาน",
    testiTitle: "ทีมขายทำงานง่ายขึ้นจริง",
    testimonials: [
      { rating: 5, quote: "บริหารทีมสะดวกขึ้นมาก วางแผน Route แม่นยำ เข้าถึงลูกค้ามากขึ้น เปลี่ยนเซลส์ใหม่ก็ทำงานต่อได้ทันที ใช้ง่าย ราคาเป็นมิตร", author: "Marketing & Sales Director", role: "บริษัท อินเตอร์รุ่งเรือง กรุ๊ป จำกัด", initials: "IR" },
      { rating: 5, quote: "ตอบโจทย์งานขายหน่วยรถจริง ตั้งแต่ติดตามงานขาย วางแผนเส้นทาง ไปจนเข้าถึงลูกค้าอย่างมีประสิทธิภาพ ทีมบริการมืออาชีพ", author: "IT Manager", role: "บริษัท เอ็น.ซี.เอส โกลด์เบรด จำกัด", initials: "NC" },
      { rating: 5, quote: "ใช้สะดวก ไม่ซับซ้อน อยู่ที่ไหนก็เข้าถึงข้อมูลได้ทันที ทีมซัพพอร์ตพร้อมช่วยเสมอ", author: "คุณ อานนท์", role: "รีวิวจาก Google Play", initials: "อ" },
      { rating: 5, quote: "ทีมขายปิดออเดอร์ได้เร็วขึ้นมาก เห็นยอดเรียลไทม์ทุกสาขา", author: "ผู้จัดการขาย", role: "ธุรกิจค้าส่งสินค้าอุปโภคบริโภค", initials: "ขส" },
      { rating: 5, quote: "รายงานสรุปช่วยให้ตัดสินใจไวขึ้น ไม่ต้องทำ Excel เองทุกเดือน", author: "เจ้าของธุรกิจ", role: "ธุรกิจเครื่องดื่ม", initials: "ธก" },
      { rating: 4, quote: "พนักงานบันทึกออเดอร์หน้างานได้เลย ลดงานเอกสารเยอะมาก", author: "หัวหน้าทีมภาคสนาม", role: "ธุรกิจกระจายสินค้า", initials: "ภส" },
    ],
    faqEyebrow: "คำถามที่พบบ่อย",
    faqTitle: "มีคำถาม? เรามีคำตอบ",
    faqs: [
      { q: "เริ่มต้นใช้งานยังไง?", a: "บอกความต้องการของคุณผ่านฟอร์มหรือโทรหาเรา ทีมงานจะจัดเดโมและพาเริ่มต้นใช้งานให้" },
      { q: "รองรับหลายสาขาไหม?", a: "รองรับ จัดการหลายสาขาและดูรายงานรวมหรือแยกสาขาได้" },
      { q: "ใช้งานออฟไลน์ได้จริงไหม?", a: "ได้ ทีมขายบันทึกออเดอร์หน้างานได้แม้ไม่มีสัญญาณ แล้วซิงค์อัตโนมัติเมื่อออนไลน์" },
      { q: "ย้ายข้อมูลเดิมเข้าระบบได้ไหม?", a: "ได้ นำเข้าข้อมูลลูกค้าและสินค้าได้เองด้วย template และเครื่องมือช่วยนำเข้าของเรา" },
    ],
    ctaTitle: "พร้อมเพิ่มยอดขายแล้วหรือยัง?",
    ctaSub: "นัดเดโมฟรีกับทีมงาน เห็นภาพการใช้งานจริงกับธุรกิจของคุณ",
    ctaPrimary: "นัดหมายเดโม",
    ctaSecondary: "ติดต่อเรา",
    footerDesc: "ระบบบริหารงานขายและจัดส่งครบวงจร ช่วยให้ทีมขายทำงานได้เร็วและแม่นยำขึ้น",
    footerCols: [
      { title: "ผลิตภัณฑ์", links: ["ฟีเจอร์", "ประโยชน์", "อัปเดต"] },
      { title: "บริษัท", links: ["เกี่ยวกับเรา", "บทความ", "ร่วมงาน"] },
      { title: "ช่วยเหลือ", links: ["ศูนย์ช่วยเหลือ", "ติดต่อเรา", "ความเป็นส่วนตัว"] },
    ],
    footerBottom: "© 2026 Vansales. สงวนลิขสิทธิ์.",
  },
} satisfies Record<Lang, unknown>;


function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-2xl ring-1 ring-black/5">
      <div className="flex items-center gap-2 border-b bg-muted/50 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
        <div className="ml-3 flex h-5 flex-1 items-center rounded-md bg-background px-2 text-[10px] text-muted-foreground">
          app.vansales.asia/dashboard
        </div>
      </div>
      {children}
    </div>
  );
}

function DashboardMock({ d }: { d: (typeof STR)["en"]["dash"] }) {
  const bars = [42, 58, 50, 67, 78, 90];
  return (
    <div className="flex h-[300px] bg-background text-foreground text-[11px]">
      <div className="flex w-12 flex-col items-center gap-4 border-r bg-card py-3">
        <Logo variant="mark" icon="square" height={22} />
        {[LayoutDashboard, ShoppingCart, Users, Truck, BarChart3].map((Icon, i) => (
          <Icon key={i} className={`h-4 w-4 ${i === 0 ? "text-primary" : "text-muted-foreground"}`} />
        ))}
      </div>
      <div className="flex-1 overflow-hidden p-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-semibold">{d.overview}</span>
          <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">{d.today}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { l: d.salesToday, v: "฿128,400", x: "▲ 12%", accent: true },
            { l: d.orders, v: "48" },
            { l: d.target, v: "82%" },
          ].map((s, i) => (
            <div key={i} className={`rounded-lg border p-2 ${s.accent ? "bg-primary text-primary-foreground" : "bg-card"}`}>
              <div className={`text-[9px] ${s.accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{s.l}</div>
              <div className="text-sm font-semibold">{s.v}</div>
              {s.x && <div className="text-[9px] font-medium">{s.x}</div>}
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border bg-card p-2">
          <div className="mb-2 flex items-end gap-1.5" style={{ height: 70 }}>
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary" style={{ height: `${h}%`, opacity: 0.55 + i * 0.075 }} />
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-lg border bg-card px-2.5 py-2">
          <span className="font-medium">{d.so}</span>
          <span className="rounded-full bg-success/15 px-2 py-0.5 text-[9px] font-medium text-success">{d.paid}</span>
        </div>
      </div>
    </div>
  );
}

function PhoneMock({ m }: { m: (typeof STR)["en"]["mobile"] }) {
  const [screen, setScreen] = useState<"order" | "sales" | "route">("route");
  const pmIcons = [Banknote, CreditCard, QrCode];
  const bars = [40, 55, 48, 66, 60, 82, 95];
  const s = m.sales;
  const r = m.route;
  const head = {
    order: { icon: <ChevronLeft className="h-4 w-4" />, title: m.appbar, badge: m.badge },
    sales: { icon: <BarChart3 className="h-4 w-4" />, title: s.appbar, badge: s.live },
    route: { icon: <MapPin className="h-4 w-4" />, title: r.appbar, badge: r.count },
  }[screen];
  return (
    <div className="mx-auto w-[268px]">
      <div className="rounded-[2.6rem] border border-black/10 bg-zinc-900 p-2.5 shadow-2xl">
        <div className="flex min-h-[548px] flex-col overflow-hidden rounded-[2.1rem] bg-background">
          <div className="relative bg-primary px-4 pb-3 pt-2.5 text-primary-foreground">
            <div className="absolute left-1/2 top-1.5 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/25" />
            <div className="mt-3 flex items-center gap-2">
              {head.icon}
              <span className="text-sm font-semibold">{head.title}</span>
              <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium">{head.badge}</span>
            </div>
          </div>

          {screen === "order" ? (
            <div className="flex flex-1 flex-col p-3 text-[12px]" key="order">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 rounded-xl border bg-card p-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary"><ShoppingCart className="h-4 w-4" /></span>
                  <div className="leading-tight">
                    <div className="font-semibold text-foreground">{m.customer}</div>
                    <div className="text-[10px] text-muted-foreground">{m.customerSub}</div>
                  </div>
                </div>
                <div className="rounded-xl border bg-card">
                  {m.items.map((it, i) => (
                    <div key={i} className={`flex items-center justify-between px-3 py-2.5 ${i > 0 ? "border-t" : ""}`}>
                      <span className="text-foreground">{it.n}</span>
                      <span className="font-medium text-foreground">{it.p}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between border-t px-3 py-2.5">
                    <span className="text-muted-foreground">{m.totalLabel}</span>
                    <span className="text-base font-bold text-primary">{m.total}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1" />
              <div className="space-y-2.5">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-[13px] font-semibold text-primary-foreground">
                  <Wallet className="h-4 w-4" /> {m.pay}
                </button>
                <div className="flex items-center justify-center gap-4 text-[10px] text-muted-foreground">
                  {m.pm.map((p, i) => {
                    const Icon = pmIcons[i];
                    return (
                      <span key={p} className="flex items-center gap-1"><Icon className="h-3.5 w-3.5" /> {p}</span>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : screen === "sales" ? (
            <div className="flex flex-1 flex-col gap-2.5 p-3 text-[12px]" key="sales">
              <div className="rounded-xl bg-primary p-3 text-primary-foreground">
                <div className="text-[10px] opacity-80">{s.kpiLabel}</div>
                <div className="text-2xl font-bold leading-tight">{s.kpiValue}</div>
                <div className="text-[10px] font-medium">{s.kpiDelta}</div>
              </div>
              <div className="rounded-xl border bg-card p-3">
                <div className="mb-2 text-[10px] text-muted-foreground">{s.chartLabel}</div>
                <div className="flex items-end gap-1.5" style={{ height: 92 }}>
                  {bars.map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-primary" style={{ height: `${h}%`, opacity: 0.5 + i * 0.07 }} />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border bg-card">
                <div className="border-b px-3 py-2 text-[10px] font-medium text-muted-foreground">{s.topLabel}</div>
                {s.top.map((it, i) => (
                  <div key={i} className={`flex items-center justify-between px-3 py-2 ${i > 0 ? "border-t" : ""}`}>
                    <span className="text-foreground">{it.n}</span>
                    <span className="font-medium text-foreground">{it.v}</span>
                  </div>
                ))}
              </div>
              <div className="flex-1" />
            </div>
          ) : (
            <div className="flex flex-1 flex-col p-3 text-[12px]" key="route">
              <div className="space-y-2.5">
                <div className="overflow-hidden rounded-xl border bg-[#e9eef4]">
                  <svg viewBox="0 0 240 132" className="block w-full">
                    <rect width="240" height="132" fill="#e9eef4" />
                    <g fill="#dce3ec">
                      <rect x="14" y="14" width="50" height="34" rx="4" />
                      <rect x="82" y="8" width="58" height="26" rx="4" />
                      <rect x="160" y="16" width="66" height="40" rx="4" />
                      <rect x="18" y="70" width="52" height="48" rx="4" />
                      <rect x="150" y="78" width="74" height="44" rx="4" />
                    </g>
                    <g stroke="#f3f6fa" strokeWidth="5">
                      <line x1="0" y1="60" x2="240" y2="60" />
                      <line x1="112" y1="0" x2="112" y2="132" />
                    </g>
                    <polyline points="30,104 82,66 142,90 206,40" fill="none" stroke="#bcd6f5" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="30,104 82,66 142,90 206,40" fill="none" stroke="#1765B3" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <g fontSize="9" fontWeight="700" textAnchor="middle">
                      <circle cx="30" cy="104" r="9" fill="#16a34a" />
                      <text x="30" y="107.5" fill="#fff">✓</text>
                      <circle cx="82" cy="66" r="10.5" fill="#1765B3" stroke="#fff" strokeWidth="2.5" />
                      <text x="82" y="69.5" fill="#fff">2</text>
                      <circle cx="142" cy="90" r="9" fill="#fff" stroke="#9aa7b6" strokeWidth="2" />
                      <text x="142" y="93" fill="#5b6b7d">3</text>
                      <circle cx="206" cy="40" r="9" fill="#fff" stroke="#9aa7b6" strokeWidth="2" />
                      <text x="206" y="43" fill="#5b6b7d">4</text>
                    </g>
                  </svg>
                </div>
                <div className="rounded-xl border bg-card">
                  <div className="flex items-center justify-between border-b px-3 py-2 text-[10px] font-medium text-muted-foreground">
                    <span>{r.stopsLabel}</span><span>{r.count}</span>
                  </div>
                  {r.stops.map((st, i) => {
                    const done = st.st === "done";
                    const next = st.st === "next";
                    return (
                      <div key={i} className={`flex items-center gap-2.5 px-3 py-2 ${i > 0 ? "border-t" : ""}`}>
                        <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold", done ? "bg-success text-white" : next ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground")}>
                          {done ? <Check className="h-3 w-3" /> : i + 1}
                        </span>
                        <div className="flex-1 leading-tight">
                          <div className="font-medium text-foreground">{st.n}</div>
                          <div className="text-[10px] text-muted-foreground">{st.t}</div>
                        </div>
                        {next && <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-medium text-primary">{r.next}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex-1" />
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-[13px] font-semibold text-primary-foreground">
                <Navigation className="h-4 w-4" /> {r.start}
              </button>
            </div>
          )}

          <div className="pb-2 pt-1"><div className="mx-auto h-1 w-24 rounded-full bg-foreground/20" /></div>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <div className="inline-flex rounded-full border bg-card p-1 shadow-sm">
          {(["order", "sales", "route"] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setScreen(k)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-medium transition",
                screen === k ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {m.toggle[k]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHead({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Badge variant="soft" className="mb-4 rounded-full px-3 py-1 text-xs">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-[2.5rem] sm:leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}

function LandingPage({ initialLang }: { initialLang: Lang }) {
  const lang = initialLang;
  const t = STR[lang];
  const [t1, t2] = t.heroTitle1.split("\n");
  const testiRef = useRef<HTMLDivElement>(null);
  const scrollTesti = (dir: number) =>
    testiRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });

  return (
    <div className="bg-background text-foreground antialiased">
      <div className="bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground">
        {t.announce} · <Link href={localized("/features/multi-branch", lang)} className="underline underline-offset-2">{t.learnMore}</Link>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/15 bg-[#1763ad]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href={localized("/", lang)} aria-label="Vansales home" className="shrink-0">
            <Logo height={30} icon="square" color="#ffffff" />
          </Link>
          <DesktopNav items={navItems(lang)} />
          <div className="flex items-center gap-3">
            <LangSwitch lang={lang} onDark />
            <a href={`https://manager.vansales.asia/auth/login?lang=${lang}`} target="_blank" rel="noopener noreferrer" className="hidden text-sm font-medium text-white/70 hover:text-white md:block">
              {t.signIn}
            </a>
            <a href={localized("/#contact", lang)} className="hidden sm:block"><Button className="bg-white text-primary hover:bg-white/90">{t.contactSales}</Button></a>
            <MobileNav
              items={navItems(lang)}
              signIn={t.signIn}
              signInHref={`https://manager.vansales.asia/auth/login?lang=${lang}`}
              contactSales={t.contactSales}
              contactHref={localized("/#contact", lang)}
            />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#1765B3] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at top right, #3f8ae0, #0f4f93 68%)" }} />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_78%)]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:py-24">
          <div>
            <Badge variant="soft" className="mb-5 rounded-full px-3 py-1 text-xs">{t.heroBadge}</Badge>
            <h1 className="text-[2.5rem] font-bold leading-[1.1] tracking-tight sm:text-[3.25rem]">
              {t1}<br />{t2} <span className="text-[#bfe0ff]">{t.heroHighlight}</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">{t.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={localized("/#contact", lang)}><Button size="lg" className="bg-white text-primary hover:bg-white/90">{t.ctaDemo} <ArrowRight /></Button></a>
              <a href={localized("/features", lang)}><Button size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">{t.ctaFeatures}</Button></a>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["รร", "สม", "วภ", "ธน"].map((x, i) => (
                  <span key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1763ad] bg-white/20 text-[10px] font-medium text-white">{x}</span>
                ))}
              </div>
              <div className="text-sm">
                <span className="flex text-warning">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-warning" />)}</span>
                <span className="text-white/60">{t.trust}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[#8fc4ff]/40 blur-3xl" />
            <BrowserFrame><DashboardMock d={t.dash} /></BrowserFrame>
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-xl border bg-card px-3 py-2 text-foreground shadow-xl sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/15 text-success"><TrendingUp className="h-4 w-4" /></span>
              <div className="text-xs"><div className="font-semibold">{t.chipUp}</div><div className="text-muted-foreground">{t.chipVs}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="border-y bg-muted/30 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.valuesEyebrow} title={t.valuesTitle} subtitle={t.valuesSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.map((b) => (
              <div key={b.t} className="rounded-2xl border bg-card p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&>svg]:size-5">{b.icon}</div>
                <h3 className="mb-1.5 font-semibold">{b.t}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">{t.industriesLabel}</span>
            {t.industries.map((c) => (
              <Badge key={c} variant="outline" className="rounded-full px-3 py-1 font-normal">{c}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.featEyebrow} title={t.featTitle} subtitle={t.featSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.feats.map((f, i) => (
              <a
                key={f.t}
                href={localized(`/features/${FEAT_SLUGS[i]}`, lang)}
                className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition group-hover:bg-primary/10" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-200 group-hover:bg-primary group-hover:text-primary-foreground [&>svg]:size-6">{f.icon}</div>
                  <h3 className="mb-1.5 flex items-center gap-1.5 font-semibold">
                    {f.t}
                    <ArrowRight className="h-4 w-4 -translate-x-1 text-primary opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">{f.d}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a href={localized("/features", lang)}>
              <Button size="lg" variant="outline" className="gap-2">{t.featAll} <ArrowRight className="h-4 w-4" /></Button>
            </a>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-gradient-to-br from-[#eef4fc] to-[#f8fafc] px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <Badge variant="soft" className="mb-4 rounded-full px-3 py-1 text-xs">{t.mobile.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.mobile.title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{t.mobile.sub}</p>
            <ul className="mt-6 space-y-3">
              {t.mobile.points.map((x) => (
                <li key={x} className="flex items-start gap-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span><span className="text-sm">{x}</span></li>
              ))}
            </ul>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fc4ff]/40 blur-3xl" />
            <PhoneMock m={t.mobile} />
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <Badge variant="soft" className="mb-4 rounded-full px-3 py-1 text-xs">{t.dd1Badge}</Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.dd1Title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{t.dd1Sub}</p>
            <ul className="mt-6 space-y-3">
              {t.dd1Points.map((x) => (
                <li key={x} className="flex items-start gap-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span><span className="text-sm">{x}</span></li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image src={fieldSales} alt="A field sales rep taking an order at a shop counter" width={716} height={508} sizes="(max-width: 1024px) 100vw, 50vw" className="h-auto w-full rounded-2xl object-cover shadow-xl ring-1 ring-black/5" />
            <div className="absolute -right-4 -top-4 hidden rounded-xl border bg-card px-3 py-2 shadow-lg sm:block">
              <div className="flex items-center gap-2 text-xs"><FileText className="h-4 w-4 text-primary" /><span className="font-medium">{t.dd1Chip}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <Image src={delivery} alt="A delivery driver handing over goods at a shop" width={716} height={508} sizes="(max-width: 1024px) 100vw, 50vw" className="h-auto w-full rounded-2xl object-cover shadow-xl ring-1 ring-black/5" />
            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border bg-card px-3 py-2 shadow-lg sm:block">
              <div className="flex items-center gap-2 text-xs"><Bell className="h-4 w-4 text-success" /><span className="font-medium">{t.dd2Chip}</span></div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Badge variant="soft" className="mb-4 rounded-full px-3 py-1 text-xs">{t.dd2Badge}</Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.dd2Title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{t.dd2Sub}</p>
            <ul className="mt-6 space-y-3">
              {t.dd2Points.map((x) => (
                <li key={x} className="flex items-start gap-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span><span className="text-sm">{x}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-muted/30 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border bg-card shadow-sm">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <Badge variant="soft" className="mb-4 rounded-full px-3 py-1 text-xs">{t.contactEyebrow}</Badge>
              <h2 className="text-3xl font-semibold tracking-tight">{t.contactTitle}</h2>
              <p className="mt-4 text-muted-foreground">{t.contactSub}</p>
              <ul className="mt-6 space-y-3">
                {t.contactPoints.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-sm"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>{x}</li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"><Phone className="h-4 w-4 text-primary" /> {t.contactPhone}</div>
            </div>
            <ContactForm
              lang={lang}
              copy={{
                fName: t.fName,
                fNameP: t.fNameP,
                fCompany: t.fCompany,
                fCompanyP: t.fCompanyP,
                fEmail: t.fEmail,
                fPhone: t.fPhone,
                fSize: t.fSize,
                fSizeP: t.fSizeP,
                sizes: t.sizes,
                fTopic: t.fTopic,
                fTopicP: t.fTopicP,
                topics: t.topics,
                fMessage: t.fMessage,
                fMessageP: t.fMessageP,
                submit: t.submit,
                sending: t.sending,
                sentTitle: t.sentTitle,
                sentBody: t.sentBody,
                errMsg: t.errMsg,
                pdpaPre: t.pdpaPre,
                pdpaLink: t.pdpaLink,
              }}
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <Badge variant="soft" className="mb-4 rounded-full px-3 py-1 text-xs">{t.testiEyebrow}</Badge>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-[2.5rem] sm:leading-tight">{t.testiTitle}</h2>
            </div>
            <div className="hidden shrink-0 gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => scrollTesti(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-card text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => scrollTesti(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-card text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div
            ref={testiRef}
            className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {t.testimonials.map((x) => (
              <div key={x.author} className="w-[300px] shrink-0 snap-start sm:w-[360px]">
                <Testimonial rating={x.rating} quote={x.quote} author={x.author} role={x.role} initials={x.initials} className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <SectionHead eyebrow={t.faqEyebrow} title={t.faqTitle} />
          <Accordion type="single" collapsible defaultValue="q0">
            {t.faqs.map((f, i) => (
              <AccordionItem key={i} value={`q${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection title={t.ctaTitle} subtitle={t.ctaSub} primaryCta={{ label: t.ctaPrimary, href: "/#contact" }} secondaryCta={{ label: t.ctaSecondary, href: "/#contact" }} />

      <SiteFooter lang={lang} />
    </div>
  );
}

export default LandingPage;
