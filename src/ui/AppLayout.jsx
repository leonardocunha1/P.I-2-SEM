import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import MenuItens from "./MenuItems";

function AppLayout() {
  return (
    <div className="relative flex h-screen flex-col bg-stone-100 font-poppins2 text-sm text-stone-800">
      <aside className="z-20 bg-stone-900 px-3 py-4">
        <div className="mx-auto flex max-w-6xl flex-1 items-center justify-between">
          <Logo />
          <MenuItens />
          {/* A LÓGICA AQUI VAI MUDAR, SE O USUÁRIO TIVER LOGADO VAI MOSTAR O NOME DELE, SE NÃO TIVER VAI MOSTRAR O LOGIN */}
          <Link
            to="/login"
            className="hidden rounded-xl bg-primary-600 px-4 py-2 text-base font-bold tracking-wide text-stone-900 duration-500 hover:bg-red-900 hover:text-stone-50 sm:block"
          >
            Login
          </Link>
        </div>
      </aside>
      <main className="z-10 flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
