import React from "react";
import ReactDOM from "react-dom/client";
import restaurants from "./restaurants.json";
//now let's build a food ordering application using react
// the components we need in pur mock design
/* Header
 * -  Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant Container
 *  - Restaurant Card
 *    - Image
 *    - Name of Restaurant, Rating, price, cuisine, deleivery time
 * Footer
 * - Contact Us
 * - About Us
 * - Copyrights
 */

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

const ResturantCard = (props) => {
  const {
    resData: {
      info: { name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo },
    },
  } = props;
  return (
    <div className="rest-card">
      <img
        className="rest-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
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

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {restaurants.restaurants.map((rest) => (
          <ResturantCard resData={rest} key={rest.info.id} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
