import Dropdown from "./Dropdown.js";
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import data from "../../Data/data.js";

function Filter({ dataArr, setFilter }) {
  const [dropdown, setDropdown] = useState(null);
  const [city, setCity] = useState("City");
  const [state, setState] = useState("State");
  const [price, setPrice] = useState("price-Range");
  const [propertyType, setPropertyType] = useState("All");
  const [date, setDate] = useState({ from: null, to: null });

  const states = ["State", ...new Set(dataArr.map((data) => data.state))];
  const cities =
    state === "satae"
      ? ["City"]
      : [
          "City",
          ...new Set(
            dataArr.filter((e) => e.state === state).map((e) => e.city)
          ),
        ];

  const priceRange = ["price-Range", 10000, 20000, 30000, 40000, 500000];
  const propertyTypes = [
    "All",
    ...new Set(dataArr.map((data) => data.propertyType)),
  ];

  function submit(e) {
    e.preventDefault();
    setFilter({
      state,
      city,
      date: {
        from:
          date.from == null
            ? null
            : new Date(`${date.from.year}-${date.from.month}-${date.from.day}`),
        to:
          date.to == null
            ? null
            : new Date(`${date.to.year}-${date.to.month}-${date.to.day}`),
      },
      price,
      propertyType,
    });
  }

  return (
    <form
      className="flex md:w-[70rem] 
    bg-white  shadow-md items-center justify-between px-4  h-20 rounded-md "
      onSubmit={(e) => submit(e)}
    >
      {/* location */}
      <div className="w-48">
        <p className="text-gray-500 font-semibold mb-2  text-sm">Location</p>
        <div className="flex gap-4">
          {/* state */}
          <Dropdown data={states} setValue={setState} value={state} />
          {/* state  end */}
          {/* city */}
          <Dropdown data={cities} value={city} setValue={setCity} />
          {/* city  end*/}
        </div>
      </div>
      {/* locaion end */}
      {/* date */}

      <div>
        <p className="text-gray-500 font-semibold mb-2 text-sm">When</p>
        <div className="relative">
          <span
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => setDropdown(dropdown === "WHEN" ? null : "WHEN")}
          >
            <p className="   text-black text-base  font-bold ">
              {date.from != null && date.to != null
                ? ` ${date.from.day}/${date.from.month}/${date.from.year}  - ${date.to.day}/${date.to.month}/${date.to.year}`
                : "Select Move-in Date"}{" "}
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
          <div
            className="absolute mt-4"
            style={dropdown === "WHEN" ? null : { display: "none" }}
          >
            <Calendar
              value={date}
              onChange={setDate}
              shouldHighlightWeekends
              colorPrimary="#6f63f0" // added this
              colorPrimaryLight="#80a1ff" // and this
              renderFooter={() => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    padding: "10px  0",
                    borderTop: "solid #6f63f0 1px",
                  }}
                >
                  <button
                    disabled={date.to == null}
                    type="button"
                    style={{
                      background: "#6f63f0",
                      height: "2rem",
                      width: "5rem",
                      fontSize: "16px",
                      borderRadius: "1rem",
                      color: "white",
                    }}
                    onClick={() => {
                      setDropdown(null);
                    }}
                  >
                    select
                  </button>
                  <button
                    style={{
                      background: "rgb(240, 99, 112)",
                      height: "2rem",
                      width: "5rem",
                      fontSize: "16px",
                      borderRadius: "1rem",
                      color: "white",
                    }}
                    onClick={() => {
                      setDropdown(null);
                      setDate({ from: null, to: null });
                    }}
                    type="button"
                    className="calender_cancle"
                  >
                    Cancle
                  </button>
                </div>
              )}
            />
          </div>
        </div>
      </div>
      {/* date end*/}

      {/* price */}
      <div>
        <p className="text-gray-500 font-semibold mb-2 text-sm">Price</p>
        <Dropdown data={priceRange} value={price} setValue={setPrice} />
      </div>
      {/* price end */}
      {/* property */}
      <div>
        <p className="text-gray-500 font-semibold mb-2  text-sm">
          PropertyType
        </p>
        <Dropdown
          data={propertyTypes}
          value={propertyType}
          setValue={setPropertyType}
        />
      </div>
      {/* propert  end*/}

      <div>
        <button
          type="submit"
          className="text-white bg-[#6f63f0] hover:bg-[#6b5ff4] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5    focus:outline-none "
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Filter;
