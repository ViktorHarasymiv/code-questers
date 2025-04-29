import axios from 'axios';
import iziToast from 'izitoast';

import { Modal } from './success.js';

export async function requestsPost(DATA, FORM) {
  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      DATA,
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (response.status === 201 || response.status === 200) {
      Modal(response.data);
      FORM.reset();
    }
  } catch (error) {
    if (error.response) {
      // Сервер повернув статус помилки
      iziToast.error({
        message: `Помилка: ${error.response.data.message}`,
        position: 'topRight',
        closeOnClick: true,
        color: `var(--error)`,
        messageColor: `#fafafb`,
        backgroundColor: '#ef4040',
      });
    } else {
      // Помилка з'єднання з сервером
      iziToast.error({
        message: 'Помилка зʼєднання з сервером. Спробуйте ще раз.',
        position: 'topRight',
        closeOnClick: true,
        color: `var(--error)`,
        messageColor: `#fafafb`,
        backgroundColor: '#ef4040',
      });
    }
  }
}
