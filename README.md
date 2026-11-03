# LuxTravel — Premium Travel Agency Website

## 🔗 Live Links
- **🌐 Live Demo:** https://travel-agency-assessment.vercel.app
- **📁 GitHub Repo:** https://github.com/Suleman-Sehar/travel-agency-assessment

A complete Next.js 14+ App Router travel agency assessment project. Premium, modern travel brand built with Tailwind CSS and GSAP (ScrollTrigger) animations. All data is mock/hardcoded — no backend or real APIs.

> ![LuxTravel Screenshot](https://travel-agency-assessment.vercel.app/og-image.png)
> *Add a screenshot of the homepage here.*

## Tech Stack

- **Framework:** Next.js 16 (App Router), TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP with ScrollTrigger plugin
- **Fonts:** Inter (body), Playfair Display (headlines) via `next/font`
- **Data:** Mock/hardcoded (`src/lib/mockData.js`)
- **No backend or real APIs**

## Features

### Homepage Sections (in order)
1. **Navbar** — Sticky, backdrop-blur on scroll, mobile hamburger with slide-in animation, "LuxTravel" logo with gold accent dot, "Book Now" CTA
2. **Hero** — Full viewport height, travel background with dark gradient overlay, staggered GSAP entrance, floating stat badges, two CTAs
3. **Services** — 4 service cards (Visa, Flights, Hotels, Cars) in responsive grid, scroll-triggered stagger reveal
4. **SearchForm** — Tabbed interface (Visa / Flights / Hotels / Cars) with per-tab forms and filtered mock results grid
5. **PopularDestinations** — 8 destination cards with image, name, country, price, rating, tag badge, hover scale + Explore button
6. **WhyChooseUs** — 4 feature blocks: Best Price Guarantee, 24/7 Support, Trusted Partners, Easy Booking
7. **Counters** — 4 animated count-up counters triggered on scroll (15,000+ travelers, 120+ destinations, 8+ years, 98% satisfaction)
8. **Testimonials** — Auto-playing carousel (4s, pause on hover) with GSAP fade transitions, manual prev/next arrows, 6 testimonials with gold avatar initials
9. **ContactForm** — Two-column layout with company info and form; success toast on submit
10. **Footer** — 4-column layout: logo/tagline/social, quick links, services, newsletter signup

### Additional Features
- **Sign In Modal** — Gold-outline Sign In button in Navbar opens a modal for existing customers (email/password, mock auth, success toast)
- **Live Chat Widget** — Floating 💬 chatbot (bottom-right) with quick-reply chips for Flight, Hotel, Visa, Car queries and keyword-matched responses

### Service Pages
- `/visa` — Visa search form + results grid
- `/flights` — Flight search form + results grid
- `/hotels` — Hotel search form + results grid
- `/cars` — Car rental search form + results grid

Each reuses `Navbar` and `Footer` with a page-specific hero.

### GSAP Animations
1. Hero: staggered entrance (headline → subheading → buttons → badges)
2. Navbar: slide down from top on page load
3. Service cards: scroll-triggered stagger (bottom to top)
4. Destination cards: scroll-triggered stagger with scale
5. Counters: count-up on scroll into viewport
6. Section headings: fade + slide up on scroll
7. Testimonial slider: GSAP fade between slides
8. Footer: fade in on scroll
9. Card hover effects: subtle scale (1.03) and shadow transition
10. Mobile menu: slide in from right

All GSAP code is wrapped in `typeof window !== 'undefined'` checks and `gsap.registerPlugin(ScrollTrigger)` is called in `useEffect` for SSR safety.

## Folder Structure

```
src/
  app/
    layout.tsx            # Root layout with fonts + metadata
    globals.css           # Tailwind + theme (navy/gold/white)
    page.tsx              # Homepage (all 10 sections)
    visa/page.tsx         # Visa service page
    flights/page.tsx      # Flights service page
    hotels/page.tsx       # Hotels service page
    cars/page.tsx         # Cars service page
  components/
    ui/
      Navbar.tsx          # Sticky nav + mobile menu
      Footer.tsx          # 4-column footer
      Button.tsx          # Reusable button (gold/outline/white)
    sections/
      Hero.tsx
      Services.tsx
      SearchForm.tsx
      PopularDestinations.tsx
      WhyChooseUs.tsx
      Counters.tsx
      Testimonials.tsx
      ContactForm.tsx
      ServiceHero.tsx     # Shared service page hero
      ResultGrid.tsx      # Shared results grid
  lib/
    mockData.js           # All mock data (destinations, flights, hotels, cars, visas, testimonials, stats)
```

## Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/Suleman-Sehar/travel-agency-assessment.git
cd travel-agency-assessment

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Open http://localhost:3000
```

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Deployment

**Live on Vercel:** https://travel-agency-assessment.vercel.app

### Deploy your own:
1. Fork this repo
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select the forked repo
4. Click Deploy (zero config — Next.js auto-detected)
5. Live in ~2 minutes on a `.vercel.app` domain

## Assessment Context

Built as a Next.js assessment project demonstrating App Router, Tailwind CSS, GSAP ScrollTrigger animations, responsive design, and mock-data-driven UI with no backend.
