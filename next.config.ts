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
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "cdn.dummyjson.com",
  //       port: "",
  //       pathname: "",
  //     },
  //   ],
  // },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
