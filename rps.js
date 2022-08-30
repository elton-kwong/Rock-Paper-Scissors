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

const scoreboard = [];

function spellCheck(options) {
    return choices.includes(options);
}

for (let i = 1; i <= 5; i++) {
    console.log(`Round: ${i}`);
    game();
}

function game() {
    let initialSelection = prompt("Rock, Paper or Scissors?");
    let playerSelection = initialSelection.toLowerCase();
    let check = spellCheck(playerSelection);
    while (check == false) {
        playerSelection = prompt("Please choose a valid option. Make sure your spelling is correct!");
        check = spellCheck(playerSelection);
    }
    const computerSelection = getComputerChoice();
    console.log(`You chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    console.log("----------------------------------------------------------------------------------------------------");
    const scores = playRound(playerSelection, computerSelection);
    scoreboard.push(scores);
}

function playRound(playerSelection, computerSelection) {
    let results; 

    if (playerSelection === computerSelection) {
        results = "Tie";
    } else if (
        playerSelection === "rock" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "scissors" || 
        playerSelection === "scissors" && computerSelection === "rock") {
        results = "Computer Wins";
    } else {
        results = "Player Wins";
    }

    return results;
    // if (playerSelection == "rock") {
    //     if (computerSelection == "paper") {
    //         return "You lose! Paper beats Rock!";
    //     } else if (computerSelection == "scissors") {
    //         return "You win! Rock beats Scissors!";
    //     } else {
    //         return "You tied! We both chose Rock!";
    //     }
    // }

    // else if (playerSelection == "paper") {
    //     if (computerSelection == "scissors") {
    //         return "You lose! Scissors beats Paper!";
    //     } else if (computerSelection == "rock") {
    //         return "You win! Paper beats Rock!";
    //     } else {
    //         return "You tied! We both chose Paper!";
    //     }
    // }

    // else if (playerSelection == "scissors") {
    //     if (computerSelection == "rock") {
    //         return "You lose! Rock beats Scissors!";
    //     } else if (computerSelection == "paper") {
    //         return "You win! Scissors beats Paper!";
    //     } else {
    //         return "You tied! We both chose Scissors!";
    //     }
    // }
}

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

console.log("Final Score:");
console.log("Computer: ", getOccurrence(scoreboard, "Computer Wins"));
console.log("Player: ", getOccurrence(scoreboard, "Player Wins"));
console.log("Ties: ", getOccurrence(scoreboard, "Tie"));

// const initialSelection = "ROCK";
// const playerSelection = initialSelection.toLowerCase();
// const computerSelection = getComputerChoice();
// console.log(`You chose ${playerSelection}`);
// console.log(`Computer chose ${computerSelection}`);
// console.log(playRound(playerSelection, computerSelection));