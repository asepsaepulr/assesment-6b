import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
    remotePatterns : [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "eustore.coldplay.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.coldplay.com",
        port: "",
        pathname: "/wp/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
    ]
  }
};

export default nextConfig;
