import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="border-t border-border bg-subtle">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-0">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <div>
            <span className="tag-pill ">About Me</span>
          </div>

          <div className="space-y-10">
            <div className="space-y-5 max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Building digital experiences that are{" "}
                <span className="text-primary">fast, scalable,</span> and
                enjoyable to use.
              </h2>

              <p className="text-lg leading-8 text-muted-foreground">
                I'm <span className="font-semibold">Noman Patel</span>, a
                Full-Stack Developer focused on building modern web
                applications using Next.js, React, TypeScript, and MongoDB.
                From responsive user interfaces to secure backend APIs, I enjoy
                turning ideas into polished products that solve real problems.
              </p>

              <p className="text-lg leading-8 text-muted-foreground">
                Whether it's an AI chatbot, an expense tracker, an aptitude
                platform, or a management system, I enjoy creating applications
                that are clean, performant, and easy to maintain. I believe
                great software isn't just about writing code. It's about
                creating experiences people actually enjoy using.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-accent bg-background p-5">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>

              <div className="rounded-2xl border border-accent bg-background p-5">
                <h3 className="text-3xl font-bold">2</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Internship Experience
                </p>
              </div>

              <div className="rounded-2xl border border-accent bg-background p-5">
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Technologies Used
                </p>
              </div>

              <div className="rounded-2xl border border-accent bg-background p-5">
                <h3 className="text-3xl font-bold">∞</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Curiosity to Learn
                </p>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
