"use client";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "white";
}

export function Button({
  variant = "gold",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy disabled:opacity-50 disabled:pointer-events-none will-change-transform";
  const variants: Record<string, string> = {
    gold:
      "bg-gold text-navy hover:bg-[#b3963e] active:bg-gold",
    outline:
      "border border-gold text-gold hover:bg-gold hover:text-navy",
    white:
      "bg-white text-navy hover:bg-[#e2e8f0] active:bg-white",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
