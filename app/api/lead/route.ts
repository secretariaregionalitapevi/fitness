import { NextRequest, NextResponse } from "next/server";

import { appendLeadToSheet } from "@/lib/sheets";
import { checkRateLimit } from "@/lib/rateLimit";
import { leadSchema } from "@/lib/validators";

export const runtime = "nodejs";

function getClientIP(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function sanitize(input: string) {
  return input.replace(/[<>]/g, "").trim();
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIP(request);
    const rate = checkRateLimit(ip);

    if (!rate.allowed) {
      return NextResponse.json(
        { message: "Muitas tentativas. Aguarde um minuto e tente novamente." },
        { status: 429 }
      );
    }

    const body = await request.json();

    if (body?.honeypot && String(body.honeypot).trim().length > 0) {
      return NextResponse.json({ message: "Requisição inválida." }, { status: 400 });
    }

    const parsed = leadSchema.safeParse({
      ...body,
      name: sanitize(String(body?.name ?? "")),
      email: sanitize(String(body?.email ?? "")).toLowerCase(),
      whatsapp: sanitize(String(body?.whatsapp ?? "")),
      objective: sanitize(String(body?.objective ?? "")),
      honeypot: sanitize(String(body?.honeypot ?? "")),
      utm_source: sanitize(String(body?.utm_source ?? "")),
      utm_medium: sanitize(String(body?.utm_medium ?? "")),
      utm_campaign: sanitize(String(body?.utm_campaign ?? "")),
      utm_content: sanitize(String(body?.utm_content ?? "")),
      utm_term: sanitize(String(body?.utm_term ?? "")),
      referrer: sanitize(String(body?.referrer ?? "")),
      consent: Boolean(body?.consent),
    });

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Dados inválidos.";
      return NextResponse.json({ message: firstError }, { status: 422 });
    }

    const data = parsed.data;

    await appendLeadToSheet([
      new Date().toISOString(),
      data.name,
      data.email,
      data.whatsapp,
      data.objective,
      data.utm_source,
      data.utm_medium,
      data.utm_campaign,
      data.utm_content,
      data.utm_term,
      data.referrer,
      request.headers.get("user-agent") ?? "",
    ]);

    return NextResponse.json({ message: "Cadastro recebido com sucesso." }, { status: 200 });
  } catch (error) {
    console.error("[/api/lead] submit error:", error);

    const errMsg = error instanceof Error ? error.message : "";
    const errCode =
      typeof error === "object" && error && "code" in error
        ? String((error as { code?: unknown }).code ?? "")
        : "";
    const missingEnvMatch = errMsg.match(/Missing required environment variable: ([A-Z0-9_]+)/);
    const missingEnvKey = missingEnvMatch?.[1];

    const message = missingEnvKey
      ? `Configuração do servidor incompleta. Variável ausente: ${missingEnvKey}.`
      : errMsg.startsWith("Invalid GOOGLE_") || errMsg.includes("placeholder")
        ? errMsg
        : "Não foi possível processar seu cadastro agora. Tente novamente.";

    const details =
      process.env.NODE_ENV === "development" && error instanceof Error
        ? { error: error.message, code: errCode || undefined }
        : undefined;

    return NextResponse.json({ message, ...details }, { status: 500 });
  }
}
