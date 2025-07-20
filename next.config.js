/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.uifaces.co", "images.unsplash.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
