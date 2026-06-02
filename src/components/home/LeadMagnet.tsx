import { Download, FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const LeadMagnet = () => (
  <section className="py-28 bg-background">
    <div className="container-pro">
      <div className="relative overflow-hidden rounded-2xl bg-secondary/60 border border-border p-12 lg:p-16 text-foreground">
        <div className="absolute -top-24 -right-24 h-72 w-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-5">
              <span className="gold-line" /> Free Download
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-normal leading-tight text-primary">
              The 2025 Compliance Checklist for Vadodara Businesses
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed font-light">
              A printable yearly calendar of every GST, ITR, ROC and labour-law
              deadline you need to remember — so you never pay another late fee.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
              {["12 months of due dates at a glance", "Penalty amounts for missed filings", "Quick filing checklist per service"].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <FileCheck2 className="h-4 w-4 text-accent" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="bg-card text-foreground rounded-2xl p-7 border border-border shadow-card">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get your free copy on WhatsApp</div>
              <div className="mt-3 font-display text-xl text-primary">Instant delivery, no email needed</div>
              <Button asChild variant="hero" size="lg" className="w-full mt-6">
                <a href={SITE.whatsapp("Hi Akshay, please share the 2025 Compliance Checklist with me.")} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" /> Send me the checklist
                </a>
              </Button>
              <p className="mt-3 text-xs text-muted-foreground text-center">
                You&rsquo;ll get a downloadable PDF on WhatsApp in minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
