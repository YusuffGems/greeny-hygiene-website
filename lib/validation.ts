import { ContactFormData } from "@/types";

export interface ValidationResult {
  valid: boolean;
  sanitized?: ContactFormData;
  errors: Record<string, string>;
}

export function sanitizeText(input: unknown, maxLength = 500): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/[^0-9]/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export function validateContactPayload(raw: Record<string, unknown>): ValidationResult {
  const errors: Record<string, string> = {};

  const sanitized: ContactFormData = {
    name: sanitizeText(raw.name, 100),
    companyName: sanitizeText(raw.companyName, 120),
    email: sanitizeText(raw.email, 120),
    phone: sanitizeText(raw.phone, 30),
    productInterested: sanitizeText(raw.productInterested, 150),
    quantityRequired: sanitizeText(raw.quantityRequired, 80),
    message: sanitizeText(raw.message, 1500),
  };

  if (!sanitized.name) {
    errors.name = "Name is required.";
  }
  if (!sanitized.email || !isValidEmail(sanitized.email)) {
    errors.email = "A valid email address is required.";
  }
  if (!sanitized.phone || !isValidPhone(sanitized.phone)) {
    errors.phone = "A valid phone number (7-15 digits) is required.";
  }
  if (!sanitized.productInterested) {
    errors.productInterested = "Please select a product or category.";
  }
  if (!sanitized.message) {
    errors.message = "Enquiry message is required.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    sanitized: Object.keys(errors).length === 0 ? sanitized : undefined,
    errors,
  };
}
