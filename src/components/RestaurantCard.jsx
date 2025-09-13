import { CMS_URL } from "../utils/constants";
import { Link } from "react-router";

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
  return (
    <Link className="rest-card" to={`/restaurants/` + id}>
      <img className="rest-img" src={CMS_URL + cloudinaryImageId} />
      <div>
        <div className="rest-heading">{name}</div>
        <div className="rating">
          <div>{avgRating} stars</div>
          <div>{sla.slaString}</div>
        </div>
        <div className="cuisine">{cuisines.join(", ")}</div>
        <div>Cost for two: {costForTwo}</div>
      </div>
    </Link>
  );
};

export default ResturantCard;
