import { useCart } from "@/contexts/CartContext";
import ButtonOrderAndCart from "@/ui/ButtonOrderAndCart";
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

  function handleObservation(e) {
    dispatch({
      type: "cart/updateObservation",
      payload: { id: item.id, observation: e.target.value },
    });
  }

  return (
    <li className="flex flex-col gap-4 border-b py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
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
      <input
        type="text"
        placeholder="Observações"
        defaultValue={item.observation}
        className="rounded-md border border-stone-300 px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
        onChange={handleObservation}
      />
      <ButtonOrderAndCart
        item={item}
        handleIncrement={handleIncrement}
        handleRemoveDecrement={handleRemoveDecrement}
      />
    </li>
  );
}

export default CartItem;
