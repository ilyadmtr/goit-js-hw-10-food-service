import galleryItems from "./templates/gallery-items.hbs"
import menuJson from "./menu.json"

console.log(galleryItems);
const markup = galleryItems({menuJson})
console.log(markup)

const jsMenu = document.querySelector('.js-menu')
jsMenu.insertAdjacentHTML("afterbegin", markup)
