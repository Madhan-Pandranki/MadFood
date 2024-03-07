import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //   console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-10/12">
            <div className="p-2">
              <div>
                {item.card.info.itemAttribute?.vegClassifier == "VEG" ? (
                  <img
                    className="h-6 w-6"
                    src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                    alt="vegetarian-food-symbol"
                  />
                ) : (
                  <img
                    className="h-6 w-6"
                    src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png"
                    alt="non-vegetarian-food-symbol"
                  />
                )}
              </div>
              <span>{item.card.info.name} </span>
              <div>
                ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </div>
            </div>
            <p className="text-xs p-2 text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-2/12 p-4 h-32">
            <div className="absolute">
              <button
                className="p-2 mt-16 ml-[12px] rounded-lg bg-pink-200"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-lg object-cover h-full w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
