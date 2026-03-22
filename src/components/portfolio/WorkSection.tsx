"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";

const WorkSection: React.FC = () => {
  const { personalInfo, themeColors, darkMode } = usePortfolioTheme();
  const cardBgClasses = darkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white shadow-sm";
  const borderClasses = darkMode ? "border-gray-800" : "border-gray-200";
  const timelinePointClasses = `${themeColors.accentBg} ring-4 ${darkMode ? "ring-gray-900" : "ring-white"}`;
  const timelineTextClasses = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <section className="mb-16 animate-fadeIn">
      <div className="flex items-center gap-1 mb-8">
        <span className={`inline-block size-1.5 rounded-full ${themeColors.primary}`} />
        <h1 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display']">Experience</h1>
      </div>

      {personalInfo.experience.length > 0 ? (
        <div className="space-y-10">
          {personalInfo.experience.map((exp, index) => (
            <div key={index} className={`border-l-2 pl-6 relative ${themeColors.primaryBorder}`}>
              <div className={`absolute left-[-9px] top-0 size-4 rounded-full ${timelinePointClasses}`} />
              <div className="flex items-center gap-3 mb-2">
                {exp.logo && (
                  <div className="size-10 shrink-0 rounded-full overflow-hidden border border-gray-700 bg-white/10">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-semibold leading-tight">{exp.position}</h2>
                  <p className="text-lg">{exp.company}</p>
                </div>
              </div>
              <p className={`text-sm ${timelineTextClasses} mb-3`}>{exp.period}</p>
              {exp.bullets && exp.bullets.length > 0 ? (
                <ul className="list-disc pl-5 space-y-2 opacity-85">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : (
                exp.description && <p className="opacity-80 whitespace-pre-line">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className={`p-8 rounded-xl ${cardBgClasses} border ${borderClasses} text-center`}>
          <svg
            className="size-12 mx-auto mb-4 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h2 className="text-xl font-semibold mb-2">Building experience</h2>
          <p className="opacity-70 max-w-md mx-auto">
            I am actively growing through coursework, independent projects, and collaboration. See the{" "}
            <Link href="/projects" className={`${themeColors.primary} underline`}>
              Projects
            </Link>{" "}
            page for what I have shipped recently.
          </p>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
