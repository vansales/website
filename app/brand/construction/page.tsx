import type { Metadata } from "next";
import Link from "next/link";
import { resolveLang } from "@/lib/server-lang";
import { localized } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Logo construction",
  description:
    "The geometry behind the Vansales V mark — an equilateral triangle with a slot parallel to the right edge. Angles, ratios and measurements.",
};

/* ---- Exact geometry (side = 100, downward equilateral triangle) ---- */
type P = [number, number];
const R3 = Math.sqrt(3);
const A: P = [0, 0];
const B: P = [100, 0];
const C: P = [50, 50 * R3]; // 86.60 — apex
const T: P = [24.5, 24.5 * R3]; // 42.44 — slot tip, on the left edge
const K: P = [31, 31 * R3]; // 53.69 — slot bend, on the left edge
const S1: P = [49, 0]; // slot top-left
const S2: P = [62, 0]; // slot top-right

const add = (p: P, d: P, s: number): P => [p[0] + d[0] * s, p[1] + d[1] * s];
const pts = (arr: P[]) => arr.map((p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ");

// unit direction vectors
const DIR_TOP: P = [1, 0];
const DIR_LEFT: P = [0.5, 0.5 * R3]; // A → C
const DIR_RIGHT: P = [-0.5, 0.5 * R3]; // B → C (also the slot direction)

// extended guide line through point p along unit dir d, params a..b
const guide = (p: P, d: P, a: number, b: number) => {
  const [x1, y1] = add(p, d, a);
  const [x2, y2] = add(p, d, b);
  return { x1, y1, x2, y2 };
};

const GUIDES = [
  guide(A, DIR_TOP, -26, 126), // top edge
  guide(A, DIR_LEFT, -28, 128), // left edge
  guide(B, DIR_RIGHT, -28, 128), // right edge
  guide(S1, DIR_RIGHT, -16, 64), // slot line 1
  guide(S2, DIR_RIGHT, -16, 74), // slot line 2
];

// 60° angle arc at a corner, between unit dirs d1→d2, radius r
const arc = (c: P, d1: P, d2: P, r: number, sweep: number) => {
  const s = add(c, d1, r);
  const e = add(c, d2, r);
  return `M ${s[0].toFixed(2)} ${s[1].toFixed(2)} A ${r} ${r} 0 0 ${sweep} ${e[0].toFixed(2)} ${e[1].toFixed(2)}`;
};

/* ---- Tile icon geometry (mark artwork coords: viewBox 0 5.5 68.66 69) ---- */
const TILE = { x: 0, y: 5.75, s: 68.58, r: 8.64 }; // rounded square, corner radius 8.64
const PIN = { cx: 34.33, cy: 32.55, r: 22.56 }; // location-pin head circle
const TIP: P = [34.3, 70.0]; // teardrop point at the bottom of the pin (radius ≈ 1.8)
const CX = 34.29; // tile centre x
const CLEAR = 8.64; // clear space = corner radius

const STR = {
  en: {
    eyebrow: "Brand · Construction",
    title: "Logo construction",
    intro:
      "The V mark is built from an exact equilateral triangle. A single slot, parallel to the right edge, splits it into the two strokes of the “V”. No optical nudging — every point is defined by geometry.",
    specTitle: "Specification",
    specs: [
      ["Base shape", "Equilateral triangle, pointing down"],
      ["Interior angles", "60° · 60° · 60°"],
      ["Side ratio", "1 : 1 : 1"],
      ["Slot", "Parallel to the right edge (−60°)"],
      ["Slot on top edge", "49% → 62% (13% gap)"],
      ["Slot width (⟂)", "≈ 0.113 × side (11.3%)"],
      ["Tip T & bend K", "Both lie exactly on the left edge"],
      ["Corners", "Sharp — radius 0"],
    ],
    legend: "T = slot tip · K = slot bend · both sit on edge A→C",
    vHeading: "The V mark",
    zoomTitle: "Pin tip · zoom",
    iconHeading: "The icon",
    iconIntro:
      "The icon is a rounded-square tile holding a location pin. The tile and pin are pure geometry; the delivery truck is an illustration centred inside the pin.",
    iconSpecs: [
      ["Container", "Rounded square, side S"],
      ["Corner radius", "0.126 × S (8.64 / 68.58)"],
      ["Pin circle", "radius 0.329 × S, on the centre axis"],
      ["Pin centre", "0.391 × S from the top"],
      ["Pin tip drop", "0.217 × S below the circle (1.66 r from centre)"],
      ["Tip corner radius", "≈ 0.026 × S (1.8)"],
      ["Teardrop sides", "tangent to the circle at its widest points"],
      ["Truck", "Illustration, centred in the pin circle"],
      ["Clear space", "≥ 0.126 × S (= corner radius)"],
    ],
    iconLegend: "Grey = clear space · dashed blue = keylines · the truck is illustrative, not derived from geometry.",
    zoomNotes: ["Circle bottom → tip: 0.217 S", "Tip corner radius: R ≈ 0.026 S (1.8)"],
    back: "← Back to brand",
  },
  th: {
    eyebrow: "แบรนด์ · การประกอบ",
    title: "การประกอบโลโก้เชิงเรขาคณิต",
    intro:
      "สัญลักษณ์ตัว V สร้างขึ้นจากสามเหลี่ยมด้านเท่า โดยมีร่อง (slot) หนึ่งเส้นวางขนานกับด้านขวา แบ่งรูปทรงออกเป็นสองส่วนที่ประกอบกันเป็นตัว “V” ทุกจุดกำหนดด้วยหลักเรขาคณิตที่แม่นยำ ไม่ใช้การกะระยะด้วยสายตา",
    specTitle: "ข้อกำหนด",
    specs: [
      ["รูปทรงพื้นฐาน", "สามเหลี่ยมด้านเท่า ปลายชี้ลง"],
      ["มุมภายใน", "60° · 60° · 60°"],
      ["อัตราส่วนด้าน", "1 : 1 : 1"],
      ["ร่อง (slot)", "ขนานกับขอบขวา (−60°)"],
      ["ตำแหน่งร่องบนขอบบน", "49% → 62% (ห่าง 13%)"],
      ["ความกว้างร่อง (⟂)", "≈ 0.113 × ด้าน (11.3%)"],
      ["จุด T และ K", "อยู่บนขอบซ้ายพอดีทั้งคู่"],
      ["มุม", "แหลมคม — รัศมี 0"],
    ],
    legend: "T = ปลายร่อง · K = จุดหักร่อง · ทั้งคู่อยู่บนขอบ A→C",
    vHeading: "สัญลักษณ์ตัว V",
    zoomTitle: "ปลายหมุด · ขยาย",
    iconHeading: "ไอคอน",
    iconIntro:
      "ไอคอนคือแผ่นสี่เหลี่ยมมุมมนที่บรรจุหมุดปักหมาย ตัวกรอบและหมุดเป็นเรขาคณิตล้วน ส่วนรถขนส่งเป็นภาพประกอบที่จัดกึ่งกลางอยู่ภายในหมุด",
    iconSpecs: [
      ["กรอบ", "สี่เหลี่ยมมุมมน ด้าน S"],
      ["รัศมีมุม", "0.126 × S (8.64 / 68.58)"],
      ["วงกลม pin", "รัศมี 0.329 × S บนแกนกึ่งกลาง"],
      ["จุดศูนย์กลาง pin", "0.391 × S จากขอบบน"],
      ["ปลายหมุดยื่นลง", "0.217 × S จากก้นวงกลม (1.66 r จากศูนย์กลาง)"],
      ["รัศมีมุมปลายหมุด", "≈ 0.026 × S (1.8)"],
      ["ด้านข้างหยดน้ำ", "สัมผัสวงกลมที่จุดกว้างสุด (tangent)"],
      ["ตัวรถ", "ภาพประกอบ จัดกึ่งกลางในวงกลม pin"],
      ["ระยะปลอดภัย", "≥ 0.126 × S (= รัศมีมุม)"],
    ],
    iconLegend: "เทา = ระยะปลอดภัย · เส้นประน้ำเงิน = เส้นไกด์ · ตัวรถเป็นภาพประกอบ ไม่ได้มาจากสูตรเรขาคณิต",
    zoomNotes: ["ก้นวงกลม → ปลายหมุด: 0.217 S", "รัศมีมุมปลาย: R ≈ 0.026 S (1.8)"],
    back: "← กลับไปหน้าแบรนด์",
  },
} as const;

export default async function ConstructionPage() {
  const lang = await resolveLang();
  const t = STR[lang];

  const guideStroke = "#94a3b8";
  const dot = (p: P, r = 1.1) => <circle cx={p[0]} cy={p[1]} r={r} fill="#1765B3" />;

  return (
    <div className="bg-background text-foreground antialiased">
      <SiteHeader lang={lang} />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          {t.eyebrow}
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t.intro}</p>

        {/* ============ V mark ============ */}
        <h2 className="mt-12 text-2xl font-bold tracking-tight">{t.vHeading}</h2>

        {/* Construction diagram */}
        <div className="mt-6 overflow-hidden rounded-2xl border bg-white">
          <svg viewBox="-34 -30 172 152" className="w-full" role="img" aria-label="V mark geometric construction">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#eef2f7" strokeWidth="0.4" />
              </pattern>
              <marker id="arrow" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0.5,0.5 L4,2.5 L0.5,4.5" fill="none" stroke="#0f172a" strokeWidth="0.6" />
              </marker>
            </defs>
            <rect x="-34" y="-30" width="172" height="152" fill="url(#grid)" />

            {/* extended guide lines */}
            {GUIDES.map((g, i) => (
              <line key={i} x1={g.x1} y1={g.y1} x2={g.x2} y2={g.y2} stroke={guideStroke} strokeWidth="0.4" />
            ))}

            {/* equilateral triangle outline */}
            <polygon points={pts([A, B, C])} fill="none" stroke="#1765B3" strokeWidth="0.6" strokeDasharray="2 2" />

            {/* the V mark itself */}
            <polygon points={pts([A, S1, T])} fill="#1765B3" fillOpacity="0.9" />
            <polygon points={pts([S2, B, C, K])} fill="#1765B3" fillOpacity="0.9" />

            {/* 60° angle arcs */}
            <path d={arc(A, DIR_TOP, DIR_LEFT, 15, 1)} fill="none" stroke="#1765B3" strokeWidth="0.6" />
            <path d={arc(B, [-1, 0], DIR_RIGHT, 15, 0)} fill="none" stroke="#1765B3" strokeWidth="0.6" />
            <path d={arc(C, [-0.5, -0.5 * R3], [0.5, -0.5 * R3], 15, 1)} fill="none" stroke="#1765B3" strokeWidth="0.6" />

            {/* slot start/end on the top edge: 49% and 62% */}
            <line x1="49" y1="0" x2="49" y2="-3" stroke="#0f172a" strokeWidth="0.4" />
            <line x1="62" y1="0" x2="62" y2="-3" stroke="#0f172a" strokeWidth="0.4" />
            <text x="45.5" y="-4.6" fontSize="3.4" fill="#0f172a">49%</text>
            <text x="58.5" y="-4.6" fontSize="3.4" fill="#0f172a">62%</text>

            {/* 13% gap along the top edge (arrows) */}
            <line x1="49" y1="-8.5" x2="62" y2="-8.5" stroke="#0f172a" strokeWidth="0.4" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
            <line x1="49" y1="-3.2" x2="49" y2="-8.5" stroke="#0f172a" strokeWidth="0.3" />
            <line x1="62" y1="-3.2" x2="62" y2="-8.5" stroke="#0f172a" strokeWidth="0.3" />
            <text x="49.5" y="-10" fontSize="3.4" fill="#0f172a">13% (top)</text>

            {/* perpendicular slot width 11.3% */}
            <line x1="43" y1="10.39" x2="52.75" y2="16.02" stroke="#0f172a" strokeWidth="0.5" />
            <text x="30" y="24" fontSize="4" fill="#0f172a">11.3% ⟂</text>

            {/* angle labels */}
            <text x="15.5" y="9" fontSize="5" fill="#0f172a">60°</text>
            <text x="76" y="9" fontSize="5" fill="#0f172a">60°</text>
            <text x="44" y="67" fontSize="5" fill="#0f172a">60°</text>

            {/* side labels */}
            <text x="22" y="-3" fontSize="5" fill="#334155">S</text>
            <text x="15" y="42" fontSize="5" fill="#334155">S</text>
            <text x="81" y="42" fontSize="5" fill="#334155">S</text>

            {/* vertices + point labels */}
            {dot(A)}
            {dot(B)}
            {dot(C)}
            {dot(T)}
            {dot(K)}
            {dot(S1, 0.9)}
            {dot(S2, 0.9)}
            <text x="-7" y="-3" fontSize="5" fontWeight="600" fill="#0f172a">A</text>
            <text x="102" y="-3" fontSize="5" fontWeight="600" fill="#0f172a">B</text>
            <text x="52" y="94" fontSize="5" fontWeight="600" fill="#0f172a">C</text>
            <text x="17" y="44" fontSize="4.2" fill="#1765B3">T</text>
            <text x="33" y="57" fontSize="4.2" fill="#1765B3">K</text>

            {/* triangle height (apex detail) */}
            <line x1="78" y1="0" x2="78" y2="86.6" stroke="#0f172a" strokeWidth="0.4" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
            <line x1="50" y1="86.6" x2="78" y2="86.6" stroke="#94a3b8" strokeWidth="0.25" strokeDasharray="1 1" />
            <text x="80" y="44" fontSize="4" fill="#0f172a">h = 0.866 S</text>
            <text x="80" y="49.5" fontSize="3.2" fill="#64748b">= √3⁄2 · S</text>

            {/* apex coordinate + emphasis */}
            <circle cx={C[0]} cy={C[1]} r="1.9" fill="none" stroke="#1765B3" strokeWidth="0.5" />
            <text x="28" y="101" fontSize="3.6" fill="#0f172a">C = (0.5 S, 0.866 S)</text>
          </svg>
        </div>
        <p className="mt-3 text-center text-sm text-muted-foreground">{t.legend}</p>

        {/* Spec table */}
        <h2 className="mt-14 text-xl font-semibold">{t.specTitle}</h2>
        <div className="mt-4 divide-y rounded-xl border">
          {t.specs.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-0.5 p-4 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="text-sm font-medium text-muted-foreground">{k}</span>
              <span className="font-mono text-sm">{v}</span>
            </div>
          ))}
        </div>

        {/* ============ Icon ============ */}
        <h2 className="mt-16 text-2xl font-bold tracking-tight">{t.iconHeading}</h2>
        <p className="mt-3 text-muted-foreground">{t.iconIntro}</p>

        <div className="mt-6 overflow-hidden rounded-2xl border bg-white">
          <svg viewBox="-26 -16 132 112" className="w-full" role="img" aria-label="Icon geometric construction">
            <defs>
              <pattern id="grid2" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#eef2f7" strokeWidth="0.4" />
              </pattern>
              <marker id="arrow2" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0.5,0.5 L4,2.5 L0.5,4.5" fill="none" stroke="#0f172a" strokeWidth="0.6" />
              </marker>
            </defs>
            <rect x="-26" y="-16" width="132" height="112" fill="url(#grid2)" />

            {/* clear space */}
            <rect
              x={TILE.x - CLEAR}
              y={TILE.y - CLEAR}
              width={TILE.s + 2 * CLEAR}
              height={TILE.s + 2 * CLEAR}
              fill="none"
              stroke="#94a3b8"
              strokeWidth="0.4"
              strokeDasharray="2 2"
            />

            {/* the real icon */}
            <image href="/brand/vansales-mark.svg" x="0" y="5.5" width="68.66" height="69" />

            {/* rounded-square keyline */}
            <rect x={TILE.x} y={TILE.y} width={TILE.s} height={TILE.s} rx={TILE.r} fill="none" stroke="#1765B3" strokeWidth="0.5" strokeDasharray="2 1.5" />

            {/* centre axis */}
            <line x1={CX} y1={TILE.y - CLEAR} x2={CX} y2={TILE.y + TILE.s + CLEAR} stroke="#94a3b8" strokeWidth="0.35" strokeDasharray="1.5 1.5" />

            {/* pin circle */}
            <circle cx={PIN.cx} cy={PIN.cy} r={PIN.r} fill="none" stroke="#1765B3" strokeWidth="0.5" strokeDasharray="2 1.5" />
            <circle cx={PIN.cx} cy={PIN.cy} r="0.9" fill="#1765B3" />

            {/* pin radius → leader to right margin */}
            <line x1={PIN.cx} y1={PIN.cy} x2={PIN.cx + PIN.r} y2={PIN.cy} stroke="#1765B3" strokeWidth="0.45" />
            <line x1={PIN.cx + PIN.r} y1={PIN.cy} x2="82" y2={PIN.cy} stroke="#94a3b8" strokeWidth="0.3" />
            <text x="83" y={PIN.cy + 1} fontSize="3.6" fill="#0f172a">r = 0.329 S</text>

            {/* corner radius (top-right) → leader to right margin */}
            <path d={`M 59.94 5.75 A ${TILE.r} ${TILE.r} 0 0 1 68.58 14.39`} fill="none" stroke="#e11d48" strokeWidth="0.7" />
            <line x1="59.94" y1="14.39" x2="68.58" y2="14.39" stroke="#e11d48" strokeWidth="0.4" />
            <circle cx="59.94" cy="14.39" r="0.7" fill="#e11d48" />
            <line x1="68.58" y1="14.39" x2="82" y2="14.39" stroke="#94a3b8" strokeWidth="0.3" />
            <text x="83" y="15.4" fontSize="3.6" fill="#0f172a">R = 0.126 S</text>

            {/* pin depth from top (on axis, white for contrast on the tile) */}
            <line x1={CX} y1={TILE.y} x2={CX} y2={PIN.cy} stroke="#ffffff" strokeWidth="0.4" markerStart="url(#arrow2)" markerEnd="url(#arrow2)" />
            <text x={CX + 1.5} y="20" fontSize="3.4" fill="#ffffff">0.391 S</text>

            {/* top side dimension S */}
            <line x1={TILE.x} y1="2" x2={TILE.x + TILE.s} y2="2" stroke="#0f172a" strokeWidth="0.4" markerStart="url(#arrow2)" markerEnd="url(#arrow2)" />
            <line x1={TILE.x} y1="2" x2={TILE.x} y2="5.5" stroke="#0f172a" strokeWidth="0.25" />
            <line x1={TILE.x + TILE.s} y1="2" x2={TILE.x + TILE.s} y2="5.5" stroke="#0f172a" strokeWidth="0.25" />
            <text x="32" y="0.5" fontSize="4" fill="#334155">S</text>

            {/* clear-space label */}
            <text x={TILE.x - CLEAR} y="90" fontSize="3.6" fill="#64748b">clear space ≥ 0.126 S</text>

            {/* teardrop tip + zoom marker (magnified in the inset →) */}
            <circle cx={TIP[0]} cy={TIP[1]} r="0.8" fill="#e11d48" />
            <rect x="20" y="49" width="29" height="27" rx="1.5" fill="none" stroke="#e11d48" strokeWidth="0.5" strokeDasharray="2 1.5" />
            <text x="50" y="53" fontSize="3.4" fill="#e11d48">zoom →</text>
          </svg>
        </div>
        <p className="mt-3 text-center text-sm text-muted-foreground">{t.iconLegend}</p>

        {/* Pin-tip zoom inset — real icon, viewBox cropped to the teardrop */}
        <div className="mt-4 max-w-xs">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">{t.zoomTitle}</p>
          <div className="overflow-hidden rounded-xl border-2 border-dashed border-[#e11d48] bg-white">
            <svg viewBox="20 49 29 27" className="w-full" role="img" aria-label="Pin tip zoom">
              <defs>
                <pattern id="gridZ" width="4" height="4" patternUnits="userSpaceOnUse">
                  <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#f1f5f9" strokeWidth="0.25" />
                </pattern>
              </defs>
              <rect x="20" y="49" width="29" height="27" fill="url(#gridZ)" />
              {/* the real icon */}
              <image href="/brand/vansales-mark.svg" x="0" y="5.5" width="68.66" height="69" />
              {/* pin circle (lower arc visible) + centre axis */}
              <circle cx={PIN.cx} cy={PIN.cy} r={PIN.r} fill="none" stroke="#1765B3" strokeWidth="0.3" strokeDasharray="1.5 1.5" />
              <line x1={CX} y1="49" x2={CX} y2="75" stroke="#94a3b8" strokeWidth="0.25" strokeDasharray="1.5 1.5" />
              {/* (a) circle bottom → tip drop — red so it reads on both blue & white */}
              <circle cx={PIN.cx} cy={PIN.cy + PIN.r} r="0.7" fill="#e11d48" />
              <line x1={PIN.cx} y1={PIN.cy + PIN.r} x2={TIP[0]} y2={TIP[1]} stroke="#e11d48" strokeWidth="0.5" />
              <text x={PIN.cx + 1.6} y="63" fontSize="2.8" fontWeight="700" fill="#e11d48">a</text>

              {/* (b) teardrop tip + corner radius */}
              <circle cx={TIP[0]} cy={TIP[1]} r="0.7" fill="#e11d48" />
              <circle cx={TIP[0]} cy={TIP[1]} r="1.8" fill="none" stroke="#e11d48" strokeWidth="0.4" />
              <text x={TIP[0] + 2.4} y={TIP[1] + 0.8} fontSize="2.8" fontWeight="700" fill="#e11d48">b</text>
            </svg>
          </div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {t.zoomNotes.map((n, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-mono font-semibold text-[#e11d48]">{i === 0 ? "a" : "b"}</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Icon spec table */}
        <h2 className="mt-10 text-xl font-semibold">{t.specTitle}</h2>
        <div className="mt-4 divide-y rounded-xl border">
          {t.iconSpecs.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-0.5 p-4 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="text-sm font-medium text-muted-foreground">{k}</span>
              <span className="font-mono text-sm">{v}</span>
            </div>
          ))}
        </div>

        <Link href={localized("/brand", lang)} className="mt-10 inline-block text-sm font-medium text-primary hover:underline">
          {t.back}
        </Link>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
