// All copy and portfolio data lives here.
// Central source of truth for Noman Patel's portfolio.

export type StationId = "about" | "project-apticore" | "project-uccops" | "skills" | "contact";

export interface StationContent {
  id: StationId;
  label: string; // shown on HUD prompt + minimap
  position: [number, number, number]; // where the object sits in 3D room
  interactRadius: number; // how close the player must be to interact
}

export const stations: StationContent[] = [
  { id: "about", label: "About & Experience", position: [-8, 0, -3], interactRadius: 3.2 },
  { id: "project-apticore", label: "Project — AptiCore", position: [-3, 0, -8.5], interactRadius: 3 },
  { id: "project-uccops", label: "Projects & Repos", position: [3, 0, -8.5], interactRadius: 3 },
  { id: "skills", label: "Skills & Stack", position: [8, 0, -3], interactRadius: 3.2 },
  { id: "contact", label: "Contact", position: [0, 0, 8], interactRadius: 3 },
];

export const about = {
  name: "Noman Patel",
  title: "Full-Stack Developer",
  tagline: "I build full-stack products that feel fast, clear, and finished.",
  heading: "Building digital experiences that are fast, scalable, and enjoyable to use.",
  bio: [
    "I'm Noman Patel, a Full-Stack Developer focused on building modern web applications using Next.js, React, TypeScript, and MongoDB.",
    "From responsive user interfaces to secure backend APIs, I enjoy turning ideas into polished products that solve real problems with high performance and maintainable architecture.",
    "Whether it's an aptitude exam platform, an AI chatbot, an expense tracker, or an enterprise management system, I create applications that are clean, performant, and easy to maintain.",
    "I believe great software isn't just about writing code — it's about creating experiences people actually enjoy using.",
  ],
  stats: [
    { label: "Projects Completed", value: "6+" },
    { label: "Internships & Roles", value: "2" },
    { label: "Technologies Used", value: "12+" },
    { label: "B.Sc IT CGPI", value: "8.23 / 10" },
  ],
  experience: [
    {
      role: "Full-Stack Next.js Intern",
      company: "Autowhat.ai",
      period: "August 2026 – Present",
      description:
        "Developing scalable backend microservices, robust REST APIs, and full-stack integrations utilizing Next.js, Node.js, and TypeScript architecture.",
    },
    {
      role: "Full-Stack Developer",
      company: "Saiket Systems",
      period: "May 2026 - June 2026",
      description:
        "Designing and building end-to-end apps with a focus on UX, reusable architecture, and clean handoff points using Next.js, React, TypeScript, MongoDB, Tailwind CSS, and Shadcn UI. Built applications like AptiCore, Expense Tracker, Library Management System, and AI-based projects.",
    },
    {
      role: "Graduation — B.Sc IT",
      company: "University Degree",
      period: "2023 - 2026",
      description:
        "Bachelor of Science in Information Technology (CGPI: 8.23 / 10). Focused on software engineering, database management, web technologies, and application development.",
    },
  ],
};

export interface ProjectItem {
  name: string;
  desc: string;
  link: string;
  tech: string[];
}

export const projects = {
  apticore: {
    name: "AptiCore",
    subtitle: "Aptitude Test Platform",
    description:
      "A complete full-stack aptitude preparation platform designed for students to practice quantitative aptitude, logical reasoning, verbal ability, and programming questions with live performance tracking, leaderboards, and analytics.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn UI",
      "JWT Authentication",
      "REST APIs",
      "Dashboard Analytics",
    ],
    highlights: [
      "Practice & assessment test engine with timed tests and anti-cheat guards",
      "User dashboard with progress tracking, test history, and score analytics",
      "Role-based admin management to manage questions, categories, tests, and users",
      "XP / streak gamification with live competitive leaderboards",
    ],
    github: "https://github.com/Noman2604/AptiCore",
    demo: "https://nomanpatel.vercel.app",
  },
  uccops: {
    name: "Featured Projects & Repos",
    subtitle: "Full-Stack & AI Showcase",
    description:
      "Collection of production-ready full-stack applications, financial dashboards, and management portals built with modern web technologies.",
    stack: ["Next.js 15", "TypeScript", "React", "MongoDB", "Tailwind CSS", "Gemini AI", "Stripe"],
    highlights: [
      "Course Selling Platform: Online learning ecosystem with Stripe payments and curriculum tracking",
      "Chatbot Nova: Real-time AI conversational assistant powered by Google Gemini API",
      "Expense Tracker: Financial tracking dashboard with analytics and categorization",
      "Hospital & Library Management Systems: End-to-end RBAC administration portals",
    ],
    github: "https://github.com/Noman2604",
    demo: "https://nomanpatel.vercel.app",
    extraProjects: [
      {
        name: "Course Selling Platform",
        desc: "An online learning platform where instructors publish courses and students browse, enroll, and track their learning progress.",
        link: "https://github.com/Noman2604/Course-Selling-Platform",
        tech: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
      },
      {
        name: "Chatbot Nova",
        desc: "An AI-powered chatbot built with Next.js and Google Gemini API for real-time conversations and automated support.",
        link: "https://github.com/Noman2604/Chatbot-Nova",
        tech: ["Next.js", "JavaScript", "Gemini API", "Tailwind CSS"],
      },
      {
        name: "Expense Tracker",
        desc: "A modern expense tracker that helps users manage income, expenses, and financial records with an intuitive dashboard.",
        link: "https://github.com/Noman2604/expence-tracer",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      },
      {
        name: "Hospital Management System",
        desc: "A secure healthcare portal for handling patient records, appointments, doctor schedules, and medical history.",
        link: "https://github.com/Noman2604/Hospital-Management-System",
        tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      },
      {
        name: "Library Management System",
        desc: "A full-stack library management system for book cataloging, borrowing/return logs, and member tracking.",
        link: "https://github.com/Noman2604/Library-Management-System",
        tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      },
      {
        name: "Next.js Portfolio",
        desc: "A personal portfolio website built with Next.js to showcase projects, skills, and contact information.",
        link: "https://github.com/Noman2604/nextjs-portfolio",
        tech: ["Next.js", "React", "Tailwind CSS"],
      }
    ] as ProjectItem[],
  },
};

export const skills = {
  categories: [
    {
      label: "Frontend",
      items: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "HTML5 / CSS3", "Three.js / R3F"],
    },
    {
      label: "Backend & APIs",
      items: ["Next.js API Routes", "Node.js", "REST APIs", "Auth & RBAC", "JWT Authentication"],
    },
    {
      label: "Database & Architecture",
      items: ["MongoDB"],
    },
    {
      label: "Tools & Integrations",
      items: ["Git", "GitHub", "Vercel", "Google Gemini API", "Stripe", "Postman", "VS Code"],
    },
  ],
};

export const contact = {
  name: "Noman Patel",
  email: "nomanpatel07059@gmail.com",
  github: "https://github.com/Noman2604",
  linkedin: "https://linkedin.com/in/noman-patel",
  portfolio: "https://nomanpatel.vercel.app",
};
