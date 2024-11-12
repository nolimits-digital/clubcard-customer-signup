/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['minimals.cc'], // Add the domain of your image source here
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://35.152.54.237:5050/:path*'
      }
    ];
  }
};

export default nextConfig;
