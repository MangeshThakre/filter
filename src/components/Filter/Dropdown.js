import React from "react";

import { useState } from "react";

function Dropdown({ data }) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(data[0]);

  return (
    <div className="relative">
      <p
        className=" text-base  font-bold cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {value}{" "}
      </p>
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
