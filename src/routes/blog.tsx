import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Archi Green" },
      { name: "description", content: "Essays on architecture, sustainability and the craft of interior design." },
      { property: "og:title", content: "Insights & Inspiration — Archi Green" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <div>
      <Header />
      <section className="pt-40 pb-16 container-px">
        <Reveal>
          <p className="eyebrow text-ocean mb-6">Journal</p>
          <h1 className="text-display text-forest max-w-4xl">Insights & inspiration.</h1>
        </Reveal>
      </section>

      <section className="container-px pb-16">
        <Reveal>
          <Link to="/blog" className="group grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 overflow-hidden rounded-md aspect-[16/10]">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-widest text-ocean">{featured.category} · {featured.date}</div>
              <h2 className="mt-3 text-h3 text-forest group-hover:text-ocean transition-colors">{featured.title}</h2>
              <p className="mt-4 body-lg">{featured.excerpt}</p>
              <div className="mt-6 text-base text-stone font-medium">Read article →</div>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="container-px py-16 pb-32 grid md:grid-cols-3 gap-10 border-t border-border">
        {rest.concat(POSTS).slice(0, 6).map((p, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <Link to="/blog" className="group block">
              <div className="overflow-hidden rounded-md aspect-[4/3] bg-muted">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="mt-5">
                <div className="text-xs uppercase tracking-widest text-ocean">{p.category} · {p.date}</div>
                <h3 className="mt-2 font-display text-2xl text-forest leading-tight group-hover:text-ocean transition-colors">{p.title}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{p.excerpt}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <Footer />
    </div>
  );
}
