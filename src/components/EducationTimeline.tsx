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

  // Timeline border color based on dark mode
  const timelineBorderColor = darkMode ? "border-amber-500" : themeColors.primaryBorder;

  return (
    <div className="space-y-10">
      {education.map((edu, index) => (
        <div key={index} className={`border-l-2 pl-10 ml-5 relative ${timelineBorderColor}`}>
          {/* Logo as timeline marker */}
          <div className="absolute left-[-22px] top-0">
            {edu.logo ? (
              <div className={`size-10 rounded-full overflow-hidden border-2 ${darkMode ? 'border-gray-800' : 'border-gray-200'} ${
                darkMode 
                  ? 'ring-2 ring-amber-400/30 bg-gray-900' 
                  : 'ring-2 ring-violet-400/30 bg-white'
              } flex items-center justify-center`}>
                <Image 
                  src={edu.logo} 
                  alt={edu.school} 
                  width={40} 
                  height={40}
                  className="w-full h-full object-contain p-1.5"
                />
              </div>
            ) : (
              // Fallback if no logo is available - also updated to amber in dark mode
              <div className={`size-6 rounded-full ${darkMode ? 'bg-amber-500' : timelinePointClasses}`}></div>
            )}
          </div>
          
          {/* Content */}
          <div className="flex items-start gap-3 mb-2 mt-1">
            <div>
              <h4 className="text-xl font-semibold leading-tight">{edu.degree}</h4>
              <p className="text-lg">{edu.school}</p>
            </div>
          </div>
          <p className={`text-sm ${timelineTextClasses} mb-3`}>{edu.period}</p>
          <p className="opacity-80">{edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;