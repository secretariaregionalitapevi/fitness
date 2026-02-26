"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type StickyMobileCtaProps = { onOpenLead: () => void };

export function StickyMobileCta({ onOpenLead }: StickyMobileCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 340);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed inset-x-3 bottom-3 z-40 transition-all md:hidden ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"}`}>
      <div className="rounded-2xl border border-border bg-[#0b1119]/95 p-2 shadow-soft backdrop-blur-lg">
        <Button className="w-full" onClick={onOpenLead} aria-label="Quero o guia">Quero o guia</Button>
      </div>
    </div>
  );
}