import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";

const links = [
  {
    label: "Email",
    value: "Noman Patel",
    href: "mailto:nomanpatel07059@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "Noman Patel",
    href: "https://github.com/Noman2604",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Noman Patel",
    href: "https://linkedin.com/in/noman-patel",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 lg:px-0">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="tag-pill mx-auto w-fit hover:bg-accent hover:text-paper">
              Contact
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Open to internships, freelance work, and full-stack roles.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              If you&apos;re building something in ed-tech, SaaS, dashboards, or
              anything that needs a developer who ships, I&apos;d love to hear
              about it.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent sm:w-auto"
                >
                  <l.icon size={15} />
                  {l.value}
                  <ArrowUpRight
                    size={14}
                    className="text-muted transition-all duration-500 hover:-translate-y-1"
                  />{" "}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted sm:flex-row md:px-10 lg:px-0">
          <span>
            © {new Date().getFullYear()} Noman. Built with Next.js & Tailwind.
          </span>
          <span className="font-mono">
            Designed to look nothing like a template.
          </span>
        </div>
      </footer>
    </section>
  );
}
