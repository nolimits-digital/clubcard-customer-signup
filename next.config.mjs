/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['minimals.cc'], // Add the domain of your image source here
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://18.102.209.222:5050/:path*'
      }
    ];
  }
};

export default nextConfig;
