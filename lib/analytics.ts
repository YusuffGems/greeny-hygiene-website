"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackGAEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export function trackBrochureDownload(sourceLocation: string): void {
  trackGAEvent("brochure_download", {
    event_category: "engagement",
    event_label: sourceLocation,
    file_name: "Greeny-Hygiene-Product-Brochure-2026.pdf",
  });
}

export function trackWhatsAppEnquiry(productOrContext: string): void {
  trackGAEvent("whatsapp_enquiry", {
    event_category: "lead",
    event_label: productOrContext,
  });
}

export function trackPhoneCallClick(sourceLocation: string): void {
  trackGAEvent("phone_call_click", {
    event_category: "lead",
    event_label: sourceLocation,
  });
}

export function trackEnquirySubmit(productInterested: string): void {
  trackGAEvent("generate_lead", {
    event_category: "contact_form",
    event_label: productInterested,
  });
}
