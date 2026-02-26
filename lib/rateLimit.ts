type Entry = { count: number; resetAt: number };

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const memoryStore = globalThis as typeof globalThis & { __leadRateLimitMap?: Map<string, Entry> };
const store = memoryStore.__leadRateLimitMap ?? new Map<string, Entry>();
memoryStore.__leadRateLimitMap = store;

export function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = store.get(ip);

  if (!current || current.resetAt < now) {
    const resetAt = now + WINDOW_MS;
    store.set(ip, { count: 1, resetAt });
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetAt };
  }

  if (current.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetAt: current.resetAt };
  }

  current.count += 1;
  store.set(ip, current);
  return { allowed: true, remaining: MAX_REQUESTS - current.count, resetAt: current.resetAt };
}