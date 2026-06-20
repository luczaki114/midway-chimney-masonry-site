# Midway Chimney and Masonry

## Skills in this project

Three skills are active. Invoke them by reading their SKILL.md before working in their domain.

| Skill | Path | When to load |
|---|---|---|
| **midway-chimney-masonry-design** | `.claude/skills/midway-chimney-masonry-design/SKILL.md` | Any visual or brand work — color, type, layout, photography, component recipes |
| **shadcn** | `.agents/skills/shadcn/SKILL.md` | Adding, debugging, or composing shadcn/base-ui primitives |
| **frontend-design** | `.agents/skills/frontend-design/SKILL.md` | Inventing new UI shapes that have no existing Midway recipe |

Read `brand-spec-sheet.pdf` (inside the midway-chimney-masonry-design skill folder) before writing any component — it is the canonical visual reference.

## CTA discipline
Phone/email/business info lives in lib/business-info.ts. Every CTA button pulls from there. Never inline a phone number or address in a component.

## shadcn × Frontend-Design skill × Midway design system

Three sources of UI guidance. They own different concerns — they don't compete.

- **shadcn (base flavor)** — *how it works.* Behavior, structure, accessibility. Start from its
  primitives; never hand-roll a11y it already gives you.
- **Midway design system** — *how it looks & feels.* Brand law: color, type, spacing, motion,
  photo/voice rules. Tokens + recipes flavor whatever you build. **Wins any aesthetic tie.**
- **Frontend-Design skill** — *what to do when there's no pattern.* Invents new shapes when neither
  shadcn nor a Midway recipe covers the need — but only using Midway's tokens. (That skill assumes
  no brand system exists; here Midway governs, so it contributes craft, never color/type opinions.)

**Build order:** shadcn primitive → skin with Midway tokens/recipes → if the shape is new, extend
with the Frontend-Design skill, bounded by Midway. When in doubt on look, **Midway wins**.

## Iteration loop
1. Run `npm run dev`
2. Make the change
3. Use Playwright MCP to navigate to localhost:3000 and screenshot
4. Compare against design system and spec sheet.
5. Iterate until it matches, then commit