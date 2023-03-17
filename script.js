// BURGER MENU
function burgerMenu() {
  const rotateBtn = document.querySelector("#burgerButton");
  const translate = document.querySelector("#myLinks");
  const fa = document.querySelector(".fa");
  const div = document.querySelector(".content");
  rotateBtn.addEventListener("click", function () {
    fa.classList.toggle("rotate");
    translate.classList.toggle("translate");
    div.classList.toggle("menu-open");
  });
}

burgerMenu();
