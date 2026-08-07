import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  // cacheComponents: true,
  reactCompiler: true,
  // typedRoutes: true,

  experimental: {
    typedEnv: true,
  },

  logging: {
    browserToTerminal: true,
  },

  images: {
    qualities: [70, 100],
  },
  transpilePackages: ['next-mdx-remote'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {key: 'X-Content-Type-Options', value: 'nosniff'},
          {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
          {key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()'},
          {key: 'X-Frame-Options', value: 'DENY'},
        ],
      },
    ]
  },
}

export default nextConfig
