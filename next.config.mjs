import { withContentlayer } from "next-contentlayer2";
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
};

export default withContentlayer(nextConfig);
