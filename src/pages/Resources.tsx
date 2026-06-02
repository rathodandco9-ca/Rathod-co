import { Helmet } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const articles = [
  {
    slug: "how-to-file-gst-return",
    title: "How to file your GST return correctly in 2026",
    excerpt:
      "A simple step-by-step walkthrough for small businesses in Vadodara — from generating GSTR-1 to claiming input tax credit without errors.",
    date: "Mar 12, 2026",
    read: "6 min read",
    category: "GST",
    image: "/resources/gst_filing.png",
  },
  {
    slug: "benefits-of-msme-registration",
    title: "7 benefits of MSME / Udyam registration most owners miss",
    excerpt:
      "Beyond the certificate: how Udyam unlocks government tenders, subsidised loans, late-payment protection and more.",
    date: "Mar 04, 2026",
    read: "5 min read",
    category: "Registration",
    image: "/resources/msme_registration.png",
  },
  {
    slug: "itr-filing-deductions-2026",
    title: "Top 10 deductions to claim in your ITR this year",
    excerpt:
      "From 80C to HRA, NPS to medical insurance — a clean checklist of legal deductions that could save you ₹50,000+.",
    date: "Feb 22, 2026",
    read: "7 min read",
    category: "Income Tax",
    image: "/resources/income_tax.png",
  },
  {
    slug: "private-limited-vs-llp",
    title: "Private Limited vs LLP: which structure suits your startup?",
    excerpt:
      "Compliance, tax, funding, credibility — a Vadodara consultant&rsquo;s honest comparison to help you choose.",
    date: "Feb 14, 2026",
    read: "8 min read",
    category: "Company Formation",
    image: "/resources/company_structure.png",
  },
  {
    slug: "trademark-process-india",
    title: "How to register a trademark in India: complete 2026 guide",
    excerpt:
      "From class selection to objection responses — protect your brand the right way without costly mistakes.",
    date: "Feb 03, 2026",
    read: "6 min read",
    category: "Legal",
    image: "/resources/trademark_registration.png",
  },
  {
    slug: "shop-act-vadodara",
    title: "Shop & Establishment licence in Gujarat: everything to know",
    excerpt:
      "Who needs it, what documents to keep ready, fees, validity and renewal — for shop owners in Vadodara.",
    date: "Jan 25, 2026",
    read: "5 min read",
    category: "Compliance",
    image: "/resources/shop_license.png",
  },
];

const Resources = () => (
  <>
    <Helmet
      title="Tax & Business Resources | Rathod & Co. Vadodara"
      description="Practical guides on GST, ITR, MSME, trademark, company registration and more — written by tax consultants in Vadodara."
      path="/resources"
    />

    <section className="bg-gradient-soft py-20 lg:py-24 border-b border-border">
      <div className="container-pro text-center max-w-3xl">
        <div className="eyebrow justify-center mb-4">
          <span className="gold-line" /> Resources & Guides
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05]">
          Practical reads for <span className="text-accent italic">smart</span> business owners
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Plain-English guides on GST, ITR, registrations and compliance —
          written for Vadodara businesses, by people who file them every day.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container-pro">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <article
              key={a.slug}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-muted">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-wider font-bold bg-accent text-primary px-2.5 py-1 rounded-full shadow-sm">
                    {a.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 font-display text-3xl text-white italic drop-shadow-md">
                  0{i + 1}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {a.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {a.read}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-primary leading-snug mb-3 group-hover:text-accent transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{a.excerpt}</p>
                <a
                  href={SITE.whatsapp(`Hi, I'd like to know more about: ${a.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
                >
                  Ask on WhatsApp <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary/40">
      <div className="container-pro max-w-3xl text-center">
        <SectionHeading
          eyebrow="Need Personal Help?"
          title="Have a specific question? Just ask."
          subtitle="Skip the searching. Send us your question on WhatsApp and get a clear answer from a real consultant."
        />
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">Get a free consultancy</Link>
        </Button>
      </div>
    </section>
  </>
);

export default Resources;
