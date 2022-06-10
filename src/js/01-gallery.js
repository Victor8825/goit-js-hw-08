import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryContainerRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryItemMarkup(gallery) {
 return gallery.map( ({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       alt="${description}"
       title='dfdsfsdfsdf'
     />
   </a>
 `;
 })
 .join("")
}

const modalGalleryOptions = {
  captionsData: 'alt',
  captionDelay: 250
}
const modalGallery = new SimpleLightbox(".gallery a", modalGalleryOptions );
