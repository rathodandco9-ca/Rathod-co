import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ALL_SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { Loader2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[+\d\s-]{10,15}$/, "Enter a valid phone"),
  email: z.string().trim().email("Invalid email").max(120).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(500).optional(),
});

type Props = { compact?: boolean; defaultService?: string };

export const QuoteForm = ({ compact = false, defaultService }: Props) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    service: defaultService ?? "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const msg = `Hi Akshay, I'd like a free consultancy.

*Name:* ${form.name}
*Phone:* ${form.phone}
${form.email ? `*Email:* ${form.email}\n` : ""}*Service:* ${form.service}
${form.message ? `*Notes:* ${form.message}` : ""}`;
    setTimeout(() => {
      window.open(SITE.whatsapp(msg), "_blank");
      toast.success("Opening WhatsApp — Akshay will reply shortly.");
      setLoading(false);
      setForm({ name: "", phone: "", email: "", service: defaultService ?? "", message: "" });
    }, 400);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div className="space-y-1.5">
          <Label htmlFor="qf-name">Full Name</Label>
          <Input id="qf-name" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name" maxLength={80} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qf-phone">Phone</Label>
          <Input id="qf-phone" required type="tel" value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 ..." maxLength={15} />
        </div>
      </div>
      {!compact && (
        <div className="space-y-1.5">
          <Label htmlFor="qf-email">Email <span className="text-muted-foreground font-normal">(optional)</span></Label>
          <Input id="qf-email" type="email" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com" maxLength={120} />
        </div>
      )}
      <div className="space-y-1.5">
        <Label>Service Required</Label>
        <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
          <SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger>
          <SelectContent className="max-h-72">
            {ALL_SERVICES.map((s) => (
              <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {!compact && (
        <div className="space-y-1.5">
          <Label htmlFor="qf-msg">Brief message <span className="text-muted-foreground font-normal">(optional)</span></Label>
          <Textarea id="qf-msg" rows={3} value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us a bit about your requirement..." maxLength={500} />
        </div>
      )}
      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Get Free Quote on WhatsApp
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
};
