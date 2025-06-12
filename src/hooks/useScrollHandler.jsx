import { useRef, useCallback } from "react";

export default function useScrollHandler({ currentSection, setCurrentSection }) {
  const scrollCount = useRef(0);
  const isScrolling = useRef(false);
  const sections = ["home", "projects", "contacts"];

  const changeSection = useCallback(
    (direction = 1) => {
      const currentIndex = sections.indexOf(currentSection);
      const nextIndex = (currentIndex + direction + sections.length) % sections.length;
      const nextSection = sections[nextIndex];

      setCurrentSection(nextSection);
      window.history.pushState(null, null, `#${nextSection}`);

      const sectionElement = document.getElementById(nextSection);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [currentSection, setCurrentSection]
  );

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      if (isScrolling.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      scrollCount.current += 1;

      if (scrollCount.current >= 2) {
        isScrolling.current = true;
        changeSection(direction);
        scrollCount.current = 0;

        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    },
    [changeSection]
  );

  return { handleWheel };
}
