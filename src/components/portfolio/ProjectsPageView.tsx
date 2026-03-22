"use client";

import React from "react";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";
import FeaturedProjectThog from "./FeaturedProjectThog";
import ProjectsSection from "./ProjectsSection";

const ProjectsPageView: React.FC = () => {
  const { themeColors } = usePortfolioTheme();

  return (
    <>
      <header className="mb-12 animate-fadeIn">
        <h1 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display'] mb-4">
          Projects &amp; Portfolio
        </h1>
        <p className="text-lg leading-relaxed opacity-90 max-w-2xl">
          This page follows a clear structure: first, the{" "}
          <strong className="font-semibold text-inherit">Discovery project feature</strong>: a long-form
          technical overview with visuals and outcomes, then shorter summaries of additional builds.
        </p>
        <p className={`mt-4 text-sm font-medium ${themeColors.primary}`}>
          Navigation Order: Discovery feature → additional projects → GitHub for code.
        </p>
      </header>
      <FeaturedProjectThog />
      <ProjectsSection />
    </>
  );
};

export default ProjectsPageView;
