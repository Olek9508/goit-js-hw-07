import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
// galleryContainer.addEventListener('click', onUrlGet);
galleryContainer.addEventListener('click', onModalCreate);

const imagesMarkup = createGalleryItems(galleryItems);
galleryContainer.innerHTML = imagesMarkup;

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class= "gallery__item">
        <a class = "gallery__link" href ="${original}">
        <img class = "gallery__image"
        src = "${preview}";
        data-source = "${original}";
        alt = "${description}";
        />
        </a>
        </div>`;
    })
    .join('');
}

function onModalCreate(event) {
  event.preventDefault();
  const getDataSetImage = event.target.dataset.source;
  if (!getDataSetImage) {
    return;
  }

  const modal = basicLightbox.create(
    `
    <img src="${getDataSetImage}" width="800" height="600">
`,
    {
      onShow: () => window.addEventListener('keydown', onEscClose),
      onClose: () => window.removeEventListener('keydown', onEscClose),
    },
  );

  modal.show();

  function onEscClose(event) {
    if (event.code === 'Escape') {
      modal.close();
    }
  }
}

console.log(galleryItems);
