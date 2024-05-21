import Carousel from "../components/Carousel.jsx";
import InfiniteCarousel from "../components/InfiniteCarousel.jsx";

const Home = () => {
  return (
    <div>
      <main className="mt-24">
        {/* Carousel */}
        <Carousel />
        <div className="mt-6">
          <h1 className="text-2xl text-gray-700 flex justify-center font-semibold">
            CARD NAME
          </h1>
        </div>
        <div className="mt-3">
          <h1 className="text-xl text-gray-400 flex justify-center font-thin">
            EXPANSIÓN PERTENECIENTE
          </h1>
        </div>
        <div className="border-b-4 border-gray-400 mt-6 mx-80"></div>
        {/* Expansions */}
        <div className="mt-12">
          <h1 className="text-3xl text-gray-600 flex justify-center font-thin">
            EXPANSIONS
          </h1>
        </div>
        <InfiniteCarousel />
        <div className="bg-[#F15340] w-full">
          <div className="relative my-24 flex justify-between  mx-auto xl:w-[1200px] md:px-x-[700px] h-96 ">
            <div className="flex items-center">
              <h1 className="text-white text-3xl flex justify-center">
                COMIENZA TU COLECCIÓN DE CARTAS
              </h1>
            </div>
            <div className="absolute right-72 shadow-2xl -rotate-12 transform-gpu hover:scale-110 transition">
              <img src="pokemon-cards/pokemon-card2.png" alt="" />
            </div>
            <div className="absolute right-36 bottom-16 shadow-2xl transform-gpu hover:scale-110 transition">
              <img src="pokemon-cards/pokemon-card3.png" alt="" />
            </div>
            <div className="absolute right-0 shadow-2xl rotate-12 transform-gpu hover:scale-110 transition">
              <img src="pokemon-cards/pokemon-card1.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
