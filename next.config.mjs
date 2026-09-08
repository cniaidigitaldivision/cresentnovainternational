/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Leadership portraits and the CEO keynote still come from the mockup's CDN.
    remotePatterns: [{ protocol: 'https', hostname: 'lh3.googleusercontent.com' }],
  },
}

export default nextConfig
