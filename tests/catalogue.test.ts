import { describe, it, expect } from "vitest";
import { categories, getCategoryBySlug } from "@/data/categories";
import { products, getProductBySlug, getFeaturedProducts, getRelatedProducts } from "@/data/products";
import { brochures } from "@/data/brochures";

describe("Catalogue, Categories & Brochures Data Integrity", () => {
  it("has valid unique slugs for all categories", () => {
    const slugs = categories.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(categories.length);
    expect(getCategoryBySlug("safety-shoes")?.name).toBe("Safety Shoes");
  });

  it("has valid featured products and related product lookup without self-reference", () => {
    const featured = getFeaturedProducts();
    expect(featured.length).toBeGreaterThan(0);

    const sample = getProductBySlug("v-105-lancer-safety-shoes");
    expect(sample).toBeDefined();
    if (sample) {
      const related = getRelatedProducts(sample, 3);
      expect(related.every((r) => r.id !== sample.id)).toBe(true);
    }
  });

  it("provides multiple downloadable PDF brochures", () => {
    expect(brochures.length).toBeGreaterThanOrEqual(4);
    for (const b of brochures) {
      expect(b.pdfPath.endsWith(".pdf")).toBe(true);
    }
  });
});
