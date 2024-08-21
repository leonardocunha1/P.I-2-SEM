import TextMd from "@/ui/TextMd";
import { useState } from "react";
import fakedb from "../../../fakedb";
import { motion, AnimatePresence } from "framer-motion";

const filtered3Burgers = fakedb
  .filter((item) => item.category === "Burger")
  .slice(0, 3);

// console.log(filtered3Burgers);

function BestSellersBurgers() {
  const [activeTab, setActiveTab] = useState(filtered3Burgers[0].id);

  function handleTabChange(tabId) {
    setActiveTab(tabId);
  }

  return (
    <section className="bg-stone-900 px-5 py-10 text-primary-100">
      <TextMd label="Os preferidos da galera" />

        <motion.ul  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex flex-col justify-center gap-2 sm:flex-row sm:gap-5">
        {filtered3Burgers.map((item) => (
          <li
            key={item.id}
            onClick={() => handleTabChange(item.id)}
            className={`${activeTab === item.id ? "text-stone-900" : "text-primary-500"} px-5 py-2 flex font-bold text-center sm:text-start  relative`}
          >
            
            {item.id === activeTab ? (
                <motion.div className="absolute rounded-lg inset-0 z-0 bg-primary-600 flex" layoutId="activeTab" />
              ) : null}

              <p  className={`relative z-10 flex-1 rounded-full duration-300 hover:cursor-pointer sm:border-orange-500  `}>{item.name}</p>
          </li>
        ))}
          
        </motion.ul>

      <motion.div initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-5">
        <AnimatePresence mode="wait">
          {filtered3Burgers
            .filter((item) => item.id === activeTab)
            .map((item) => (
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
                  <h2 className="mb-1 text-center sm:text-start text-xl font-bold text-primary-200">
                    {item.name}
                  </h2>
                  <p className="mb-3 text-center text-primary-100 sm:text-start">
                    {item.description}
                  </p>
                  <p className="text-center text-primary-500 sm:text-start">
                    Preço: ${item.price[0]}
                  </p>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default BestSellersBurgers;
