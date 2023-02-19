/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en-US", "pl"],
    defaultLocale: "pl",
  },
};

module.exports = nextConfig;
