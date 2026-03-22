"use client";

import React from "react";
import Image from "next/image";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";

const ProjectsSection: React.FC = () => {
  const { personalInfo, themeColors, darkMode } = usePortfolioTheme();
  const cardBgClasses = darkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white shadow-sm";
  const techBadgeClasses = darkMode ? "bg-gray-700/70" : "bg-gray-100";
  const linkClasses = `${themeColors.primary} ${themeColors.primaryHover}`;
  const projectsToShow = personalInfo.projects.filter((p) => !p.featured);

  return (
    <section className="mb-16 animate-fadeIn">
      <div className="flex items-center gap-1 mb-8">
        <span className={`inline-block size-1.5 rounded-full ${themeColors.primary}`} />
        <h2 className="text-3xl font-bold font-['Playfair_Display']">More projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {projectsToShow.map((project, index) => (
          <div
            key={index}
            className={`rounded-xl border overflow-hidden ${
              darkMode ? "bg-gray-900/50 border-gray-800" : "bg-white/50 border-gray-200"
            } transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
          >
            {project.image && (
              <div className="w-full h-48 md:h-64 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 48rem"
                  priority={index < 2}
                />
              </div>
            )}
            <div className={`p-6 ${cardBgClasses}`}>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="opacity-80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className={`px-2 py-1 text-xs rounded ${techBadgeClasses}`}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
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
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
