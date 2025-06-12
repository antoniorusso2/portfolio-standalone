import { useSection } from "../../../contexts/sectionContext";

export default function Navbar() {
  const { handleSectionChange } = useSection();

  return (
    <nav className="fixed h-20 w-full bg-[var(--bg-color)] z-50 backdrop-blur-3xl opacity-50">
      <div className="container">
        <ul className="flex items-center py-6 px-4">
          <li className="mr-4">
            <button onClick={() => handleSectionChange("home")} className="cursor-pointer">
              Home
            </button>
          </li>
          <li className="mr-4">
            <button onClick={() => handleSectionChange("projects")} className="cursor-pointer">
              Projects
            </button>
          </li>
          <li className="mr-4">
            <button onClick={() => handleSectionChange("contacts")} className="cursor-pointer">
              Contacts
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
