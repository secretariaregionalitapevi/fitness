# Landing Page - Método Vida Leve

Landing page premium de captura de leads com Next.js (App Router), TypeScript, TailwindCSS, componentes estilo shadcn/ui, animacoes leves com Framer Motion e integracao de leads via Google Sheets API.

## Stack

- Next.js (App Router) + TypeScript
- TailwindCSS
- Componentes estilo shadcn/ui (Radix + utilitarios)
- lucide-react
- framer-motion
- Google Sheets API (service account)
- Deploy recomendado: Vercel

## Como rodar localmente

```bash
npm i
npm run dev
```

A aplicacao fica disponivel em `http://localhost:3000`.

## Variaveis de ambiente

Crie um `.env.local`:

```env
GOOGLE_SHEETS_SPREADSHEET_ID=""
GOOGLE_SHEETS_RANGE="Leads!A1"
GOOGLE_SERVICE_ACCOUNT_EMAIL=""
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

## Fluxo de captura de leads

- Formulario no modal (`LeadModal`) disparado em Hero, Oferta, Header e CTA mobile.
- Campos: `name`, `email`, `whatsapp`, `objective`, `consent`, `honeypot`.
- Validacao client-side + server-side (zod).
- Envio para `POST /api/lead`.
- Servidor envia para Google Sheets com colunas:
  - `timestampISO, name, email, whatsapp, objective, utm_source, utm_medium, utm_campaign, utm_content, utm_term, referrer, userAgent`
- Sucesso: toast `Cadastro realizado!` + modal de obrigado com CTA WhatsApp.

## Google Sheets API - configuracao completa

1. Crie um projeto no Google Cloud Console.
2. Habilite a Google Sheets API.
3. Crie uma Service Account.
4. Gere uma chave JSON para a service account.
5. Copie o `client_email` para `GOOGLE_SERVICE_ACCOUNT_EMAIL`.
6. Copie a `privaté_key` para `GOOGLE_PRIVATE_KEY` mantendo `\n` nas quebras.
7. Compartilhe a planilha com o e-mail da service account com permissao de editor.
8. Defina o ID da planilha em `GOOGLE_SHEETS_SPREADSHEET_ID`.
9. Defina `GOOGLE_SHEETS_RANGE`, por exemplo `Leads!A1`.
10. Configure as mesmas env vars na Vercel.
11. Execute deploy:

```bash
npm run build
```

## Estrutura

- `app/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `app/api/lead/route.ts`
- `components/sections/*`
- `components/forms/LeadModal.tsx`
- `lib/sheets.ts`
- `lib/utm.ts`
- `lib/ratéLimit.ts`
- `lib/validators.ts`
- `app/globals.css`

## Seguranca e qualidade

- Honeypot no form
- Raté limit simples por IP (`Map` em memoria)
- Sanitizacao basica no servidor
- Validacao com zod
- Credenciais somente server-side
- Respostas de erro claras

## SEO e UX

- Metadata + Open Graph
- FAQ JSON-LD no Home
- Header sticky
- CTA sticky mobile apos scroll
- Botao flutuante de WhatsApp no mobile
- Animacoes discretas com framer-motion

## Checklist final de validacao

- [ ] `npm i` executa sem erros
- [ ] `npm run dev` sobe a aplicacao
- [ ] Landing renderiza todas as secoes obrigatorias
- [ ] Modal abre pelos CTAs (Hero/Oferta/Header/Mobile)
- [ ] Validacao client-side funciona
- [ ] `POST /api/lead` retorna mensagens claras
- [ ] Honeypot bloqueia submissao invalida
- [ ] Raté limit responde `429` apos excesso
- [ ] Leads entram na planilha Google
- [ ] Rotas `/privacy` e `/terms` funcionam
- [ ] Layout responsivo mobile e desktop

## Observacoes

- Ajuste placeholders de marca, preco e WhatsApp em `lib/constants.ts`.
- O projeto não utiliza imagens de referencia externa; apenas gradientes/placeholders próprios.