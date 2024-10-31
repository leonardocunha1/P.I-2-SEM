import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { formatCurrency } from "@/utils/helpers";
import CartItem from "@/features/cart/CartItem";
import EmptyCart from "@/features/cart/EmptyCart";
import TextMd from "@/ui/TextMd";
import AddressForm from "@/features/cart/AddressForm";
import PaymentMethod from "@/features/cart/PaymentMethod";
import AddressSummary from "@/features/cart/AddressSumary";
import TotalOrderDisplay from "@/features/cart/TotalOrderDisplay";
import Button from "@mui/material/Button";
import { useUser } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const [isDelivery, setIsDelivery] = useState(false);
  const [cepError, setCepError] = useState(null);
  const [cepData, setCepData] = useState(null);
  const [showInputs, setShowInputs] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  const { isLogged } = useUser();
  const { cart } = useCart();
  const valorEntrega = 8;

  const totalOrder = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  function handleReset() {
    setCepData(null);
    setShowInputs(true); // Mostrar inputs ao resetar
  }

  function finalizarPedido() {
    const order = {
      cart,
      totalOrder,
      isDelivery,
      cepData,
      valorEntrega,
      paymentMethod,
    };

    if (!isLogged) {
      toast.error("Faça o login para finalizar o pedido");
    }

    console.log(order);
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
            <PaymentMethod
              setPaymentMethod={setPaymentMethod}
              paymentMethod={paymentMethod}
            />

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
                  handleReset();
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
                  <AddressSummary cepData={cepData} handleReset={handleReset} />
                )}
                {cepError && (
                  <p className="mt-2 text-sm text-red-500">{cepError}</p>
                )}
              </div>
            )}
          </div>

          <TotalOrderDisplay
            isDelivery={isDelivery}
            totalOrder={totalOrder}
            valorEntrega={valorEntrega}
          />

          {isLogged ? (
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#e0782f",
                color: "#1a1a1a",
                fontWeight: "bold",
                width: "100%",
                fontFamily: "Calistoga",
                letterSpacing: "2px",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "#d16025",
                  color: "#fdf7ef",
                },
              }}
              onClick={finalizarPedido}
            >
              Finalizar Pedido
            </Button>
          ) : (
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#e0782f",
                color: "#1a1a1a",
                fontWeight: "bold",
                width: "100%",
                fontFamily: "Calistoga",
                letterSpacing: "2px",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "#d16025",
                  color: "#fdf7ef",
                },
              }}
              onClick={() => navigate("/login")}
            >
              Faça o login para finalizar o pedido
            </Button>
          )}
        </div>
      )}
    </section>
  );
}

export default Cart;
