"use client";

import Link from "next/link";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
}

export function ServiceHero({ title, subtitle }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476514625557-4ed4834e902e?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/60" />
      <div className="relative z-20 flex flex-col items-start max-w-4xl px-6 text-left">
        <Link
          href="#"
          className="inline-flex items-center gap-2 mb-6 text-gold text-xs font-medium uppercase tracking-widest hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>
        <h1 className="headline text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
