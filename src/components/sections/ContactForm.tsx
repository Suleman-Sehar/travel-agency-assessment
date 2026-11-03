"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };

  if (submitted) {
    return (
      <section id="contact" className="section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-[#C9A84C]/20 text-[#C9A84C] flex items-center justify-center text-2xl">
                ✓
              </span>
              <h2 className="headline text-3xl font-bold text-white">
                Message Sent
              </h2>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md mx-auto">
              Thank you for reaching out. Our travel designers will respond
              within one business day to begin shaping your itinerary.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section bg-[#070E19]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="text-left space-y-6">
            <h2 className="headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <div className="gold-rule mb-4"></div>
            <p className="text-white/60 leading-relaxed mb-6">
              Share what you have in mind and we will shape a proposal around
              you.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center text-sm">
                  📍
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Address</p>
                  <p className="text-white/60 text-sm">
                    14 Travel Plaza, Karachi, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center text-sm">
                  📞
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="text-white/60 text-sm">+92 21 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center text-sm">
                  ✉️
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-white/60 text-sm">
                    info@luxtravel.com
                  </p>
                </div>
              </div>
              <div className="flex gap-4 text-white/40">
                <a href="#" className="hover:text-white transition-colors">
                  ↗
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  ↗
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  ↗
                </a>
              </div>
            </div>
          </div>

          <div className="kilo-contact-col" style={{ backgroundColor: "#0F1F3D" }}>
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-xl border border-white/10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#C9A84C] transition-colors"
                >
                  <option>General Inquiry</option>
                  <option>Visa</option>
                  <option>Flights</option>
                  <option>Hotels</option>
                  <option>Cars</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-widest text-white/50 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-5 py-3 rounded-none bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 font-medium uppercase tracking-widest text-xs rounded-none"
                style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {toast && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-none border border-[#C9A84C] bg-[#C9A84C] text-[#0A1628] text-sm font-medium shadow-2xl">
            ✓ Message sent successfully
          </div>
        )}
      </div>
    </section>
  );
}
