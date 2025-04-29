/*  SUCCESS MODAL */

import close_icon from '../../image/icons/close.svg';

const page = document.querySelector('body');

export const Modal = result => {
  const markUp = `
    <div class="overlay">
    <div class='success_modal text-center'>
       <button class='close_button' onClick='close'><img class='close_ico' src=${close_icon} alt='X'></button>
       <div class='success_wrapper'>
       <span class='success_title caption accent'>${result.title}</span>
       <p class='success_about'>${result.message}</p>
       </div>
     </div>
    </div>
    `;
  page.insertAdjacentHTML('beforeend', markUp);

  const close = document.querySelector('.close_button');
  const overlay = document.querySelector('.overlay');

  page.classList.add('lock');

  close.addEventListener('click', () => {
    overlay.remove();
    page.classList.remove('lock');
  });
  overlay.addEventListener('click', () => {
    overlay.remove();
    page.classList.remove('lock');
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      overlay.remove();
      page.classList.remove('lock');
    }
  });
};
