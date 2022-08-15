// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ['algorand-wallet-mainnet.s3.amazonaws.com'],
  },
};
