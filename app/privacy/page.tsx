import Link from "next/link";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata = { title: "Política de Privacidade | Instituto Vida Leve" };

export default function PrivacyPage() {
  return (
    <main className="container py-20">
      <h1 className="font-serif text-4xl text-foreground">Política de Privacidade</h1>
      <p className="mt-6 text-muted-foreground">Esta página descreve como o {BRAND_NAME} coleta e trata dados pessoais para contato comercial e envio de conteúdo.</p>
      <div className="mt-6 space-y-4 text-sm text-muted-foreground">
        <p>1. Coletamos nome, e-mail, WhatsApp e informacoes de campanha (UTMs) para aténdimento e melhoria de marketing.</p>
        <p>2. Não vendemos dados pessoais a terceiros.</p>
        <p>3. Você pode solicitar alteração ou exclusão dos dados pelo e-mail {CONTACT_EMAIL}.</p>
        <p>4. Adotamos medidas tecnicas para proteger os dados conforme a LGPD.</p>
      </div>
      <Link href="/" className="mt-8 inline-block text-primary hover:underline">Voltar para a página inicial</Link>
    </main>
  );
}