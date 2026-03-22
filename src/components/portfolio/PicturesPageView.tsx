"use client";

import Image from "next/image";
import React from "react";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";
import { galleryPhotos } from "@/data/mockGallery";

const PicturesPageView: React.FC = () => {
  const { darkMode, themeColors } = usePortfolioTheme();

  return (
    <>
      <header className="mb-10 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display'] mb-3">
          Pictures
        </h1>
        <p className="text-lg leading-relaxed opacity-90 max-w-2xl">
          Scroll down—each image sticks while the next one slides over it, like a deck of prints.
          Add files under <code className="text-sm opacity-90">public/images/gallery/</code> and list them in{" "}
          <code className="text-sm opacity-90">src/data/mockGallery.ts</code>.
        </p>
      </header>

      <section aria-labelledby="pictures-stack-heading" className="mb-12">
        <h2
          id="pictures-stack-heading"
          className={`text-sm font-semibold uppercase tracking-widest mb-10 ${themeColors.primary}`}
        >
          Gallery
        </h2>

        <div className="relative mx-auto max-w-lg perspective-[1400px]">
          {galleryPhotos.map((photo, i) => (
            <div
              key={photo.id}
              className="pictures-stack-reveal sticky top-20 sm:top-24 mb-[min(72vh,26rem)] last:mb-32"
              style={{ zIndex: i + 1 }}
            >
              <figure
                className={`overflow-hidden rounded-3xl shadow-2xl ring-1 ${
                  darkMode ? "ring-white/10 shadow-black/50" : "ring-black/[0.06] shadow-gray-500/25"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full object-cover"
                  style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                  sizes="(max-width: 768px) 100vw, 32rem"
                  priority={i === 0}
                />
                <figcaption
                  className={`flex flex-col gap-0.5 px-4 py-3 sm:px-5 sm:py-4 ${
                    darkMode ? "bg-gray-950/95 text-gray-100" : "bg-white text-gray-800"
                  }`}
                >
                  <span className="text-sm font-semibold">{photo.title}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>

      <p className="text-center text-sm opacity-70 pb-8">
        Default entries use remote placeholders; switch <code className="text-xs opacity-90">src</code> to your
        paths under <code className="text-xs opacity-90">public/images/gallery/</code>.
      </p>
    </>
  );
};

export default PicturesPageView;
