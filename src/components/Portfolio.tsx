'use client';

import React, { useState, useEffect, JSX } from 'react';
// import Link from 'next/link';
// import type { ReactNode } from 'react';
import EducationTimeline from './EducationTimeline';
import Image from 'next/image';

interface LinkItem {
  name: string;
  url: string;
  icon?: string; // Optional icon identifier
}

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string; // Optional project image
}

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  logo?: string; // Optional company logo
}

interface PersonalInfoData {
  name: string;
  title: string;
  education: string;
  about: string;
  links: LinkItem[];
  skills: string[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  avatar?: string; // Optional profile image
}

const Portfolio: React.FC = () => {
  const personalInfo: PersonalInfoData = {
    name: "Steven Mai",
    title: "Software Engineer",
    education: "Georgia Tech",
    about: "I'm a software engineer passionate about building impactful applications and solving complex problems. With a strong foundation in computer science currently at Georgia Tech, I specialize in Python and Java.",
    avatar: "/images/profile/selfie_copy.jpg", // Placeholder for profile image
    links: [
      { name: "GitHub", url: "https://github.com/StevenQMai", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/steven-mai7/", icon: "linkedin" },
      { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
      { name: "Email", url: "smai34@gatech.edu", icon: "mail" }
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
    // Empty experience array - ready to be populated with future work experiences
    experience: []
  };
  
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<'about' | 'work' | 'projects'>('about');
  
  useEffect(() => {
    // Set initial dark mode based on user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
  // Apply the appropriate class to the HTML element
    if (prefersDark) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }, []);

  // Update the toggleDarkMode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  };
  
  // Theme colors - more vibrant options for dark mode
  const themeColors = {
    primary: darkMode ? 'text-amber-400' : 'text-violet-600',
    primaryHover: darkMode ? 'hover:text-amber-300' : 'hover:text-amber-700',
    primaryBg: darkMode ? 'bg-amber-900/20' : 'bg-violet-50',
    primaryBorder: darkMode ? 'border-amber-800' : 'border-violet-200',
    accent: darkMode ? 'text-amber-400' : 'text-amber-600',
    accentBg: darkMode ? 'bg-amber-900/20' : 'bg-violet-50',
    gradient: darkMode ? 'from-gray-900 to-gray-950' : 'from-gray-50 to-gray-100',
    socialIcon: darkMode ? 'text-amber-400 hover:text-amber-300' : 'text-violet-600 hover:text-violet-700', // Added for social icons
  };
  
  // Updated Tailwind v4 classes with theme colors
  const navClasses = darkMode ? 'bg-gray-900/90 backdrop-blur supports-backdrop-blur:bg-gray-900/80' : 'bg-white/90 backdrop-blur supports-backdrop-blur:bg-white/80';
  const borderClasses = darkMode ? 'border-gray-800' : 'border-gray-200';
  const footerBorderClasses = darkMode ? 'border-gray-800' : 'border-gray-200';
  const cardBgClasses = darkMode ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-white shadow-sm';
  const badgeBgClasses = `${themeColors.primaryBg} ${themeColors.primary}`;
  const techBadgeClasses = darkMode ? 'bg-gray-700/70' : 'bg-gray-100';
  const timelinePointClasses = `${themeColors.accentBg} ring-4 ${darkMode ? 'ring-gray-900' : 'ring-white'}`;
  const timelineTextClasses = darkMode ? 'text-gray-400' : 'text-gray-600';
  const linkClasses = `${themeColors.primary} ${themeColors.primaryHover}`;
  
  // SVG Icons
  const socialIcons: Record<string, JSX.Element> = {
    github: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.84 21.49C9.34 21.58 9.52 21.27 9.52 21C9.52 20.76 9.512 20.062 9.508 19.258C6.726 19.858 6.14 17.92 6.14 17.92C5.684 16.772 5.029 16.465 5.029 16.465C4.121 15.846 5.098 15.86 5.098 15.86C6.101 15.93 6.628 16.888 6.628 16.888C7.52 18.45 8.976 17.968 9.54 17.708C9.63 17.085 9.89 16.648 10.17 16.418C7.976 16.188 5.656 15.368 5.656 11.668C5.656 10.61 6.046 9.748 6.646 9.078C6.546 8.828 6.206 7.756 6.746 6.32C6.746 6.32 7.586 6.05 9.506 7.4C10.296 7.18 11.156 7.07 12.006 7.07C12.856 7.07 13.716 7.18 14.506 7.4C16.426 6.05 17.266 6.32 17.266 6.32C17.806 7.756 17.466 8.828 17.366 9.078C17.966 9.748 18.356 10.61 18.356 11.668C18.356 15.378 16.026 16.178 13.826 16.408C14.186 16.698 14.506 17.268 14.506 18.138C14.506 19.358 14.496 20.668 14.496 21C14.496 21.27 14.676 21.58 15.186 21.49C19.156 20.167 22.016 16.418 22.016 12C22.016 6.477 17.536 2 12.016 2H12Z"/>
      </svg>
    ),
    linkedin: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"/>
      </svg>
    ),
    mail: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3H21C21.5304 3 22.0391 3.21071 22.4142 3.58579C22.7893 3.96086 23 4.46957 23 5V19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3ZM5 7V9H19V7H5ZM5 11V13H19V11H5ZM5 15V17H13V15H5Z"/>
      </svg>
    )
  };
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Background gradient */}
      <div className={`fixed inset-0 bg-gradient-to-br ${themeColors.gradient} opacity-5 z-0`}></div>
      
      {/* Navigation - now centered with brochure-style margins */}
      <nav className={`sticky top-0 z-50 ${navClasses} py-4 border-b ${borderClasses}`}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Left side with navigation buttons */}
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setActiveSection('about')}
                className={`text-sm ${activeSection === 'about' ? `font-semibold ${themeColors.primary}` : 'opacity-70 hover:opacity-100'} transition cursor-pointer`}
              >
                about
              </button>
              <button 
                onClick={() => setActiveSection('work')}
                className={`text-sm ${activeSection === 'work' ? `font-semibold ${themeColors.primary}` : 'opacity-70 hover:opacity-100'} transition cursor-pointer`}
              >
                work
              </button>
              <button 
                onClick={() => setActiveSection('projects')}
                className={`text-sm ${activeSection === 'projects' ? `font-semibold ${themeColors.primary}` : 'opacity-70 hover:opacity-100'} transition cursor-pointer`}
              >
                projects
              </button>
            </div>
            
            {/* Right side with dark mode button */}
            <button 
            onClick={toggleDarkMode} 
            className={`${themeColors.primary} cursor-pointer`}>
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
      
      {/* Main Content - now with brochure-style layout */}
      <main className="max-w-3xl mx-auto px-6 py-12 relative z-10">
        {/* Header with Avatar */}
        <div className="mb-16 flex justify-between items-start gap-12"> {/* Added gap-12 here */}
            <div className="max-w-xl"> {/* Added max-width to constrain text content */}
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {personalInfo.name} <span className="inline-block animate-wave">👋</span>
                </h1>
                <p className="text-xl opacity-80 mb-6">
                    {personalInfo.title} at {personalInfo.education}
                </p>
                <p className="text-lg opacity-80 mb-8">
                    {personalInfo.about}
                </p>
            
            {/* Resume button and social links */}
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md border flex items-center gap-2 transition-all hover:scale-105 bg-white/5 border-gray-700"
              >
                  Resume
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
              </a>
              {personalInfo.links
                  .filter(link => link.icon && socialIcons[link.icon]) 
                  .map((link, index) => (
                  <a 
                      key={index} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${themeColors.socialIcon} transition-colors`}
                  >
                      {link.icon && socialIcons[link.icon]}
                  </a>
                  ))}
              </div>
          </div>
          
          {/* Avatar on the right */}
          {personalInfo.avatar && (
          <div className="hidden md:block shrink-0">
            <div className={`size-48 rounded-xl overflow-hidden border-4 ${
              darkMode 
                ? 'border-amber-400 ring-2 ring-amber-400/20 ring-offset-2 ring-offset-gray-950' 
                : 'border-violet-400 ring-2 ring-violet-400/20 ring-offset-2 ring-offset-gray-50'
            } transition-all duration-300`}>
              <Image 
                src={personalInfo.avatar} 
                alt={personalInfo.name} 
                width={192} 
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
        
        {/* About Section */}
        {activeSection === 'about' && (
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
        )}
        
        {/* Work Experience Section */}
        {activeSection === 'work' && (
          <section className="mb-16 animate-fadeIn">
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-2`}>
              <span className={`inline-block size-2 rounded-full`}></span>
              Work Experience
            </h3>
            
            {/* Check if there are any work experiences to display */}
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
              // Displayed placeholder message when there are no work experiences
              <div className={`p-8 rounded-xl ${cardBgClasses} border ${borderClasses} text-center`}>
                <svg className="size-12 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h4 className="text-xl font-semibold mb-2">No work experience yet</h4>
                <p className="opacity-70 max-w-md mx-auto">
                  {`I'm currently focused on my education and building projects. Check back soon for updates on my professional journey!`}
                </p>
              </div>
            )}
            
            {/* How to add work experience - comment section for easy updating */}
            {/* 
              TO ADD WORK EXPERIENCE:
              Update the personalInfo.experience array with your work experiences.
              Example format:
              
              experience: [
                {
                  company: "Company Name",
                  position: "Position Title",
                  period: "Start Date - End Date",
                  description: "Description of your role and accomplishments...",
                  logo: "/path/to/company-logo.png" // Optional
                },
                // (Hopefully) add future work experiences as needed
              ]
            */}
          </section>
        )}
        
        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="mb-16 animate-fadeIn">
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-2 `}>
              <span className={`inline-block size-2 rounded-full `}></span>
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
        )}
      </main>
      
      {/* Footer - now with brochure-style layout */}
      <footer className={`py-8 border-t ${footerBorderClasses} relative z-10`}>
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70 mb-4 md:mb-0">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {personalInfo.links.slice(0, 3).map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition ${themeColors.socialIcon}`}
              >
                {link.icon && socialIcons[link.icon]}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
