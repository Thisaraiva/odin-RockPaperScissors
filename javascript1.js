console.log("Hello, world!!! Let's go to the glory");

let options = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
let numberRounds = 5;

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(humanChoice, computerChoice) {
    const outcomes = {
        Rock: { Scissors: "Player", Paper: "Computer" },
        Paper: { Rock: "Player", Scissors: "Computer" },
        Scissors: { Paper: "Player", Rock: "Computer" }
    };

    if (humanChoice === computerChoice) {
        return "Tie";
    } else {
        const winner = outcomes[humanChoice][computerChoice];
        if (winner === "Player") {
            humanScore++;
            return `Round winner ${winner}!
            <br>${humanChoice} beats ${computerChoice}!`;
        } else {
            computerScore++;
            return `Round winner ${winner}!
            <br>${computerChoice} beats ${humanChoice}!`;
        }
    }
}

function updateUI(result) {
    const resultsDiv = document.getElementById('results');
    const scoreDiv = document.getElementById('score');
    const winnerDiv = document.getElementById('winner');

    resultsDiv.innerHTML = result; // Exibe o resultado da rodada
    scoreDiv.textContent = `Score - Player: ${humanScore} x Computer: ${computerScore}`; // Atualiza a pontuação


    // Verifica se um jogador atingiu 5 pontos
    if (humanScore === numberRounds || computerScore === numberRounds) {
        if (humanScore > computerScore) {
            winnerDiv.textContent = "Player wins the game!";
        } else {
            winnerDiv.textContent = "Computer wins the game!";
        }

        disableButtons(true); // Desabilita os botões
        // Reseta o jogo após 5 segundos
        setTimeout(() => {
            resetGame();
            // Atualiza a interface após o reset
            scoreDiv.textContent = `Score - Player: ${humanScore} x Computer: ${computerScore}`;
            resultsDiv.innerHTML = ""; // Limpa o resultado da rodada
            winnerDiv.textContent = ""; // Limpa a mensagem de vitória
            disableButtons(false); // Habilita os botões
        }, 5000);
    }
}

function disableButtons(disable) {
    document.getElementById('rock').disabled = disable;
    document.getElementById('paper').disabled = disable;
    document.getElementById('scissors').disabled = disable;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function handleClick(humanSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    updateUI(result);

}

rock.addEventListener('click', () => handleClick('Rock'));
paper.addEventListener('click', () => handleClick('Paper'));
scissors.addEventListener('click', () => handleClick('Scissors'));
