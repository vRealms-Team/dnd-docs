"use client";

import { useState } from "react";
import CopyButton from "./CopyButton";

// Mirrors dnd_economy's Config.Color shape (config.lua) and the CSS
// variables each key drives in that resource's web/src/style.css
// (--c-primary / --c-primary-light / --c-secondary / --c-success /
// --c-warning / --c-danger). Defaults match the resource's own defaults.
const FIELDS: { key: keyof ColorState; label: string; hint: string }[] = [
  { key: "mainColor", label: "Main Color", hint: "Primary accent — borders, highlights, focus rings, scrollbar" },
  { key: "mainColorLight", label: "Main Color (Light)", hint: "Lighter tint — glows, gradient light stops" },
  { key: "buttonColor", label: "Button Color", hint: "Secondary/darker shade — button gradient dark stop" },
  { key: "successColor", label: "Success Color", hint: "Accept actions, well-stocked demand" },
  { key: "warningColor", label: "Warning Color", hint: "Price-locked, urgent countdown" },
  { key: "dangerColor", label: "Danger Color", hint: "Reject actions, high demand" },
];

type ColorState = {
  mainColor: string;
  mainColorLight: string;
  buttonColor: string;
  successColor: string;
  warningColor: string;
  dangerColor: string;
};

const DEFAULTS: ColorState = {
  mainColor: "#A3E635",
  mainColorLight: "#D9F99D",
  buttonColor: "#65A30D",
  successColor: "#22C55E",
  warningColor: "#F59E0B",
  dangerColor: "#EF4444",
};

function generateConfig(c: ColorState): string {
  return [
    "Config.Color = {",
    `    mainColor      = '${c.mainColor}', -- primary accent: borders, highlights, focus rings, scrollbar`,
    `    mainColorLight = '${c.mainColorLight}', -- lighter tint: glows, gradient light stops`,
    `    buttonColor    = '${c.buttonColor}', -- secondary/darker shade: button gradient dark stop`,
    `    successColor   = '${c.successColor}', -- accept actions, "well stocked" demand`,
    `    warningColor   = '${c.warningColor}', -- price-locked, urgent countdown`,
    `    dangerColor    = '${c.dangerColor}', -- reject actions, "high demand"`,
    "}",
  ].join("\n");
}

export default function EconomyColorPreview() {
  const [colors, setColors] = useState<ColorState>(DEFAULTS);

  function set(key: keyof ColorState, value: string) {
    setColors((prev) => ({ ...prev, [key]: value }));
  }

  function reset() {
    setColors(DEFAULTS);
  }

  const code = generateConfig(colors);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, margin: "1.5rem 0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
          padding: 16,
          borderRadius: 10,
          border: "1px solid rgba(148,163,184,0.25)",
        }}
      >
        {FIELDS.map((f) => (
          <label key={f.key} style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 13 }}>
            <span style={{ fontWeight: 600 }}>{f.label}</span>
            <span style={{ opacity: 0.65, fontSize: 11.5 }}>{f.hint}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 2 }}>
              <input
                type="color"
                value={colors[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                style={{ width: 34, height: 28, padding: 0, border: "none", background: "none", cursor: "pointer" }}
              />
              <input
                type="text"
                value={colors[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                style={{
                  width: 90,
                  fontFamily: "monospace",
                  fontSize: 12,
                  padding: "4px 6px",
                  borderRadius: 6,
                  border: "1px solid rgba(148,163,184,0.35)",
                  background: "transparent",
                }}
              />
            </span>
          </label>
        ))}
      </div>

      <div>
        <button
          onClick={reset}
          style={{
            fontSize: 12,
            padding: "6px 12px",
            borderRadius: 6,
            border: "1px solid rgba(148,163,184,0.35)",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Reset to defaults
        </button>
      </div>

      {/* Live preview — a small mock of dnd_economy's tablet NUI, styled
          the same way the real NUI would be (colors driving the same
          roles: accent borders, gradient buttons, status pills, progress
          bar). Not the actual Vue app — a lightweight visual mirror so
          this page doesn't need to import/build that whole bundle. */}
      <div
        style={{
          borderRadius: 18,
          padding: 14,
          background: "linear-gradient(155deg, #313845 0%, #171b22 42%, #0e1117 78%, #1b2029 100%)",
        }}
      >
        <div
          style={{
            borderRadius: 10,
            background: "linear-gradient(180deg, #0f1520 0%, #0a0f18 100%)",
            color: "#e6ebf5",
            padding: 18,
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div>
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  backgroundImage: `linear-gradient(135deg, #e6ebf5, ${colors.mainColorLight})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Government Agency Dashboard
              </div>
              <div style={{ fontSize: 11, opacity: 0.6, marginTop: 2 }}>job: government &middot; commission: 3.0%</div>
            </div>
            <button
              style={{
                border: "none",
                borderRadius: 8,
                padding: "8px 14px",
                fontSize: 12,
                fontWeight: 600,
                color: "#0a0f18",
                background: `linear-gradient(135deg, ${colors.mainColor}, ${colors.buttonColor})`,
              }}
            >
              Save
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #22304b",
              marginBottom: 10,
            }}
          >
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Scrap Metal</div>
              <div style={{ fontSize: 11, opacity: 0.55 }}>k=0.5</div>
            </div>
            <div style={{ fontSize: 13, color: colors.mainColorLight }}>$1,950 &#9650;</div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: 999,
                background: "rgba(239,68,68,0.15)",
                color: colors.dangerColor,
              }}
            >
              High Demand
            </div>
          </div>

          <div
            style={{
              padding: "10px 12px",
              borderRadius: 8,
              border: `1px solid ${colors.warningColor}55`,
              marginBottom: 14,
              fontSize: 12,
            }}
          >
            <span style={{ color: colors.warningColor, fontWeight: 700 }}>&#128274; LOCKED</span>{" "}
            <span style={{ opacity: 0.7 }}>Price held &mdash; 18h left</span>
          </div>

          <div
            style={{
              borderRadius: 10,
              border: `1px solid ${colors.mainColor}55`,
              padding: 12,
              background: "rgba(163,230,53,0.05)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8 }}>Pending Buy Order &mdash; ID: 1 (0.0m)</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <button
                style={{
                  border: `1px solid ${colors.dangerColor}4d`,
                  background: "rgba(239,68,68,0.15)",
                  color: "#fca5a5",
                  borderRadius: 8,
                  padding: "8px 0",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                &#10007; Reject
              </button>
              <button
                style={{
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 0",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#052e12",
                  background: `linear-gradient(135deg, ${colors.successColor}, ${colors.successColor}cc)`,
                }}
              >
                &#10003; Accept
              </button>
            </div>
            <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.06)", marginTop: 10 }}>
              <div
                style={{
                  height: "100%",
                  width: "62%",
                  borderRadius: 2,
                  background: `linear-gradient(90deg, ${colors.mainColor}, ${colors.mainColorLight})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <pre
          style={{
            margin: 0,
            padding: "14px 44px 14px 14px",
            borderRadius: 8,
            fontSize: 12.5,
            overflowX: "auto",
            background: "rgba(0,0,0,0.35)",
          }}
        >
          <code>{code}</code>
        </pre>
        <div style={{ position: "absolute", top: 10, right: 10 }}>
          <CopyButton code={code} />
        </div>
      </div>
    </div>
  );
}
