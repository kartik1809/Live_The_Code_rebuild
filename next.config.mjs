/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com', "api.microlink.io"],
    
  },
  // Disabling the error overlay in development mode
  devIndicators: {
    buildActivity: false,
  },
  reactStrictMode: false, // Optional: Disable React's strict mode if needed
};

export default nextConfig;
