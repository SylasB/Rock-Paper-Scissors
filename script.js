//This is the section of code to let the computer find a random choice.
const choices = ["rock", "paper", "scissors"];

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    console.log(playerSelection, computerSelection);
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
        return "You have TIED the computer";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You Have Beaten the computer, good joB!"
    }
    else {
        return "The computer has won."
    }
}