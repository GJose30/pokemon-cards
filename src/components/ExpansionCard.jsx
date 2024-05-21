const ExpansionCard = () => {
  return (
    <div className="bg-gray-100 px-4 py-6 shadow-lg rounded-2xl">
      <img
        src="expansions/expansion1.png"
        alt=""
        className="scale-110 hover:scale-125 transition"
      />
      <h1 className="text-2xl text-gray-500 flex justify-center">
        Paldean fates
      </h1>
      <div className="flex justify-between mt-2">
        <h1 className="text-xl text-gray-500">MM/DD</h1>
        <h1 className="text-xl text-gray-500">45%</h1>
      </div>
    </div>
  );
};

export default ExpansionCard;
