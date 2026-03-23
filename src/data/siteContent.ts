import type { ExperienceItem } from "@/components/portfolio/types";
import { publicAsset } from "@/lib/publicPath";

/** Shared with Experience page and on-site resume (aligned with LaTeX resume). */
export const workExperience: ExperienceItem[] = [
  {
    company: "GT Web Dev",
    position: "Software Lead",
    period: "Jan 2026 – Present",
    bullets: [
      "Led a 9-engineer team using pod-based sprints and CI/CD automation to launch a campus event platform, driving 60% weekly engagement across 150+ beta users.",
      "Architected a Next.js/Django platform with JWT auth and 10+ REST endpoints, supporting 300+ live events.",
      "Integrated PostgreSQL for robust data modeling to reduce API response times by 40%, ensuring platform stability.",
    ],
  },
  {
    company: "GT VIP",
    position: "Data Science Intern",
    period: "Jan 2026 – Present",
    bullets: [
      "Built Python scripts to automate pre-processing and labeling of 40+ hours of human and AI voice data.",
      "Developed pipelines to extract pitch, cadence, and spectral data for large-scale emotional tonality analysis.",
      "Implemented statistical workflows to quantify recognition accuracy between human and AI-generated voices.",
    ],
  },
  {
    company: "Clayton State University",
    position: "Software Engineer Intern",
    period: "Jan 2024 – May 2024",
    bullets: [
      "Designed and implemented a photon-based hardware random number generator to communicate with optical hardware, enabling automated data acquisition and statistical entropy validation.",
      "Built a Python-based data processing pipeline to analyze 1,000+ photon samples, improving validation accuracy by 25% and reducing runtime by 15% through optimized data structures and batch processing.",
      "Awarded 1st place at the Clayton State University 2024 CIMS Symposium.",
    ],
  },
];

export interface ResumeProjectBlock {
  name: string;
  stack: string;
  bullets: string[];
}

/** Long-form copy for portfolio pages (word counts verified during content review). */

export const welcomeBullets = [
  "I'm a CE major at Georgia Tech (graduating December 2027). These days I'm leading software for GT Web Dev, digging into voice data with GT VIP, and building things people actually use: Plot Armor, SpendWise, hackathon full stacks, the whole mix.",
  "I got started in Georgia messing with a photon-based random number generator at Clayton State (somehow that turned into 1st place at the 2024 CIMS Symposium), did a semester at Georgia State, and landed at Tech. I've liked tying hardware, messy data, and UI polish together ever since.",
  "I spend a lot of time in TypeScript and React, Python for data work, and whatever makes the backend behave: JWT, Postgres, CI/CD, APIs that don't fall over when someone actually clicks around.",
  "If you're hiring, want to collaborate, or just want to talk shop, I'm glad you're here. Hit Contact for my number and email, Resume for the formal version, Projects for the long write-ups and demos, and Career Goals if you're curious where my head's at.",
];

export const biographyParagraphs = [
  "I grew up in Georgia and got into computer engineering through weird hardware problems. My first big one was a photon-based random number generator at Clayton State: bench experiments, Python pipelines, arguing about statistics in write-ups, repeat. That project took 1st at the 2024 CIMS Symposium, and it kind of stuck as my default mode (measure, document, iterate, try not to guess).",
  "I did a semester at Georgia State, then transferred to Tech for a B.S. in CE (December 2027). Now I'm usually split between big-picture systems and shipping: leading GT Web Dev on a Next.js/Django campus app with JWT and Postgres, and doing data science in GT VIP on voice datasets in Python. On the side, Plot Armor (Chrome, spoiler blocking) and SpendWise (Android, Firebase, MVVM) keep me honest about real users and real bugs.",
  "Away from the keyboard I listen to a lot of music, play games, and hang out with friends. That stuff bleeds into work in small ways: how errors read, how fast a screen feels, when something is too clever.",
  "I'm happiest when I own a slice of the stack end to end: sprints and CI/CD, SQL and APIs, and the parts of the UI people actually tap. I'm looking for roles where I can go deeper on backend and platforms without losing sight of why the product exists.",
];

export const careerVision =
  "Near term, I want a software engineering internship or new-grad role where I ship production features, learn from strong code review, and grow on teams that care about reliability and measurable user impact. Long term, I want to lead software that thousands rely on—balancing observability, performance, and UX—while still writing code and mentoring others.";

export const careerMilestones = [
  {
    timeframe: "2026 – Dec 2027",
    title: "Finish strong at Georgia Tech",
    description:
      "Complete the B.S. in Computer Engineering while scaling GT Web Dev’s platform and deepening the VIP data-science contribution—using both as proof points for recruiting and technical depth.",
  },
  {
    timeframe: "2027 – 2028",
    title: "Launch post-grad career",
    description:
      "Convert internship and project experience into a full-time software role (full-stack or backend-leaning), with clear ownership of features, on-call or reliability practices where applicable, and a habit of shipping with metrics.",
  },
  {
    timeframe: "2028 – 2032",
    title: "Specialize with impact",
    description:
      "Go deeper in a chosen lane—likely distributed systems, data platforms, or developer tooling—with security, performance tuning, and cross-team design work as regular responsibilities.",
  },
  {
    timeframe: "2032+",
    title: "Lead without leaving the keyboard",
    description:
      "Grow toward staff or lead scope: technical direction, mentorship, and tying engineering decisions to customer and business outcomes.",
  },
];

export const careerSteps = [
  "Keep Plot Armor, SpendWise, and HarmonyAPI READMEs and demos recruiter-ready—with clear architecture diagrams, metrics, and honest limitations.",
  "Maintain a disciplined interview loop: LeetCode-style practice, systems design stories grounded in Next.js/Django, PostgreSQL, and VIP pipelines, and behavioral examples from GT Web Dev leadership.",
  "Publish at least two technical write-ups per year (architecture notes, retro, or open-source docs) to sharpen communication.",
  "Grow network through GT clubs, alumni, and target companies’ engineer communities; ask for feedback on resume and project pitches early.",
  "Track quantifiable outcomes for each major role and project (latency improvements, engagement %, dataset sizes, uptime) so interviews stay concrete.",
];

/** Featured project: Thog Bot — 500+ word overview (counts toward 1000+ word ePortfolio total). */
export const thogBotFeatured = {
  sectionHeading: "Discovery project feature",
  sectionSubheading:
    "Me yapping about Thog Bot LOL",
  title: "Thog Bot — building a community-ready Discord assistant",
  heroImage: publicAsset("/images/projects/thog_bot_pfp.png"),
  heroAlt: "Thog Bot project avatar graphic",
  secondaryImage: publicAsset("/images/projects/plot_armor_dashboard.png"),
  secondaryAlt: "Screenshot from the Plot Armor Chrome extension dashboard and related UI work",
  secondaryCredit: {
    label: "Author’s own screenshot (Plot Armor)",
    url: "/projects",
  },
  repositoryUrl: "https://github.com/StevenQMai/thogbot",
  impactBullets: [
    "Designed modular command handlers so features can ship incrementally without destabilizing core message routing.",
    "Prioritized predictable latency for frequent commands so the bot feels responsive during busy server spikes.",
    "Documented setup and environment variables to lower onboarding friction for future contributors—including my future self.",
  ],
  paragraphs: [
    "When I first started building Thog Bot, it came from a simple, frustrating reality in the student Discord servers I was part of. We had utility bots scattered everywhere, moderation helpers that didn't quite work together, and a bunch of one-off scripts that were a pain to keep running. I got tired of patching things together, so I decided to make one bot that could actually grow with the community—handling music, study session reminders, some casual games, and eventually more advanced features without me having to tear everything down and start over every few months. That shift pushed me to stop just thinking about code that runs and start thinking about how things fit together: how commands get discovered, who actually has permission to use them, and how failures should look different for a server admin versus someone just trying to vibe with their friends.",
    "Under the hood, Thog Bot ended up being a crash course in respecting boundaries. Discord’s API is powerful, but it'll absolutely punish you if you ignore rate limits or let messy code crash your event handlers mid-request. I learned quickly to structure everything as small, testable pieces—keeping command parsing and validation separate from the stuff that actually changes things. That way, when Discord inevitably tweaks an endpoint or I decide to rework a feature, the chaos stays contained. I also developed a much deeper appreciation for good configuration practices: environment variables for tokens, feature flags for experimental commands, and sensible defaults so that anyone who clones the repo can get the bot up and running without jumping through hoops.",
    "In terms of actual features, Thog Bot tries to walk the line between genuinely useful and just plain fun. On the utility side, study session tracking and quick informational commands take a real load off club officers who are already juggling schedules and announcements. But I also made sure there were lighter moments—mini-games and interactive commands that give members a low-pressure reason to hang around, especially during those mid-semester slumps when engagement tends to drop. Music playback was its own beast entirely: managing voice channel state, handling interruptions gracefully, and making sure error messages actually made sense when something went wrong with YouTube or Spotify.",
    "Looking forward, I'm leaving room for AI-assisted features down the line, but my focus right now is on reliability and maintainability. In real communities, trust disappears fast if a bot starts spamming errors, posting in the wrong channels, or acting unpredictably. That's why I prioritized logging patterns, admin-only diagnostic commands, and clear, helpful user-facing messages early on. Those decisions reflect how I want to build software in general—observable, kind to the people maintaining it, and honest about what it can and can't do.",
    "I measure Thog Bot's impact in a couple of ways. Qualitatively, it genuinely reduces the manual work moderators have to do and gives members self-service answers to repetitive questions, which frees up the humans to focus on actual judgment calls and community building. Structurally, the codebase itself has become a portfolio piece I'm proud of—clean commits, a README that actually explains what's going on, and modules that show how I'd work on a team codebase. It's still evolving, but it already feels like a solid capstone for asynchronous programming, API integration, and thinking about product design inside a platform millions of people already use every day.",
    "As for what's next, I've got a few clear milestones in mind: automated tests for command parsing so I can refactor without breaking things, containerized deployment so hosting is reproducible and less 'works on my machine,' and a tighter privacy review for any feature that touches external APIs or stores user data. Each of those aligns with what professional delivery looks like: tests to prevent regressions, containers to reduce friction, and privacy reviews because even community software has to respect user data. These are the same skills I want to bring to internships and early-career roles, and Thog Bot is my intentional practice space for getting them right.",
  ],
};

export const resumeProjects: ResumeProjectBlock[] = [
  {
    name: "Plot Armor",
    stack: "React, TypeScript, Tailwind CSS, Firebase, Groq LLM",
    bullets: [
      "Developed a Chrome extension with 100+ active users that censors spoilers on webpages using hybrid AI detection, achieving 92% spoiler detection accuracy through optimized NLP keyword matching and ML APIs.",
      "Constructed popup interface processing 500+ daily interactions with real-time stats, user controls, and confidence thresholds improving user satisfaction by 40%.",
      "Designed Firebase/Firestore backend managing 50,000+ records, and rate limiting maintaining 99.5% uptime.",
    ],
  },
  {
    name: "SpendWise",
    stack: "Java, Android, Firebase, MVVM",
    bullets: [
      "Built a full-stack mobile application using Java and Android SDK with Firebase backend integration, featuring budget management, expense tracking, social savings circles with real-time chat, and an AI-powered financial chatbot.",
      "Implemented Firebase Authentication supporting 250+ registered users with session management. Integrated Firestore for real-time data, achieving 99.8% sync reliability and reducing data fetch latency by 40%.",
      "Engineered using MVVM, implementing a Singleton Pattern for centralized Firebase and database managers to ensure consistent data access and reduce memory leaks by 25%.",
    ],
  },
  {
    name: "HarmonyAPI",
    stack: "Python, Flask, React, TypeScript, Groq LLM, PostgreSQL, Docker",
    bullets: [
      "Developed an AI-powered medical search platform processing 1,000+ queries during HackGT, enabling healthcare providers to retrieve results with 95% query accuracy and generate summaries 60% faster than manual research.",
      "Integrated Groq LLM API to perform semantic search across healthcare datasets, reducing average response time to under 2 seconds and handling 50+ concurrent users while maintaining 99% uptime during the competition.",
      "Delivered a full-stack solution in under 36 hours using TypeScript/React and Dockerized Flask/PostgreSQL, enabling 40% faster deployment and 5,000+ transactions.",
    ],
  },
];

export const resumeContactItems = [
  { label: "Phone", display: "470-357-8505", href: "tel:+14703578505" },
  { label: "Email", display: "smai34@gatech.edu", href: "mailto:smai34@gatech.edu" },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/steven-mai7",
    href: "https://www.linkedin.com/in/steven-mai7/",
  },
  { label: "GitHub", display: "github.com/StevenQMai", href: "https://github.com/StevenQMai" },
] as const;

export const resumeSections = {
  headline: "Steven Mai",
  subhead: "B.S. Computer Engineering — Georgia Institute of Technology",
  contactItems: resumeContactItems,
  education: {
    school: "Georgia Institute of Technology",
    degree: "B.S. Computer Engineering",
    expected: "Expected: December 2027",
    coursework: [
      "Database Systems",
      "Data Structures and Algorithms",
      "Software Engineering Principles",
      "Programming HW/SW Systems",
      "Circuit Analysis",
      "Differential Equations",
    ],
  },
  skills: {
    languages:
      "JavaScript, TypeScript, Python, Java, C, C++, SQL, HTML/CSS, RISC-V",
    tools:
      "MySQL, MongoDB, PostgreSQL, Firebase, Supabase, AWS S3, Vercel, Docker, Git, CI/CD",
    frameworks:
      "React, Node.js, Express, Flask, FastAPI, Tailwind CSS, JUnit, REST APIs",
  },
  certifications: [
    "The Odin Project — Foundations, Full-Stack JavaScript, React",
    "CodePath — Technical Interview Prep 101",
  ],
  experience: workExperience,
  projects: resumeProjects,
};
