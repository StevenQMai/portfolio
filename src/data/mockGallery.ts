import { publicAsset } from "@/lib/publicPath";

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
    src: publicAsset("/images/gallery/me1.jpg"),
    width: 4032,
    height: 3024,
    title: "Me in recording studio",
    alt: "Mock gallery image: soft gradient sky over water",
  },
  {
    id: "2",
    src: publicAsset("/images/gallery/me2.jpg"),
    width: 800,
    height: 520,
    title: "My birthday",
    alt: "Mock gallery image: mountain ridge at dusk",
  },
  {
    id: "3",
    src: publicAsset("/images/gallery/me3.jpg"),
    width: 800,
    height: 520,
    title: "Childhood pic",
    alt: "Mock gallery image: narrow street with colored lights",
  },
  {
    id: "4",
    src: publicAsset("/images/gallery/me4.jpg"),
    width: 800,
    height: 520,
    title: "Beanie!!",
    alt: "Mock gallery image: wind-shaped sand dunes",
  },
  {
    id: "5",
    src: publicAsset("/images/gallery/me5.jpg"),
    width: 800,
    height: 520,
    title: "HS Graduation",
    alt: "Mock gallery image: trees disappearing in mist",
  },
];
