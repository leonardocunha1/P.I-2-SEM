import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { formatCurrency } from "@/utils/helpers";
import CartItem from "@/features/cart/CartItem";
import EmptyCart from "@/features/cart/EmptyCart";
import TextMd from "@/ui/TextMd";
import { useForm } from "react-hook-form";
import { fetchCepData } from "@/utils/data-services";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

function Cart() {
  const [isDelivery, setIsDelivery] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cepError, setCepError] = useState(null);
  const [cepData, setCepData] = useState(null);
  const [showInputs, setShowInputs] = useState(true); // controle dos inputs

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { cart } = useCart();
  const valorEntrega = 8;

  const totalOrder = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  async function onSubmit({ cep, numero }) {
    setIsLoading(true);
    const { endereco, error } = await fetchCepData(cep, numero);
    setIsLoading(false);
    if (error) {
      setCepError(error);
      setCepData(null);
      setShowInputs(true); // Mostrar inputs em caso de erro
    } else {
      setCepData(endereco);
      setCepError(null);
      setShowInputs(false); // Ocultar inputs após sucesso
    }
  }

  function handleReset() {
    setCepData(null);
    setShowInputs(true); // Mostrar inputs ao resetar
    setValue("cep", ""); // Limpar o campo CEP
    setValue("numero", ""); // Limpar o campo Número
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
            <div className="flex h-[30px] items-center gap-2">
              <label htmlFor="delivery">
                Entrega ({formatCurrency(valorEntrega)})
              </label>
              <input
                type="checkbox"
                id="delivery"
                className="h-4 w-4 accent-primary-400 focus:outline-none focus:ring focus:ring-primary-400 focus:ring-offset-2"
                checked={isDelivery}
                onChange={() => setIsDelivery(!isDelivery)}
              />
            </div>
            {isDelivery && (
              <div className="max-w-96">
                {showInputs ? (
                  <form
                    className="mt-4 flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="cep"
                        className="text-sm font-semibold text-stone-700"
                      >
                        CEP
                      </label>
                      <input
                        type="number"
                        id="cep"
                        placeholder="Digite o CEP"
                        className="w-full rounded-md border border-stone-300 px-2 py-1 focus:outline-none focus:ring focus:ring-primary-400 focus:ring-offset-2"
                        {...register("cep", {
                          required: "Campo Obrigatório",
                          pattern: {
                            value: /^[0-9]{8}$/,
                            message: "CEP inválido",
                          },
                        })}
                      />
                      {errors.cep && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.cep.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="numero"
                        className="text-sm font-semibold text-stone-700"
                      >
                        Número
                      </label>
                      <input
                        type="number"
                        id="numero"
                        placeholder="Número"
                        className="w-full rounded-md border border-stone-300 px-2 py-1 focus:outline-none focus:ring focus:ring-primary-400 focus:ring-offset-2"
                        {...register("numero", {
                          required: "Campo Obrigatório",
                        })}
                      />
                      {errors.numero && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.numero.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="flex items-center justify-center rounded-md bg-primary-500 px-4 py-2 font-bold text-primary-50 duration-200 hover:bg-primary-600"
                    >
                      {isLoading ? (
                        <ClipLoader
                          color="#fdf7ef"
                          size={20}
                          cssOverride={override}
                        />
                      ) : (
                        "Ok"
                      )}
                    </button>
                  </form>
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
