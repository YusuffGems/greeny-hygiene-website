import React from "react";
import Link from "next/link";
import { Home, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex items-center justify-center bg-surface-muted px-4 py-20">
      <div className="max-w-lg text-center space-y-5">
        <span className="inline-block font-heading text-6xl font-bold text-gold">404</span>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          The page you are looking for may have been moved or is no longer available. Explore our
          footwear collections or return to the homepage.
        </p>
        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
          >
            <Home className="w-4 h-4 text-gold" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-navy text-navy text-sm font-semibold hover:bg-navy hover:text-white transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
