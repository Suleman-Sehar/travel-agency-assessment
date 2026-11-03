"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SignInModal } from "@/components/ui/SignInModal";

const LINKS = [
  { name: "Home", href: "/" },
  { name: "Visa", href: "/visa" },
  { name: "Flights", href: "/flights" },
  { name: "Hotels", href: "/hotels" },
  { name: "Cars", href: "/cars" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[9999] bg-[#0A1628]/90 backdrop-blur-md border-b border-white/10"
        style={{ position: "fixed", top: 0, left: 0, width: "100%", backgroundColor: "#0A1628", zIndex: 9999 }}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 cursor-pointer"
            >
              <span style={{ fontFamily: 'var(--font-playfair)', color: '#C9A84C', fontSize: '1.5rem', fontWeight: 700 }}>
                LuxTravel
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-widest">
              {LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-[#C9A84C] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="px-5 py-2 text-xs">Book Now</Button>
              <button
                onClick={() => setSignInOpen(true)}
                className="border border-gold text-gold text-xs px-3 py-1.5 uppercase tracking-widest hover:bg-gold hover:text-navy transition-colors"
              >
                Sign In
              </button>
            </div>

            <button
              className="lg:hidden text-white"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>

          {open && (
            <div className="lg:hidden bg-[#0A1628] border-t border-white/10 py-4">
              <div className="flex flex-col gap-4 px-4">
                {LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-[#C9A84C] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <Button className="w-full px-4 py-2 text-xs" onClick={() => setOpen(false)}>
                    Book Now
                  </Button>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setSignInOpen(true);
                    }}
                    className="w-full border border-gold text-gold text-xs px-3 py-2 uppercase tracking-widest hover:bg-gold hover:text-navy transition-colors"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <SignInModal isOpen={signInOpen} onClose={() => setSignInOpen(false)} />
    </>
  );
}
