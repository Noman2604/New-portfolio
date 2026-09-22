"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";
import { about } from "@/data/content";

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

            <span className="tag-pill hidden sm:inline-flex">Timeline</span>
          </div>

          <div className="space-y-0 divide-y divide-accent border-t border-b border-accent">
            {about.experience.map((t, index) => (
              <div key={t.role + t.period} className="py-6">
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="grid w-full gap-2 text-left sm:grid-cols-[180px_1fr] sm:gap-8"
                >
                  <span className="font-mono text-xs text-accent">
                    {t.period}
                  </span>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-base font-semibold text-accent">
                        {t.role}{" "}
                        <span className="font-body font-normal text-black">
                          · {t.company}
                        </span>
                      </h3>

                      <p className="mt-1.5 text-sm leading-relaxed text-black">
                        {t.description}
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
                  <div className="sm:ml-[180px] text-sm leading-relaxed text-muted">
                    {t.description}
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