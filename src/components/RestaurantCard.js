import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resdata?.info;
  return (
    <div className="res-card m-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="res-logo rounded-lg h-[150px] w-72 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>

      <h3 className="font-bold text-lg px-4 py-3">{name}</h3>
      <h4 className="px-4 py-1">{cuisines.join(", ")}</h4>
      <h4 className="px-4 py-1">⭐{avgRating}</h4>
      <h4 className="px-4 py-1">🕛{sla.slaString}</h4>
      <h4 className="px-4 py-1 pb-3">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
