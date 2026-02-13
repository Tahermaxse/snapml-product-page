import React from "react";

const CTA = () => {
  return (
    <div className="relative mx-auto max-w-7xl py-60 mt-10 lg:mt-0 inset-ring-1 inset-ring-orange-200 select-none">
      <img
        alt="hero-background"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        className="relative z-[0] object-cover object-center fill"
        sizes="100vw"
        srcSet="https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta.f1f97aa0.png&w=640&q=75 640w, https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta.f1f97aa0.png&w=750&q=75 750w, https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta.f1f97aa0.png&w=828&q=75 828w, https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta.f1f97aa0.png&w=1080&q=75 1080w, https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta.f1f97aa0.png&w=1200&q=75 1200w, https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta.f1f97aa0.png&w=1920&q=75 1920w, https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta.f1f97aa0.png&w=2048&q=75 2048w, https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta.f1f97aa0.png&w=3840&q=75 3840w"
        src="https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta.f1f97aa0.png&w=3840&q=75"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: 0,
          color: "transparent",
        }}
      />
      <div className="relative ml-8 lg:text-center z-[1]">
        <span className="uppercase text-black/60 tracking-tight text-lg">
          Build with
        </span>
        <h1 className="mt-2 text-5xl font-medium tracking-tight text-balance text-zinc-900 sm:text-6xl">
          Snapml.
        </h1>
        <div className="grid items-center gap-y-2.5 mt-10 ml-2 lg:ml-0 justify-start lg:justify-center text-center">
          <a
            className="flex group items-center gap-x-2 rounded-full bg-black px-7.5 py-3 text-md font-semibold text-white shadow-xs outline-none hover:-translate-y-0.5 transition hover:scale-[100.5%] hover:bg-black/90"
            href="https://github.com/cluely/releases/releases/latest/download/cluely.dmg"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="mb-0.5 group-hover:text-orange-100 transition"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z" />
            </svg>
            <span className="group-hover:text-orange-100 transition">
              Start on Mac
            </span>
          </a>
          <a
            className="text-sm/6 font-semibold text-zinc-900/60 hover:text-orange-700 underline"
            href="https://github.com/cluely/releases/releases/latest/download/cluely-setup.exe"
          >
            Start on Windows
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
