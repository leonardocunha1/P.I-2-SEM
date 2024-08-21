function BurgerText({ label, children }) {
  return (
    <p className="text-justify">
      <span className="font-bold text-orange-600">{label}: </span>
      {children}
    </p>
  );
}

export default BurgerText;
