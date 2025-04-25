import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export async function fetchData() {
    try {const response = await axios.get(`https://portfolio-js.b.goit.study/api/reviews1`);
    return response.data;
    } catch (error) {
        iziToast.error({
            message: "Sorry, something went wrong. Please try again later.",
            position: "topRight",
            closeOnClick: true,
            color: `#fafafb`,
            messageColor: `#fafafb`,
            backgroundColor: '#ef4040',
        })
    }
}