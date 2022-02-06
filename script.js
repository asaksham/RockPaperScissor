// const { futimesSync } = require("fs");

choices = ["rock", "paper", "scissor"];

let playerSelection;
let computerSelection;
let numberOfRounds = 5;
let curround = 1;
let playerScore = 0;
let computerScore = 0;
let winner = document.querySelector(".winner")

let newgame = true;
// const box = document.querySelectorAll(".box");
const rock = document.getElementById("rock");//
const paper = document.getElementById("paper");//.addEventListener('click', boxClicked(1));
const scissor = document.getElementById("scissor");//.addEventListener('click', boxClicked(2));
rock.addEventListener('click', () => { boxClicked(0) });
paper.addEventListener('click', () => { boxClicked(1) });
scissor.addEventListener('click', () => { boxClicked(2) });
// box.forEach(element =>
//     element.addEventListener("click", boxClicked)
// );

function boxClicked(number) {
    playerSelection = number;
    computerSelection = Math.floor(Math.random() * 3);
    updateRound();
}

function updateRound() {
    if (newgame) {
        winner.textContent = "";
        playerScore = 0;
        computerScore = 0;
        curround = 0;
        newgame = false;
    }

    curround++;
    if (playerSelection == computerSelection) {
        console.log("Match draw");
    } else if (playerSelection == 0 && computerSelection == 1 || playerSelection == 1 && computerSelection == 2 || playerSelection == 2 && computerSelection == 0) {

        computerScore++;
        console.log(`Computer Won ${computerScore}`);
    } else {

        playerScore++;
        console.log(`playerwon ${playerScore}`);
    }
    checkWinner();


}

function checkWinner() {
    if (playerScore == 5) {
        declareWinner(0);
    } else if (computerScore == 5) {
        declareWinner(1);
    }
}

function declareWinner(win) {
    //winner.textContent = "Hello hello";
    if (win == 0) {
        winner.textContent = "You Won!!";
        console.log("playerwon")
    } else {
        winner.textContent = "Computer Won!!";
        console.log("computer won");

    }
    newgame = true;
}

// function playRound(numberOfRounds) {
//     console.log(numberOfRounds);
//     for (let i = 0; i < numberOfRounds; i++) {
//         console.log(i);
//         // //playerSelection = playerSelection.toLowerCase();
//         // let playerchoice;
//         // if (playerSelection == choices[0]) {
//         //     playerchoice = 0;
//         // } else if (playerSelection == choices[1]) {
//         //     playerchoice = 1;
//         // } else if (playerSelection == choices[2]) {
//         //     playerchoice = 2;
//         // } else {
//         //     console.error("abe salle rock paper scissor ki sahi spelling daal");
//         // }

//         if (playerchoice == computerSelection) {
//             console.log("Match draw");
//         } else if (playerchoice == 0 && computerSelection == 1 || playerchoice == 1 && computerSelection == 2 || playerchoice == 2 && computerSelection == 0) {
//             return console.log("Computer Won");
//         } else {
//             return console.log("You won against some of the most powerful computers in this world");
//         }
//     }
//     return 0;
// }
