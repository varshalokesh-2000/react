import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9591636&lng=77.5868218&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await res.json();
    console.log({ json });
    setRestInfo(json);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (restInfo === null) {
    return <Shimmer />;
  }

  const {
    id,
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    areaName,
    locality,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
  } = restInfo?.data?.cards?.[2]?.card?.card?.info;

  const { itemCards, image, card } =
    restInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2];
  console.log({ itemCards, card });
  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <div className="tab-container">
        ⭐{avgRating} ({totalRatingsString}) . {costForTwoMessage}
      </div>
      <div className="cuisine">{cuisines.join(", ")}</div>
      {itemCards &&
        itemCards?.map((item) => {
          const { id, imageId, name, ratings, variants, variantsV2 } =
            item?.card?.info;
          return (
            <div>
              <div>{name}</div>
              <div>{imageId}</div>
              <div>{id}</div>
              <div>{ratings}</div>
              {/* <div>{variants ? variants : variantsV2?.pricingModels}</div> */}
            </div>
          );
        })}
      {/* {card &&
        card?.card?.categories?.map((item) => {
          const { id, imageId, name, ratings, variants, variantsV2 } =
            item?.card?.info;
          return (
            <div>
              <div>{name}</div>
              <div>{imageId}</div>
              <div>{id}</div>
              <div>{ratings}</div>
              <div>{variants ? variants : variantsV2?.pricingModels}</div>
            </div>
          );
        })} */}
    </div>
  );
};

export default RestaurantMenu;
