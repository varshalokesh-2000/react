import { restList } from "../utils/constants";
import ResturantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {restList.restaurants.map((rest) => (
          <ResturantCard resData={rest} key={rest.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
