import { useState } from "react";
import {
  RiSearchLine,
  RiMoonFill,
  RiAccountCircleFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import Carousel from "./components/Carousel.jsx";
import InfiniteCarousel from "./components/InfiniteCarousel.jsx";

function App() {
  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="flex px-10 py-10 justify-between items-center xl:w-[1200px] md:px-x-[700px] mx-auto w-full">
        <div>
          <nav className="text-xl text-gray-500 flex gap-x-14">
            <a href="#">HOME</a>
            <a href="#">COLLECTION</a>
            <a href="#">CARD LIST</a>
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
              <RiMoonFill />
            </a>
          </div>
          <div className="text-3xl">
            <a href="#">
              <RiAccountCircleFill />
            </a>
          </div>
        </div>
      </header>
      <main className="mt-24">
        {/* Carousel */}
        <Carousel />
        {/* Titles */}
        <div>
          <div className="mt-3">
            <h1 className="text-2xl text-gray-700 flex justify-center font-semibold">
              CARD NAME
            </h1>
          </div>
          <div className="mt-3">
            <h1 className="text-xl text-gray-400 flex justify-center font-thin">
              EXPANSIÓN PERTENECIENTE
            </h1>
          </div>
        </div>
        <hr className="mt-6 h-4" />
        {/* Expansions */}
        <InfiniteCarousel />
        {/* <div className="mt-3 ">
          <h1 className="text-3xl text-gray-600 flex justify-center font-thin">
            EXPANSIONS
          </h1>
          <div className="mt-6 flex items-center justify-center gap-x-36">
            <img src="expansions/expansion1.png" className="w-56 h-40 " />
            <img src="expansions/expansion2.png" className="w-56 h-40" />
            <img src="expansions/expansion3.png" className="w-56 h-40" />
          </div>
        </div> */}
      </main>
      {/* Footer */}
      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
                <img src="logo.png" class="h-8 me-3" alt="FlowBite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  LOGO
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline">
                      React JS
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                Gil Araúz &amp; Ezra Cabal™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
