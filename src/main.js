// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { renderImage } from './js/render-functions';
import { fetchImage } from './js/pixabay-api';

const form = document.querySelector('.form');
const imagesFetch = document.querySelector('.imagesFetch');
const loader = document.querySelector('.loader');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formInput = document.querySelector('.form-input');
  const inputValue = formInput.value.trim();
  if (inputValue === '') {
    iziToast.error({
      title: 'Error',
      message: 'Enter search images value',
      position: 'topRight',
    });
    return;
  }
  loader.style.display = 'block';

  fetchImage(inputValue)
    .then(data => {
      const results = data.hits;
      if (results.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      loader.style.display = 'none';
      renderImage(results);
    })
    .catch(error => {
      console.log(error);
    });
  imagesFetch.innerHTML = '';
  formInput.value = '';
});
