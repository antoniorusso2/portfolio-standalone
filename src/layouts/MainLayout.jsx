import { forwardRef, useEffect, useRef, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar/Navbar";
import Contacts from "../components/sections/Contacts";
import Home from "../components/sections/Home";
import Projects from "../components/sections/Projects";
import SectionContainer from "../components/sections/SectionContainer";

export default function MainLAyout() {
  //   const [currentSection, setCurrentSection] = useSectionHandler({ section: "home" });

  const [currentSection, setCurrentSection] = useState("home");

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    projects: projectsRef,
    contacts: contactsRef,
  };

  const handleSectionChange = (section) => {
    window.history.pushState(null, null, `#${section}`);

    if (sectionRefs[section]) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header>
        <Navbar sectionChanger={handleSectionChange} />
      </header>

      <main>
        <SectionContainer node={sectionRefs.home} id="home" children={<Home />} />
        <SectionContainer node={sectionRefs.projects} id="projects" children={<Projects />} />
        <SectionContainer node={sectionRefs.contacts} id="contacts" children={<Contacts />} />
      </main>

      <Footer />
    </>
  );
}
