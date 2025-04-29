import { requestsPost } from './request-post.js';

const FORM = document.querySelector('.contact_form');
const EMAIL = document.querySelector('.mail_input');
const LABEL = document.querySelector('.email_label');

/* ERROR */

const errorContext = `
<span id='error-context' class='errorText'>Invalid name, try again</span>
`;

let error = false;

function getError(existingErrorElement) {
  if (error) {
    if (
      !existingErrorElement ||
      !existingErrorElement.classList.contains('errorText')
    ) {
      EMAIL.insertAdjacentHTML('afterend', errorContext);
    }
  } else if (
    existingErrorElement &&
    existingErrorElement.classList.contains('errorText')
  ) {
    existingErrorElement.remove();
  }
}

/* VALIDATE INPUT */

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/* INPUT */

EMAIL.addEventListener('input', () => {
  const existingErrorElement = EMAIL.nextElementSibling;

  const email = FORM.elements.email.value;

  if (validateEmail(email) == false) {
    error = true;

    EMAIL.classList.add('error');
    getError(existingErrorElement);

    EMAIL.classList.remove('done');
    LABEL.classList.remove('succses');
  } else {
    error = false;

    EMAIL.classList.add('done');
    LABEL.classList.add('succses');

    EMAIL.classList.remove('error');
    getError(existingErrorElement);
  }
});

/* FOCUS */

EMAIL.addEventListener('focus', () => {
  const existingErrorElement = EMAIL.nextElementSibling;
  if (error == true) {
    EMAIL.classList.add('error');
    getError(existingErrorElement);
  }
});

/* BLUR */

EMAIL.addEventListener('blur', () => {
  const existingErrorElement = EMAIL.nextElementSibling;
  EMAIL.classList.remove('done');
  EMAIL.classList.remove('error');
  LABEL.classList.remove('succses');

  if (
    existingErrorElement &&
    existingErrorElement.classList.contains('errorText')
  ) {
    existingErrorElement.remove();
  }
});

/* SUBMIT */

FORM.addEventListener('submit', async event => {
  event.preventDefault();

  const DATA = {
    email: FORM.elements.email.value,
    comment: FORM.elements.message.value,
  };

  try {
    const result = await requestsPost(DATA, FORM);
  } catch (error) {}
});
