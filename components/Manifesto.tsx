import React from "react";

const Manifesto = () => {
  return (
    <div className="mx-auto max-w-7xl sm:text-center py-36 border-x border-zinc-200">
      <p className="text-center mt-2 text-4xl font-medium tracking-tight text-pretty text-black sm:text-5xl sm:text-balance">
        "One platform. Six core ML capabilities."
      </p>
      <a
        className="w-40 mx-auto mt-8 flex group items-center gap-x-2 rounded-full bg-black px-6 py-2.5 text-lg font-semibold text-white shadow-xs outline-none hover:-translate-y-0.5 transition hover:scale-[100.5%] hover:bg-black/90"
        href="/manifesto"
      >
        Learn more
        <svg
          width={20}
          height={21}
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={10} cy="10.9469" r={10} fill="#282828" />
          <mask
            id="mask0_1_567"
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={20}
            height={21}
            style={{ maskType: "alpha" }}
          >
            <circle cx={10} cy="10.9469" r={10} fill="#282828" />
          </mask>
          <g mask="url(#mask0_1_567)">
            <path
              d="M4.78544 8.12311L12.8231 8.12311M12.8231 8.12311L12.8231 16.1608M12.8231 8.12311L3.1779 17.7683"
              stroke="white"
              strokeWidth="1.3"
              strokeLinecap="square"
            />
          </g>
        </svg>
      </a>
    </div>
  );
};

export default Manifesto;
