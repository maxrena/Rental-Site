"use client";

import { useEffect, useRef } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

export default function Hero() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((r) =>
            r.classList.add("visible")
          );
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={revealRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="reveal mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 bg-white/10 backdrop-blur-sm rounded-full">
              Premium Rentals
            </span>
          </div>

          {/* Headline */}
          <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-none text-balance mb-6 text-white">
            Find a place
            <br />
            <span className="text-white/90">you&apos;ll love</span> to call home
          </h1>

          {/* Subtitle */}
          <p className="reveal reveal-delay-2 text-lg md:text-xl text-white/70 leading-relaxed max-w-[540px] mx-auto mb-10">
            Curated houses and apartments in the most desirable neighborhoods.
            Your next home is just a search away.
          </p>

          {/* Search bar */}
          <div className="reveal reveal-delay-3 max-w-[640px] mx-auto">
            <div className="relative flex items-center bg-white/95 backdrop-blur-sm rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.12)] ring-1 ring-white/20 p-1.5">
              <Search
                size={18}
                strokeWidth={1.5}
                className="absolute left-5 text-zinc-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search by city, neighborhood, or address..."
                className="flex-1 pl-11 pr-4 py-3.5 text-sm bg-transparent text-zinc-800 placeholder:text-zinc-400 outline-none"
              />
              <div className="hidden sm:flex items-center gap-2 mr-2 pr-2 border-r border-zinc-200">
                <button className="flex items-center gap-1.5 px-3 py-2 text-xs text-zinc-500 hover:text-zinc-800 transition-colors rounded-full hover:bg-zinc-100">
                  <SlidersHorizontal size={14} strokeWidth={1.5} />
                  Filters
                </button>
              </div>
              <button className="px-5 py-3 text-sm font-medium text-white bg-accent hover:bg-accent-light rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]">
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal reveal-delay-4 mt-14 flex items-center justify-center gap-10 md:gap-16">
            {[
              { value: "2,400+", label: "Properties" },
              { value: "850+", label: "Happy Tenants" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/60 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
