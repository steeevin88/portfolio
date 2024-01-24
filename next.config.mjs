/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github.com',
          port: '',
        },
      ],
    },
  };
  
  export default nextConfig;