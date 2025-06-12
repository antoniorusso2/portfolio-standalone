export default function Navbar({ sectionChanger }) {
  return (
    <nav className="fixed h-20 w-full bg-slate-900">
      <div className="container">
        <ul className="flex items-center py-6 px-4">
          <li className="mr-4">
            <button onClick={() => sectionChanger("home")} className="cursor-pointer">
              Home
            </button>
          </li>
          <li className="mr-4">
            <button onClick={() => sectionChanger("projects")} className="cursor-pointer">
              Projects
            </button>
          </li>
          <li className="mr-4">
            <button onClick={() => sectionChanger("contacts")} className="cursor-pointer">
              Contacts
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
