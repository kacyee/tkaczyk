/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en-US", "pl-PL"],
    defaultLocale: "pl-PL",
    localeDetection: false,
  },
};

module.exports = nextConfig;
