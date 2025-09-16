import { CMS_URL } from "../utils/constants";

const CategoryItemList = ({ items }) => {
  console.log({ items });
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-1 border-gray-300 text-left flex justify-between gap-2"
        >
          <div className="">
            <div className="py-2">
              <span className="font-bold text-lg text-slate-700">
                {item.card.info.name}
              </span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p>{item.card.info.description}</p>
          </div>
          <div className="p-2 ml-15 max-h-[174px] max-w-[156px] min-w-[156px] ">
            <img
              src={CMS_URL + item?.card?.info?.imageId}
              className="object-cover rounded-xl"
            />
            <div className="relative left-[35%] bottom-[20px] z-10">
              <div className="absolute">
                <button className="cursor-pointer border-1 border-gray-400 py-1 px-2 rounded-md bg-white text-green-600 font-medium">
                  Add +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItemList;
