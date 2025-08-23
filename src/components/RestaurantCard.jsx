import { CMS_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const {
    resData: {
      info: { name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo },
    },
  } = props;
  return (
    <div className="rest-card">
      <img className="rest-img" src={CMS_URL + cloudinaryImageId} />
      <div>
        <div className="rest-heading">{name}</div>
        <div className="rating">
          <div>{avgRating} stars</div>
          <div>{sla.slaString}</div>
        </div>
        <div className="cuisine">{cuisines.join(", ")}</div>
      </div>
    </div>
  );
};

export default ResturantCard;
