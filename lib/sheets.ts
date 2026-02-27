import { google } from "googleapis";
import { createPrivateKey } from "crypto";

type LeadSheetRow = [
  timestampISO: string,
  name: string,
  email: string,
  whatsapp: string,
  objective: string,
  utm_source: string,
  utm_medium: string,
  utm_campaign: string,
  utm_content: string,
  utm_term: string,
  referrer: string,
  userAgent: string
];

function getEnvOrThrow(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
}

function normalizePrivateKey(raw: string) {
  const trimmed = raw.trim();
  const unquoted =
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
      ? trimmed.slice(1, -1)
      : trimmed;

  return unquoted
    .replace(/\\\\n/g, "\n")
    .replace(/\\n/g, "\n")
    .replace(/\\\r?\n/g, "\n")
    .replace(/\r\n/g, "\n")
    .replace(/\\+$/g, "")
    .trim();
}

function getPrivateKey() {
  const key = normalizePrivateKey(getEnvOrThrow("GOOGLE_PRIVATE_KEY"));

  if (!key.includes("BEGIN PRIVATE KEY") || !key.includes("END PRIVATE KEY")) {
    throw new Error(
      "Invalid GOOGLE_PRIVATE_KEY format. Use full PEM key with BEGIN/END lines and \\n breaks."
    );
  }

  if (key.includes("...")) {
    throw new Error("GOOGLE_PRIVATE_KEY appears to be a placeholder. Paste the real private_key.");
  }

  try {
    createPrivateKey({ key, format: "pem" });
  } catch (error) {
    const details = [
      `len=${key.length}`,
      `first=${key.charCodeAt(0)}`,
      `last=${key.charCodeAt(key.length - 1)}`,
      `hasBegin=${key.includes("BEGIN PRIVATE KEY")}`,
      `hasEnd=${key.includes("END PRIVATE KEY")}`,
      `hasBackslashN=${key.includes("\\n")}`,
      `hasRealNewline=${key.includes("\n")}`,
    ].join(",");
    const message = error instanceof Error ? error.message : "unknown key parse error";
    throw new Error(`Invalid GOOGLE_PRIVATE_KEY after normalization (${details}): ${message}`);
  }

  return key;
}

function getServiceAccountEmail() {
  const email = getEnvOrThrow("GOOGLE_SERVICE_ACCOUNT_EMAIL").trim();
  if (!email.includes("@") || !email.includes("iam.gserviceaccount.com")) {
    throw new Error(
      "Invalid GOOGLE_SERVICE_ACCOUNT_EMAIL. Use the service account client_email, not the spreadsheet URL."
    );
  }
  return email;
}

export async function appendLeadToSheet(row: LeadSheetRow) {
  const spreadsheetId = getEnvOrThrow("GOOGLE_SHEETS_SPREADSHEET_ID").trim();
  const range = (process.env.GOOGLE_SHEETS_RANGE || "Leads!A1").trim();

  const auth = new google.auth.JWT({
    email: getServiceAccountEmail(),
    key: getPrivateKey(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}
