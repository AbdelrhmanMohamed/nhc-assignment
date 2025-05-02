import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["cdn.dummyjson.com"],
  },
};

export default nextConfig;
