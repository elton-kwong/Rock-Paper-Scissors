//computer vs player
//computer will generate random value of rock, paper or scissors from array
//player will input a value of rock, paper or scissors; make sure not case sensitive
//computer result vs player result each round --> enter output (eg. player wins: paper beats rock!)
//use for loop to play multiple rounds (ie. best of 5, etcs)

const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

// console.log(getComputerChoice(choices))

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You lose! Paper beats Rock!";
        } else if (computerSelection == "scissors") {
            return "You win! Rock beats Scissors!";
        } else {
            return "You tied! We both chose Rock!";
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "You lose! Scissors beats Paper!";
        } else if (computerSelection == "rock") {
            return "You win! Paper beats Rock!";
        } else {
            return "You tied! We both chose Paper!";
        }
    }

    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats Scissors!";
        } else if (computerSelection == "paper") {
            return "You win! Scissors beats Paper!";
        } else {
            return "You tied! We both chose Scissors!";
        }
    }
}

const initialSelection = "ROCK";
const playerSelection = initialSelection.toLowerCase();
const computerSelection = getComputerChoice();
console.log(`You chose ${playerSelection}`);
console.log(`Computer chose ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));