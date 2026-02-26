"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

import { BRAND_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

type HeaderProps = { onOpenLead: () => void };

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#conteudo", label: "O que você recebe" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#oferta", label: "Oferta" },
  { href: "#faq", label: "FAQ" },
];

export function Header({ onOpenLead }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-[#070b11]/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="#top" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          {BRAND_NAME}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <Button type="button" size="sm" onClick={onOpenLead} aria-label="Quero atendimento" className="px-5">
          Quero atendimento
        </Button>
      </div>
    </header>
  );
}