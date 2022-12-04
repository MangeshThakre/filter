import React from "react";

import bedIcon from "../assets/bed.png";

function Card({ data }) {
  const date = data.date;
  const fullDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md ">
      <img
        className="rounded-t-lg  "
        src="https://static.theceomagazine.net/wp-content/uploads/2020/09/04114637/luxury-apartments.jpg"
        alt=""
      />

      <div className="p-5 gap-6 ">
        <div className="flex justify-between">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-[#6f63f0] ">
            &#x20B9; {data.price}
            <span className=" text-sm text-gray-500 font-semibold">
              {" "}
              / month{" "}
            </span>
          </h5>

          <p className=" text-sm text-gray-500 font-semibold">
            {data.propertyType}
          </p>
        </div>

        <p className="mb-1 font-semibold text-gray-700   text-sm  ">
          {data.state} , {data.city}
        </p>
        <p className="mb-3 font-normal text-gray-700  text-sm  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        </p>

        <div className="flex  border-t-[1px] border-gray-300 pt-2 font-semibold text-sm  text-gray-700   gap-3 ">
          <p>Available from : {fullDate} </p>
          <span className="flex gap-2">
            <img src={bedIcon} className="w-4" alt="bed" />
            {data.Beds} <p>Beds</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
