// SECTION COLLECTION

const sections_collection = Array.from(document.querySelectorAll('.section'));

const laptop = 164 / 2;
const tablet = 124 / 2;
const mobile = 80 / 2;

window.addEventListener('resize', () => {
  let screenWidth = window.innerWidth;

  sections_collection.slice(1, -1).forEach(section => {
    if (screenWidth < 768) {
      section.style.marginBottom = mobile + 'px';
      section.style.marginTop = mobile + 'px';
    } else if (screenWidth < 1280) {
      section.style.marginBottom = tablet + 'px';
      section.style.marginTop = tablet + 'px';
    } else {
      section.style.marginBottom = laptop + 'px';
      section.style.marginTop = laptop + 'px';
    }
  });
});

// TO TOP BUTTON

const go_top_button = document.querySelector('.footer__to-top-box');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY >= 700) {
    go_top_button.classList.add('active');
  } else go_top_button.classList.remove('active');
});
