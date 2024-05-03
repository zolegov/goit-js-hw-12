import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderImage } from './js/render-functions';
import { fetchImg } from './js/pixabay-api';

const form = document.querySelector('.form');
const imagesFetch = document.querySelector('.imagesFetch');
const loader = document.querySelector('.loader');
const btnMore = document.querySelector('.btn');
const formInput = document.querySelector('.form-input');
let page = 1;

form.addEventListener('submit', async e => {
  e.preventDefault();

  const inputValue = formInput.value.trim();
  imagesFetch.innerHTML = '';

  if (inputValue === '') {
    iziToast.error({
      title: 'Error',
      message: 'Enter search images value',
      position: 'topRight',
    });
    btnMore.style.display = 'none';
    return;
  }

  try {
    loader.style.display = 'block';
    page = 1;
    const data = await fetchImg(inputValue, page);
    if (data.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    loader.style.display = 'none';
    renderImage(data.hits);
    btnMore.style.display = 'block';
    if (data.hits.length < 15) {
      btnMore.style.display = 'none';
      iziToast.error({
        position: 'topRight',
        message: "We're sorry, there are no more posts to load",
      });
    }
    btnMore.dataset.inputValue = inputValue;
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again!',
      position: 'topRight',
    });
  }

  formInput.value = '';
});

btnMore.addEventListener('click', async e => {
  e.preventDefault();
  page++;
  loader.style.display = 'block';

  try {
    const inputValue = e.currentTarget.dataset.inputValue;
    const data = await fetchImg(inputValue, page);

    loader.style.display = 'none';
    renderImage(data.hits);

    const imgBoxes = document.querySelectorAll('.imagesFetch-item');
    const imgBoxHeight = imgBoxes[0].getBoundingClientRect();

    window.scrollBy({
      top: imgBoxHeight.height * 2,
      behavior: 'smooth',
    });

    if (data.hits.length < 15) {
      btnMore.style.display = 'none';
      iziToast.error({
        position: 'topRight',
        message: "We're sorry, there are no more posts to load",
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again!',
      position: 'topRight',
    });
    loader.style.display = 'none';
  }
});
