import { CMS_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const {
    resData: {
      info: {
        name,
        cuisines,
        cloudinaryImageId,
        avgRating,
        sla,
        costForTwo,
        id,
      },
    },
  } = props;
  console.log({ props });
  return (
    <div className="bg-white w-[250px] shadow-md rounded-lg transition ease-in delay-10  origin-center hover:scale-95">
      <img className="rounded-t-lg" src={CMS_URL + cloudinaryImageId} />
      <div className="p-2">
        <div className="font-bold">{name}</div>
        <div className="rating">
          <div className="font-medium text-slate-500 ">{avgRating} stars</div>
          <div>{sla.slaString}</div>
        </div>
        <div className="cuisine">{cuisines.join(", ")}</div>
        <div>Cost for two: {costForTwo}</div>
      </div>
    </div>
  );
};

//Higher order component
//input - ResturantCard => output - ResturantCardWithOffers

export const withOffersLabel = (ResturantCard) => {
  return (props) => {
    const aggregatedDiscountInfoV3 =
      props?.resData?.info?.aggregatedDiscountInfoV3;
    return (
      <>
        <div className="absolute uppercase text-slate-50 text-2xl font-bold ">
          {aggregatedDiscountInfoV3?.header}{" "}
          {aggregatedDiscountInfoV3?.subHeader}
        </div>
        <ResturantCard {...props} />
      </>
    );
  };
};

export default ResturantCard;
