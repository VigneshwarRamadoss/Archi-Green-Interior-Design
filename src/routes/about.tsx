import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import studio from "@/assets/studio.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Dot Company" },
      { name: "description", content: "A Stockholm-born studio of architects and interior designers. Sustainable, considered, built to last." },
      { property: "og:title", content: "About — Archi Green" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <Header />
      <section className="pt-40 pb-20 container-px">
        <Reveal>
          <p className="eyebrow text-ocean mb-6">About the Studio</p>
          <h1 className="text-display text-forest max-w-4xl">Designing with purpose, since 2010.</h1>
        </Reveal>
      </section>

      <section className="container-px">
        <Reveal>
          <div className="aspect-[16/8] overflow-hidden rounded-md">
            <img src={hero} alt="Forest house" className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="py-28 lg:py-40 container-px grid lg:grid-cols-12 gap-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-ocean mb-4">Our Story</p>
          <h2 className="text-h2 text-forest">A studio shaped by trees and time.</h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 max-text">
          <p className="body-lg">
            Archi Green was founded in 2010 by Elin Bergström, with a single brief:
            design buildings that are kind to the land they sit on. Fifteen years
            later we are a studio of twenty-two architects, interior designers and
            sustainability specialists, working from Stockholm, Lisbon and Singapore.
          </p>
          <p className="mt-6 body-lg">
            We are deliberately small. Every project is led by a principal,
            personally. We turn down more work than we accept — because the work we
            do, we want to be able to point at in twenty years.
          </p>
        </Reveal>
      </section>

      <section className="py-24 bg-cream">
        <div className="container-px grid md:grid-cols-3 gap-10">
          {[
            { t: "Precision", d: "Grids are sacred. Alignment is non-negotiable. Whitespace is an active material." },
            { t: "Sustainability", d: "Embodied carbon, lifecycle thinking and local material strategies in every brief." },
            { t: "Partnership", d: "We work for a small number of clients, deeply. Most have hired us more than once." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div>
                <div className="font-display text-3xl text-forest">0{i + 1}</div>
                <h3 className="mt-4 font-display text-2xl text-forest">{v.t}</h3>
                <p className="mt-3 text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-28 lg:py-40 container-px">
        <Reveal>
          <p className="eyebrow text-ocean mb-4">Recognition</p>
          <h2 className="text-h2 text-forest mb-12">Selected awards & press.</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 opacity-70">
          {["Dezeen Awards 2024","Wallpaper* 2023","Architectural Digest","World Architecture Festival","Frame Magazine","RIBA Selection","Surface Future 100","ELLE Decor"].map((a) => (
            <div key={a} className="font-display text-sm tracking-widest uppercase text-stone">{a}</div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={studio} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="relative container-px py-32 text-white text-center">
          <h2 className="text-h2 max-w-3xl mx-auto">Meet the people behind the work.</h2>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link to="/team" className="h-12 px-6 rounded-full bg-white text-forest inline-flex items-center">Meet the team</Link>
            <Link to="/contact" className="h-12 px-6 rounded-full border border-white/60 inline-flex items-center">Work with us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
