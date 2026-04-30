import { Header } from "@/components/layout/Header";
import { LegalFooter } from "@/components/layout/LegalFooter";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Technology } from "@/components/sections/Technology";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <Technology />
        <ContactInfo />
      </main>
      <LegalFooter />
    </>
  );
}
