import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  // console.log(data);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg m-2 bg-green-100 rounded-lg sm:bg-yellow-100 lg:bg-pink-100">
      <div>
        <img className="w-36 mix-blend-multiply" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-6">
            Online Status: {useOnlineStatus() ? "🟢" : "🔴"}
          </li>
          <li className="px-6">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-6">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-6">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-6">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-6">
            <Link to={"/cart"}>Cart({cartItems.length})</Link>
          </li>
          <button
            className="login px-6"
            onClick={() => {
              loginBtn == "Login"
                ? setloginBtn("Logout")
                : setloginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="px-6 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
