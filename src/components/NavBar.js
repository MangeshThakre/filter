import React from "react";

function NavBar() {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  shadow-lg  fixed top-0 w-full z-10">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex gap-3 items-center">
          <svg
            className="w-8 h-8"
            fill="#6f63f0"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span class="self-center text-xl font-bold whitespace-nowrap   text-slate-700">
            Estatery
          </span>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto "
          id="mobile-menu-2"
        >
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li>
              <button className="block py-2 pl-3 pr-4 text-[#6f63f0]  font-semibold rounded   h-8 w-12  hover:bg-[#6f63f0ae] bg-transparent md:hover:text-white md:p-0    hover:text-white  ">
                Rent
              </button>
            </li>
            <li>
              <button className="block py-2 pl-3 pr-4 text-[#6f63f0]  font-semibold rounded   h-8 w-12  hover:bg-[#6f63f0ae] bg-transparent md:hover:text-white md:p-0    hover:text-white  ">
                Buy
              </button>
            </li>
            <li>
              <button className="block py-2 pl-3 pr-4 text-[#6f63f0]  font-semibold rounded   h-8 w-12  hover:bg-[#6f63f0ae] bg-transparent md:hover:text-white md:p-0    hover:text-white  ">
                Sell
              </button>
            </li>
            <li>
              <button className="block py-2 pl-3 pr-4 text-[#6f63f0]  font-semibold rounded   h-8 w-32  hover:bg-[#6f63f0ae] bg-transparent md:hover:text-white md:p-0    hover:text-white  ">
                Manage Property
              </button>
            </li>
            <li>
              <button className="block py-2 pl-3 pr-4 text-[#6f63f0]  font-semibold rounded   h-8 w-24  hover:bg-[#6f63f0ae] bg-transparent md:hover:text-white md:p-0    hover:text-white  ">
                Resources
              </button>
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
          <button className=" h-10  w-20  hover:border-white  hover:bg-[#6f63f0] hover:text-white border-[#6f63f0] border-2 rounded-lg text-base text-[#6f63f0]  ">
            Login
          </button>
          <button className="h-10  w-20   hover:bg-white  bg-[#6f63f0] hover:border-[#6f63f0] border-2 rounded-lg text-base  text-white  hover:text-[#6f63f0]   ">
            Signin
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
