import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal, stagger, item } from "@/components/site/Reveal";
import { PROJECTS, SERVICES, STATS, POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Philosophy />
      <Featured />
      <Services />
      <Stats />
      <Testimonials />
      <Journal />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden bg-forest">
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] h-[120%]">
        <img src={hero} alt="Forest-side living room" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/30 to-forest/70" />
      <div className="relative z-10 h-full flex items-end pb-20 lg:pb-28">
        <div className="container-px w-full text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow text-white/80 mb-6"
          >
            Interior Design & Architecture · Est. 2010
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-display max-w-5xl"
          >
            Designing spaces.<br /><em className="not-italic text-white/70">Defining lives.</em>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link to="/portfolio" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-forest hover:bg-cream transition-colors">
              View Our Work <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-white/50 text-white hover:bg-white hover:text-forest transition-colors">
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 lg:right-12 text-white/60 text-xs tracking-widest uppercase rotate-90 origin-bottom-right hidden lg:block">
        Scroll
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-28 lg:py-40 bg-cream">
      <div className="container-px grid lg:grid-cols-12 gap-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-ocean mb-6">Our Philosophy</p>
          <h2 className="text-h2 text-forest">Architecture meets nature.</h2>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7 max-text">
          <p className="body-lg">
            Every space we design is a dialogue between structure and life —
            where precision meets purpose, and materials honour the environment
            they came from. We believe great rooms feel inevitable, like they
            could have existed no other way.
          </p>
          <p className="mt-6 body-lg">
            For fifteen years we've worked with families, founders and
            hoteliers who want their environments to carry meaning. The work is
            quiet, considered, and built to last decades.
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-ocean hover:text-navy">
            Our full story <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="py-28 lg:py-40">
      <div className="container-px flex items-end justify-between mb-14">
        <Reveal>
          <p className="eyebrow text-ocean mb-4">Selected Works</p>
          <h2 className="text-h2 text-forest max-w-xl">A practice told in projects.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/portfolio" className="hidden md:inline-flex items-center gap-2 text-ocean hover:text-navy">
            View all <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="container-px grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
      >
        {PROJECTS.slice(0, 6).map((p, i) => (
          <motion.div key={p.slug} variants={item} className={i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}>
            <Link to="/portfolio" className="group block">
              <div className="relative overflow-hidden rounded-md bg-muted aspect-[4/5]">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/30 transition-colors duration-500" />
                <div className="absolute top-4 left-4 text-xs uppercase tracking-widest text-white/90 bg-forest/40 backdrop-blur px-3 py-1 rounded-full">
                  {p.category}
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl text-forest">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.location} · {p.year}</p>
                </div>
                <ArrowUpRight className="text-ocean opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-28 lg:py-40 bg-cream">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow text-ocean mb-4">What We Do</p>
          <h2 className="text-h2 text-forest max-w-2xl mb-16">Six disciplines, one studio.</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="bg-cream p-8 lg:p-10 h-full flex flex-col">
                <div className="font-display text-2xl text-forest mb-4">0{i + 1}</div>
                <h3 className="font-display text-xl text-forest mb-3">{s.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <Link to="/services" className="mt-6 text-base text-ocean hover:text-navy inline-flex items-center gap-1 font-medium">
                  Learn more <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-forest text-primary-foreground">
      <div className="container-px py-24 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="border-t border-white/15 pt-6">
              <div className="font-display text-5xl lg:text-6xl">{s.value}</div>
              <div className="mt-3 text-xs uppercase tracking-widest text-white/60">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { q: "They turned a difficult heritage building into the most loved room of our hotel. We trust them completely.", a: "Lena Wahlström", role: "Founder, Hotel Tystnad" },
    { q: "Archi Green don't sell a style — they listen, and then build the home you didn't know you wanted.", a: "David & Iris Holm", role: "Forest House clients" },
  ];
  return (
    <section className="py-28 lg:py-40">
      <div className="container-px grid lg:grid-cols-2 gap-10 lg:gap-16">
        {quotes.map((q, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <figure className="p-10 border border-border rounded-lg h-full bg-cream/40">
              <blockquote className="font-display text-2xl lg:text-3xl text-forest leading-snug">
                "{q.q}"
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-foreground font-medium text-base">{q.a}</div>
                <div className="text-muted-foreground text-sm mt-0.5">{q.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="py-28 lg:py-40 bg-cream">
      <div className="container-px flex items-end justify-between mb-14">
        <Reveal>
          <p className="eyebrow text-ocean mb-4">Journal</p>
          <h2 className="text-h2 text-forest">Insights & inspiration.</h2>
        </Reveal>
        <Reveal>
          <Link to="/blog" className="hidden md:inline-flex items-center gap-2 text-ocean">All articles <ArrowRight size={16} /></Link>
        </Reveal>
      </div>
      <div className="container-px grid md:grid-cols-3 gap-10">
        {POSTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
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
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <img src={studio} alt="Inside the studio" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-forest/80" />
      <div className="relative container-px py-32 lg:py-48 text-white text-center">
        <Reveal>
          <p className="eyebrow text-white/70 mb-6">Begin</p>
          <h2 className="text-h2 max-w-3xl mx-auto">Ready to transform your space?</h2>
          <p className="mt-6 body-lg text-white/80 max-w-xl mx-auto">
            Every project begins with a conversation. Tell us about yours — we
            respond within one business day.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 h-12 px-7 rounded-full bg-white text-forest hover:bg-cream transition-colors">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
