import { useSection } from "../../../contexts/sectionContext";
import "./navbar.css";

export default function Navbar() {
  const { handleSectionChange } = useSection();

  return (
    <nav className="fixed h-20 w-full z-50 backdrop-opacity-80 backdrop-blur-lg">
      <div className="container">
        <ul className="flex items-center py-6 px-4">
          <li className="mr-4">
            <button onClick={() => handleSectionChange("home")} className="cursor-pointer">
              Home
            </button>
          </li>
          <li className="mr-4">
            <button onClick={() => handleSectionChange("projects")} className="cursor-pointer">
              Progetti
            </button>
          </li>
          <li className="mr-4">
            <button onClick={() => handleSectionChange("contacts")} className="cursor-pointer">
              Contatti
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
