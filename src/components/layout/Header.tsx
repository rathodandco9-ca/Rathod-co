import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-soft border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-pro flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
            <span className="font-display text-lg font-bold text-primary">R</span>
            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-primary border-2 border-background" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-primary">Rathod &amp; Co.</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Tax Consultants · Vadodara
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute left-1/2 -bottom-0.5 h-px w-6 -translate-x-1/2 bg-accent" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="hero" size="sm">
            <Link to="/contact">
              Free Consultancy
            </Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden p-2 -mr-2 text-primary"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-pro py-6 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-3 px-2 text-base font-medium border-b border-border/60",
                    isActive ? "text-accent" : "text-primary"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-3 pt-5">
              <Button asChild variant="hero" size="lg">
                <a href={SITE.whatsapp()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={SITE.tel}>Call {SITE.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
