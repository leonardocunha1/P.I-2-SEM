import { Outlet } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import MenuArea from "./MenuArea";
import Footer from "./Footer";
import { useUser } from "@/contexts/UserContext";
import { ClipLoader } from "react-spinners";

// Configurações de estilo para o ClipLoader
const override = {
  display: "block",
  margin: "0 auto",
};

function AppLayout() {
  const { isLoading } = useUser();

  return (
    <>
      {isLoading ? (
        <div className="relative flex h-dvh flex-col overflow-x-hidden bg-primary-50 font-poppins2 text-sm text-stone-800">
          {/* <ClipLoader color="#fdf7ef" size={90} cssOverride={override} /> */}
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </div>
      ) : (
        <div className="relative flex h-dvh flex-col overflow-x-hidden bg-primary-50 font-poppins2 text-sm text-stone-800">
          <MenuArea />

          <main className="relative z-0 flex flex-1 flex-col">
            <Outlet />
          </main>

          <Footer />

          {/* Botão do WhatsApp */}
          <a
            href="https://wa.me/5516999999999"
            target="_blank"
            className="fixed bottom-3 right-9 z-[900px]"
          >
            <FaWhatsapp className="h-12 w-12 text-green-500 duration-200 hover:text-orange-700" />
          </a>
        </div>
      )}
    </>
  );
}

export default AppLayout;
