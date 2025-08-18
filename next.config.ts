import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mysoftltd.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
            {
        protocol: 'https',
        hostname: 'bcassetcdn.com',
      },
    ],
  },
};

export default nextConfig;
