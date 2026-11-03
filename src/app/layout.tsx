import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Chatbot } from "@/components/ui/Chatbot";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "LuxTravel | Premium Travel Agency",
  description:
    "Discover the world's most breathtaking destinations with our premium travel services.",
  metadataBase: new URL("https://lustravel.example"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body style={{ backgroundColor: "#0A1628", color: "#FFFFFF" }} className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
