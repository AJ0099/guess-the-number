const form = document.querySelector("form");
const wrapper = document.querySelector("#wrapper");
const guesses = document.querySelector(".guesses");
const guessesRemaining = document.querySelector(".lastResult");
const guessLowOrHi = document.querySelector(".lowOrHi");
const finalResult = document.querySelector(".finalResult");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let arr = [];
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
let number = randomNumber();
const button = document.createElement("button");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (parseInt(guessField.value) === number) {
    finalResult.textContent = "You guessed the right number.";
    guessLowOrHi.textContent = "";
    guessesRemaining.textContent--;
    guessField.setAttribute("disabled", "");
    guessSubmit.setAttribute("disabled", "");
    arr.push(guessField.value);
    guesses.textContent = arr;
    button.textContent = "Guess Again";
    wrapper.appendChild(button);
  } else if (parseInt(guessField.value) > number) {
    guessLowOrHi.textContent = "Guessed no is to High.";
    guessesRemaining.textContent--;
    arr.push(guessField.value);
    guesses.textContent = arr;
  } else {
    guessLowOrHi.textContent = "Guessed no is to Low.";
    guessesRemaining.textContent--;
    arr.push(guessField.value);
    guesses.textContent = arr;
  }
  if (parseInt(guessesRemaining.textContent) === 0) {
    guessField.setAttribute("disabled", "");
    guessSubmit.setAttribute("disabled", "");
    guessLowOrHi.textContent = "";
    if (parseInt(guessField.value) === number) {
      finalResult.textContent = "You guessed the right number.";
    } else {
      finalResult.textContent = `You reached the maximum no of guesses the right no is ${number}.`;
    }
    button.textContent = "Guess Again";
    wrapper.appendChild(button);
  }
});

button.addEventListener("click", () => {
  guessField.value = "";
  guessesRemaining.textContent = 10;
  guesses.textContent = "";
  finalResult.textContent = "";
  guessField.removeAttribute("disabled");
  guessSubmit.removeAttribute("disabled");
  arr = [];
  number = randomNumber();
  wrapper.removeChild(button);
});
