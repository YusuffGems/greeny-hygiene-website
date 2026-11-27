import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductCard } from "@/components/products/ProductCard";
import { BusinessCtaBanner } from "@/components/common/BusinessCtaBanner";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Our Brands | Lancer, Highlite & Ramer Footwear Supplier in Chennai",
  description:
    "Explore footwear brands offered by Greeny Hygiene Private Limited in Chennai, including Lancer, Highlite, and Ramer collections for industrial and trade buyers.",
  alternates: {
    canonical: "/brands",
  },
};

export default function BrandsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 [&_nav]:text-gray-300 [&_span.text-navy]:text-gold-light">
            <Breadcrumbs items={[{ label: "Our Brands" }]} />
          </div>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
            Brand Portfolio
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold max-w-3xl">
            Brands We Offer
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
            Greeny Hygiene Private Limited supplies footwear selections across Lancer, Highlite,
            and Ramer to meet industrial, corporate, and wholesale demand.
          </p>
        </div>
      </section>

      {/* Brands Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {brands.map((brand) => {
            const brandProducts = products.filter(
              (p) => p.brand && p.brand.toLowerCase() === brand.name.toLowerCase()
            );

            return (
              <div
                key={brand.id}
                id={brand.slug}
                className="scroll-mt-28 bg-surface-muted rounded-2xl border border-gray-200 p-6 sm:p-10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-gray-200">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                      {brand.categoryFocus}
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                      {brand.name}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 shrink-0">
                    <a
                      href={buildGeneralWhatsAppUrl(
                        `Hello Greeny Hygiene Private Limited,\nI would like to enquire about ${brand.name} footwear models and bulk availability.\nThank you.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enquire {brand.name} Range</span>
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-5 py-3 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>

                {/* Corresponding Product Collection */}
                <div className="pt-8">
                  {brandProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {brandProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-sm text-gray-700">
                        Available <strong>{brand.name}</strong> footwear models are supplied on
                        order for corporate, retail, and wholesale buyers.
                      </p>
                      <Link
                        href="/contact"
                        className="text-sm font-semibold text-navy hover:text-gold-dark shrink-0"
                      >
                        Request {brand.name} Catalogue →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <BusinessCtaBanner />
    </div>
  );
}
