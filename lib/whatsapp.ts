import { siteConfig } from "./config";

export function buildGeneralWhatsAppUrl(customMessage?: string): string {
  const number = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
  const defaultMsg =
    "Hello Greeny Hygiene Private Limited,\nI would like to enquire about your footwear and finished leather products. Please share your product catalogue and business details.\nThank you.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${number}?text=${text}`;
}

export function buildProductWhatsAppUrl(productName: string, productCode?: string): string {
  const number = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
  const lines = [
    "Hello Greeny Hygiene Private Limited,",
    "I am interested in your product:",
    `Product Name: ${productName}`,
  ];
  if (productCode) {
    lines.push(`Product Code: ${productCode}`);
  }
  lines.push("Please share the product details, available sizes and quotation.");
  lines.push("Thank you.");

  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
}
