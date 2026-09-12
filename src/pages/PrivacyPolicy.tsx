import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Mail, Clock } from "lucide-react";
import { Helmet } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/site";

const PrivacyPolicy = () => (
  <>
    <Helmet
      title="Privacy Policy | Rathod & Co. — Tax Consultants, Vadodara"
      description="Read the privacy policy of Rathod & Co. — how we collect, use and protect your personal information in compliance with the Information Technology Act, 2000 (India)."
      path="/privacy-policy"
    />

    <section className="bg-gradient-soft py-20 lg:py-24 border-b border-border">
      <div className="container-pro max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <div className="eyebrow mb-4">
          <span className="gold-line" /> Legal
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05]">
          Privacy <span className="text-accent italic">Policy</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          This policy explains how Rathod &amp; Co. collects, uses and safeguards
          the personal information you share with us. By using our website or
          contacting us, you agree to the practices described below.
        </p>
        <p className="mt-3 text-xs text-muted-foreground uppercase tracking-[0.2em]">
          Last updated: January 2026
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container-pro max-w-3xl space-y-12 text-foreground/80 leading-relaxed font-light">
        <div>
          <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-accent" /> 1. Information We Collect
          </h2>
          <p>
            We collect only the information you voluntarily provide when you
            interact with our website, including:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-muted-foreground">
            <li>Your name, phone number and email address from our enquiry or quote forms.</li>
            <li>Service requirements and any optional message you share with us.</li>
            <li>Documents you choose to send via WhatsApp, email or in person for service delivery.</li>
            <li>Anonymous usage data such as pages visited, browser type and referrer, collected via cookies and analytics tools.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
          <p>Your information is used solely to:</p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-muted-foreground">
            <li>Respond to your enquiries and provide the tax, registration or compliance services you have requested.</li>
            <li>Prepare quotations, send service updates and communicate on WhatsApp, call or email.</li>
            <li>Maintain internal records required for professional, tax and regulatory obligations.</li>
            <li>Improve our website, services and customer experience.</li>
          </ul>
          <p className="mt-4">
            We do not sell, rent or trade your personal information with any third party for marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">3. Cookies &amp; Analytics</h2>
          <p>
            Our website may use cookies and similar technologies to remember your preferences and analyse traffic.
            If Google Analytics is enabled, anonymous usage statistics (such as page views, session duration and
            approximate location) may be collected using cookies set by Google. You can disable cookies in your
            browser settings at any time; some website features may then be limited.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">4. Data Sharing &amp; Disclosure</h2>
          <p>
            We share your information only when strictly necessary to deliver a service you have requested — for
            example, filing returns on the GST or income-tax portal, submitting forms to the Ministry of Corporate
            Affairs, or processing payments. All such third parties are bound by professional or contractual
            confidentiality. We may also disclose information when required by law, court order or a government
            authority.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">5. Data Security</h2>
          <p>
            We follow industry-standard safeguards — encrypted storage, restricted access, and secure communication
            channels — to protect your personal data against unauthorised access, alteration, disclosure or
            destruction. While no method of transmission over the internet is 100% secure, we continually review
            and strengthen our practices.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as needed to provide our services and to comply with
            applicable legal, tax and accounting obligations (typically a minimum of 7 years as required for
            professional records under Indian law). After this period, your data is securely deleted or
            anonymised.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">7. Your Rights</h2>
          <p>
            Under the Information Technology Act, 2000 and the applicable rules made thereunder, you have the
            right to:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-muted-foreground">
            <li>Request a copy of the personal data we hold about you.</li>
            <li>Ask us to correct inaccurate or incomplete information.</li>
            <li>Request deletion of your data, subject to our legal record-keeping obligations.</li>
            <li>Withdraw consent for receiving marketing or non-essential communications.</li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, write to us at the email address below.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">8. Children&rsquo;s Privacy</h2>
          <p>
            Our services are intended for business owners and adults. We do not knowingly collect personal
            information from anyone under the age of 18.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or
            applicable law. The revised version will be posted on this page with an updated &ldquo;Last
            updated&rdquo; date.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-3">
            <Mail className="h-6 w-6 text-accent" /> 10. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, or wish to access, correct or delete your
            personal data, please contact:
          </p>
          <div className="mt-4 rounded-2xl bg-card border border-border p-6 space-y-3 text-sm text-muted-foreground">
            <div className="font-display text-lg text-primary">Rathod &amp; Co.</div>
            <div>Attn: Akshay Rathod, Founder</div>
            <div>
              Email:{" "}
              <a href={SITE.mailto} className="text-accent hover:underline">
                {SITE.email}
              </a>
            </div>
            <div>
              Phone:{" "}
              <a href={SITE.tel} className="text-accent hover:underline">
                {SITE.phone}
              </a>
              ,{" "}
              <a href={SITE.tel2} className="text-accent hover:underline">
                {SITE.phone2}
              </a>
            </div>
            <div className="flex gap-2">
              <Clock className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span>Mon &ndash; Sat &middot; 10:00 AM &ndash; 7:00 PM IST</span>
            </div>
            <div>{SITE.address}</div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary/40">
      <div className="container-pro max-w-3xl text-center">
        <SectionHeading
          eyebrow="Have a question?"
          title="We&rsquo;re happy to clarify"
          subtitle="Reach out on WhatsApp or email for any privacy-related queries."
        />
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={SITE.whatsapp("Hi Akshay, I have a question about your privacy policy.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-whatsapp text-whatsapp-foreground font-medium hover:scale-105 transition-transform"
          >
            Chat on WhatsApp
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
