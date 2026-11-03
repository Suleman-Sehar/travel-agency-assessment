"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TESTIMONIALS } from "@/lib/mockData";
import type { Testimonial } from "@/lib/types";

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(containerRef.current!.querySelector(".kilo-section-title"), {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    });

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);

    return () => {
      clearInterval(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const testimonial: Testimonial = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="section relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12" ref={containerRef}>
        <div className="text-left mb-12">
          <h2 className="kilo-section-title headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Journeys Remembered
          </h2>
          <div className="gold-rule mb-4"></div>
        </div>

        <div className="relative overflow-hidden h-[320px] md:h-[400px]">
          <TestimonialCard testimonial={testimonial} />
        </div>

        <div className="flex justify-between items-center mt-10">
          <button
            onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-gold" : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
            className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const starEls = Array.from({ length: 5 }, (_, i) => i < testimonial.rating);

  return (
    <div className="p-6 sm:p-10 rounded-[1px] border border-white/10 bg-white/5 text-left">
      <blockquote className="text-white/70 text-lg sm:text-xl md:text-2xl italic leading-relaxed mb-6">
        “{testimonial.text}”
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-sm">
          {testimonial.avatarInitials}
        </div>
        <div>
          <h4 className="headline text-sm font-bold text-white">
            {testimonial.name}
          </h4>
          <p className="text-xs text-white/50">
            {testimonial.role}, {testimonial.country}
          </p>
        </div>
        <div className="ml-auto flex gap-1">
          {starEls.map((_, i) => (
            <span key={i} className="text-gold text-xs">
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
