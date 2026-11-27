import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ContactForm } from "@/components/common/ContactForm";

export function HomeContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-surface-muted border-t border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Contact Us & Business Enquiry"
          subtitle="Reach out to our Chennai office for product catalogues, bulk quotations, and partnership discussions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm space-y-5">
              <h3 className="font-heading text-xl font-bold text-navy">
                {siteConfig.companyName}
              </h3>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy">Registered Office Address</p>
                    <p className="mt-0.5 leading-relaxed">
                      {siteConfig.address.line1}
                      <br />
                      {siteConfig.address.line2}
                      <br />
                      {siteConfig.address.cityStatePin}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy">Phone</p>
                    <p className="mt-0.5">{siteConfig.contact.phoneDisplay}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy">Email</p>
                    <p className="mt-0.5">{siteConfig.contact.emailDisplay}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy">Business Hours</p>
                    <p className="mt-0.5">{siteConfig.contact.businessHours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={buildGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-64 bg-gray-100">
              <iframe
                title="Greeny Hygiene Private Limited Location Map"
                src={siteConfig.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
