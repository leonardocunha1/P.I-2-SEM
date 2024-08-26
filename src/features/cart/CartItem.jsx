import { useCart } from "@/contexts/CartContext";
import { formatCurrency } from "@/utils/helpers";

function CartItem({ item }) {
  const { dispatch } = useCart();

  function handleIncrement() {
    dispatch({
      type: "cart/increment",
      payload: { id: item.id },
    });
  }

  function handleRemoveDecrement() {
    if (item.quantity === 1) {
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
    <li className="flex items-center justify-between p-2">
      <div className="flex items-center gap-3">
        <img src={item.image} alt={item.name} className="h-12 w-12" />
        <div>
          <h3 className="text-base font-bold text-stone-900">{item.name}</h3>
          <div className="flex items-end gap-3">
            <p className="font-semibold text-primary-700">{item.quantity}x</p>
            <p className="flex items-end gap-1 text-primary-600">
              <span className="text-[12px]">@ </span>
              {formatCurrency(item.price)}
            </p>
            <p className="font-bold text-primary-950">
              {formatCurrency(item.quantity * item.price)}
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          className="rounded-full border border-stone-400 px-3 py-1 duration-200 hover:bg-stone-400"
          onClick={handleRemoveDecrement}
        >
          -
        </button>
        <span className="px-3">{item.quantity}</span>
        <button
          className="rounded-full border border-stone-400 px-3 py-1 duration-200 hover:bg-stone-400"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
