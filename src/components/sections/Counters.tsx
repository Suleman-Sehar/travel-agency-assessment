"use client";

import { useEffect, useState } from "react";

export function Counters() {
  const [counts, setCounts] = useState({
    travelers: 0,
    destinations: 0,
    years: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const targets = { travelers: 15000, destinations: 120, years: 8, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        travelers: Math.floor(targets.travelers * progress),
        destinations: Math.floor(targets.destinations * progress),
        years: Math.floor(targets.years * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="counters" className="section bg-[#C9A84C] text-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-serif font-bold mb-1">
              {counts.travelers.toLocaleString()}+
            </div>
            <div className="text-sm font-medium uppercase tracking-widest text-[#0A1628]/80">
              Happy Travelers
            </div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-serif font-bold mb-1">
              {counts.destinations}+
            </div>
            <div className="text-sm font-medium uppercase tracking-widest text-[#0A1628]/80">
              Destinations
            </div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-serif font-bold mb-1">
              {counts.years}+
            </div>
            <div className="text-sm font-medium uppercase tracking-widest text-[#0A1628]/80">
              Years Experience
            </div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-serif font-bold mb-1">
              {counts.satisfaction}%
            </div>
            <div className="text-sm font-medium uppercase tracking-widest text-[#0A1628]/80">
              Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
