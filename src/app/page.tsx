import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { SearchForm } from "@/components/sections/SearchForm";
import { PopularDestinations } from "@/components/sections/PopularDestinations";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Counters } from "@/components/sections/Counters";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="flex-1 relative overflow-hidden">
      <Hero />
      <Services />
      <SearchForm />
      <PopularDestinations />
      <WhyChooseUs />
      <Counters />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
