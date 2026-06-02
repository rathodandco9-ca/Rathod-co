import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    q: "How quickly can you complete my GST registration?",
    a: "For a complete document set, we typically deliver GSTIN in 3–7 working days. We also offer same-day priority filing where possible.",
  },
  {
    q: "Do you handle clients outside Vadodara?",
    a: "Yes. While our office is in Ajwa Road, Vadodara, we serve clients across Gujarat and pan-India remotely over WhatsApp, calls and email.",
  },
  {
    q: "What are your charges for ITR filing?",
    a: "Charges vary by ITR type and complexity. Salaried ITRs start at very affordable rates. Share your details on WhatsApp for an exact quote — no obligation.",
  },
  {
    q: "Can you help if I've received a tax notice?",
    a: "Absolutely. We handle GST and Income Tax notices regularly — from drafting replies to representation. Don't ignore notices; reach out the same day.",
  },
  {
    q: "Do I have to visit your office?",
    a: "Not at all. Most services are delivered fully online. Documents can be shared via WhatsApp or email. We do welcome you to visit if you prefer.",
  },
  {
    q: "Will my financial information be confidential?",
    a: "Always. Client confidentiality is non-negotiable. Your documents and data are handled securely and never shared with third parties.",
  },
];

export const FAQ = () => (
  <section className="py-24 bg-background">
    <div className="container-pro max-w-4xl">
      <SectionHeading
        eyebrow="Questions, Answered"
        title="Frequently asked questions"
        subtitle="Quick answers to what most clients ask before getting started."
      />
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border border-border rounded-xl px-5 bg-card data-[state=open]:shadow-card data-[state=open]:border-accent/40 transition-all"
          >
            <AccordionTrigger className="text-left font-display text-base font-semibold text-primary hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
