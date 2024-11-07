import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/propertypulse',   
  assetPrefix: '/propertypulse/', 
  trailingSlash: true,              
  output: 'export', // Uncomment when pushing to github
  images: {
    unoptimized: true,            
  },
};

export default nextConfig;
