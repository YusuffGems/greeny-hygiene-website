import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { BrochureDownloadButton } from "@/components/common/BrochureDownloadButton";
import { SocialIcons } from "@/components/common/SocialIcons";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-navy text-gray-300 border-t border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Info & Social Media Icons */}
          <div className="space-y-4">
            <BrandLogo variant="light" />
            <p className="text-sm text-gray-300 leading-relaxed pt-2">
              Greeny Hygiene Private Limited is a Chennai-based Manufacturer, Exporter, Trader,
              Wholesaler, and Supplier of industrial safety shoes, clean-room footwear, formal
              leather shoes, loafers, and finished leather goods.
            </p>
            <div className="pt-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2.5">
                Connect With Us
              </p>
              <SocialIcons variant="footer" />
            </div>
            <div className="pt-2">
              <BrochureDownloadButton
                source="footer"
                variant="light"
                label="Download Brochures"
                className="w-full sm:w-auto text-xs py-2.5 px-4"
              />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-white font-semibold text-base tracking-wide uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/brochures" className="hover:text-gold transition-colors">
                  Brochures &amp; Catalogues
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-gold transition-colors">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="font-heading text-white font-semibold text-base tracking-wide uppercase mb-4">
              Product Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/safety-shoes" className="hover:text-gold transition-colors">
                  Safety Shoes
                </Link>
              </li>
              <li>
                <Link href="/clean-room-shoes" className="hover:text-gold transition-colors">
                  Clean Room Shoes
                </Link>
              </li>
              <li>
                <Link href="/formal-shoes" className="hover:text-gold transition-colors">
                  Formal Shoes
                </Link>
              </li>
              <li>
                <Link href="/casual-shoes-loafers" className="hover:text-gold transition-colors">
                  Casual Shoes &amp; Loafers
                </Link>
              </li>
              <li>
                <Link href="/finished-leather-goods" className="hover:text-gold transition-colors">
                  Finished Leather Goods
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="font-heading text-white font-semibold text-base tracking-wide uppercase mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{siteConfig.contact.emailDisplay}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>{siteConfig.contact.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-navy-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© 2026 Greeny Hygiene Private Limited. All Rights Reserved.</p>
          <p>Designed &amp; Developed for Greeny Hygiene Private Limited</p>
        </div>
      </div>
    </footer>
  );
}
