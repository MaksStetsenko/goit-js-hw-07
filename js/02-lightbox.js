import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

console.log(galleryItems);

const markup = galleryItems
  .map(
    (galleryItems) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${galleryItems.original}">
                <img  
                    class="gallery__image"
                    src="${galleryItems.preview}" 
                    alt="${galleryItems.description}"
                >
        </a>
        </li>
      `
  )
  .join("");

list.insertAdjacentHTML("afterbegin", markup);

//=========================================================

function selectImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  window.addEventListener("keydown", onEsckeyPress);
  function onEsckeyPress(event) {
    const escBtn = "Escape";
    const isPressEscKey = event.code === escBtn;

    if (isPressEscKey) {
      instance.close();
    }
  }
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});
gallery.on("show.simplelightbox", function () {});
