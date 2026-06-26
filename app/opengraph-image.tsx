import { ImageResponse } from "next/og";

export const alt = "Vansales — Sales & distribution platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1f6fc0 0%, #0f4f93 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: "96px", fontWeight: 800, letterSpacing: "-3px", lineHeight: 1 }}>vansales</div>
        <div style={{ display: "flex", fontSize: "44px", marginTop: "36px", maxWidth: "960px", lineHeight: 1.3 }}>
          All-in-one sales &amp; distribution — orders, stock, routes, delivery and reports in real time.
        </div>
        <div style={{ display: "flex", fontSize: "30px", marginTop: "44px", opacity: 0.8 }}>vansales.ai</div>
      </div>
    ),
    { ...size },
  );
}
