const ImageElement = document.querySelector(".image-container");
const PrevEle = document.getElementById("prev");
const nextEle = document.getElementById("next");

let x = 0; //angle
let timer;

function updateGallery() {
  ImageElement.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x + 45;
    updateGallery();
  }, 3000);
}
window.addEventListener("load", () => {
  updateGallery();
});

nextEle.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

PrevEle.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});
