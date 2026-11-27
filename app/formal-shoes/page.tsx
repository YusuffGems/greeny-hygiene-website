import React from "react";
import type { Metadata } from "next";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { CategoryPageTemplate } from "@/components/products/CategoryPageTemplate";

const category = getCategoryBySlug("formal-shoes")!;

export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription,
  alternates: {
    canonical: "/formal-shoes",
  },
};

export default function CategoryPage() {
  const categoryProducts = getProductsByCategory("formal-shoes");
  return <CategoryPageTemplate category={category} products={categoryProducts} />;
}
