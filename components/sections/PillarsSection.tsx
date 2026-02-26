"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, MoonStar, Apple, Users, HeartPulse, Dumbbell } from "lucide-react";

const pillars = [
  ["Alimentação inteligente", "Regras simples para decidir melhor sem neurose.", Apple],
  ["Ambiente e organização", "Estratégias para reduzir tentações e facilitar escolhas.", Brain],
  ["Sono e energia", "Pequenos ajustes que mudam seu dia.", MoonStar],
  ["Movimento possível", "Atividade que cabe na rotina, sem extremismo.", Dumbbell],
  ["Mentalidade e constância", "Ferramentas para sair do 8 ou 80.", HeartPulse],
  ["Apoio e comunidade", "Você não precisa fazer isso sozinho(a).", Users],
] as const;

export function PillarsSection() {
  return (
    <section id="pilares" className="container py-14 md:py-20">
      <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-gradient-to-br from-[#0d141d] to-[#0b1017] p-6 md:p-10">
        <div className="absolute left-0 top-20 hidden h-[380px] w-44 -translate-x-12 overflow-hidden rounded-r-[34px] border-r border-t border-b border-border/40 bg-black/40 lg:block">
          <Image
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80"
            alt="Especialista em saúde"
            width={1600}
                height={1200}
                className="h-full w-full object-cover opacity-80"
            loading="lazy"
          />
        </div>

        <div className="absolute right-0 top-20 hidden h-[380px] w-44 translate-x-12 overflow-hidden rounded-l-[34px] border-l border-t border-b border-border/40 bg-black/40 lg:block">
          <Image
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
            alt="Especialista em saúde sorrindo"
            width={1600}
                height={1200}
                className="h-full w-full object-cover opacity-80"
            loading="lazy"
          />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <p className="text-center text-xs uppercase tracking-[0.18em] text-[#f97316]">Estrutura completa</p>
          <h2 className="mt-3 text-center font-display text-5xl text-foreground md:text-7xl">
            Além do emagrecimento
          </h2>
          <p className="mt-3 text-center text-muted-foreground">Um método de vida com foco em rotina, energia e consistência real.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map(([title, text, Icon], i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="relative rounded-3xl border border-border bg-card/40 p-6"
              >
                <span className="absolute left-5 top-0 h-1.5 w-14 -translate-y-1/2 rounded-full bg-[#f97316]" />
                <div className="inline-flex rounded-xl bg-primary/15 p-2 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </motion.article>
            ))}
          </div>

          <p className="mt-5 text-center text-sm text-muted-foreground">
            Sem promessas irreais. Foco em consistência e saúde.
          </p>
        </div>
      </div>
    </section>
  );
}
