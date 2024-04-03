/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://tutorbest-vercel-fastapi.vercel.app/:path*'
          }
        ]
      }
};

export default nextConfig;