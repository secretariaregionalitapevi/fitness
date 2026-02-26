"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    text: "Atendimento super rápido e bem claro sobre cada etapa da compra.",
    name: "Mariana",
    city: "SP",
  },
  {
    text: "Consegui tirar dúvidas no WhatsApp e recebi todas as informações com transparência.",
    name: "Bruno",
    city: "PR",
  },
  {
    text: "Gostei da segurança no processo e da atenção da equipe durante o pedido.",
    name: "Aline",
    city: "MG",
  },
  {
    text: "Explicaram apresentação, condições e próximos passos de forma objetiva.",
    name: "Renata",
    city: "RJ",
  },
  {
    text: "Processo organizado do início ao fim. Atendimento excelente.",
    name: "Diego",
    city: "SC",
  },
  {
    text: "Me senti segura para comprar porque o suporte foi muito claro e profissional.",
    name: "Paula",
    city: "BA",
  },
];

const videoStories = [
  {
    title: "História de atendimento 01",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "História de atendimento 02",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "História de atendimento 03",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="container py-14 md:py-20">
      <p className="text-xs uppercase tracking-[0.18em] text-accent">Prova social</p>
      <h2 className="mt-3 font-serif text-3xl text-foreground md:text-5xl">Depoimentos de clientes atendidos</h2>
      <p className="mt-3 max-w-3xl text-muted-foreground md:text-lg">
        Relatos sobre experiência de atendimento e clareza no processo de compra.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {videoStories.map((video) => (
          <div key={video.title} className="group relative overflow-hidden rounded-3xl border border-border bg-black/35">
            <Image
              src={video.image}
              alt={video.title}
              width={1600}
              height={1200}
              className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,6,12,.82),rgba(3,6,12,.08))]" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/45 px-2 py-1 text-[11px] text-white">
              <BadgeCheck className="h-3.5 w-3.5 text-primary" />
              história real
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
              <span className="text-sm text-white">{video.title}</span>
              <PlayCircle className="h-5 w-5 text-white" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <motion.article
            key={`${item.name}-${item.city}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="rounded-3xl border border-border bg-card/35 p-5"
          >
            <Quote className="h-5 w-5 text-primary" />
            <p className="mt-3 text-sm text-foreground">{item.text}</p>
            <footer className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {item.name}, {item.city}
            </footer>
          </motion.article>
        ))}
      </div>

      <p className="mt-5 text-sm text-muted-foreground">
        Depoimentos sobre experiência de atendimento. Não constituem promessa de resultado clínico.
      </p>
    </section>
  );
}
