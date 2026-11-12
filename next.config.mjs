/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    // Academic Projects page was removed; send old links to the work page.
    return [
      { source: '/academic-projects', destination: '/work', permanent: true },
      { source: '/academic-projects/:path*', destination: '/work', permanent: true },
    ]
  },
}

export default nextConfig
