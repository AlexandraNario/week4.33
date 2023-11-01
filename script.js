//rock paper scissors

 

//global variables

let computerScore = 0;

let userScore = 0;

 

//function getUserChoice

//use prompt to ask user to enter their choice for rock paper or scissors
 function getUserChoice();
 let userChoice = prompt("Enter your choice: Rock, paper, or scissors");
 return userChoice;


//return users choice

 

//function getComputerChoice
function getComputerChoice(){
    const choices =(['Rock','Paper','Scissors']);
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];

}

//uses Math.random to pick rock, paper or scissors at random from an array 

//returns computer's choice

 

//function compareChoice

//takes in userChoice and computerChoice as arguments

function compareChoice(userChoice, computerChoice){
    if (userChoice === computerChoice){
        alert("It's a draw!");
    } else if =
}
//use nested if else to test user vs computer

//output alert messages for each outcome - ex: "user chose paper. computer chose rock. paper covers rock! player wins"

//increments the winners score




//function playGame
 function playGame(){
    let round = 1
 }

//counts round number

//run a while loop as long as computer and user's score are < 2(best 2/3)

//inside the while loop:

  //increment round counter

  //give an alert with the round # and user and computer's current scores
  if (computerScore < userScore){
    alert("Yay! You are the winner!");
  } else {
    alert ("Sorry, the computer wins :'( ")
  }

  playGame();

  //run compare choice, passing it user's choice and computer's choice.