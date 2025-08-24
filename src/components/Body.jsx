import React, { useState } from "react";
import { restList } from "../utils/constants";
import ResturantCard from "./RestaurantCard";

const Body = () => {
  //Local State variable - super powerful variable
  // useState() Returns an array of stateful value, and a function to update it.
  // so here we are destrcuturing the array returned by useState
  // we can also write it as - const arr = useState(restList.restaurants);
  // and then const [listOfRestaurants, setListOfRestaurants] = arr;
  const [listOfRestaurants, setListOfRestaurants] = useState(
    restList?.restaurants
  );
  const test = React.createElement("h1", { id: "title" }, "Namaste React");
  console.log(<ResturantCard resData={restList.restaurants[0]} />, test);
  return (
    <div className="body">
      <div className="search">Search</div>
      <div>
        <button
          onClick={() => {
            const filteredList = restList.restaurants.filter(
              (rest) => rest.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.map((rest) => (
          <ResturantCard resData={rest} key={rest.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
