//computer vs player
//computer will generate random value of rock, paper or scissors from array
//player will input a value of rock, paper or scissors; make sure not case sensitive
//computer result vs player result each round --> enter output (eg. player wins: paper beats rock!)
//use for loop to play multiple rounds (ie. best of 5, etcs)

//set up game to be ready for play
function start() {
    let fullScoreboard = [];
    let playerResults = 0;
    let computerResults = 0;
    let tieResults = 0;

    //create div to store the scores and results
    const container = document.querySelector("#button-container");
    const rpsDiv = document.createElement("div");
    rpsDiv.style.margin = "10px";
    container.appendChild(rpsDiv);

    //displays the outcome of the current round
    const currentScore = document.createElement("div");
    currentScore.style.color = "green";
    currentScore.textContent = "Result This Round: ";
    currentScore.style.margin = "20px 0px";
    rpsDiv.appendChild(currentScore);

    //displays number of times player has won
    const playerScore = document.createElement("div");
    playerScore.style.color = "blue";
    playerScore.textContent = "Number of Player Wins: " + playerResults;
    playerScore.style.margin = "20px 0px";
    rpsDiv.appendChild(playerScore);

    //displays number of times computer has won
    const computerScore = document.createElement("div");
    computerScore.style.color = "blue";
    computerScore.textContent = "Number of Computer Wins: " + computerResults;
    computerScore.style.margin = "20px 0px";
    rpsDiv.appendChild(computerScore);

    //displays number of times computer has won
    const tieScore = document.createElement("div");
    tieScore.style.color = "blue";
    tieScore.textContent = "Number of Ties: " + tieResults;
    tieScore.style.margin = "20px 0px";
    rpsDiv.appendChild(tieScore);

    //keeps track of ALL the results round by round in case you were curious
    const fullScore = document.createElement("div");
    fullScore.style.color = "grey";
    fullScore.textContent = "Full Score Results: ";
    fullScore.style.margin = "20px 0px";
    rpsDiv.appendChild(fullScore);

    //displays the final winner of the first to 5
    const gameWinner = document.createElement("div");
    gameWinner.style.color = "red";
    rpsDiv.appendChild(gameWinner);

    //addEventListener to 3 buttons in HTML
    const button = document.getElementById("button-container");
    button.addEventListener("click", (e) => {
        if(e.target.id == "rock") {
            attempt = "rock";
            game();
        } else if(e.target.id == "paper") {
            attempt = "paper";
            game();
        } else if(e.target.id == "scissors") {
            attempt = "scissors";
            game();
        }
    });

    //runs the game after a button has been pressed
    function game() {
        let playerChoice = attempt;
        const computerSelection = getComputerChoice();
        const scores = playRound(playerChoice, computerSelection);
        fullScoreboard.push(" " + scores);
        fullScore.textContent = "Full Score Results: " + fullScoreboard;
        if (scores == "Player Wins") {
            playerScore.textContent = "Number of Player Wins: " + ++playerResults;
        } else if (scores == "Computer Wins") {
            computerScore.textContent = "Number of Computer Wins: " + ++computerResults;
        } else {
            tieScore.textContent = "Number of Ties: " + ++ tieResults;
        }
        currentScore.textContent = "Result This Round: " + scores;
        endGame();
    }

    //generate random choice for computer
    const choices = ["rock", "paper", "scissors"];
    function getComputerChoice() {
        return choices[Math.floor(Math.random()*choices.length)];
    }

    //match player vs computer and decide the winner each round
    function playRound(playerChoice, computerSelection) {
        let results; 

        if (playerChoice === computerSelection) {
            results = "Tie";
        } else if (
            playerChoice === "rock" && computerSelection === "paper" || 
            playerChoice === "paper" && computerSelection === "scissors" || 
            playerChoice === "scissors" && computerSelection === "rock") {
            results = "Computer Wins";
        } else {
            results = "Player Wins";
        }
        return results;
    }

    //provide prompt to end the game
    function endGame() {
        if (playerResults == 5) {
            gameWinner.textContent = "Congratulations! You Win!";
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
        } else if (computerResults == 5) {
            gameWinner.textContent = "Computer Wins! Better Luck Next Time!";
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;   
        }
    }
}
//call start function to display the desired text on screen
start();