import React from "react";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ContactForm } from "@/components/common/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Footwear & Leather Goods Enquiry in Chennai",
  description:
    "Contact Greeny Hygiene Private Limited in Poonamallee, Chennai, Tamil Nadu for safety shoes, clean-room footwear, formal leather shoes, and wholesale enquiries.",
  alternates: {
    canonical: "/contact",
  },
};

interface ContactPageProps {
  searchParams?: { product?: string };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const defaultProduct = searchParams?.product || "";

  return (
    <div>
      {/* Header */}
      <section className="bg-navy text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 [&_nav]:text-gray-300 [&_span.text-navy]:text-gold-light">
            <Breadcrumbs items={[{ label: "Contact Us" }]} />
          </div>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
            Business &amp; Trade Desk
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold max-w-3xl">
            Contact Greeny Hygiene Private Limited
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
            Connect with us for product catalogues, bulk corporate orders, dealer enquiries, and
            export requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Company Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm space-y-6">
                <div>
                  <h2 className="font-heading text-xl font-bold text-navy">
                    {siteConfig.companyName}
                  </h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark mt-1">
                    {siteConfig.tagline}
                  </p>
                </div>

                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy">Office Address</p>
                      <p className="mt-1 leading-relaxed">
                        {siteConfig.address.line1}
                        <br />
                        {siteConfig.address.line2}
                        <br />
                        {siteConfig.address.cityStatePin}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy">Phone</p>
                      <p className="mt-1">{siteConfig.contact.phoneDisplay}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy">Email</p>
                      <p className="mt-1">{siteConfig.contact.emailDisplay}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy">Business Hours</p>
                      <p className="mt-1">{siteConfig.contact.businessHours}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={buildGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-72 bg-gray-100">
                <iframe
                  title="Greeny Hygiene Private Limited Poonamallee Chennai Map"
                  src={siteConfig.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Business Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="font-heading text-2xl font-bold text-navy">
                  Send a Business Enquiry
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Fill out the form below with your footwear or finished leather product
                  requirements.
                </p>
              </div>
              <ContactForm defaultProduct={defaultProduct} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
