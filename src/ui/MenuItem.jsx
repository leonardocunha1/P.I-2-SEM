import { NavLink } from "react-router-dom";

function MenuItem({ link, setIsOpen }) {
  return (
    <li key={link.to} onClick={() => setIsOpen(false)}>
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          `flex rounded-xl p-2 font-semibold tracking-wider transition-all duration-300 ${
            isActive
              ? "bg-stone-200 sm:bg-transparent sm:text-primary-500"
              : "hover:bg-stone-200 sm:text-primary-100 sm:hover:bg-transparent sm:hover:text-primary-500"
          }`
        }
      >
        {link.label}
      </NavLink>
    </li>
  );
}

export default MenuItem;
