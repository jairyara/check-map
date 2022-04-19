/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/logout',
        destination: '/login',
        permanent: true
      },
      {
        source: '/api',
        destination: '/api/v1',
        permanent: true
      },
    ]
  },
}

module.exports = nextConfig
