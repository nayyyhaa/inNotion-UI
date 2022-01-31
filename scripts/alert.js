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
