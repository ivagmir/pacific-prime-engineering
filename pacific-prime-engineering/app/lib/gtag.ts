export const GA_MEASUREMENT_ID =
  "G-X3GPDNRXJV";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== "undefined") {
    window.gtag?.("event", eventName, params);
  }
};
