import { Link } from "react-router-dom";
import Logo from "./Logo";
import MenuItens from "./MenuItems";
import { FaCartShopping } from "react-icons/fa6";

import { motion } from "framer-motion";
import { useUser } from "@/contexts/UserContext";

function MenuArea() {
  const { user, isLogged } = useUser();

  return (
    <aside className="z-20 bg-stone-900 px-3 py-4">
      <div className="mx-auto flex max-w-6xl flex-1 items-center justify-between">
        <Logo />

        <MenuItens isLogged={isLogged} />

        <div className="order-2 flex items-center sm:order-3">
          {/* Exibe o botão do carrinho */}
          <Link to="/cart" className="mr-4 text-stone-50">
            <FaCartShopping className="h-6 w-6 text-primary-100 duration-200 hover:text-primary-200" />
          </Link>

          {/* Esse login só mostra em dispositivos tablet e pc */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden sm:block"
          >
            {/* Exibe o botão de login */}
            {isLogged ? (
              <Link
                to="/account"
                className="rounded-xl bg-primary-600 px-4 py-2 text-base font-bold tracking-wide text-primary-50 duration-500 hover:bg-red-900"
              >
                Minha conta
              </Link>
            ) : (
              <Link
                to="/login"
                className="rounded-xl bg-primary-600 px-4 py-2 text-base font-bold tracking-wide text-primary-50 duration-500 hover:bg-red-900"
              >
                Login
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </aside>
  );
}

export default MenuArea;
