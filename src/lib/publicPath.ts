/**
 * Prefix for static files in `public/` when the site uses a path base (GitHub Pages project site).
 * Set via next.config `env` from NEXT_GITHUB_PAGES_BASE_PATH at build time.
 */
export function publicAsset(path: string): string {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${prefix}${normalized}`;
}
