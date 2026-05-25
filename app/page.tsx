import { Header } from "@/components/layout/Header";
import { LegalFooter } from "@/components/layout/LegalFooter";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { Hero } from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ContactInfo />
      </main>
      <LegalFooter />
    </>
  );
}
