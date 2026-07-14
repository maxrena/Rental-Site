"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    text: "Havenly made finding my first NYC apartment genuinely enjoyable. The virtual tour was incredibly detailed, and the whole lease signing was done from my phone. Couldn't be happier.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Software Engineer",
    text: "After a nightmare with a traditional broker, Havenly was a breath of fresh air. Transparent pricing, no hidden fees, and they negotiated $200 off the monthly rent. Incredible.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Interior Designer",
    text: "I've moved six times in eight years, and Havenly is by far the best rental experience I've had. The property quality is unmatched, and the support team is genuinely helpful.",
    rating: 5,
  },
];

export default function Testimonials() {
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
      id="testimonials"
      ref={sectionRef}
      className="py-28 md:py-36 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="reveal">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent bg-accent/5 rounded-full">
              Testimonials
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-none text-foreground">
            Loved by
            <br />
            <span className="text-accent">our tenants</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <div className="relative p-1.5 bg-zinc-100/60 rounded-[1.5rem] ring-1 ring-zinc-200/50 h-full group hover:ring-accent/20 transition-all duration-500">
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-soft p-8 md:p-10 h-full flex flex-col">
                  {/* Quote icon */}
                  <Quote
                    size={28}
                    strokeWidth={1}
                    className="text-accent/15 mb-6"
                  />

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star
                        key={s}
                        size={14}
                        fill="currentColor"
                        strokeWidth={0}
                        className="text-amber-500"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-base text-muted leading-relaxed flex-1 mb-8">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="pt-6 border-t border-zinc-200/60">
                    <div className="font-medium text-sm text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
