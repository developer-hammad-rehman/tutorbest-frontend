/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://tutorbest-2jtkztuufq-uc.a.run.app/:path*'
          }
        ]
      }
};

export default nextConfig;