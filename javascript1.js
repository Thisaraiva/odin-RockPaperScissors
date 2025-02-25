console.log("Hello, world!!! Let's go to the glory");

let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let numberRounds = 5;

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
    let choice = prompt("What's your choice? (rock, paper or scissors)").toLowerCase();

    if (options.includes(choice)) {
        return choice;
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return getHumanChoice();
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(humanChoice, computerChoice) {
    const outcomes = {
        rock: { scissors: "Player", paper: "Computer" },
        paper: { rock: "Player", scissors: "Computer" },
        scissors: { paper: "Player", rock: "Computer" }
    }

    if (humanChoice === computerChoice) {
        return "Tie";
    } else {
        const winner = outcomes[humanChoice][computerChoice];
        if (winner === "Player") {
            humanScore++;
            return `Round winner ${winner}!
            \n${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}!
            \nScore - Player: ${humanScore} e Computer: ${computerScore}`;
        } else {
            computerScore++;
            return `Round winner ${winner}! 
            \n${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}!
            \nScore - Player: ${humanScore} e Computer: ${computerScore}`;
        }
    }
}

function playGame() {
    while (humanScore < numberRounds && computerScore < numberRounds) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("Computer choice: ", computerSelection);
        console.log("Player choice: ", humanSelection);
        console.log(playRound(humanSelection, computerSelection));
        //console.log(`Player Score: ${humanScore} e Computer Score: ${computerScore}`);
        console.log("____________________________________________________");
    }

    if (humanScore > computerScore) {
        return `Player Win - Final Score: Player: ${humanScore} e Computer: ${computerScore}`;
    } else if (computerScore > humanScore){
        return `Computer Win - Final Score: Player: ${computerScore} e Computer: ${humanScore}`;
    } else {
        return `Tie! Final Score: Player ${humanScore} - Computer ${computerScore}`;
    }
}

console.log(playGame());
