"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type IdentificationSectionProps = { onOpenLead: () => void };

const bullets = [
  "Você quer comprar, mas não sabe se o produto é confiável",
  "Tem dúvidas sobre apresentação, dosagem e procedência",
  "Quer um canal de atendimento rápido e direto",
  "Precisa de clareza sobre como funciona o pedido",
  "Busca segurança antes de fechar a compra",
];

export function IdentificationSection({ onOpenLead }: IdentificationSectionProps) {
  return (
    <section id="identificacao" className="container py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="rounded-3xl border border-border bg-card/40 p-7 md:p-10"
      >
        <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
          Se você está em dúvida sobre onde comprar com segurança, você não está sozinho.
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground md:text-lg">
          Nosso atendimento foi desenhado para explicar cada etapa com clareza: apresentação do produto, condições de compra e orientações necessárias.
        </p>

        <ul className="mt-7 grid gap-3 md:grid-cols-2">
          {bullets.map((bullet) => (
            <li key={bullet} className="rounded-2xl border border-border/70 bg-[#101823] px-4 py-3 text-sm text-foreground">
              {bullet}
            </li>
          ))}
        </ul>

        <Button onClick={onOpenLead} className="mt-8" aria-label="Quero atendimento com segurança">
          Quero atendimento com segurança <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </section>
  );
}