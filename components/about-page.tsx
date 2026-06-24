"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang, type Lang } from "@/lib/use-lang";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopNav } from "@/components/desktop-nav";
import { navItems } from "@/lib/nav";
import { SiteFooter } from "@/components/site-footer";
import {
  ArrowRight,
  Store,
  Building2,
  Award,
  Globe,
  Smartphone,
  Truck,
  ShieldCheck,
  Eye,
  TrendingUp,
  Cpu,
  Route,
  Quote,
} from "lucide-react";
import {
  Logo,
  Button,
  Badge,
  FeatureCard,
  CTASection,
  cn,
} from "@vansales/design-system";

const distShop = "/marketing/dist-shop.jpg";
const founders = "/marketing/founders.jpg";
const today = "/marketing/vansales-today.jpg";


const STR = {
  en: {
    announce: "🎉 New: multi-branch delivery and real-time route maps",
    learnMore: "Learn more",
    signIn: "Sign in",
    contactSales: "Contact us",

    heroBadge: "About Vansales",
    heroTitle: "Great products win shelves.\nGreat distribution wins markets.",
    heroSub:
      "We exist to turn distribution from an art that runs on experience into a system you can measure, control, and scale — from the very first sales truck to a network of hundreds of thousands of retail outlets.",
    ctaPrimary: "Get started",
    ctaSecondary: "Talk to an expert",

    stats: [
      { icon: <Award />, v: "20+ yrs", l: "Of distribution expertise across Asia" },
      { icon: <Globe />, v: "4 markets", l: "Thailand · Cambodia · Vietnam · Laos" },
      { icon: <Building2 />, v: "Nationwide", l: "Warehouse & distribution network" },
    ],

    artEyebrow: "The art of distribution",
    artTitle: "Reaching everywhere, while staying in control",
    artParas: [
      "In the world of consumer goods (FMCG), success isn't about who makes the best product. It's about who can get that product in front of the consumer the fastest, the widest, and the most consistently.",
      "Picture a single bottle of water. Before it reaches the corner shop tucked down a back alley, it passes through warehouses, sales trucks, invoicing, cash collection, and the daily work of nurturing relationships with hundreds of thousands of shop owners. Every step is a point where revenue can leak away — or grow.",
      "Today's winners turn every move in the field into data — which products sell best in which stores, which rep should visit which shop today, and where the cash is sitting. Great distribution isn't just logistics; it's visibility, control, and speed.",
    ],
    artStats: [
      { v: "400,000+", l: "Mom-and-pop shops in Thailand" },
      { v: "24,000", l: "Convenience stores" },
    ],

    originEyebrow: "Our origin",
    originTitle: "Where did it all begin?",
    originLead:
      "Every great system begins with a problem that someone sees more clearly than everyone else. Vansales began with two of them.",
    originCards: [
      {
        icon: <Truck />,
        t: "20 years in the field",
        d: "One had spent over 20 years in FMCG distribution across Asia. He had seen where distribution thrives and where it leaks — orders written down wrong, stock that never matches, cash always a step behind, and data lost to paper, day after day.",
      },
      {
        icon: <Cpu />,
        t: "A technologist's eye",
        d: "The other saw the world through technology. He knew the chaos wasn't something to endure — it was a problem to solve. Every bit of confusion in the field could become data you can see, measure, and manage.",
      },
    ],
    originClose:
      "When deep, ground-level business know-how met technology that actually works, Vansales was born — not to build just another piece of software, but to give business owners a tool to adapt and compete in a world that moves faster every day.",

    todayEyebrow: "Vansales today",
    todayTitle: "The infrastructure behind distribution",
    todayParas: [
      "Today, Vansales is no longer just an app on a sales truck. It has become the infrastructure working quietly behind the distribution of countless businesses across the country — behind every order recorded, every stock count logged, and every store that gets its goods on time.",
      "That trust wasn't earned in a day. It was built by a system that simply works, day after day, in a field that leaves no room for error.",
    ],
    commitments: [
      { icon: <ShieldCheck />, t: "Reliability", d: "A system that holds steady when sales have to keep moving — however many trucks are on the road or stores to serve." },
      { icon: <Eye />, t: "Transparency", d: "Every number is a true picture of the field, not a guess. Owners can see and verify every step." },
      { icon: <TrendingUp />, t: "Growing together", d: "As our customers grow, our system scales right alongside them. We're a partner, not just a vendor." },
    ],

    offerEyebrow: "What we offer",
    offerTitle: "One platform, end to end",
    offerSub: "A suite of solutions that streamline sales and distribution — from the first order to the final delivery.",
    offer: [
      { icon: <Smartphone />, t: "Vansales App", d: "A mobile app that lets sales reps manage orders, inventory, and customers on the go.", tone: "brand" as const },
      { icon: <Store />, t: "Vansales for Shop", d: "Connects retail and wholesale buyers with suppliers — easy ordering and real-time stock." },
      { icon: <Route />, t: "Distribution Services", d: "End-to-end logistics, with warehouses and distribution centers placed strategically nationwide." },
    ],

    ctaTitle: "Let's grow your business together",
    ctaSub: "See how Vansales can streamline your sales and distribution.",

    footerDesc: "All-in-one sales & distribution management, built for teams across Thailand and Southeast Asia.",
    footerCols: [
      { title: "Product", links: ["Vansales App", "Vansales for Shop", "Distribution Services"] },
      { title: "Company", links: ["About", "Careers", "Contact"] },
      { title: "Resources", links: ["Help center", "Blog", "Privacy"] },
    ],
    footerBottom: "© 2026 Vansales. All rights reserved.",
  },

  th: {
    announce: "🎉 ใหม่: จัดส่งหลายสาขา และแผนที่เส้นทางแบบเรียลไทม์",
    learnMore: "ดูเพิ่มเติม",
    signIn: "เข้าสู่ระบบ",
    contactSales: "ติดต่อเรา",

    heroBadge: "เกี่ยวกับ Vansales",
    heroTitle: "Great products win shelves.\nGreat distribution wins markets.",
    heroSub:
      "เราเกิดขึ้นเพื่อเปลี่ยนการกระจายสินค้า จากศิลปะที่ต้องอาศัยประสบการณ์ ให้กลายเป็นระบบที่วัดผลได้ ควบคุมได้ และขยายได้ — ตั้งแต่รถเซลส์คันแรก ไปจนถึงเครือข่ายร้านค้านับแสนแห่ง",
    ctaPrimary: "เริ่มต้นใช้งาน",
    ctaSecondary: "คุยกับผู้เชี่ยวชาญ",

    stats: [
      { icon: <Award />, v: "20+ ปี", l: "ประสบการณ์กระจายสินค้าทั่วเอเชีย" },
      { icon: <Globe />, v: "4 ประเทศ", l: "ไทย · กัมพูชา · เวียดนาม · ลาว" },
      { icon: <Building2 />, v: "ทั่วประเทศ", l: "เครือข่ายคลังและศูนย์กระจายสินค้า" },
    ],

    artEyebrow: "The art of distribution",
    artTitle: "Reaching everywhere, while staying in control",
    artParas: [
      "ในโลกของสินค้าอุปโภคบริโภค (FMCG) ความสำเร็จไม่ได้วัดกันที่ว่าใครมีสินค้าดีที่สุด แต่วัดกันที่ว่าใครพาสินค้าไปอยู่ “ตรงหน้า” ผู้บริโภคได้เร็วที่สุด ครอบคลุมที่สุด และสม่ำเสมอที่สุด",
      "ลองนึกภาพขวดน้ำดื่มหนึ่งขวด กว่าจะถึงร้านโชห่วยเล็ก ๆ ในตรอกซอกซอย ต้องผ่านทั้งคลังสินค้า รถเซลส์ การวางบิล การเก็บเงิน และการดูแลความสัมพันธ์กับเจ้าของร้านอีกนับแสนราย ทุกขั้นตอนล้วนเป็นจุดที่ยอดขายอาจรั่วไหล หรือเติบโตได้",
      "ผู้ชนะในวันนี้คือผู้ที่เปลี่ยนทุกความเคลื่อนไหวในสนามให้กลายเป็นข้อมูล — รู้ว่าสินค้าไหนขายดีที่ร้านไหน เซลส์คนไหนควรไปร้านใดในวันนี้ และเงินสดค้างอยู่ตรงไหน การกระจายที่ดีจึงไม่ใช่แค่โลจิสติกส์ แต่คือการมองเห็น การควบคุม และความเร็ว",
    ],
    artStats: [
      { v: "400,000+", l: "ร้านโชห่วยทั่วประเทศไทย" },
      { v: "24,000", l: "ร้านสะดวกซื้อ" },
    ],

    originEyebrow: "จุดเริ่มต้น",
    originTitle: "Where did it all begin?",
    originLead:
      "ทุกระบบที่ดี ล้วนเริ่มต้นจากปัญหาที่ใครบางคนมองเห็นได้ชัดกว่าคนอื่น — และ Vansales เริ่มต้นจากคนสองคน",
    originCards: [
      {
        icon: <Truck />,
        t: "20 ปีในสนามจริง",
        d: "คนหนึ่งคลุกคลีอยู่ในสนามจริงของการกระจายสินค้า FMCG มากว่า 20 ปีทั่วเอเชีย เห็นทั้งจุดที่ธุรกิจรุ่งเรืองและจุดที่รั่วไหล — ออเดอร์ที่จดผิด สต๊อกที่นับไม่ตรง เงินสดที่ตามไม่ทัน และข้อมูลที่หล่นหายไปกับกระดาษวันแล้ววันเล่า",
      },
      {
        icon: <Cpu />,
        t: "สายตาของเทคโนโลยี",
        d: "อีกคนมองโลกผ่านเทคโนโลยี เขาเห็นว่าความวุ่นวายเหล่านั้นไม่ใช่เรื่องที่ต้องทน แต่เป็นโจทย์ที่แก้ได้ ทุกความสับสนในสนามล้วนเปลี่ยนเป็นข้อมูลที่มองเห็น วัดผล และบริหารจัดการได้",
      },
    ],
    originClose:
      "เมื่อความเข้าใจธุรกิจที่ลึกถึงราก มาบรรจบกับเทคโนโลยีที่ใช้ได้จริง — Vansales จึงถือกำเนิดขึ้น ไม่ใช่เพื่อสร้างซอฟต์แวร์เพิ่มอีกหนึ่งตัว แต่เพื่อมอบเครื่องมือที่ช่วยให้เจ้าของธุรกิจปรับตัวและแข่งขันได้ ในโลกที่ตลาดเปลี่ยนเร็วขึ้นทุกวัน",

    todayEyebrow: "Vansales วันนี้",
    todayTitle: "โครงสร้างพื้นฐานเบื้องหลังการกระจายสินค้า",
    todayParas: [
      "วันนี้ Vansales ไม่ได้เป็นเพียงแอปบนรถเซลส์อีกต่อไป แต่กลายเป็นโครงสร้างพื้นฐานที่ทำงานเงียบ ๆ อยู่เบื้องหลังการกระจายสินค้าของธุรกิจจำนวนมากทั่วประเทศ — เบื้องหลังทุกออเดอร์ที่ถูกบันทึก ทุกสต๊อกที่ถูกนับ และทุกร้านที่ได้รับสินค้าตรงเวลา",
      "ความไว้วางใจนี้ไม่ได้เกิดขึ้นในวันเดียว แต่ค่อย ๆ ก่อตัวจากระบบที่ทำงานได้จริง วันแล้ววันเล่า ในสนามที่ไม่มีที่ว่างให้ความผิดพลาด",
    ],
    commitments: [
      { icon: <ShieldCheck />, t: "ความน่าเชื่อถือ", d: "ระบบที่ทำงานเสถียรในวันที่ยอดขายต้องเดินหน้า ไม่ว่าจะมีรถเซลส์ออกวิ่งกี่คัน หรือต้องดูแลร้านค้ากี่แห่งก็ตาม" },
      { icon: <Eye />, t: "ความโปร่งใส", d: "ทุกตัวเลขบนระบบคือภาพจริงของสนาม ไม่ใช่การคาดเดา เจ้าของธุรกิจมองเห็นและตรวจสอบได้ทุกขั้นตอน" },
      { icon: <TrendingUp />, t: "เติบโตไปด้วยกัน", d: "เมื่อธุรกิจของลูกค้าเติบโต ระบบของเราก็พร้อมขยายตามไปด้วย เราเป็นพันธมิตร ไม่ใช่แค่ผู้ขายซอฟต์แวร์" },
    ],

    offerEyebrow: "บริการของเรา",
    offerTitle: "แพลตฟอร์มเดียว ครบทั้งกระบวนการ",
    offerSub: "ชุดโซลูชันที่ทำให้งานขายและกระจายสินค้าคล่องตัว — ตั้งแต่ออเดอร์แรกจนถึงการส่งจุดสุดท้าย",
    offer: [
      { icon: <Smartphone />, t: "Vansales App", d: "แอปมือถือสำหรับทีมขาย จัดการออเดอร์ สต๊อก และลูกค้าได้จากทุกที่", tone: "brand" as const },
      { icon: <Store />, t: "Vansales for Shop", d: "เชื่อมร้านค้าปลีก-ส่งเข้ากับซัพพลายเออร์ สั่งซื้อง่าย เห็นสต๊อกแบบเรียลไทม์" },
      { icon: <Route />, t: "บริการกระจายสินค้า", d: "โลจิสติกส์ครบวงจร พร้อมคลังและศูนย์กระจายสินค้าทั่วประเทศ รองรับการขยายได้" },
    ],

    ctaTitle: "มาเติบโตไปด้วยกัน",
    ctaSub: "มาดูกันว่า Vansales ช่วยให้งานขายและกระจายสินค้าของคุณคล่องตัวขึ้นได้อย่างไร",

    footerDesc: "ระบบจัดการงานขายและกระจายสินค้าครบวงจร สำหรับทีมทั่วไทยและเอเชียตะวันออกเฉียงใต้",
    footerCols: [
      { title: "ผลิตภัณฑ์", links: ["Vansales App", "Vansales for Shop", "บริการกระจายสินค้า"] },
      { title: "บริษัท", links: ["เกี่ยวกับเรา", "ร่วมงาน", "ติดต่อ"] },
      { title: "แหล่งข้อมูล", links: ["ศูนย์ช่วยเหลือ", "บทความ", "ความเป็นส่วนตัว"] },
    ],
    footerBottom: "© 2026 Vansales สงวนลิขสิทธิ์",
  },
} as const;

function LangToggle({ lang, setLang, onDark }: { lang: Lang; setLang: (l: Lang) => void; onDark?: boolean }) {
  return (
    <div className={cn("inline-flex rounded-full border p-0.5 text-xs", onDark ? "border-white/25" : "border-border")}>
      {(["en", "th"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            "rounded-full px-2.5 py-1 font-medium transition",
            lang === l
              ? onDark ? "bg-white text-primary" : "bg-primary text-primary-foreground"
              : onDark ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function SectionHead({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Badge variant="soft" className="mb-4 rounded-full px-3 py-1 text-xs">{eyebrow}</Badge>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-[2.5rem] sm:leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}

function CompanyPage({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useLang(initialLang);
  const t = STR[lang];
  const [ht1, ht2] = t.heroTitle.split("\n");

  return (
    <div className="bg-background text-foreground antialiased">
      <div className="bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground">
        {t.announce} · <Link href="/features/multi-branch" className="underline underline-offset-2">{t.learnMore}</Link>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/15 bg-[#1763ad]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="Vansales home" className="shrink-0">
            <Logo height={30} icon="square" color="#ffffff" />
          </Link>
          <DesktopNav items={navItems(lang)} />
          <div className="flex items-center gap-3">
            <LangToggle lang={lang} setLang={setLang} onDark />
            <a href={`https://manager.vansales.asia/auth/login?lang=${lang}`} target="_blank" rel="noopener noreferrer" className="hidden text-sm font-medium text-white/70 hover:text-white md:block">{t.signIn}</a>
            <a href="/#contact" className="hidden sm:block"><Button className="bg-white text-primary hover:bg-white/90">{t.contactSales}</Button></a>
            <MobileNav
              items={navItems(lang)}
              signIn={t.signIn}
              signInHref={`https://manager.vansales.asia/auth/login?lang=${lang}`}
              contactSales={t.contactSales}
              contactHref="/#contact"
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1765B3] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at top, #3f8ae0, #0f4f93 70%)" }} />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
          <Badge variant="soft" className="mb-5 rounded-full px-3 py-1 text-xs">{t.heroBadge}</Badge>
          <h1 className="text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-[2.75rem]">
            {ht1}<br />{ht2}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">{t.heroSub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/#contact"><Button size="lg" className="bg-white text-primary hover:bg-white/90">{t.ctaPrimary} <ArrowRight /></Button></a>
            <a href="/#contact"><Button size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">{t.ctaSecondary}</Button></a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b bg-card px-4 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-6 py-10 sm:grid-cols-3">
          {t.stats.map((s) => (
            <div key={s.v} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary [&>svg]:size-5">{s.icon}</span>
              <div>
                <div className="text-xl font-bold tracking-tight">{s.v}</div>
                <div className="text-sm text-muted-foreground">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Art of Distribution */}
      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <Badge variant="soft" className="mb-4 rounded-full px-3 py-1 text-xs">{t.artEyebrow}</Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.artTitle}</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              {t.artParas.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-[#8fc4ff]/30 blur-3xl" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <Image src={distShop} alt="Thai retail shop owner managing stock with Vansales" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 left-1/2 grid w-[88%] -translate-x-1/2 grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border shadow-xl">
              {t.artStats.map((s) => (
                <div key={s.l} className="bg-card px-4 py-4 text-center">
                  <div className="text-2xl font-bold text-primary">{s.v}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where did it all begin */}
      <section className="bg-muted/30 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.originEyebrow} title={t.originTitle} subtitle={t.originLead} />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-[#8fc4ff]/30 blur-3xl" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                <Image src={founders} alt="The Vansales founding team" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
            <div className="space-y-5">
              {t.originCards.map((c) => (
                <div key={c.t} className="rounded-2xl border bg-card p-6">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary [&>svg]:size-5">{c.icon}</div>
                  <h3 className="mb-1.5 font-semibold">{c.t}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">{t.originClose}</p>
        </div>
      </section>

      {/* Vansales Today */}
      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1 space-y-6">
            <div>
              <Badge variant="soft" className="mb-4 rounded-full px-3 py-1 text-xs">{t.todayEyebrow}</Badge>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.todayTitle}</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                {t.todayParas.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="space-y-3">
              {t.commitments.map((c) => (
                <div key={c.t} className="flex gap-4 rounded-xl border bg-card p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary [&>svg]:size-5">{c.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold">{c.t}</h3>
                    <p className="mt-0.5 text-sm leading-6 text-muted-foreground">{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-[#8fc4ff]/30 blur-3xl" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <Image src={today} alt="Vansales system tracking inventory in real time" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-muted/30 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.offerEyebrow} title={t.offerTitle} subtitle={t.offerSub} />
          <div className="grid gap-5 md:grid-cols-3">
            {t.offer.map((o) => (
              <FeatureCard key={o.t} icon={o.icon} title={o.t} description={o.d} tone={"tone" in o ? o.tone : undefined} className="transition duration-200 hover:-translate-y-1 hover:shadow-lg" />
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t.ctaTitle} subtitle={t.ctaSub} primaryCta={{ label: t.ctaPrimary, href: "/#contact" }} secondaryCta={{ label: t.ctaSecondary, href: "/#contact" }} />

      <SiteFooter lang={lang} />
    </div>
  );
}

export default CompanyPage;
