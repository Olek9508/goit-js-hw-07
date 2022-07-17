import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const imagesMarkup = createGalleryItems(galleryItems);
galleryContainer.innerHTML = imagesMarkup;

function createGalleryItems(image) {
  return image
    .map(({ preview, original, description }) => {
      return `<li>
        <a class = "gallery__item" href ="${original}">
        <img class = "gallery__image"
        src = "${preview}";
        data-source = "${original}";
        alt = "${description}";
        />
        </a>
        </li>`;
    })
    .join('');
}

const imageContainer = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  animationSpeed: 250,
});

console.log(galleryItems);
