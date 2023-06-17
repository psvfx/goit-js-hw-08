// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

// 1. Create and render markup

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

const markupOfElementsGallery = galleryItems.map(
  galleryItems =>
    `<li class="gallery__item">
   <a class="gallery__link" href=${galleryItems.original}>
      <img class="gallery__image" src=${galleryItems.preview} alt=${galleryItems.description} />
   </a>
</li>`
);
// console.log(markupOfElementsGallery);

const ulEl = document.querySelector('ul');
ulEl.style.listStyle = 'none';

galleryEl.insertAdjacentHTML('beforeend', markupOfElementsGallery.join(''));

galleryEl.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
}

// 2. Adding caption display to images from the alt attribute:

new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
