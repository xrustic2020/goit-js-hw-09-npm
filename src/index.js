import './scss/main.scss';

import refs from "./js/refs";

// Создание разметки

import { markup } from "./js/markup";

refs.gallery.insertAdjacentHTML("beforeend", markup.join(""));

// Функция открытия модального окна + O

import openImageModalWindow from "./js/modal-window";

// Слушатель события при нажатии на картинку из галереи

refs.gallery.addEventListener("click", openImageModalWindow);