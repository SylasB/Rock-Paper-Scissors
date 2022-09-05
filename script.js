const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const index = Math.floor(Math.random() * choice.length);
    console.log(index, choice[index]);
}

getComputerChoice();