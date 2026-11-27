"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/config";
import { trackWhatsAppEnquiry, trackPhoneCallClick } from "@/lib/analytics";

export function FloatingWhatsApp() {
  const whatsappUrl = buildGeneralWhatsAppUrl();
  const cleanPhone = siteConfig.contact.phoneNumber.replace(/[^+0-9]/g, "");
  const telHref = `tel:${cleanPhone}`;

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
      aria-label="Quick Contact Floating Actions"
    >
      {/* Floating Call Button (Matching pill style) */}
      <a
        href={telHref}
        onClick={() => trackPhoneCallClick("floating_call_button")}
        aria-label="Call Greeny Hygiene Private Limited"
        className="inline-flex items-center gap-2.5 bg-navy hover:bg-navy-light border border-gold/60 text-white font-semibold px-4 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
      >
        <Phone className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline text-sm tracking-wide">Call Now</span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppEnquiry("floating_whatsapp_button")}
        aria-label="Enquire on WhatsApp"
        className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
      >
        <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline text-sm tracking-wide">WhatsApp Enquiry</span>
      </a>
    </div>
  );
}
