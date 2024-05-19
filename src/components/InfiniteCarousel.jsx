import { useEffect } from "react";

const InfiniteComponent = () => {
  useEffect(() => {
    const ul = document.querySelector("[x-ref=logos]");
    const clonedUl = ul.cloneNode(true);
    ul.insertAdjacentElement("afterend", clonedUl);
    clonedUl.setAttribute("aria-hidden", "true");
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
      <div className="text-center">
        <div
          x-data="{/* ... */}"
          x-init="initCarousel"
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li>
              <img src="expansions/expansion1.png" alt="Expansion 1" />
            </li>
            <li>
              <img src="expansions/expansion2.png" alt="Expansion 2" />
            </li>
            <li>
              <img src="expansions/expansion3.png" alt="Expansion 3" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfiniteComponent;
