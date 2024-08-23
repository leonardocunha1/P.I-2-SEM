import "swiper/css";

import BurgerGold from "/images/premios/burger-gold.png";
import DeliciousBurger from "/images/premios/delicious.png";
import Medal from "/images/premios/medal.png";
import TextMd from "@/ui/TextMd";

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
    <section className="bg-primary-50 px-5 pb-20 pt-10">
      <div className="mx-auto mt-8 max-w-60 text-stone-900 md:max-w-xl lg:max-w-5xl">
        <TextMd label="Premiações" />
        <swiper-container
          class="mySliderAwards-container"
          loop="true"
          pagination="true"
          pagination-clickable="true"
          autoplay-delay="3000"
          autoplay-disable-on-interaction="true"
          slides-per-view="1"
          style={{
            "--swiper-pagination-color": "#fdba74",
            "--swiper-pagination-bullet-size": "10px",
            // "--swiper-pagination-bullet-inactive-color": "#999999",
            // "--swiper-pagination-bullet-inactive-opacity": "1",
            //   "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          {awards.map((award, index) => (
            <swiper-slide class="mySliderAwards-slide" key={index}>
              <div className="rounded-full bg-stone-900 p-5">
                <img
                  src={award.image_url}
                  alt={award.name}
                  className="h-40 w-full rounded-xl object-contain"
                />
                <h3 className="mt-3 text-lg font-semibold">{award.name}</h3>
                <p className="mt-2 text-sm">{award.description}</p>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
}

export default SliderAwards;
