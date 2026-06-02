import { Award, Clock, Briefcase, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years of Experience" },
  { icon: Briefcase, value: "1,200+", label: "Happy Clients" },
  { icon: Clock, value: "48h", label: "Average Turnaround" },
  { icon: ShieldCheck, value: "100%", label: "Compliance Rate" },
];

export const TrustBar = () => (
  <section className="py-20 lg:py-24 bg-background border-y border-border">
    <div className="container-pro grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`flex items-center gap-5 justify-center lg:justify-start ${
            i > 0 ? "lg:border-l lg:border-border lg:pl-10" : ""
          }`}
        >
          <div className="h-12 w-12 shrink-0 rounded-md bg-accent-soft grid place-items-center text-accent">
            <s.icon className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display text-3xl text-primary leading-none">{s.value}</div>
            <div className="text-[11px] text-muted-foreground mt-2 uppercase tracking-[0.2em]">{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
