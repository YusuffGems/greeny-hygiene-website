import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink, CheckCircle2, MessageCircle } from "lucide-react";
import { brochures } from "@/data/brochures";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BrochureDownloadButton } from "@/components/common/BrochureDownloadButton";
import { BusinessCtaBanner } from "@/components/common/BusinessCtaBanner";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Company & Product Brochures | Download PDF Catalogues",
  description:
    "Download official PDF brochures and product catalogues from Greeny Hygiene Private Limited, Chennai — covering Industrial Safety Shoes, Clean Room Shoes, Formal Leather Shoes, Loafers, and Finished Leather Goods.",
  alternates: {
    canonical: "/brochures",
  },
};

export default function BrochuresPage() {
  const customQuoteWhatsApp = buildGeneralWhatsAppUrl(
    [
      "Hello Greeny Hygiene Private Limited,",
      "I downloaded your product brochure and would like to request detailed specifications and a quotation.",
      "Thank you.",
    ].join("\n")
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 [&_nav]:text-gray-300 [&_span.text-navy]:text-gold-light">
            <Breadcrumbs items={[{ label: "Brochures" }]} />
          </div>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
            Resource Center
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold max-w-3xl leading-tight">
            Product Brochures &amp; Corporate Catalogues
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
            Download our category-wise PDF brochures for corporate procurement, dealer reviews,
            industrial safety sourcing, and export discussions.
          </p>
        </div>
      </section>

      {/* Multiple Brochures Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {brochures.map((item) => (
              <article
                key={item.id}
                className="h-full bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative aspect-[16/9] w-full bg-navy overflow-hidden shrink-0">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-dark">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono font-semibold text-gray-500 bg-surface-muted px-2.5 py-0.5 rounded">
                        {item.fileFormat}
                      </span>
                    </div>

                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy leading-snug mb-3">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="bg-surface-muted rounded-xl p-5 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-navy mb-3">
                        Included in this Brochure
                      </p>
                      <ul className="space-y-2">
                        {item.highlights.map((hl) => (
                          <li
                            key={hl}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal"
                          >
                            <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                    <BrochureDownloadButton
                      source="brochures_page"
                      variant="primary"
                      label="Download PDF"
                      directPdfUrl={item.pdfPath}
                      directFileName={item.fileName}
                      className="w-full"
                    />
                    <a
                      href={item.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-full inline-flex items-center justify-center gap-2 px-4 rounded-lg border border-gray-300 hover:border-navy text-navy text-sm font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" />
                      <span>Preview PDF</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Custom Catalogue / Quotation Request Box */}
          <div className="mt-14 bg-white rounded-2xl border border-gray-200/90 p-7 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1.5 text-center lg:text-left">
              <h3 className="font-heading text-xl font-bold text-navy">
                Need a Custom Quotation or Specific Footwear Size Chart?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Connect with our Chennai sales team directly on WhatsApp or submit a bulk enquiry.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={customQuoteWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 inline-flex items-center justify-center gap-2 px-5 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold whitespace-nowrap transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Request via WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="h-12 inline-flex items-center justify-center gap-2 px-5 rounded-lg bg-navy hover:bg-navy-light text-white text-sm font-semibold whitespace-nowrap transition-colors"
              >
                <Download className="w-4 h-4 text-gold shrink-0" />
                <span>Send Business Enquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BusinessCtaBanner />
    </div>
  );
}
