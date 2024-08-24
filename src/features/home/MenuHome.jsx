import Bebida from "/images/bebidas/Bebida1.png";
import Burger from "/images/burgers/Burger1.png";
import Sobremesa from "/images/sobremesas/Sobremesa1.png";
import MenuItems from "./MenuItems";
import { motion } from "framer-motion";
// import TextMd from "../../ui/TextMd";

function MenuHome() {
  return (
    <section className="mb-10 space-y-3 md:order-2 md:mb-0 md:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-7 sm:flex-row sm:justify-center sm:gap-20"
      >
        <MenuItems image={Burger} label="Burgers" />
        <MenuItems image={Sobremesa} label="Sobremesas" />
        <MenuItems image={Bebida} label="Bebidas" />
      </motion.div>
    </section>
  );
}

export default MenuHome;
