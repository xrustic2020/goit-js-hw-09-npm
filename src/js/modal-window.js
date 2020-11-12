import refs from "./refs";
import images from "../data/gallery-items.js";

const closeModalWindow = function () {
  refs.modalImage.src = "";
  refs.lightbox.classList.remove("is-open");
  window.removeEventListener("keydown", onEscKeyPress);
  window.removeEventListener("keydown", onKeyboardEvent);
};

export default function openImageModalWindow(evt) {
  evt.preventDefault();

  refs.lightbox.classList.add("is-open");

  refs.modalImage.src = evt.target.dataset.source;
  refs.modalImage.alt = evt.target.alt;

  refs.buttonCloseModal.addEventListener("click", closeModalWindow, {
    once: true,
  });
  refs.overlay.addEventListener("click", closeModalWindow, { once: true });
  window.addEventListener("keydown", onEscKeyPress);
  window.addEventListener("keydown", onKeyboardEvent);
};

// Функция при нажатии на ESC

const onEscKeyPress = function (evt) {
  if (evt.code === 'Escape') {
    closeModalWindow();
  }
};

// Функция при нажатии на ArrowRight и ArrowLeft

const onKeyboardEvent = function (evt) {
  const index = images.indexOf(
    images.find(images => images.original === refs.modalImage.src),
  );

  if (evt.code === 'ArrowRight') {
    const within = index + 1 <= images.length - 1;

    if (within) {
      refs.modalImage.src = images[index + 1].original;
      refs.modalImage.alt = images[index + 1].description;
    }
  }

  if (evt.code === 'ArrowLeft') {
    const within = index - 1 >= 0;

    if (within) {
      refs.modalImage.src = images[index - 1].original;
      refs.modalImage.alt = images[index - 1].description;
    }
  }
};
