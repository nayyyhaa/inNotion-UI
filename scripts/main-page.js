/*----------NAV BAR------------*/

//hamburger
let hamburgerBars = document.querySelector(".hamburger .fa");
let navItems = document.querySelector(".nav-items");
let links = navItems.querySelectorAll(".nav-items a");

//nav funtions
function toogleNavBar() {
  navItems.classList.toggle("show-nav");
  hamburgerBars.className = hamburgerBars.className == "fa fa-bars" ? "fa fa-times" : "fa fa-bars";
}

hamburgerBars.addEventListener("click", toogleNavBar);

links.forEach((link) => {
  link.addEventListener("click", toogleNavBar);
});

/*-----------HIGHLIGHT JS----------*/
document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("pre code").forEach((el) => {
    el.innerHTML = el.innerHTML
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
    hljs.highlightElement(el);
  });
});
