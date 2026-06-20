# Recipes · Forms (Input, Textarea, Select, FormField)

Assumes the `tailwind.css` bridge is loaded — shadcn form fields already pick up `--input`
(mid-gray border), `--background` (warm off-white), `--ring` (fire-red focus), and `--radius`
(6px). Brand-specific overrides below.

---

## The one critical override: 16px text

shadcn inputs default to `text-sm` (14px). The brand minimum for body/input text is **15px, base
16px** — and 14px hurts mobile accessibility. **Override every field to `text-base` (16px).**

---

## Input / Textarea / Select — shared spec

- **Background:** warm off-white (`--background`) · **Text:** warm body `text-body` · **16px** `text-base`
- **Border:** `border border-mid-gray` (1px) · **Radius:** `rounded-card` (6px)
- **Placeholder:** mid-gray (`placeholder:text-mid-gray`) — Inter Regular
- **Focus:** border → fire + 2px fire ring → `focus-visible:border-fire focus-visible:ring-2 focus-visible:ring-fire focus-visible:ring-offset-2`
- **Error:** `border-fire` (error border stays FIRE red, not oxblood) + message below
- **Disabled:** `bg-[#E8E5E1] text-mid-gray cursor-not-allowed`
- **Transition:** `transition-colors duration-250 ease-in-out`
- **Textarea:** `resize-y`, min `rows={3}` · **Select:** native or shadcn Select; keep the 6px radius and fire focus ring.

```tsx
<input className="w-full rounded-card border border-mid-gray bg-[--background] text-body
  text-base px-3.5 py-2.5 placeholder:text-mid-gray transition-colors duration-250 ease-in-out
  focus-visible:border-fire focus-visible:ring-2 focus-visible:ring-fire focus-visible:ring-offset-2
  focus-visible:outline-none" />
```

---

## FormField — labels ABOVE, never as placeholders

Wrapper: `flex flex-col gap-2` (8px gap).

- **Label:** `text-[15px] font-semibold text-body` — sits above the control, always. Never use the
  placeholder as the label.
- **Hint:** `text-sm text-mid-gray` (14px), shown when there's no error.
- **Error:** `text-sm text-fire` (14px), below the control; also set `border-fire` on the control.

```tsx
<div className="flex flex-col gap-2">
  <label htmlFor="phone" className="text-[15px] font-semibold text-body">Phone</label>
  <input id="phone" type="tel" className="…(field spec)…" />
  <span className="text-sm text-mid-gray">We'll call to confirm</span>
</div>
```

**On dark form panels** (e.g. a near-black contact card): label `text-off-white`, hint
`text-on-dark-muted` (`#C9C3BD`), error a lifted red like `#F2A8AE` for contrast. Field background
stays warm off-white.
