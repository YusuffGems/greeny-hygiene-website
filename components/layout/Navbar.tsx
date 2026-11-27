"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MessageCircle, FileText, MapPin, Mail } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { BrochureDownloadButton } from "@/components/common/BrochureDownloadButton";
import { SocialIcons } from "@/components/common/SocialIcons";
import { categories } from "@/data/categories";
import { siteConfig } from "@/lib/config";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Our Brands", href: "/brands" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar with Location, Email & All Social Media Icons */}
      <div className="bg-navy text-gray-200 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-5 min-w-0">
            <span className="inline-flex items-center gap-1.5 text-gray-300 truncate">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
              <span className="truncate">Poonamallee, Chennai, Tamil Nadu</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-gray-300">
              <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>{siteConfig.contact.emailDisplay}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden lg:inline text-gray-400">Follow Us:</span>
            <SocialIcons variant="header" />
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white border-b border-gray-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="shrink-0">
            <BrandLogo variant="dark" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Primary Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 text-sm font-medium py-2 whitespace-nowrap transition-colors ${
                        isActive
                          ? "text-gold-dark font-semibold"
                          : "text-charcoal hover:text-navy"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-4 h-4 shrink-0" />
                    </Link>

                    {dropdownOpen && (
                      <div className="absolute left-0 top-full pt-2 w-64 z-50">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 overflow-hidden">
                          <Link
                            href="/products"
                            className="block px-4 py-2.5 text-sm font-semibold text-navy hover:bg-surface-muted border-b border-gray-100"
                          >
                            All Footwear &amp; Leather Products
                          </Link>
                          {categories.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/${cat.slug}`}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-surface-muted hover:text-navy transition-colors"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-gold-dark font-semibold"
                      : "text-charcoal hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons (Uniform h-9 height) */}
          <div className="hidden xl:flex items-center gap-2.5 shrink-0">
            <BrochureDownloadButton
              source="navbar_desktop"
              variant="compact"
              label="Brochure"
            />
            <Link
              href="/contact"
              className="h-9 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-md bg-navy hover:bg-navy-light text-white text-xs font-semibold whitespace-nowrap transition-colors shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>Get a Quote</span>
            </Link>
            <a
              href={buildGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-md border border-gold text-navy hover:bg-gold hover:text-white text-xs font-semibold whitespace-nowrap transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile / Tablet Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
            className="xl:hidden p-2 rounded-md text-navy hover:bg-surface-muted"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-2.5 text-base font-medium text-navy hover:text-gold-dark"
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 border-l-2 border-gold/40 space-y-1.5 my-1">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/${cat.slug}`}
                        className="block py-1.5 text-sm text-gray-600 hover:text-navy"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 flex flex-col gap-2.5 border-t border-gray-100">
              <BrochureDownloadButton
                source="navbar_mobile"
                variant="outline"
                label="View & Download Brochures"
                className="w-full"
              />
              <Link
                href="/contact"
                className="h-11 w-full inline-flex items-center justify-center rounded-md bg-navy text-white text-sm font-semibold"
              >
                Get a Quote
              </Link>
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-full inline-flex items-center justify-center rounded-md border border-gold text-navy text-sm font-semibold"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
