import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useUserOnlineStatus from "../utils/useUserOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const userOnlineStatus = useUserOnlineStatus();
  const data = useContext(UserContext);

  //subscribing to the store using selector
  //it gives access to the store - now we are taking only cart items
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center shadow-md px-2 z-100 w-full bg-white ">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex gap-5">
          <li>Online Status: {userOnlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
            {/* reload the page
            <a href="/about">About Us</a> */}
          </li>
          <li>
            {/* replaces the components  */}
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="font-bold">
            <Link to={"/cart"}>Cart ({cartItems?.length} items)</Link>
          </li>
          <button
            className="border border-black px-2 rounded-md cursor-pointer "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>

          <li className="font-bold">{data?.loggedInUser}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
