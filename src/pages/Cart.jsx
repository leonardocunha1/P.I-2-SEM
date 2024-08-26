import { useCart } from "@/contexts/CartContext";
import CartItem from "@/features/cart/CartItem";
import TextMd from "@/ui/TextMd";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart } = useCart();
  console.log(cart);
  const navigate = useNavigate();

  return (
    <section className="relative flex-1 bg-stone-50">
      {cart.length === 0 ? (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <TextMd label="Carrinho vazio" />

          <p className="text-center">
            Começe seu pedido{" "}
            <span
              className="cursor-pointer font-bold text-primary-500 underline"
              onClick={() => navigate("/order")}
            >
              clicando aqui
            </span>
          </p>
        </div>
      ) : (
        <ul>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;
