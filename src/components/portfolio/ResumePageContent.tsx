"use client";

import React from "react";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";
import { resumeSections } from "@/data/siteContent";

const ResumePageContent: React.FC = () => {
  const { themeColors, darkMode } = usePortfolioTheme();
  const cardBg = darkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white shadow-sm";
  const border = darkMode ? "border-gray-800" : "border-gray-200";

  const edu = resumeSections.education;

  return (
    <section className="mb-16 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-1">
          <span className={`inline-block size-1.5 rounded-full ${themeColors.primary}`} />
          <h1 className="text-3xl font-bold font-['Playfair_Display']">Resume</h1>
        </div>
        <a
          href="/resume.pdf"
          download
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border text-sm font-medium transition-all hover:scale-[1.02] ${border} ${themeColors.primary}`}
          aria-label="Download resume as PDF"
        >
          Download resume (PDF)
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
          <p className="text-lg opacity-90 mt-1">{resumeSections.subhead}</p>
          <ul className="list-disc pl-5 mt-4 space-y-2 opacity-90 text-sm md:text-base">
            {resumeSections.contactItems.map((item) => {
              const external = item.href.startsWith("http");
              return (
                <li key={item.label}>
                  <span className="font-medium">{item.label}: </span>
                  <a
                    href={item.href}
                    className={`${themeColors.primary} ${themeColors.primaryHover} underline-offset-2 hover:underline`}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.display}
                  </a>
                </li>
              );
            })}
          </ul>
        </header>

        <div>
          <h3 className={`text-lg font-semibold mb-3 ${themeColors.primary}`}>Education</h3>
          <p className="font-medium">
            {edu.school} <span className="font-normal opacity-90">| {edu.degree}</span>
          </p>
          <p className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{edu.expected}</p>
          <p className="text-sm font-medium mt-3 mb-2">Relevant coursework</p>
          <ul className="list-disc pl-5 space-y-1 opacity-90 text-sm md:text-base">
            {edu.coursework.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={`text-lg font-semibold mb-3 ${themeColors.primary}`}>Skills</h3>
          <div className="space-y-3 opacity-90 text-sm md:text-base">
            <p>
              <span className="font-semibold">Languages: </span>
              {resumeSections.skills.languages}
            </p>
            <p>
              <span className="font-semibold">Tools/Databases: </span>
              {resumeSections.skills.tools}
            </p>
            <p>
              <span className="font-semibold">Libraries/Frameworks: </span>
              {resumeSections.skills.frameworks}
            </p>
          </div>
        </div>

        <div>
          <h3 className={`text-lg font-semibold mb-3 ${themeColors.primary}`}>Experience</h3>
          <div className="space-y-8">
            {resumeSections.experience.map((job, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <p className="font-semibold">
                    {job.position} <span className="font-normal opacity-90">| {job.company}</span>
                  </p>
                  <p className={`text-sm shrink-0 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {job.period}
                  </p>
                </div>
                {job.bullets && (
                  <ul className="list-disc pl-5 space-y-2 mt-3 opacity-90 text-sm md:text-base">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-lg font-semibold mb-3 ${themeColors.primary}`}>Projects</h3>
          <div className="space-y-8">
            {resumeSections.projects.map((proj) => (
              <div key={proj.name}>
                <p className="font-semibold">
                  {proj.name}{" "}
                  <span className="font-normal italic opacity-85 text-sm">| {proj.stack}</span>
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3 opacity-90 text-sm md:text-base">
                  {proj.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-lg font-semibold mb-3 ${themeColors.primary}`}>
            Certifications &amp; accomplishments
          </h3>
          <ul className="list-disc pl-5 space-y-2 opacity-90 text-sm md:text-base">
            {resumeSections.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <p
          className={`text-sm opacity-90 pt-2 border-t ${darkMode ? "border-gray-600/50" : "border-gray-300"}`}
        >
          This page mirrors my LaTeX resume. If anything differs from the PDF, treat the downloaded file as
          the canonical version for applications.
        </p>
      </div>
    </section>
  );
};

export default ResumePageContent;
