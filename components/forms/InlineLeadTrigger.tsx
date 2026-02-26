"use client";

import { ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

type InlineLeadTriggerProps = { onOpenLead: () => void };

export function InlineLeadTrigger({ onOpenLead }: InlineLeadTriggerProps) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-border/70 bg-gradient-to-br from-[#0f1723] to-[#0e141d] p-6 md:p-8">
      <div className="absolute -right-10 -top-14 h-36 w-36 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative grid gap-5 md:grid-cols-[1.15fr_.85fr] md:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Atendimento especializado
          </p>
          <h3 className="mt-3 font-serif text-3xl text-foreground">Receba as condições no WhatsApp</h3>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Enviamos rapidamente as informações de compra, disponibilidade e orientações para seu atendimento.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/40 px-3 py-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-accent" /> Compra segura • suporte • garantia de 7 dias
          </div>
        </div>

        <div className="rounded-2xl border border-border/70 bg-[#0d1520] p-4 md:p-5">
          <p className="text-sm text-foreground">Clique para abrir o formulário e garantir seu atendimento.</p>
          <Button onClick={onOpenLead} className="mt-4 w-full" aria-label="Abrir formulário de cadastro">
            Quero atendimento
          </Button>
        </div>
      </div>
    </div>
  );
}