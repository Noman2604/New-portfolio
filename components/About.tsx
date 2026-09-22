import Reveal from "./Reveal";
import { about } from "@/data/content";

export default function About() {
  return (
    <section className="border-t border-border bg-subtle">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-0">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
            <div>
              <span className="tag-pill">About Me</span>
            </div>

            <div className="space-y-10">
              <div className="space-y-5 max-w-3xl">
                <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Building digital experiences that are{" "}
                  <span className="text-primary">fast, scalable,</span> and
                  enjoyable to use.
                </h2>

                {about.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-lg leading-8 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-accent bg-background p-5"
                  >
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
