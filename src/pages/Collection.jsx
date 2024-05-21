import ExpansionCard from "../components/ExpansionCard.jsx";

const Collection = () => {
  return (
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
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
          </div>
        </div>
        <div className="my-16">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl whitespace-nowrap text-gray-500">
              Sword & Shield
            </h1>
            <div className="border-b-4 border-gray-400 w-full"></div>
          </div>

          <div className="grid grid-cols-4 my-12 place-items-center gap-8">
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
            <ExpansionCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Collection;
