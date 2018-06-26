//Get Computer Move
function computerPlay() {
  let possibleOutcomes = ['rock', 'paper', 'scissors'];
  let randomAnswer = Math.floor(Math.random()*possibleOutcomes.length);
  return possibleOutcomes[randomAnswer].toUpperCase();
}

//Player vs. Computer Move
function playRound() {
  const computerSelection = computerPlay();
  let playerSelection = prompt('rock', 'paper', 'scissors')

  if (computerSelection === playerSelection); {
    return 'You draw m8'

  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
    return 'Winna winna.'

  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    return 'Winna winna.'

  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    return 'Winna winna.'

  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    return 'Loser. Sad.'

  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    return 'Loser. Sad.'

  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    return 'Loser. Sad.'
  }
};

//Function that allows us to play a 5 round game
