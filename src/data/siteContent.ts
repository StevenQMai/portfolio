/** Long-form copy for portfolio pages (word counts verified during content review). */

export const welcomeBullets = [
  "I am a Computer Engineering student at Georgia Tech who enjoys turning messy problems into software people can actually use—whether that is a Discord bot for a student server, a dashboard that makes data legible, or a tight game loop that feels fair and fun.",
  "My path started in Georgia: community college research on hardware randomness, a transition through Georgia State, and now rigorous CE coursework at Tech. That mix taught me to be scrappy, precise, and collaborative.",
  "Technically, I gravitate toward Python and TypeScript ecosystems, but I care most about architecture: clear modules, predictable state, and interfaces that do not fight the user.",
  "If you are here to hire, collaborate, or swap project ideas, welcome—jump to Resume for a downloadable file, Projects for depth, or Career Goals to see where I am headed.",
];

export const biographyParagraphs = [
  "I grew up in Georgia and found my way to computer science through curiosity about how machines make decisions under noise—an interest that first showed up as research on hardware random number generation at Clayton State University. That experience pushed me to think about probability, testing, and the gap between a clever idea and something you can defend in a lab notebook or a code review. I carried those habits forward into upper-level coursework and personal builds where reproducibility matters as much as features.",
  "After Clayton State, I spent a semester at Georgia State University before transferring to the Georgia Institute of Technology to study Computer Engineering. The move was deliberate: I wanted a curriculum that would force me to understand computing end to end—from logic and systems to the software layers people touch every day. Along the way I have balanced classes with independent projects, because the fastest feedback loop for me is still shipping something small, watching it break, and fixing the seams.",
  "Outside the terminal, I recharge with music, games, and time with friends—activities that quietly influence how I design interfaces and pacing in software. I notice when a bot response feels abrupt, when a dashboard overwhelms, or when a tutorial step assumes knowledge the user does not have yet. Empathy is not separate from engineering; it is a constraint that makes the product better.",
  "What sets me apart is the combination of persistence and communication. I document what I build, I refactor when names stop matching reality, and I am comfortable admitting unknowns early so teams can route around them. I am looking for roles where I can deepen distributed systems, backend design, and product-minded delivery while contributing to a culture that values mentorship and craft.",
];

export const careerVision =
  "Long term, I want to lead development of systems that thousands of people rely on daily—platforms where reliability, observability, and thoughtful UX coexist. I see myself as a senior engineer or tech lead who still writes code, mentors newer developers, and partners with product to keep technical debt visible rather than invisible.";

export const careerMilestones = [
  {
    timeframe: "2025 – 2026",
    title: "Solidify core credentials",
    description:
      "Excel in CE fundamentals, complete impactful coursework projects, and maintain a public portfolio that demonstrates growth quarter over quarter.",
  },
  {
    timeframe: "2026 – 2028",
    title: "Professional experience at scale",
    description:
      "Secure internships and then full-time roles where I ship production services, participate in on-call culture responsibly, and learn how great teams operate end to end.",
  },
  {
    timeframe: "2028 – 2032",
    title: "Depth as a specialist",
    description:
      "Choose a lane—likely backend/platform or developer tooling—and accumulate depth: performance tuning, security reviews, and cross-team technical design leadership.",
  },
  {
    timeframe: "2032+",
    title: "Leadership without leaving the craft",
    description:
      "Grow into staff or lead scope where I set technical direction, grow teammates, and keep customer outcomes tied to engineering decisions.",
  },
];

export const careerSteps = [
  "Publish two substantial technical write-ups per year (project retros, architecture notes, or open-source README depth) to sharpen communication and attract collaborators.",
  "Contribute meaningfully to one open-source or community project annually—issues, docs, or features—so I practice reading unfamiliar codebases under real constraints.",
  "Build a disciplined interview prep habit: data structures, systems basics, and behavioral stories grounded in real projects rather than last-minute cramming.",
  "Seek mentors and peers in target industries (cloud, security, fintech, or developer platforms) through clubs, alumni networks, and intentional informational conversations.",
  "Track metrics for each flagship project: latency, error rates, user adoption, or qualitative feedback—so I can speak about impact with numbers and narratives.",
];

/** Featured project: Thog Bot — 500+ word overview (body text below). */
export const thogBotFeatured = {
  title: "Thog Bot — building a community-ready Discord assistant",
  heroImage: "/images/projects/thog_bot_pfp.png",
  heroAlt: "Thog Bot project avatar graphic",
  secondaryImage: "/images/projects/nebula_demo.png",
  secondaryAlt: "Screenshot from the author’s Nebula PyGame demo showing visual polish habits reused across projects",
  secondaryCredit: {
    label: "Author’s own screenshot (Nebula demo)",
    url: "/projects",
  },
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

export const resumeSections = {
  headline: "Steven Mai — Computer Engineering (Georgia Tech)",
  contactLine: "Email: smai34@gatech.edu · GitHub: github.com/StevenQMai · LinkedIn: linkedin.com/in/steven-mai7",
  education: [
    {
      school: "Georgia Institute of Technology",
      detail: "B.S. Computer Engineering — in progress (Jan 2025 – present)",
    },
    {
      school: "Georgia State University",
      detail: "Computer Science coursework — Aug 2024 to Dec 2024",
    },
    {
      school: "Clayton State University",
      detail: "B.S. Computer Science coursework — Aug 2022 to May 2024; research in hardware random number generation",
    },
  ],
  skillsSummary:
    "Languages: Python, Java, JavaScript/TypeScript · Web: React, Next.js, Tailwind CSS · Tools: Git, Node.js · Other: PyGame, Tkinter, introductory embedded/systems coursework",
  projects: [
    "Thog Bot — Discord bot with modular commands, integrations, and documented setup (Python, Discord APIs).",
    "Plot Armor Dashboard — responsive analytics-style dashboard emphasizing clarity and maintainable UI structure.",
    "Game prototypes — Nebula and Zombies demos in PyGame exploring mechanics, collision feedback, and iteration speed.",
  ],
  experience: [
    "Independent & coursework — 2022–present: personal tools, game prototypes, and collaborative class work with emphasis on documentation and reproducible builds.",
  ],
};

export const imageCredits = {
  institutionalLogos:
    "Georgia Tech, Georgia State, and Clayton State names and logos are trademarks of their respective institutions; used here for accurate identification of education history.",
};
