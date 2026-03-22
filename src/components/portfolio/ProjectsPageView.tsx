"use client";

import React from "react";
import FeaturedProjectThog from "./FeaturedProjectThog";
import ProjectsSection from "./ProjectsSection";

const ProjectsPageView: React.FC = () => {
  return (
    <>
      <FeaturedProjectThog />
      <ProjectsSection />
    </>
  );
};

export default ProjectsPageView;
