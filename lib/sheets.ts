import { google } from "googleapis";

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

function getPrivateKey() {
  return getEnvOrThrow("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n");
}

export async function appendLeadToSheet(row: LeadSheetRow) {
  const spreadsheetId = getEnvOrThrow("GOOGLE_SHEETS_SPREADSHEET_ID");
  const range = process.env.GOOGLE_SHEETS_RANGE || "Leads!A1";

  const auth = new google.auth.JWT({
    email: getEnvOrThrow("GOOGLE_SERVICE_ACCOUNT_EMAIL"),
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