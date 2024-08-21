import Bebida from "/images/bebidas/Bebida1.png";
import Burger from "/images/burgers/Burger1.png";
import Sobremesa from "/images/sobremesas/Sobremesa1.png";
import MenuItems from "./MenuItems";
import TextMd from "../../ui/TextMd";

function MenuHome() {
  return (
    <section className="space-y-3 bg-primary-100 py-10">
      <TextMd label="Menu" />
      <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-center sm:gap-20">
        <MenuItems image={Burger} label="Burgers" />
        <MenuItems image={Sobremesa} label="Sobremesas" />
        <MenuItems image={Bebida} label="Bebidas" />
      </div>
    </section>
  );
}

export default MenuHome;
