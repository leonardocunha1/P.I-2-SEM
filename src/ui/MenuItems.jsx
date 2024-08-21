import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { motion } from "framer-motion";

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/about", label: "Sobre" },
  { to: "/contact", label: "Contato" },
  { to: "/order", label: "Realizar Pedido" },
];

function MenuItens() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 h-10 w-12 cursor-pointer rounded-full bg-white/0 transition-colors hover:scale-110 hover:bg-white/20 sm:hidden"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className={`absolute h-1 w-8 transition-colors duration-300 ${isOpen ? "bg-stone-900" : "bg-primary-500"}`}
          style={{
            top: "30%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className={`absolute h-1 w-8 transition-colors duration-300 ${isOpen ? "bg-stone-900" : "bg-primary-500"}`}
          style={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className={`absolute h-1 w-8 transition-colors duration-300 ${isOpen ? "bg-stone-900" : "bg-primary-500"}`}
          style={{
            top: "60%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
        />
      </motion.button>

      <div
        className={`absolute top-0 w-full gap-3 bg-stone-50 px-3 pb-10 pt-24 shadow-lg transition-all duration-500 ease-in sm:static sm:mt-0 sm:flex sm:w-auto sm:bg-transparent sm:p-0 sm:shadow-none ${
          isOpen ? "left-0" : "left-[-640px]"
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-y-3 text-base sm:flex-row sm:gap-3">
            {navLinks.map((link) => (
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
            ))}
            {/* A LÓGICA AQUI VAI MUDAR, SE O USUÁRIO TIVER LOGADO VAI MOSTAR O NOME DELE, SE NÃO TIVER VAI MOSTRAR O LOGIN */}
            <Link
              to="/login"
              className="block rounded-xl bg-primary-600 px-4 py-2 text-center text-base font-bold tracking-wide text-stone-900 duration-500 hover:bg-red-900 hover:text-stone-50 sm:hidden"
            >
              Login
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuItens;
