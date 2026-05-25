import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { PROJECTS } from "@/lib/site-data";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Archi Green" },
      { name: "description", content: "Selected residential, commercial and hospitality projects by Archi Green." },
      { property: "og:title", content: "Our Work — Archi Green" },
    ],
  }),
  component: PortfolioPage,
});

const FILTERS = ["All", "Residential", "Commercial", "Hospitality", "Renovation"] as const;

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div>
      <Header />
      <section className="pt-40 pb-12 container-px">
        <Reveal>
          <p className="eyebrow text-ocean mb-6">Our Work</p>
          <h1 className="text-display text-forest max-w-4xl">Selected projects.</h1>
          <p className="mt-8 body-lg max-w-2xl">
            A growing catalogue of completed work across residential, commercial,
            hospitality and adaptive reuse.
          </p>
        </Reveal>
      </section>

      <section className="container-px sticky top-[72px] bg-background z-30 py-4 border-b border-border">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm whitespace-nowrap rounded-full transition-colors ${
                filter === f ? "bg-forest text-primary-foreground" : "text-muted-foreground hover:text-forest"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="container-px py-16 pb-32">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                layout
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 text-xs uppercase tracking-widest text-white/90 bg-forest/40 backdrop-blur px-3 py-1 rounded-full">{p.category}</div>
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-xl text-forest">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.location} · {p.year}</p>
                  <p className="text-base text-muted-foreground mt-2 max-w-sm leading-relaxed">{p.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <div className="text-center text-muted-foreground py-20">No projects in this category yet.</div>
        )}
      </section>

      <Footer />
    </div>
  );
}
