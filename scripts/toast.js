/*-----------TOAST DEMO---------------------*/

const openToastBtn = document.querySelector(".open-toast-btn");
const closeToastBtn = document.querySelector(".close-toast-btn");
const toast = document.querySelector(".example-toast");

const openToast = () => {
  toast.classList.add("show-toast");
  setTimeout(() => {
    closeToast();
  }, 2000);
};

const closeToast = () => {
  toast.classList.remove("show-toast");
};

openToastBtn.addEventListener("click", openToast);
closeToastBtn.addEventListener("click", closeToast);
