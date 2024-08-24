import TextMd from "@/ui/TextMd";
import ImgAmbiente from "/images/restaurante/ambiente.png";
import ImgExerna from "/images/restaurante/externa.png";
import ImgFachada from "/images/restaurante/fachada.jpg";

import { motion } from "framer-motion";

function Environment() {
  return (
    <section className="-mt-20 bg-stone-900 px-5 py-10 text-primary-100">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20"
      >
        <TextMd label="Ambiente" />
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2 md:grid-rows-2 md:gap-0">
          <img
            src={ImgAmbiente}
            alt=""
            className="h-[230px] w-full object-cover object-bottom md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 md:h-[300px]"
          />
          <img
            src={ImgExerna}
            alt=""
            className="h-[230px] w-full object-cover object-bottom md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:h-[300px]"
          />
          <img
            src={ImgFachada}
            alt=""
            className="h-[230px] w-full object-cover object-bottom md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 md:h-[600px]"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Environment;
