import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  return (
    <div className="w-9/12 mx-auto my-4  p-4 shadow-md rounded-md">
      {/* Header */}
      <button
        className="flex justify-between w-full cursor-pointer"
        onClick={setShowItems}
      >
        <h3 className="font-bold text-md">
          {data?.title} ({data?.itemCards?.length})
        </h3>
        <span>⬇️</span>
      </button>

      {/* Accordian body */}
      {showItems && <CategoryItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
