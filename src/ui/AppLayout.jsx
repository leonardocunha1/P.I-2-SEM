import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import MenuItens from "./MenuItems";

function AppLayout() {
  return (
    <div className="relative flex h-dvh flex-col overflow-x-hidden bg-stone-100 font-poppins2 text-sm text-stone-800">
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
      <footer className="bg-stone-900 px-4 py-6 text-center text-primary-100">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} -{" "}
          <span className="font-semibold text-primary-500">
            Diiner&apos;s Burgers
          </span>
          . Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default AppLayout;
