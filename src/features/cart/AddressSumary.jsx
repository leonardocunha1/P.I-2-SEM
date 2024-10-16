function AddressSummary({ cepData, handleReset }) {
  return (
    <div className="mt-3">
      <div className="rounded-md border border-primary-100 bg-primary-50 p-4">
        <p className="text-sm text-stone-700">
          {cepData.logradouro} {cepData.numero && `n°${cepData.numero}`} -{" "}
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
    </div>
  );
}

export default AddressSummary;
