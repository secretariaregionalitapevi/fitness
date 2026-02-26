"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Apple, MoonStar, HeartPulse } from "lucide-react";

const highlights = [
  {
    title: "Estratégia completa",
    text: "Você trabalha alimentação, rotina e mentalidade sem cair no 8 ou 80.",
    icon: Brain,
  },
  {
    title: "Plano aplicável",
    text: "Decisões simples para montar refeições em casa ou fora.",
    icon: Apple,
  },
  {
    title: "Energia e foco",
    text: "Ajustes de sono e estrutura para sustentar constância real.",
    icon: MoonStar,
  },
  {
    title: "Evolução contínua",
    text: "Método para voltar ao eixo sem culpa e manter progresso.",
    icon: HeartPulse,
  },
];

export function AuthoritySection() {
  return (
    <section className="container py-12 md:py-20">
      <div className="relative overflow-hidden rounded-[34px] border border-border/70 bg-gradient-to-br from-[#0d121a] via-[#0c1118] to-[#090d13] p-6 md:p-9">
        <div className="absolute left-0 top-0 h-full w-24 bg-[linear-gradient(to_right,rgba(249,115,22,.25),transparent)]" />
        <div className="absolute right-0 top-0 h-full w-24 bg-[linear-gradient(to_left,rgba(249,115,22,.25),transparent)]" />

        <div className="relative">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-[#f97316]">Por que somos diferentes</p>
          <h2 className="mt-3 text-center font-display text-5xl text-foreground md:text-7xl">
            Um método que vai além
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
            Mais clareza visual, rotina prática e execução no mundo real para transformar consistência em resultado.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-[220px_1fr_220px] lg:items-center">
            <div className="mx-auto hidden h-[300px] w-[200px] overflow-hidden rounded-[28px] border border-border/60 bg-black/35 lg:block">
              <Image
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
                alt="Especialista fitness"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="relative rounded-3xl border border-border bg-card/35 p-5"
                  >
                    <span className="absolute left-4 top-0 h-1.5 w-14 -translate-y-1/2 rounded-full bg-[#f97316]" />
                    <div className="inline-flex rounded-xl bg-[#f97316]/15 p-2 text-[#f97316]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-display text-foreground md:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground md:text-base">{item.text}</p>
                  </motion.article>
                );
              })}
            </div>

            <div className="mx-auto hidden h-[300px] w-[200px] overflow-hidden rounded-[28px] border border-border/60 bg-black/35 lg:block">
              <Image
                src="https://images.unsplash.com/photo-1549570652-97324981a6fd?auto=format&fit=crop&w=900&q=80"
                alt="Especialista saúde"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
