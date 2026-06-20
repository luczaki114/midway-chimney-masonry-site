# Midway Chimney and Masonry

## Skills in this project

Five skills are active. Invoke them by reading their SKILL.md before working in their domain. Installed skills and versions are tracked in `skills-lock.json`.

| Skill | Path | When to load |
|---|---|---|
| **midway-chimney-masonry-design** | `.agents/skills/midway-chimney-masonry-design/SKILL.md` | Any visual or brand work — color, type, layout, photography, component recipes |
| **shadcn** | `.agents/skills/shadcn/SKILL.md` | Adding, debugging, or composing shadcn/base-ui primitives |
| **frontend-design** | `.agents/skills/frontend-design/SKILL.md` | Inventing new UI shapes that have no existing Midway recipe |
| **next-best-practices** | `.agents/skills/next-best-practices/SKILL.md` | Any Next.js work — RSC boundaries, data fetching, async APIs, routing, image/font, metadata, error handling |
| **karpathy-guidelines** | `.agents/skills/karpathy-guidelines/SKILL.md` | Any code writing or editing — surgical changes, surface assumptions, no orthogonal edits |

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

## Playwright artifacts
Save all screenshots and snapshots to `.playwright-mcp/` by passing an explicit filename — e.g. `.playwright-mcp/hero-mobile.png`. Never save to the project root.

## Iteration loop
1. Run `npm run dev`
2. Make the change
3. Use Playwright MCP to navigate to localhost:3000 and screenshot at all three breakpoints:
   - **Mobile** — 390px wide (`browser_resize` to 390×844)
   - **Tablet** — 768px wide (`browser_resize` to 768×1024)
   - **Desktop** — 1280px wide (`browser_resize` to 1280×900)
4. Critically evaluate each screenshot before accepting the result. Apply these four triage lenses in order — each catches a different class of defect:

   **Optical correction** — Mathematical and perceptual alignment are not the same thing. `items-center` centers bounding boxes, not cap-heights; `items-baseline` inside a sub-group can shift a child's optical center far off the row's through-line even when the parent is centered. Ask: do elements that should feel level actually read as level? If unsure, measure with `getBoundingClientRect()` — all midpoints on a shared row should be within 1–2px of each other. Also check padding and spacing for the same problem: equal px values on mismatched elements (a large button next to a small badge) will look unequal because visual weight differs. Optical correction means adjusting values until it *looks* right, not until the numbers match.

   **Visual hierarchy and tension** — Every screen has a pecking order: what the eye lands on first, second, third. The right hierarchy feels effortless; a broken one creates *tension* — two elements competing for dominance when only one should win. Ask: is there one clear focal point per section? Does anything draw the eye that shouldn't? Common sources of unintended tension: a secondary badge or label rendered too large or too dark; a CTA color appearing in a non-interactive element; orphaned text that reads like a headline but isn't one.

   **Rhythm and proximity** — Spacing should feel like music, not math. Related elements cluster together (Gestalt proximity); unrelated elements breathe apart. A consistent spacing scale (8/12/16/24/40/64px) creates rhythm — when one gap breaks the scale, the eye notices even if the viewer can't name why. Ask: do the gaps between elements feel like they belong to the same system? Is any section starved for breathing room, or drowning in it? When a flex row wraps, is the result a deliberate two-row layout, or an accident?

   **Cohesion and system fidelity** — Every element should look like it was made for this brand, not assembled from parts. Ask: does this feel like Midway (warm, flat, serif headlines, fire red only on actions)? Is every color a brand token or a one-off? Is every type size from the scale? Would this component look at home next to the others on the page, or does it feel imported from a different system? If something feels "off brand" but you can't pinpoint why — check color temperature first (cool grays read corporate, warm grays read Midway), then check type weight (thin Playfair, or Inter used for a headline, are both system breaks).
5. Compare against design system and spec sheet.
6. Iterate until all three breakpoints match, then commit