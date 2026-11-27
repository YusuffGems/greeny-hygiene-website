"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-surface-muted px-4 py-20">
      <div className="max-w-lg bg-white rounded-2xl border border-gray-200 p-8 shadow-sm text-center space-y-5">
        <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-7 h-7" />
        </div>
        <h1 className="font-heading text-2xl font-bold text-navy">
          Something Went Wrong
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          We encountered an unexpected issue while loading this section. You can retry loading
          the page or return to our homepage.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-navy hover:bg-navy-light text-white text-sm font-semibold transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-gold" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-charcoal text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
