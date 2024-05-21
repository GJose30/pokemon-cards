import { Link } from "react-router-dom";

import { RiSearchLine, RiMoonFill, RiAccountCircleFill } from "react-icons/ri";

const links = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Collection",
    href: "/collection",
  },
  {
    name: "CardList",
    href: "/cardlist",
  },
];

const Header = () => {
  return (
    <header className="flex px-10 py-10 justify-between items-center xl:w-[1200px] md:px-x-[700px] mx-auto w-full">
      <div>
        <nav className="text-xl text-gray-500 flex gap-x-14">
          {links.map((x) => (
            <Link
              to={x.href}
              className="hover:bg-red-400 hover:text-white transition px-3 py-3 rounded-2xl"
            >
              {x.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex gap-x-14">
        <form className="relative">
          <div className="relative">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              className="w-full bg-gray-100 py-2 pl-8 pr-4 rounded-2xl text-gray-500 outline-none"
            />
          </div>
        </form>
        <div className="text-3xl">
          <a href="#">
            <RiMoonFill className="hover:text-gray-500"> </RiMoonFill>
          </a>
        </div>
        <div className="text-3xl">
          <a href="#">
            <RiAccountCircleFill className="hover:text-gray-500"></RiAccountCircleFill>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
