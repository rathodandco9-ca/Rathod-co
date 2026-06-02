import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ALL_SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export const ServicesPreview = () => {
  const featured = [
    "gst", "itr", "pvt-ltd", "msme", "trademark", "llp", "accounting",
  ]
    .map((slug) => ALL_SERVICES.find((s) => s.slug === slug)!)
    .filter(Boolean);

  return (
    <section className="py-24 bg-background">
      <div className="container-pro">
        <SectionHeading
          eyebrow="What We Do"
          title="Every compliance need, expertly handled"
          subtitle="From GST filing to building your private limited company — we've helped 1,200+ Vadodara businesses stay compliant and grow."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s, i) => (
            <div
              key={s.slug}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="h-12 w-12 rounded-xl bg-accent-soft grid place-items-center text-accent mb-5 group-hover:bg-gradient-gold group-hover:text-primary transition-all duration-500">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary leading-snug mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {s.short}
              </p>
              <a
                href={SITE.whatsapp(`Hi, I'd like to know about ${s.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
              >
                Enquire on WhatsApp <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="navy" size="lg">
            <Link to="/services">View all services <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
