"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faq = [
  {
    q: "A T.G. Tirzepatida exige prescrição médica?",
    a: "Sim. A compra e o uso devem ser feitos com orientação e prescrição profissional.",
  },
  {
    q: "O produto é original e rastreável?",
    a: "Nosso atendimento fornece detalhes da apresentação e orienta sobre procedência e rastreabilidade.",
  },
  {
    q: "Como recebo as condições de compra?",
    a: "Após o cadastro, nossa equipe entra em contato pelo WhatsApp para informar valores, disponibilidade e próximos passos.",
  },
  {
    q: "Em quanto tempo serei atendido(a)?",
    a: "O atendimento é rápido. O prazo pode variar conforme volume de solicitações no momento.",
  },
  {
    q: "Quais formas de pagamento estão disponíveis?",
    a: "As formas e condições atualizadas são informadas pela equipe no momento do atendimento.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Você recebe os detalhes da política de garantia durante o atendimento, antes de concluir a compra.",
  },
  {
    q: "Posso comprar sem orientação profissional?",
    a: "Não recomendamos. Este é um produto de uso injetável e requer acompanhamento adequado.",
  },
  {
    q: "Como funciona o suporte após a compra?",
    a: "Nossa equipe permanece disponível no canal oficial para orientações de suporte e acompanhamento do pedido.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="container py-14 md:py-20">
      <h2 className="font-serif text-3xl text-foreground md:text-4xl">FAQ</h2>

      <Accordion type="single" collapsible className="mt-8 space-y-3">
        {faq.map((item, index) => (
          <AccordionItem key={item.q} value={`faq-${index}`}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}