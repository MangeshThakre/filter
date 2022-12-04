import React from "react";
import Filter from "./Filter/Filter.js";
import dataArr from "../Data/data.js";
import Card from "./Card";

import { useState } from "react";

function Main() {
  const [filter, setFilter] = useState({
    state: "State",
    city: "City",
    price: "price-Range",
    propertyType: "All",
    date: { from: null, to: null },
  });

  const from = new Date("2022-12-12");
  const to = new Date("2022-12-14");

  function filteredValue(filter, dataArr) {
    const filteredState =
      filter.state === "State"
        ? dataArr
        : dataArr.filter((e) => e.state === filter.state);

    const filteredCity =
      filter.city === "City"
        ? filteredState
        : filteredState.filter((e) => e.city === filter.city);

    const filteredDate =
      filter.date.from == null && filter.date.to == null
        ? filteredCity
        : filteredCity.filter(
            (e) => e.date >= filter.date.from && e.date <= filter.date.to
          );

    const filteredPrice =
      filter.price === "price-Range"
        ? filteredDate
        : filteredDate.filter((e) => filter.price >= e.price);

    const filteredProType =
      filter.propertyType === "All"
        ? filteredPrice
        : filteredPrice.filter((e) => e.propertyType === filter.propertyType);

    return filteredProType;
  }

  return (
    <div className="flex flex-col gap-14  md:px-16   pt-28 ">
      <header>
        <h1 className="md:text-4xl  text-gray-700 font-semibold">
          Search Properties to rent
        </h1>
      </header>
      <div className="w-full flex items-center justify-center">
        <Filter setFilter={setFilter} dataArr={dataArr} />
      </div>
      <div className="flex   gap-10 flex-wrap items-center justify-center">
        {filteredValue(filter, dataArr).map((data, i) => {
          return <Card key={i} data={data} />;
        })}
      </div>
    </div>
  );
}

export default Main;
