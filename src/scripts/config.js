// SECTION COLLECTION

const sections_collection = Array.from(document.querySelectorAll('.section'));

const laptop = 164 / 2;
const tablet = 124 / 2;
const mobile = 80 / 2;

let screenWidth = window.innerWidth;

function setInitialStyles() {
  sections_collection.slice(1, -1).forEach(section => {
    if (screenWidth < 768) {
      section.style.paddingBottom = mobile + 'px';
      section.style.paddingTop = mobile + 'px';
    } else if (screenWidth < 1280) {
      section.style.paddingBottom = tablet + 'px';
      section.style.paddingTop = tablet + 'px';
    } else {
      section.style.paddingBottom = laptop + 'px';
      section.style.paddingTop = laptop + 'px';
    }
  });
}

// Встановлення стилів при першому рендері
setInitialStyles();

// Додання слухача для зміни розміру
window.addEventListener('resize', () => {
  screenWidth = window.innerWidth;
  setInitialStyles();
});

// TO TOP BUTTON

const go_top_button = document.querySelector('.footer__to-top-box');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY >= 700) {
    go_top_button.classList.add('active');
  } else go_top_button.classList.remove('active');
});
