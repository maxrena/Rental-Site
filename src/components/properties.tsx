"use client";

import { useEffect, useRef } from "react";
import { BedDouble, Bath, Expand, MapPin, Star } from "lucide-react";
import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Modern Loft in Chelsea",
    location: "Chelsea, New York",
    price: "$3,800",
    period: "/mo",
    beds: 2,
    baths: 2,
    sqft: 1200,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    id: 2,
    title: "Sunlit Studio Apartment",
    location: "Williamsburg, Brooklyn",
    price: "$2,400",
    period: "/mo",
    beds: 1,
    baths: 1,
    sqft: 750,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 3,
    title: "Penthouse with Terrace",
    location: "SoHo, New York",
    price: "$6,200",
    period: "/mo",
    beds: 3,
    baths: 2,
    sqft: 1800,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    id: 4,
    title: "Garden Duplex Retreat",
    location: "Park Slope, Brooklyn",
    price: "$4,100",
    period: "/mo",
    beds: 2,
    baths: 1.5,
    sqft: 1100,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=600&q=80",
  },
  {
    id: 5,
    title: "Cozy Brownstone Flat",
    location: "Upper West Side, NY",
    price: "$3,200",
    period: "/mo",
    beds: 2,
    baths: 1,
    sqft: 950,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
  },
];

export default function Properties() {
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
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="properties"
      ref={sectionRef}
      className="py-28 md:py-36 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="reveal">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent bg-accent/5 rounded-full">
                Featured Properties
              </span>
            </div>
            <h2 className="reveal reveal-delay-1 mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-none text-foreground">
              Discover your
              <br />
              <span className="text-accent">next home</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-base text-muted leading-relaxed max-w-[480px]">
              Each property is hand-selected for quality, location, and
              character — because your home deserves more than a quick scroll.
            </p>
          </div>
          <div className="reveal reveal-delay-3 shrink-0">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-accent border border-accent/30 hover:bg-accent hover:text-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
            >
              View All Properties
            </a>
          </div>
        </div>

        {/* Property grid — asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {properties.map((property, i) => {
            const isLarge = i === 0;
            const isWide = i === 2;
            const colSpan = isLarge
              ? "md:col-span-7 md:row-span-2"
              : isWide
              ? "md:col-span-5"
              : "md:col-span-5 md:row-span-1";
            return (
              <article
                key={property.id}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} group relative ${colSpan} col-span-1`}
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {/* Outer shell (double-bezel) */}
                <div className="relative p-1.5 bg-zinc-100/60 rounded-[1.5rem] ring-1 ring-zinc-200/50 h-full">
                  {/* Inner core */}
                  <div className="relative overflow-hidden rounded-[calc(1.5rem-0.375rem)] bg-white h-full">
                    {/* Image */}
                    <div
                      className={`relative w-full overflow-hidden ${
                        isLarge ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                      {/* Rating badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground shadow-sm">
                        <Star size={12} fill="currentColor" strokeWidth={0} className="text-amber-500" />
                        {property.rating}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
                          {property.title}
                        </h3>
                        <div className="text-right shrink-0">
                          <span className="text-lg md:text-xl font-semibold tracking-tight text-accent">
                            {property.price}
                          </span>
                          <span className="text-sm text-muted">{property.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-sm text-muted mb-4">
                        <MapPin size={14} strokeWidth={1.5} />
                        {property.location}
                      </div>

                      <div className="flex items-center gap-4 text-xs text-muted pt-4 border-t border-zinc-100">
                        <span className="flex items-center gap-1.5">
                          <BedDouble size={15} strokeWidth={1.5} /> {property.beds} Beds
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Bath size={15} strokeWidth={1.5} /> {property.baths}{" "}
                          Baths
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Expand size={15} strokeWidth={1.5} />{" "}
                          {property.sqft} sqft
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
