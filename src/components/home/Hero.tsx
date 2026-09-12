import { ArrowRight, MessageCircle, ShieldCheck, Clock, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";
import { SITE } from "@/lib/site";

export const Hero = () => (
  <section className="relative overflow-hidden bg-background text-foreground">
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-gradient-radial opacity-70" />

    <div className="container-pro relative grid gap-16 lg:grid-cols-12 items-center py-28 lg:py-36">
      <div className="lg:col-span-7 space-y-8 animate-fade-up">
        <div className="eyebrow">
          <span className="gold-line" />
          Vadodara · Trusted Since 2010
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-[68px] font-normal leading-[1.05] tracking-tight text-primary">
          Reliable <span className="text-accent italic">Tax</span> &amp; Business
          Registration Services in <span className="italic text-accent">Vadodara</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
          From GST and ITR to Pvt Ltd registration — get expert guidance,
          transparent pricing and on-time delivery. No jargon. No hidden fees.
          Just honest work by Akshay Rathod.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Get Free Consultancy <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="whatsapp" size="xl">
            <a href={SITE.whatsapp()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-border">
          {[
            { icon: Award, label: `${SITE.yearsExperience}+ Yrs Exp.` },
            { icon: Users, label: `${SITE.clientsServed}+ Clients` },
            { icon: Clock, label: "Fast Turnaround" },
            { icon: ShieldCheck, label: "100% Compliant" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-md bg-accent-soft grid place-items-center text-accent">
                <s.icon className="h-4 w-4" />
              </div>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 relative animate-scale-in">
        <div className="absolute -inset-6 bg-accent/15 blur-3xl rounded-full" />
        <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-border aspect-square">
          <img
            src={heroImg}
            alt="Premium tax consulting services in Vadodara"
            width={1280}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 m-5 glass-card p-4 max-w-[220px] bg-card/95">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-gold grid place-items-center">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Verified by</div>
                <div className="font-medium text-sm text-primary">GSTN · MCA · MSME</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
