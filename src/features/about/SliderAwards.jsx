import "swiper/css";

import BurgerGold from "/images/img-about/premios/burger-gold.png";
import DeliciousBurger from "/images/img-about/premios/delicious.png";
import Medal from "/images/img-about/premios/medal.png";
import TextMd from "@/ui/TextMd";

import { motion } from "framer-motion";

const awards = [
  {
    name: "Melhor hamburgueria de Franca - 2021",
    description:
      "Prêmio da Revista BestBurgers. Este prêmio é o reconhecimento do nosso trabalho e dedicação. Agradecemos a todos os nossos clientes por nos ajudarem a chegar até aqui!",
    image_url: BurgerGold,
  },
  {
    name: "Melhor atendimento - 2021",
    description:
      "O prêmio 'Atendimento de Excelência' foi concedido pelo Guia Turístico à Diiner's Burgers em reconhecimento ao nosso compromisso com a satisfação dos clientes.",
    image_url: DeliciousBurger,
  },
  {
    name: "Criatividade e inovação - 2020",
    description:
      "O prêmio 'Criatividade em Combinações' foi concedido à Diiner's Burgers em reconhecimento à sua originalidade e excelência na arte de montar hambúrgueres.",
    image_url: Medal,
  },
];

function SliderAwards() {
  return (
    <section className="bg-primary-50 px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto text-stone-900"
      >
        <TextMd label="Premiações" />
        <swiper-container
          class="mySliderAwards-container"
          loop="true"
          space-between="10"
          pagination="true"
          pagination-clickable="true"
          autoplay-delay="3000"
          autoplay-disable-on-interaction="true"
          slides-per-view="1"
          style={{
            "--swiper-pagination-color": "#1c1917",
            "--swiper-pagination-bullet-size": "10px",
            // "--swiper-pagination-bullet-inactive-color": "#999999",
            // "--swiper-pagination-bullet-inactive-opacity": "1",
            //   "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          {awards.map((award, index) => (
            <swiper-slide class="mySliderAwards-slide" key={index}>
              <div className="flex h-[430px] flex-col justify-center rounded-xl bg-stone-900 px-5 pb-10 pt-5 sm:h-auto">
                <img
                  src={award.image_url}
                  alt={award.name}
                  className="h-40 w-full object-contain"
                />
                <h3 className="mt-3 text-center text-lg font-semibold text-primary-100">
                  {award.name}
                </h3>
                <p className="mt-2 text-center text-sm text-primary-50">
                  {award.description}
                </p>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </motion.div>
    </section>
  );
}

export default SliderAwards;
