# MangoStackAI — Developer Quick Reference

Quick lookup card for day-to-day development. For full context see [CODEBASE_OVERVIEW.md](./CODEBASE_OVERVIEW.md).

---

## 🚀 Common Commands

```bash
bun run dev          # Start dev server (hot reload)
bun run build        # Production build
bun run lint         # ESLint check
bun run format       # Prettier format
```

---

## 📁 Where Things Live

| What | Where |
|---|---|
| All landing page **copy & data** | `src/lib/cms-data.ts` |
| Landing **section components** | `src/components/landing/` |
| **Radix/shadcn UI** primitives | `src/components/ui/` |
| **Design tokens** (colors, gradients) | `src/styles.css` `:root` block |
| **Route definitions** | `src/routes/` |
| Global SEO meta / HTML shell | `src/routes/__root.tsx` |
| Static images | `src/assets/` |
| Mobile breakpoint hook | `src/hooks/use-mobile.tsx` |
| Cloudflare Worker entry | `src/server.ts` |
| TanStack Start middleware | `src/start.ts` |

---

## 🗺️ Page Composition (index route `/`)

```
<Navbar />         sticky top, glassmorphism, mega-dropdown
<Hero />           animated headline + CTA buttons
<LogoMarquee />    infinite scroll trust logos
<Departments />    4-column solution cards
<FeatureSplit />   feature list + dashboard screenshot
<Testimonials />   3-column quote cards
<CTA />            full-width demo request card
<Footer />         logo + copyright line
```

---

## ✏️ Editing Content

All content lives in **`src/lib/cms-data.ts`** — no string changes needed in component files.

| Data Object | Controls |
|---|---|
| `hero` | Eyebrow tag, headline, subtitle, CTA button labels & hrefs |
| `trustedLogos` | Scrolling partner logo text list |
| `departments` | 4 solution cards (icon key, title, description, link) |
| `features` | Checklist bullets in the FeatureSplit section |
| `testimonials` | Quote cards (quote text, author, company) |
| `navMenus` | Navbar dropdown items (label, href, short desc) |

> **Icon keys** for departments must match Lucide icon names: `Cog`, `Megaphone`, `TrendingUp`, `Users`  
> Add new icons to the `iconMap` in `Departments.tsx` before using them.

---

## 🎨 Design System Cheatsheet

### Primary Colors (oklch)
| Token | Purpose |
|---|---|
| `--background` `oklch(0.18 0.025 255)` | Page background (deep charcoal) |
| `--primary` `oklch(0.78 0.21 145)` | Brand green (buttons, accents, glow) |
| `--surface` `oklch(0.22 0.028 255)` | Card / component backgrounds |
| `--muted-foreground` `oklch(0.7 0.02 250)` | Secondary text |

### Utility Classes
| Class | Use It For |
|---|---|
| `.glass` | Navbar, dropdowns — backdrop blur + semi-transparent |
| `.text-gradient` | Headline gradient text (green diagonal) |
| `.hover-glow` | Interactive cards — mouse-tracking green spotlight |
| `.grid-bg` | Section backgrounds — subtle green-tinted grid |
| `.marquee` | Infinite horizontal scrolling strip |

### Using `.hover-glow` (requires JS)
```tsx
function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

// In JSX:
<div className="hover-glow ..." onMouseMove={handleMouseMove}>
```

### Button Pattern
```tsx
// Primary (gradient + glow)
<a
  href="#demo"
  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.04]"
  style={{ background: "var(--gradient-primary)" }}
>
  Get Started <ArrowRight className="h-4 w-4" />
</a>

// Secondary (outlined)
<a
  href="#demo"
  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold transition hover:scale-[1.04] hover:border-primary/50"
>
  Learn More
</a>
```

---

## 🗂️ Adding a New Route

1. Create `src/routes/my-page.tsx`:
```tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/my-page")({
  component: MyPage,
  head: () => ({
    meta: [{ title: "My Page — Mango Stack AI" }],
  }),
});

function MyPage() {
  return <main>...</main>;
}
```
2. Run `bun run dev` — `routeTree.gen.ts` auto-regenerates. **Never edit that file manually.**
3. Add a `<Link to="/my-page">` in `Navbar.tsx` if needed.

---

## 🧩 Adding a shadcn Component

The `src/components/ui/` directory has 46 pre-built components. To use one:
```tsx
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
```

To add a new shadcn component not yet present, use the CLI or manually create it following the existing pattern (Radix primitive + `cn()` utility).

---

## ⚙️ Vite Config Warning

> Do **NOT** manually add these plugins to `vite.config.ts` — they are already bundled by `@lovable.dev/vite-tanstack-config`:
> `tanstackStart` · `viteReact` · `tailwindcss` · `tsConfigPaths` · `cloudflare` · `componentTagger`

Only pass extra config via the `defineConfig({ vite: { ... } })` shape.

---

## 🔧 Error Handling Architecture

```
HTTP Request
  ↓
src/server.ts          ← Cloudflare Worker fetch handler
  ├─ catches hard throws → HTML 500 error page
  └─ detects h3's swallowed JSON 500 → real error via error-capture.ts → HTML 500

src/start.ts           ← TanStack Start middleware (per request)
  ├─ re-throws HTTP errors (with statusCode)
  └─ returns HTML 500 for all unhandled server errors
```

- `src/lib/error-capture.ts` — registers global `error`/`unhandledrejection` listeners, 5s TTL
- `src/lib/error-page.ts` — returns bare HTML string (no React dependency)

---

## 📦 Key Dependencies at a Glance

| Package | Purpose |
|---|---|
| `@tanstack/react-start` | SSR framework (TanStack Start) |
| `@tanstack/react-router` | File-based client/server router |
| `@tanstack/react-query` | Server state & data fetching |
| `framer-motion` | Animations (entrance, hover, exit) |
| `lucide-react` | Icon set |
| `tailwindcss` v4 | Utility CSS (Vite plugin mode) |
| `@radix-ui/*` | Accessible UI primitives |
| `class-variance-authority` | Component variant styling |
| `clsx` + `tailwind-merge` | `cn()` utility for conditional classes |
| `zod` | Schema validation |
| `react-hook-form` | Form state management |
| `recharts` | Charts (available, not yet used) |
| `sonner` | Toast notifications (available, not yet used) |
| `@cloudflare/vite-plugin` | Cloudflare Workers build integration |
