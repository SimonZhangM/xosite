import { ImageResponse } from "next/og";

export const alt = "XplorOne website preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(46,107,255,0.24), transparent 34%), radial-gradient(circle at top right, rgba(255,125,59,0.22), transparent 28%), linear-gradient(180deg, #f7f9fc 0%, #edf3fb 100%)",
          padding: "64px",
          color: "#15324c",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              height: "74px",
              width: "74px",
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg,#2e6bff,#ff7d3b)",
              color: "#fff",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            XO
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ fontSize: "22px", fontWeight: 600 }}>XplorOne</div>
            <div style={{ fontSize: "18px", color: "#4d6480" }}>Local-first finance workspace</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "920px" }}>
          <div style={{ fontSize: "62px", fontWeight: 700, lineHeight: 1.12 }}>
            Local-first finance workspace for solo operators
          </div>
          <div style={{ fontSize: "28px", lineHeight: 1.5, color: "#4d6480" }}>
            Understand income, accounts, budgets, and operating rhythm without handing everything to the cloud first.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "22px",
            color: "#1d4fd8",
          }}
        >
          <div>Multi-ledger and budgets</div>
          <div>·</div>
          <div>Charts and operating view</div>
          <div>·</div>
          <div>AI query and linked actions</div>
        </div>
      </div>
    ),
    size,
  );
}
