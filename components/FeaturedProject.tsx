import { ArrowUpRight } from "lucide-react";
const features = [
  {
    title: "Practice & Assessment Platform",
    body: "A complete aptitude learning platform where users can attempt tests, improve skills, and track their performance.",
  },
  {
    title: "User Dashboard",
    body: "Provides progress tracking, test history, scores, achievements, and personalized learning insights.",
  },
  {
    title: "Admin Management",
    body: "Admin panel to manage questions, categories, tests, users, and platform content efficiently.",
  },
  {
    title: "Performance Analytics",
    body: "Detailed analysis of test results with scores, rankings, and improvement areas.",
  },
];

const categories = [
  "Next.js",
  "TypeScript",
  "MongoDB",
  "Tailwind CSS",
  "Shadcn UI",
  "REST APIs",
  "Authentication",
  "Dashboard Analytics",
];

export default function FeaturedProject() {
  return (
    <section id="work" className="border-t border-border bg-subtle">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-0">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <span className="tag-pill">Featured build</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            Discuss AptiCore <ArrowUpRight size={14} />
          </a>
        </div>

        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          AptiCore - Aptitude Test Platform
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          AptiCore is a full-stack aptitude preparation platform designed to
          help students practice quantitative aptitude, logical reasoning,
          verbal ability, and programming questions. It provides a structured
          test experience with performance tracking, leaderboards, and analytics
          to improve learning.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="tag-pill">
              {c}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-accent bg-accent sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="bg-paper p-7">
              <h3 className="mb-2 font-display text-base font-semibold text-ink">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs text-muted">
          <span className="tag-pill ">Next.js</span>
          <span className="tag-pill ">TypeScript</span>
          <span className="tag-pill ">MongoDB</span>
          <span className="tag-pill ">Shadcn UI</span>
          <span className="tag-pill ">JWT Authentication</span>
        </div>
      </div>
    </section>
  );
}
