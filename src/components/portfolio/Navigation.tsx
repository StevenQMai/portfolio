import React from 'react';
import { ActiveSection, ThemeColors } from './types';

interface NavigationProps {
  activeSection: ActiveSection;
  setActiveSection: (section: ActiveSection) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  themeColors: ThemeColors;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
  darkMode,
  toggleDarkMode,
  themeColors
}) => {
  const navClasses = darkMode ? 'bg-gray-950/80' : 'bg-white/80';
  const borderClasses = darkMode ? 'border-gray-800' : 'border-gray-200';

  return (
    <nav className={`sticky top-0 z-50 ${navClasses} py-4 border-b ${borderClasses}`}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            {(['about', 'work', 'projects'] as ActiveSection[]).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-sm ${activeSection === section ? `font-semibold ${themeColors.primary}` : 'opacity-70 hover:opacity-100'} transition-all duration-300 hover:scale-105`}
              >
                {section}
              </button>
            ))}
          </div>
          <button
            onClick={toggleDarkMode}
            className={`${themeColors.primary} cursor-pointer transition-all duration-300 hover:scale-110`}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 