import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Remove redirects and rewrites for static export
  reactStrictMode: true,
  basePath: '',
  trailingSlash: false,
};

export default nextConfig;