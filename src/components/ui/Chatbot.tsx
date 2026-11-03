"use client";

import { useState } from "react";

type Message = { text: string; sender: "bot" | "user" };

const BOT_REPLIES: Record<string, string> = {
  flight:
    "I can help with flights! Visit our Flights page or use the search form on the homepage to find the best deals.",
  hotel:
    "We have 500+ premium hotels worldwide. Use the Hotels tab in the search form to find availability.",
  visa:
    "Our visa experts handle 50+ countries. Check the Visa page for details and requirements.",
  car:
    "We offer car rentals at all major destinations. Visit the Cars page to browse options.",
};

const DEFAULT_REPLY =
  "For detailed assistance, please contact us at info@luxtravel.com or call +92 21 1234 5678.";

function getBotReply(message: string): string {
  const lower = message.toLowerCase();
  for (const [keyword, reply] of Object.entries(BOT_REPLIES)) {
    if (lower.includes(keyword)) return reply;
  }
  return DEFAULT_REPLY;
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! Welcome to LuxTravel 👋 How can I help you today?",
    },
  ]);

  const quickReplies = ["✈️ Flight Booking", "🏨 Hotel Booking", "📞 Contact Support"];

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setTimeout(() => {
      const reply = getBotReply(text);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[9999] w-12 h-12 rounded-full bg-[#C9A84C] text-[#0A1628] flex items-center justify-center text-2xl shadow-lg hover:bg-[#b3963e] transition-colors"
        aria-label="Open chat"
      >
        💬
      </button>

      {open && (
        <div
          className="fixed bottom-20 right-6 z-[9999] w-80 sm:w-96 bg-[#0F1F3D] rounded-2xl shadow-2xl border border-[#C9A84C]/50 flex flex-col overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0F1F3D]/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-sm font-bold text-white">LuxTravel Support</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] ${
                  msg.sender === "user"
                    ? "ml-auto text-right"
                    : "mr-auto text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-[#C9A84C] text-[#0A1628]"
                      : "bg-white/10 text-white border border-white/10"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div className="flex justify-end pt-2">
              {quickReplies.map((chip) => (
                <button
                  key={chip}
                  onClick={() => sendMessage(chip)}
                  className="mt-2 px-3 py-1.5 bg-white/5 border border-white/10 text-white text-xs rounded-lg hover:bg-white/10 transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg focus:outline-none focus:border-[#C9A84C] text-sm"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-[#C9A84C] text-[#0A1628] font-medium text-xs rounded-lg hover:bg-[#b3963e] transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
