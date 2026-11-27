"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";
import { ContactFormData } from "@/types";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { trackEnquirySubmit } from "@/lib/analytics";

interface ContactFormProps {
  defaultProduct?: string;
}

interface ExtendedContactFormData extends ContactFormData {
  websiteUrl?: string; // Hidden honeypot field for bot protection
}

export function ContactForm({ defaultProduct = "" }: ContactFormProps) {
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [referenceId, setReferenceId] = useState<string>("");
  const [serverError, setServerError] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ExtendedContactFormData>({
    defaultValues: {
      productInterested: defaultProduct,
      websiteUrl: "",
    },
  });

  const onSubmit = async (data: ExtendedContactFormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) {
        setServerError(result.error || "Unable to submit enquiry. Please try again.");
        return;
      }
      setReferenceId(result.referenceId || "");
      setSubmittedData(data);
      trackEnquirySubmit(data.productInterested);
    } catch {
      setServerError("Network error while submitting form. Please try again or use WhatsApp.");
    }
  };

  if (submittedData) {
    const whatsappFollowup = buildGeneralWhatsAppUrl(
      `Hello Greeny Hygiene Private Limited,\nReference: ${referenceId}\nName: ${submittedData.name}\nCompany: ${submittedData.companyName || "N/A"}\nProduct Interested In: ${submittedData.productInterested}\nQuantity Required: ${submittedData.quantityRequired || "N/A"}\nMessage: ${submittedData.message}`
    );

    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-navy">
          Enquiry Received — Thank You, {submittedData.name}!
        </h3>
        {referenceId && (
          <p className="text-xs font-mono font-semibold text-green-800">
            Enquiry Reference: {referenceId}
          </p>
        )}
        <p className="text-sm sm:text-base text-gray-700 max-w-lg mx-auto">
          Your business enquiry has been recorded by <strong>Greeny Hygiene Private Limited</strong>.
          Our team will review your requirements and get back to you shortly.
        </p>
        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappFollowup}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Also Send via WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmittedData(null);
              reset();
            }}
            className="px-5 py-3 rounded-lg border border-gray-300 bg-white text-charcoal text-sm font-semibold hover:bg-gray-50"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-5"
      noValidate
    >
      {/* Hidden Honeypot Anti-Spam Field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteUrl">Website</label>
        <input id="websiteUrl" type="text" tabIndex={-1} autoComplete="off" {...register("websiteUrl")} />
      </div>

      {serverError && (
        <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register("name", { required: "Please enter your name" })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-navy"
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Your company / organization name"
            {...register("companyName")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-navy"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-navy"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            {...register("phone", { required: "Please enter your phone number" })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-navy"
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Product Interested In <span className="text-red-600">*</span>
          </label>
          <select
            {...register("productInterested", {
              required: "Please select a product category",
            })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:border-navy"
          >
            <option value="">Select Product / Category</option>
            <option value="Safety Shoes (Industrial / Lancer / Highlite / PU Sole)">
              Safety Shoes (Industrial / Lancer / Highlite / PU Sole)
            </option>
            <option value="V-105 Lancer Safety Shoes">V-105 Lancer Safety Shoes</option>
            <option value="PU Sole Safety Shoes">PU Sole Safety Shoes</option>
            <option value="Highlite Safety Shoes">Highlite Safety Shoes</option>
            <option value="Clean Room Shoes">Clean Room Shoes</option>
            <option value="Formal Leather Shoes">Formal Leather Shoes</option>
            <option value="Casual Shoes & Loafers">Casual Shoes &amp; Loafers</option>
            <option value="Finished Leather Goods">Finished Leather Goods</option>
            <option value="Multiple / Custom B2B Requirement">
              Multiple / Custom B2B Requirement
            </option>
          </select>
          {errors.productInterested && (
            <p className="text-xs text-red-600 mt-1">
              {errors.productInterested.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Quantity Required
          </label>
          <input
            type="text"
            placeholder="e.g., 50 Pairs / 500 Pairs / Wholesale"
            {...register("quantityRequired")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-navy"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">
          Message / Specifications <span className="text-red-600">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="Share details about your required footwear models, size breakdown, or delivery location..."
          {...register("message", { required: "Please enter your enquiry message" })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-navy"
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-navy hover:bg-navy-light text-white font-semibold text-sm transition-colors shadow-md disabled:opacity-60"
      >
        <Send className="w-4 h-4 text-gold" />
        <span>{isSubmitting ? "Submitting..." : "Submit Business Enquiry"}</span>
      </button>
    </form>
  );
}
