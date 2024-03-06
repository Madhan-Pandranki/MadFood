import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;

  const { name, cuisines, avgRating, cloudinaryImageId, sla } = resdata?.info;
  return (
    <div className="res-card m-4 w-[250px] h-auto bg-gray-100 rounded-lg hover:bg-gray-200 overflow-hidden">
      <img
        className="res-logo rounded-lg h-[150px] w-72 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>

      <h3 className="font-bold text-lg p-2 truncate">{name}</h3>
      <h4 className="p-2">
        ⭐{avgRating}
        {" • "}🕛{sla.slaString}
      </h4>
      {/* <h4 className="px-4 py-1"></h4> */}
      <h4 className="p-2 text-gray-600 truncate">
        {cuisines.join(", ")}
      </h4>
    </div>
  );
};

// Higher Order Component

// input -> RestaurantCard => output -> RestaurantCardPromoted

export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-pink-400 mx-4 p-2 rounded-tl-lg rounded-br-lg">
          FLAT DEAL
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
