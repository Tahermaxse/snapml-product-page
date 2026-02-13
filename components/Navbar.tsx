"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled ? "pt-4 pr-4 pl-4 " : ""
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ease-out ${
          isScrolled
            ? "max-w-4xl bg-[#FFF9F5]/95 backdrop-blur-md shadow-lg rounded-full border border-orange-200/70"
            : "max-w-6xl bg-transparent border-none"
        } ${isScrolled ? "px-6 py-3" : "px-6 py-4"}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <a
              className="flex items-center gap-x-1 transition border-b border-transparent hover:border-black"
              href="/"
            >
              <svg
                className="transition size-5 mt-0.5"
                viewBox="0 0 105 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_205_82)">
                  <path
                    d="M77.37 0C77.37 13.86 66.14 25.09 52.28 25.09C38.42 25.09 27.19 13.86 27.19 0H0C0 28.87 23.41 52.28 52.28 52.28C81.15 52.28 104.56 28.87 104.56 0H77.37Z"
                    fill="#1A1A1A"
                  />
                  <path
                    d="M77.37 103.741C77.37 89.8809 66.14 78.6509 52.28 78.6509C38.42 78.6509 27.19 89.8809 27.19 103.741H0C0 74.8709 23.41 51.4609 52.28 51.4609C81.15 51.4609 104.56 74.8709 104.56 103.741H77.37Z"
                    fill="#1A1A1A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_205_82">
                    <rect width="104.56" height="103.74" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="text-lg font-semibold transition">Snapml</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 hover:text-zinc-900 transition-colors"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle main menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                  className="size-6 outline-none"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                  className="size-6 outline-none"
                >
                  <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            <a
              className="text-sm font-semibold text-zinc-900 transition border-b border-transparent hover:border-black"
              href="/#features"
            >
              How it works
            </a>
            <a
              className="text-sm font-semibold text-zinc-900 transition border-b border-transparent hover:border-black"
              href="/#usage"
            >
              Use cases
            </a>
            <a
              className="text-sm font-semibold text-zinc-900 transition border-b border-transparent hover:border-black"
              href="/pricing"
            >
              Pricing
            </a>
            <a
              className="text-sm font-semibold text-zinc-900 transition border-b border-transparent hover:border-black"
              href="/help-center"
            >
              Help
            </a>
            <a
              className="text-sm font-semibold text-zinc-900 transition border-b border-transparent hover:border-black"
              href="/careers"
            >
              Careers
            </a>
          </div>

          {/* Desktop auth buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
            <a
              className="text-sm font-semibold text-zinc-900 transition border-b border-transparent hover:border-black"
              href="https://app.cluely.com/login"
            >
              Log in
            </a>
            <a
              className="flex px-4 py-2 gap-x-2 text-sm font-semibold rounded-full text-white bg-black hover:bg-black/90 transition-all hover:scale-105"
              href="https://app.cluely.com/signup"
            >
              Sign up
              <svg
                width={16}
                height={16}
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={10} cy="10.9469" r={10} fill="#282828" />
                <mask
                  id="mask0_1_567"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={20}
                  height={21}
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
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#FFF9F5] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-orange-200 sm:shadow-2xl">
            <div className="flex items-center justify-between">
              <a
                className="flex items-center gap-x-1 transition border-b border-transparent hover:border-black"
                href="/"
                onClick={closeMobileMenu}
              >
                <svg className="transition size-5 mt-0.5" viewBox="0 0 80 80">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                    d="M67.4307 11.5693C52.005 -3.85643 26.995 -3.85643 11.5693 11.5693C-3.85643 26.995 -3.85643 52.005 11.5693 67.4307C26.995 82.8564 52.005 82.8564 67.4307 67.4307C82.8564 52.005 82.8564 26.995 67.4307 11.5693ZM17.9332 17.9332C29.8442 6.02225 49.1558 6.02225 61.0668 17.9332C72.9777 29.8442 72.9777 49.1558 61.0668 61.0668C59.7316 62.4019 58.3035 63.5874 56.8032 64.6232L56.8241 64.6023C46.8657 54.6439 46.8657 38.4982 56.8241 28.5398L58.2383 27.1256L51.8744 20.7617L50.4602 22.1759C40.5018 32.1343 24.3561 32.1343 14.3977 22.1759L14.3768 22.1968C15.4126 20.6965 16.5981 19.2684 17.9332 17.9332ZM34.0282 38.6078C25.6372 38.9948 17.1318 36.3344 10.3131 30.6265C7.56889 39.6809 9.12599 49.76 14.9844 57.6517L34.0282 38.6078ZM21.3483 64.0156C29.24 69.874 39.3191 71.4311 48.3735 68.6869C42.6656 61.8682 40.0052 53.3628 40.3922 44.9718L21.3483 64.0156Z"
                  />
                </svg>
                <span className="text-lg font-semibold transition">Snapml</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-zinc-700"
                onClick={closeMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                  className="size-6 outline-none"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-orange-200/70">
                <div className="space-y-2 py-6">
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-zinc-900 hover:bg-orange-100/60"
                    href="/#features"
                    onClick={closeMobileMenu}
                  >
                    How it works
                  </a>
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-zinc-900 hover:bg-orange-100/60"
                    href="/#usage"
                    onClick={closeMobileMenu}
                  >
                    Use cases
                  </a>
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-zinc-900 hover:bg-orange-100/60"
                    href="/pricing"
                    onClick={closeMobileMenu}
                  >
                    Pricing
                  </a>
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-zinc-900 hover:bg-orange-100/60"
                    href="/help-center"
                    onClick={closeMobileMenu}
                  >
                    Help
                  </a>
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-zinc-900 hover:bg-orange-100/60"
                    href="/careers"
                    onClick={closeMobileMenu}
                  >
                    Careers
                  </a>
                </div>
                <div className="py-6">
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-zinc-900 hover:bg-orange-100/60"
                    href="https://app.cluely.com/login"
                    onClick={closeMobileMenu}
                  >
                    Log in
                  </a>
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-zinc-900 hover:bg-orange-100/60"
                    href="https://app.cluely.com/signup"
                    onClick={closeMobileMenu}
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
