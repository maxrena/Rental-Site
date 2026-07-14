"use client";

import { useEffect, useRef } from "react";
import {
  ShieldCheck,
  Handshake,
  Coins,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description:
      "Every property is personally verified. What you see online is exactly what you get — no surprises, no bait-and-switch.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Handshake,
    title: "Hassle-Free Process",
    description:
      "From virtual tours to digital lease signing, we make renting seamless. Move in within days, not weeks.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Coins,
    title: "Fair Pricing",
    description:
      "Transparent pricing with no hidden fees. We negotiate on your behalf to get you the best rate in the market.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our team is available around the clock. Whether it's a maintenance issue or a lease question, we're here to help.",
    color: "text-accent",
    bgColor: "bg-accent/5",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((r) => r.classList.add("visible"));
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-28 md:py-36 bg-soft relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.015] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="reveal">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent bg-accent/5 rounded-full">
              Why Havenly
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-none text-foreground">
            Designed to make
            <br />
            <span className="text-accent">renting simple</span>
          </h2>
        </div>

        {/* Benefit cards — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
              >
                <div className="relative p-1.5 bg-zinc-100/60 rounded-[1.5rem] ring-1 ring-zinc-200/50 h-full group hover:ring-accent/20 transition-all duration-500">
                  <div className="rounded-[calc(1.5rem-0.375rem)] bg-white p-8 md:p-10 h-full">
                    <div
                      className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-6`}
                    >
                      <Icon size={24} strokeWidth={1.5} className={benefit.color} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-muted leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
