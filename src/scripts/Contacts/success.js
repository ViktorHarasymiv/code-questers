import close_icon from '../../image/icons/close.svg';

const page = document.querySelector('body');

export const Modal = result => {
    console.log('MODAL FUNCTION CALLED:', result);
     const markUp = `
        <div class="overlay">
            <div class='success_modal text-center'>
                <button class="close_button"><img src="${close_icon}" alt="X"></button>
                <div class='success_wrapper'>
                    <span class='success_title caption accent'>${result.title}</span>
                    <p class='success_about'>${result.message}</p>
                </div>
            </div>
        </div>
    `;
    page.insertAdjacentHTML('beforeend', markUp);
    const close = document.querySelector('.close_button');
     const modal = document.querySelector('.success_modal');
    const overlay = document.querySelector('.overlay');
    
    close.addEventListener('click', () => {
        overlay.remove();
    });
};
    