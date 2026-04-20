import type { ExperienceItem } from "@/components/portfolio/types";
import { publicAsset } from "@/lib/publicPath";

/** Research / professional experience (shown under "Experience" on the resume). */
export const researchExperience: ExperienceItem[] = [
  {
    company: "GT VIP Program",
    position: "Data Science Research Assistant",
    period: "Jan 2026 – Present",
    bullets: [
      "Built Python scripts to automate pre-processing and labeling of 40+ hours of human and AI voice data.",
      "Developed pipelines to extract pitch, cadence, and spectral data for large-scale emotional tonality analysis.",
      "Implemented statistical workflows to quantify recognition accuracy between human and AI-generated voices.",
    ],
  },
  {
    company: "Clayton State University",
    position: "Software Development Research Assistant",
    period: "Jan 2024 – May 2024",
    bullets: [
      "Designed and implemented a photon-based hardware random number generator to communicate with optical hardware, enabling automated data acquisition and statistical entropy validation.",
      "Built a Python-based data processing pipeline to analyze 1,000+ photon samples, improving validation accuracy by 25% and reducing runtime by 15% through optimized data structures and batch processing.",
      "Awarded 1st place at the Clayton State University 2024 CIMS Symposium.",
    ],
  },
];

/** Campus clubs and org involvement (shown under "Campus & Community Involvement" on the resume). */
export const campusInvolvement: ExperienceItem[] = [
  {
    company: "GT Web Dev",
    position: "Technical Project Manager",
    period: "Jan 2026 – Present",
    bullets: [
      "Led a 9-developer team using subteam-based sprints and CI/CD automation to launch a campus event platform, driving 60% weekly engagement across 150+ beta users.",
      "Architected a Next.js/Django platform with JWT auth and 10+ REST endpoints, supporting 300+ live events.",
      "Integrated PostgreSQL for robust data modeling to reduce API response times by 40%, ensuring platform stability.",
    ],
  },
  {
    company: "HyTech Racing",
    position: "Software Developer",
    period: "Jan 2026 – Present",
    bullets: [
      "Developed embedded C++ firmware for Vehicle Controller modules, implementing real-time sensor data handling.",
      "Built data acquisition pipelines to stream and log real-time vehicle telemetry for post-run performance analysis.",
      "Integrated firmware on physical hardware, debugging sensor and communication failures across ECU systems.",
    ],
  },
];

/** All experience combined — used by the Experience page and personalInfo. */
export const workExperience: ExperienceItem[] = [
  ...campusInvolvement,
  ...researchExperience,
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

/** ECE Discovery Project — Network Traffic Monitor showcase (all rubric sections). */
export const discoveryProject = {
  sectionHeading: "ECE Discovery Project",
  sectionSubheading:
    "A Python CLI tool that captures live network packets, aggregates the data, and produces a self-contained daily report — built to answer one question: what is my computer actually doing on the network?",
  title: "Network Traffic Monitor",
  tagline: "Turning invisible network activity into readable daily reports.",
  repositoryUrl: "https://github.com/StevenQMai/network-traffic-monitor",

  screenshots: {
    terminal:     publicAsset("/images/projects/ntm/ntm_terminal.png"),
    htmlReport:   publicAsset("/images/projects/ntm/ntm_html_report.png"),
    chart:        publicAsset("/images/projects/ntm/ntm_chart.png"),
    outputFolder: publicAsset("/images/projects/ntm/ntm_output_folder.png"),
  } as {
    terminal:     string | undefined;
    htmlReport:   string | undefined;
    chart:        string | undefined;
    outputFolder: string | undefined;
  },

  overview: [
    "I built this because I wanted to understand what my computer is actually doing on the network beyond ‘Wi-Fi bars.’ Every app, background process, and OS service sends and receives data constantly — but nothing in a typical desktop UI shows you that in a structured way. My goal was to build a tool that captures live network packets, extracts the fields that matter (addresses, protocols, ports, sizes), aggregates everything into clean summaries, and produces a self-contained daily report that anyone — not just engineers — can open and read.",
    "The result is a Python CLI tool that uses Scapy for packet capture, Pandas for aggregation, Matplotlib for charts, and a custom HTML renderer for the final report. Running it for a few minutes produces three files saved to ~/Downloads/network_traffic_monitor/ by default: a CSV of every captured packet, a PNG chart of traffic patterns, and a standalone HTML report anyone can open in a browser without a server or extra software.",
    "The project taught me more about how networking actually works at the packet level than any lecture had — and confirmed that most traffic on my machine comes from things I never consciously opened.",
  ],

  architecture: [
    {
      label: "Capture — Scapy",
      detail:
        "sniff() intercepts raw packets off the network interface in real time. Each callback extracts: timestamp, source/destination IP, protocol (TCP/UDP/ICMP/other), size in bytes, and ports for TCP/UDP. IPv6 packets are handled alongside IPv4; multicast (224.x.x.x, ff00::/8) and broadcast addresses are filtered before storage to reduce noise.",
    },
    {
      label: "Storage — Pandas DataFrame",
      detail:
        "Parsed fields accumulate in an in-memory DataFrame row by row. After capture ends (by duration, count limit, or Ctrl+C) the DataFrame writes to traffic_YYYY-MM-DD.csv. Pandas makes grouping by protocol, counting distinct IPs, summing bytes per destination, and ranking top talkers trivial in a few lines.",
    },
    {
      label: "Visualization — Matplotlib",
      detail:
        "Three charts are generated from the aggregated DataFrame: protocol distribution (pie/bar), top-N destination IPs by packet count, and traffic volume over time (packets per 10-second bin). All three are combined into a single PNG figure.",
    },
    {
      label: "Report — self-contained HTML",
      detail:
        "A Python string template renders summary statistics, embeds the PNG chart as a base64 <img> tag, and writes a single .html file. No server needed — just a browser. Inline CSS keeps rendering consistent across machines and handles dark/light mode.",
    },
    {
      label: "CLI controls",
      detail:
        "--duration (seconds), --count (max packets), --interface (e.g. en0, eth0), --output (custom directory). Ctrl+C is caught gracefully: the DataFrame is finalized and all three output files are written before the process exits.",
    },
  ],

  outputs: [
    {
      file: "traffic_YYYY-MM-DD.csv",
      description: "Row-per-packet data — open in Excel or Pandas for further analysis.",
    },
    {
      file: "traffic_report_YYYY-MM-DD.png",
      description: "Three-panel chart: protocol distribution, top talkers, traffic over time.",
    },
    {
      file: "traffic_report_YYYY-MM-DD.html",
      description: "Self-contained browser report with summary stats and embedded chart.",
    },
  ],

  ecaSkills: [
    {
      skill: "Packet-level networking",
      detail:
        "Working at the packet level made abstract concepts concrete. I had to understand why IPv4 and IPv6 look different in Scapy’s object model, what a port number means versus an IP address, why ICMP doesn’t have ports, and why the source address on most outbound packets is 192.168.x.x rather than my public IP. NAT translation happens at the router, after the packet leaves my machine — an insight I wouldn’t have gotten from a textbook alone.",
    },
    {
      skill: "Measurement & instrumentation",
      detail:
        "Packet capture is fundamentally a sampling problem. The when of a capture matters as much as the how: a 30-second window at 2 AM on an idle laptop gives you almost nothing useful. The same window during a video call clearly shows what UDP-heavy streaming looks like. Choosing the right observation window is the same discipline as any instrumentation problem in ECE — you have to understand what you’re measuring before you can measure it.",
    },
    {
      skill: "Systems constraints & privilege model",
      detail:
        "Packet capture requires root or administrator access because reading raw frames off an interface bypasses the normal socket abstraction. My first run failed with a cryptic permission error. I added a startup check that catches the exception and prints a plain-English message with the exact sudo command to run. This taught me that systems-level Python is genuinely different from script Python: OS privilege constraints are not optional and can’t be abstracted away.",
    },
  ],

  milestones: [
    "Baseline capture: Scapy sniff() working, fields extracted and printed to terminal.",
    "CSV output: Pandas DataFrame writing structured per-packet data for each run.",
    "Visualization: Matplotlib charts generated automatically from aggregated DataFrame.",
    "HTML report: self-contained file with embedded chart, readable without technical knowledge.",
    "Usability pass: permission error handling, interface selection, output directory control, graceful Ctrl+C exit.",
  ],

  challenges: [
    {
      title: "Elevated permissions",
      detail:
        "My first run failed immediately with a cryptic ‘Operation not permitted’ error. Packet capture is a privileged OS operation — it can’t be done without root/admin. I added a startup exception check that prints a plain-English message with the exact sudo command to use.",
    },
    {
      title: "Interface selection",
      detail:
        "Scapy’s default interface isn’t always the active one. On macOS Wi-Fi is en0; on Linux it might be wlan0 or enp3s0. Early runs captured zero packets silently because I was on the wrong interface. I added --interface and a startup helper listing available adapters.",
    },
    {
      title: "IPv6 and top-talker confusion",
      detail:
        "Early aggregations showed unfamiliar addresses — many were IPv6 multicast (ff02::) and link-local (fe80::) from normal neighbor-discovery traffic. Filtering these cleaned up the reports, but deciding what to filter without hiding real traffic required understanding why those address ranges exist.",
    },
    {
      title: "Dark-mode HTML readability",
      detail:
        "My first HTML template used hardcoded dark text on white. On a dark-mode browser, text became unreadable. I added a color-scheme meta tag and explicit background/foreground colors to the inline CSS.",
    },
    {
      title: "Sparse traffic windows",
      detail:
        "A 30-second capture at 2 AM on an idle laptop produced almost nothing. Learning to run captures during active use — browser open, video call, file sync — made outputs informative and confirmed the tool was working correctly.",
    },
  ],

  insights: [
    "Inbound vs. outbound asymmetry is real: streaming pulls large inbound flows while your machine sends tiny ACKs.",
    "Most traffic comes from things you never consciously opened — background services dominate even ‘idle’ periods.",
    "Encrypted payloads (TLS) mean you can see that a connection happened and how much data moved, but not what was said. This is both a fundamental limitation and why the tool is privacy-safe.",
    "Your own public IP rarely appears as a source address in raw captures — NAT translation happens at the router after the packet leaves your machine.",
    "Throughput estimates from packet sizes are approximate — they don’t account for retransmits, fragmentation, or protocol overhead.",
  ],

  ethics: {
    captures: [
      "IP addresses (source and destination)",
      "Protocol type (TCP, UDP, ICMP)",
      "Port numbers",
      "Packet size and timestamp",
    ],
    doesNotCapture: [
      "Payload content — the actual data inside packets",
      "Usernames, passwords, or session tokens",
      "DNS query names (not extracted in current implementation)",
      "Traffic from other devices on the network",
    ],
    note: "Almost all modern traffic uses TLS encryption. Even if payload bytes were extracted, they’d be unreadable ciphertext — the tool makes no attempt to decrypt anything. Running packet capture on a network you don’t own or administer without authorization is unethical and may violate policy or law, even if you’re only capturing your own traffic. All testing for this project was done on my personal home network.",
  },

  howToRunCommands: `# 1. Clone and enter the project
git clone https://github.com/StevenQMai/network-traffic-monitor
cd network-traffic-monitor

# 2. Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate        # macOS / Linux

# 3. Install dependencies
pip install scapy pandas matplotlib

# 4. Run (elevated permissions required for packet capture)
sudo python network_traffic_monitor.py

# Common options
sudo python network_traffic_monitor.py --duration 60
sudo python network_traffic_monitor.py --count 500 --interface en0
sudo python network_traffic_monitor.py --duration 120 --output ~/Desktop/captures

# Press Ctrl+C at any time — outputs are written before exit`,

  futureWork: [
    "DNS name resolution — resolve destination IPs to hostnames so the top-talkers list shows example.com instead of raw IP addresses. Deferred because reverse DNS lookups add latency and generate additional traffic that muddies the capture.",
    "Per-application attribution — identifying which app owns each connection requires OS-level APIs (lsof, /proc/net/tcp on Linux) that Scapy can’t provide. This would turn the monitor into something closer to Little Snitch or GlassWire.",
    "Anomaly detection — flag statistically unusual destinations or port usage against a rolling baseline built from previous CSV runs.",
    "Scheduled daily runs — a cron job running a nightly 5-minute capture to build a growing CSV and enable week-over-week comparison charts.",
    "Packet-rate alerting — a simple threshold: if packets-per-second exceeds N during an expected-idle window, write a warning to a log file.",
  ],

  qa: [
    {
      q: "Why does it need sudo? Isn’t that dangerous?",
      a: "Packet capture reads raw frames directly off the network interface, bypassing the normal socket abstraction. The OS requires root/admin because otherwise any process could read other users’ traffic on a shared interface. Running sudo for a script you wrote and can read is low risk — the danger is running someone else’s untrusted script with elevated permissions.",
    },
    {
      q: "Is this hacking or spying on other people?",
      a: "No — and the distinction matters. This tool captures packets from your own machine’s network interface on a network you control. It doesn’t put the interface into promiscuous mode to capture other devices’ traffic. Outputs are metadata only, with no payload content.",
    },
    {
      q: "What does ‘top talker’ mean?",
      a: "A top talker is the remote IP address your machine exchanged the most packets with during the capture window. On most laptops it’s an Apple, Google, or Microsoft server handling background sync — not anything you consciously opened.",
    },
    {
      q: "How accurate is the data?",
      a: "Packet counts are exact for the capture window — Scapy doesn’t drop packets under normal load. Throughput estimates from byte totals are approximate because they don’t account for retransmits, fragmentation, or protocol overhead.",
    },
    {
      q: "Can you see what websites I’m visiting?",
      a: "No. The tool captures destination IP addresses and port numbers, not URLs or hostnames. And since nearly all web traffic is TLS-encrypted, payload content is unreadable ciphertext even if you extracted it.",
    },
  ],

  overallExperience:
    "The most surprising result when I actually ran this was how much traffic there is from things I never consciously opened — OS telemetry, cloud sync services, app store checks, and regular heartbeat pings from background processes. Most of it is boring and expected, but seeing it enumerated was the whole point. What was harder than expected was the gap between ‘Python script’ and ‘systems-level tool’ — permissions, interface selection, and OS differences aren’t problems you encounter in typical web or app development. If I were starting over, I’d add DNS hostname resolution from day one, since raw IP addresses are nearly meaningless to a non-technical reader.",
};

export const resumeProjects: ResumeProjectBlock[] = [
  {
    name: "Noted",
    stack: "Next.js, React, Typescript, CSS, Supabase, OpenAI API, Google Calendar API",
    bullets: [
      "Developed a full-stack AI chat-driven calendar app that converts natural-language prompts into weekly events.",
      "Implemented Supabase authentication + session integration and OAuth callback flow, with sub-300ms login time.",
      "Shipped Google Calendar import with range presets, and merge conflict resolution, with 500ms import times.",
    ],
  },
  {
    name: "SpendWise",
    stack: "Java, Android, Firebase, Groq API, MVVM",
    bullets: [
      "Built a full-stack mobile application with expense tracking, real-time chat, and an AI-powered financial chatbot.",
      "Implemented Firebase auth with session management; integrated Firestore for real-time data to ensure reliability.",
      "Designed a multiplayer feature enabling users to invite peers, share budgets, and track real-time group spending.",
    ],
  },
  {
    name: "HarmonyAPI",
    stack: "Python, Flask, React, Typescript, Groq API, PostgreSQL, Docker",
    bullets: [
      "Developed an AI-powered medical search platform processing 1,000+ queries during HackGT, enabling healthcare providers to retrieve results with 95% query accuracy and generate summaries 60% faster than manual research.",
      "Integrated Groq API to perform semantic search across healthcare datasets, reducing average response time to under 2 seconds and handling 50+ concurrent users while maintaining 99% uptime during the competition.",
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
      "Javascript, Typescript, Python, Java, C/C++, SQL, HTML/CSS, Assembly/RISC-V",
    tools:
      "MySQL, MongoDB, PostgreSQL, Firebase, Supabase, AWS S3, Vercel, Docker, Git, CI/CD",
    frameworks:
      "React, Node.js, Express, Flask, FastAPI, TailwindCSS, JUnit, REST APIs",
  },
  certifications: [
    "TheOdinProject: Foundations, Full-Stack Javascript, React",
    "CodePath: Technical Interview Prep 101",
  ],
  experience: researchExperience,
  campusInvolvement,
  projects: resumeProjects,
};
