import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

export function initSwiper() {
  new Swiper('.swiper', {
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    slidesPerView: 1, 
    spaceBetween: 32, 
    breakpoints: {
        768: {          
          slidesPerView: 2,
        },
    },
});
}
