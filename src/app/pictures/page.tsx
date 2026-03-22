import type { Metadata } from "next";
import PicturesPageView from "@/components/portfolio/PicturesPageView";

export const metadata: Metadata = {
  title: "Pictures — Steven Mai",
  description:
    "Photo gallery: scrollable filmstrip and stacking image layout. Placeholder images for portfolio.",
};

export default function PicturesPage() {
  return <PicturesPageView />;
}
