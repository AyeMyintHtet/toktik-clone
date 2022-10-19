/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org', 'images.pexels.com', 'upload.wikimedia.org', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
