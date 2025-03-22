import React from 'react';
import EducationTimeline from '../EducationTimeline';
import { PersonalInfoData, ThemeColors } from './types';

interface AboutSectionProps {
  personalInfo: PersonalInfoData;
  themeColors: ThemeColors;
  darkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ personalInfo, themeColors, darkMode }) => {
  const cardBgClasses = darkMode ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-white shadow-sm';
  const borderClasses = darkMode ? 'border-gray-800' : 'border-gray-200';
  const badgeBgClasses = `${themeColors.primaryBg} ${themeColors.primary}`;
  const timelinePointClasses = `${themeColors.accentBg} ring-4 ${darkMode ? 'ring-gray-900' : 'ring-white'}`;
  const timelineTextClasses = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <section className="mb-16 animate-fadeIn">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="inline-block size-2 rounded-full"></span>
        About Me
      </h3>
      <div className="grid grid-cols-1 gap-8">
        <div className={`p-6 rounded-xl ${cardBgClasses} border ${borderClasses}`}>
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l-9-5v9l9 5 9-5v-9l-9 5z" />
            </svg>
            Education
          </h4>
          <EducationTimeline
            themeColors={themeColors} 
            timelinePointClasses={timelinePointClasses} 
            timelineTextClasses={timelineTextClasses} 
            darkMode={darkMode}
          />
        </div>
        <div className={`p-6 rounded-xl ${cardBgClasses} border ${borderClasses}`}>
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Skills
          </h4>
          <div className="flex flex-wrap gap-2 pl-7">
            {personalInfo.skills.map((skill, index) => (
              <span 
                key={index} 
                className={`px-3 py-1 text-sm rounded-full ${badgeBgClasses} transition-all hover:scale-105`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 