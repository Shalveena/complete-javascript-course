'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions: Change starting screen score to 0 and no dice showing
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRollDice.addEventListener('click', () => {
  // 1. Generate a random dice roll

  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  // 2. Display dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`; // to change the image that is being displayed!

  // 3. Is it a 1?
  if (dice !== 1) {
    // If no, add dice roll to current score
    currentScore += dice; // currentScore = currentScore + dice
    // and display new score
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // current score becomes zero and display zero
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // If yes, switch to new player.
    activePlayer = activePlayer === 0 ? 1 : 0;
    // change background for active player to white
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
