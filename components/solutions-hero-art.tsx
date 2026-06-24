import { type Lang } from "@/lib/use-lang";

/** On-brand illustration for the Solutions hero: a distribution scene —
 * warehouse → delivery van on a route → storefronts across three industries
 * (pharmacy, grocery, auto parts). Pure SVG, sits on the blue hero. */
export function SolutionsHeroArt({ lang, className }: { lang: Lang; className?: string }) {
  const chip1 = lang === "th" ? "ส่งสำเร็จ · INV-2087" : "Delivered · INV-2087";
  const chip2 = lang === "th" ? "เซ็นรับของบนมือถือแล้ว" : "Signed on the device";
  const title = lang === "th" ? "เครือข่ายการกระจายสินค้า" : "Distribution network";
  const desc =
    lang === "th"
      ? "คลังสินค้า ส่งสินค้าด้วยรถไปยังร้านค้าในหลายอุตสาหกรรม — ร้านยา ร้านชำ และร้านอะไหล่"
      : "A warehouse delivers by van to shops across industries — pharmacy, grocery and auto parts.";

  return (
    <svg
      viewBox="20 140 552 212"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="sha-t sha-d"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <title id="sha-t">{title}</title>
      <desc id="sha-d">{desc}</desc>

      {/* ground + route */}
      <line x1="28" y1="330" x2="548" y2="330" stroke="#fff" strokeOpacity="0.22" strokeWidth="2" />
      <path d="M150 312 C 270 346, 360 250, 470 252" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" strokeDasharray="1 11" />
      <circle cx="150" cy="312" r="4" fill="#fff" />

      {/* warehouse */}
      <g>
        <rect x="40" y="232" width="140" height="98" rx="3" fill="#fff" fillOpacity="0.10" stroke="#fff" strokeWidth="2.5" />
        <polygon points="32,232 110,196 188,232" fill="#fff" fillOpacity="0.20" stroke="#fff" strokeWidth="2.5" />
        <rect x="86" y="264" width="52" height="66" rx="2" fill="#fff" fillOpacity="0.18" stroke="#fff" strokeWidth="2" />
        <line x1="86" y1="280" x2="138" y2="280" stroke="#fff" strokeWidth="1.4" opacity="0.55" />
        <line x1="86" y1="296" x2="138" y2="296" stroke="#fff" strokeWidth="1.4" opacity="0.55" />
        <line x1="86" y1="312" x2="138" y2="312" stroke="#fff" strokeWidth="1.4" opacity="0.55" />
      </g>

      {/* delivery van */}
      <g>
        <rect x="250" y="240" width="92" height="56" rx="7" fill="#fff" stroke="#fff" strokeWidth="2" />
        <path d="M342 258 h26 l20 20 v18 h-46 z" fill="#dbe9fb" stroke="#fff" strokeWidth="2" />
        <rect x="348" y="262" width="22" height="15" rx="2" fill="#1765B3" />
        <circle cx="278" cy="300" r="12" fill="#0f4f93" stroke="#fff" strokeWidth="2.5" />
        <circle cx="368" cy="300" r="12" fill="#0f4f93" stroke="#fff" strokeWidth="2.5" />
        <rect x="263" y="254" width="20" height="6" rx="3" fill="#1765B3" />
        <rect x="263" y="265" width="34" height="6" rx="3" fill="#cde0f7" />
      </g>

      {/* storefronts */}
      {/* pharmacy */}
      <g>
        <rect x="388" y="250" width="52" height="80" rx="3" fill="#fff" fillOpacity="0.12" stroke="#fff" strokeWidth="2.2" />
        <path d="M385 250 h58 l-7 -15 h-44 z" fill="#fff" fillOpacity="0.22" stroke="#fff" strokeWidth="2.2" />
        <rect x="402" y="272" width="24" height="58" fill="#fff" fillOpacity="0.16" stroke="#fff" strokeWidth="1.6" />
        <circle cx="414" cy="216" r="16" fill="#fff" />
        <rect x="410.5" y="208" width="7" height="16" rx="2" fill="#1765B3" />
        <rect x="406" y="212.5" width="16" height="7" rx="2" fill="#1765B3" />
      </g>
      {/* grocery */}
      <g>
        <rect x="444" y="250" width="52" height="80" rx="3" fill="#fff" fillOpacity="0.12" stroke="#fff" strokeWidth="2.2" />
        <path d="M441 250 h58 l-7 -15 h-44 z" fill="#fff" fillOpacity="0.22" stroke="#fff" strokeWidth="2.2" />
        <rect x="458" y="272" width="24" height="58" fill="#fff" fillOpacity="0.16" stroke="#fff" strokeWidth="1.6" />
        <circle cx="470" cy="196" r="16" fill="#fff" />
        <path d="M462 195 h16 l-2 13 h-12 z" fill="none" stroke="#1765B3" strokeWidth="2.2" />
        <path d="M466 195 a4 4 0 0 1 8 0" fill="none" stroke="#1765B3" strokeWidth="2.2" />
      </g>
      {/* auto parts */}
      <g>
        <rect x="500" y="250" width="52" height="80" rx="3" fill="#fff" fillOpacity="0.12" stroke="#fff" strokeWidth="2.2" />
        <path d="M497 250 h58 l-7 -15 h-44 z" fill="#fff" fillOpacity="0.22" stroke="#fff" strokeWidth="2.2" />
        <rect x="514" y="272" width="24" height="58" fill="#fff" fillOpacity="0.16" stroke="#fff" strokeWidth="1.6" />
        <circle cx="526" cy="216" r="16" fill="#fff" />
        <g fill="none" stroke="#1765B3" strokeWidth="2.2">
          <circle cx="526" cy="216" r="5.2" />
          <path d="M526 207v-4M526 225v4M517 216h-4M535 216h4M519.7 209.7l-2.8-2.8M532.3 222.3l2.8 2.8M532.3 209.7l2.8-2.8M519.7 222.3l-2.8 2.8" />
        </g>
      </g>

      {/* floating "delivered" chip — auto-fits its text in any language */}
      <foreignObject x="196" y="148" width="320" height="56">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "#fff",
            borderRadius: "12px",
            padding: "7px 15px 7px 9px",
            boxSizing: "border-box",
            fontFamily: "'Noto Sans Thai','IBM Plex Sans Thai',system-ui,sans-serif",
          }}
        >
          <span
            style={{
              display: "flex",
              flex: "0 0 auto",
              width: "22px",
              height: "22px",
              borderRadius: "999px",
              background: "#e7f3ea",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 7.5 l3 3 l5 -6" fill="none" stroke="#1c9d57" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.18, whiteSpace: "nowrap" }}>
            <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#0f2742" }}>{chip1}</span>
            <span style={{ fontSize: "11px", color: "#64748b" }}>{chip2}</span>
          </span>
        </div>
      </foreignObject>
    </svg>
  );
}
