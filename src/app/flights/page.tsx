"use client";

import { useState } from "react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ResultGrid } from "@/components/sections/ResultGrid";
import { FLIGHTS } from "@/lib/mockData";

export default function FlightsPage() {
  const [showResults, setShowResults] = useState(false);

  return (
    <main className="flex-1 relative overflow-hidden">
      <ServiceHero
        title="Flight Booking"
        subtitle="Best fares across global airlines with flexible dates and premium cabin options."
      />
      <section className="section">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowResults(true);
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="origin"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  From
                </label>
                <input
                  id="origin"
                  type="text"
                  defaultValue="New York"
                  required
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="destination"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  To
                </label>
                <input
                  id="destination"
                  type="text"
                  defaultValue="London"
                  required
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="departure"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Departure Date
                </label>
                <input
                  id="departure"
                  type="date"
                  required
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="return"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Return Date
                </label>
                <input
                  id="return"
                  type="date"
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="passengers"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Passengers
                </label>
                <input
                  id="passengers"
                  type="number"
                  defaultValue="1"
                  min="1"
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="cabin"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                    Cabin Class
                </label>
                <select
                  id="cabin"
                  className="w-full bg-[#0F1F3D] text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] appearance-none cursor-pointer"
                >
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
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

          {showResults && (
            <div className="mt-12">
              <h2 className="headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Available Flights
              </h2>
              <ResultGrid items={FLIGHTS} type="flights" />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
