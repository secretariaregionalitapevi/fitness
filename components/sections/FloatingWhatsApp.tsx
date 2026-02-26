import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="fixed bottom-24 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-[#13a24a] text-white shadow-soft transition hover:brightness-110 md:bottom-6">
      <MessageCircleMore className="h-5 w-5" />
    </Link>
  );
}