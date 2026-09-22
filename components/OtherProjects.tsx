import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/data/content";

export default function OtherProjects() {
  const projectList = projects.uccops.extraProjects;

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-0">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Other projects
            </h2>
            <span className="tag-pill hidden sm:inline-flex">More work</span>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-accent bg-accent/30 sm:grid-cols-2">
            {projectList.map((p, index) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noreferrer"
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
                  {p.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tech.map((t) => (
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
