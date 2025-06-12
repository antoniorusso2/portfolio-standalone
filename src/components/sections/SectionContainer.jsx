import { useSection } from "../../contexts/sectionContext";

import PrimaryBtn from "../ui/buttons/PrimaryBtn";

export default function SectionContainer({ children, id }) {
  const { sectionRefs } = useSection({});

  return (
    <section ref={sectionRefs[id]} id={id} className="h-screen pt-25 grow py-6">
      <div className="container px-4">
        {children}
        <PrimaryBtn text="Back to top" action={() => window.scrollTo(0, 0)} />
      </div>
    </section>
  );
}
