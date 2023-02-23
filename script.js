const active = document.querySelector(".hamburger-img-active");
const inactive = document.querySelector(".hamburger-img-inactive");
const menu = document.querySelector(".hamburger-nav");
const main = document.querySelector("body");
const image = document.querySelector(".hero-mobile-photo");
const menuLinks = document.querySelectorAll(".hamburger-ul li a");

active.addEventListener("click", () => {
  menu.classList.toggle("show");
  image.classList.toggle("show");
  main.classList.toggle("show");
  menuLinks.forEach((menu) => {
    menu.classList.toggle("show");
  });
});

inactive.addEventListener("click", () => {
  menu.classList.toggle("show");
  image.classList.toggle("show");
  main.classList.toggle("show");
  menuLinks.forEach((menu) => {
    menu.classList.toggle("show");
  });
});
