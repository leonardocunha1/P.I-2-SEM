import Bebida from "/images/bebidas/cerveja.png";
import Burger from "/images/burgers/Burger8.png";
import Sobremesa from "/images/sobremesas/frapuccino.png";
import DifferentialDiinersCategoriesItem from "./DifferentialDiinersCategoriesItem";
import { motion } from "framer-motion";

function DifferentialDiinersCategories() {
  return (
    <section className="mb-10 space-y-3 md:order-2 md:mb-0 md:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-7 sm:flex-row sm:justify-center sm:gap-20"
      >
        <DifferentialDiinersCategoriesItem image={Burger} label="Burgers" />
        <DifferentialDiinersCategoriesItem
          image={Sobremesa}
          label="Sobremesas"
        />
        <DifferentialDiinersCategoriesItem image={Bebida} label="Bebidas" />
      </motion.div>
    </section>
  );
}

export default DifferentialDiinersCategories;
