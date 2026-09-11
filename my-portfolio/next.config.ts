/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/Nextjs-portfolio",
  assetPrefix: "/Nextjs-portfolio/",
  trailingSlash: true,
};

export default nextConfig;
