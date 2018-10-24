var randomNumber=Math.floor(Math.random()*101);
console.log(randomNumber);

var guessField = document.querySelector('.guessField');
console.log(guessField);
var guesses = document.querySelector('.guesses');
console.log(guesses);
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
// console.log(lowOrHi);
var guessSubmit = document.querySelector('.guessSubmit');

var guessCount=1;
var resetButton;
guessField.focus();




function  checkGuess(){
  var userGuess=Number(guessField.value);
  // console.log(typeof userGuess);
  // console.log(userGuess);
  // guesses.innerHTML += userGuess.value+" ";
  // guesses.style.backgroundColor="yellow";


// checkGuess();

if(guessCount === 1) {
  guesses.textContent = '上次猜的数: ';
}
guesses.textContent += userGuess + ' ';

if(userGuess === randomNumber) {
  lastResult.textContent = '恭喜你！猜对了！';

  lastResult.style.backgroundColor = 'green';
  lowOrHi.textContent = '';
  setGameOver();
} else if(guessCount === 10) {
  lastResult.textContent = '!!!GAME OVER!!!';
  lowOrHi.textContent = '';
  setGameOver();
} else {
  lastResult.textContent = '你猜错了！';
  lastResult.style.backgroundColor = 'red';
  if(userGuess < randomNumber) {
    lowOrHi.textContent = '刚才你猜低了！';
  } else if(userGuess > randomNumber) {
    lowOrHi.textContent = '刚才你猜高了！';
  }
}
 guessField.value = '';  
  guessCount++;
  guessField.focus();
}
guessSubmit.addEventListener('click',checkGuess);

function setGameOver(){
  // var resetButton = document.querySelector("div.resultParas p:last-child");
  // console.log(resultParas);
  // resetButton.style.display = "block";
  guessField.disabld =true;
  guessSubmit.disabld =true;

  resetButton = document.createElement('button');

  resetButton.textContent = '开始新游戏';

  document.body.appendChild(resetButton);

  resetButton.addEventListener('click',resetGame);
}