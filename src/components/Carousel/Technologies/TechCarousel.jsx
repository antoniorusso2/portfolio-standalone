import "./techcarousel.css";
import icons from "../../../config/icons";
// import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
  const technologies = icons;

  return (
    <div className="carousel_wrapper overflow-hidden w-full bg-[var(--opacity-bg)] rounded-lg border-double border-8 border-[var(--primary-color)]  backdrop-blur-3xl">
      <div className="carousel">
        {/* Duplicate for seamless looping */}
        {[...technologies, ...technologies].map((technology, idx) => (
          <div key={idx} className="carousel-item mx-5">
            <img src={technology} alt="tech-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
