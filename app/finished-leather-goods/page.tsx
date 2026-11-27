import React from "react";
import type { Metadata } from "next";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { CategoryPageTemplate } from "@/components/products/CategoryPageTemplate";

const category = getCategoryBySlug("finished-leather-goods")!;

export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription,
  alternates: {
    canonical: "/finished-leather-goods",
  },
};

export default function CategoryPage() {
  const categoryProducts = getProductsByCategory("finished-leather-goods");
  return <CategoryPageTemplate category={category} products={categoryProducts} />;
}
