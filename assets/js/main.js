const hamBurger = document.querySelector(".sidebar__btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});