import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com", // Düzgün hostname
        pathname: "/products/images/**", // Daha geniş range
      },
    ],
  },
};

export default withNextIntl(nextConfig);
