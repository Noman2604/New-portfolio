import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    name: "Simple Weather App",
    description:
      "A lightweight weather application that provides real-time temperature, humidity, and weather conditions for any location.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    href: "https://github.com/Noman2604/Weather-app",
  },
  {
    name: "Calculator",
    description:
      "A responsive calculator supporting essential arithmetic operations with a clean and user-friendly interface.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    href: "https://github.com/noman2604/calculator",
  },
  {
    name: "Gym Website",
    description:
      "A modern gym website showcasing services, facilities, and membership plans with a responsive design.",
    tags: ["HTML5", "CSS3"],
    href: "https://github.com/noman2604/Gym-Website",
  },
  {
    name: "Next.js Portfolio",
    description:
      "A personal portfolio website built with Next.js to showcase projects, skills, and contact information.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    href: "https://github.com/Noman2604/nextjs-portfolio",
  },
  {
    name: "Password Generator",
    description:
      "A secure password generator with customizable options for length and complexity, built using Next.js.",
    tags: ["Next.js", "Shadcn UI", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/Noman2604/Password-Generator",
  },
  {
    name: "Chatbot Nova",
    description:
      "An AI-powered chatbot built with Next.js for real-time conversations and automated customer support.",
    tags: ["Next.js", "JavaScript", "API", "Gemini"],
    href: "https://github.com/Noman2604/Chatbot-Nova",
  },
  {
    name: "Expense Tracker",
    description:
      "A modern expense tracker that helps users manage income, expenses, and financial records with an intuitive dashboard.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    href: "https://github.com/Noman2604/expence-tracer",
  },
  {
    name: "AptiCore",
    description:
      "A full-stack aptitude test platform where users can practice aptitude questions, track progress, view leaderboards, and analyze performance through an interactive dashboard.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Shadcn UI"],
    href: "https://github.com/Noman2604/AptiCore",
  },
  {
    name: "Library Management System",
    description:
      "A full-stack library management system that enables users to browse books, borrow and return them, while admins can manage books, users, and borrowing records.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    href: "https://github.com/Noman2604/Library-Management-System",
  },
  {
    name: "Hospital Management System",
    description:
      "A hospital management system for handling patient records, appointments, doctor schedules, and medical history through a secure admin dashboard.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    href: "https://github.com/Noman2604/Hospital-Management-System",
  },
  {
    name: "Course Selling Platform",
    description:
      "An online learning platform where instructors can publish courses and students can browse, enroll, and track their learning progress.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    href: "https://github.com/Noman2604/Course-Selling-Platform",
  },
];

export default function OtherProjects() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-0">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Other projects
            </h2>
            <span className="tag-pill hidden sm:inline-flex ">More work</span>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-accent bg-accent/30 sm:grid-cols-2">
            {projects.map((p, index) => (
              <a
                key={p.name}
                href={p.href}
                className="group flex flex-col bg-paper p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-muted/30 hover:shadow-[0_18px_40px_-28px_rgba(18,21,26,0.18)] backdrop-blur-sm"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="font-display text-lg font-semibold text-accent transition-colors group-hover:text-primary">
                    {p.name}
                  </h3>

                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>

                <p className="mb-6 flex-1 text-sm leading-7 text-black">
                  {p.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-accent px-3 py-1 text-xs text-accent transition-colors group-hover:border-primary/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
