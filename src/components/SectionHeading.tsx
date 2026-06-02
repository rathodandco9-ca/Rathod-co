import { Helmet } from "@/components/SEO";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-20`}>
    {eyebrow && (
      <div className={`eyebrow mb-5 ${align === "center" ? "justify-center" : ""}`}>
        <span className="gold-line" />
        {eyebrow}
      </div>
    )}
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-primary leading-[1.1]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
        {subtitle}
      </p>
    )}
  </div>
);

export { Helmet };
