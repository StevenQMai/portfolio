"use client";

import Image from "next/image";
import React from "react";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";
import { mockGalleryPhotos, picsumSrc } from "@/data/mockGallery";

const FILMSTRIP = mockGalleryPhotos.slice(0, 6);
const STACK = mockGalleryPhotos.slice(3, 9);

function FullBleed({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 ${className}`}
    >
      {children}
    </div>
  );
}

const PicturesPageView: React.FC = () => {
  const { darkMode, themeColors } = usePortfolioTheme();
  const border = darkMode ? "border-gray-800" : "border-gray-200";
  const railBg = darkMode ? "bg-gray-900/40" : "bg-gray-100/80";

  return (
    <>
      <header className="mb-10 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display'] mb-3">
          Pictures
        </h1>
        <p className="text-lg leading-relaxed opacity-90 max-w-2xl">
          A sideways filmstrip you can drag or swipe, then a vertical stack where each frame
          pins and the next slides over it—mock photos for now, ready to swap for your own.
        </p>
      </header>

      <section aria-labelledby="pictures-filmstrip-heading" className="mb-20">
        <div className="flex items-baseline justify-between gap-4 mb-4 max-w-2xl">
          <h2 id="pictures-filmstrip-heading" className={`text-sm font-semibold uppercase tracking-widest ${themeColors.primary}`}>
            Filmstrip
          </h2>
          <p className="text-xs opacity-70 hidden sm:block">Scroll horizontally →</p>
        </div>

        <FullBleed>
          <div
            className={`pictures-filmstrip-mask border-y ${border} ${railBg} backdrop-blur-sm py-8 sm:py-10`}
          >
            <ul
              className="flex snap-x snap-mandatory gap-5 sm:gap-7 overflow-x-auto scroll-smooth pb-2 pt-1 px-4 sm:px-8 [scrollbar-width:thin]"
              style={{ scrollPaddingInline: "max(1rem, calc(50vw - 9rem))" }}
            >
              {FILMSTRIP.map((photo, i) => {
                const tilt = i % 2 === 0 ? "-rotate-2" : "rotate-2";
                return (
                  <li
                    key={photo.id}
                    className={`snap-center shrink-0 w-[min(78vw,280px)] sm:w-[300px] ${tilt} transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]`}
                  >
                    <figure
                      className={`overflow-hidden rounded-2xl shadow-xl ring-1 ${
                        darkMode ? "ring-white/10 shadow-black/40" : "ring-black/5 shadow-gray-400/30"
                      }`}
                    >
                      <Image
                        src={picsumSrc(photo.seed, 600, 750)}
                        alt={photo.alt}
                        width={600}
                        height={750}
                        className="aspect-[4/5] w-full object-cover"
                        sizes="(max-width: 640px) 78vw, 300px"
                        priority={i < 2}
                      />
                      <figcaption
                        className={`px-3 py-2 text-xs font-medium ${
                          darkMode ? "bg-gray-950/90 text-gray-200" : "bg-white/95 text-gray-700"
                        }`}
                      >
                        {photo.title}
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>
        </FullBleed>
      </section>

      <section aria-labelledby="pictures-stack-heading" className="mb-12">
        <h2 id="pictures-stack-heading" className={`text-sm font-semibold uppercase tracking-widest mb-2 ${themeColors.primary}`}>
          Stack scroll
        </h2>
        <p className="text-base opacity-90 mb-10 max-w-2xl">
          Keep scrolling down—each image sticks while the next one covers it, so the gallery
          feels like a deck of prints.
        </p>

        <div className="relative mx-auto max-w-lg perspective-[1400px]">
          {STACK.map((photo, i) => (
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
                  src={picsumSrc(photo.seed, 800, 520)}
                  alt={photo.alt}
                  width={800}
                  height={520}
                  className="aspect-[800/520] w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 32rem"
                />
                <figcaption
                  className={`flex flex-col gap-0.5 px-4 py-3 sm:px-5 sm:py-4 ${
                    darkMode ? "bg-gray-950/95 text-gray-100" : "bg-white text-gray-800"
                  }`}
                >
                  <span className="text-sm font-semibold">{photo.title}</span>
                  <span className="text-xs opacity-75">Mock image · replace with your shot</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>

      <p className="text-center text-sm opacity-70 pb-8">
        Photos are placeholders from{" "}
        <a
          href="https://picsum.photos"
          className={`underline-offset-2 hover:underline ${themeColors.primary}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Picsum
        </a>
        ; swap URLs in <code className="text-xs opacity-90">src/data/mockGallery.ts</code>.
      </p>
    </>
  );
};

export default PicturesPageView;
