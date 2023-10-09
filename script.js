function playRound(playerSelection, computerSelection) {
    // your code here!
    console.log(playerSelection + " player");
    console.log(computerSelection + " computer");

    if (playerSelection=="rock" && computerSelection=="paper"){
        return "You lose! Paper beats Rock"
    } else if (playerSelection=="rock" && computerSelection=="scissors"){
        return "You win! Rock beats Scissors"
    } else if (playerSelection==computerSelection){
        return "It's a tie!"
    } else if (playerSelection=="paper" && computerSelection=="rock"){
        return "You lose! Rock beats Paper"
    } else if (playerSelection=="paper" && computerSelection=="scissors") {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection=="scissors" && computerSelection=="paper") {
        return "You win! Scissors beats Paper"
    } else if (playerSelection=="scissors" && computerSelection=="rock") {
        return "You lose! Rock beats Scissors"
    } else {
        return "Can't decide!"
    }

  }


function getComputerChoice() {
    //code
    const randomChoice = getRandomIntInclusive(1,3);
        if (randomChoice == 1){
            return "rock"
        } else if (randomChoice == 2){
            return "paper"
        } else if (randomChoice==3){
            return "scissors"
        }

}

function game() {

for (let i=0; i<5; i++) {
    const playerSelection = prompt("Play rock paper scissors!").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }


  game();
