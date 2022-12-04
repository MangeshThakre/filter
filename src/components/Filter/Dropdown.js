import React from "react";

import { useState } from "react";

function Dropdown({ data }) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <span
        className="flex gap-2 items-center cursor-pointer  w-36"
        onClick={() => setShow(!show)}
      >
        <p className="   text-black text-base  font-bold ">
          {value ? value : data[0]}{" "}
        </p>
        <span>
          <svg
            className="w-6 h-6"
            fill="#6f63f0"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </span>

      {show ? (
        <div
          id="dropdown"
          className="   absolute mt-2  left-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow "
        >
          <ul
            className="py-1 text-sm text-gray-700 "
            aria-labelledby="dropdownDefault"
          >
            {data.map((value) => {
              return (
                <li>
                  <p
                    className="block py-2 px-4 hover:bg-gray-100  hover:text-gray-700 cursor-pointer"
                    onClick={() => {
                      setValue(value);
                      setShow(false);
                    }}
                  >
                    {value}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
