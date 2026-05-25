# The Dot Company — Interior Design & Architecture Studio

A high-performance, premium, and fully responsive website for **The Dot Company**, a global architecture and interior design studio with offices in Stockholm, Lisbon, and Singapore. 

This website has been meticulously crafted to showcase our design practice, philosophy, selected portfolio works, journal insights, and a multi-step custom project brief booking inquiry system.

---

## 🎨 Design Philosophy & UX Standards

The Dot Company website is designed with a premium, organic color scheme (featuring rich Forest green, Ocean blue, and soft warm Cream) paired with modern typography:
*   **Typography**: *Jost* for clean geometric display headings, and *Montserrat* for crisp, high-legibility body copy.
*   **Micro-animations**: Subtle entrance animations and hover states powered by `framer-motion` to keep the layout feeling alive, interactive, and responsive.
*   **Accessibility & Legibility (Ages 28–60)**: To support an upscale demographic of property clients, all paragraph text, bios, excerpts, and lists are formatted with a minimum of `16px` (`text-base`) sizing, generous line height (`leading-relaxed`), and strong color contrast ratios.

---

## 🛠️ Technology Stack

This application is built using a modern full-stack web tech stack:

*   **Frontend Framework**: [React 19](https://react.dev/) for component-driven UI.
*   **Routing & SSR**: [TanStack Start](https://tanstack.com/router/latest/docs/start/overview) (TanStack Router + TanStack Server) providing fast server-side rendering, declarative typesafe routing, and instant hydration.
*   **Styles**: [Tailwind CSS v4](https://tailwindcss.com/) with a CSS-first design system config.
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) for performant, hardware-accelerated transitions.
*   **Icons**: [Lucide React](https://lucide.dev/) for smooth vector icon states.
*   **Build Tool**: [Vite 7](https://vite.dev/) for blazing-fast Hot Module Replacement (HMR).

---

## 📂 Project Structure

```bash
├── src/
│   ├── assets/             # Optimized image assets (hero, studio, etc.)
│   ├── components/
│   │   └── site/
│   │       ├── Header.tsx  # Dynamic floating navigation header
│   │       ├── Footer.tsx  # Brand footer containing "The Dot Company" copyright
│   │       └── Reveal.tsx  # Framer Motion scroll-reveal utility wrapper
│   ├── routes/             # TanStack Typesafe Routes
│   │   ├── __root.tsx      # Root HTML shell & meta configurations
│   │   ├── index.tsx       # Home & Hero view
│   │   ├── about.tsx       # Studio history and values
│   │   ├── services.tsx    # Details on disciplines and our process
│   │   ├── portfolio.tsx   # Categorized interactive project gallery
│   │   ├── blog.tsx        # Journal article index
│   │   └── contact.tsx     # Custom interactive multi-step project brief builder
│   ├── lib/
│   │   └── site-data.ts    # Central mock data (projects, services, posts)
│   └── styles.css          # Tailwind CSS layer base styles and brand custom theme
├── public/                 # Static assets
├── eslint.config.js        # Code quality linting config
├── vite.config.ts          # Core Vite bundler and path configurations
└── wrangler.jsonc          # Configuration for edge deployment
```

---

## 🚀 Getting Started

### Prerequisites

You need [Node.js](https://nodejs.org/) (v18 or higher recommended) and either `npm` or `bun`.

### Installation

Install all required packages and dependencies:

```bash
npm install
```

### Run Local Development Server

Launch the development server with HMR:

```bash
npm run dev
```

The dev server will run locally at [http://localhost:8080/](http://localhost:8080/).

### Production Build

To build the static server and client bundle:

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

---

## ⚖️ License & Ownership

© 2026 The Dot Company. All rights reserved.
