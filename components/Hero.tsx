import React from "react";

const Hero = () => {
  return (
    <div className="relative py-32 sm:py-48 lg:py-60 select-none bg-[linear-gradient(135deg,#ff8c00,#ea580c)]">
      <div className="hidden lg:block">
        <div className="absolute inset-0 overflow-hidden contain-paint">
          <div className="absolute inset-[0.5rem] rounded-[12rem] bg-white/10 shadow-[0_0_40px_rgba(255,140,0,0.35)] blur-[4px]" />
          <div className="absolute inset-[3rem] rounded-[12rem] bg-white/10 shadow-[0_0_30px_rgba(234,88,12,0.3)] blur-[3px]" />
          <div className="absolute inset-[6rem] rounded-[12rem] bg-white/8 shadow-[0_0_20px_rgba(234,88,12,0.22)] blur-[2px]" />
          <div className="absolute inset-[10rem] rounded-[8rem] bg-white/10 shadow-[inset_0_0_30px_rgba(255,255,255,0.35)] blur-[1px]" />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 overflow-hidden blur-3xl"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-96 -translate-x-1/2 bg-gradient-to-tr from-orange-500 to-orange-700 opacity-30 sm:w-[36rem] md:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="relative text-center z-[1] mx-auto max-w-3xl lg:pb-16">
        <h1 className="text-4xl font-medium tracking-tight text-balance text-black sm:text-7xl">
          Snapml: From Dataset to Production.
        </h1>
        <p className="mx-auto max-w-lg mt-5 text-lg/6 lg:text-xl/6 font-medium text-balance text-black/70">
          Run your end-to-end ML workflow in one platform with dataset management,
          experiment tracking, model playground, one-click deployment, and
          real-time monitoring.
        </p>
        <div className="grid items-center justify-center gap-y-2.5 mt-10">
          <a
            className="flex group items-center rounded-full bg-black px-7.5 py-3 text-md font-semibold text-white shadow-xs outline-none hover:-translate-y-0.5 transition hover:scale-[100.5%] hover:bg-black/90"
            href="https://github.com/cluely/releases/releases/latest/download/cluely.dmg"
          >
            <span className="group-hover:text-orange-100 transition">
              Get Access
            </span>
          </a>
        </div>
      </div>
      <div className="hidden z-[11] lg:block absolute -bottom-[11.5rem] left-1/2 transform -translate-x-1/2 z-[1] max-w-2xl pointer-events-none">
        <img
          alt="Snapml-ui"
          className=""
          src="https://cluely.com/_next/static/media/frame.e956ee74.webp"
        />
      </div>
    </div>
  );
};

export default Hero;
