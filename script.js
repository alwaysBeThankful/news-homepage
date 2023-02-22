const active = document.querySelector(".hamburger-img-active");
const inactive = document.querySelector(".hamburger-img-inactive");
const menu = document.querySelector(".hamburger-ul");
const main = document.querySelector("body");

active.addEventListener("click", () => {
  menu.classList.toggle("show");
});

inactive.addEventListener("click", () => {
  menu.classList.toggle("show");
});

main.addEventListener("click", (event) => {
  const current = event.currentTarget;
  current.classList.toggle("show");
});
