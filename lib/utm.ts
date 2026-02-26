export type UTMData = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  referrer: string;
};

const STORAGE_KEY = "lead_utm_data_v1";

export function readUTMFromURL(search: string): UTMData {
  const params = new URLSearchParams(search);
  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_content: params.get("utm_content") ?? "",
    utm_term: params.get("utm_term") ?? "",
    referrer: typeof document !== "undefined" ? document.referrer ?? "" : "",
  };
}

export function saveUTM(data: UTMData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const empty = (): UTMData => ({
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  referrer: typeof document !== "undefined" ? document.referrer ?? "" : "",
});

export function loadUTM(): UTMData {
  if (typeof window === "undefined") return empty();
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return empty();
  try {
    return JSON.parse(raw) as UTMData;
  } catch {
    return empty();
  }
}