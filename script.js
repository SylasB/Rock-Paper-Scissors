//This is the section of code to let the computer find a random choice.
const choices = ["rock", "paper", "scissors"];

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    console.log(playerSelection, computerSelection);
}

function getComputerChoice() {
    return [Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    
}