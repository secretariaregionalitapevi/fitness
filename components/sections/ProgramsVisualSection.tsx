"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Planejamento semanal",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Treino que cabe na rotina",
    image:
      "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Refeições inteligentes",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Controle de beliscos",
    image:
      "https://images.unsplash.com/photo-1549570652-97324981a6fd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Foco e energia diária",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Constância sem culpa",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
];

export function ProgramsVisualSection() {
  return (
    <section className="container py-14 md:py-20">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-[#f97316]">Ambiente de execução</p>
      <h2 className="mt-3 text-center font-display text-5xl text-foreground md:text-7xl">
        Programas e recursos visuais
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program, i) => (
          <motion.article
            key={program.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-black/35"
          >
            <Image
              src={program.image}
              alt={program.title}
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,8,14,.9),rgba(5,8,14,.15))]" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/35 px-3 py-2">
              <h3 className="font-display text-2xl text-white md:text-3xl">{program.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
