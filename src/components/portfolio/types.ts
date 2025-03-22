export interface LinkItem {
  name: string;
  url: string;
  icon?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  logo?: string;
}

export interface PersonalInfoData {
  name: string;
  title: string;
  education: string;
  about: string;
  links: LinkItem[];
  skills: string[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  avatar?: string;
}

export interface ThemeColors {
  primary: string;
  primaryHover: string;
  primaryBg: string;
  primaryBorder: string;
  accent: string;
  accentBg: string;
  gradient: string;
  socialIcon: string;
}

export type ActiveSection = 'about' | 'work' | 'projects'; 