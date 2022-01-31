/*-----------FORM VALIDATION---------------------*/

const validateForm = document.querySelectorAll(".validate-form");

validateForm.forEach((form) => {
  form.addEventListener(
    "submit",
    (e) => {
      if (!form.checkValidity()) e.preventDefault();
      e.preventDefault();
      form.classList.add("form-validated");
    },
    false
  );
});
