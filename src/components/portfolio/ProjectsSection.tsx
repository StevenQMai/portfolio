import React from 'react';
import Image from 'next/image';
import { PersonalInfoData, ThemeColors } from './types';

interface ProjectsSectionProps {
  personalInfo: PersonalInfoData;
  themeColors: ThemeColors;
  darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ personalInfo, themeColors, darkMode }) => {
  const cardBgClasses = darkMode ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-white shadow-sm';
  const borderClasses = darkMode ? 'border-gray-800' : 'border-gray-200';
  const techBadgeClasses = darkMode ? 'bg-gray-700/70' : 'bg-gray-100';
  const linkClasses = `${themeColors.primary} ${themeColors.primaryHover}`;

  return (
    <section className="mb-16 animate-fadeIn">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="inline-block size-2 rounded-full"></span>
        Projects
      </h3>
      <div className="grid grid-cols-1 gap-8">
        {personalInfo.projects.map((project, index) => (
          <div key={index} className={`rounded-xl overflow-hidden border ${borderClasses} group transition-all hover:shadow-lg ${darkMode ? 'hover:shadow-violet-900/10' : 'hover:shadow-violet-300/30'}`}>
            {project.image && (
              <div className="h-48 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={192} 
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className={`p-6 ${cardBgClasses}`}>
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="opacity-80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className={`px-2 py-1 text-xs rounded ${techBadgeClasses}`}
                  >
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
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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