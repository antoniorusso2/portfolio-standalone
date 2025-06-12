import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar/Navbar";
import Contacts from "../components/sections/Contacts";
import Home from "../components/sections/Home";
import Projects from "../components/sections/Projects";
import SectionContainer from "../components/sections/SectionContainer";
import { SectionProvider, useSection } from "../contexts/sectionContext";
import useScrollHandler from "../hooks/useScrollHandler";

function LayoutContent() {
  const { currentSection, setCurrentSection } = useSection();
  const { handleWheel } = useScrollHandler({ currentSection, setCurrentSection });

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="">
        <SectionContainer id="home" children={<Home />} />
        <SectionContainer id="projects" children={<Projects />} />
        <SectionContainer id="contacts" children={<Contacts />} />
      </main>

      <Footer />
    </>
  );
}

export default function MainLayout() {
  return (
    <SectionProvider>
      <LayoutContent />
    </SectionProvider>
  );
}
