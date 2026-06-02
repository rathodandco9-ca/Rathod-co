import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export const FloatingActions = () => (
  <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
    <a
      href={`tel:${SITE.phoneRaw},${SITE.phone2Raw}`}
      aria-label="Call now"
      className="md:hidden h-13 w-13 grid place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant hover:scale-105 transition-transform"
    >
      <Phone className="h-5 w-5" />
    </a>
    <a
      href={SITE.whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group relative h-14 w-14 grid place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant hover:scale-105 transition-transform animate-float"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-ping" />
      <MessageCircle className="h-6 w-6 relative" />
    </a>
  </div>
);
