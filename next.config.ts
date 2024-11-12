import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export with images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Configure redirects if needed
  async redirects() {
    return [];
  },
  // Configure rewrites if needed
  async rewrites() {
    return [];
  },
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Disable server-side features for static export
  // Configure domain for static export
  basePath: '',
  // Configure trailing slash behavior
  trailingSlash: false,
};

export default nextConfig;