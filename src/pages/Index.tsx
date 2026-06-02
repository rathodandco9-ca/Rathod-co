import { Helmet } from "@/components/SEO";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { LeadMagnet } from "@/components/home/LeadMagnet";
import { FAQ } from "@/components/home/FAQ";
import { ContactCTA } from "@/components/home/ContactCTA";

const Index = () => (
  <>
    <Helmet
      title="Tax Consultant in Vadodara | GST, ITR & Company Registration | Rathod & Co."
      description="Trusted tax consultant in Vadodara. GST, Income Tax, MSME, Pvt Ltd, Trademark & more. Expert guidance by Akshay Rathod. Free consultancy on WhatsApp."
      path="/"
    />
    <Hero />
    <TrustBar />
    <ServicesPreview />
    <Testimonials />
    <LeadMagnet />
    <FAQ />
    <ContactCTA />
  </>
);

export default Index;
