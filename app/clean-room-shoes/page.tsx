import React from "react";
import type { Metadata } from "next";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { CategoryPageTemplate } from "@/components/products/CategoryPageTemplate";

const category = getCategoryBySlug("clean-room-shoes")!;

export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription,
  alternates: {
    canonical: "/clean-room-shoes",
  },
};

export default function CategoryPage() {
  const categoryProducts = getProductsByCategory("clean-room-shoes");
  return <CategoryPageTemplate category={category} products={categoryProducts} />;
}
