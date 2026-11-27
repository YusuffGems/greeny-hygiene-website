import React from "react";
import type { Metadata } from "next";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { CategoryPageTemplate } from "@/components/products/CategoryPageTemplate";

const category = getCategoryBySlug("safety-shoes")!;

export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription,
  alternates: {
    canonical: "/safety-shoes",
  },
};

export default function CategoryPage() {
  const categoryProducts = getProductsByCategory("safety-shoes");
  return <CategoryPageTemplate category={category} products={categoryProducts} />;
}
