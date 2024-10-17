import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonMenuMobile from "./ButtonMenuMobile";
import MenuItem from "./MenuItem";

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/about", label: "Sobre" },
  { to: "/order", label: "Realizar Pedido" },
];

function MenuItens({ isLogged }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="order-3 sm:order-2">
      <ButtonMenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`absolute top-0 w-full gap-3 bg-stone-50 px-3 pb-10 pt-24 shadow-lg transition-all duration-500 ease-in sm:static sm:mt-0 sm:flex sm:w-auto sm:bg-transparent sm:p-0 sm:shadow-none ${
          isOpen ? "left-0" : "left-[-640px]"
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-y-3 text-base sm:flex-row sm:gap-3">
            {navLinks.map((link) => (
              <MenuItem key={link.to} link={link} setIsOpen={setIsOpen} />
            ))}

            {/* Esse login só mostra em dispositivos móveis e se o usuário ainda não estiver logado */}
            {isLogged ? (
              <Link
                to="/account"
                className="block rounded-xl bg-primary-600 px-4 py-2 text-center text-base font-bold tracking-wide text-stone-900 duration-500 hover:bg-red-900 hover:text-stone-50 sm:hidden"
              >
                Minha conta
              </Link>
            ) : (
              <Link
                to="/login"
                className="block rounded-xl bg-primary-600 px-4 py-2 text-center text-base font-bold tracking-wide text-stone-900 duration-500 hover:bg-red-900 hover:text-stone-50 sm:hidden"
              >
                Login
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuItens;
