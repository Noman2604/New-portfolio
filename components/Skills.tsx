import Reveal from "./Reveal";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-0">
        <Reveal>
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What I work with
            </h2>
            <span className="tag-pill hidden sm:inline-flex">Stack</span>
          </div>

          <div className="grid gap-[2px] overflow-hidden rounded-xl border border-accent bg-accent sm:grid-cols-2 lg:grid-cols-4">
            {skills.categories.map((g, index) => (
              <div
                key={g.label}
                className="motion-card bg-paper p-6 hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(18,21,26,0.18)]"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
                  {g.label}
                </h3>
                <ul className="space-y-2.5">
                  {g.items.map((item) => (
                    <li key={item} className="text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
