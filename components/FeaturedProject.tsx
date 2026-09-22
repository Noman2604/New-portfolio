import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";

export default function FeaturedProject() {
  const project = projects.apticore;

  return (
    <section id="work" className="border-t border-border bg-subtle">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-0">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <span className="tag-pill">Featured build</span>
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                GitHub Repo <ArrowUpRight size={14} />
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              Discuss AptiCore <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.name} — {project.subtitle}
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((c) => (
            <span key={c} className="tag-pill">
              {c}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-accent bg-accent sm:grid-cols-2">
          {project.highlights.map((h, i) => (
            <div key={i} className="bg-paper p-7">
              <h3 className="mb-2 font-display text-base font-semibold text-ink">
                Feature 0{i + 1}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{h}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs text-muted">
          {project.stack.slice(0, 5).map((tech) => (
            <span key={tech} className="tag-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
