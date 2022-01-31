/*----------NAV BAR------------*/

//hamburger
let hamburgerBars = document.querySelector(".hamburger .fa");
let navItems = document.querySelector(".nav-items");
let links = navItems.querySelectorAll(".nav-items a");

//docs icon
let docsHamburger = document.querySelector(".docs-hamburger  .fa");
let sidebar = document.querySelector(".side-bar");
let sidebarClose = document.querySelector(".sidebar-close");

//nav funtions
function toogleNavBar() {
  navItems.classList.toggle("show-nav");
  hamburgerBars.className = hamburgerBars.className == "fa fa-bars" ? "fa fa-times" : "fa fa-bars";
  if (sidebar.classList.contains("show-sidebar")) toogleSidebar();
}

hamburgerBars.addEventListener("click", toogleNavBar);

links.forEach((link) => {
  link.addEventListener("click", toogleNavBar);
});

//docs icon functions
function toogleSidebar() {
  sidebar.classList.toggle("show-sidebar");
}

docsHamburger.addEventListener("click", toogleSidebar);
sidebarClose.addEventListener("click", toogleSidebar);

/*----------TRANSITION ALERT------------*/
const transitionAlert = document.querySelector(".transition-alert");
const demoClose = document.querySelector(".demo-close");
const reopenBtn = document.querySelector(".reopen-alert");

demoClose.addEventListener("click", () => {
  transitionAlert.classList.add("removeTransition");
  transitionAlert.addEventListener("transitionend", (e) => {
    transitionAlert.style.display = "none";
  });
});

reopenBtn.addEventListener("click", () => {
  transitionAlert.classList.remove("removeTransition");
  transitionAlert.style.display = "flex";
});
