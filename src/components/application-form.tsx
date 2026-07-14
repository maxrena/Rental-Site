"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Banknote, Calendar, FileText, Zap, Building2, ChevronDown } from "lucide-react";

const terms = [
  {
    label: "Security Deposit",
    value: "$950 total",
    detail: "$650 refundable + $300 non-refundable",
    icon: Banknote,
  },
  {
    label: "Monthly Rent",
    value: "$750",
    detail: "Due on the 1st of each month",
    icon: FileText,
  },
  {
    label: "Payment Method",
    value: "Check only",
    detail: "Personal check, cashier's check, or money order",
    icon: Check,
  },
  {
    label: "Lease Term",
    value: "1 year",
    detail: "12-month fixed-term lease",
    icon: Calendar,
  },
  {
    label: "Utilities",
    value: "Tenant's responsibility",
    detail: "Electricity, water, gas, internet, and trash",
    icon: Zap,
  },
];

const propertyOptions = [
  "Modern Loft in Chelsea",
  "Sunlit Studio Apartment",
  "Penthouse with Terrace",
  "Garden Duplex Retreat",
  "Cozy Brownstone Flat",
  "Not sure — show me options",
];

export default function ApplicationForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentAddress: "",
    property: "",
    moveInDate: "",
    employer: "",
    annualIncome: "",
    notes: "",
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((r) => r.classList.add("visible"));
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <section
        id="application"
        ref={sectionRef}
        className="py-28 md:py-36 bg-soft relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Check size={32} strokeWidth={1.5} className="text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground mb-4">
            Application Submitted
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-[480px] mx-auto mb-8">
            Thank you, <strong>{formData.fullName}</strong>! We&apos;ve received your
            application for <strong>{formData.property || "a property"}</strong>.
            Our team will review it and get back to you within 24 hours.
          </p>

          {/* Submitted info summary */}
          <div className="max-w-[600px] mx-auto text-left bg-white rounded-2xl p-8 ring-1 ring-zinc-200/60">
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted mb-5">
              Application Summary
            </h3>
            <div className="space-y-3 text-sm">
              {[
                { label: "Full Name", value: formData.fullName },
                { label: "Email", value: formData.email },
                { label: "Phone", value: formData.phone },
                { label: "Property", value: formData.property },
                { label: "Move-in Date", value: formData.moveInDate },
                { label: "Employer", value: formData.employer },
              ].map(
                (item) =>
                  item.value && (
                    <div key={item.label} className="flex justify-between py-1.5 border-b border-zinc-100 last:border-0">
                      <span className="text-muted">{item.label}</span>
                      <span className="font-medium text-foreground text-right max-w-[60%]">
                        {item.value}
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                currentAddress: "",
                property: "",
                moveInDate: "",
                employer: "",
                annualIncome: "",
                notes: "",
              });
            }}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-accent border border-accent/30 hover:bg-accent hover:text-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            Submit Another Application
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="application"
      ref={sectionRef}
      className="py-28 md:py-36 bg-soft relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/3 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent-lighter/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <div className="reveal">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent bg-accent/5 rounded-full">
              Apply Now
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-none text-foreground">
            Submit your
            <br />
            <span className="text-accent">rental application</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-base text-muted leading-relaxed max-w-[480px]">
            Fill out the form below and our team will review your application
            within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Terms sidebar */}
          <div className="lg:col-span-2">
            <div className="reveal sticky top-28">
              <div className="relative p-1.5 bg-zinc-100/60 rounded-[1.5rem] ring-1 ring-zinc-200/50">
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-white p-6 md:p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted mb-6">
                    Rental Terms
                  </h3>
                  <div className="space-y-5">
                    {terms.map((term) => {
                      const Icon = term.icon;
                      return (
                        <div key={term.label} className="flex gap-4">
                          <div className="w-9 h-9 rounded-lg bg-accent/5 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon size={16} strokeWidth={1.5} className="text-accent" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">
                              {term.label}
                            </div>
                            <div className="text-sm text-accent font-semibold mt-0.5">
                              {term.value}
                            </div>
                            <div className="text-xs text-muted mt-0.5">
                              {term.detail}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 pt-6 border-t border-zinc-100">
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <Building2 size={14} strokeWidth={1.5} />
                      Property managed by Havenly Rentals LLC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="reveal reveal-delay-1">
              <div className="relative p-1.5 bg-zinc-100/60 rounded-[1.5rem] ring-1 ring-zinc-200/50">
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-white p-6 md:p-8 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 text-sm bg-soft border border-zinc-200 rounded-xl text-foreground placeholder:text-muted/50 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@email.com"
                        className="w-full px-4 py-3 text-sm bg-soft border border-zinc-200 rounded-xl text-foreground placeholder:text-muted/50 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all duration-300"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 text-sm bg-soft border border-zinc-200 rounded-xl text-foreground placeholder:text-muted/50 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all duration-300"
                      />
                    </div>

                    {/* Property Interested In */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Property Interested In <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="property"
                          required
                          value={formData.property}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-soft border border-zinc-200 rounded-xl text-foreground outline-none appearance-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all duration-300"
                        >
                          <option value="" disabled>
                            Select a property...
                          </option>
                          {propertyOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          strokeWidth={1.5}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                        />
                      </div>
                    </div>

                    {/* Current Address */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Current Address
                      </label>
                      <input
                        type="text"
                        name="currentAddress"
                        value={formData.currentAddress}
                        onChange={handleChange}
                        placeholder="123 Main St, City, State"
                        className="w-full px-4 py-3 text-sm bg-soft border border-zinc-200 rounded-xl text-foreground placeholder:text-muted/50 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all duration-300"
                      />
                    </div>

                    {/* Move-in Date */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Desired Move-in Date <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="date"
                        name="moveInDate"
                        required
                        value={formData.moveInDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm bg-soft border border-zinc-200 rounded-xl text-foreground outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all duration-300"
                      />
                    </div>

                    {/* Employer */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Employer
                      </label>
                      <input
                        type="text"
                        name="employer"
                        value={formData.employer}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full px-4 py-3 text-sm bg-soft border border-zinc-200 rounded-xl text-foreground placeholder:text-muted/50 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all duration-300"
                      />
                    </div>

                    {/* Annual Income */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Annual Income
                      </label>
                      <input
                        type="text"
                        name="annualIncome"
                        value={formData.annualIncome}
                        onChange={handleChange}
                        placeholder="$45,000"
                        className="w-full px-4 py-3 text-sm bg-soft border border-zinc-200 rounded-xl text-foreground placeholder:text-muted/50 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all duration-300"
                      />
                    </div>

                    {/* Additional Notes */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Additional Notes
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Any special requests or questions..."
                        className="w-full px-4 py-3 text-sm bg-soft border border-zinc-200 rounded-xl text-foreground placeholder:text-muted/50 outline-none resize-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Terms acknowledgment */}
                  <div className="mt-8 pt-6 border-t border-zinc-100">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="mt-0.5 w-4 h-4 rounded border-zinc-300 text-accent focus:ring-accent/20 accent-accent"
                      />
                      <span className="text-sm text-muted leading-relaxed">
                        I acknowledge the rental terms: <strong>$950 deposit</strong> ($650
                        refundable + $300 non-refundable), <strong>$750/month rent</strong>,
                        payment by <strong>check only</strong>, <strong>1-year lease</strong>,
                        and I am responsible for all <strong>utilities</strong>.
                        <span className="text-red-400"> *</span>
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full md:w-auto px-10 py-4 text-sm font-medium text-white bg-accent hover:bg-accent-light rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
                    >
                      Submit Application
                    </button>
                    <p className="mt-3 text-xs text-muted">
                      By submitting, you agree to a credit and background check.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
