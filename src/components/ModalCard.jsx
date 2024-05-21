import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import CarouselCard from "./CarouselCard.jsx";

const ModalCard = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-4 rounded-xl">
          <div className="grid grid-cols-2">
            <div className="m-5">
              <ul>
                <li className="text-2xl">Name: Lucario Ex</li>
                <li className="text-2xl">Expansion: Sword & Shield</li>
                <li className="text-2xl">Type: Fighting</li>
                <li className="text-2xl">HP: 260</li>
                <li className="text-2xl">Attacks: </li>
                <li className="text-2xl">Weakness: Physic </li>
              </ul>
              <h1 className="bg-gray-300 p-3 rounded-xl text-2xl">
                Precio: 100.00$
              </h1>
            </div>
            <div className="m-5 flex justify-center items-center">
              <img src="pokemon-cards/pokemon-card1.png" alt="" />
            </div>
          </div>
          <hr className="my-10" />

          <CarouselCard />

          {/* <div className="relative flex justify-center items-center mt-5 gap-x-5">
            <img src="pokemon-cards/pokemon-card1.png" alt="" />
            <img src="pokemon-cards/pokemon-card2.png" alt="" />
            <img src="pokemon-cards/pokemon-card3.png" alt="" />
            <img src="pokemon-cards/pokemon-card4.png" alt="" />
            <img src="pokemon-cards/pokemon-card5.png" alt="" />
            <div className="text-4xl absolute left-10 bg-slate-200 py-6 rounded-xl">
              <RiArrowLeftSLine />
            </div>
            <div className="text-4xl absolute right-10 bg-slate-200 py-6 rounded-xl">
              <RiArrowRightSLine />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
