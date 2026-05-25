import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Archi Green" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Let's create something remarkable" },
    ],
  }),
  component: ContactPage,
});

type Form = {
  projectType: string;
  budget: string;
  location: string;
  timeline: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  source: string;
};

const empty: Form = {
  projectType: "", budget: "", location: "", timeline: "",
  description: "", name: "", email: "", phone: "", source: "",
};

function ContactPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(empty);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));

  const steps = [
    { label: "Your Project" },
    { label: "Project Details" },
    { label: "About You" },
  ];

  return (
    <div>
      <Header />
      <section className="pt-40 pb-12 container-px">
        <Reveal>
          <p className="eyebrow text-ocean mb-6">Begin</p>
          <h1 className="text-display text-forest max-w-4xl">Let's create something remarkable.</h1>
          <p className="mt-8 body-lg max-w-2xl">
            Tell us about your project. We'll respond within one business day.
          </p>
        </Reveal>
      </section>

      <section className="container-px pb-32 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="border border-border rounded-lg p-12 bg-cream/40 text-center">
              <div className="mx-auto size-14 rounded-full bg-forest text-primary-foreground flex items-center justify-center">
                <Check />
              </div>
              <h2 className="mt-6 text-h3 text-forest">Thank you — we'll be in touch.</h2>
              <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                Expect a response within one business day. In the meantime, you
                might enjoy our journal.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="border border-border rounded-lg p-8 lg:p-10 bg-cream/30"
            >
              <div className="flex items-center gap-3 mb-8">
                {steps.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className={`size-8 rounded-full flex items-center justify-center text-xs font-display ${
                      i <= step ? "bg-forest text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>{i + 1}</div>
                    <div className={`text-xs uppercase tracking-widest hidden md:block ${i === step ? "text-forest" : "text-muted-foreground"}`}>{s.label}</div>
                    {i < steps.length - 1 && <div className="w-8 h-px bg-border" />}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  {step === 0 && (
                    <>
                      <Field label="Project type">
                        <select value={form.projectType} onChange={(e) => set("projectType", e.target.value)} className={selectCls} required>
                          <option value="">Choose…</option>
                          {["Residential", "Commercial", "Hospitality", "Renovation", "Other"].map((o) => <option key={o}>{o}</option>)}
                        </select>
                      </Field>
                      <Field label="Estimated budget">
                        <select value={form.budget} onChange={(e) => set("budget", e.target.value)} className={selectCls} required>
                          <option value="">Choose…</option>
                          {["Under $50K", "$50K–$150K", "$150K–$500K", "$500K+"].map((o) => <option key={o}>{o}</option>)}
                        </select>
                      </Field>
                      <Field label="Project location">
                        <input value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="City, Country" className={inputCls} required />
                      </Field>
                    </>
                  )}
                  {step === 1 && (
                    <>
                      <Field label="Ideal timeline">
                        <select value={form.timeline} onChange={(e) => set("timeline", e.target.value)} className={selectCls} required>
                          <option value="">Choose…</option>
                          {["ASAP", "1–3 months", "3–6 months", "6+ months"].map((o) => <option key={o}>{o}</option>)}
                        </select>
                      </Field>
                      <Field label="Tell us about your vision">
                        <textarea value={form.description} onChange={(e) => set("description", e.target.value)} maxLength={500} rows={6} className={inputCls} placeholder="What are you building? What does success look like?" />
                      </Field>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <Field label="Full name">
                        <input value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} required />
                      </Field>
                      <Field label="Email">
                        <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} required />
                      </Field>
                      <Field label="Phone (optional)">
                        <input value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputCls} />
                      </Field>
                      <Field label="How did you hear about us?">
                        <select value={form.source} onChange={(e) => set("source", e.target.value)} className={selectCls}>
                          <option value="">Choose…</option>
                          {["Google", "Referral", "Social media", "Press", "Other"].map((o) => <option key={o}>{o}</option>)}
                        </select>
                      </Field>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="text-sm text-muted-foreground disabled:opacity-30 hover:text-forest"
                >
                  ← Back
                </button>
                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    className="h-12 px-6 rounded-full bg-forest text-primary-foreground inline-flex items-center gap-2"
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                ) : (
                  <button type="submit" className="h-12 px-6 rounded-full bg-forest text-primary-foreground inline-flex items-center gap-2">
                    Send my brief <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        <aside className="lg:col-span-4 lg:col-start-9 space-y-10">
          <Reveal>
            <div>
              <div className="eyebrow text-ocean mb-3">Stockholm Studio</div>
              <p className="text-foreground">14 Östermalmsgatan<br />114 26 Stockholm, Sweden</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <div className="eyebrow text-ocean mb-3">Get in touch</div>
              <p className="text-foreground">hello@archigreen.studio</p>
              <p className="text-foreground">+46 8 555 010 24</p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div>
              <div className="eyebrow text-ocean mb-3">Hours</div>
              <p className="text-muted-foreground text-base">Mon–Fri · 09:00–18:00 CET</p>
            </div>
          </Reveal>
        </aside>
      </section>

      <Footer />
    </div>
  );
}

const inputCls =
  "w-full h-12 px-4 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition-colors text-foreground";
const selectCls = inputCls + " appearance-none";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-stone block mb-2">{label}</span>
      {children}
    </label>
  );
}
