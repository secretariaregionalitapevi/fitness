"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ClipboardList, CalendarDays, ShieldCheck, MessageCircleMore, ArrowRight } from "lucide-react";

import { METHOD_NAME, PRODUCT_FALLBACK_SRC, PRODUCT_IMAGE_SRC } from "@/lib/constants";

const cards = [
  {
    title: "Cadastro rápido",
    description: "Você preenche os dados e entra na fila de atendimento.",
    icon: ClipboardList,
  },
  {
    title: "Validação e suporte",
    description: "Nossa equipe confirma informações e orienta o processo.",
    icon: MessageCircleMore,
  },
  {
    title: "Condições da oferta",
    description: "Você recebe valores, prazos e detalhes de disponibilidade.",
    icon: CalendarDays,
  },
  {
    title: "Compra segura",
    description: "Fechamento com suporte e confirmação no canal oficial.",
    icon: ShieldCheck,
  },
];

export function HowItWorksSection() {
  const sectionImageSrc = PRODUCT_IMAGE_SRC || PRODUCT_FALLBACK_SRC;

  return (
    <section id="como-funciona" className="container py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-xs uppercase tracking-[0.18em] text-[#f97316]">Processo de atendimento</p>
        <h2 className="mt-3 font-display text-5xl text-foreground md:text-6xl">Como funciona o {METHOD_NAME}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground md:text-lg">
          Fluxo simples e transparente: você solicita atendimento, recebe as condições e finaliza com segurança.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-4">
          <Image
            src={sectionImageSrc}
            alt="T.G. Tirzepatida"
            width={1100}
            height={1100}
            className="h-[340px] w-full rounded-2xl object-cover"
          />
          <div className="absolute inset-x-6 bottom-7 rounded-2xl border border-white/20 bg-black/55 p-4 text-sm text-white">
            <p className="font-semibold">Atendimento com transparência</p>
            <p className="mt-1 text-white/85">Informações claras sobre produto, condições e próximos passos.</p>
          </div>
        </article>

        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="relative rounded-3xl border border-border bg-card/45 p-6"
              >
                <span className="absolute left-5 top-0 h-1.5 w-14 -translate-y-1/2 rounded-full bg-[#f97316]" />
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-xl bg-primary/15 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
