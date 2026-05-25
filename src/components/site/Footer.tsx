import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="container-px py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="font-display text-2xl font-semibold mb-4">Archi Green</div>
          <p className="text-sm leading-relaxed text-primary-foreground/70">
            An interior design and architecture studio crafting purposeful,
            sustainable spaces since 2010. Stockholm · Lisbon · Singapore.
          </p>
        </div>

        <div>
          <div className="eyebrow text-primary-foreground/60 mb-4">Studio</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/team" className="hover:text-white">Team</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/blog" className="hover:text-white">Journal</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-primary-foreground/60 mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>14 Östermalmsgatan</li>
            <li>114 26 Stockholm, SE</li>
            <li className="pt-2">hello@archigreen.studio</li>
            <li>+46 8 555 010 24</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} The Dot Company. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/">Privacy</Link>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
