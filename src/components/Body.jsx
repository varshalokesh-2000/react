import React, { useEffect, useState } from "react";
import { restList } from "../utils/constants";
import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  //conditional rendering
  //   if (listOfRestaurants.length === 0) {
  //     //old practice
  //     // return <h2>Loading...</h2>;
  //     //shimmer ui - bets practice
  //     return <Shimmer />;
  //   }

  return (
    <div className="body">
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Body;
