import type { ExperienceItem } from "@/components/portfolio/types";

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
  "I am a Computer Engineering student at Georgia Tech (B.S. CE, expected December 2027). I lead software for GT Web Dev, analyze voice data in GT VIP, and ship products like Plot Armor and SpendWise—from browser extensions and Android apps to full-stack hackathon builds.",
  "My path started in Georgia with research on a photon-based hardware RNG at Clayton State (1st place, 2024 CIMS Symposium), then coursework at Georgia State and now rigorous CE work at Tech. That path taught me to connect hardware, data, and polished user experiences.",
  "Technically, I gravitate toward TypeScript/React, Python data pipelines, and solid backend design—JWT auth, PostgreSQL modeling, CI/CD, and APIs that stay fast under real load.",
  "If you are here to hire, collaborate, or swap project ideas, welcome—use Contact for phone and email; the Resume page mirrors my LaTeX CV; Projects for the Discovery feature and other builds; and Career Goals for how I am thinking about the next few years.",
];

export const biographyParagraphs = [
  "I grew up in Georgia and found computer engineering through problems that sit at the boundary of hardware and software—starting with a photon-based hardware random number generator at Clayton State, where I learned to pair bench-top experiments with Python pipelines, statistical validation, and clear write-ups. That work earned 1st place at the 2024 CIMS Symposium and set the tone for how I still approach engineering: measure, document, and iterate.",
  "After Georgia State coursework, I transferred to Georgia Tech for a B.S. in Computer Engineering (expected December 2027). Here I combine systems thinking with full-stack delivery: leading GT Web Dev’s Next.js/Django campus platform with JWT auth and PostgreSQL, and contributing to GT VIP as a data science intern building Python workflows over large voice datasets. Side projects like Plot Armor (Chrome extension, hybrid AI spoiler detection) and SpendWise (Android, Firebase, MVVM) keep me close to real users and real constraints.",
  "Outside the terminal, I recharge with music, games, and time with friends—habits that show up in how I tune UX details, error copy, and pacing in the products I build.",
  "What sets me apart is ownership across the stack: I am comfortable in sprint leadership and CI/CD, in SQL and API design, and in shipping interfaces people touch every day. I am looking for roles that deepen backend and platform skills while keeping product impact visible.",
];

export const careerVision =
  "Near term, I want a software engineering internship or new-grad role where I ship production features, learn from strong code review, and grow on teams that care about reliability and measurable user impact. Long term, I want to lead systems that thousands rely on—balancing observability, performance, and UX—while still writing code and mentoring others.";

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
    "In-depth technical write-up for this ePortfolio (assignment requirement). The sections below use clear headings so reviewers can scan goals, implementation, and outcomes quickly.",
  title: "Thog Bot — building a community-ready Discord assistant",
  heroImage: "/images/projects/thog_bot_pfp.png",
  heroAlt: "Thog Bot project avatar graphic",
  secondaryImage: "/images/projects/plot_armor_dashboard.png",
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
    "Thog Bot began as a practical answer to a recurring problem in student Discord servers: scattered utilities, inconsistent moderation helpers, and ad hoc scripts that were hard to maintain. Instead of stacking one-off solutions, I wanted a single cohesive bot that could grow with the community—adding music playback, study-session reminders, lightweight games, and eventually richer assistance features without rewriting the foundation each time. That goal pushed me to think beyond syntax and toward architecture: how commands are discovered, how permissions are checked, and how failures should surface to admins versus everyday users.",
    "From an engineering perspective, the project is a study in boundaries. Discord’s gateway and API reward bots that respect rate limits, handle reconnects gracefully, and keep long-running work off the critical path of event handlers. I structured the codebase around small, testable units—parsing and validation separated from side effects—so that when Discord changes an endpoint behavior or when I refactor a feature, the blast radius stays contained. The bot also reinforced my appreciation for configuration: environment-driven tokens, feature flags for experimental commands, and sensible defaults so a fresh clone can reach a running state quickly.",
    "Feature-wise, Thog Bot explores the spectrum between fun and utility. On the utility side, study-session management and informational commands reduce friction for club officers who already juggle schedules and announcements. On the fun side, mini-games and interactive commands create low-stakes reasons for members to stay engaged—important in communities where participation can dip mid-semester. Music playback added another layer of complexity: coordinating state across voice channels, handling user interruptions, and making error messages human-readable when something goes wrong with an external service.",
    "The roadmap intentionally leaves room for AI-assisted chat features, but the current emphasis is reliability and maintainability first. In real communities, trust erodes quickly if a bot spams errors, misroutes messages, or behaves nondeterministically. That is why I invested early in logging patterns, admin-only diagnostics, and clear user-facing responses. Those choices mirror how I want to build production software: observable, kind to operators, and honest about limitations.",
    "Results and impact are measured both qualitatively and structurally. Qualitatively, the bot is designed to reduce manual moderator toil and to give members self-serve answers for repetitive questions—freeing humans for higher judgment tasks. Structurally, the repository now demonstrates habits I want employers to see: meaningful commits, a README that explains intent, and modules that signal how I would collaborate on a team codebase. Thog Bot is still evolving, but it already functions as a capstone for asynchronous programming, API integration, and product thinking inside a chat platform millions of people already understand.",
    "Looking ahead, the next milestones are automated tests for command parsing, containerized deployment for reproducible hosting, and tighter privacy review for any feature that touches external APIs or stores user-specific state. Each milestone is chosen to mirror professional delivery: tests to prevent regressions, containers to reduce “works on my machine” friction, and privacy review because community software still demands respect for user data. Those are the same muscles I expect to exercise in internships and early-career roles, and Thog Bot is my deliberate practice field.",
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

export const imageCredits = {
  institutionalLogos:
    "Georgia Tech, Georgia State, and Clayton State names and logos are trademarks of their respective institutions; used here for accurate identification of education history.",
};
