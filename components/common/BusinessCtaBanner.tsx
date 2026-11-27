import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { BrochureDownloadButton } from "./BrochureDownloadButton";

export function BusinessCtaBanner() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-navy via-navy-light to-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
          B2B, Wholesale &amp; Export Enquiries
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto">
          Looking for Quality Footwear Solutions?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Connect with Greeny Hygiene Private Limited for product enquiries, wholesale
          requirements and business opportunities.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-gold hover:bg-gold-dark text-navy font-bold text-sm sm:text-base transition-colors shadow-lg"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={buildGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm sm:text-base transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Enquiry</span>
          </a>
          <BrochureDownloadButton
            source="cta_banner"
            variant="light"
            label="Download Project Brochure"
            className="py-4 px-6"
          />
        </div>
      </div>
    </section>
  );
}
