import { describe, it, expect } from "vitest";
import { buildGeneralWhatsAppUrl, buildProductWhatsAppUrl } from "@/lib/whatsapp";

describe("WhatsApp Enquiry URL Builders", () => {
  it("builds a valid general WhatsApp enquiry URL", () => {
    const url = buildGeneralWhatsAppUrl();
    expect(url.startsWith("https://wa.me/")).toBe(true);
    expect(decodeURIComponent(url)).toContain("Greeny Hygiene Private Limited");
  });

  it("builds a product-specific WhatsApp enquiry URL with product name and code", () => {
    const url = buildProductWhatsAppUrl("V-105 Lancer Safety Shoes", "V-105");
    const decoded = decodeURIComponent(url);
    expect(decoded).toContain("Product Name: V-105 Lancer Safety Shoes");
    expect(decoded).toContain("Product Code: V-105");
  });
});
