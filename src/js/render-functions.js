// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
let gallery = new SimpleLightbox('.gallery a');
const imagesFetch = document.querySelector('.imagesFetch');
export function renderImage(results) {
  const markup = results.reduce((html, result) => {
    return (html += `
          <li class="imagesFetch-item">
          <div class="gallery">
                 <a href="${result.largeImageURL}">
                    <img src="${result.webformatURL}" alt="1"/>
                 </a>
          </div>
          <div class="imagesFetch-item-description">
              <ul class="description-list">
              <li class="description-list-item">
                  <p class="item-name">Likes</p>
                  <span>${result.likes}</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Views</p>
                  <span>${result.views}900290</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Comments</p>
                  <span>${result.comments}229</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Downloads</p>
                  <span>${result.downloads}610937</span>
              </li>
              </ul>
          </div>
          </li>  `);
  }, '');
  imagesFetch.insertAdjacentHTML('beforeend', markup);

  gallery.refresh();
}
