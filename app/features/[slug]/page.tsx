import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { resolveLang } from "@/lib/server-lang";
import { localized } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FEATURE_MOCKS, type MockKind } from "@/components/feature-mocks";

type Block = { h: string; body: string; points: string[] };
type Copy = {
  eyebrow: string;
  title: string;
  sub: string;
  intro: string;
  blocks: Block[];
  outcomeTitle: string;
  outcomes: string[];
  introNote?: string[];
  intro2?: string;
  how?: { h: string; steps: string[] };
  faq?: { q: string; a: string }[];
};

const DETAILS: Record<string, { mock: MockKind; mock2?: MockKind; en: Copy; th: Copy }> = {
  orders: {
    mock: "order",
    mock2: "payment",
    en: {
      eyebrow: "Orders",
      title: "Order management, end to end",
      sub: "Take orders at the counter, track every status, and close the sale — one flow from the field to the back office.",
      intro:
        "Your reps take an order in seconds at the customer's shop. Pricing, promotions, stock and credit all apply automatically — nothing re-keyed, nothing lost on paper.",
      blocks: [
        {
          h: "Take orders on site in seconds",
          body: "No more paper order books. Reps pick products, quantities and units on their phone — even offline — and the bill is ready instantly.",
          points: ["Barcode scan or quick product search", "Works offline, syncs when back online", "Applies price lists and promotions automatically"],
        },
        {
          h: "Track every order's status",
          body: "Follow each order through its lifecycle so nothing slips through the cracks.",
          points: ["Taken → picked → delivered → closed", "Pending and overdue orders at a glance", "Linked to delivery and payment"],
        },
        {
          h: "Connected to stock and credit",
          body: "Orders check real stock and each customer's credit limit, so you never oversell or over-extend.",
          points: ["Live stock check before confirming", "Customer credit limit and balance enforced", "Tax invoices and receipts on the spot"],
        },
      ],
      outcomeTitle: "What gets better",
      outcomes: ["Faster order-taking at the shopfront", "Fewer errors and far less paperwork", "Real-time visibility for the office"],
      intro2:
        "Close the sale on the spot. Take cash, transfer or QR, and issue a tax invoice or receipt before you leave the shop — the order, payment and document all stay linked.",
      how: {
        h: "How it works",
        steps: [
          "Open the app at the customer's shop — online or offline.",
          "Pick products, quantities and units; price, promotion and credit apply automatically.",
          "Confirm — Vansales checks live stock and the customer's credit limit.",
          "Issue the bill or receipt; the order syncs to the office in real time.",
        ],
      },
      faq: [
        { q: "Can reps take orders offline?", a: "Yes. Orders are taken on the phone even without a signal, and sync automatically once back online — nothing is lost in the field." },
        { q: "Does it issue tax invoices and receipts?", a: "Yes. You can issue a tax invoice or receipt on the spot, linked to the order and the payment." },
        { q: "How do I track an order's status?", a: "Every order moves through taken → picked → delivered → closed, and you can see pending or overdue orders at a glance." },
        { q: "Does it prevent overselling or over-extending credit?", a: "Orders check live stock and each customer's credit limit before they're confirmed, so reps can't oversell or exceed credit." },
      ],
    },
    th: {
      eyebrow: "ออเดอร์",
      title: "บริหารออเดอร์ครบวงจร",
      sub: "เปิดบิลหน้าร้าน รับออเดอร์ ติดตามทุกสถานะ ไปจนปิดการขาย — จบในโฟลว์เดียว ตั้งแต่หน้างานถึงออฟฟิศ",
      intro:
        "พนักงานเปิดออเดอร์ได้ในไม่กี่วินาทีที่หน้าร้านลูกค้า ราคา โปรโมชัน สต๊อก และเครดิต ปรับให้อัตโนมัติ ไม่ต้องคีย์ซ้ำ ไม่ตกหล่นไปกับกระดาษ",
      blocks: [
        {
          h: "เปิดบิลหน้างานในไม่กี่วินาที",
          body: "เลิกใช้สมุดออเดอร์กระดาษ พนักงานเลือกสินค้า จำนวน และหน่วยบนมือถือ แม้ออฟไลน์บิลก็พร้อมทันที",
          points: ["สแกนบาร์โค้ดหรือค้นหาสินค้าได้รวดเร็ว", "ใช้งานออฟไลน์ได้ ซิงค์เมื่อกลับมาออนไลน์", "ดึงราคาและโปรโมชันให้อัตโนมัติ"],
        },
        {
          h: "ติดตามสถานะทุกออเดอร์",
          body: "ตามออเดอร์ได้ตลอดทุกขั้นตอน ไม่มีตกหล่น",
          points: ["รับ → จัด → ส่ง → ปิด", "เห็นออเดอร์ค้างและเกินกำหนดได้ทันที", "เชื่อมกับการจัดส่งและการเงิน"],
        },
        {
          h: "เชื่อมสต๊อกและเครดิต",
          body: "ออเดอร์อิงสต๊อกจริงและวงเงินเครดิตของลูกค้าแต่ละราย จึงไม่ขายเกินหรือปล่อยเครดิตเกิน",
          points: ["เช็คสต๊อกสดก่อนยืนยัน", "คุมวงเงินและยอดค้างของลูกค้า", "ออกใบกำกับภาษีและใบเสร็จหน้างาน"],
        },
      ],
      outcomeTitle: "ผลลัพธ์ที่ดีขึ้น",
      outcomes: ["รับออเดอร์หน้าร้านได้เร็วขึ้น", "ผิดพลาดน้อยลง งานเอกสารลดลงมาก", "ออฟฟิศเห็นข้อมูลแบบเรียลไทม์"],
      intro2:
        "ปิดการขายได้ทันทีหน้างาน รับเงินสด โอน หรือ QR แล้วออกใบกำกับภาษีหรือใบเสร็จก่อนออกจากร้าน โดยออเดอร์ การชำระเงิน และเอกสารเชื่อมโยงกันทั้งหมด",
      how: {
        h: "ขั้นตอนการทำงาน",
        steps: [
          "เปิดแอปที่หน้าร้านลูกค้า ใช้ได้ทั้งออนไลน์และออฟไลน์",
          "เลือกสินค้า จำนวน และหน่วย ราคา โปรโมชัน และเครดิต ปรับให้อัตโนมัติ",
          "ยืนยัน — Vansales เช็คสต๊อกสดและวงเงินเครดิตของลูกค้า",
          "ออกบิลหรือใบเสร็จ ออเดอร์ซิงค์เข้าออฟฟิศแบบเรียลไทม์",
        ],
      },
      faq: [
        { q: "พนักงานเปิดออเดอร์ตอนออฟไลน์ได้ไหม?", a: "ได้ เปิดออเดอร์บนมือถือได้แม้ไม่มีสัญญาณ แล้วซิงค์อัตโนมัติเมื่อกลับมาออนไลน์ ไม่มีตกหล่นหน้างาน" },
        { q: "ออกใบกำกับภาษีและใบเสร็จได้ไหม?", a: "ได้ ออกใบกำกับภาษีหรือใบเสร็จได้ทันทีหน้างาน เชื่อมกับออเดอร์และการชำระเงิน" },
        { q: "ดูสถานะออเดอร์ได้อย่างไร?", a: "ทุกออเดอร์ไล่สถานะ รับ → จัด → ส่ง → ปิด และเห็นออเดอร์ค้างหรือเกินกำหนดได้ทันที" },
        { q: "ป้องกันการขายเกินหรือปล่อยเครดิตเกินได้ไหม?", a: "ออเดอร์เช็คสต๊อกสดและวงเงินเครดิตของลูกค้าก่อนยืนยัน จึงไม่ขายเกินหรือให้เครดิตเกิน" },
      ],
    },
  },
  route: {
    mock: "route",
    en: {
      eyebrow: "Routes",
      title: "Plan routes, track the field team",
      sub: "Plan the most efficient routes, see where your team is in real time, and make sure every shop on the plan actually gets visited.",
      intro:
        "Build daily routes in a few clicks, then watch them play out on the map — check-ins, GPS, and visit plans all in one place.",
      blocks: [
        {
          h: "Auto-plan & optimize routes",
          body: "Turn a list of shops into an efficient route that saves time and fuel.",
          points: ["Optimize by distance and visit frequency", "Assign routes per rep and per day", "Adjust on the fly"],
        },
        {
          h: "Live GPS & check-in",
          body: "Know who's where, and whether each planned visit actually happened.",
          points: ["Real-time location of the field team", "Check-in and check-out at each shop", "Proof of visit with time and place"],
        },
        {
          h: "Coverage you can measure",
          body: "Compare planned versus actual visits, so you can hold the team to its coverage targets.",
          points: ["Planned vs visited per route", "Missed-visit alerts", "Daily visit plans by area"],
        },
      ],
      outcomeTitle: "What gets better",
      outcomes: ["More shops covered per day", "Less fuel and idle time", "Real accountability in the field"],
    },
    th: {
      eyebrow: "เส้นทาง",
      title: "วางแผนเส้นทาง ติดตามทีมภาคสนาม",
      sub: "วางเส้นทางที่คุ้มที่สุด เห็นตำแหน่งทีมแบบเรียลไทม์ และมั่นใจว่าทุกร้านในแผนได้เข้าเยี่ยมจริง",
      intro:
        "สร้างเส้นทางรายวันได้ในไม่กี่คลิก แล้วติดตามการทำงานจริงบนแผนที่ — เช็คอิน GPS และแผนเยี่ยมร้าน รวมไว้ในที่เดียว",
      blocks: [
        {
          h: "วางและจัดเส้นทางอัตโนมัติ",
          body: "เปลี่ยนรายชื่อร้านให้เป็นเส้นทางที่คุ้มค่า ประหยัดทั้งเวลาและน้ำมัน",
          points: ["จัดตามระยะทางและความถี่การเยี่ยม", "มอบหมายเส้นทางรายคน รายวัน", "ปรับเปลี่ยนได้ทันที"],
        },
        {
          h: "GPS สดและเช็คอิน",
          body: "รู้ว่าใครอยู่ไหน และแต่ละร้านในแผนได้เข้าเยี่ยมจริงหรือไม่",
          points: ["ติดตามตำแหน่งทีมแบบเรียลไทม์", "เช็คอิน/เช็คเอาท์ที่แต่ละร้าน", "หลักฐานการเยี่ยม พร้อมเวลาและสถานที่"],
        },
        {
          h: "วัดความครอบคลุมได้",
          body: "เทียบแผนกับที่เยี่ยมจริง คุมเป้าหมายความครอบคลุมได้",
          points: ["แผนเทียบกับที่เยี่ยมจริงรายเส้นทาง", "แจ้งเตือนร้านที่พลาดการเยี่ยม", "แผนเยี่ยมรายวันแยกตามพื้นที่"],
        },
      ],
      outcomeTitle: "ผลลัพธ์ที่ดีขึ้น",
      outcomes: ["เยี่ยมร้านได้มากขึ้นต่อวัน", "ลดน้ำมันและเวลาที่เสียเปล่า", "วัดผลและรับผิดชอบงานภาคสนามได้จริง"],
    },
  },
  customers: {
    mock: "customer",
    en: {
      eyebrow: "Customers",
      title: "Know every customer before you walk in",
      sub: "Purchase history, credit and contacts for every shop — in your rep's hand, so each visit is quick and well-informed.",
      intro: "No more flipping through notebooks. Tap a shop and see what they buy, what they owe, and who to talk to — right at the door.",
      blocks: [
        { h: "A full profile for every shop", body: "Keep the details that matter in one place, synced across the team.", points: ["Contacts, address and map pin", "Notes and visit history", "Tags and customer groups"] },
        { h: "Purchase history at a glance", body: "See what each shop orders and how often, so reps suggest the right products.", points: ["Past orders and reorder patterns", "Best-sellers for each shop", "Spot a drop-off early"] },
        { h: "Credit under control", body: "Track each customer's limit and balance so the team sells within safe bounds.", points: ["Credit limit and current balance", "Overdue alerts", "Warn or block over-limit orders"] },
      ],
      outcomeTitle: "What gets better",
      outcomes: ["Faster, better-informed visits", "Fewer credit surprises", "Reps who truly know their shops"],
    },
    th: {
      eyebrow: "ลูกค้า",
      title: "รู้จักลูกค้าทุกร้าน ก่อนก้าวเข้าไป",
      sub: "ประวัติการซื้อ เครดิต และผู้ติดต่อของทุกร้าน อยู่ในมือเซลส์ ทุกการเยี่ยมจึงเร็วและตรงจุด",
      intro: "ไม่ต้องเปิดสมุดทีละหน้าอีกต่อไป แตะที่ร้านก็เห็นว่าซื้ออะไร ค้างเท่าไหร่ คุยกับใคร — ตั้งแต่หน้าร้าน",
      blocks: [
        { h: "โปรไฟล์ครบทุกร้าน", body: "เก็บรายละเอียดสำคัญไว้ที่เดียว ซิงค์ทั้งทีม", points: ["ผู้ติดต่อ ที่อยู่ และหมุดแผนที่", "โน้ตและประวัติการเยี่ยม", "แท็กและกลุ่มลูกค้า"] },
        { h: "เห็นประวัติการซื้อทันที", body: "รู้ว่าแต่ละร้านสั่งอะไร บ่อยแค่ไหน เซลส์จึงแนะนำสินค้าได้ตรง", points: ["ออเดอร์ย้อนหลังและรอบการสั่งซ้ำ", "สินค้าขายดีของแต่ละร้าน", "จับสัญญาณยอดตกได้เร็ว"] },
        { h: "คุมเครดิตได้", body: "ติดตามวงเงินและยอดค้างของลูกค้าแต่ละราย ขายในกรอบที่ปลอดภัย", points: ["วงเงินเครดิตและยอดคงค้าง", "แจ้งเตือนยอดเกินกำหนด", "เตือนหรือบล็อกออเดอร์ที่เกินวงเงิน"] },
      ],
      outcomeTitle: "ผลลัพธ์ที่ดีขึ้น",
      outcomes: ["เยี่ยมร้านได้เร็วและแม่นขึ้น", "เซอร์ไพรส์เรื่องเครดิตน้อยลง", "เซลส์รู้จักร้านของตัวเองจริง"],
    },
  },
  stock: {
    mock: "stock",
    en: {
      eyebrow: "Stock",
      title: "Stock you can trust, across every branch",
      sub: "See what's on hand in every warehouse, branch and sales truck — and get warned before you run out.",
      intro: "Sell what you actually have. Live stock across locations means fewer broken promises and fewer dead-stock surprises.",
      blocks: [
        { h: "Real-time stock everywhere", body: "One view of inventory across warehouses, branches and vans.", points: ["Live levels per location", "Van stock loaded on each truck", "Transfers between locations"] },
        { h: "Never promise what you can't deliver", body: "Orders check live stock before they're confirmed.", points: ["Warn or block out-of-stock items", "Reserve stock against open orders", "Accurate availability at the counter"] },
        { h: "Stay ahead of shortages", body: "Get alerted before key items run dry, location by location.", points: ["Low-stock alerts per product", "Reorder points and suggestions", "Slow- and fast-mover insights"] },
      ],
      outcomeTitle: "What gets better",
      outcomes: ["Fewer stockouts and lost sales", "Less dead stock tying up cash", "Enough stock to fill every order"],
    },
    th: {
      eyebrow: "สต๊อก",
      title: "สต๊อกที่เชื่อถือได้ ครบทุกสาขา",
      sub: "เห็นของคงเหลือทุกคลัง ทุกสาขา และบนรถขาย พร้อมเตือนก่อนของจะหมด",
      intro: "ขายเท่าที่มีจริง สต๊อกสดข้ามสาขาทำให้รับปากแล้วไม่พลาด และไม่เจอของค้างเซอร์ไพรส์",
      blocks: [
        { h: "สต๊อกเรียลไทม์ทุกที่", body: "เห็นสินค้าคงคลังรวมทุกคลัง ทุกสาขา และบนรถ ในมุมมองเดียว", points: ["ยอดคงเหลือสดรายสถานที่", "สต๊อกบนรถแต่ละคัน", "โอนย้ายระหว่างสถานที่"] },
        { h: "ไม่รับปากในสิ่งที่ส่งไม่ได้", body: "ออเดอร์เช็คสต๊อกสดก่อนยืนยันทุกครั้ง", points: ["เตือนหรือบล็อกสินค้าที่หมด", "กันสต๊อกให้ออเดอร์ที่เปิดค้าง", "ยอดพร้อมขายแม่นที่หน้าร้าน"] },
        { h: "นำหน้าก่อนของขาด", body: "แจ้งเตือนก่อนสินค้าหลักจะหมด แยกตามสถานที่", points: ["แจ้งเตือนสินค้าใกล้หมดรายตัว", "จุดสั่งซื้อซ้ำและคำแนะนำ", "ดูสินค้าขายช้า-ขายดี"] },
      ],
      outcomeTitle: "ผลลัพธ์ที่ดีขึ้น",
      outcomes: ["ของขาด/เสียโอกาสขายน้อยลง", "ของค้างจมทุนน้อยลง", "มีของพอส่งตามออเดอร์"],
    },
  },
  payments: {
    mock: "payment",
    mock2: "paymentIntegrations",
    en: {
      eyebrow: "Payments",
      title: "Get paid on the spot",
      sub: "Collect cash, transfer or QR right at the shop, and keep credit and outstanding bills under control.",
      intro: "Close the loop at the door. Take payment, issue a receipt or tax invoice, and the money never lags behind the sale.",
      introNote: ["QR generated for the exact amount — no typing", "Real-time auto-confirmation when the money lands", "Works with PromptPay across all Thai banks"],
      blocks: [
        { h: "Take any payment, anywhere", body: "Cash, bank transfer or QR — collected on the phone at the shop.", points: ["Cash, transfer and PromptPay QR", "Partial payments and deposits", "Receipt or tax invoice on the spot"] },
        { h: "Confirm payments in real time", body: "QR PromptPay and Thai QR Payment connect to Thai banks' APIs, so a paid order confirms itself the instant the money arrives.", points: ["QR carries the exact amount — no typing", "PromptPay and Thai QR Payment", "Real-time paid status from the bank"] },
        { h: "Connect your payment gateway", body: "Plug in the gateways you already use — in Thailand and abroad — to accept cards and online payments.", points: ["Thai gateways (e.g. Beam, Omise, 2C2P, TrueMoney)", "International gateways (e.g. Stripe, PayPal)", "Cards, wallets and online payment"] },
        { h: "Credit and collections in hand", body: "See who owes what, and chase it before it ages.", points: ["Outstanding balance per customer", "Aging and overdue views", "Record collections against invoices"] },
        { h: "Money that reconciles itself", body: "Every payment links to its order and syncs to the office instantly.", points: ["Payment tied to order and customer", "Daily cash reconciliation per rep", "No re-keying at the back office"] },
      ],
      outcomeTitle: "What gets better",
      outcomes: ["Cash collected faster", "Less bad debt and aging", "Books that match the field"],
      intro2: "Beyond cash and transfer, take payment by QR — PromptPay and Thai QR Payment — connected to Thai banks' APIs, so the amount is confirmed automatically, in real time. Your rep sees \"paid\" the moment the money lands, with nothing to check by hand. Already use a payment gateway? Connect it too — Thai or international.",
      faq: [
        { q: "Does the QR include the exact amount?", a: "Yes. The QR is generated for the exact amount of the sale, so the customer just scans and pays — no need to type the amount." },
        { q: "Which QR payments do you support?", a: "PromptPay and Thai QR Payment, connected to Thai banks' APIs so the amount is confirmed automatically, in real time." },
        { q: "Can payments confirm automatically?", a: "Yes. When a customer pays by QR, the bank API confirms the amount and the order is marked paid on the spot — no manual checking or waiting." },
        { q: "Which payment gateways can you connect?", a: "Both Thai and international gateways — for example Beam, Omise, 2C2P and TrueMoney in Thailand, and Stripe and PayPal abroad — with more on request." },
      ],
    },
    th: {
      eyebrow: "การชำระเงิน",
      title: "เก็บเงินได้ทันทีหน้างาน",
      sub: "รับเงินสด โอน หรือ QR ที่ร้านได้เลย พร้อมคุมเครดิตและบิลค้างให้อยู่หมัด",
      intro: "ปิดวงจรตั้งแต่หน้าร้าน รับเงิน ออกใบเสร็จหรือใบกำกับภาษี เงินไม่ตามหลังการขาย",
      introNote: ["QR สร้างตามยอด ไม่ต้องพิมจำนวน", "ยืนยันเงินเข้าอัตโนมัติแบบเรียลไทม์", "รองรับ PromptPay ทุกธนาคารในไทย"],
      blocks: [
        { h: "รับเงินได้ทุกแบบ ทุกที่", body: "เงินสด โอน หรือ QR เก็บผ่านมือถือที่หน้าร้าน", points: ["เงินสด โอน และ PromptPay QR", "ชำระบางส่วนและมัดจำ", "ออกใบเสร็จ/ใบกำกับภาษีหน้างาน"] },
        { h: "ยืนยันยอดแบบเรียลไทม์", body: "QR PromptPay และ Thai QR Payment เชื่อม API กับธนาคารในไทย ออเดอร์ที่จ่ายแล้วจึงยืนยันตัวเองทันทีที่เงินเข้า", points: ["QR สร้างตามยอด ไม่ต้องพิมจำนวน", "PromptPay และ Thai QR Payment", "สถานะ \"ชำระแล้ว\" เรียลไทม์จากธนาคาร"] },
        { h: "เชื่อม Payment Gateway", body: "ต่อกับเกตเวย์ที่คุณใช้อยู่ ทั้งในไทยและต่างประเทศ เพื่อรับบัตรและการชำระออนไลน์", points: ["เกตเวย์ในไทย (เช่น Beam, Omise, 2C2P, TrueMoney)", "เกตเวย์ต่างประเทศ (เช่น Stripe, PayPal)", "บัตร วอลเล็ต และชำระออนไลน์"] },
        { h: "เครดิตและการตามเก็บอยู่ในมือ", body: "รู้ว่าใครค้างเท่าไหร่ และตามก่อนยอดจะค้างนาน", points: ["ยอดค้างรายลูกค้า", "ดูอายุหนี้และยอดเกินกำหนด", "บันทึกการรับชำระตัดกับใบแจ้งหนี้"] },
        { h: "เงินที่กระทบยอดเองได้", body: "ทุกการชำระผูกกับออเดอร์ และซิงค์เข้าออฟฟิศทันที", points: ["การชำระผูกกับออเดอร์และลูกค้า", "กระทบยอดเงินสดรายวันรายคน", "ไม่ต้องคีย์ซ้ำที่หลังบ้าน"] },
      ],
      outcomeTitle: "ผลลัพธ์ที่ดีขึ้น",
      outcomes: ["เก็บเงินได้เร็วขึ้น", "หนี้เสีย/ค้างนานน้อยลง", "บัญชีตรงกับหน้างาน"],
      intro2: "นอกจากเงินสดและโอน ยังรับชำระด้วย QR ได้ทั้ง PromptPay และ Thai QR Payment ที่เชื่อม API กับธนาคารในไทย ยอดจึงยืนยันอัตโนมัติแบบเรียลไทม์ พนักงานเห็นสถานะ \"ชำระแล้ว\" ทันทีที่เงินเข้า โดยไม่ต้องเช็คเอง และหากคุณใช้ Payment Gateway อยู่แล้ว ก็เชื่อมต่อได้ ทั้งในไทยและต่างประเทศ",
      faq: [
        { q: "QR เป็นยอดตามที่ขายเลยไหม?", a: "ใช่ QR สร้างขึ้นตามยอดขายนั้นพอดี ลูกค้าแค่สแกนแล้วจ่ายได้เลย ไม่ต้องพิมจำนวนเอง" },
        { q: "รองรับ QR แบบไหนบ้าง?", a: "รองรับ PromptPay และ Thai QR Payment ที่เชื่อม API กับธนาคารในไทย ยอดจึงยืนยันอัตโนมัติแบบเรียลไทม์" },
        { q: "ยืนยันยอดให้อัตโนมัติได้ไหม?", a: "ได้ เมื่อลูกค้าจ่ายผ่าน QR ระบบจะรับการยืนยันยอดจาก API ธนาคาร แล้วตัดออเดอร์เป็น \"ชำระแล้ว\" ทันที ไม่ต้องเช็คเอง" },
        { q: "เชื่อม Payment Gateway อะไรได้บ้าง?", a: "ได้ทั้งในไทยและต่างประเทศ เช่น Beam, Omise, 2C2P, TrueMoney ในไทย และ Stripe, PayPal ต่างประเทศ รวมถึงรายอื่นตามต้องการ" },
      ],
    },
  },
  delivery: {
    mock: "delivery",
    mock2: "pod",
    en: {
      eyebrow: "Delivery",
      title: "Deliveries you can see end to end",
      sub: "Plan routes, track vehicles and the status of every drop on the map, with proof of delivery.",
      intro: "From the warehouse door to the shop's shelf — plan the run, watch it happen, and prove it was delivered.",
      introNote: ["Capture the customer's signature on the device — no paper", "Photo + signature proof on every drop", "Deliver in invoice order, route still optimised"],
      blocks: [
        { h: "Plan the run in minutes", body: "Turn the day's orders into efficient delivery routes.", points: ["Auto-route to save time and fuel", "Assign drops to vehicles and drivers", "Re-sequence on the fly"] },
        { h: "Deliver in invoice order", body: "Sequence the run by invoice or customer so drops go out in the right order — drivers and shops always know what's next.", points: ["Order drops by invoice or customer", "Each delivery matched to its invoice", "Reorder on the fly when plans change"] },
        { h: "Track every drop live", body: "See where each vehicle is and the status of every stop on the map.", points: ["Live vehicle locations", "Per-drop status: en route → delivered", "Accurate ETAs for customers"] },
        { h: "Proof on the device", body: "Capture confirmation at each drop so disputes don't drag on.", points: ["Customer signs on the device, plus a photo", "Delivered versus returned items", "Proof linked to the invoice, time-stamped"] },
      ],
      outcomeTitle: "What gets better",
      outcomes: ["On-time deliveries customers rely on", "Less fuel and fewer wasted trips", "Disputes settled with proof"],
      intro2: "At each stop the driver checks off what's delivered, snaps a photo and captures the customer's signature right on the phone — the proof is linked to the invoice and synced the moment it's done.",
      faq: [
        { q: "How is a delivery proven?", a: "The driver captures the customer's signature on the device and can attach a photo at each drop — both are linked to the invoice and time-stamped." },
        { q: "Can we deliver in a specific order?", a: "Yes. Sequence the run by invoice or customer so drops go out in the right order, while the route is still optimised for distance." },
        { q: "Does proof of delivery work offline?", a: "Yes. Signatures, photos and delivery status are captured offline and sync automatically once the device is back online." },
      ],
    },
    th: {
      eyebrow: "การจัดส่ง",
      title: "จัดส่งที่มองเห็นครบ ตั้งแต่ต้นจนจบ",
      sub: "วางแผนเส้นทาง ติดตามรถและสถานะแต่ละจุดบนแผนที่ พร้อมหลักฐานการส่ง",
      intro: "ตั้งแต่ประตูคลังจนถึงชั้นวางในร้าน — วางแผนรอบส่ง ดูมันเกิดขึ้นจริง และพิสูจน์ได้ว่าส่งแล้ว",
      introNote: ["ให้ลูกค้าเซ็นรับบนเครื่องได้เลย ไม่ต้องใช้กระดาษ", "หลักฐานครบทุกจุด — ลายเซ็น + รูปถ่าย", "จัดส่งเรียงตามใบกำกับ จัดเส้นทางให้คุ้มด้วย"],
      blocks: [
        { h: "วางรอบส่งได้ในไม่กี่นาที", body: "เปลี่ยนออเดอร์ของวันให้เป็นเส้นทางส่งที่คุ้ม", points: ["จัดเส้นทางอัตโนมัติ ประหยัดเวลาและน้ำมัน", "มอบหมายจุดส่งให้รถและคนขับ", "ปรับลำดับได้ทันที"] },
        { h: "จัดส่งเรียงตามใบกำกับ", body: "เรียงรอบส่งตามใบกำกับหรือลูกค้า ให้ส่งตามลำดับที่ถูกต้อง คนขับและร้านรู้ว่าคิวต่อไปคืออะไร", points: ["เรียงจุดส่งตามใบกำกับหรือลูกค้า", "จับคู่การส่งกับใบกำกับ", "ปรับลำดับได้ทันทีเมื่อแผนเปลี่ยน"] },
        { h: "ติดตามทุกจุดส่งแบบเรียลไทม์", body: "เห็นว่ารถแต่ละคันอยู่ไหน และสถานะแต่ละจุดบนแผนที่", points: ["ตำแหน่งรถแบบเรียลไทม์", "สถานะรายจุด: กำลังส่ง → ส่งแล้ว", "บอกเวลาส่งที่แม่นยำให้ลูกค้า"] },
        { h: "หลักฐานบนเครื่อง", body: "เก็บการยืนยันที่แต่ละจุด ข้อโต้แย้งจะได้ไม่ยืดเยื้อ", points: ["ลูกค้าเซ็นรับบนเครื่อง พร้อมแนบรูปถ่าย", "ของที่ส่งเทียบกับของที่ตีกลับ", "หลักฐานผูกกับใบกำกับ มีเวลากำกับ"] },
      ],
      outcomeTitle: "ผลลัพธ์ที่ดีขึ้น",
      outcomes: ["ส่งตรงเวลา ลูกค้าวางใจ", "ลดน้ำมันและเที่ยวเปล่า", "เคลียร์ข้อโต้แย้งด้วยหลักฐาน"],
      intro2: "ทุกจุดส่ง คนขับเช็ครายการที่ส่ง ถ่ายรูป และให้ลูกค้าเซ็นรับบนมือถือ — หลักฐานผูกกับใบกำกับและซิงค์ทันทีที่เสร็จ",
      faq: [
        { q: "พิสูจน์การส่งยังไง?", a: "คนขับให้ลูกค้าเซ็นรับบนเครื่อง และแนบรูปถ่ายได้ทุกจุดส่ง ทั้งหมดผูกกับใบกำกับและมีเวลากำกับ" },
        { q: "ส่งเรียงตามลำดับที่ต้องการได้ไหม?", a: "ได้ เรียงรอบส่งตามใบกำกับหรือลูกค้าให้ส่งตามลำดับที่ถูกต้อง พร้อมจัดเส้นทางให้คุ้มระยะ" },
        { q: "หลักฐานการส่งใช้งานออฟไลน์ได้ไหม?", a: "ได้ ลายเซ็น รูปถ่าย และสถานะการส่งบันทึกแบบออฟไลน์ แล้วซิงค์อัตโนมัติเมื่อกลับมาออนไลน์" },
      ],
    },
  },
  reports: {
    mock: "reports",
    en: {
      eyebrow: "Reports",
      title: "See the whole business, live",
      sub: "Sales, targets and field activity in real time — so you can act today, not at month-end.",
      intro: "Stop waiting for month-end spreadsheets. Watch sales build through the day and spot what needs attention now.",
      blocks: [
        { h: "Today's numbers, at a glance", body: "A live dashboard of sales against target, by the hour.", points: ["Sales today versus target", "By branch, rep or area", "Hour-by-hour trend"] },
        { h: "Dig into what's driving it", body: "Break the numbers down to find your best products and your gaps.", points: ["Top products and customers", "Coverage and visit completion", "Compare periods side by side"] },
        { h: "Your data, when you need it", body: "Pull the figures into your own tools whenever you want.", points: ["Export to spreadsheet anytime", "Scheduled summaries", "Share read-only views"] },
      ],
      outcomeTitle: "What gets better",
      outcomes: ["Decisions made today, not next month", "A clear view of what's working", "No more manual monthly Excel"],
    },
    th: {
      eyebrow: "รายงาน",
      title: "เห็นภาพรวมธุรกิจ แบบเรียลไทม์",
      sub: "ยอดขาย เป้า และงานภาคสนามแบบเรียลไทม์ ตัดสินใจได้วันนี้ ไม่ต้องรอสิ้นเดือน",
      intro: "เลิกรอ Excel สิ้นเดือน ดูยอดขายก่อตัวระหว่างวัน และจับสิ่งที่ต้องดูแลได้ทันที",
      blocks: [
        { h: "ตัวเลขวันนี้ในพริบตา", body: "แดชบอร์ดสดของยอดขายเทียบเป้า รายชั่วโมง", points: ["ยอดขายวันนี้เทียบเป้า", "แยกตามสาขา เซลส์ หรือพื้นที่", "เทรนด์รายชั่วโมง"] },
        { h: "เจาะดูว่าอะไรขับเคลื่อนยอด", body: "ลงรายละเอียดเพื่อหาสินค้าเด่นและจุดที่หลุด", points: ["สินค้าและลูกค้าขายดี", "ความครอบคลุมและการเยี่ยมครบแผน", "เทียบช่วงเวลาแบบเคียงข้าง"] },
        { h: "ข้อมูลพร้อมใช้เมื่อต้องการ", body: "ดึงตัวเลขเข้าเครื่องมือของคุณได้ทุกเมื่อ", points: ["ส่งออกเป็นสเปรดชีตได้ทุกเมื่อ", "สรุปอัตโนมัติตามรอบ", "แชร์มุมมองแบบอ่านอย่างเดียว"] },
      ],
      outcomeTitle: "ผลลัพธ์ที่ดีขึ้น",
      outcomes: ["ตัดสินใจวันนี้ ไม่ใช่เดือนหน้า", "เห็นชัดว่าอะไรเวิร์ก", "ไม่ต้องทำ Excel เองทุกเดือน"],
    },
  },
  mobile: {
    mock: "orderUnits",
    en: {
      eyebrow: "Mobile",
      title: "The whole job, on one phone",
      sub: "Take orders, collect payment and follow your route from any phone — synced to the office automatically.",
      intro: "Your reps carry the whole operation in their pocket — and it keeps working even where the signal doesn't.",
      introNote: ["Order in multiple units — piece, pack, dozen, case", "Apply a promotion in one tap", "Works offline, syncs when back online"],
      blocks: [
        { h: "Everything in the field", body: "The full sales flow runs on a single phone, no laptop needed.", points: ["Take orders and collect payment", "Customer history and stock on screen", "Routes, check-ins and reports"] },
        { h: "Works offline", body: "Keep selling without signal; data syncs the moment you're back online.", points: ["Create orders offline", "Auto-sync when reconnected", "Nothing lost in dead zones"] },
        { h: "Built for any device", body: "Runs on the phones your team already carries.", points: ["iOS and Android", "Fast and simple to learn", "Central system stays in sync"] },
      ],
      outcomeTitle: "What gets better",
      outcomes: ["A field team that's fully equipped", "No downtime in low-signal areas", "Less hardware, less hassle"],
      how: {
        h: "A day in the field",
        steps: [
          "Open today's route and head to the first shop.",
          "Check in — see the shop's history, credit and stock.",
          "Key the order: units, promotions and stock all handled.",
          "Collect payment and issue a receipt on the spot.",
          "Everything syncs to the office automatically.",
        ],
      },
      faq: [
        { q: "Does it work without internet?", a: "Yes. Reps can create orders and collect details offline, and everything syncs automatically the moment the phone is back online." },
        { q: "Which devices does it run on?", a: "Both iOS and Android — it runs on the phones your team already carries, with no special hardware." },
        { q: "Is it hard for reps to learn?", a: "No. The flow is built for speed in the field, so most reps are comfortable after a visit or two." },
      ],
    },
    th: {
      eyebrow: "มือถือ",
      title: "ทำงานครบ จบในมือถือเครื่องเดียว",
      sub: "รับออเดอร์ เก็บเงิน และตามเส้นทางได้จากมือถือทุกเครื่อง ซิงค์เข้าออฟฟิศอัตโนมัติ",
      intro: "เซลส์พกทั้งระบบงานไว้ในกระเป๋า และยังทำงานต่อได้แม้ในที่ที่ไม่มีสัญญาณ",
      introNote: ["คีย์ออเดอร์ได้หลายหน่วย — ชิ้น แพ็ค โหล ลัง", "เลือกโปรโมชั่นได้ในแตะเดียว", "ใช้งานออฟไลน์ได้ ซิงค์เมื่อกลับมาออนไลน์"],
      blocks: [
        { h: "ครบทุกอย่างที่หน้างาน", body: "โฟลว์งานขายทั้งหมดทำบนมือถือเครื่องเดียว ไม่ต้องใช้โน้ตบุ๊ก", points: ["รับออเดอร์และเก็บเงิน", "ประวัติลูกค้าและสต๊อกบนจอ", "เส้นทาง เช็คอิน และรายงาน"] },
        { h: "ใช้งานออฟไลน์ได้", body: "ขายต่อได้แม้ไม่มีสัญญาณ ข้อมูลซิงค์ทันทีที่กลับมาออนไลน์", points: ["สร้างออเดอร์ออฟไลน์", "ซิงค์อัตโนมัติเมื่อเชื่อมต่อ", "ไม่มีตกหล่นในจุดอับสัญญาณ"] },
        { h: "รองรับทุกเครื่อง", body: "ใช้ได้บนมือถือที่ทีมมีอยู่แล้ว", points: ["iOS และ Android", "เร็วและเรียนรู้ง่าย", "ระบบกลางซิงค์ตรงกันเสมอ"] },
      ],
      outcomeTitle: "ผลลัพธ์ที่ดีขึ้น",
      outcomes: ["ทีมภาคสนามพร้อมเต็มร้อย", "ไม่สะดุดในพื้นที่สัญญาณอ่อน", "อุปกรณ์น้อยลง ยุ่งยากน้อยลง"],
      how: {
        h: "หนึ่งวันในสนาม",
        steps: [
          "เปิดเส้นทางของวันแล้วออกไปที่ร้านแรก",
          "เช็คอิน — เห็นประวัติ เครดิต และสต๊อกของร้าน",
          "คีย์ออเดอร์: จัดการหน่วย โปรโมชั่น และสต๊อกให้ครบ",
          "เก็บเงินและออกใบเสร็จได้ทันทีหน้างาน",
          "ทุกอย่างซิงค์เข้าออฟฟิศอัตโนมัติ",
        ],
      },
      faq: [
        { q: "ใช้งานตอนไม่มีเน็ตได้ไหม?", a: "ได้ เซลส์สร้างออเดอร์และบันทึกข้อมูลแบบออฟไลน์ได้ แล้วซิงค์อัตโนมัติทันทีที่มือถือกลับมาออนไลน์" },
        { q: "ใช้ได้กับเครื่องอะไรบ้าง?", a: "ทั้ง iOS และ Android ใช้บนมือถือที่ทีมมีอยู่แล้ว ไม่ต้องใช้อุปกรณ์พิเศษ" },
        { q: "เซลส์เรียนรู้ยากไหม?", a: "ไม่ยาก โฟลว์ออกแบบมาให้เร็วในสนาม ส่วนใหญ่ใช้คล่องหลังออกร้านแค่ครั้งสองครั้ง" },
      ],
    },
  },
};

const UI = {
  en: { back: "All features", related: "Explore more", faqTitle: "Questions & answers", cta1: "Book a demo", cta2: "Contact us", ctaTitle: "See it on your own data", ctaSub: "Book a quick demo and we'll show it with your own products and routes." },
  th: { back: "ฟีเจอร์ทั้งหมด", related: "ดูเพิ่มเติม", faqTitle: "คำถามที่พบบ่อย", cta1: "นัดหมายเดโม", cta2: "ติดต่อเรา", ctaTitle: "ลองดูกับข้อมูลของคุณเอง", ctaSub: "นัดเดโมสั้นๆ แล้วเราจะสาธิตด้วยสินค้าและเส้นทางจริงของคุณ" },
} as const;

export function generateStaticParams() {
  return Object.keys(DETAILS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = DETAILS[params.slug];
  if (!entry) return {};
  const t = entry[resolveLang()];
  return { title: t.title, description: t.sub };
}

export default function FeatureDetailPage({ params }: { params: { slug: string } }) {
  const entry = DETAILS[params.slug];
  if (!entry) notFound();

  const lang = resolveLang();
  const t = entry[lang];
  const ui = UI[lang];
  const Mock = FEATURE_MOCKS[entry.mock] as (p: { lang?: "en" | "th" }) => JSX.Element;
  const Mock2 = entry.mock2 ? (FEATURE_MOCKS[entry.mock2] as (p: { lang?: "en" | "th" }) => JSX.Element) : null;
  const others = Object.keys(DETAILS).filter((s) => s !== params.slug);

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
          <Link href={localized("/features", lang)} className="mb-5 inline-flex items-center gap-1.5 text-sm text-white/70 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> {ui.back}
          </Link>
          <span className="mx-auto mb-4 block w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium">{t.eyebrow}</span>
          <h1 className="text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-[2.75rem]">{t.title}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">{t.sub}</p>
        </div>
      </section>

      {/* Overview + mock */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">{t.intro}</p>
            {t.introNote && (
              <ul className="mt-6 space-y-2.5 rounded-xl border bg-muted/30 p-4">
                {t.introNote.map((n) => (
                  <li key={n} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>
                    {n}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef4fc] to-[#f8fafc] p-6 ring-1 ring-black/5 sm:p-10">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fc4ff]/30 blur-3xl" />
            <div className="relative"><Mock lang={lang} /></div>
          </div>
        </div>
      </section>

      {/* Second visual */}
      {Mock2 && t.intro2 && (
        <section className="border-t px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef4fc] to-[#f8fafc] p-6 ring-1 ring-black/5 sm:p-10 lg:order-1">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fc4ff]/30 blur-3xl" />
              <div className="relative"><Mock2 lang={lang} /></div>
            </div>
            <p className="order-1 text-lg leading-relaxed text-muted-foreground lg:order-2">{t.intro2}</p>
          </div>
        </section>
      )}

      {/* Detail blocks */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {t.blocks.map((b) => (
            <div key={b.h} className="rounded-2xl border bg-card p-6">
              <h3 className="font-semibold">{b.h}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{b.body}</p>
              <ul className="mt-4 space-y-2.5">
                {b.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.outcomeTitle}</h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {t.outcomes.map((o) => (
              <div key={o} className="flex items-center gap-2.5 rounded-xl border bg-card px-4 py-3 text-left text-sm">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>
                {o}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      {t.how && (
        <section className="bg-muted/30 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">{t.how.h}</h2>
            <ol className="space-y-5">
              {t.how.steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{i + 1}</span>
                  <p className="pt-1 leading-relaxed text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FAQ */}
      {t.faq && (
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">{ui.faqTitle}</h2>
            <div className="space-y-4">
              {t.faq.map((f) => (
                <div key={f.q} className="rounded-xl border bg-card p-5">
                  <h3 className="font-semibold">{f.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="border-t px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-muted-foreground">{ui.related}:</span>
          {others.map((s) => (
            <Link key={s} href={localized(`/features/${s}`, lang)} className="rounded-full border bg-card px-4 py-1.5 font-medium transition hover:bg-muted">{DETAILS[s][lang].title}</Link>
          ))}
          <Link href={localized("/features/multi-branch", lang)} className="rounded-full border bg-card px-4 py-1.5 font-medium transition hover:bg-muted">{lang === "th" ? "หลายสาขา & เครือข่าย" : "Multi-branch & network"}</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-20 text-center text-primary-foreground sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">{ui.ctaTitle}</h2>
          <p className="mt-4 text-primary-foreground/80">{ui.ctaSub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={localized("/#contact", lang)}><span className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/90">{ui.cta1} <ArrowRight className="h-4 w-4" /></span></a>
            <a href={localized("/#contact", lang)}><span className="inline-flex items-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">{ui.cta2}</span></a>
          </div>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
