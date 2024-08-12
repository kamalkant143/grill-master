let openNavBar = document.querySelector(".fa-bars");
let closeNavBar = document.querySelector(".fa-circle-xmark");
let navBar = document.querySelector(".nav-bar");
let list = document.querySelectorAll(".nav-bar li a ");

openNavBar.addEventListener("click", function () {
  navBar.classList.toggle("main-nav");
});

closeNavBar.addEventListener("click", function () {
  navBar.classList.remove("main-nav");
});

window.onscroll = function () {
  var header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};
