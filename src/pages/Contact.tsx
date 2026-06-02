import { Helmet } from "@/components/SEO";
import { QuoteForm } from "@/components/QuoteForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const Contact = () => (
  <>
    <Helmet
      title="Contact Akshay Rathod | Tax Consultant Vadodara | Rathod & Co."
      description="Get in touch with Rathod & Co. — call +91 9408352976, WhatsApp, or visit our office in Ajwa Road, Vadodara. Free consultancy."
      path="/contact"
    />

    <section className="bg-gradient-soft py-20 lg:py-24 border-b border-border">
      <div className="container-pro text-center max-w-3xl">
        <div className="eyebrow justify-center mb-4">
          <span className="gold-line" /> Get In Touch
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05]">
          Let&rsquo;s simplify your <span className="text-accent italic">compliance.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Reach us on WhatsApp for the fastest response. Call us, email us, or
          drop by our Vadodara office — whatever works for you.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container-pro grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-5">
          {[
            { icon: Phone, label: "Call Us", value: SITE.phone, href: SITE.tel },
            { icon: Phone, label: "Call Us", value: SITE.phone2, href: SITE.tel2 },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: SITE.whatsapp(), external: true, accent: true },
            { icon: Mail, label: "Email", value: SITE.email, href: SITE.mailto },
            { icon: MapPin, label: "Office", value: SITE.address },
            { icon: Clock, label: "Hours", value: "Mon – Sat · 10:00 AM – 6:00 PM" },
          ].map((c) => {
            const Wrapper: any = c.href ? "a" : "div";
            return (
              <Wrapper
                key={c.label}
                {...(c.href ? { href: c.href } : {})}
                {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className={`flex gap-4 p-5 rounded-2xl bg-card border transition-all ${
                  c.href ? "hover:shadow-card hover:border-accent/40" : ""
                } border-border`}
              >
                <div className={`h-11 w-11 rounded-lg grid place-items-center shrink-0 ${
                  c.accent ? "bg-whatsapp text-whatsapp-foreground" : "bg-accent-soft text-accent"
                }`}>
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-semibold text-primary text-sm sm:text-base mt-1">{c.value}</div>
                </div>
              </Wrapper>
            );
          })}
        </div>

        <div className="lg:col-span-7 bg-card rounded-2xl p-8 lg:p-10 shadow-elegant border border-border">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary mb-2">Send us your enquiry</h2>
          <p className="text-muted-foreground text-sm mb-7">Fill the form and we&rsquo;ll continue the conversation on WhatsApp.</p>
          <QuoteForm />
        </div>
      </div>
    </section>

    <section className="py-12 bg-secondary/40">
      <div className="container-pro">
        <div className="rounded-3xl overflow-hidden shadow-elegant border border-border bg-card">
          <iframe
            src={SITE.mapsEmbed}
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rathod & Co. Office Location"
            className="w-full"
          />
        </div>
        <div className="mt-6 flex justify-center">
          <Button asChild variant="hero" size="lg">
            <a href={SITE.whatsapp()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
