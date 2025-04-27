const reviewsList = document.querySelector(".swiper-wrapper");
const reviewsBox = document.querySelector(".swiper");
const swiperButtonPrev = document.querySelector(".swiper-button-prev");
const swiperButtonNext = document.querySelector(".swiper-button-next");

export function createMarkup(response) {
    if (response === undefined) {
        reviewsBox.insertAdjacentHTML("beforeend", '<p class="error-message">Not found</p>');
        swiperButtonPrev.style.display = "none";
        swiperButtonNext.style.display = "none";
        reviewsList.style.display = "none";
    } else {
    const markup = response
    .map(({author, avatar_url, review}) => 
    `<li class="swiper-slide">
    <p class="review">${review}</p>
    <div class="reviewer">
       <img class="review-image" src="${avatar_url}" alt="${author}" width="40px" height="40px"/>
       <p class="autor-name">${author}</p>
    </div>
    </li>`)
    .join("");

    reviewsList.insertAdjacentHTML("beforeend", markup);
    }
}