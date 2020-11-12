export default {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector("div.lightbox"),
  modalImage: document.querySelector(".lightbox__image"),
  buttonCloseModal: document.querySelector(
    'button[data-action="close-lightbox"]'
  ),
  overlay: document.querySelector(".lightbox__overlay"),
  galleryImage: document.querySelectorAll(".gallery__image"),
};
