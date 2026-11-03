"use client";

import { useState } from "react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ResultGrid } from "@/components/sections/ResultGrid";
import { HOTELS } from "@/lib/mockData";

export default function HotelsPage() {
  const [showResults, setShowResults] = useState(false);

  return (
    <main className="flex-1 relative overflow-hidden">
      <ServiceHero
        title="Hotel Booking"
        subtitle="Handpicked luxury stays from boutique hotels to five-star resorts worldwide."
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
            <div>
              <label
                htmlFor="destination"
                className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
              >
                Destination
              </label>
              <input
                id="destination"
                type="text"
                defaultValue="Bali"
                required
                className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="checkin"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Check-in
                </label>
                <input
                  id="checkin"
                  type="date"
                  required
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="checkout"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Check-out
                </label>
                <input
                  id="checkout"
                  type="date"
                  required
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="rooms"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Rooms
                </label>
                <input
                  id="rooms"
                  type="number"
                  defaultValue="1"
                  min="1"
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Guests
                </label>
                <input
                  id="guests"
                  type="number"
                  defaultValue="2"
                  min="1"
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
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

          {showResults && (
            <div className="mt-12">
              <h2 className="headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Available Hotels
              </h2>
              <ResultGrid items={HOTELS} type="hotels" />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
