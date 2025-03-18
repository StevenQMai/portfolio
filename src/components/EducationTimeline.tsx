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
  };
  timelinePointClasses: string;
  timelineTextClasses: string;
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({ 
  themeColors, 
  timelinePointClasses, 
  timelineTextClasses 
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
          <div className={`absolute left-[-9px] top-0 size-4 rounded-full ${timelinePointClasses}`}></div>
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