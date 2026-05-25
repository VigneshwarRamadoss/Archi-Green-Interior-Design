import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const transparent = onHome && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        transparent
          ? "bg-transparent border-transparent text-white"
          : "bg-background/85 border-border backdrop-blur-xl text-foreground"
      }`}
    >
      <div className="container-px h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight">
          <span className={`inline-block size-2 rounded-full transition-colors duration-300 ${transparent ? "bg-white" : "bg-forest"}`} />
          Archi<span className="opacity-60">Green</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-[16px] font-normal transition-colors hover:text-ocean"
              activeProps={{ className: "px-4 py-2 text-[16px] text-ocean" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className={`inline-flex items-center h-11 px-5 rounded-full border text-[15px] transition-colors duration-300 ${
              transparent
                ? "border-white/60 text-white hover:bg-white hover:text-forest"
                : "border-forest text-forest hover:bg-forest hover:text-primary-foreground"
            }`}
          >
            Book Consultation
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background text-foreground border-t border-border">
          <div className="container-px py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="py-3 text-lg font-display">
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center h-12 px-5 rounded-full border border-forest text-forest"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
