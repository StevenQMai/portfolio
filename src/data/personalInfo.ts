import type { PersonalInfoData } from "@/components/portfolio/types";
import { workExperience } from "@/data/siteContent";

export const personalInfo: PersonalInfoData = {
  name: "Steven Mai",
  title: "Computer Engineering Student",
  institution: "Georgia Institute of Technology",
  degreeLine: "B.S. CE, expected Dec 2027",
  about:
    "Computer Engineering student at Georgia Tech (expected December 2027). I lead engineering for GT Web Dev’s campus platform, build data pipelines in GT VIP for voice-analysis research, and ship user-facing products—from Plot Armor (Chrome extension) and SpendWise (Android) to HarmonyAPI (HackGT full-stack). Earlier, I interned at Clayton State on a photon-based hardware RNG (1st place, 2024 CIMS Symposium).",
  avatar: "/images/profile/selfie_copy.jpg",
  links: [
    { name: "Phone", url: "tel:+14703578505", displayText: "470-357-8505" },
    { name: "Email", url: "mailto:smai34@gatech.edu", icon: "mail" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/steven-mai7/", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/StevenQMai", icon: "github" },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C",
    "C++",
    "SQL",
    "HTML/CSS",
    "RISC-V",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Flask",
    "FastAPI",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Docker",
    "Git",
    "CI/CD",
    "AWS S3",
    "REST APIs",
    "JUnit",
  ],
  projects: [
    {
      title: "Thog Bot",
      description:
        "Discord bot with modular commands, async-friendly structure, and documented setup—practice in API integration and community tooling.",
      technologies: ["Python", "Discord.py", "Git"],
      link: "https://github.com/StevenQMai/thogbot",
      image: "/images/projects/thog_bot_pfp.png",
      featured: true,
    },
    {
      title: "Plot Armor",
      description:
        "Chrome extension with hybrid AI spoiler detection (100+ users), Firebase backend at scale, and a popup UX tuned for daily use.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Groq LLM"],
      link: "https://github.com/StevenQMai",
      image: "/images/projects/plot_armor_dashboard.png",
    },
    {
      title: "SpendWise",
      description:
        "Android app with Firebase auth, budgets, savings circles, real-time chat, and an AI financial assistant—MVVM and singleton managers for stable data access.",
      technologies: ["Java", "Android", "Firebase", "MVVM"],
      link: "https://github.com/StevenQMai",
    },
    {
      title: "HarmonyAPI",
      description:
        "HackGT medical search platform: Groq LLM semantic search, Dockerized Flask + PostgreSQL, TypeScript/React front end—built end-to-end in under 36 hours.",
      technologies: ["Python", "Flask", "React", "TypeScript", "PostgreSQL", "Docker", "Groq LLM"],
      link: "https://github.com/StevenQMai",
    },
  ],
  experience: workExperience,
};
