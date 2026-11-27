import React from "react";
import type { Metadata } from "next";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { CategoryPageTemplate } from "@/components/products/CategoryPageTemplate";

const category = getCategoryBySlug("casual-shoes-loafers")!;

export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription,
  alternates: {
    canonical: "/casual-shoes-loafers",
  },
};

export default function CategoryPage() {
  const categoryProducts = getProductsByCategory("casual-shoes-loafers");
  return <CategoryPageTemplate category={category} products={categoryProducts} />;
}
