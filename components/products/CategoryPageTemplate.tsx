import React from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Category, Product } from "@/types";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductCard } from "./ProductCard";
import { BusinessCtaBanner } from "@/components/common/BusinessCtaBanner";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface CategoryPageTemplateProps {
  category: Category;
  products: Product[];
}

export function CategoryPageTemplate({ category, products }: CategoryPageTemplateProps) {
  const whatsappUrl = buildGeneralWhatsAppUrl(
    `Hello Greeny Hygiene Private Limited,\nI am interested in your ${category.name} range. Please share product options, sizes, and B2B quotation.\nThank you.`
  );

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-navy text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 [&_nav]:text-gray-300 [&_span.text-navy]:text-gold-light">
            <Breadcrumbs
              items={[
                { label: "Products", href: "/products" },
                { label: category.name },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Footwear &amp; Leather Category
              </span>
              <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white leading-tight">
                {category.name}
              </h1>
              <p className="text-lg text-gold-light font-medium">{category.tagline}</p>
              <p className="text-base text-gray-200 leading-relaxed max-w-2xl">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {category.subcategories.map((sub) => (
                  <span
                    key={sub}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-white"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                    {sub}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-lg bg-gold hover:bg-gold-dark text-navy font-bold text-sm transition-colors"
                >
                  Request Bulk Quote
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                Available {category.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Select any item below to view product details or send an instant WhatsApp enquiry.
              </p>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-navy hover:text-gold-dark"
            >
              ← View All Categories
            </Link>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-surface-muted rounded-xl p-10 text-center border border-gray-200">
              <p className="font-heading text-lg font-semibold text-navy">
                Catalogue items for {category.name} are updated regularly.
              </p>
              <p className="text-sm text-gray-600 mt-2 mb-5">
                Contact our sales team directly for current models and availability.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 rounded-lg bg-navy text-white text-sm font-semibold"
              >
                Enquire Now
              </Link>
            </div>
          )}
        </div>
      </section>

      <BusinessCtaBanner />
    </div>
  );
}
