import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { TEAM } from "@/lib/site-data";
import { Linkedin } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Archi Green" },
      { name: "description", content: "The architects, interior designers and sustainability specialists behind Archi Green." },
      { property: "og:title", content: "The People Behind Archi Green" },
    ],
  }),
  component: TeamPage,
});

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2);
}

function TeamPage() {
  return (
    <div>
      <Header />
      <section className="pt-40 pb-16 container-px">
        <Reveal>
          <p className="eyebrow text-ocean mb-6">The Team</p>
          <h1 className="text-display text-forest max-w-4xl">The people behind the spaces.</h1>
          <p className="mt-8 body-lg max-w-2xl">
            Twenty-two architects, interior designers and sustainability
            specialists across three studios. Every project is led, personally,
            by one of our principals.
          </p>
        </Reveal>
      </section>

      <section className="pb-28 container-px grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.05}>
            <div className="group">
              <div className="aspect-square rounded-md bg-gradient-to-br from-sage/30 via-cream to-cream flex items-center justify-center text-forest font-display text-6xl overflow-hidden">
                {initials(m.name)}
              </div>
              <div className="mt-5">
                <h3 className="font-display text-xl text-forest">{m.name}</h3>
                <p className="text-sm text-ocean mt-1">{m.role}</p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{m.bio}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone hover:text-ocean">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="bg-cream">
        <div className="container-px py-24 text-center">
          <h2 className="text-h2 text-forest">Want to work with our team?</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center h-12 px-7 rounded-full bg-forest text-primary-foreground">
            Start a conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
