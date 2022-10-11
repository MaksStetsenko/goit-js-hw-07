import { galleryItems } from "./gallery-items.js";

//===========================================================

const list = document.querySelector(".gallery");

//===========================================================

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
}

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});

gallery.on("show.simplelightbox", function () {});

//============================================================

list.addEventListener("click", selectImg);
