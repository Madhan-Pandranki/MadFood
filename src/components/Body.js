import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable - Super powerful variale
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log("Body");
    // console.log(json);

    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log("Res List");
  // console.log(listOfRestaurants);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>offline</h1>;
  }

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex mx-48">
        <div className="m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg hover:bg-green-200"
            onClick={() => {
              // Filter the restaurants ans update the UI
              //searchText
              const searchedList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-1 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => {
              // Filter logic here
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-1 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => {
              // Filter logic here
              const sortedList = [...filteredRestaurants].sort(
                (a, b) => b.info.avgRating - a.info.avgRating
              );
              setFilteredRestaurants(sortedList);
            }}
          >
            Sort Restaurants by Rating
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap mx-48">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resdata={restaurant} />
          </Link> //not using keys(rerendering of all reslist) <<< index as a key <<<<<<< unique id(best practice-optimized)
        ))}
      </div>
    </div>
  );
};

export default Body;
