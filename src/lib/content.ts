export const SITE_LINKS = [
  { label: "GitHub", href: "https://github.com/Ronny-Arora" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raunak-arora-ronny/" },
  { label: "Instagram", href: "https://www.instagram.com/ronny.creates" },
  { label: "Email", href: "mailto:ronny.arora@outlook.com" },
];

export type Experience = {
  org: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    org: "PwC Australia",
    role: "Incoming Associate — Risk & Digital Trust",
    location: "Australia",
    period: "Starting soon",
    bullets: [
      "Joining the Risk & Digital Trust team, announced this year.",
    ],
  },
  {
    org: "Infosys",
    role: "Software Engineer Intern",
    location: "Melbourne",
    period: "Jan – Mar 2026",
    bullets: [
      "Sole intern selected to contribute to two concurrent projects.",
      "Led front-end development of an APRA Regulatory Intelligence Platform (React + Node.js), with a Splunk integration simulating live compliance logs and a RAG pipeline — embeddings and vector search over ingested APRA policy documents to surface compliance gaps.",
      "Presented the platform to a VP; the project was accepted into Infosys's business incubator for funding and commercialization.",
      "Also contributed to Infosys's internal Responsible AI framework project.",
    ],
  },
  {
    org: "Macmahon",
    role: "Business Analyst Intern",
    location: "Perth",
    period: "Jun – Dec 2025",
    bullets: [
      "Cleaned and overhauled workforce datasets — payroll, leave accrual, personnel records — for 5,000+ employees across 20 Australian mine sites, ahead of a SAP SuccessFactors migration.",
      "Contributed to the RTAP project (with IBM), supporting a successful SAP integration.",
    ],
  },
  {
    org: "JB Hi-Fi",
    role: "Telecommunication Sales Representative",
    location: "Perth",
    period: "Oct 2023 – present · part-time",
    bullets: [
      "Ranked top 1% nationally for sales performance, generating ~$1.5M in revenue in 2025.",
      "Mentored and onboarded new team members.",
    ],
  },
  {
    org: "Future of Work Institute",
    role: "Capstone Project Lead — ARRIVO",
    location: "Perth",
    period: "Jan – Nov 2025",
    bullets: [
      "Led full-stack development (React, Node.js, MySQL) of ARRIVO, a visitor management system that reduced admin workload 60%+ by digitizing manual, email-based workflows.",
      "Architected system design docs — UML diagrams and component maps.",
      "Team lead: ran stand-ups, task allocation, and milestone planning.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  flagship?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "Listify",
    tagline: "React Native · Expo · Supabase",
    description:
      "A real-time list app with multiple templates — Grocery, Workout, Student Planner — built on Supabase for real-time sync and Clerk for auth. AI-powered auto-categorization runs on a HuggingFace Llama model. Lists are shareable with Editor/Viewer roles and live updates. Currently in private beta via TestFlight, shipping OTA updates through EAS.",
    tags: ["React Native", "Expo", "Supabase", "Clerk", "HuggingFace", "EAS"],
    flagship: true,
  },
  {
    name: "ARRIVO",
    tagline: "Visitor management system · Capstone",
    description:
      "A full-stack visitor management system (React, Node.js, MySQL) that digitized a fully manual, email-based process and cut admin workload by 60%+. Built and led as the Future of Work Institute capstone project — see Experience for more.",
    tags: ["React", "Node.js", "MySQL"],
  },
  {
    name: "APRA Regulatory Intelligence Platform",
    tagline: "RAG-based compliance tooling · Infosys",
    description:
      "A compliance gap detection platform built during an Infosys internship: a RAG pipeline over ingested APRA policy documents, paired with a Splunk integration simulating live compliance logs. Presented to a VP and accepted into Infosys's business incubator. Details kept high-level out of respect for confidentiality.",
    tags: ["React", "Node.js", "RAG", "Splunk"],
  },
];

export const FITNESS_STATS = [
  { label: "5k PR", value: "26:54", detail: "5:22/km pace — set two weeks out from his first Hyrox" },
  {
    label: "Fastest 10k",
    value: "64:16",
    detail: "6:25/km pace — set four days before Hyrox, with 36 achievements/PRs earned in that single run",
  },
];

export type Education = {
  org: string;
  credential: string;
  period: string;
  details: string[];
};

export const EDUCATION: Education = {
  org: "Curtin University, Perth",
  credential: "Bachelor of Computing (Software Engineering)",
  period: "Feb 2023 – Feb 2026",
  details: [
    "Distinction average (GPA ~75%)",
    "Letter of Commendation from the Dean of Science",
    "3× hackathon winner, including 2nd place at the Curtin ComSSA Hackathon (Dec 2024)",
  ],
};

export const CERTIFICATIONS = [
  { name: "Microsoft Azure AI Fundamentals (AI-900)", period: "Feb 2026" },
  { name: "Deloitte Australia — Technology Job Simulation (Forage)", period: "Feb 2025" },
];

export const SKILLS: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Python", "Java", "JavaScript", "SQL"] },
  {
    category: "Frameworks & platforms",
    items: ["React", "Node.js", "React Native", "Expo", "Supabase"],
  },
  { category: "Tools", items: ["Git", "GitHub", "Azure", "Splunk", "Figma", "EAS"] },
  { category: "Ways of working", items: ["Agile/Scrum"] },
  {
    category: "Soft skills",
    items: ["Stakeholder communication", "Team leadership", "Mentorship"],
  },
];
