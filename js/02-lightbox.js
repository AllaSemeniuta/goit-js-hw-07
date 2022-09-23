import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs= {
    galleryBox: document.querySelector('.gallery')
}

createGalleryItemsMarkup (galleryItems)




function galleryItemsTemplate ({preview, original, description}) {
    return `<li><a class="gallery__item" href="${original}">
     <img  class="gallery__image" src="${preview}" alt="${description} " title="${description}"/>
    </a></li>`

}

function createGalleryItemsMarkup (items) { 
    const galleryItems = items.map(item => galleryItemsTemplate(item)).join('')

    refs.galleryBox.innerHTML = '';
    refs.galleryBox.insertAdjacentHTML('beforeend', galleryItems);
}


var lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250});

