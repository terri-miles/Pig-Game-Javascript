// Get Global webpage elements
let score1 = document.querySelector('#score--0');
let score2 = document.querySelector('#score--1');
let dice = document.querySelector('.dice');
let scoreNum1 = document.querySelector('#scorenum--0');
let scoreNum2 = document.querySelector('#scorenum--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let holdBtn = document.querySelector('#hold-btn');
let playerText = document.querySelector('#first-player--0');
let playerText1 = document.querySelector('#first-player--1')
let rollDice = document.querySelector('.btn-color2');
let newGame = document.querySelector('.btn-color1');

// Initialising the global scores
score1.textContent = 0;
score2.textContent = 0;

let current;
let activePlayer;
let scores;
// scores = [activePlayer] i.e the active player is the index os scores

let init = function(){
  score1.textContent = 0;
  score2.textContent = 0;
  scoreNum1.textContent = 0;
  scoreNum2.textContent = 0;


  current = 0;
  activePlayer = 0;
  scores = [0,0];

  dice.classList.add('classHidden');
  rollDice.classList.remove('classHidden');
  holdBtn.classList.remove('classHidden');
  player0.classList.add('player-active');
  player1.classList.remove('player-active');
  player0.classList.remove('player-winner');
  player1.classList.remove('player-winner');

  playerText.textContent = 'PLAYER 1';
  playerText1.textContent = 'PLAYER 2';
}
init();

let switchPlayer = function(){
    current = 0;
    document.querySelector(`#scorenum--${activePlayer}`).textContent = current;
    activePlayer = activePlayer === 0? 1 : 0;
    player0.classList.toggle('player-active');
    player1.classList.toggle('player-active');
}

dice.classList.add('classHidden');

// IMPLEMENTING FUNCTIONALITY TO ROLL DICE BUTTON

rollDice.addEventListener('click', function(){
// 1. Generate random numbers
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
// 2. Display the dice image with the random number
    dice.classList.remove('classHidden');
    dice.src = `images/dice-${diceNumber}.png`;
//3. Display the current score and dont add when the random number is 1
  if(diceNumber != 1){
    current += diceNumber;
    document.querySelector(`#scorenum--${activePlayer}`).textContent = current;
  }else{
    switchPlayer();
  }
})

// Implementing hold btn functionality
holdBtn.addEventListener('click', function(){
    // 1. add the current score to the global score
    scores[activePlayer] += current;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Checking if the score is greter than 100
        if(scores[activePlayer] >= 20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player-winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
        document.querySelector(`#first-player--${activePlayer}`).textContent = 'Winner!';
        dice.classList.add('classHidden');
        rollDice.classList.add('classHidden');
        holdBtn.classList.add('classHidden');


        }else{
            switchPlayer();
        }
})

// Implementing functionality to New Game btn
newGame.addEventListener('click', init);
