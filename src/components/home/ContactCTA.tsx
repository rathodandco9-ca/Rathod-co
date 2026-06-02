import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE } from "@/lib/site";

export const ContactCTA = () => (
  <section className="py-24 bg-gradient-soft">
    <div className="container-pro grid lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-6">
        <div className="eyebrow">
          <span className="gold-line" /> Talk to Akshay
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-[1.1]">
          Get a free consultancy —{" "}
          <span className="text-accent italic">today.</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Tell us what you need. We&rsquo;ll respond on WhatsApp within minutes
          with clear next steps and an honest quote.
        </p>

        <div className="space-y-3 pt-2">
          <a href={SITE.tel} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors group">
            <div className="h-11 w-11 rounded-lg bg-accent-soft text-accent grid place-items-center group-hover:bg-gradient-gold group-hover:text-primary transition-all">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Call</div>
              <div className="font-semibold text-primary">{SITE.phone}</div>
            </div>
          </a>
          <a href={SITE.tel2} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors group">
            <div className="h-11 w-11 rounded-lg bg-accent-soft text-accent grid place-items-center group-hover:bg-gradient-gold group-hover:text-primary transition-all">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Call</div>
              <div className="font-semibold text-primary">{SITE.phone2}</div>
            </div>
          </a>
          <a href={SITE.whatsapp()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-whatsapp transition-colors group">
            <div className="h-11 w-11 rounded-lg bg-whatsapp/10 text-whatsapp grid place-items-center group-hover:bg-whatsapp group-hover:text-whatsapp-foreground transition-all">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</div>
              <div className="font-semibold text-primary">Chat instantly</div>
            </div>
          </a>
          <a href={SITE.mailto} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors group">
            <div className="h-11 w-11 rounded-lg bg-accent-soft text-accent grid place-items-center group-hover:bg-gradient-gold group-hover:text-primary transition-all">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
              <div className="font-semibold text-primary text-sm break-all">{SITE.email}</div>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-elegant border border-border relative overflow-hidden">
        <div className="absolute -top-16 -right-16 h-48 w-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative">
          <h3 className="font-display text-2xl font-bold text-primary mb-1">Get Quote Instantly</h3>
          <p className="text-sm text-muted-foreground mb-6">Reply within minutes during business hours.</p>
          <QuoteForm />
        </div>
      </div>
    </div>
  </section>
);
