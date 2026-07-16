import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/tech-drive-guide',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
