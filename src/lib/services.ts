import {
  Receipt, FileText, Building2, Rocket, Globe2, Store,
  Briefcase, Building, UserCircle2, Handshake,
  Stamp, HeartHandshake, Calculator, QrCode, KeyRound,
  FileSignature, ClipboardCheck,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  benefits: string[];
  icon: typeof Receipt;
  formUrl?: string;
};

export type ServiceCategory = {
  id: string;
  name: string;
  tagline: string;
  services: Service[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "tax",
    name: "Tax Services",
    tagline: "Stay compliant. Save more. Sleep better.",
    services: [
      {
        slug: "gst",
        title: "GST Registration & Return Filing",
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSclMj4Fpv2GY568Q8o_Qn3eObGhj_Hz69TLwxiTw6f-GD02Zg/viewform?usp=publish-editor",
        short:
          "End-to-end GST support — from new registration to monthly, quarterly and annual return filing without delays.",
        benefits: ["Zero late fees", "Input credit optimisation", "Notice handling"],
        icon: Receipt,
      },
      {
        slug: "itr",
        title: "Income Tax Return",
        short:
          "Accurate ITR filing for salaried, business owners, freelancers and firms with maximum legal tax savings.",
        benefits: ["Maximum refunds", "Audit-ready records", "All ITR forms"],
        icon: FileText,
      },
    ],
  },
  {
    id: "registrations",
    name: "Business Registrations",
    tagline: "Launch the right way — fast, legal, future-ready.",
    services: [
      { slug: "msme", title: "MSME / Udyam Registration", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScFXhgcCd23ikJBSxtvJ2HVT-UKSeJDUCpcdAd5ACB2sts6OQ/viewform", short: "Get your Udyam certificate to unlock subsidies, easier loans and government tenders.", benefits: ["Free lifetime certificate", "Loan benefits", "Tender eligibility"], icon: Building2 },
      { slug: "startup", title: "Startup India Registration", short: "Register under DPIIT and access tax holidays, funding and faster IP approvals.", benefits: ["3-year tax holiday", "Funding access", "IP rebates"], icon: Rocket },
      { slug: "iec", title: "IEC Registration", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdickEmxxtNVD-Ny_wkpA-5yDCHvdSJOBpo3vOxBSU9g5F0qQ/viewform", short: "Import Export Code for businesses planning to trade internationally.", benefits: ["Lifetime validity", "Required for exports", "Bank compliance"], icon: Globe2 },
      { slug: "shop-act", title: "Shop & Establishment Act", short: "Mandatory Gumasta licence for shops, offices and commercial establishments in Gujarat.", benefits: ["Legal trading", "Bank account opening", "Local compliance"], icon: Store },
    ],
  },
  {
    id: "company",
    name: "Company Formation",
    tagline: "Pick the right structure. Build a credible brand.",
    services: [
      { slug: "llp", title: "LLP Registration", short: "Limited Liability Partnership — flexible, low-compliance structure for professionals and small firms.", benefits: ["Limited liability", "Low compliance", "Separate legal entity"], icon: Briefcase },
      { slug: "pvt-ltd", title: "Private Limited Company", short: "The most preferred structure for funded startups and growing businesses.", benefits: ["Investor friendly", "Limited liability", "Brand credibility"], icon: Building },
      { slug: "opc", title: "OPC Registration", short: "One Person Company — corporate identity for solo founders.", benefits: ["Single owner", "Limited liability", "Perpetual succession"], icon: UserCircle2 },
      { slug: "partnership", title: "Partnership Firm", short: "Quick, low-cost partnership registration with proper deed drafting.", benefits: ["Easy setup", "Shared capital", "Minimum compliance"], icon: Handshake },
      { slug: "rof", title: "ROF (Registrar of Firms)", formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeMacPcCTdJ7bGIMted3OshB_l5XV98BBIlatg8kc2neyKrjg/viewform?usp=publish-editor", short: "Officially register your partnership firm for legal recognition and business credibility.", benefits: ["Legal recognition", "Partnership deed", "Bank account ready"], icon: FileSignature },
    ],
  },
  {
    id: "legal",
    name: "Certifications & Legal",
    tagline: "Build trust, protect your brand, win more contracts.",
    services: [
      
      { slug: "trademark", title: "Trademark Registration", short: "Protect your brand name, logo and tagline with a registered trademark.", benefits: ["10-year protection", "Legal ownership", "Brand value"], icon: Stamp },
      { slug: "ngo", title: "NGO Registration", short: "Trust, Society or Section 8 — set up your NGO with 12A & 80G registrations.", benefits: ["Tax exemption", "Donor confidence", "CSR eligibility"], icon: HeartHandshake },
      { slug: "internal-audit", title: "Internal Audit", short: "Internal audit services to assess compliance, identify gaps, and improve operational efficiency.", benefits: ["Compliance Review", "Risk Assessment", "Process Improvement Suggestions"], icon: ClipboardCheck },
      
    ],
  },
  {
    id: "support",
    name: "Digital & Support Services",
    tagline: "Everyday essentials handled by experts.",
    services: [
      { slug: "accounting", title: "Accounting Work", short: "Bookkeeping, MIS, finalisation — clean books that scale with your business.", benefits: ["Monthly MIS", "Tally / Zoho", "Audit ready"], icon: Calculator },
      { slug: "qr", title: "QR Code & Payment Setup", short: "Dynamic QR setup for UPI/business payments with proper invoicing.", benefits: ["Quick activation", "All UPI apps", "Easy reconciliation"], icon: QrCode },
      { slug: "dsc-pan", title: "DSC & PAN Services", short: "Class 3 Digital Signature Certificates and PAN/TAN applications, fast.", benefits: ["1-2 day delivery", "All authorities", "End-to-end help"], icon: KeyRound },
    ],
  },
];

export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((c) =>
  c.services.map((s) => ({ ...s, category: c.name }))
);
