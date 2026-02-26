"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

import { objectiveOptions, type LeadData } from "@/lib/validators";
import { WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type LeadModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  utmData: {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_content: string;
    utm_term: string;
    referrer: string;
  };
};

type FormErrors = Partial<Record<keyof LeadData, string>>;

const initialState = {
  name: "",
  email: "",
  whatsapp: "",
  objective: "",
  consent: false,
  honeypot: "",
};

function formatWhatsapp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validateClient(data: typeof initialState): FormErrors {
  const errors: FormErrors = {};
  if (data.name.trim().length < 2) errors.name = "Informe seu nome completo.";
  if (!/^\S+@\S+\.\S+$/.test(data.email.trim())) errors.email = "Informe um e-mail válido.";
  if (!/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/.test(data.whatsapp.trim())) errors.whatsapp = "Informe um WhatsApp válido.";
  if (!data.objective) errors.objective = "Selecione seu objetivo.";
  if (!data.consent) errors.consent = "Você precisa aceitar o consentimento LGPD.";
  return errors;
}

export function LeadModal({ open, onOpenChange, utmData }: LeadModalProps) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateClient(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...utmData }),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Não foi possível enviar seu cadastro.");

      toast.success("Cadastro realizado!");
      setForm(initialState);
      setErrors({});
      onOpenChange(false);
      setSuccessOpen(true);
      window.location.hash = "oferta";
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Receber atendimento imediato</DialogTitle>
            <DialogDescription>
              Preencha seus dados para receber condições, disponibilidade e orientações de compra.
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" aria-label="Nome" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} required />
              {errors.name ? <p className="text-xs text-red-300">{errors.name}</p> : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" name="email" type="email" aria-label="E-mail" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} required />
              {errors.email ? <p className="text-xs text-red-300">{errors.email}</p> : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input id="whatsapp" name="whatsapp" aria-label="WhatsApp" value={form.whatsapp} onChange={(e) => setForm((p) => ({ ...p, whatsapp: formatWhatsapp(e.target.value) }))} required />
              {errors.whatsapp ? <p className="text-xs text-red-300">{errors.whatsapp}</p> : null}
            </div>

            <div className="space-y-2">
              <Label>Objetivo</Label>
              <Select value={form.objective} onValueChange={(value) => setForm((p) => ({ ...p, objective: value }))}>
                <SelectTrigger aria-label="Objetivo"><SelectValue placeholder="Selecione seu objetivo" /></SelectTrigger>
                <SelectContent>{objectiveOptions.map((option) => <SelectItem value={option} key={option}>{option}</SelectItem>)}</SelectContent>
              </Select>
              {errors.objective ? <p className="text-xs text-red-300">{errors.objective}</p> : null}
            </div>

            <input type="text" tabIndex={-1} autoComplete="off" name="company" className="hidden" value={form.honeypot} onChange={(e) => setForm((p) => ({ ...p, honeypot: e.target.value }))} />

            <div className="flex items-start gap-3">
              <Checkbox id="consent" checked={form.consent} onCheckedChange={(value) => setForm((p) => ({ ...p, consent: Boolean(value) }))} aria-label="Consentimento LGPD" />
              <Label htmlFor="consent" className="text-sm leading-5 text-muted-foreground">Eu concordo com o tratamento dos dados para contato, conforme a LGPD.</Label>
            </div>
            {errors.consent ? <p className="text-xs text-red-300">{errors.consent}</p> : null}

            <Button type="submit" className="w-full" disabled={submitting} aria-label="Enviar cadastro">
              {submitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
              {submitting ? "Enviando..." : "Finalizar cadastro"}
            </Button>

            {hasErrors ? <p className="text-xs text-muted-foreground">Revise os campos destacados para continuar.</p> : null}
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cadastro realizado!</DialogTitle>
            <DialogDescription>Sua solicitação foi recebida. Fale com nossa equipe no WhatsApp para agilizar seu atendimento.</DialogDescription>
          </DialogHeader>
          <Button asChild><Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</Link></Button>
        </DialogContent>
      </Dialog>
    </>
  );
}