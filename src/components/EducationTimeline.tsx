import React from 'react';
import Image from 'next/image';

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  description: string;
  logo?: string;
}

interface EducationTimelineProps {
  themeColors: {
    primaryBorder: string;
    accentBg: string;
    primary: string;
    accent: string;
  };
  timelinePointClasses: string;
  timelineTextClasses: string;
  darkMode: boolean;
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({ 
  themeColors, 
  timelinePointClasses, 
  timelineTextClasses,
  darkMode
}) => {
  const education: EducationItem[] = [
    {
      school: "Georgia Institute of Technology",
      degree: "Computer Engineering",
      period: "January 2025 - Present",
      description: "Currently pursuing a degree in Computer Engineering.",
      logo: "/images/logos/GT_logo.png"
    },
    {
      school: "Georgia State University",
      degree: "Computer Science",
      period: "August 2024 - December 2024",
      description: "Studied Computer Science for one semester.",
      logo: "/images/logos/GSU_logo.jpg"
    },
    {
      school: "Clayton State University",
      degree: "Computer Science",
      period: "August 2022 - May 2024",
      description: "Conducted research on hardware random number generator while pursuing Computer Science degree.",
      logo: "/images/logos/CSU_logo.png"
    }
  ];

  return (
    <div className="space-y-10">
      {education.map((edu, index) => (
        <div key={index} className={`border-l-2 pl-6 relative ${themeColors.primaryBorder}`}>
          {/* Diamond-shaped marker with even glow effect */}
          <div className="absolute left-[-10px] top-0 flex items-center justify-center">
            {/* Outer pulse animation */}
            <div className={`absolute size-6 animate-ping opacity-30 rotate-45 ${themeColors.primary}`}></div>
            
            {/* Main diamond shape with consistent glow using box-shadow */}
            <div 
              className={`size-5 rotate-45 transform ${darkMode ? 'bg-amber-400' : 'bg-violet-600'} z-10`}
              style={{
                boxShadow: darkMode 
                  ? '0 0 8px 2px rgba(251, 191, 36, 0.5)' 
                  : '0 0 8px 2px rgba(124, 58, 237, 0.5)'
              }}
            ></div>
            
            {/* Inner diamond shape */}
            <div 
              className={`absolute size-3 rotate-45 transform ${darkMode ? 'bg-amber-300' : 'bg-violet-500'} z-20`}
            ></div>
            
            {/* Center dot */}
            <div 
              className={`absolute size-1 rounded-full ${darkMode ? 'bg-white' : 'bg-white'} z-30`}
            ></div>
          </div>
          
          <div className="flex items-center gap-3 mb-2">
            {edu.logo && (
              <div className="size-10 shrink-0 rounded-full overflow-hidden border border-gray-700 bg-white/10">
                <Image 
                  src={edu.logo} 
                  alt={edu.school} 
                  width={192} 
                  height={192}
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
            <div>
              <h4 className="text-xl font-semibold leading-tight">{edu.degree}</h4>
              <p className="text-lg">{edu.school}</p>
            </div>
          </div>
          <p className={`text-sm ${timelineTextClasses} mb-3 pl-13`}>{edu.period}</p>
          <p className="opacity-80 pl-13">{edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;