const choices = ["rock", "paper", "scissors"];
let winners = [];

/* 
function game() {
    for (let i =1; i <= 5; i++) {
        playRound(i)
    }
    document.querySelector("button").textContent = "Play Again";
    logWins();
}


function playRound2(round) {
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
*/


//New Code for working on the UserInterface

function startGame() {
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => 
    img.addEventListener("click", () => {
        if (img.id) {
            playRound(img.id);
        }
    })
    );
}

function playRound(playerSelection) {
    let wins = checkWins();
    if (wins >=5) {
        return;
    }
    const computerChoice = computerSelect(); 
    const winner = checkWinner(playerSelection, computerChoice);
    winners.push(winner);
    tallyWins();
    displayRound(playerSelection, computerChoice, winner);
    wins = checkWins();
    if (wins == 5) {
        displayEnd();
    }
}

function computerSelect() {
    const choice = choices[Math.floor(Math.random() * choices.length)];

    //document.querySelector(`.${choice}`).classList.add("active");

    /*
    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove("active");
      }, 700);
      */

    return choice;
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == "Player").length; 

    if (playerWins == 5) {
        document.querySelector(".winner").textContent = "CONGRAGULATIONS YOU WON";
        alert("YOU HAVE WON THE GAME!");
    }
    else {
        document.querySelector(".winner").textContent = "The computer won, try again."
    }
    document.querySelector(".reset").style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector(".playerChoice").textContent = `You chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector(".computerChoice").textContent = `The Computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
    if (winner == "Player") {
        document.querySelector(".winner").textContent = "YOU WON THE ROUND!!";
    }
    else if (winner == "{Computer") {
        document.querySelector(".winner").textContent = "The computer won the round, try again.";
    } 
    else {
        document.querySelector(".winner").textContent = "The round ended in a tie.";
    }
}

function tallyWins() {
    const pWins = winners.filter((item) => item == "Player").length;
    const cWins = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${pWins}`;
    document.querySelector(".computerScore").textContent = `Score: ${cWins}`;
    document.querySelector(".ties").textContent = `Score: ${ties}`;
    console.log(`Score: ${pWins}`);
}

function checkWins() {
    const pWins = winners.filter((item) => item == "Player").length;
    const cWins = winners.filter((item) => item == "Computer").length;
    return Math.max(pWins, cWins);
}

function checkWinner(pChoice, cChoice) {
    if (
        (pChoice == "rock" && cChoice == "scissors") ||
        (pChoice == "paper" && cChoice == "rock") ||
        (pChoice == "scissors" && cChoice == "paper"))
     {
        return "Player";
    } 
    else if (pChoice == cChoice) {
        return "Tie";
    }
    else {
        return "Computer";
    }
}

function setWins() {
    const pWins = winners.filter((item) => item == "Player").length;
    const cWins = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
}

function resetGame() {
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").style.display = "active";
}

startGame();