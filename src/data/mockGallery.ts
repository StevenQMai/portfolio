export interface MockGalleryPhoto {
  id: string;
  seed: string;
  title: string;
  alt: string;
}

/** Placeholder photos (Picsum) — swap for your own assets later. */
export const mockGalleryPhotos: MockGalleryPhoto[] = [
  {
    id: "1",
    seed: "folio-aurora",
    title: "Aurora wash",
    alt: "Mock gallery image: soft gradient sky over water",
  },
  {
    id: "2",
    seed: "folio-ridge",
    title: "Ridge line",
    alt: "Mock gallery image: mountain ridge at dusk",
  },
  {
    id: "3",
    seed: "folio-neon",
    title: "Neon alley",
    alt: "Mock gallery image: narrow street with colored lights",
  },
  {
    id: "4",
    seed: "folio-dune",
    title: "Dune curve",
    alt: "Mock gallery image: wind-shaped sand dunes",
  },
  {
    id: "5",
    seed: "folio-fog",
    title: "Fog forest",
    alt: "Mock gallery image: trees disappearing in mist",
  },
  {
    id: "6",
    seed: "folio-grid",
    title: "Glass grid",
    alt: "Mock gallery image: geometric building facade",
  },
  {
    id: "7",
    seed: "folio-coast",
    title: "Coast break",
    alt: "Mock gallery image: waves against dark rocks",
  },
  {
    id: "8",
    seed: "folio-urban",
    title: "Urban stack",
    alt: "Mock gallery image: layered city rooftops",
  },
  {
    id: "9",
    seed: "folio-bloom",
    title: "Bloom field",
    alt: "Mock gallery image: wildflowers in soft focus",
  },
];

export function picsumSrc(seed: string, w: number, h: number): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}
