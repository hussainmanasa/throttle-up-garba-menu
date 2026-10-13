#!/usr/bin/env node
/**
 * Print-ready QR code for the Garba Night menu, written to qr/:
 *   garba-menu.svg   -> vector, use this for print (scales without blurring)
 *   garba-menu.png   -> 2048 px, for WhatsApp / Instagram / slides
 *   index.html       -> a Throttle Up table card with the code; open it and print
 *
 * The code points at `url` in src/data/site.ts (the live site). To generate it
 * for a different address, pass --url https://example.com (or SITE_URL).
 *
 * Always scan the printed code with a couple of phones before a print run.
 */
import fs from "node:fs/promises";
import path from "node:path";
import QRCode from "qrcode";
import { site } from "../src/data/site.ts";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "qr");
const PNG_SIZE = 2048;
// "Q" survives ~25% damage: smudges, glare, a drink ring on the table card.
const ERROR_CORRECTION = "Q";

function resolveUrl() {
  const flag = process.argv.indexOf("--url");
  return (flag > -1 ? process.argv[flag + 1] : process.env.SITE_URL) || site.url;
}

const url = resolveUrl().replace(/\/?$/, "/");
if (!/^https:\/\//.test(url)) console.warn(`[qr] warning: ${url} is not https. Printed codes should point at the live site.`);

await fs.rm(OUT, { recursive: true, force: true });
await fs.mkdir(OUT, { recursive: true });

// Black on white: the highest-contrast combination, which every phone camera reads.
const options = { errorCorrectionLevel: ERROR_CORRECTION, margin: 2, color: { dark: "#000000", light: "#ffffff" } };
const svg = await QRCode.toString(url, { ...options, type: "svg" });
await fs.writeFile(path.join(OUT, "garba-menu.svg"), svg);
await QRCode.toFile(path.join(OUT, "garba-menu.png"), url, { ...options, width: PNG_SIZE });

// Inline the logo so the card is a single file that can be emailed to a printer.
const logo = await fs.readFile(path.join(ROOT, "public", site.logo.src));
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

const escape = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const card = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(site.name)} ${escape(site.event)}: menu QR card</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&family=Oswald:wght@500;700&display=swap" rel="stylesheet">
<style>
  @page{size:A5 portrait;margin:0}
  *{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  html,body{margin:0;background:#2a2a2a;font-family:Manrope,system-ui,sans-serif}
  .page{display:grid;place-items:center;min-height:100vh;padding:24px}
  .card{position:relative;width:148mm;height:210mm;background:#111;color:#f5f5f4;overflow:hidden;display:flex;flex-direction:column;align-items:center;text-align:center;padding:16mm 14mm 12mm}
  .toran{position:absolute;left:0;right:0;height:16px;background:
    linear-gradient(135deg,#c82127 50%,transparent 50%) 0 0/32px 16px repeat-x,
    linear-gradient(225deg,#c82127 50%,transparent 50%) 0 0/32px 16px repeat-x}
  .toran.top{top:0}.toran.bottom{bottom:0;transform:rotate(180deg)}
  .glow{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 30%,rgba(200,33,39,.28),transparent 60%)}
  .card>*:not(.toran):not(.glow){position:relative}
  .logo{width:62mm;height:auto;display:block;border-radius:2px}
  .kicker{margin:9mm 0 0;font-size:10pt;letter-spacing:.35em;text-transform:uppercase;color:#e3555a;font-weight:600}
  h1{margin:2mm 0 0;font-family:Oswald,"Arial Narrow",sans-serif;font-weight:700;font-size:44pt;line-height:1;letter-spacing:.04em;text-transform:uppercase}
  h1 span{color:#c82127}
  .ornament{display:flex;align-items:center;gap:10px;margin-top:5mm;color:#c82127}
  .ornament i{display:block;width:40px;height:1px;background:currentColor;opacity:.6}
  .qr{margin-top:8mm;background:#fff;padding:4mm;border-radius:4mm;box-shadow:0 0 0 2px #c82127}
  .qr svg{display:block;width:62mm;height:62mm}
  .cta{margin:7mm 0 0;font-family:Oswald,"Arial Narrow",sans-serif;font-size:18pt;letter-spacing:.12em;text-transform:uppercase}
  .url{margin:2mm 0 0;font-size:9pt;color:#aaa6a2;word-break:break-all}
  .foot{margin-top:auto;font-family:Oswald,"Arial Narrow",sans-serif;font-size:10pt;letter-spacing:.3em;text-transform:uppercase;color:#aaa6a2}
  .foot b{color:#e3555a;font-weight:500}
  .hint{max-width:148mm;margin:16px auto 0;color:#ccc;font-size:13px;text-align:center}
  @media print{html,body{background:#111}.page{padding:0;min-height:0}.hint{display:none}}
</style></head><body>
<div class="page"><div>
<div class="card">
  <div class="glow"></div><div class="toran top"></div>
  <img class="logo" src="${logoSrc}" alt="${escape(site.name)} Sports Lounge">
  <p class="kicker">Navratri Special</p>
  <h1>Garba <span>Night</span></h1>
  <div class="ornament"><i></i><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"><path d="M5 19 19 5M5 5l14 14" stroke-width="1.75"/><path d="M4 20l2-2M20 20l-2-2" stroke-width="3"/></svg><i></i></div>
  <div class="qr">${svg}</div>
  <p class="cta">Scan for the menu</p>
  <p class="url">${escape(url.replace(/^https?:\/\//, "").replace(/\/$/, ""))}</p>
  <p class="foot">${escape(site.name)} <b>·</b> Sports Lounge</p>
  <div class="toran bottom"></div>
</div>
<p class="hint">A5 table card. Print with “Background graphics” on and margins set to None. For other sizes use garba-menu.svg; keep the QR at least 3 × 3 cm.</p>
</div></div>
</body></html>
`;
await fs.writeFile(path.join(OUT, "index.html"), card);

console.log(`[qr] ${url}`);
console.log("[qr] wrote qr/garba-menu.svg, qr/garba-menu.png and qr/index.html (the printable table card)");
