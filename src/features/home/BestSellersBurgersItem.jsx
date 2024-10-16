import { formatCurrency } from "@/utils/helpers";
import { motion } from "framer-motion";

function BestSellersBurgersItem({ item }) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center sm:flex-row sm:gap-5"
    >
      <img
        src={item.image}
        alt={item.name}
        className="mb-3 h-40 w-40 rounded-lg object-contain object-bottom sm:h-48 sm:w-48 lg:h-52 lg:w-52"
      />
      <div className="flex min-h-32 max-w-72 flex-col sm:max-w-96 sm:justify-center">
        <h2 className="mb-1 text-center text-xl font-bold text-primary-200 sm:text-start">
          {item.name}
        </h2>
        <p className="mb-3 text-center text-primary-100 sm:text-start">
          {item.description}
        </p>
        <p className="text-center text-primary-500 sm:text-start">
          Preço: {formatCurrency(item.price)}
        </p>
      </div>
    </motion.div>
  );
}

export default BestSellersBurgersItem;
