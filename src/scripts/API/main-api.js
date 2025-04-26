import { createMarkup } from "./render-function";
import { fetchData } from "./pixabay-api";
import { initSwiper } from "./swiper";

window.addEventListener('DOMContentLoaded', reviews);

async function reviews() {
  const response = await fetchData();
  createMarkup(response);
  initSwiper();
}