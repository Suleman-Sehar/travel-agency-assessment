"use client";

import { useState } from "react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ResultGrid } from "@/components/sections/ResultGrid";
import { CAR_RENTALS } from "@/lib/mockData";

export default function CarsPage() {
  const [showResults, setShowResults] = useState(false);

  return (
    <main className="flex-1 relative overflow-hidden">
      <ServiceHero
        title="Car Rental"
        subtitle="Premium car rentals with flexible pickup/drop locations and doorstep delivery."
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
                htmlFor="pickup"
                className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
              >
                Pickup Location
              </label>
              <input
                id="pickup"
                type="text"
                defaultValue="Dubai Airport"
                required
                className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="pickupDate"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Pickup Date
                </label>
                <input
                  id="pickupDate"
                  type="date"
                  required
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="dropoffDate"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Dropoff Date
                </label>
                <input
                  id="dropoffDate"
                  type="date"
                  required
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="carType"
                className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
              >
                Car Type
              </label>
              <select
                id="carType"
                className="w-full bg-[#0F1F3D] text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] appearance-none cursor-pointer"
              >
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

          {showResults && (
            <div className="mt-12">
              <h2 className="headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Available Cars
              </h2>
              <ResultGrid items={CAR_RENTALS} type="cars" />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
