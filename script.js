
//rock paper scissors
//global variables

let computerScore = 0;
let userScore = 0;

function getUserChoice() {
  let userChoice = prompt("Enter your choice: rock, paper, or scissors");
  return userChoice;
}
 

//function getUserChoice
//use prompt to ask user to enter their choice for rock paper or scissors
//return users choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
//function getComputerChoice
//uses Math.random to pick rock, paper or scissors at random from an array 
//returns computer's choice
function compareChoice(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    alert("It's a tie!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    alert("You win this round!");
    userScore++;
  } else {
    alert("the machine wins this round!");
    computerScore++;
  }
}

//function compareChoice
//takes in userChoice and computerChoice as arguments
//use nested if else to test user vs computer
//output alert messages for each outcome - ex: "user chose paper. computer chose rock. paper covers rock! player wins"
//increments the winners score

function playGame() {
  let round = 1;
  while (computerScore < 2 && userScore < 2) {
    alert(`Round ${round}\nUser: ${userScore}  Computer: ${computerScore}`);
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    compareChoice(userChoice, computerChoice);
    round++;
  }

  if (userScore > computerScore) {
    alert("Congratulations! You win the game!");
  } else {
    alert("Sorry, the machine wins the game!");
  }
}

playGame();

//function playGame
//counts round number
//run a while loop as long as computer and user's score are < 2(best 2/3)
//inside the while loop:
  //increment round counter
  //give an alert with the round # and user and computer's current scores
  //run compare choice, passing it user's choice and computer's choice.