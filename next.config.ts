import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
