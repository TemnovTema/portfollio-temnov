import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  // cacheComponents: true,
  reactCompiler: true,
  // typedRoutes: true,

  experimental: {
    typedEnv: true,
    browserDebugInfoInTerminal: true,
  },

  images: {
    qualities: [70, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  transpilePackages: ['next-mdx-remote'],
  async redirects() {
    return []
  },
}

export default nextConfig
