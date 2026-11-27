import { describe, it, expect } from "vitest";
import { sanitizeText, isValidEmail, isValidPhone, validateContactPayload } from "@/lib/validation";

describe("Security & Input Validation", () => {
  it("strips angle brackets and control characters to prevent XSS", () => {
    const dirty = "<script>alert('xss')</script>  Greeny Buyer  ";
    expect(sanitizeText(dirty)).toBe("scriptalert('xss')/script  Greeny Buyer");
  });

  it("validates email addresses accurately", () => {
    expect(isValidEmail("procurement@company.in")).toBe(true);
    expect(isValidEmail("invalid-email")).toBe(false);
  });

  it("validates phone numbers between 7 and 15 digits", () => {
    expect(isValidPhone("+91 98400 12345")).toBe(true);
    expect(isValidPhone("123")).toBe(false);
  });

  it("rejects incomplete contact payloads and accepts valid B2B payloads", () => {
    const invalid = validateContactPayload({ name: "", email: "bad" });
    expect(invalid.valid).toBe(false);
    expect(invalid.errors.name).toBeDefined();
    expect(invalid.errors.email).toBeDefined();

    const valid = validateContactPayload({
      name: "Karthik R",
      companyName: "Chennai Industrial Works",
      email: "karthik@ciw.co.in",
      phone: "+91 98400 11223",
      productInterested: "Safety Shoes",
      quantityRequired: "100 Pairs",
      message: "Need quotation for PU sole safety shoes.",
    });
    expect(valid.valid).toBe(true);
    expect(valid.sanitized?.name).toBe("Karthik R");
  });
});
