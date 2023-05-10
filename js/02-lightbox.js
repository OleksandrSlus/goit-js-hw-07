import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector('.gallery');
const createItem = createItemCard(galleryItems);
function createItemCard(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`;
    }).join('');
}
galleryEl.insertAdjacentHTML('beforeend', createItem);
const options = { captionsData: 'alt', captionDelay: '250' };
const gallery = new SimpleLightbox('.gallery__link', options);