import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imgCards = addImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgCards);
galleryContainer.addEventListener("click", onGalleryContainer);

function addImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryContainer(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const modal = basicLightbox.create(
    `<img src="${
      event.target.closest("img").dataset.source
    }" width="800" height="600">`
  );

  console.log(event.target);
  console.log(modal.show());
}

document.addEventListener("keydown", (evt) => {
  const pushEscape = evt.code === "Escape";
  const onModal = document.querySelector(".basicLightbox");
  if (!onModal) {
    return;
  }
  if (pushEscape) {
    onModal.remove();
  }
});
