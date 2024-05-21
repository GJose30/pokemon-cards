import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const CarouselCard = () => {
  const images = [
    "pokemon-cards/pokemon-card1.png",
    "pokemon-cards/pokemon-card2.png",
    "pokemon-cards/pokemon-card3.png",
    "pokemon-cards/pokemon-card4.png",
    "pokemon-cards/pokemon-card5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex justify-center items-center mt-5 gap-x-5">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`pokemon-card-${index + 1}`}
          style={{
            display:
              index >= currentIndex && index < currentIndex + 3
                ? "block"
                : "none",
          }}
        />
      ))}
      <div
        className="text-4xl absolute left-10 bg-slate-200 py-6 rounded-xl"
        onClick={goToPreviousSlide}
      >
        <RiArrowLeftSLine />
      </div>
      <div
        className="text-4xl absolute right-10 bg-slate-200 py-6 rounded-xl"
        onClick={goToNextSlide}
      >
        <RiArrowRightSLine />
      </div>
    </div>
  );
};

export default CarouselCard;
