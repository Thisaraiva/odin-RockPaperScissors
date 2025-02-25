console.log("Hello, world!!! Let's go to the glory");

let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice(){
    let choice = prompt("What's your choice? (rock, paper or scissors)").toLowerCase();
    
    if (options.includes(choice)) {
        return choice;
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "Tie";
    } else if(humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "Player won! Rock beats Scissor!";
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "Player won! Scissors beats Paper!";
    } else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "Player won! Paper beats Rock!";
    } else if(computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        return "Computer won! Rock beats Scissor!";
    } else if (computerChoice === "scissors" && humanChoice === "paper"){
        computerScore++;
        return "Computer won! Scissors beats Paper!";
    } else if(computerChoice === "paper" && humanChoice === "rock"){
        computerScore++;
        return "Computer won! Paper beats Rock!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log("Computer choice: ", computerSelection);
console.log("Human choice: ", humanSelection);

console.log(playRound(humanSelection, computerSelection));
