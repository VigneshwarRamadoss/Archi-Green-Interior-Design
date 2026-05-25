import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES, PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Archi Green" },
      { name: "description", content: "Residential, commercial, hospitality, architecture, renovation and sustainability consulting." },
      { property: "og:title", content: "Our Services — Archi Green" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <Header />
      <section className="pt-40 pb-20 container-px">
        <Reveal>
          <p className="eyebrow text-ocean mb-6">What we do</p>
          <h1 className="text-display text-forest max-w-4xl">A complete studio for the rooms you live in.</h1>
        </Reveal>
      </section>

      <section className="container-px pb-32 space-y-28 lg:space-y-40">
        {SERVICES.map((s, i) => {
          const img = PROJECTS[i % PROJECTS.length].image;
          const reversed = i % 2 === 1;
          return (
            <Reveal key={s.title}>
              <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7">
                  <div className="aspect-[4/3] overflow-hidden rounded-md">
                    <img src={img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="font-display text-stone text-sm tracking-widest">0{i + 1} / 0{SERVICES.length}</div>
                  <h2 className="mt-3 text-h3 text-forest">{s.title}</h2>
                  <p className="mt-5 body-lg">{s.desc}</p>
                  <ul className="mt-6 space-y-2 text-base text-muted-foreground">
                    <li>· Strategy & feasibility</li>
                    <li>· Concept and material direction</li>
                    <li>· Construction drawings & documentation</li>
                    <li>· On-site delivery & art direction</li>
                  </ul>
                  <Link to="/contact" className="mt-8 inline-flex h-12 items-center px-6 rounded-full border border-forest text-forest hover:bg-forest hover:text-primary-foreground transition-colors">
                    Discuss a project
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      <section className="bg-forest text-primary-foreground py-28">
        <div className="container-px">
          <Reveal>
            <p className="eyebrow text-white/60 mb-4">How we work</p>
            <h2 className="text-h2 max-w-2xl">A four-step process. No surprises.</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              ["Discovery", "We listen, walk the site, and write the brief together."],
              ["Concept", "Three directions, one signed off. Tested in plan and elevation."],
              ["Design", "Full documentation, materiality, lighting, FF&E."],
              ["Delivery", "We are on site weekly until the last picture is hung."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="bg-forest p-8 h-full">
                  <div className="font-display text-4xl text-white/40">0{i + 1}</div>
                  <h3 className="mt-6 font-display text-2xl">{t}</h3>
                  <p className="mt-3 text-base text-white/70 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
