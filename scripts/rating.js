/*-----------RATINGS DEMO---------------------*/

const ratingInputs = document.querySelectorAll(".rating-example input");
let ratingOutput = document.querySelector(".rating-output");

ratingInputs.forEach((ratingInput, idx) => {
  ratingInput.addEventListener("click", () => submitRating(idx));
});

const submitRating = (index) => {
  ratingsTotal = 0;
  for (let i = 0; i < ratingInputs.length; i++) {
    ratingInputs[i].checked = i <= index ? true : false;
    if (i <= index) ratingsTotal++;
  }
  ratingOutput.innerText = `You've given ${ratingsTotal} star rating.`;
};
