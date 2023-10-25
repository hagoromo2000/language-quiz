/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  experimental: {
    swcPlugins: [["@swc-jotai/react-refresh", {}]],
  },
};

module.exports = nextConfig;
