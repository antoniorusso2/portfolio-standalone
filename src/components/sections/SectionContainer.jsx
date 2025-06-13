import { useSection } from "../../contexts/sectionContext";
import PrimaryBtn from "../ui/buttons/PrimaryBtn";

export default function SectionContainer({ children, id }) {
  const { sectionRefs } = useSection({});

  const sectionColors = {
    home: "bg-[var(--red-dark)] text-white",
    projects: "bg-[var(--secondary-color)] text-white",
    contacts: "bg-[var(--darker)] text-white",
  };

  return (
    <section ref={sectionRefs[id]} id={id} className={`h-screen pt-25 grow py-6 ${sectionColors[id]}`}>
      <div className="container px-4">
        {children}
        <PrimaryBtn text="Back to top" action={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
      </div>
    </section>
  );
}
