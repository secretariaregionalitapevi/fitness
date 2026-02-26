import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Bebas_Neue } from "next/font/google";
import { Toaster } from "sonner";
import { DisableServiceWorker } from "@/components/DisableServiceWorker";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = DM_Serif_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap", weight: "400" });
const display = Bebas_Neue({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Método Vida Leve | Reeducação alimentar e rotina sustentável",
  description:
    "Landing page de captura do Método Vida Leve: organize refeições, reduza compulsão e construa constância com um plano de 21 dias.",
  openGraph: {
    title: "Método Vida Leve",
    description: "Plano simples e sustentável para emagrecimento e reeducação alimentar.",
    type: "website",
    locale: "pt_BR",
    url: "https://example.com",
    siteName: "Instituto Vida Leve",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${serif.variable} ${display.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <DisableServiceWorker />
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
