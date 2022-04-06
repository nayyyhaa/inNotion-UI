/*---------SLIDER DEMO------------*/
const slider = document.querySelector(".slider");
const output = document.querySelector(".output-slider-value");
output.innerHTML = slider.value; // Display the default slider value

slider.addEventListener("input", (e) => {
  output.innerHTML = e.target.value;
});
