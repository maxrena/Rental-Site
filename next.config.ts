import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false, // ponytail: hides dev tools badge in dev mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
