import { Helmet } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Target, Heart, Sparkles, ShieldCheck, Clock, BadgeIndianRupee, MessageCircle } from "lucide-react";
import founder from "@/assets/founder.jpg";
import { SITE } from "@/lib/site";

const reasons = [
  { icon: Clock, title: "Fast Turnaround", desc: "Most filings completed in 24–72 hours. No endless follow-ups." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "Honest quotes upfront. No hidden charges, ever." },
  { icon: Sparkles, title: "Expert Guidance", desc: "Personally handled by Akshay — not passed to a junior." },
  { icon: ShieldCheck, title: "100% Confidential", desc: "Your data is handled with strict professional discretion." },
];

const About = () => (
  <>
    <Helmet
      title="About Akshay Rathod | Tax Consultant in Vadodara | Rathod & Co."
      description="Meet Akshay Rathod, an experienced tax consultant in Vadodara helping 1,200+ businesses with GST, ITR, registrations and compliance."
      path="/about"
    />

    <section className="relative bg-gradient-soft py-20 lg:py-28 overflow-hidden">
      <div className="container-pro grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7 space-y-6 animate-fade-up">
          <div className="eyebrow">
            <span className="gold-line" /> About Rathod &amp; Co.
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05]">
            Honest tax advice. <span className="text-accent italic">Real</span> business support.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Rathod &amp; Co. is a Vadodara-based tax consultancy founded by{" "}
            <span className="font-semibold text-primary">Akshay Rathod</span> — a
            seasoned tax consultant with over 15 years of hands-on experience
            simplifying compliance for shopkeepers, startups, professionals and
            growing companies.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant="hero" size="lg">
              <a href={SITE.whatsapp()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> Talk to Akshay
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore services <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5 relative animate-scale-in">
          <div className="absolute -inset-6 bg-accent/15 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden border border-accent/30 shadow-elegant bg-secondary aspect-[4/5]">
            <img src={founder} alt="Akshay Rathod, Chartered Accountant and Founder of Rathod & Co., Vadodara" className="w-full h-full object-cover" loading="lazy" width={896} height={1152} />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-card rounded-2xl p-5 shadow-elegant border border-border max-w-[230px]">
            <div className="font-display font-bold text-primary text-lg leading-tight">Akshay Rathod</div>
            <div className="text-xs text-accent uppercase tracking-wider mt-1">Tax Consultant · Founder</div>
            <div className="mt-3 text-xs text-muted-foreground">Serving Vadodara businesses since 2010.</div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container-pro grid lg:grid-cols-2 gap-12">
        <div className="rounded-2xl bg-card p-10 border border-border shadow-card">
          <div className="h-12 w-12 rounded-xl bg-accent-soft text-accent grid place-items-center mb-5">
            <Compass className="h-6 w-6" />
          </div>
          <h3 className="font-display text-2xl font-bold text-primary mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To make tax and compliance feel effortless for every business owner
            in Vadodara — through clear advice, fair pricing and timely
            execution. No jargon. No surprises. Just dependable support.
          </p>
        </div>
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 shadow-elegant relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 bg-accent/20 rounded-full blur-3xl" />
          <div className="relative">
            <div className="h-12 w-12 rounded-xl bg-accent/20 text-accent grid place-items-center mb-5">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To be the most trusted local tax consultancy in Gujarat — known
              for integrity, accessibility and the kind of personal attention
              that big firms simply can&rsquo;t offer.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-secondary/40">
      <div className="container-pro">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Rathod & Co. difference"
          subtitle="Why over 1,200 businesses across Vadodara trust us with their compliance, year after year."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card rounded-2xl p-7 border border-border hover:border-accent/40 hover:shadow-elegant transition-all duration-500">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold text-primary grid place-items-center mb-5 shadow-gold">
                <r.icon className="h-6 w-6" />
              </div>
              <h4 className="font-display text-lg font-semibold text-primary mb-2">{r.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container-pro max-w-3xl text-center">
        <Heart className="h-10 w-10 mx-auto text-accent mb-6" />
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary leading-tight">
          &ldquo;Compliance shouldn&rsquo;t be stressful. My job is to make it the
          easiest part of running your business.&rdquo;
        </h2>
        <div className="mt-6 text-sm text-accent uppercase tracking-[0.2em]">— Akshay Rathod, Founder</div>
        <Button asChild variant="hero" size="lg" className="mt-10">
          <Link to="/contact">Book a free consultancy</Link>
        </Button>
      </div>
    </section>
  </>
);

export default About;
