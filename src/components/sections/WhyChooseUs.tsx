"use client";

const FEATURES = [
  {
    icon: "🏆",
    title: "Best Price Guarantee",
    description:
      "We match any price. Travel more for less with our best price promise.",
  },
  {
    icon: "🕐",
    title: "24/7 Support",
    description:
      "Round-the-clock assistance wherever you are in the world.",
  },
  {
    icon: "🤝",
    title: "Trusted Partners",
    description:
      "We work only with verified, premium travel and accommodation partners.",
  },
  {
    icon: "📱",
    title: "Easy Booking",
    description:
      "Book in minutes with our streamlined, mobile-friendly platform.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="section bg-[#070E19]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-left mb-12">
          <h2 className="headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <div className="gold-rule mb-4"></div>
          <p className="text-white/60 leading-relaxed">
            Built for travelers who value depth, comfort, and flawless
            execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-xl border border-white/10 bg-white/5"
            >
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] text-2xl mb-5">
                {feature.icon}
              </div>
              <h3 className="headline text-lg font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
