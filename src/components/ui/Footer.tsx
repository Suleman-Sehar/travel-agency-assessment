"use client";

import Link from "next/link";

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
];

const QUICK_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { label: "Visa", href: "/visa" },
  { label: "Flights", href: "/flights" },
  { label: "Hotels", href: "/hotels" },
  { label: "Cars", href: "/cars" },
];

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#0A1628", borderTop: "1px solid #C9A84C33" }}
      className="border-t border-white/10 section pt-16 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="flex items-center gap-2 font-serif text-2xl font-bold text-white tracking-tighter mb-4">
              LUX<span className="text-gold">TRAVEL</span>
            </span>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Bespoke luxury journeys curated for the discerning explorer.
            </p>
            <div className="flex gap-4 mt-6 text-white/40">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="hover:text-white transition-colors"
                >
                  ↗
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-white uppercase tracking-widest text-xs mb-4">
              Quick Links
            </p>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-white uppercase tracking-widest text-xs mb-4">
              Services
            </p>
            <ul className="space-y-3">
              {SERVICES.map((svc) => (
                <li key={svc.label}>
                  <Link
                    href={svc.href}
                    className="text-white/60 text-sm hover:text-gold transition-colors"
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-white uppercase tracking-widest text-xs mb-4">
              Newsletter
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold rounded-none"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-gold text-navy font-medium text-xs uppercase tracking-widest hover:bg-[#b3963e] transition-colors rounded-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/40 mt-8 pt-8 border-t border-white/10">
            &copy; 2026 LuxTravel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
