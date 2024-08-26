// components/AddressForm.js
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";

function AddressForm({ onSubmit, isLoading, errors, register }) {
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <form className="mt-4 flex flex-col gap-4" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="cep" className="text-sm font-semibold text-stone-700">
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
          <p className="mt-1 text-xs text-red-500">{errors.cep.message}</p>
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
          <p className="mt-1 text-xs text-red-500">{errors.numero.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="flex items-center justify-center rounded-md bg-primary-500 px-4 py-2 font-bold text-primary-50 duration-200 hover:bg-primary-600"
      >
        {isLoading ? (
          <ClipLoader color="#fdf7ef" size={20} cssOverride={override} />
        ) : (
          "Ok"
        )}
      </button>
    </form>
  );
}

export default AddressForm;
