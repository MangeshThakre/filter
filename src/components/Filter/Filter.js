import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown.js";

function Filter({ dataArr }) {
  const [dropdown, setDropdown] = useState(null);
  const [city, setCity] = useState("City");
  const [state, setState] = useState("State");
  const [price, setPrice] = useState({ from: "From", to: "To" });
  const [propertyType, setPropertyType] = useState("All");
  const states = ["State", ...new Set(dataArr.map((data) => data.state))];
  const cities = ["City", ...new Set(dataArr.map((data) => data.city))];
  const propertyTypes = [
    "all",
    ...new Set(dataArr.map((data) => data.propertyType)),
  ];

  return (
    <div className="flex md:w-[70rem]   bg-white  shadow-md items-center justify-between px-4  h-20 rounded-md ">
      {/* location */}
      <div className="w-48">
        <p className="text-gray-500 font-semibold mb-2  text-sm">Location</p>
        <div className="flex gap-4">
          {/* state */}
          <Dropdown data={states} />
          {/* state  end */}
          {/* city */}
          <Dropdown data={cities} />
          {/* city  end*/}
        </div>
      </div>
      {/* locaion end */}
      <div>
        <p className="text-gray-500 font-semibold mb-2 text-sm">When</p>
      </div>
      {/* price */}
      <div>
        <p className="text-gray-500 font-semibold mb-2 text-sm">
          Price
          <div className="relative">
            <p
              className="   text-black text-base  font-bold cursor-pointer"
              onClick={() => setDropdown(dropdown === "PRICE" ? null : "PRICE")}
            >
              {price.from} - {price.to}
            </p>
            {dropdown === "PRICE" ? (
              <div
                id="dropdown"
                className="  absolute mt-2  left-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow "
              >
                <ul
                  className="py-1 text-sm text-gray-700 "
                  aria-labelledby="dropdownDefault"
                >
                  <li className="flex">
                    <input
                      type="number"
                      name="from"
                      id="from"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-blue-500 focus:outline-none focus:ring-0  peer"
                      placeholder="from"
                      required
                    />
                    <input
                      type="number"
                      name="to"
                      id="to"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-blue-500 focus:outline-none focus:ring-0  peer"
                      placeholder="To"
                      required
                    />
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </p>
      </div>
      {/* price end */}
      <div>
        <p className="text-gray-500 font-semibold mb-2  text-sm">
          PropertyType
        </p>
        <Dropdown data={propertyTypes} />
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5    focus:outline-none "
        >
          Default
        </button>
      </div>
    </div>
  );
}

export default Filter;
