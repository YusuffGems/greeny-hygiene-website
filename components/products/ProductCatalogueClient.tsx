"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { Product } from "@/types";
import { categories } from "@/data/categories";
import { ProductCard } from "./ProductCard";

interface ProductCatalogueClientProps {
  initialProducts: Product[];
}

export function ProductCatalogueClient({ initialProducts }: ProductCatalogueClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categorySlug === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        (product.productCode && product.productCode.toLowerCase().includes(q)) ||
        (product.brand && product.brand.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, selectedCategory, searchQuery]);

  return (
    <div>
      {/* Search and Category Filter Controls */}
      <div className="bg-surface-muted p-4 sm:p-6 rounded-xl border border-gray-200 mb-10">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                selectedCategory === "all"
                  ? "bg-navy text-white"
                  : "bg-white text-charcoal border border-gray-200 hover:border-navy"
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                  selectedCategory === cat.slug
                    ? "bg-navy text-white"
                    : "bg-white text-charcoal border border-gray-200 hover:border-navy"
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name, code, brand..."
              aria-label="Search products"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-gray-300 text-sm focus:outline-none focus:border-navy"
            />
          </div>
        </div>
      </div>

      {/* Results Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-surface-muted rounded-xl border border-gray-200">
          <p className="font-heading text-lg font-semibold text-navy mb-2">
            No matching products found
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Try clearing your search term or selecting a different footwear category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-lg bg-navy text-white text-sm font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
