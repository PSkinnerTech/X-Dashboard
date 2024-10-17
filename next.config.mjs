/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      X_API_KEY: process.env.X_API_KEY,
      X_API_SECRET: process.env.X_API_SECRET,
      X_ACCESS_TOKEN: process.env.X_ACCESS_TOKEN,
      X_ACCESS_SECRET: process.env.X_ACCESS_SECRET,
    },
    images: {
      domains: ['pbs.twimg.com'],
    },
  }
  
  export default nextConfig;
