import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* The whole site prerenders, so it ships to Cloudflare as static files.
     That rules out the Next image optimizer, hence unoptimized: true — the
     photographs in public/images are pre-sized and converted to WebP instead. */
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
