import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");

//===========================================================

const markup = galleryItems
  .map(
    (galleryItems) =>
      `
      <div class="gallery__item">
        <a class="gallery__link">
            <img 
              class="gallery__image"
              src="${galleryItems.preview}" 
              data-source="${galleryItems.original}"
              alt="${galleryItems.description}"
            >
        </a>
      </div>
      `
  )
  .join("");

list.insertAdjacentHTML("afterbegin", markup);

//===========================================================

function selectImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  lightBox();
}

function lightBox() {
  const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute("data-source")}" width="1280">`);

  instance.show();

  //==== Close LightBox on Press Esc =========

  window.addEventListener("keydown", onEsckeyPress);
  function onEsckeyPress(event) {
    const escBtn = "Escape";
    const isPressEscKey = event.code === escBtn;

    if (isPressEscKey) {
      instance.close();
    }
  }
}

//===========================================================

list.addEventListener("click", selectImg);
