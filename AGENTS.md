<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:ui-rules -->
## UI Code Standards

This project uses a hybrid model: shadcn owns behavior, frontend-design owns visuals.
Never conflate the two layers.

### Behavior layer — shadcn/ui (`.agents/skills/shadcn/SKILL.md`)

Use shadcn primitives only for what users cannot see: focus traps, keyboard navigation,
ARIA roles, dialog state, form field wiring. Do not use shadcn Card, Badge, Button, or
other visual components — those are replaced by copy-directed custom components.

When using a shadcn primitive:
- Run `npx shadcn@latest docs <component>` before use — this project uses base-ui, not radix
- Triggers: `render={<Button />}` not `asChild`
- Accordion: no `type` or `collapsible` props, `defaultValue` is an array
- Spacing: `flex flex-col gap-*` never `space-y-*`; `flex gap-*` never `space-x-*`
- Forms: `FieldGroup + Field`, never bare `div` wrappers

### Visual layer — frontend-design (`.agents/skills/frontend-design/SKILL.md`)

Every visible component is copy-directed and custom. The process:

1. Read the copy first. The content's shape, tone, and hierarchy dictate the component's
   structure and styling.
2. When `/design/design-system.md` exists, treat the brainstorm phase as a
   brief-compliance check — confirm your plan fits the existing tokens rather than
   inventing new ones.
3. Use semantic tokens (`bg-primary`, `text-muted-foreground`) from the design system
   as guardrails. Deviate only when the copy explicitly demands it, and name your reason.
4. `className` may carry color and typography overrides on custom components —
   shadcn's className-is-layout-only rule does not apply outside shadcn primitives.
5. Self-critique before finishing: screenshot, compare against `/design/design-system.md`,
   remove what doesn't serve the copy.

Colors: semantic tokens by default, raw values only when no token fits and the design
system doesn't cover the case.
<!-- END:ui-rules -->

<!-- BEGIN:playwright-rules -->
## Playwright MCP

All Playwright artifacts (screenshots, snapshots, logs) must be saved inside `.playwright-mcp/`. Never save them to the project root or any other directory. Always pass an explicit `filename` with a `.playwright-mcp/` prefix when calling screenshot or snapshot tools.
<!-- END:playwright-rules -->
