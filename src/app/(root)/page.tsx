import ContactSection from "@/components/sections/ContactSection";
import GlovoSection from "@/components/sections/GlovoSection";
import Hero from "@/components/sections/Hero";
import MenuSection from "@/components/sections/MenuSection";
import PubSection from "@/components/sections/PubSection";

export default function Home() {
  return (
    <>
        <Hero />
        <MenuSection />
        <PubSection />
        <ContactSection />
        <GlovoSection />
    </>
  );
}
