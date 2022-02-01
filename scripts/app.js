/*----------NAV BAR + DOCS------------*/

//hamburger
let hamburgerBars = document.querySelector(".hamburger .fa");
let navItems = document.querySelector(".nav-items");
let links = navItems.querySelectorAll(".nav-items a");

//docs icon
let docsHamburger = document.querySelector(".docs-hamburger  .fa");
let sidebar = document.querySelector(".side-bar");
let sidebarClose = document.querySelector(".sidebar-close");

//nav funtions
const toogleNavBar = () => {
  navItems.classList.toggle("show-nav");
  hamburgerBars.className = hamburgerBars.className == "fa fa-bars" ? "fa fa-times" : "fa fa-bars";
  if (sidebar.classList.contains("show-sidebar")) toogleSidebar();
};

hamburgerBars.addEventListener("click", toogleNavBar);

links.forEach((link) => {
  link.addEventListener("click", toogleNavBar);
});

//docs icon functions
const toogleSidebar = () => {
  sidebar.classList.toggle("show-sidebar");
};

docsHamburger.addEventListener("click", toogleSidebar);
sidebarClose.addEventListener("click", toogleSidebar);

/*-----------HIGHLIGHT JS----------*/
document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("pre code.html").forEach((el) => {
    el.innerHTML = el.innerHTML
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
    hljs.highlightElement(el);
  });
  document.querySelectorAll("pre code.javascript").forEach((el) => {
    hljs.highlightElement(el);
  });
});
