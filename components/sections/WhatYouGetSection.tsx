"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { METHOD_NAME, PRODUCT_FALLBACK_SRC, PRODUCT_IMAGE_SRC } from "@/lib/constants";

const items = [
  "Informações da apresentação e composição",
  "Condições comerciais atualizadas",
  "Orientação de atendimento para pedido",
  "Canal oficial para suporte no WhatsApp",
  "Confirmação de disponibilidade",
  "Garantia de 7 dias conforme política",
  "Atendimento humano e rápido",
  "Checklist de compra segura",
];

export function WhatYouGetSection() {
  const sectionImageSrc = PRODUCT_IMAGE_SRC || PRODUCT_FALLBACK_SRC;

  return (
    <section id="conteudo" className="container py-14 md:py-20">
      <p className="text-xs uppercase tracking-[0.18em] text-[#f97316]">Atendimento premium</p>
      <h2 className="mt-3 font-display text-5xl text-foreground md:text-6xl">
        O que você recebe no atendimento do {METHOD_NAME}
      </h2>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-4">
          <Image
            src={sectionImageSrc}
            alt="T.G. Tirzepatida"
            width={1100}
            height={1100}
            className="h-[320px] w-full rounded-2xl object-cover"
          />
          <div className="absolute inset-x-6 bottom-7 rounded-2xl border border-white/20 bg-black/55 p-4 text-sm text-white">
            <p className="font-semibold">Compra orientada de ponta a ponta</p>
            <p className="mt-1 text-white/85">Você recebe clareza para decidir com segurança.</p>
          </div>
        </article>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid gap-3 md:grid-cols-2"
        >
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card/40 px-4 py-3 text-sm text-foreground">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
