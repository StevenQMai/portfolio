"use client";

import React from "react";
import Link from "next/link";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";
import Header from "./Header";
import { welcomeBullets } from "@/data/siteContent";

const HomeView: React.FC = () => {
  const { personalInfo, themeColors, darkMode } = usePortfolioTheme();
  const cardBg = darkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white shadow-sm";
  const border = darkMode ? "border-gray-800" : "border-gray-200";

  return (
    <>
      <Header personalInfo={personalInfo} themeColors={themeColors} darkMode={darkMode} />

      <section className={`mb-16 p-6 rounded-xl border ${cardBg} ${border} animate-fadeIn`}>
        <div className="flex items-center gap-1 mb-4">
          <span className={`inline-block size-1.5 rounded-full ${themeColors.primary}`} />
          <h2 className="text-2xl font-bold font-['Playfair_Display']">Welcome</h2>
        </div>
        <p className="text-lg opacity-90 mb-6 leading-relaxed">
          Thanks for visiting—this site is my home on the web for academics, projects, and the story
          behind how I work.
        </p>
        <ul className="space-y-4 opacity-90 leading-relaxed list-none">
          {welcomeBullets.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className={`mt-1.5 size-2 shrink-0 rounded-full ${themeColors.primaryBg} ${themeColors.primary}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 mt-8 justify-center sm:justify-start">
          <Link
            href="/about"
            className={`px-4 py-2 rounded-md text-sm font-medium border ${border} ${themeColors.primary} hover:opacity-90 transition-opacity`}
          >
            Full biography
          </Link>
          <Link
            href="/projects"
            className={`px-4 py-2 rounded-md text-sm font-medium border ${border} ${themeColors.primary} hover:opacity-90 transition-opacity`}
          >
            Projects &amp; Discovery feature
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-md text-sm font-medium border ${border} ${themeColors.primary} hover:opacity-90 transition-opacity`}
          >
            Contact
          </Link>
          <Link
            href="/career-goals"
            className={`px-4 py-2 rounded-md text-sm font-medium border ${border} ${themeColors.primary} hover:opacity-90 transition-opacity`}
          >
            Career goals
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeView;
