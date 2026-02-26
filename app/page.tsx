"use client";

import { useEffect, useMemo, useState } from "react";

import { readUTMFromURL, saveUTM, loadUTM, type UTMData } from "@/lib/utm";
import { BRAND_NAME, METHOD_NAME } from "@/lib/constants";
import { LeadModal } from "@/components/forms/LeadModal";
import { InlineLeadTrigger } from "@/components/forms/InlineLeadTrigger";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { IdentificationSection } from "@/components/sections/IdentificationSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhatYouGetSection } from "@/components/sections/WhatYouGetSection";
import { ModulesSection } from "@/components/sections/ModulesSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCta } from "@/components/sections/StickyMobileCta";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { ProgramsVisualSection } from "@/components/sections/ProgramsVisualSection";

const fallbackUTM: UTMData = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  referrer: "",
};

export default function HomePage() {
  const [leadOpen, setLeadOpen] = useState(false);
  const [utmData, setUtmData] = useState<UTMData>(fallbackUTM);

  useEffect(() => {
    const fromStorage = loadUTM();
    const fromURL = readUTMFromURL(window.location.search);

    const hasAnyUTM =
      Boolean(fromURL.utm_source) ||
      Boolean(fromURL.utm_medium) ||
      Boolean(fromURL.utm_campaign) ||
      Boolean(fromURL.utm_content) ||
      Boolean(fromURL.utm_term);

    const merged = hasAnyUTM ? fromURL : fromStorage;
    saveUTM(merged);
    setUtmData(merged);
  }, []);

  const faqJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "A T.G. Tirzepatida exige prescrição médica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A compra e o uso devem ser feitos com orientação e prescrição profissional.",
          },
        },
        {
          "@type": "Question",
          name: "Como recebo as informações de compra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Após cadastro, nossa equipe entra em contato no WhatsApp para orientar condições e próximos passos.",
          },
        },
      ],
    }),
    []
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header onOpenLead={() => setLeadOpen(true)} />
      <HeroSection onOpenLead={() => setLeadOpen(true)} />
      <AuthoritySection />

      <section className="container pb-14">
        <InlineLeadTrigger onOpenLead={() => setLeadOpen(true)} />
      </section>

      <IdentificationSection onOpenLead={() => setLeadOpen(true)} />
      <HowItWorksSection />
      <PillarsSection />
      <TestimonialsSection />
      <WhatYouGetSection />
      <ProgramsVisualSection />
      <ModulesSection />
      <OfferSection onOpenLead={() => setLeadOpen(true)} />

      <section className="container pb-14">
        <InlineLeadTrigger onOpenLead={() => setLeadOpen(true)} />
      </section>

      <FAQSection />
      <Footer />

      <StickyMobileCta onOpenLead={() => setLeadOpen(true)} />
      <FloatingWhatsApp />

      <LeadModal open={leadOpen} onOpenChange={setLeadOpen} utmData={utmData} />

      <span className="sr-only">
        {BRAND_NAME} - {METHOD_NAME}
      </span>
    </main>
  );
}