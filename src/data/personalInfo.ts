import type { PersonalInfoData } from "@/components/portfolio/types";

export const personalInfo: PersonalInfoData = {
  name: "Steven Mai",
  title: "Computer Engineering Student",
  education: "Georgia Institute of Technology",
  about:
    "I build reliable software—from Discord tooling and data dashboards to games and experiments at the hardware–software boundary—and I care about how those systems feel for real people.",
  avatar: "/images/profile/selfie_copy.jpg",
  links: [
    { name: "GitHub", url: "https://github.com/StevenQMai", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/steven-mai7/", icon: "linkedin" },
    { name: "Email", url: "mailto:smai34@gatech.edu", icon: "mail" },
  ],
  skills: [
    "Python",
    "Java",
    "JavaScript/TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "Tkinter",
    "PyGame",
    "Embedded systems",
  ],
  projects: [
    {
      title: "Thog Bot",
      description:
        "A feature-rich Discord bot with modular commands, integrations, and room to grow into AI-assisted workflows for student communities.",
      technologies: ["Python", "Discord.py", "Git", "APIs"],
      link: "https://github.com/StevenQMai/thogbot",
      image: "/images/projects/thog_bot_pfp.png",
      featured: true,
    },
    {
      title: "Plot Armor Dashboard",
      description:
        "A data-forward dashboard for exploring metrics and trends with a focus on clarity, responsive layout, and maintainable UI structure.",
      technologies: ["TypeScript", "React", "Data visualization"],
      link: "https://github.com/StevenQMai",
      image: "/images/projects/plot_armor_dashboard.png",
    },
    {
      title: "Nebula Demo",
      description:
        "An interactive demo exploring visual effects and game-feel prototypes—useful for iterating quickly on mechanics before committing to a full engine pipeline.",
      technologies: ["Python", "PyGame", "Game design"],
      link: "https://github.com/StevenQMai",
      image: "/images/projects/nebula_demo.png",
    },
    {
      title: "Zombies Prototype",
      description:
        "A fast-paced arcade-style prototype focused on collision systems, pacing, and readable on-screen feedback for players.",
      technologies: ["Python", "PyGame"],
      link: "https://github.com/StevenQMai",
      image: "/images/projects/zombies_demo.png",
    },
  ],
  experience: [
    {
      company: "Independent & coursework",
      position: "Software / tools developer",
      period: "2022 – Present",
      description:
        "Shipped personal tools and game prototypes, contributed to class projects spanning embedded concepts and full-stack apps, and maintained active GitHub repositories with clear structure and documentation habits that mirror professional workflows.",
    },
  ],
};
