"use client";

import { useEffect } from "react";

export function DisableServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
      .then(() => {
        if ("caches" in window) {
          caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key))));
        }
      })
      .catch(() => {
        // noop
      });
  }, []);

  return null;
}
