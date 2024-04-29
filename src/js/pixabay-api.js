import axios from 'axios';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const btnMore = document.querySelector('.btn');
let page = 1;
export async function fetchImg(inputValue) {
  const APIKEY = '43173042-04092544e8d4f8f0c3df25e51';
  const searchParams = new URLSearchParams({
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
    per_page: 15,
    page: page,
  });
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${APIKEY}&q=${inputValue}&${searchParams}`
    );
    // console.log('response: ', response);
    // console.log('page: ', page);
    // console.log('response.totalHits: ', response.data.totalHits);
    if (page * 15 > response.data.totalHits) {
      // btnMore.innerHTML = 'no more posts to load';
      btnMore.style.display = 'none';

      return iziToast.error({
        position: 'topRight',
        message: "We're sorry, there are no more posts to load",
      });
    }
    page++;
    console.log('page: ', page);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
