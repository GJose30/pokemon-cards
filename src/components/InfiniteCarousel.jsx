import React, { useRef, useEffect } from "react";

const Carousel = () => {
  const itemsRef = useRef([]);
  const activeRef = useRef(0);

  useEffect(() => {
    const tailwindConfig = {
      theme: {
        extend: {
          fontFamily: {
            inter: ["Inter", "sans-serif"],
          },
          animation: {
            "infinite-scroll": "infinite-scroll 25s linear infinite",
          },
          keyframes: {
            "infinite-scroll": {
              from: { transform: "translateX(0)" },
              to: { transform: "translateX(-100%)" },
            },
          },
        },
      },
    };

    // Aquí puedes utilizar tailwindConfig como necesites
  }, []);

  return (
    <main className="relative flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
        <div className="text-center">
          <div
            x-data="{}"
            x-init="$nextTick(() => {
              let ul = $refs.logos;
              ul.insertAdjacentHTML('afterend', ul.outerHTML);
              ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              ref={itemsRef}
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li>
                <img src="expansions/expansion1.png" alt="" />
              </li>
              <li>
                <img src="expansions/expansion2.png" alt="" />
              </li>
              <li>
                <img src="expansions/expansion3.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Carousel;
