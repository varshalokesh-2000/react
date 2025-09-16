import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestuarantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwoMessage, totalRatingsString } =
    restInfo?.data?.cards?.[2]?.card?.card?.info;

  const categories =
    restInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold text-2xl">{name}</h1>
      <div className="text-slate-700">
        ⭐{avgRating} ({totalRatingsString}) . {costForTwoMessage}
      </div>
      <div className="font-bold text-lg">{cuisines.join(", ")}</div>

      {categories?.map((category, i) => (
        //controlled component
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={i === showIndex ? true : false}
          setShowItems={() => setShowIndex(i === showIndex ? null : i)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
