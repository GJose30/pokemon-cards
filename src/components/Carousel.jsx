import React, { useEffect, useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const SliderComponent = () => {
  const itemsRef = useRef([]);
  const activeRef = useRef(2); // Cambiado a 2 para que la imagen central sea la inicial

  useEffect(() => {
    loadShow();
  }, []);

  function loadShow() {
    let stt = 0;
    itemsRef.current[activeRef.current].style.transform = `none`;
    itemsRef.current[activeRef.current].style.zIndex = 1;
    itemsRef.current[activeRef.current].style.filter = "none";
    itemsRef.current[activeRef.current].style.opacity = 1;

    for (let i = activeRef.current + 1; i < itemsRef.current.length; i++) {
      stt++;
      itemsRef.current[i].style.transform = `translateX(${150 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(-1deg)`;
      itemsRef.current[i].style.zIndex = -stt;
      itemsRef.current[i].style.filter = "blur(1px)";
      itemsRef.current[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    for (let i = activeRef.current - 1; i >= 0; i--) {
      stt++;
      itemsRef.current[i].style.transform = `translateX(${
        -150 * stt
      }px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
      itemsRef.current[i].style.zIndex = -stt;
      itemsRef.current[i].style.filter = "blur(1px)";
      itemsRef.current[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  }

  const handleNextClick = () => {
    activeRef.current =
      activeRef.current + 1 < itemsRef.current.length
        ? activeRef.current + 1
        : activeRef.current;
    loadShow();
  };

  const handlePrevClick = () => {
    activeRef.current =
      activeRef.current - 1 >= 0 ? activeRef.current - 1 : activeRef.current;
    loadShow();
  };

  return (
    <div className="flex relative items-center justify-center w-full h-96">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className="absolute transition"
          ref={(el) => (itemsRef.current[index] = el)}
        >
          <img
            src={`pokemon-cards/pokemon-card${index + 1}.png`}
            className="w-64 h-96 shadow-2xl transform-gpu hover:scale-110 transition"
          />
        </div>
      ))}
      <div className="text-4xl absolute left-10" onClick={handlePrevClick}>
        <RiArrowLeftSLine />
      </div>
      <div className="text-4xl absolute right-10" onClick={handleNextClick}>
        <RiArrowRightSLine />
      </div>
    </div>
  );
};

export default SliderComponent;
