import Link from "next/link";
import { BRAND_NAME } from "@/lib/constants";

export const metadata = { title: "Termos de Uso | Instituto Vida Leve" };

export default function TermsPage() {
  return (
    <main className="container py-20">
      <h1 className="font-serif text-4xl text-foreground">Termos de Uso</h1>
      <p className="mt-6 text-muted-foreground">Ao acessar os conteúdos do {BRAND_NAME}, você concorda com estes termos.</p>
      <div className="mt-6 space-y-4 text-sm text-muted-foreground">
        <p>1. O conteúdo possui finalidade educacional e não substitui orientação médica ou nutricional individual.</p>
        <p>2. Resultados variam de pessoa para pessoa e não garantimos resultados específicos.</p>
        <p>3. O uso indevido de materiais protegidos por direitos autorais é proibido.</p>
        <p>4. Compras podem ter política de garantia conforme descrito na oferta.</p>
      </div>
      <Link href="/" className="mt-8 inline-block text-primary hover:underline">Voltar para a página inicial</Link>
    </main>
  );
}