import React, { useEffect, useState, useContext } from "react";
import ResturantCard, { withOffersLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useUserOnlineStatus from "../utils/useUserOnlineStatus";
import { Link } from "react-router";
import { RESTURANT_LIST } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  const fetchData = async () => {
    const data = await fetch(RESTURANT_LIST);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
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

  const ResturantCardWithOfferLabel = withOffersLabel(ResturantCard);
  console.log({ filteredRestaurants });
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
        <div className="p-2 flex items-center gap-2">
          UserName:
          <input
            className="border rounded-md p-1"
            value={loggedInUser}
            onChange={(e) => {
              e.preventDefault();
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      {filteredRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="flex flex-wrap gap-2 ">
            {filteredRestaurants?.map((rest) => (
              <Link key={rest.info.id} to={`/restaurants/` + rest.info.id}>
                {console.log({ rest })}
                {rest.info.aggregatedDiscountInfoV3?.header ? (
                  <ResturantCardWithOfferLabel resData={rest} />
                ) : (
                  <ResturantCard resData={rest} />
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
