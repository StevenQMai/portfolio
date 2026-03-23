import type { NextConfig } from "next";

/**
 * GitHub Actions Pages workflow sets NEXT_GITHUB_PAGES_BASE_PATH=/repo-name so assets and
 * routes resolve under https://user.github.io/repo-name/. Vercel/local leave it unset.
 */
const ghPagesBase = process.env.NEXT_GITHUB_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: ghPagesBase,
  },
  ...(ghPagesBase
    ? {
        basePath: ghPagesBase,
        assetPrefix: ghPagesBase,
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
    ...(ghPagesBase ? { unoptimized: true } : {}),
  },
};

export default nextConfig;
