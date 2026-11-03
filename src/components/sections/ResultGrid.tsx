"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MockItem } from "@/lib/types";

interface ResultCardProps {
  item: MockItem;
  type: "visa" | "flights" | "hotels" | "cars";
}

function ResultCard({ item, type }: ResultCardProps) {
  const isVisa = type === "visa";
  const isFlights = type === "flights";
  const isHotels = type === "hotels";
  const isCars = type === "cars";

  return (
    <Link
      href="#"
      className="group p-6 rounded-[1px] border border-white/10 bg-white/5 will-change-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(201,168,76,0.15)] transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-3">
        {isVisa && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-medium uppercase tracking-[0.3em]">
            {item.processingTime}
          </span>
        )}
        {isFlights && (
          <span className="text-gold text-xs font-bold">
            {item.stops} stop(s)
          </span>
        )}
        {isHotels && (
          <span className="text-gold text-xs font-bold">
            {item.stars}★
          </span>
        )}
        {isCars && (
          <span className="text-gold text-xs font-bold">
            {item.seats} seats
          </span>
        )}
      </div>
      <h4 className="headline text-lg font-bold text-white mb-2">
        {isVisa
          ? item.country
          : isFlights
          ? `${item.origin} → ${item.destination}`
          : isHotels
          ? item.name
          : `${item.type} — ${item.company}`}
      </h4>
      <p className="text-white/60 text-sm mb-4 leading-relaxed">
        {isVisa
          ? item.requirements!.slice(0, 2).join(", ") + "..."
          : isFlights
          ? `${item.airline} • ${item.date} • ${item.duration}`
          : isHotels
          ? `${item.location} • ${item.amenities!.slice(0, 3).join(", ")}`
          : `${item.company} • ${item.features!.slice(0, 3).join(", ")}`}
      </p>
      <div className="flex justify-between items-end">
        <span className="text-gold text-lg font-bold">
          {isVisa ? `$${item.fee}` : isCars ? `$${item.pricePerDay}/day` : isHotels ? `$${item.pricePerNight}/night` : `$${item.price}`}
        </span>
        <span className="text-gold text-xs font-medium uppercase tracking-widest">
          Select →
        </span>
      </div>
    </Link>
  );
}

interface ResultGridProps {
  items: MockItem[];
  type: "visa" | "flights" | "hotels" | "cars";
}

export function ResultGrid({ items, type }: ResultGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(containerRef.current!.querySelectorAll(".kilo-result-card"), {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
    >
      {items.map((item) => (
        <div key={item.id} className="kilo-result-card">
          <ResultCard item={item} type={type} />
        </div>
      ))}
    </div>
  );
}
