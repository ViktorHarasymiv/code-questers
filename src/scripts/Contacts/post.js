import { requestsPost } from './request-post';

const FORM = document.querySelector('.work-contact');
const EMAIL = document.querySelector('.email-input');
const LABEL = document.querySelector('.email-label');


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

EMAIL.addEventListener('input', () => {
    //const email = FORM.elements.email.value;//
    const value = EMAIL.value.trim();

    if (validateEmail(value)) {
        EMAIL.style.color = 'black';
        EMAIL.classList.remove('error');
        EMAIL.classList.add('done');
        LABEL.classList.add('success');
  } else {
        EMAIL.style.color = 'red';
        EMAIL.classList.add('error');
        EMAIL.classList.remove('done');
        LABEL.classList.remove('success');
  }
});

EMAIL.addEventListener('blur', () => {
  EMAIL.classList.remove('done');
  EMAIL.classList.remove('error');
  EMAIL.style.color = 'black';
  ICON.innerHTML = '';
  ICON.style.display = 'none';
  LABEL.classList.remove('success');
});

FORM.addEventListener('submit', async event => {
  event.preventDefault();
  const DATA = {
    email: FORM.elements.email.value,
    comment: FORM.elements.textarea.value.trim(),
  };
  try {
    const result = await requestsPost(DATA, FORM);
  } catch (error) {
    console.error('Помилка при надсиланні форми:', error);
  }
});