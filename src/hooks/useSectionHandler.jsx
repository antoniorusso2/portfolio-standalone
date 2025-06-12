import { useState } from "react";

export default function useSectionHandler({ section = "home" }) {
  const [currentSection, setCurrentSection] = useState(section);

  //imposta il valore dell'hash
  window.location.hash = `#${section}`;

  //trova il componente in pagina con questo hash con id

  const sectionRef = document.getElementById(section);

  //se il componente è in pagina lo scrolla
  if (sectionRef) {
    sectionRef.scrollIntoView({ behavior: "smooth" });
    setCurrentSection(section);
  }

  return [currentSection, setCurrentSection];
}
