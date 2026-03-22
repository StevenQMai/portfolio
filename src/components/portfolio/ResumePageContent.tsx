"use client";

import React from "react";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";
import { resumeSections } from "@/data/siteContent";

const ResumePageContent: React.FC = () => {
  const { themeColors, darkMode } = usePortfolioTheme();
  const cardBg = darkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white shadow-sm";
  const border = darkMode ? "border-gray-800" : "border-gray-200";

  return (
    <section className="mb-16 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-1">
          <span className={`inline-block size-1.5 rounded-full ${themeColors.primary}`} />
          <h1 className="text-3xl font-bold font-['Playfair_Display']">Résumé</h1>
        </div>
        <a
          href="/resume.pdf"
          download
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border text-sm font-medium transition-all hover:scale-[1.02] ${border} ${themeColors.primary}`}
        >
          Download PDF
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>

      <div className={`p-6 md:p-8 rounded-xl border ${cardBg} ${border} space-y-8 leading-relaxed`}>
        <header>
          <h2 className="text-2xl font-bold">{resumeSections.headline}</h2>
          <p className="opacity-80 mt-2 text-sm md:text-base">{resumeSections.contactLine}</p>
        </header>

        <div>
          <h3 className={`text-lg font-semibold mb-3 ${themeColors.primary}`}>Education</h3>
          <ul className="space-y-3">
            {resumeSections.education.map((e, i) => (
              <li key={i}>
                <span className="font-medium">{e.school}</span>
                <span className="opacity-80"> — {e.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={`text-lg font-semibold mb-3 ${themeColors.primary}`}>Skills</h3>
          <p className="opacity-90">{resumeSections.skillsSummary}</p>
        </div>

        <div>
          <h3 className={`text-lg font-semibold mb-3 ${themeColors.primary}`}>Projects</h3>
          <ul className="list-disc pl-5 space-y-2 opacity-90">
            {resumeSections.projects.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={`text-lg font-semibold mb-3 ${themeColors.primary}`}>Experience</h3>
          <ul className="list-disc pl-5 space-y-2 opacity-90">
            {resumeSections.experience.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>

        <p className="text-sm opacity-70">
          This on-page version summarizes the same material as the PDF. If anything differs, treat the
          PDF as the canonical export you can attach to applications.
        </p>
      </div>
    </section>
  );
};

export default ResumePageContent;
