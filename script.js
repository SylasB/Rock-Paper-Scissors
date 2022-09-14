const choices = ["rock", "paper", "scissors"];
let winners = [];
let champion = [];

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

//New Code for working on the UserInterface

function playRoundRock(round) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    champion.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playRoundPaper(round) {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    champion.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playRoundScissors(round) {
    const playerSelection = "Scissors";
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    champion.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

const results = document.querySelector('#results');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = `Winners: ${winners}`;
results.appendChild(content);