import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestuarantMenu(resId);

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
