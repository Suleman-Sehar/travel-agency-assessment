"use client";

import { useState } from "react";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative z-10 max-w-md w-11/12 bg-[#0F1F3D] border-2 border-[#C9A84C]/50 rounded-xl p-6 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white/60 hover:text-white"
        >
          ✕
        </button>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 text-[#C9A84C] flex items-center justify-center text-xl">
              ✓
            </div>
            <h3 className="text-lg font-bold">Welcome back!</h3>
            <p className="text-[#C9A84C] text-sm">Redirecting...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Sign In</h3>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg focus:outline-none focus:border-[#C9A84C]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                className="px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg focus:outline-none focus:border-[#C9A84C]"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#C9A84C] text-[#0A1628] font-medium text-sm uppercase tracking-widest hover:bg-[#b3963e] transition-colors rounded-lg"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-white/20 text-white/80 font-medium text-sm hover:bg-white/5 transition-colors rounded-lg"
            >
              Continue as Guest
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
