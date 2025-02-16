/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/webmelol",
  assetPrefix: "/webmelol/",
  trailingSlash: true,
};

export default nextConfig;
