import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain HTML/CSS/JS in out/; no server needed (Vercel serves it as a static site).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactCompiler: true,
  poweredByHeader: false,
};

export default nextConfig;
