//New Requirements: 
//In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
//Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
//Add a div for displaying results and change all of your console.logs into DOM methods.
//Display the running score, and announce a winner of the game once one player reaches 3 points
//You will likely have to refactor (rework/rewrite) your original code to make it work for this.
let computerScore = 0;
let userScore = 0;
//id the buttons and result div
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let resultDiv = document.getElementById("result");
let scoreDiv = document.getElementById("score");
//add event listeners to the buttons that call playRound with the correct playerSelection

rockButton.addEventListener("click", function() {
  playRound("rock");
});
paperButton.addEventListener("click", function() {
  playRound("paper");
});
scissorsButton.addEventListener("click", function() {
  playRound("scissors");
});


//move the function that randomly decides computers choice up as that is not changing
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
//rework userchoice and userscore

//compare the choices and return the winner and update scores
function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  let result = determineWinner(userChoice, computerChoice);
if (result === 'user'){
  userScore++;

  resultDiv.innerHTML = `You Win! You chose ${userChoice}.<br>The machine chose ${computerChoice}.<br>`;
} else if (result === 'computer') {
  computerScore++;
  resultDiv.innerHTML = `You Lose!The machine chose ${computerChoice}.<br>You chose ${userChoice}.<br>`;
} else {
  resultDiv.innerHTML = `It's a tie! You both chose ${userChoice}.`;
}
  updateScore();
  checkWinner();

}

function determineWinner(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "user";
  } else if (userChoice === computerChoice){
    return 'tie';
    
  } else {
    return 'computer';
  }
}
function updateScore() {
  scoreDiv.innerHTML = `Score: User: ${userScore} Computer: ${computerScore}`;
}

function checkWinner() {
  if (userScore === 3) {
    resultDiv.textContent = 'Congratulations! You won the game!';
    resetGame();
    } else if (computerScore === 3) {
    resultDiv.textContent = 'Oops! Machine won the game. Better luck next time!';
    resetGame();
    }
}//added curly brackets to close the if statement

function resetGame() {
  userScore = 0;
  computerScore = 0;
   updateScore();

}