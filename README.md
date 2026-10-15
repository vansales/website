<div align="center">

# Vansales

### All-in-one sales & distribution platform
**Built for field sales and distribution teams across Thailand and Southeast Asia.**

[🌐 vansales.ai](https://vansales.ai) · [🔐 Open the app](https://manager.vansales.asia) · [✉️ Talk to us](https://vansales.ai/#contact)

</div>

---

## What is Vansales?

Vansales helps brands, distributors, and sales teams run their **entire field operation in one system** — from taking an order at the counter to delivering at the customer's door. Orders, customers, stock, routes, payments, delivery, and reports all live in one place, in real time.

The result: **faster sales, fewer errors, and full visibility** — from the very first sales truck to a network of hundreds of thousands of retail outlets.

> Great products win shelves. Great distribution wins markets.

## What it does

| | |
|---|---|
| 🧾 **Orders** | Take and track orders end to end |
| 👥 **Customers** | Purchase history, credit, and contacts for every shop |
| 📦 **Stock** | Real-time across warehouses, branches, and sales vans |
| 🗺️ **Routes & field** | Plan routes, track the team, check in at every shop |
| 💵 **Payments** | Collect cash, transfer, or QR on the spot |
| 🚚 **Delivery** | Plan deliveries with proof of delivery |
| 📊 **Reports** | Sales, targets, and the whole business — live |
| 📱 **Mobile** | Run it all from a single phone in the field |
| 🏢 **Multi-branch** | Scale across many branches and distributors |

## Industries we serve

**FMCG** · **Food & Beverage** · **Pharmaceuticals & Healthcare** · **Retail & Wholesale** · **Brand owners & manufacturers** · **Automotive parts**

---

## เกี่ยวกับ Vansales

**Vansales** คือแพลตฟอร์มบริหารงานขายและกระจายสินค้าครบวงจร สำหรับทีมขายภาคสนามและตัวแทนจำหน่ายทั่วไทยและเอเชียตะวันออกเฉียงใต้

ตั้งแต่เปิดบิลหน้าร้าน ไปจนถึงส่งของถึงมือลูกค้า — ออเดอร์ ลูกค้า สต๊อก เส้นทาง การเก็บเงิน การจัดส่ง และรายงาน อยู่ในระบบเดียว แบบเรียลไทม์ ช่วยให้ **ขายได้เร็วขึ้น แม่นยำขึ้น และมองเห็นทุกอย่างชัดเจน** ตั้งแต่รถขายคันแรกไปจนถึงเครือข่ายร้านค้านับแสนแห่ง

🌐 เว็บไซต์: [vansales.ai](https://vansales.ai) · 🔐 เข้าสู่ระบบ: [manager.vansales.asia](https://manager.vansales.asia) · ✉️ ติดต่อเรา: [vansales.ai/#contact](https://vansales.ai/#contact)

---

<details>
<summary><b>About this repository</b></summary>

This repository holds the source of the Vansales **marketing website** ([vansales.ai](https://vansales.ai)) — a bilingual (EN/TH) [Next.js](https://nextjs.org) 14 app built with the Vansales design system.

```sh
pnpm install
pnpm dev        # http://localhost:3000
```

The design system ships as a vendored package under `vendor/`. The contact form
posts to Web3Forms — set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local`.

**Articles in the mobile app.** Add `app: featured` or `app: news` to an
article's frontmatter (in both `en.md` and `th.md`) to show it in the app;
leave it out to keep the article web-only. The app reads:

- `GET /api/articles?lang=th` → `{ lang, featured: [...], news: [...] }`, newest first
- `GET /api/articles/<slug>?lang=th` → the same card fields plus `content` (Markdown, absolute URLs); 404 if not in the app

Each card carries `url`, the article's web page, for an "open on web" link.

</details>

<div align="center"><sub>© Vansales</sub></div>
