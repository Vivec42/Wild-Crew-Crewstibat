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

const themeToggle = document.querySelector("#theme-toggle");
const body = document.querySelector("body");
const ul = document.querySelector("#myLinks");
const slider = document.querySelector(".slider");
const intro = document.querySelector(".intro");
const label = document.querySelector("label");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  ul.classList.toggle("dark-mode");
  slider.classList.toggle("dark-mode");
  intro?.classList.toggle("dark-mode");
  label?.classList.toggle("dark-mode");

  const theme = body.classList.contains("dark-mode") ? "DARK" : "LIGHT";
  localStorage.setItem("pageTheme", JSON.stringify(theme));

  if (theme === "DARK") {
    ul.classList.add("dark-mode");
    slider.classList.add("dark-mode");
    intro.classList.add("dark-mode");
    label?.classList.add("dark-mode");
  } else {
    ul.classList.remove("dark-mode");
    slider.classList.remove("dark-mode");
    intro.classList.remove("dark-mode");
    label?.classList.remove("dark-mode");
  }
});

const savedTheme = JSON.parse(localStorage.getItem("pageTheme"));
if (savedTheme === "DARK") {
  body.classList.add("dark-mode");
  ul.classList.add("dark-mode");
  slider.classList.add("dark-mode");
  intro?.classList.add("dark-mode");
  label?.classList.add("dark-mode");
  themeToggle.checked = true;
}
