/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/', 
          permanent: false,
        },
      ];
    },
    async rewrites() {
      return [
        // Add any rewrites here if needed
      ];
    },
  };
  
  export default nextConfig;
  