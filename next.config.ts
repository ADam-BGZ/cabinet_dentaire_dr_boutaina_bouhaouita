import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/cabinet_dentaire_dr_boutaina_bouhaouita" : "",
  assetPrefix: isProd ? "/cabinet_dentaire_dr_boutaina_bouhaouita/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
