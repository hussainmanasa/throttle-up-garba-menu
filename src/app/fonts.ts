import { Manrope, Oswald } from "next/font/google";

// Downloaded at build time and served from the site itself.
// Same pairing as the Throttle Up menus: Oswald for headings, Manrope for text.

export const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const condensedFont = Oswald({
  subsets: ["latin"],
  variable: "--font-condensed",
  display: "swap",
});
