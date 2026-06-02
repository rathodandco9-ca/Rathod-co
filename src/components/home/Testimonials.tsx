import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Owner, Patel Enterprises",
    text: "Akshay handled our GST migration and monthly filings without a single hiccup. Genuinely transparent and always available when we call.",
  },
  {
    name: "Priya Shah",
    role: "Founder, Shah Boutique",
    text: "Got my Udyam, Shop Act and trademark done within two weeks. Pricing was very reasonable compared to what others quoted.",
  },
  {
    name: "Amit Desai",
    role: "Director, Desai Constructions Pvt Ltd",
    text: "Switched our accounting and tax filing to Rathod & Co. last year. Cleaner books, faster ITR, zero notices. Highly recommended.",
  },
  {
    name: "Neha Joshi",
    role: "Freelance Consultant",
    text: "I'm not great with numbers, but Akshay made my ITR filing feel effortless. He patiently explained every deduction.",
  },
];

export const Testimonials = () => (
  <section className="py-24 bg-secondary/40 relative overflow-hidden">
    <div className="container-pro relative">
      <SectionHeading
        eyebrow="Client Voices"
        title="Trusted by 1,200+ businesses in Vadodara"
        subtitle="Real stories from real clients who chose us for honesty, accuracy and on-time delivery."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <article
            key={t.name}
            className="relative bg-card rounded-2xl p-7 shadow-card border border-border/60 hover:shadow-elegant transition-all duration-500"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Quote className="absolute top-5 right-5 h-7 w-7 text-accent/20" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-6">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="border-t border-border pt-4">
              <div className="font-semibold text-primary text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
