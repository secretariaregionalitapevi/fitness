import Link from "next/link";

import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 py-10">
      <div className="container flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>{BRAND_NAME} © {year}. Todos os direitos reservados.</p>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/privacy" className="hover:text-foreground">Política de Privacidade</Link>
          <Link href="/terms" className="hover:text-foreground">Termos</Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground" aria-label="Contato por e-mail">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
      <div className="container mt-4 text-xs text-muted-foreground">
        Ao enviar seus dados, você concorda em receber comunicações. Você pode cancelar a qualquer momento.
      </div>
    </footer>
  );
}