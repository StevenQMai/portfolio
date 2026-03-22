export interface GalleryPhoto {
  id: string;
  /**
   * URL for `next/image`: **not** a filesystem path — use a site path starting with `/`
   * (file `public/images/gallery/x.jpg` → `"/images/gallery/x.jpg"`). Prefer JPEG/WebP/PNG on the web; HEIC often fails in browsers.
   * Remote URLs need `images.remotePatterns` in `next.config.ts`.
   */
  src: string;
  width: number;
  height: number;
  title: string;
  alt: string;
}

/**
 * Gallery images: add files to `public/images/gallery/`, then list them here.
 * `width` / `height` should match the real pixel dimensions of each file (helps layout + Next.js Image).
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "1",
    src: "/images/gallery/me1.jpg",
    width: 4032,
    height: 3024,
    title: "Me in recording studio",
    alt: "Mock gallery image: soft gradient sky over water",
  },
  {
    id: "2",
    src: "https://picsum.photos/seed/folio-ridge/800/520",
    width: 800,
    height: 520,
    title: "Ridge line",
    alt: "Mock gallery image: mountain ridge at dusk",
  },
  {
    id: "3",
    src: "https://picsum.photos/seed/folio-neon/800/520",
    width: 800,
    height: 520,
    title: "Neon alley",
    alt: "Mock gallery image: narrow street with colored lights",
  },
  {
    id: "4",
    src: "https://picsum.photos/seed/folio-dune/800/520",
    width: 800,
    height: 520,
    title: "Dune curve",
    alt: "Mock gallery image: wind-shaped sand dunes",
  },
  {
    id: "5",
    src: "https://picsum.photos/seed/folio-fog/800/520",
    width: 800,
    height: 520,
    title: "Fog forest",
    alt: "Mock gallery image: trees disappearing in mist",
  },
  {
    id: "6",
    src: "https://picsum.photos/seed/folio-grid/800/520",
    width: 800,
    height: 520,
    title: "Glass grid",
    alt: "Mock gallery image: geometric building facade",
  },
  {
    id: "7",
    src: "https://picsum.photos/seed/folio-coast/800/520",
    width: 800,
    height: 520,
    title: "Coast break",
    alt: "Mock gallery image: waves against dark rocks",
  },
  {
    id: "8",
    src: "https://picsum.photos/seed/folio-urban/800/520",
    width: 800,
    height: 520,
    title: "Urban stack",
    alt: "Mock gallery image: layered city rooftops",
  },
  {
    id: "9",
    src: "https://picsum.photos/seed/folio-bloom/800/520",
    width: 800,
    height: 520,
    title: "Bloom field",
    alt: "Mock gallery image: wildflowers in soft focus",
  },
];
