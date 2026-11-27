import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { GoogleAnalytics } from "@/components/common/GoogleAnalytics";
import { siteConfig } from "@/lib/config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Greeny Hygiene Private Limited | Footwear Manufacturer, Exporter & Supplier in Chennai",
    template: "%s | Greeny Hygiene Private Limited",
  },
  description:
    "Greeny Hygiene Private Limited is a Chennai-based Manufacturer, Exporter, Trader, Wholesaler, and Supplier of Industrial Safety Shoes, Clean Room Shoes, Formal Leather Shoes, Casual Shoes, Loafers, and Finished Leather Goods.",
  keywords: [
    "Greeny Hygiene Private Limited",
    "Safety Shoes Supplier in Chennai",
    "Safety Shoes Wholesaler in Chennai",
    "Industrial Safety Shoes",
    "Lancer Safety Shoes Dealer",
    "Highlite Safety Shoes Supplier",
    "Clean Room Shoes Supplier",
    "Formal Leather Shoes Supplier",
    "Leather Shoe Manufacturer in Chennai",
    "Footwear Exporter in India",
    "Finished Leather Goods Supplier",
  ],
  verification: siteConfig.analytics.gscVerification
    ? { google: siteConfig.analytics.gscVerification }
    : undefined,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: siteConfig.companyName,
    title: "Greeny Hygiene Private Limited | Footwear & Finished Leather Goods",
    description:
      "Your Trusted Partner for Safety Footwear, Clean Room Shoes, Leather Shoes and Finished Leather Goods in Chennai, India.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.companyName,
    url: siteConfig.siteUrl,
    description:
      "Footwear Manufacturer, Exporter, Trader, Wholesaler, and Supplier based in Poonamallee, Chennai, Tamil Nadu, India.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "106/1, Ground Floor, Kannagi Street, Selvaganapathy Nagar, Senneerkuppam, Poonamallee",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600056",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans text-body bg-white antialiased flex flex-col min-h-screen">
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
