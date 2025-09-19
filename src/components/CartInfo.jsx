import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemList";
import { clearItem } from "../utils/cartSlice";

const CartInfo = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // works same, but less efficient(performance wise)
  //const store = useStore((store) => store);
  //const cartItems = store.cart.items;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className="m-auto">
        <button
          onClick={handleClearCart}
          className="p-2 m-2 bg-black rounded-lg text-white cursor-pointer"
        >
          Clear Cart
        </button>
        <CategoryItemList items={cartItems} />
        {cartItems?.length === 0 && <h1>Cart is Empty</h1>}
      </div>
    </div>
  );
};

export default CartInfo;
