import { register } from "swiper/element/bundle";

register();

import "swiper/css";

export default function Slider({ comments }) {
  return (
    <swiper-container
      class="mySwiper-container"
      effect="cards"
      grab-cursor="true"
    >
      {comments.map((comment, index) => (
        <swiper-slide class="mySwiper-slide" key={index}>
          <div className="rounded-lg px-5 py-2">
            <div className="flex flex-col items-center gap-3">
              <img
                src={comment.image_url}
                alt={comment.name}
                className="h-32 w-32 rounded-lg"
              />
              <div>
                <h3
                  className={`mb-2 text-center text-lg font-bold tracking-wider text-primary-200 ${
                    index % 2 === 0 ? "text-stone-900" : ""
                  }`}
                >
                  {comment.name}
                </h3>

                <p className="text-center text-sm text-primary-50">
                  {comment.description}
                </p>
              </div>
            </div>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
