import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-content px-6 pb-20 pt-16 md:px-10 lg:px-0 lg:pb-28 lg:pt-24"
    >
      <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div>
            <p className="tag-pill mb-6 ">Available for opportunities</p>

            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              I build full-stack
              <br />
              products that feel
              <br />
              fast, clear, and <span className="text-accent">finished</span>.
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Noman - full-stack developer focused on Next.js, TypeScript, and
              product-minded engineering. I design and ship portfolio sites,
              dashboards, and exam-style learning tools with attention to UX,
              maintainability, and performance.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-lg"
              >
                See my work <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:shadow-sm"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-muted ">
              <span>Next.js 15</span>
              <span>TypeScript</span>
              <span>MongoDB / Mongoose</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-paper shadow-[0_1px_0_0_#E7E9E4,0_20px_40px_-24px_rgba(18,21,26,0.18)] animate-float-slow">
              <div className="absolute left-4 top-4 z-10 rounded-full border border-border bg-paper/90 px-3 py-1 text-xs font-mono text-muted backdrop-blur">
                Portfolio preview
              </div>
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/image.png"
                  alt="Noman portfolio preview"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  priority
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
