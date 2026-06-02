import { useState } from "react";
import { Helmet } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Sparkles, FileText } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const Services = () => {
  const [active, setActive] = useState<string>("all");
  const categories = active === "all" ? SERVICE_CATEGORIES : SERVICE_CATEGORIES.filter((c) => c.id === active);

  return (
    <>
      <Helmet
        title="Services | GST, ITR, Company Registration, Trademark | Rathod & Co. Vadodara"
        description="Complete tax & business services in Vadodara: GST, ITR, MSME, Pvt Ltd, LLP, Trademark, ISO, Accounting & more. Transparent pricing. WhatsApp us."
        path="/services"
      />

      <section className="bg-gradient-soft py-20 lg:py-24 border-b border-border">
        <div className="container-pro text-center max-w-3xl">
          <div className="eyebrow justify-center mb-4">
            <span className="gold-line" /> Our Services
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05]">
            Every compliance need, <span className="text-accent italic">expertly handled.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            20+ services across tax, registrations, company formation,
            certifications and accounting — all under one trusted roof.
          </p>
        </div>
      </section>

      <section className="py-10 bg-background sticky top-20 z-30 border-b border-border/60 backdrop-blur-md bg-background/85">
        <div className="container-pro flex gap-2 overflow-x-auto no-scrollbar">
          {[{ id: "all", name: "All Services" }, ...SERVICE_CATEGORIES].map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                "shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all border",
                active === c.id
                  ? "bg-primary text-primary-foreground border-primary shadow-soft"
                  : "bg-card text-muted-foreground border-border hover:border-accent/50 hover:text-primary"
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.id} className="py-20 odd:bg-background even:bg-secondary/30">
          <div className="container-pro">
            <div className="mb-12 max-w-2xl">
              <div className="eyebrow mb-3"><span className="gold-line" /> {cat.name}</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary">{cat.tagline}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cat.services.map((s) => (
                <article
                  key={s.slug}
                  id={s.slug}
                  className="group relative bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 flex flex-col"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-2xl" />
                  <div className="h-12 w-12 rounded-xl bg-accent-soft text-accent grid place-items-center mb-5 group-hover:bg-gradient-gold group-hover:text-primary transition-all duration-500">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary leading-snug mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.short}</p>
                  <ul className="space-y-2 mb-6">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col gap-3 w-full">
                    <Button asChild variant="soft" className="w-full">
                        <a href={SITE.whatsapp(`Hi Akshay, I'd like to enquire about ${s.title}.`)} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                      </a>
                    </Button>
                    {s.formUrl && (
                      <Button asChild variant="outline" className="w-full">
                        <a href={s.formUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4" /> Fill Enquiry Form
                        </a>
                      </Button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-background">
        <div className="container-pro max-w-5xl">
          <SectionHeading
            eyebrow="Compare & Choose"
            title="Which business structure is right for you?"
            subtitle="A quick side-by-side to help you decide before you register."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "LLP", best: "Professionals & service firms", liability: "Limited", compliance: "Low", tax: "Flat 30%", recommended: false },
              { name: "Private Limited", best: "Funded startups & growing brands", liability: "Limited", compliance: "Medium", tax: "22% / 25%", recommended: true },
              { name: "OPC", best: "Solo founders going corporate", liability: "Limited", compliance: "Medium", tax: "22%", recommended: false },
            ].map((p) => (
              <div key={p.name} className={cn(
                "rounded-2xl p-7 border bg-card flex flex-col",
                p.recommended ? "border-accent shadow-gold relative" : "border-border shadow-card"
              )}>
                {p.recommended && (
                  <div className="absolute -top-3 right-5 bg-gradient-gold text-primary text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold text-primary">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-6">Best for {p.best}</p>
                <div className="space-y-3 text-sm border-t border-border pt-5">
                  <div className="flex justify-between"><span className="text-muted-foreground">Liability</span><span className="font-semibold text-primary">{p.liability}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Compliance</span><span className="font-semibold text-primary">{p.compliance}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Tax Rate</span><span className="font-semibold text-primary">{p.tax}</span></div>
                </div>
                <Button asChild variant={p.recommended ? "hero" : "outline"} className="mt-7 w-full">
                  <a href={SITE.whatsapp(`Hi, I want to register a ${p.name}.`)} target="_blank" rel="noopener noreferrer">Get Started</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
