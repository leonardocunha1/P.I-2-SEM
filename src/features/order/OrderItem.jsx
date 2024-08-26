import Grid from "@mui/material/Unstable_Grid2";
import { MdAddShoppingCart } from "react-icons/md";
import { formatCurrency } from "@/utils/helpers";
import { useCart } from "@/contexts/CartContext";

function OrderItem({ item }) {
  const { cart, dispatch } = useCart();

  const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

  function handleAddToCart() {
    dispatch({
      type: "cart/add",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
      },
    });
  }

  function handleIncrement() {
    dispatch({
      type: "cart/increment",
      payload: { id: item.id },
    });
  }

  function handleRemoveDecrement() {
    if (itemInCart.quantity === 1) {
      dispatch({
        type: "cart/remove",
        payload: { id: item.id },
      });
    } else {
      dispatch({
        type: "cart/decrement",
        payload: { id: item.id },
      });
    }
  }

  return (
    <Grid xs={4} sm={4} md={4} lg={4} className="flex justify-center">
      <li className="flex w-full flex-col border-b border-stone-400 p-3 pb-5 pt-5">
        <img
          src={item.image}
          alt={item.name}
          className="h-32 w-full max-w-full rounded-xl object-contain"
        />
        <div className="mb-5 mt-4 flex flex-col">
          <h3 className="text-lg font-semibold text-stone-900">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-2">
          <p className="font-semibold text-stone-900">
            {formatCurrency(item.price)}
          </p>

          {itemInCart ? (
            <div>
              <button
                className="rounded-full border border-stone-400 px-3 py-1 duration-200 hover:bg-stone-400"
                onClick={handleRemoveDecrement}
              >
                -
              </button>
              <span className="px-3">{itemInCart.quantity}</span>
              <button
                className="rounded-full border border-stone-400 px-3 py-1 duration-200 hover:bg-stone-400"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="flex w-36 items-center justify-center gap-2 rounded-full border border-stone-400 px-3 py-1 duration-200 hover:bg-stone-400"
              onClick={handleAddToCart}
            >
              <MdAddShoppingCart className="h-4 w-4" />
              <p>Add to cart</p>
            </button>
          )}
        </div>
      </li>
    </Grid>
  );
}

export default OrderItem;
