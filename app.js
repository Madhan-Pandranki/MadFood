import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Image
 *          - Name, Rating, Cuisine, Delivery Time
 * Footer
 *  - Copyrights
 *  - Links
 *  - Address
 *  - Contact info
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1708115596~exp=1708116196~hmac=05352d32d85f9e8693c85e12d651a4d2505d7ac4b37a3ae1c454fe92231e9e29"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  // Inline CSS
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cf6280d32aefb59cc849ef81b39fd3fd"
      ></img>
      <h3>{props.resname}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.3 stars</h4>
      <h4>25 mins</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resname="Madfood" cuisine="Pizza,Jalandhar,Punjab" />
        <RestaurantCard
          resname="KFC"
          cuisine="Fried chicken,Jalandhar,Punjab"
        />
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
