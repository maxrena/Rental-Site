"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 md:py-36 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-accent pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 bg-white/10 rounded-full">
            <Sparkles size={12} strokeWidth={2.5} /> Get Started
          </span>
        </div>

        <h2 className="reveal reveal-delay-1 mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-none text-white">
          Ready to find your
          <br />
          perfect home?
        </h2>

        <p className="reveal reveal-delay-2 mt-5 text-lg text-white/70 leading-relaxed max-w-[480px] mx-auto">
          Join thousands of happy tenants. Browse our curated properties and
          schedule a viewing today.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-accent bg-white hover:bg-white/90 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] shadow-lg"
          >
            Browse Properties
            <span className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <ArrowRight size={14} strokeWidth={2.5} className="text-accent" />
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white/90 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
          >
            Schedule a Tour
          </a>
        </div>
      </div>
    </section>
  );
}
