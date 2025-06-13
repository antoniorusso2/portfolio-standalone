import { createContext, useContext, useRef, useState } from "react";

const SectionContext = createContext();

const validSections = ["home", "projects", "contacts"];

const getInitialSection = () => {
  const hash = window.location.hash?.replace("#", "");
  console.log("initial section", hash);
  return validSections.includes(hash) ? hash : "home";
};

export function SectionProvider({ children }) {
  const [currentSection, setCurrentSection] = useState(getInitialSection);

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    projects: projectsRef,
    contacts: contactsRef,
  };

  const handleSectionChange = (section) => {
    console.log("handleSectionChange", section);
    window.history.pushState(null, null, `#${section}`);

    if (sectionRefs[section]?.current) {
      sectionRefs[section].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setCurrentSection(section);
    }
  };

  return (
    <SectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        handleSectionChange,
        sectionRefs,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  return useContext(SectionContext);
}
