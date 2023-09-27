"use strict";

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const winner0El = document.getElementById('winner--0');
const winner1El = document.getElementById('winner--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');

let scores = [0, 0],
    currentScore = 0,
    activePlayer = 0;

//starting conditions
function handleResetGame() {
    scores;
    currentScore;
    activePlayer;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    newGame.classList.add('hidden');
    diceEl.classList.add('hidden');
    btnRoll.classList.remove('hidden');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    document.getElementById('winner--0').innerHTML = '';
    document.getElementById('winner--1').innerHTML = '';
}
// Switch player 
function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};
// Roll dice Event and finish game
function handleRollDice() {
    // 1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./image/dice-${dice}.png`;

    // 3. check for rolled 1 time if true, switch to next player
    if (dice > 0) {
        switchPlayer();

        // Display score on current score from dice
        currentScore = dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        // Display plyer score 
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    }
    if (scores[activePlayer] >= 20) {

        // finish the game
        diceEl.classList.add('hidden');
        newGame.classList.remove('hidden');
        btnRoll.classList.add('hidden');

        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.getElementById(`winner--${activePlayer}`).innerHTML = 'congratulations🎉';
    }
};
// Dice Roll event trigger
btnRoll.addEventListener('click', handleRollDice);
// Restart the game 
newGame.addEventListener('click', handleResetGame);
handleResetGame();