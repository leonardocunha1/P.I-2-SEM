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

      <div className="flex flex-col justify-center gap-2 sm:flex-row sm:gap-5">
        {filtered3Burgers.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabChange(item.id)}
            className={`${activeTab === item.id ? "bg-primary-500 text-stone-900" : "bg-stone-900 text-primary-500"} rounded-lg px-5 py-2 font-bold duration-300`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="mt-5">
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
                className="flex flex-col items-center justify-center gap-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto h-40 w-40 rounded-lg object-contain sm:h-48 sm:w-48"
                />
                <div className="max-w-72">
                  <h2 className="mb-1 text-xl font-bold text-primary-200 sm:text-center">
                    {item.name}
                  </h2>
                  <p className="mb-3 text-justify text-primary-100">
                    {item.description}
                  </p>
                  <p className="text-primary-500 sm:text-center">
                    Preço: ${item.price}
                  </p>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default BestSellersBurgers;
