import React from "react";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductCatalogueClient } from "@/components/products/ProductCatalogueClient";
import { BusinessCtaBanner } from "@/components/common/BusinessCtaBanner";

export const metadata: Metadata = {
  title: "Products Catalogue | Safety Shoes, Clean Room, Formal & Leather Goods",
  description:
    "Browse the complete footwear and finished leather goods catalogue from Greeny Hygiene Private Limited, Chennai. Filter by Safety Shoes, Clean Room Shoes, Formal Shoes, Casual Shoes & Loafers, and Leather Goods.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <div>
      <section className="bg-navy text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 [&_nav]:text-gray-300 [&_span.text-navy]:text-gold-light">
            <Breadcrumbs items={[{ label: "Products" }]} />
          </div>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
            Complete Footwear &amp; Leather Range
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold max-w-3xl">
            Our Product Catalogue
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
            Explore industrial safety shoes, clean-room footwear, men&apos;s formal leather shoes,
            casual loafers, and finished leather goods available for wholesale, corporate, and
            export supply.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCatalogueClient initialProducts={products} />
        </div>
      </section>

      <BusinessCtaBanner />
    </div>
  );
}
