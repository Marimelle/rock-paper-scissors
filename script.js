/*** GLOBAL VARIABLES ***/
let playerScore = 0;
let computerScore = 0;

// Get Nodelist of the player's buttons
const playerBtn = document.querySelectorAll(".player-btn");

// Add event listener for each of the players button
playerBtn.forEach(btn => {
  btn.addEventListener("click", clickBtn);
});

// Get DOM nodes of computer's and player's scores 
const cScore = document.getElementById("computer-score");
const pScore = document.getElementById("player-score");

// Get DOM node of computer and player's result
const computerResult = document.getElementById("computer-result");
const playerResult = document.getElementById("player-result");

// Get DOM node of div displaying the result of the game
const gameResult = document.getElementById("game-result");

/******************************************************
 * Function called when a player's button is clicked on
 */
function clickBtn(e){
  // Remove class btn-selected to reset
  playerBtn.forEach(btn => btn.classList.remove("btn-selected"));
  // Add class btn-selected to clicked button
  e.target.classList.add("btn-selected");
  // Call function game and pass e (event) as argument
  game(e);
}

/***********************************************
 * Function getComputerChoice() that generates
 * and returns the choice of the computer
 * ("rock", "paper", "scissors")
 */
function getComputerChoice(){
  // Generate random number from 1 to 3
  let randomNum = Math.floor(Math.random()*3) + 1;

  // randomNum corresponds to Rock, Paper, or Scissors
  switch(randomNum){
    case 1: return "rock";
    case 2: return "paper";
    case 3: return "scissors";
    default: return;
  }
}

/***********************************************
 * Function playRound() plays 1 round with 2
 * parameters (choices of player and computer)
 * and returns the result of current round
 */
function playRound(playerSelection, computerSelection){
  // If player and computer chose the same, return "Tie"
  if (playerSelection == computerSelection){
    return "Tie";
  }
  // Else, compare choices
  else {
    // Each case (player's choice) is compared to the
    // computerSelection using functions based on the
    // player's choice
    switch(playerSelection.toLowerCase()){
      case "rock":
        return rockSelected(computerSelection);
      case "paper":
        return paperSelected(computerSelection);
      case "scissors":
        return scissorsSelected(computerSelection);
      default: return;
    }
  }
}

/***********************************************
 * Function game() calls function playRound()
 * when a player's button is clicked and prints
 * the result at the end of the game
 */
function game(){
  let playerSelection = "";
  let computerSelection = "";

  // Prompt user to enter a choice
  playerSelection = prompt("Rock/Paper/Scissors?").toLowerCase();
  // Generate a computer choice using function
  computerSelection = getComputerChoice();
  let roundResult = playRound(playerSelection, computerSelection);
  switch(roundResult){
    case "Tie":
      playerScore++;
      computerScore++;
      break;
    case "Win":
      playerScore++;
      break;
    case "Lose":
      computerScore++;
      break;
    default: //none
  }
  console.log(`Round ${i+1}: Player: ${playerSelection}\tComputer: ${computerSelection}`);
  console.log(`\t\t Player: ${playerScore}\tComputer: ${computerScore}`);
  if (playerScore === computerScore){
    console.log("It's a tie!");
  }
  else if (playerScore > computerScore) {
    console.log("Congratulations! You won!");
  }
  else {
    console.log("You lost! Better luck next time.");
  }
}

/***********************************************
 * Function rockSelected() is called if player
 * selected "rock" and compared to computerChoice
 * then returns the result
 */
function rockSelected(computerChoice){
  switch(computerChoice){
    case "paper": return "Lose";
    case "scissors": return "Win";
    default: return;
  }
}

/***********************************************
 * Function paperSelected() is called if player
 * selected "paper" and compared to computerChoice
 * then returns the result
 */
  function paperSelected(computerChoice){
  switch(computerChoice){
    case "scissors": return "Lose";
    case "rock": return "Win";
    default: return;
  }
}

/***********************************************
 * Function scissorsSelected() is called if player
 * selected "scissors" and compared to computerChoice
 * then returns the result
 */
  function scissorsSelected(computerChoice){
  switch(computerChoice){
    case "rock": return "Lose";
    case "paper": return "Win";
    default: return;
  }
}