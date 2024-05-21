import PokemonCard from "../components/PokemonCard.jsx";
import ModalCard from "../components/ModalCard.jsx";
import { Fragment, useState } from "react";

function CardList() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div>
        <main className="mx-80 my-12">
          <div className="my-16">
            <div className="flex items-center gap-8">
              <h1 className="text-3xl whitespace-nowrap text-gray-500">
                Scarlet & Violet
              </h1>
              <div className="border-b-4 border-gray-400 w-full"></div>
            </div>

            <div className="grid grid-cols-4 my-12 place-items-center gap-8">
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
            </div>
          </div>
          <div className="my-16">
            <div className="flex items-center gap-8">
              <h1 className="text-3xl whitespace-nowrap text-gray-500">
                Scarlet & Violet
              </h1>
              <div className="border-b-4 border-gray-400 w-full"></div>
            </div>

            <div className="grid grid-cols-4 my-12 place-items-center gap-8">
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
              <PokemonCard onOpen={() => setShowModal(true)} />
            </div>
          </div>
        </main>
      </div>
      <ModalCard isVisible={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
}

export default CardList;
