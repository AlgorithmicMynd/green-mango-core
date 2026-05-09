# Mango Stack AI — `green-mango-core`

> **Enterprise-Grade AI & Automation** — Marketing website for Mango Stack AI.  
> Built with TanStack Start (SSR), React 19, Tailwind CSS v4, and deployed to Cloudflare Workers.

---

## 🌐 Live Preview

> `www.mangostackai.com` *(deploy via Cloudflare Workers — see deployment section below)*

---

## ⚡ Quick Start

### Prerequisites

You need the following installed on your machine before running this project:

| Tool | Version | Install |
|---|---|---|
| **Node.js** | ≥ 20.x | [nodejs.org](https://nodejs.org) |
| **Bun** | ≥ 1.x | `curl -fsSL https://bun.sh/install \| bash` |

> **Why Bun?** The project uses a `bun.lock` lockfile. Bun is a fast JavaScript runtime + package manager. You can also use `npm` but Bun is recommended.

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd MangoStackAI/green-mango-core
```

### 2. Install dependencies

```bash
bun install
```

> If you don't have Bun, use `npm install` instead. Note: `npm` may be slightly slower and produce a different lockfile.

### 3. Start the development server

```bash
bun run dev
```

The app will be available at **[http://localhost:3000](http://localhost:3000)**

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start local dev server with hot reload |
| `bun run build` | Production build (outputs to `dist/`) |
| `bun run build:dev` | Development build |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint |
| `bun run format` | Format all files with Prettier |

---

## 🏗️ Project Structure

```
green-mango-core/
├── src/
│   ├── assets/              # Images: logo.png, mango-hero.png, dashboard.jpg
│   ├── components/
│   │   ├── landing/         # Page section components (Navbar, Hero, CTA, etc.)
│   │   └── ui/              # 46 pre-built shadcn/Radix UI primitives
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   ├── cms-data.ts      # ⭐ All page content lives here (edit this for copy changes)
│   │   └── utils.ts         # cn() helper
│   ├── routes/
│   │   ├── __root.tsx       # HTML shell + SEO meta + error boundaries
│   │   └── index.tsx        # Landing page "/"
│   ├── router.tsx           # TanStack Router setup
│   ├── server.ts            # Cloudflare Worker entry + SSR error handling
│   ├── start.ts             # TanStack Start middleware
│   └── styles.css           # Global CSS + design tokens
├── package.json
├── vite.config.ts
├── wrangler.jsonc           # Cloudflare Workers deployment config
└── tsconfig.json
```

---

## 📚 Key Dependencies

### Core Framework
| Package | Version | Purpose |
|---|---|---|
| `react` | ^19.2.0 | UI library |
| `@tanstack/react-start` | ^1.167.50 | SSR framework (TanStack Start) |
| `@tanstack/react-router` | ^1.168.25 | File-based routing |
| `@tanstack/react-query` | ^5.83.0 | Server state & data fetching |

### Styling
| Package | Version | Purpose |
|---|---|---|
| `tailwindcss` | ^4.2.1 | Utility-first CSS (v4, Vite plugin mode) |
| `tw-animate-css` | ^1.3.4 | CSS animation utilities |
| `class-variance-authority` | ^0.7.1 | Component variant system |
| `clsx` + `tailwind-merge` | latest | `cn()` conditional class utility |

### UI Components
| Package | Version | Purpose |
|---|---|---|
| `@radix-ui/*` | various | Accessible headless UI primitives |
| `lucide-react` | ^0.575.0 | Icon set (600+ icons) |
| `framer-motion` | ^12.38.0 | Animations (scroll, hover, entrance) |
| `sonner` | ^2.0.7 | Toast notifications |
| `recharts` | ^2.15.4 | Charts & data visualisation |
| `embla-carousel-react` | ^8.6.0 | Carousel component |
| `cmdk` | ^1.1.1 | Command palette |
| `vaul` | ^1.1.2 | Drawer component |

### Forms & Validation
| Package | Version | Purpose |
|---|---|---|
| `react-hook-form` | ^7.71.2 | Form state management |
| `@hookform/resolvers` | ^5.2.2 | Zod integration for forms |
| `zod` | ^3.24.2 | Schema validation |

### Infrastructure & Build
| Package | Version | Purpose |
|---|---|---|
| `vite` | ^7.3.1 | Build tool |
| `@cloudflare/vite-plugin` | ^1.25.5 | Cloudflare Workers build |
| `@lovable.dev/vite-tanstack-config` | ^1.5.1 | Pre-configured Vite setup |
| `typescript` | ^5.8.3 | Type safety |

---

## 🎨 Design System

This project uses a **dark-mode only** design with a deep charcoal + vibrant green palette.

### Brand Colors
- **Background**: Deep charcoal (`oklch(0.18 0.025 255)`)
- **Primary / Brand Green**: `oklch(0.78 0.21 145)`
- **Surface (cards)**: `oklch(0.22 0.028 255)`

### Custom CSS Classes
| Class | Effect |
|---|---|
| `.glass` | Glassmorphism (backdrop blur + semi-transparent) |
| `.text-gradient` | Green gradient text |
| `.hover-glow` | Mouse-tracking spotlight hover effect |
| `.grid-bg` | Subtle green grid background overlay |
| `.marquee` | Infinite horizontal scroll animation |

---

## ✏️ Editing Content

All page copy and navigation data is centralised in one file:

```
src/lib/cms-data.ts
```

Edit the exported objects to change any text on the page — no touching component files needed. This file is designed to be swapped for a **Sanity CMS** client in the future.

---

## 🚀 Deployment (Cloudflare Workers)

1. Install [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/): `npm install -g wrangler`
2. Authenticate: `wrangler login`
3. Build: `bun run build`
4. Deploy: `wrangler deploy`

Config lives in `wrangler.jsonc`.

---

## 📄 Additional Documentation

- [`CODEBASE_OVERVIEW.md`](./CODEBASE_OVERVIEW.md) — Deep-dive architecture reference
- [`DEV_REFERENCE.md`](./DEV_REFERENCE.md) — Day-to-day developer quick reference

---

## 📬 Contact

**Harsh Shukla**  
📧 harsh.shukla@mangostackai.com  
📞 +91 9315507269  
🌐 [www.mangostackai.com](https://www.mangostackai.com)
