export interface LinkItem {
  name: string;
  url: string;
  icon?: string;
  /** Shown instead of raw mailto:/tel: text when set (e.g. formatted phone). */
  displayText?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  /** Use bullets for multi-line impact; otherwise a single paragraph. */
  description?: string;
  bullets?: string[];
  logo?: string;
}

export interface PersonalInfoData {
  name: string;
  title: string;
  /** School or employer line under the role (e.g. Georgia Tech). */
  institution: string;
  /** Short degree / graduation line (e.g. B.S. CE, expected Dec 2027). */
  degreeLine: string;
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