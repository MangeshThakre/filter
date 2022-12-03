import React from "react";
import Filter from "./Filter/Filter.js";
import dataArr from "../Data/data.js";
import Card from "./Card";

import { useState } from "react";

function Main() {
  const [filter, setFilter] = useState({
    state: "",
    city: "",
    price: "",
    propertyType: "",
  });

  return (
    <div className="flex flex-col gap-14  md:px-16">
      <header>
        <h1>Search Properties to rent</h1>
      </header>
      <div className="w-full flex items-center justify-center">
        <Filter setFilter={setFilter} dataArr={dataArr} />
      </div>
      <div className="flex   gap-10 flex-wrap items-center justify-center">
        {dataArr.map((data, i) => {
          return <Card key={i} data={data} />;
        })}
      </div>
    </div>
  );
}

export default Main;
