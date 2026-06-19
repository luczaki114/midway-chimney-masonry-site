@AGENTS.md

## Design system
Source of truth: /design/design-system.md
All shadcn theming happens via CSS variables in app/globals.css — never hardcode colors/spacing in components when a token exists for it.

## CTA discipline
Phone/email/business info lives in lib/business-info.ts. Every CTA button pulls from there. Never inline a phone number or address in a component.

## Iteration loop
1. Run `npm run dev`
2. Make the change
3. Use Playwright MCP to navigate to localhost:3000 and screenshot
4. Compare against /design/design-system.md (or referenced mockups)
5. Iterate until it matches, then commit
