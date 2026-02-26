"use client";

import Image from "next/image";
import { LockKeyhole, ShieldCheck, CircleCheckBig } from "lucide-react";

import { METHOD_NAME, OFFER_INSTALLMENTS, OFFER_PRICE_FROM, OFFER_PRICE_TO, PRODUCT_FALLBACK_SRC, PRODUCT_IMAGE_SRC } from "@/lib/constants";
import { Button } from "@/components/ui/button";

type OfferSectionProps = {
  onOpenLead: () => void;
};

export function OfferSection({ onOpenLead }: OfferSectionProps) {
  const sectionImageSrc = PRODUCT_IMAGE_SRC || PRODUCT_FALLBACK_SRC;

  return (
    <section id="oferta" className="container py-14 md:py-20">
      <div className="overflow-hidden rounded-[32px] border border-border bg-gradient-to-br from-[#101a27] to-[#0f141d] p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-[1.1fr_.9fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Oferta especial</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-5xl">Garanta hoje seu {METHOD_NAME}</h2>

            <div className="mt-6 rounded-3xl border border-primary/30 bg-card/60 p-6">
              <p className="text-sm text-muted-foreground">Acesso imediato ao atendimento de compra</p>
              <p className="mt-3 text-sm text-muted-foreground">
                de <span className="line-through">{OFFER_PRICE_FROM}</span>
              </p>
              <p className="text-5xl font-bold text-primary">{OFFER_PRICE_TO}</p>
              <p className="mt-1 text-sm text-muted-foreground">{OFFER_INSTALLMENTS}</p>
              <p className="mt-4 text-sm text-foreground">Garantia de 7 dias</p>
            </div>

            <Button size="lg" onClick={onOpenLead} className="mt-6" aria-label="Quero garantir minha vaga">
              Quero garantir meu atendimento
            </Button>
          </div>

          <div className="space-y-4 rounded-3xl border border-border bg-card/35 p-5">
            <Image
              src={sectionImageSrc}
              alt="T.G. Tirzepatida"
              width={1100}
              height={1100}
              className="h-56 w-full rounded-2xl object-cover"
            />

            <p className="inline-flex items-center gap-2 text-sm text-foreground">
              <LockKeyhole className="h-4 w-4 text-accent" /> Compra 100% segura • atendimento imediato • suporte
            </p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="inline-flex items-start gap-2"><CircleCheckBig className="mt-0.5 h-4 w-4 text-primary" /> Atendimento humano para orientar seu pedido</li>
              <li className="inline-flex items-start gap-2"><CircleCheckBig className="mt-0.5 h-4 w-4 text-primary" /> Procedência e rastreabilidade na apresentação</li>
              <li className="inline-flex items-start gap-2"><CircleCheckBig className="mt-0.5 h-4 w-4 text-primary" /> Condições especiais por tempo limitado</li>
            </ul>

            <p className="inline-flex items-start gap-2 rounded-xl border border-border/70 bg-[#0e1620] px-3 py-2 text-sm text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-accent" />
              Produto de uso injetável. Compra condicionada à orientação e prescrição profissional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
