"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FLIGHTS,
  HOTELS,
  VISA_TYPES,
  CAR_RENTALS,
} from "@/lib/mockData";
import { MockItem } from "@/lib/types";

type Tab = "visa" | "flights" | "hotels" | "cars";

const TABS: Record<Tab, { label: string }> = {
  visa: { label: "Visa" },
  flights: { label: "Flights" },
  hotels: { label: "Hotels" },
  cars: { label: "Cars" },
};

export function SearchForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<Tab>("flights");
  const [results, setResults] = useState<MockItem[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(containerRef.current!.querySelectorAll(".kilo-section-title"), {
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

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleSearch = (e: React.FormEvent, tab: Tab) => {
    e.preventDefault();
    let data: MockItem[] = [];
    switch (tab) {
      case "visa":
        data = VISA_TYPES;
        break;
      case "flights":
        data = FLIGHTS;
        break;
      case "hotels":
        data = HOTELS;
        break;
      case "cars":
        data = CAR_RENTALS;
        break;
    }
    setResults(data);
    setShowResults(true);
  };

  return (
    <section id="search" className="section bg-[#070E19]">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={containerRef}>
        <div className="text-left mb-12">
          <h2 className="kilo-section-title headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Journey
          </h2>
          <div className="gold-rule mb-4"></div>
          <p className="text-white/60 leading-relaxed">
            Search and book visas, flights, hotels, and car rentals instantly.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-6">
          {Object.entries(TABS).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as Tab)}
              className={`px-6 py-3 text-sm font-medium uppercase tracking-widest transition-colors border-b-2 ${
                activeTab === key
                  ? "border-gold text-gold"
                  : "border-transparent text-white/40 hover:text-white/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeTab === "visa" && (
            <form
              onSubmit={(e) => handleSearch(e, "visa")}
              className="space-y-5"
            >
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                  Destination Country
                </label>
                <select
                  className="w-full bg-[#0F1F3D] text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] appearance-none cursor-pointer"
                >
                  {VISA_TYPES.map((v) => (
                    <option key={v.id} value={v.country}>
                      {v.country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                  Travel Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold rounded-none"
                />
              </div>
              <div className="grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    Travelers
                  </label>
                  <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-4 px-6 py-4 bg-gold text-navy font-medium uppercase tracking-widest text-xs hover:bg-[#b3963e] transition-colors rounded-none"
              >
                Search Visas
              </button>
            </form>
          )}

          {activeTab === "flights" && (
            <form
              onSubmit={(e) => handleSearch(e, "flights")}
              className="space-y-5"
            >
              <div className="grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    From
                  </label>
                  <input
                    type="text"
                    defaultValue="New York"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    To
                  </label>
                  <input
                    type="text"
                    defaultValue="London"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
              </div>
              <div className="grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    Departure
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    Return
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
              </div>
              <div className="grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    Passengers
                  </label>
                  <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    Class
                  </label>
                <select className="w-full bg-[#0F1F3D] text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] appearance-none cursor-pointer">
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-4 px-6 py-4 bg-gold text-navy font-medium uppercase tracking-widest text-xs hover:bg-[#b3963e] transition-colors rounded-none"
              >
                Search Flights
              </button>
            </form>
          )}

          {activeTab === "hotels" && (
            <form
              onSubmit={(e) => handleSearch(e, "hotels")}
              className="space-y-5"
            >
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                  Destination
                </label>
                <input
                  type="text"
                  defaultValue="Bali"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                />
              </div>
              <div className="grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    Check-in
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    Check-out
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
              </div>
              <div className="grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    Rooms
                  </label>
                  <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    Guests
                  </label>
                  <input
                    type="number"
                    defaultValue="2"
                    min="1"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-4 px-6 py-4 bg-gold text-navy font-medium uppercase tracking-widest text-xs hover:bg-[#b3963e] transition-colors rounded-none"
              >
                Search Hotels
              </button>
            </form>
          )}

          {activeTab === "cars" && (
            <form
              onSubmit={(e) => handleSearch(e, "cars")}
              className="space-y-5"
            >
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                  Pickup Location
                </label>
                <input
                  type="text"
                  defaultValue="Dubai Airport"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                />
              </div>
              <div className="grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                    Dropoff Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold rounded-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                  Car Type
                </label>
                <select className="w-full bg-[#0F1F3D] text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] appearance-none cursor-pointer">
                  <option>Economy</option>
                  <option>Compact</option>
                  <option>SUV</option>
                  <option>Luxury</option>
                  <option>Convertible</option>
                  <option>Minivan</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full mt-4 px-6 py-4 bg-gold text-navy font-medium uppercase tracking-widest text-xs hover:bg-[#b3963e] transition-colors rounded-none"
              >
                Search Cars
              </button>
            </form>
          )}
        </div>

        {showResults && (
          <div className="mt-12">
            <h3 className="headline text-2xl font-bold text-white mb-6">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Results
            </h3>
            <ResultGridItems items={results} />
          </div>
        )}
      </div>
    </section>
  );
}

function ResultGridItems({ items }: { items: MockItem[] }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
    >
      {items.map((item) => (
        <div key={item.id} className="p-6 rounded-[1px] border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-3">
            <span className="text-gold text-xs font-medium uppercase tracking-widest">
              {item.tag || item.stars}
            </span>
            {item.rating !== undefined && (
              <span className="text-gold text-xs font-bold">
                {item.rating}★
              </span>
            )}
          </div>
          <h4 className="headline text-lg font-bold text-white mb-2">
            {item.name || item.country || `${item.origin} → ${item.destination}`}
          </h4>
          <p className="text-white/60 text-sm mb-4">
            {`${item.airline || ""} • ${item.date || ""} • ${item.duration || ""} • ${item.stops} stop(s)` ||
              `${item.location} • ${item.amenities?.slice(0, 3).join(", ")}` ||
              `${item.company} • ${item.seats} seats`}
          </p>
          <div className="flex justify-between items-end">
            <span className="text-gold text-lg font-bold">
              From ${item.pricePerNight ? `$${item.pricePerNight}/night` : item.pricePerDay ? `$${item.pricePerDay}/day` : `$${item.price}`}
            </span>
            <span className="text-white text-xs font-medium uppercase tracking-widest">
              Select →
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
