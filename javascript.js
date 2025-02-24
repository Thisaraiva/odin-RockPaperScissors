console.log("Hello, world!!! Let's go to the glory");

let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}

console.log(getComputerChoice());