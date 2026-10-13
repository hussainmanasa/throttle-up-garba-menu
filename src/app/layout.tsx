import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";
import { bodyFont, condensedFont } from "./fonts";
import "./globals.css";

const title = `${site.event} Menu | ${site.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title,
  description: site.description,
  applicationName: `${site.name} ${site.event}`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    locale: site.locale,
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${condensedFont.variable} antialiased`}>
      <body className="min-h-dvh bg-background font-sans text-foreground">{children}</body>
    </html>
  );
}
