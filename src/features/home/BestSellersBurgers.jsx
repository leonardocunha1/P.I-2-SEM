import TextMd from "@/ui/TextMd";
import { useState } from "react";
import fakedb from "../../../fakedb";
import { motion, AnimatePresence } from "framer-motion";
import TabItem from "@/ui/TabItem";
import BestSellersBurgersItem from "./BestSellersBurgersItem";

const filtered3Burgers = fakedb
  .filter((item) => item.category === "Burger")
  .slice(0, 3);

function BestSellersBurgers() {
  const [activeTab, setActiveTab] = useState(filtered3Burgers[0].id);

  function handleTabChange(tabId) {
    setActiveTab(tabId);
  }

  return (
    <section className="bg-stone-900 px-5 py-10 text-primary-100">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <TextMd label="Os preferidos da galera" />

        <ul className="flex flex-col justify-center gap-2 sm:flex-row sm:gap-5">
          {filtered3Burgers.map((item) => (
            <TabItem
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              activeTab={activeTab}
              item={item}
            />
          ))}
        </ul>

        <div className="mt-5">
          <AnimatePresence mode="wait">
            {filtered3Burgers
              .filter((item) => item.id === activeTab)
              .map((item) => (
                <BestSellersBurgersItem key={item.id} item={item} />
              ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default BestSellersBurgers;
