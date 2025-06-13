export default function Projects() {
  const project1 = {
    img: "",
    title: "Backoffice webapp ristorante",
    description: "Gestore contenuti per un ipotetica webapp dedicata ad un ristorante",
    technologies: "PHP, Laravel, Blade, Alpine.js, Livewire, Tailwind, MySQL, GitHub",
    implementation: "Implementazioni varie",
  };

  return (
    <div className="grid">
      <div className="title">
        <h1>Projects</h1>
      </div>

      <div className="project_grid grid grid-cols-2 grid-rows-5 gap-4 my-5">
        {/* img */}
        <div className="row-span-4  main-border ">
          <img src={project1.img} alt={project1.title} onError={(e) => (e.target.src = "/img/placeholder.png")} />
        </div>
        {/* titolo e descrizione */}
        <div className="row-span-2 main-border ">
          <div className="content p-4">
            <h2>{project1.title}</h2>
            <p>{project1.description}</p>
          </div>
        </div>
        {/* tecnologie e implementazioni */}
        <div className="row-span-2  main-border col-start-2 row-start-3 border ">{project1.technologies}</div>
        <div className="col-span-2  main-border row-start-5 border ">{project1.implementation}</div>
      </div>
    </div>
  );
}
