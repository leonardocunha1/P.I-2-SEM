function BurgerText({ label, children }) {
  return (
    <li className="text-justify">
      <span className="font-bold text-orange-600">{label}: </span>
      {children}
    </li>
  );
}

export default BurgerText;
