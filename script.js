choices = ["rock", "paper", "scissor"];

let playerSelection;
let computerSelection;
let numberOfRounds;


function playRound(numberOfRounds) {
    console.log(numberOfRounds);
    for (let i = 0; i < numberOfRounds; i++) {
        console.log(i);
        playerSelection = prompt("Enter your selection");
        computerSelection = Math.floor(Math.random() * 2);
        playerSelection = playerSelection.toLowerCase();
        let playerchoice;
        if (playerSelection == choices[0]) {
            playerchoice = 0;
        } else if (playerSelection == choices[1]) {
            playerchoice = 1;
        } else if (playerSelection == choices[2]) {
            playerchoice = 2;
        } else {
            console.error("abe salle rock paper scissor ki sahi spelling daal");
        }

        if (playerchoice == computerSelection) {
            console.log("Match draw");
        } else if (playerchoice == 0 && computerSelection == 1 || playerchoice == 1 && computerSelection == 2 || playerchoice == 2 && computerSelection == 0) {
            return console.log("Computer Won");
        } else {
            return console.log("You won against some of the most powerful computers in this world");
        }
    }
    return 0;
}
