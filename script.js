'use strict';
let ranNum = Math.round(Math.random() * 19) + 1; //0-19
// let ranNum = Math.trunc(Math.random() * 20); 0-19
console.log(ranNum);
let inputEl = document.querySelector('.guess');
let checkEl = document.querySelector('.check');
let scoreEl = document.querySelector('.score');
let highScoreEl = document.querySelector('.highscore');
let againEl = document.querySelector('.again');
let messageEl = document.querySelector('.message');
let secretNumber = document.querySelector('.number');
let body = document.body;
let highScore = 0;
let score = Number(scoreEl.textContent);

checkEl.addEventListener('click', check);
againEl.addEventListener('click', Again);
function Again() {
  score = 20;
  scoreEl.textContent = '20';
  secretNumber.style.width = '15rem';
  secretNumber.textContent = '?';
  body.style.backgroundColor = '#222';
  messageEl.textContent = 'Start guessing...';
  ranNum = Math.round(Math.random() * 19) + 1;
  secretNumber.textContent = '?';
  inputEl.value = '';
}

function check() {
  if (!inputEl.value) {
    messageEl.textContent = '⛔ No Number';
    return;
  }
  if (score == 0) {
    return;
  }

  if (inputEl.value == ranNum) {
    score++;
    messageEl.textContent = '🎉 Correct number!';
    body.style.backgroundColor = '#60b347';
    secretNumber.style.width = '30rem';
    secretNumber.textContent = ranNum;
    ranNum = Math.round(Math.random() * 19) + 1;
  } else if (inputEl.value !== ranNum) {
    score--;
    body.style.backgroundColor = '#222';
    secretNumber.style.width = '15rem';
    secretNumber.textContent = '?';
    if (Number(inputEl.value) > ranNum) {
      messageEl.textContent = '📈 Too high!';
    } else if (Number(inputEl.value) < ranNum) {
      messageEl.textContent = '📉 Too low!';
    }
  }
  scoreEl.textContent = score;
  console.log(ranNum);
  if (score >= highScore) {
    // highScore = score;
    // highScoreEl.textContent = highScore;
    highScoreEl.textContent = highScore = score;
  }
  if (score == 0) {
    messageEl.textContent = '💥 You Lost the game!';
  }
}
