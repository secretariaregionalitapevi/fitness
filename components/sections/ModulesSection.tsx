"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function ModulesSection() {
  return (
    <section id="modulos" className="container py-14 md:py-20">
      <h2 className="font-serif text-3xl text-foreground md:text-4xl">Etapas do seu atendimento (simples e rápido)</h2>

      <Accordion type="single" collapsible className="mt-8 space-y-3">
        <AccordionItem value="m1">
          <AccordionTrigger>Etapa 1 — Cadastro e primeiro contato</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              <li>Preenchimento do formulário</li>
              <li>Confirmação dos dados de contato</li>
              <li>Direcionamento para o canal oficial</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="m2">
          <AccordionTrigger>Etapa 2 — Condições e orientação</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              <li>Informações da apresentação</li>
              <li>Condições comerciais atualizadas</li>
              <li>Suporte para dúvidas de compra</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="m3">
          <AccordionTrigger>Etapa 3 — Fechamento com segurança</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              <li>Validação final do pedido</li>
              <li>Orientações de confirmação</li>
              <li>Acompanhamento no pós-venda</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p className="mt-5 text-sm text-muted-foreground">
        Produto de uso injetável. A aquisição e o uso devem respeitar orientação e prescrição profissional.
      </p>
    </section>
  );
}