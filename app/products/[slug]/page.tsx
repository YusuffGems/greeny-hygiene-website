"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CheckCircle2, MessageCircle, FileText, ArrowLeft } from "lucide-react";
import { products, getRelatedProducts } from "@/data/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductMediaGallery } from "@/components/products/ProductMediaGallery";
import { BusinessCtaBanner } from "@/components/common/BusinessCtaBanner";
import { BrochureDownloadButton } from "@/components/common/BrochureDownloadButton";
import { buildProductWhatsAppUrl } from "@/lib/whatsapp";
import { trackWhatsAppEnquiry } from "@/lib/analytics";

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug || "";
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-5">
        <h1 className="font-heading text-3xl font-bold text-navy">Product Not Found</h1>
        <p className="text-gray-600">
          The requested footwear item could not be found in our current catalogue.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy text-white text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Products</span>
        </Link>
      </div>
    );
  }

  const whatsappUrl = buildProductWhatsAppUrl(product.name, product.productCode);
  const related = getRelatedProducts(product, 3);

  return (
    <div>
      {/* Top Breadcrumb Bar */}
      <div className="bg-surface-muted border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: product.categoryName, href: `/${product.categorySlug}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* Product Main Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Slide Gallery + Play Video + Fullscreen Viewer */}
            <div className="lg:col-span-6">
              <ProductMediaGallery
                productName={product.name}
                mainImage={product.image}
                gallery={product.gallery}
                videoUrl={product.videoUrl}
              />
            </div>

            {/* Right Product Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href={`/${product.categorySlug}`}
                  className="px-3 py-1 rounded-full bg-surface-muted text-navy text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
                >
                  {product.categoryName}
                </Link>
                {product.brand && (
                  <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider">
                    Brand: {product.brand}
                  </span>
                )}
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy leading-tight">
                {product.name}
              </h1>

              <p className="text-base text-gray-700 leading-relaxed">{product.fullDescription}</p>

              {product.features && product.features.length > 0 && (
                <div className="bg-surface-muted rounded-xl p-5 border border-gray-200/80 space-y-2.5">
                  <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-navy">
                    Key Highlights
                  </h2>
                  <ul className="space-y-2">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-charcoal">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2 flex flex-wrap gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppEnquiry(product.name)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm transition-colors shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-navy hover:bg-navy-light text-white font-semibold text-sm transition-colors"
                >
                  <FileText className="w-4 h-4 text-gold" />
                  <span>Request Bulk Quote</span>
                </Link>

                <BrochureDownloadButton
                  source="product_detail"
                  variant="outline"
                  label="Download Brochure"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 bg-surface-muted border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-navy mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      <BusinessCtaBanner />
    </div>
  );
}
