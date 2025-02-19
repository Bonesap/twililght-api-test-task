import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://api3.twilightcyber.com/:path*',
      },
    ];
  },
};

export default nextConfig;
