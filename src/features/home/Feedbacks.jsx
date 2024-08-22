import TextMd from "@/ui/TextMd";
import Slider from "./Slider";
import { motion } from "framer-motion";

const fakeComments = [
  {
    name: "João",
    description: "A melhor hamburgueria da cidade!",
    image_url: "/images/pessoas/user-1.jpg",
  },
  {
    name: "Maria",
    description: "O atendimento é excelente!",
    image_url: "/images/pessoas/user-2.jpg",
  },
  {
    name: "José",
    description: "Os lanches são maravilhosos!",
    image_url: "/images/pessoas/user-3.jpg",
  },
];

function Feedbacks() {
  return (
    <section className="bg-primary-100 px-5 py-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <TextMd label="Feedbacks" />
        <Slider comments={fakeComments} />
      </motion.div>
    </section>
  );
}

export default Feedbacks;
