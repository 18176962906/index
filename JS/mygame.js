var randomNumber=Math.floor(Math.random()*101);
// console.log(randomNumber);

var guessField = document.querySelector('.guessField');
console.log(guessField);
var guesses = document.querySelector('.guesses');
console.log(guesses);
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
// console.log(lowOrHi);
var guessSubmit = document.querySelector('.guessSubmit');

var guessCountn=1;
var resetButton;
guessField.focus();

function  checkGuess(){
  guesses.innerHTML += guessField.value+" ";
  guesses.style.backgroundColor="red";
}

// checkGuess();


guessSubmit.addEventListener('click',checkGuess);
