import React, { JSX } from 'react';
import Image from 'next/image';
import { PersonalInfoData, ThemeColors } from './types';

interface HeaderProps {
  personalInfo: PersonalInfoData;
  themeColors: ThemeColors;
}

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

const Header: React.FC<HeaderProps> = ({ personalInfo, themeColors }) => {
  return (
    <div className="mb-16 flex justify-between items-start gap-12">
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {personalInfo.name} <span className="inline-block animate-wave">👋</span>
        </h1>
        <p className="text-xl opacity-80 mb-6">
          {personalInfo.title} at {personalInfo.education}
        </p>
        <p className="text-lg opacity-80 mb-8">
          {personalInfo.about}
        </p>
        
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
      
      {personalInfo.avatar && (
        <div className="hidden md:block shrink-0">
          <div className={`size-48 rounded-xl overflow-hidden border-4 ${
            themeColors.primaryBorder
          } transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.3)] dark:shadow-[0_0_15px_rgba(245,158,11,0.2)]`}>
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
  );
};

export default Header; 