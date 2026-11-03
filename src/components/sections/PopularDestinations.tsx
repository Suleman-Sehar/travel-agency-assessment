"use client";

import Image from "next/image";
import Link from "next/link";
import { DESTINATIONS } from "@/lib/mockData";

export function PopularDestinations() {
  return (
    <section id="destinations" className="section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-left mb-12">
          <h2 className="headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Popular Destinations
          </h2>
          <div className="gold-rule mb-4"></div>
          <p className="text-white/60 leading-relaxed">
            Handpicked escapes where landscape, culture, and quiet luxury
            converge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.name}
              href="#"
              className="block"
            >
              <div className="relative rounded-xl overflow-hidden h-72 cursor-pointer group">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={dest.name === "Dubai"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white font-bold text-xl">{dest.name}</h3>
                  <p className="text-[#C9A84C] text-sm">{dest.country}</p>
                  <p className="text-white/80 text-sm">From ${dest.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
