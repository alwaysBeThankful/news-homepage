const active = document.querySelector(".hamburger-img-active");
const inactive = document.querySelector(".hamburger-img-inactive");
const menu = document.querySelector(".hamburger-ul");

const x = () => {
  active.addEventListener("click", () => {
    menu.classList.add("show");
  });

  inactive.addEventListener("click", () => {
    menu.classList.remove("show");
  });
};

x();
