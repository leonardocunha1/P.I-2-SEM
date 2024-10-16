import { register } from "swiper/element/bundle";

register();

import "swiper/css";
import FeedbacksSliderItem from "./FeedbacksSliderItem";

export default function FeedbacksSlider({ comments }) {
  return (
    <swiper-container
      class="mySwiper-container"
      effect="cards"
      grab-cursor="true"
    >
      {comments.map((comment, index) => (
        <swiper-slide class="mySwiper-slide" key={index}>
          <FeedbacksSliderItem comment={comment} index={index} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
