import TechCarousel from "../Carousel/Technologies/TechCarousel.jsx";

export default function Home() {
  return (
    <div className="content">
      <div className="grid grid-cols-2 grid-rows-4">
        <div className="profile_description col-span-2">
          <p>Descrizione profilo</p>
        </div>

        <div className="profile_skills col-span-2">
          {/* tech stack */}
          <TechCarousel />
        </div>
      </div>
    </div>
  );
}
