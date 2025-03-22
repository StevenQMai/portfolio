import React from 'react';
import Image from 'next/image';
import { PersonalInfoData, ThemeColors } from './types';

interface WorkSectionProps {
  personalInfo: PersonalInfoData;
  themeColors: ThemeColors;
  darkMode: boolean;
}

const WorkSection: React.FC<WorkSectionProps> = ({ personalInfo, themeColors, darkMode }) => {
  const cardBgClasses = darkMode ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-white shadow-sm';
  const borderClasses = darkMode ? 'border-gray-800' : 'border-gray-200';
  const timelinePointClasses = `${themeColors.accentBg} ring-4 ${darkMode ? 'ring-gray-900' : 'ring-white'}`;
  const timelineTextClasses = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <section className="mb-16 animate-fadeIn">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="inline-block size-2 rounded-full"></span>
        Work Experience
      </h3>
      
      {personalInfo.experience.length > 0 ? (
        <div className="space-y-10">
          {personalInfo.experience.map((exp, index) => (
            <div key={index} className={`border-l-2 pl-6 relative ${themeColors.primaryBorder}`}>
              <div className={`absolute left-[-9px] top-0 size-4 rounded-full ${timelinePointClasses}`}></div>
              <div className="flex items-center gap-3 mb-2">
                {exp.logo && (
                  <div className="size-10 shrink-0 rounded-full overflow-hidden border border-gray-700 bg-white/10">
                    <Image 
                      src={exp.logo} 
                      alt={exp.company} 
                      width={192} 
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-xl font-semibold leading-tight">{exp.position}</h4>
                  <p className="text-lg">{exp.company}</p>
                </div>
              </div>
              <p className={`text-sm ${timelineTextClasses} mb-3 pl-13`}>{exp.period}</p>
              <p className="opacity-80 pl-13">{exp.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={`p-8 rounded-xl ${cardBgClasses} border ${borderClasses} text-center`}>
          <svg className="size-12 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h4 className="text-xl font-semibold mb-2">No work experience yet</h4>
          <p className="opacity-70 max-w-md mx-auto">
            I'm currently focused on my education and building projects. Check back soon for updates on my professional journey!
          </p>
        </div>
      )}
    </section>
  );
};

export default WorkSection; 