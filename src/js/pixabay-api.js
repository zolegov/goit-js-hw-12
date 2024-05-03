import axios from 'axios';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// let page = 1;
export async function fetchImg(inputValue, page) {
  const APIKEY = '43173042-04092544e8d4f8f0c3df25e51';
  const searchParams = new URLSearchParams({
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
    per_page: 15,
    page: page,
  });

  const { data } = await axios.get(
    `https://pixabay.com/api/?key=${APIKEY}&q=${inputValue}&${searchParams}`
  );

  return data;
}
