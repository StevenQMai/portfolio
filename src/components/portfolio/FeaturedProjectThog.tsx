"use client";

import React from "react";
import Image from "next/image";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";
import { thogBotFeatured } from "@/data/siteContent";

const FeaturedProjectThog: React.FC = () => {
  const { themeColors, darkMode } = usePortfolioTheme();
  const cardBg = darkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white shadow-sm";
  const border = darkMode ? "border-gray-800" : "border-gray-200";
  const muted = darkMode ? "text-gray-400" : "text-gray-600";
  const linkClasses = `${themeColors.primary} ${themeColors.primaryHover}`;

  return (
    <section className="mb-16 animate-fadeIn" aria-labelledby="discovery-heading">
      <div className="mb-8">
        <p
          className={`text-xs font-semibold uppercase tracking-widest mb-2 ${themeColors.primary}`}
        >
          {thogBotFeatured.sectionHeading}
        </p>
        <h2 id="discovery-heading" className="text-2xl sm:text-3xl font-bold font-['Playfair_Display']">
          In-depth project write-up
        </h2>
        <p className={`mt-3 leading-relaxed max-w-2xl ${muted}`}>
          {thogBotFeatured.sectionSubheading}
        </p>
      </div>

      <div className={`rounded-xl border overflow-hidden ${darkMode ? "border-gray-800" : "border-gray-200"}`}>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-56 md:h-72 w-full">
            <Image
              src={thogBotFeatured.heroImage}
              alt={thogBotFeatured.heroAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 24rem"
              priority
              quality={88}
            />
          </div>
          <div
            className={`relative h-56 md:h-72 w-full border-t md:border-t-0 md:border-l ${darkMode ? "border-gray-800" : "border-gray-200"}`}
          >
            <Image
              src={thogBotFeatured.secondaryImage}
              alt={thogBotFeatured.secondaryAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 24rem"
              quality={85}
            />
          </div>
        </div>
        <p className={`text-xs px-4 py-2 ${muted} border-b ${border}`}>
          <span className="font-medium text-inherit">Image credits: </span>
          Thog Bot avatar graphic — my own asset. Secondary image — my own screenshot.
          {/* <Link href={thogBotFeatured.secondaryCredit.url} className={`underline ${themeColors.primary}`}>
            {thogBotFeatured.secondaryCredit.label}
          </Link> */}
        </p>

        <div className={`p-6 md:p-8 ${cardBg}`}>
          <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display'] mb-4">
            {thogBotFeatured.title}
          </h3>
          <div className="space-y-4 leading-relaxed opacity-90 mb-8">
            {thogBotFeatured.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={`rounded-lg border ${border} p-4 mb-6`}>
            <h4 className={`text-base font-semibold mb-3 ${themeColors.primary}`}>Results &amp; impact</h4>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              {thogBotFeatured.impactBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
          <a
            href={thogBotFeatured.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-sm ${linkClasses} transition-all hover:translate-x-1`}
          >
            View on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectThog;
