"use client";

import { useState } from "react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ResultGrid } from "@/components/sections/ResultGrid";
import { VISA_TYPES } from "@/lib/mockData";

export default function VisaPage() {
  const [showResults, setShowResults] = useState(false);

  return (
    <main className="flex-1 relative overflow-hidden">
      <ServiceHero
        title="Visa Services"
        subtitle="Expert visa assistance for destinations worldwide. Fast processing and end-to-end support."
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
                Destination Country
              </label>
              <select
                id="destination"
                required
                className="w-full bg-[#0F1F3D] text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] appearance-none cursor-pointer"
              >
                {VISA_TYPES.map((v) => (
                  <option key={v.id} value={v.country}>
                    {v.country}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="travelDate"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Travel Date
                </label>
                <input
                  id="travelDate"
                  type="date"
                  required
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="nationality"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Nationality
                </label>
                <input
                  id="nationality"
                  type="text"
                  required
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="travelers"
                className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
              >
                Number of Travelers
              </label>
                <input
                  id="travelers"
                  type="number"
                  defaultValue="1"
                  min="1"
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold"
                />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 bg-gold text-navy font-medium uppercase tracking-widest text-xs hover:bg-[#b3963e] transition-colors rounded-none"
            >
              Search Visas
            </button>
          </form>

          {showResults && (
            <div className="mt-12">
              <h2 className="headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Available Visas
              </h2>
              <ResultGrid items={VISA_TYPES} type="visa" />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
