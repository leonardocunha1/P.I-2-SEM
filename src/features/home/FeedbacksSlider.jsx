import { register } from "swiper/element/bundle";

register();

import "swiper/css";
import FeedbacksSliderItem from "./FeedbacksSliderItem";

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

export default function FeedbacksSlider() {
  return (
    <swiper-container
      class="mySwiper-container"
      effect="cards"
      grab-cursor="true"
    >
      {fakeComments.map((comment, index) => (
        <swiper-slide class="mySwiper-slide" key={index}>
          <FeedbacksSliderItem comment={comment} index={index} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
