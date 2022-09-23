import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs= {
    galleryBox: document.querySelector('.gallery')
}

createGalleryItemsMarkup (galleryItems)

refs.galleryBox.addEventListener('click', onImageClick)

let instance;

function galleryItemsTemplate ({preview, original, description}) {
    return `<div class="gallery__item">
     <a class="gallery__link" href="${original}">
    <img
    loading=lazy
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`

}

function createGalleryItemsMarkup (items) { 
    const galleryItems = items.map(item => galleryItemsTemplate(item)).join('')

    refs.galleryBox.innerHTML = '';
    refs.galleryBox.insertAdjacentHTML('beforeend', galleryItems);
}

function onImageClick(event) {
    event.preventDefault()
    refs.galleryBox.addEventListener('keydown', onImageCloseKeydown )

    if(event.target.nodeName !== "IMG") {
    return
    }

    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`
    )

    instance.show()

    

}

function onImageCloseKeydown(event) {

    if( event.code === "Escape") {

        instance.close()
        refs.galleryBox.removeEventListener('keydown', onImageCloseKeydown )

        }
}


