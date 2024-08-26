function ButtonOrderAndCart({ item, handleIncrement, handleRemoveDecrement }) {
  return (
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
  );
}

export default ButtonOrderAndCart;
