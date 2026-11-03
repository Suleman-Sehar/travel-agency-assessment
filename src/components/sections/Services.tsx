"use client";

import Link from "next/link";

const SERVICES = [
  {
    icon: "✈️",
    title: "Flight Booking",
    description:
      "Search and book flights worldwide with the best prices guaranteed.",
    href: "/flights",
  },
  {
    icon: "🏨",
    title: "Hotel Booking",
    description:
      "Discover and reserve premium hotels at your dream destinations.",
    href: "/hotels",
  },
  {
    icon: "🚗",
    title: "Car Rental",
    description:
      "Rent comfortable vehicles for seamless travel at your destination.",
    href: "/cars",
  },
  {
    icon: "🛂",
    title: "Visa Services",
    description:
      "Expert visa assistance for a smooth and stress-free travel experience.",
    href: "/visa",
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-left mb-16">
          <h2 className="headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <div className="gold-rule mb-4"></div>
          <p className="text-white/60 leading-relaxed">
            Everything you need to plan, book, and enjoy your journey — in one
            place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="p-8 rounded-xl border border-[#C9A84C44] bg-[#0F1F3D] transition-transform hover:scale-105 will-change-transform"
              style={{
                backgroundColor: "#0F1F3D",
                padding: "32px",
                borderRadius: 12,
                border: "1px solid #C9A84C44",
              }}
            >
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] text-2xl mb-5">
                {svc.icon}
              </div>
              <h3 className="headline text-xl font-bold text-white mb-3">
                {svc.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {svc.description}
              </p>
              <span className="text-[#C9A84C] text-xs font-medium uppercase tracking-widest inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
