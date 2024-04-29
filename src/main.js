import axios from 'axios';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { renderImage } from './js/render-functions';
// import { fetchImage } from './js/pixabay-api';
import { fetchImg } from './js/pixabay-api';

const form = document.querySelector('.form');
const imagesFetch = document.querySelector('.imagesFetch');
const loader = document.querySelector('.loader');
const btnMore = document.querySelector('.btn');
const formInput = document.querySelector('.form-input');

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = formInput.value.trim();
  imagesFetch.innerHTML = '';
  if (inputValue === '') {
    iziToast.error({
      title: 'Error',
      message: 'Enter search images value',
      position: 'topRight',
    });
    return;
  }
  loader.style.display = 'block';
  fetchImg(inputValue)
    .then(response => {
      console.log('response: ', response);
      if (response.data.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      loader.style.display = 'none';
      renderImage(response.data.hits);

      btnMore.style.display = 'block';
      btnMore.addEventListener('click', () => {
        // const inputValue = formInput.value.trim();

        loader.style.display = 'block';
        fetchImg(inputValue)
          .then(response => {
            console.log('response2: ', response);
            loader.style.display = 'none';

            renderImage(response.data.hits);
          })
          .catch(error => {
            console.log(error);
          });
      });
    })
    .catch(error => {
      console.log(error);
    });

  formInput.value = '';
});
