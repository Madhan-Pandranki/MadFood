import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);
  const [showItems1, setShowItems1] = useState(false);

  const handleClick = () => {
    setShowIndex();
    setShowItems1(!showItems1);
  };
  return (
    <div>
      {/* Header */}
      <div className="bg-gray-100 w-6/12 mx-auto my-4 shadow-lg p-4 rounded-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="font-bold">
            {showItems && showItems1 ? "▲" : "▼"}
          </span>
        </div>
        {showItems && showItems1 && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
