import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function initSwiper() {
  new Swiper('.swiper', {
    modules: [Navigation, Keyboard],
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
      1280: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    },
  });
}
