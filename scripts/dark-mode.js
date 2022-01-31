/*----------DARK MODE------------*/
//moon icon
let darkModeElement = document.querySelector(".dark-mode");
let content = document.querySelector(".content");
let darkModeInStorage = false;

//function

const toogleDarkMode = (darkModeInStorage) => {
  content.classList.toggle("dark");
  console.log(darkModeInStorage, "t");
  darkModeInStorage = !darkModeInStorage;
  localStorage.setItem("darkModeInStorage", JSON.stringify(darkModeInStorage));
};

const applyDarkMode = (darkModeInStorage) => {
  if (darkModeInStorage) {
    content.classList.add("dark");
    darkModeInStorage = true;
  } else {
    content.classList.remove("dark");
    darkModeInStorage = false;
  }
  localStorage.setItem("darkModeInStorage", JSON.stringify(darkModeInStorage));
};

darkModeElement.addEventListener("click", () => {
  toogleDarkMode(darkModeInStorage);
});

const checkLocalStorage = () => {
  if (localStorage.getItem("darkModeInStorage") === null) {
    darkModeInStorage = false;
  } else {
    darkModeInStorage = JSON.parse(localStorage.getItem("darkModeInStorage"));
  }
  applyDarkMode(darkModeInStorage);
};

checkLocalStorage();
