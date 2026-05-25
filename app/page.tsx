import { Header } from "@/components/layout/Header";
import { LegalFooter } from "@/components/layout/LegalFooter";
import { About } from "@/components/sections/About";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { LegalInfo } from "@/components/sections/LegalInfo";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <ContactBlock />
        <LegalInfo />
      </main>
      <LegalFooter />
    </>
  );
}
