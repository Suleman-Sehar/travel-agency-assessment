"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const items = containerRef.current?.querySelectorAll(".kilo-hero-item");
    if (!items) return;

    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    return () => {
      // no ScrollTrigger to kill here
    };
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
      }}
      className="flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="relative z-10"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(10,22,40,0.7), rgba(10,22,40,0.9))",
        }}
      />
      <div className="relative z-10 flex flex-col items-start max-w-5xl px-6 text-left">
        <div className="kilo-hero-item flex items-center gap-3 mb-8 hidden sm:flex">
          <span className="w-2 h-2 rounded-full bg-gold"></span>
          <span className="text-gold text-xs font-medium uppercase tracking-widest">
            500+ Destinations
          </span>
          <span className="w-1 h-1 bg-white/40 rounded-full"></span>
          <span className="text-white text-xs font-medium uppercase tracking-widest">
            4.9★ Rating
          </span>
        </div>
        <h1
          className="kilo-hero-item headings text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
        >
          Your Journey Begins Here
        </h1>
        <p className="kilo-hero-item text-sm sm:text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-10 text-balance">
          Discover the world&apos;s most breathtaking destinations with our
          premium travel services.
        </p>
        <div className="kilo-hero-item flex flex-col sm:flex-row gap-4">
          <Link href="#destinations">
            <Button className="px-9 py-3.5 text-base">Explore Destinations</Button>
          </Link>
          <Link href="#" className="kilo-hero-item">
            <Button variant="outline" className="px-9 py-3.5 text-base">
              Watch Video
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
