# Noman — Portfolio

A minimal, light portfolio built with Next.js 15, TypeScript, and Tailwind CSS,
centered on **AptitudeX** as the flagship project.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you deploy — personalize these

- `components/Contact.tsx` — swap the placeholder email, GitHub, and LinkedIn links.
- `components/Experience.tsx` — replace the timeline with your real internships, jobs, and education.
- `components/OtherProjects.tsx` — swap in your other real projects (or delete the section from `app/page.tsx` if AptitudeX is your only major project).
- `components/FeaturedProject.tsx` — add a live demo / repo link once AptitudeX is deployed or public.
- `app/layout.tsx` — update the `metadata` description if you want different SEO copy.

## Deploy

The fastest path is [Vercel](https://vercel.com): push this to a GitHub repo, import it in Vercel, and it deploys automatically on every push — same platform your stack (Next.js) is built for.

## Design notes

- Palette: white/near-white background, near-black ink, a single cobalt-blue accent, and a green "correct answer" accent used only in the signature hero element.
- Type: Space Grotesk (headings), Inter (body), JetBrains Mono (tags, stats, labels).
- Signature element: the hero features a static mockup of an AptitudeX-style MCQ question card (tags, options, XP badge) instead of a generic headshot-and-tagline hero — it's meant to make the page unmistakably "about the thing you build," not just "a person with a resume."
