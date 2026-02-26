"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles, Star } from "lucide-react";

import { PRODUCT_FALLBACK_SRC, PRODUCT_IMAGE_SRC } from "@/lib/constants";
import { Button } from "@/components/ui/button";

type HeroSectionProps = { onOpenLead: () => void };

const points = [
  "Nova apresentação com 4 frascos-ampola",
  "Solução injetável de 0,5 mL por frasco",
  "Rastreabilidade e suporte ao cliente",
];

export function HeroSection({ onOpenLead }: HeroSectionProps) {
  const heroImageSrc = PRODUCT_IMAGE_SRC || PRODUCT_FALLBACK_SRC;

  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_5%_0%,rgba(249,115,22,.16),transparent_28%),radial-gradient(circle_at_98%_8%,rgba(34,197,94,.2),transparent_32%)]" />

      <div className="container py-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[32px] border border-border/70 bg-gradient-to-br from-[#0f1723] via-[#0d141e] to-[#0a1119] p-4 shadow-soft md:p-7"
        >
          <div className="absolute -right-14 top-8 hidden h-40 w-16 rotate-[32deg] bg-[#f97316]/85 md:block" />
          <div className="absolute -left-10 bottom-4 hidden h-24 w-16 -rotate-[28deg] bg-accent/80 md:block" />

          <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-[24px] border border-border/70 bg-black/30">
              <Image
                src={heroImageSrc}
                alt="T.G. Tirzepatida - nova apresentação"
                width={1100}
                height={1100}
                className="h-full min-h-[420px] w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,12,.78),rgba(2,6,12,.15),rgba(2,6,12,.4))]" />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-3 py-1 text-xs text-white">
                <Star className="h-3.5 w-3.5 text-[#f97316]" />
                Nova apresentação
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-black/45 px-3 py-2 text-xs text-white">
                  <p className="font-semibold">Tirzepatida 15 mg/0,5 mL</p>
                  <p className="text-white/80">Apresentação injetável</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-black/45 px-3 py-2 text-xs text-white">
                  <p className="font-semibold">4 frascos-ampola</p>
                  <p className="text-white/80">Segurança e rastreabilidade</p>
                </div>
              </div>
            </div>

            <div className="px-1 py-2 md:px-2 md:py-4">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-[#f97316]" />
                Produto original • envio com suporte • atendimento no WhatsApp
              </p>

              <h1 className="mt-6 text-balance font-display text-6xl leading-[0.95] text-foreground md:text-7xl lg:text-[5.7rem]">
                T.G.
                <span className="block text-[#f97316]">Tirzepatida</span>
                <span className="block text-4xl font-serif normal-case tracking-normal md:text-5xl lg:text-6xl">
                  solução injetável
                </span>
              </h1>

              <p className="mt-5 text-lg text-muted-foreground">
                Nova apresentação com 4 frascos-ampola de 0,5 mL. Produto com foco em segurança e procedência, com acompanhamento comercial para orientar seu pedido.
              </p>

              <ul className="mt-7 grid gap-3 text-left">
                {points.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/35 px-3 py-3 text-sm text-foreground md:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col justify-start gap-3 sm:flex-row">
                <Button size="lg" onClick={onOpenLead} aria-label="Quero atendimento agora" className="bg-[#f97316] text-white hover:bg-[#fb7f2c]">
                  Quero atendimento agora
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#oferta">Ver condições</Link>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border border-border px-3 py-1">Procedência verificada</span>
                <span className="rounded-full border border-border px-3 py-1">Atendimento rápido</span>
                <span className="rounded-full border border-border px-3 py-1">Compra assistida</span>
              </div>

              <div className="mt-4 inline-flex items-start gap-2 rounded-xl border border-border/70 bg-card/40 px-3 py-2 text-xs text-muted-foreground">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-accent" />
                Venda sob prescrição médica. Este conteúdo não substitui orientação profissional.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
