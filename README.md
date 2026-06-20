# Midway Chimney & Masonry — Site

Next.js brochure site for Midway Chimney & Masonry, a family-owned chimney sweep and masonry contractor based near Midway Airport on Chicago's South Side. Built with Next.js App Router, Tailwind v4, and shadcn (base-ui flavor). Target deployment: Netlify.

---

## Dev Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads as you edit.

```bash
npm run build   # production build
npm run lint    # ESLint
```

---

## Skills

Agent skills live in `.agents/skills/`. Installed skills and their sources are tracked in `skills-lock.json`.

### Install a skill from a plugin

```bash
npm run skills:install
```

Claude Code will prompt for the plugin and skill name, copy the SKILL.md into `.agents/skills/<name>/`, and update `skills-lock.json`.

### Update an installed plugin skill to latest

```bash
npm run skills:update
```

Re-pulls skill content from the source plugin and bumps the version in `skills-lock.json`. Local skills (source: `"local"`) are unaffected.

### Check for outdated skills

```bash
npm run skills:check
```

Compares `skills-lock.json` against available plugin versions and reports what's stale.

### Add a local skill manually

1. Create `.agents/skills/<name>/SKILL.md` with a frontmatter block:
   ```
   ---
   name: <name>
   description: <one-line description>
   source: local
   sourceVersion: null
   ---
   ```
2. Add an entry to `.agents/skills-lock.json` under `"skills"`.
3. Add a row to the skills table in `AGENTS.md`.

---

## Business info

Phone, email, address, hours, and service area live in `lib/business-info.ts`. All CTAs pull from there — never inline contact info in a component.

---

## Deployment

Netlify config is in `netlify.toml`. Push to `master` to deploy.
