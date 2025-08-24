import React, { useEffect, useState } from "react";
import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("Body rendered");
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
      <div className="filter">
        <div className="search">
          <input
            name="search"
            type="text"
            className="search-box"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (rest) => rest.info.avgRating > 4.3
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {filteredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="rest-container">
            {filteredRestaurants.map((rest) => (
              <ResturantCard resData={rest} key={rest.info.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
