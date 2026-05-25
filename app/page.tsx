import { Header } from "@/components/layout/Header";
import { LegalFooter } from "@/components/layout/LegalFooter";
import { About } from "@/components/sections/About";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { HeroBand } from "@/components/sections/HeroBand";
import { LegalInfo } from "@/components/sections/LegalInfo";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroBand />
        <About />
        <ContactBlock />
        <LegalInfo />
      </main>
      <LegalFooter />
    </>
  );
}
