import Home from "@/pages/Home";
import Bebida from "../../../public/images/bebidas/Bebida1.png";
import Burger from "../../../public/images/burgers/Burger1.png";
import Sobremesa from "../../../public/images/sobremesas/Sobremesa1.png";
import MenuItems from "./MenuItems";

function MenuHome() {
  return (
    <section className="mt-10 space-y-3">
      <Home label="Menu" />
      <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-center sm:gap-20">
        <MenuItems image={Burger} label="Burgers" />
        <MenuItems image={Sobremesa} label="Sobremesas" />
        <MenuItems image={Bebida} label="Bebidas" />
      </div>
    </section>
  );
}

export default MenuHome;
