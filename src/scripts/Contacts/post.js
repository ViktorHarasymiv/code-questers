import { requestsPost } from './request-post';

const FORM = document.querySelector('.work-contact');
const EMAIL = document.querySelector('.email-input');
const LABEL = document.querySelector('.email-label');

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

EMAIL.addEventListener('input', () => {
    const email = FORM.elements.email.value;

    if (validateEmail(email) === false) {
        EMAIL.classList.add('error');
        EMAIL.classList.remove('done');
        LABEL.classList.remove('success');
    } else {
        EMAIL.classList.add('done');
        LABEL.classList.add('success');
        EMAIL.classList.remove('error');
    }
});
EMAIL.addEventListener('blur', () => {
    EMAIL.classList.remove('done');
    EMAIL.classList.remove('error');
    LABEL.classList.remove('success');
});

FORM.addEventListener('submit', async event => {
    event.preventDefault();
    const DATA = {
        email: FORM.elements.email.value,
        comment: FORM.elements.message.value.trim(),
    };
    try {
        const result = await requestsPost(DATA, FORM);
    } catch (error) {
        console.error('Помилка при надсиланні форми:', error);
    }
});


    