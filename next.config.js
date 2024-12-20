/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
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
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true
  }
};

module.exports = nextConfig;
