import React, { useEffect, useState } from "react";
import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useUserOnlineStatus from "../utils/useUserOnlineStatus";
import { Link } from "react-router";

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

  useEffect(() => {
    fetchData();
  }, []);

  const userOnlineStatus = useUserOnlineStatus();

  if (!userOnlineStatus)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <div className="flex gap-2">
          <input
            name="search"
            type="text"
            className="border rounded-md px-2"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-2 rounded-sm bg-green-200 cursor-pointer "
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
            className="bg-gray-200 px-3 py-1 rounded-sm cursor-pointer"
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
          <div className="flex flex-wrap gap-2 ">
            {filteredRestaurants.map((rest) => (
              <Link key={rest.info.id} to={`/restaurants/` + rest.info.id}>
                <ResturantCard resData={rest} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
