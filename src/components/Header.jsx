import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useUserOnlineStatus from "../utils/useUserOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const userOnlineStatus = useUserOnlineStatus();

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
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
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
