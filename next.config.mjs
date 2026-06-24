/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The design system ships an ESM bundle; let Next compile it in the app graph.
  transpilePackages: ["@vansales/design-system"],
};

export default nextConfig;
