'use client';

import React, { useState, useEffect } from 'react';
import Navigation from './portfolio/Navigation';
import Header from './portfolio/Header';
import AboutSection from './portfolio/AboutSection';
import WorkSection from './portfolio/WorkSection';
import ProjectsSection from './portfolio/ProjectsSection';
import Footer from './portfolio/Footer';
import { PersonalInfoData, ActiveSection, ThemeColors } from './portfolio/types';

const Portfolio: React.FC = () => {
  const personalInfo: PersonalInfoData = {
    name: "Steven Mai",
    title: "Software Engineer",
    education: "Georgia Tech",
    about: "I'm a software engineer passionate about building impactful applications and solving complex problems. With a strong foundation in computer science currently at Georgia Tech, I specialize in Python and Java.",
    avatar: "/images/profile/selfie_copy.jpg",
    links: [
      { name: "GitHub", url: "https://github.com/StevenQMai", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/steven-mai7/", icon: "linkedin" },
      { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
      { name: "Email", url: "mailto:smai34@gatech.edu", icon: "mail" }
    ],
    skills: [
      "Python", "Java", "JavaScript/TypeScript", "React.js", "Next.js", 
      "Node.js", "Tailwind CSS", "Git", "Tkinter", "PyGame"
    ],
    projects: [
      {
        title: "Thog Bot (Under Development - March 2025)",
        description: "A feature-rich Discord bot with AI-powered chat assistance, music playback, study session management, and mini-games.",
        technologies: ["Python, Git"],
        link: "https://github.com/StevenQMai/thogbot",
        image: "/images/projects/thog_bot_pfp.png"
      },
      {
        title: "Undead Chase",
        description: "A 2D game where you must survive an endless wave of zombies for as long as possible by dodging and collecting healing power-ups. Watch your health bar, avoid the zombies, and stay alive. There\'s nowhere to hide.",
        technologies: ["Python, PyGame, Git"],
        link: "https://github.com/StevenQMai/Zombie-Dodge",
        image: "/images/projects/zombies_demo.png"
      },
      {
        title: "Nebula Rush",
        description: "A classic arcade-style game where the player controls a spaceship to navigate through space, avoiding and destroying asteroids. The asteroids increase in speed as the player continues to score.",
        technologies: ["Python, Git"],
        link: "https://github.com/StevenQMai/Nebula-Rush",
        image: "/images/projects/nebula_demo.png"
      }
    ],
    experience: []
  };
  
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<ActiveSection>('about');
  
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  };
  
  const themeColors: ThemeColors = {
    primary: darkMode ? 'text-amber-400' : 'text-violet-600',
    primaryHover: darkMode ? 'hover:text-amber-300' : 'hover:text-amber-700',
    primaryBg: darkMode ? 'bg-amber-900/20' : 'bg-violet-50',
    primaryBorder: darkMode ? 'border-amber-800' : 'border-violet-200',
    accent: darkMode ? 'text-amber-400' : 'text-amber-600',
    accentBg: darkMode ? 'bg-amber-900/20' : 'bg-violet-50',
    gradient: darkMode ? 'from-gray-900 to-gray-950' : 'from-gray-50 to-gray-100',
    socialIcon: darkMode ? 'text-amber-400 hover:text-amber-300' : 'text-violet-600 hover:text-violet-700',
  };
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Background gradient */}
      <div className={`fixed inset-0 bg-gradient-to-br ${themeColors.gradient} opacity-5 z-0`}></div>
      
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        themeColors={themeColors}
      />
      
      <main className="max-w-3xl mx-auto px-6 py-12 relative z-10">
        <Header
          personalInfo={personalInfo}
          themeColors={themeColors}
        />
        
        {activeSection === 'about' && (
          <AboutSection
            personalInfo={personalInfo}
            themeColors={themeColors}
            darkMode={darkMode}
          />
        )}
        
        {activeSection === 'work' && (
          <WorkSection
            personalInfo={personalInfo}
            themeColors={themeColors}
            darkMode={darkMode}
          />
        )}
        
        {activeSection === 'projects' && (
          <ProjectsSection
            personalInfo={personalInfo}
            themeColors={themeColors}
            darkMode={darkMode}
          />
        )}
      </main>
      
      <Footer
        personalInfo={personalInfo}
        themeColors={themeColors}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Portfolio;
