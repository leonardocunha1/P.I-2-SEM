import TextMd from "@/ui/TextMd";
import FeedbacksSlider from "./FeedbacksSlider";

import { motion } from "framer-motion";

import ShapeBGTop from "/shape-home-top.svg";

const fakeComments = [
  {
    name: "João",
    description: "A melhor hamburgueria da cidade!",
    image_url: "/images/img-home/pessoas/user-1.jpg",
  },
  {
    name: "Maria",
    description: "O atendimento é excelente!",
    image_url: "/images/img-home/pessoas/user-2.jpg",
  },
  {
    name: "José",
    description: "Os lanches são maravilhosos!",
    image_url: "/images/img-home/pessoas/user-3.jpg",
  },
];

function Feedbacks() {
  return (
    <section className="relative bg-primary-50 pb-12 pt-14 sm:pt-16 md:pt-20 lg:pt-28 xl:pt-32">
      <div className="px-5">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <TextMd label="Feedbacks" />
          <FeedbacksSlider comments={fakeComments} />
        </motion.div>
      </div>
      <img src={ShapeBGTop} alt="Shape" className="absolute top-0" />
    </section>
  );
}

export default Feedbacks;
