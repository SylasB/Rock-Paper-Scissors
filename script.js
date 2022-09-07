//This is the section of code to let the computer find a random choice.
const choices = ["rock", "paper", "scissors"];
let winners = [];

function game() {
    for (let i =1; i <= 5; i++) {
        playRound(i)
    }
    document.querySelector("button").textContent = "Play Again";
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Please type only 'Rock' 'Paper' or 'Scissors'. Capitalization does not matter. "
            );
    while (input == null){
        input = prompt(
            "Type Rock, Paper, or Scissors"
        );
    }
    input = input.toLowerCase();
    check = validateInput(input);
    }
    return input; 
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Player"
    }
    else {
        return "Computer"
    }
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round);
    console.log("Player chose:", playerChoice);
    console.log("Computer chose:", computerChoice);
    console.log(winner, "won the round");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("RESULTS:");
    console.log("Player wins:", playerWins);
    console.log("Computer wins:", computerWins);
    console.log("Ties:", ties); 
}