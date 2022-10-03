var selectedValue = 0;
const cardContainer = document.querySelector(".card-container");
const resultContainer = document.querySelector(".card-result-container");
const resultNumberTag = document.querySelector("#result-number");

const selectedButton = document.querySelectorAll(".button-circle");
selectedButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedValue = event.target.value;
  });
});

const submitButton = document.querySelector("#triggerSubmit");
submitButton.addEventListener("click", () => {
  cardContainer.style.display = "none";
  resultContainer.style.display = "flex";
  resultNumberTag.innerHTML = selectedValue;
});
