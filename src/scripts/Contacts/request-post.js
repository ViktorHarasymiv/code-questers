import axios from 'axios';
import {Modal} from './success.js';
export async function requestsPost(DATA, FORM) {
    try {
        const response = await axios.post('https://portfolio-js.b.goit.study/api/requests',
            DATA,
            { headers: { 'Content-Type': 'application/json' } }
        );
        if (response.status === 201 || response.status === 200) {
            Modal(response.data);
            FORM.reset();
        }
    } catch (error) {
        if (error.response) {
            console.error('Помилка:', error.response.data.message);
            alert('Помилка:${error.response.data.message}');
        } else {
            console.error('Помилка зєдняння з сервером');
            alert('Помилка зєдняння з сервером. Спробуйте ще раз');
        }
    }
}
            