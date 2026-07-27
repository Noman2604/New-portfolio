"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const timeline = [
  {
    period: "May 2026 - June 2026 ",
    role: "Full-Stack Developer",
    org: "Saiket Systems",
    body: "Designing and building end-to-end apps with a focus on UX, reusable architecture, and clean handoff points.",
    details:
      "Working with Next.js, React, TypeScript, MongoDB, Tailwind CSS, and Shadcn UI. Built applications like AptiCore, Expense Tracker, Library Management System, and AI-based projects.",
  },
  {
    period: "August 2024 - September 2024",
    role: "Frontend Developer Intern",
    org: "OctaNet Service Pvt.Ltd",
    body: "Shipped polished interfaces, improved responsiveness, and translated ideas into production-ready screens.",
    details:
      "Worked on frontend development, reusable components, responsive layouts, and modern UI implementation using React.js and frontend technologies.",
  },
  {
    period: "2023 - 2026",
    role: "Graduation Completed",
    org: "B.Sc IT",
    body: "CGPI: 8.23 / 10.",
    details:
      "Completed Bachelor of Science in Information Technology with focus on software development, databases, web technologies, and application development.",
  },
];

export default function Experience() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="experience" className="border-t border-border bg-subtle">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-0">
        <Reveal>
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Experience
            </h2>

            <span className="tag-pill hidden sm:inline-flex ">
              Timeline
            </span>
          </div>

          <div className="space-y-0 divide-y divide-accent border-t border-b border-accent">
            {timeline.map((t, index) => (
              <div
                key={t.role + t.period}
                className="py-6"
              >
                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="grid w-full gap-2 text-left sm:grid-cols-[160px_1fr] sm:gap-8"
                >
                  <span className="font-mono text-xs text-accent">
                    {t.period}
                  </span>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-base font-semibold text-accent">
                        {t.role}{" "}
                        <span className="font-body font-normal text-black">
                          · {t.org}
                        </span>
                      </h3>

                      <p className="mt-1.5 text-sm leading-relaxed text-black">
                        {t.body}
                      </p>
                    </div>

                    <ChevronDown
                      size={18}
                      className={`text-black transition-transform ${
                        active === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    active === index
                      ? "mt-4 max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="sm:ml-[160px] text-sm leading-relaxed text-black">
                    {t.details}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}