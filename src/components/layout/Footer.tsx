import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICE_CATEGORIES } from "@/lib/services";

export const Footer = () => {
  const popular = SERVICE_CATEGORIES.flatMap((c) => c.services).slice(0, 6);
  return (
    <footer className="bg-secondary/50 text-foreground border-t border-border">
      <div className="container-pro py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-md bg-gradient-gold flex items-center justify-center">
                <span className="font-display text-xl text-primary">R</span>
              </div>
              <div>
                <div className="font-display text-xl text-primary">Rathod &amp; Co.</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Tax Consultants</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-light">
              Vadodara&rsquo;s trusted partner for tax filing, business registration and
              compliance. Honest advice, transparent pricing, on-time delivery.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/rathodandco?utm_source=qr&igsh=aWxydGl1OWJzdHNv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/share/17paDsHyCB/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-base mb-6 text-primary">Popular Services</h4>
            <ul className="space-y-3 text-sm">
              {popular.map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-base mb-6 text-primary">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-accent">About</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent">Services</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-accent">Resources</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-accent">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-base mb-6 text-primary">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href={SITE.tel} className="hover:text-accent">{SITE.phone}</a>
                  <a href={SITE.tel2} className="hover:text-accent">{SITE.phone2}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href={SITE.mailto} className="hover:text-accent break-all">{SITE.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row gap-4 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Rathod &amp; Co. All rights reserved.</p>
          <p>Designed for clarity. Built for trust.</p>
        </div>
      </div>
    </footer>
  );
};
