import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");

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
          <li className="px-6">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
