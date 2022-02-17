/*-----------MODAL DEMO---------------------*/

const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelectorAll(".example-modal-close-btn");
const modalWrapper = document.querySelector(".modal-wrapper-example");

const openModal = () => {
  modalWrapper.classList.add("show-modal");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modalWrapper.classList.remove("show-modal");
  document.body.style.overflow = "visible";
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.forEach((closeBtn) => closeBtn.addEventListener("click", closeModal));
