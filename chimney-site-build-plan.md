# Build Plan: Chimney Sweep & Masonry Brochure Site

Empty repo → deployed Next.js app on Netlify → Claude Code wired up to iterate visually.
Design tokens come later, in a separate context — this plan leaves clean slots for them.

---

## Phase 0 — Prerequisites

- Node 20+, `git`, GitHub account, Netlify account
- Claude Code installed (`npm install -g @anthropic-ai/claude-code` or your platform's installer)

---

## Phase 1 — Scaffold the Next.js app

```bash
npx create-next-app@latest chimney-site \
  --typescript --tailwind --app --eslint --src-dir=false
cd chimney-site
git add -A && git commit -m "init: create-next-app scaffold"
```

This gives you App Router + TypeScript + Tailwind with zero extra opinions baked in — the right base for a content/landing-page-heavy brochure site.

---

## Phase 2 — Install & init shadcn

```bash
npx shadcn@latest init
```

- Pick any base color now — it's a placeholder. Your real design-system tokens will overwrite `globals.css` entirely once that's ready, so don't agonize over this.
- Add the primitives you'll actually need for a service brochure site:

```bash
npx shadcn@latest add button card input textarea form \
  navigation-menu sheet separator accordion badge dialog
```

(`sheet` = mobile nav drawer, `accordion` = FAQ section, `dialog` = optional "request a quote" modal, `form` = contact form validation.)

---

## Phase 3 — Project structure

```
chimney-site/
├── app/
│   ├── page.tsx                  # home/landing
│   ├── services/
│   │   ├── chimney-sweeping/page.tsx
│   │   └── masonry-repair/page.tsx
│   ├── service-areas/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── layout.tsx
│   └── globals.css               # <-- design tokens land here later
├── components/
│   ├── ui/                       # shadcn-generated, don't hand-edit structure
│   └── sections/                 # Hero, Services, WhyUs, Testimonials, CTA, Footer, Header
├── lib/
│   └── business-info.ts          # phone, email, address, hours — single source of truth for CTAs
├── design/
│   └── design-system.md          # placeholder — drop your token spec here when ready
└── netlify.toml
```

Centralizing phone/email/business info in `lib/business-info.ts` matters here specifically because your KPIs are call/email CTAs — every button and tel:/mailto: link should pull from one file, not be hand-typed across sections.

---

## Phase 4 — Netlify deployment

```toml
# netlify.toml
[build]
  command = "next build"
```

Netlify's Next.js runtime is zero-config and auto-detected — no `publish` directory or plugin install needed for standard App Router projects. Push to GitHub, connect the repo in Netlify's dashboard, deploy. Set up a `develop`/`main` branch split now if you want preview deploys per PR — cheap to do at this stage, annoying to retrofit later.

---

## Phase 5 — Claude Code workflow: the skills that make iteration work

Two things go in the repo so any Claude Code session (this one or future ones) has the context without you re-explaining:

### 5a. Playwright MCP (the "visually check" half of the loop)

```bash
claude mcp add playwright npx '@playwright/mcp@latest'
```

This is what turns "edit code" into "edit code, look at it, edit again." Without it Claude Code is styling blind — with it, it can navigate to `localhost:3000`, screenshot or snapshot the DOM, and compare against intent.

This step is done.

### 5b. A project-level CLAUDE.md (the steering doc)

```markdown
# CLAUDE.md

## Design system
Source of truth: /design/design-system.md
All shadcn theming happens via CSS variables in app/globals.css — never hardcode
colors/spacing in components when a token exists for it.

## CTA discipline
Phone/email/business info lives in lib/business-info.ts. Every CTA button pulls
from there. Never inline a phone number or address in a component.

## Iteration loop
1. Run `npm run dev`
2. Make the change
3. Use Playwright MCP to navigate to localhost:3000 and screenshot
4. Compare against /design/design-system.md (or referenced mockups)
5. Iterate until it matches, then commit
```

### 5c. A design-quality skill

Anthropic's `frontend-design` skill (already used in this conversation's environment) encodes heuristics for avoiding generic-AI-template look — type scale, spacing rhythm, intentional choices over defaults. Worth pulling an equivalent into `.claude/skills/frontend-design/SKILL.md` in your repo so Claude Code consults it before touching layout/typography, not just your token file. Your token file says *what* the colors/fonts are; this skill helps with judgment calls your tokens won't cover (e.g. spacing rhythm between sections, hover states).

If you want, the `skill-creator` pattern (also available in this environment) is the right tool to draft that skill file from scratch once you've decided what "good" looks like for this specific brand.

---

## Phase 6 — Design-system handoff (slot, not action)

When you bring the tokens over from your other context, they land in two places:

1. `app/globals.css` — the CSS variables (`--background`, `--primary`, `--radius`, etc.) shadcn already reads
2. `design/design-system.md` — the source-of-truth doc Claude Code reads before styling anything, including notes on anything tokens don't cover (button shape, shadow style, etc.)

Nothing in Phases 1–5 needs to change to receive that — it's designed to slot in cleanly.

---

## Phase 7 — Git/iteration rhythm

- One commit per section once it visually matches (Hero, then Services, then CTA, etc.) — small enough to revert if a styling pass goes sideways
- Use the Playwright screenshot loop *before* committing each section, not after — catches drift while context is fresh

---

## Phase 8 — Pre-launch basics worth planning for now (not building yet)

Since the KPI is calls/emails, not page views:

- `tel:` and `mailto:` links should be the actual interactive elements, not styled text pretending to be buttons
- LocalBusiness JSON-LD schema (helps local search — relevant for a chimney sweep/masonry service area business)
- Next's built-in `generateMetadata` per page for title/description, since each service page is a distinct landing surface

None of this blocks scaffolding — just keep slots for it in the `app/services/*/page.tsx` structure above.
