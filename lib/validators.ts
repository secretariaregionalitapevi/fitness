import { z } from "zod";

export const objectiveOptions = [
  "Quero iniciar com orientação segura",
  "Quero reduzir peso com acompanhamento",
  "Quero controlar apetite e rotina",
  "Quero tirar dúvidas antes da compra",
] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo.").max(120, "Nome muito longo."),
  email: z.string().trim().email("Informe um e-mail válido.").max(180, "E-mail muito longo."),
  whatsapp: z.string().trim().regex(/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/, "Informe um WhatsApp válido."),
  objective: z.enum(objectiveOptions, {
    error: () => ({ message: "Selecione seu objetivo." }),
  }),
  consent: z.boolean().refine((value) => value, {
    message: "Você precisa aceitar o consentimento LGPD.",
  }),
  honeypot: z.string().optional().default(""),
  utm_source: z.string().optional().default(""),
  utm_medium: z.string().optional().default(""),
  utm_campaign: z.string().optional().default(""),
  utm_content: z.string().optional().default(""),
  utm_term: z.string().optional().default(""),
  referrer: z.string().optional().default(""),
});

export type LeadInput = z.input<typeof leadSchema>;
export type LeadData = z.infer<typeof leadSchema>;