import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { formatCurrency } from "@/utils/helpers";
import CartItem from "@/features/cart/CartItem";
import EmptyCart from "@/features/cart/EmptyCart";
import TextMd from "@/ui/TextMd";
import AddressForm from "@/features/cart/AddressForm";
import PaymentMethod from "@/features/cart/PaymentMethod";

function Cart() {
  const [isDelivery, setIsDelivery] = useState(false);
  const [cepError, setCepError] = useState(null);
  const [cepData, setCepData] = useState(null);
  const [showInputs, setShowInputs] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");

  const { cart } = useCart();
  const valorEntrega = 8;

  const totalOrder = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  function handleReset() {
    setCepData(null);
    setShowInputs(true); // Mostrar inputs ao resetar
  }

  return (
    <section className="relative flex-1 bg-stone-50 px-5 py-10">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="mx-auto max-w-3xl rounded-lg bg-white px-6 py-8">
          <TextMd label="Carrinho" />
          <ul>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="mt-4 space-y-2">
            <div className="space-y-2">
              <PaymentMethod
                setPaymentMethod={setPaymentMethod}
                paymentMethod={paymentMethod}
              />
            </div>

            <div className="flex h-[30px] items-center gap-2">
              <label htmlFor="delivery">
                Entrega ({formatCurrency(valorEntrega)})
              </label>
              <input
                type="checkbox"
                id="delivery"
                className="h-4 w-4 accent-primary-400 focus:outline-none focus:ring focus:ring-primary-400 focus:ring-offset-2"
                checked={isDelivery}
                onChange={() => {
                  setIsDelivery(!isDelivery);
                  setCepData(null);
                  setShowInputs(true);
                }}
              />
            </div>

            {isDelivery && (
              <div className="max-w-96">
                {showInputs ? (
                  <AddressForm
                    setCepError={setCepError}
                    setCepData={setCepData}
                    setShowInputs={setShowInputs}
                  />
                ) : (
                  <>
                    <div className="mt-3 rounded-md border border-primary-100 bg-primary-50 p-4">
                      <p className="text-sm text-stone-700">
                        {cepData.logradouro}{" "}
                        {cepData.numero && `n°${cepData.numero}`} -{" "}
                        {cepData.bairro}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="mt-4 rounded-md bg-primary-500 px-4 py-2 font-semibold tracking-wide text-primary-50 duration-200 hover:bg-primary-600"
                      onClick={handleReset}
                    >
                      Alterar CEP
                    </button>
                  </>
                )}
                {cepError && (
                  <p className="mt-2 text-sm text-red-500">{cepError}</p>
                )}
              </div>
            )}
          </div>

          <div className="mt-2 flex items-center justify-end gap-2">
            <p>Total:</p>
            <p className="text-base font-bold">
              {formatCurrency(
                isDelivery ? totalOrder + valorEntrega : totalOrder,
              )}
            </p>
          </div>

          <button>Finalizar Pedido</button>
        </div>
      )}
    </section>
  );
}

export default Cart;
