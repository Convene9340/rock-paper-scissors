function playRound(playerSelection, computerSelection) {
    // your code here!
    console.log(playerSelection + " player");
    console.log(computerSelection + " computer");

    if (playerSelection=="rock" && computerSelection=="paper"){
        //return "You lose! Paper beats Rock"
        return [0,1]
    } else if (playerSelection=="rock" && computerSelection=="scissors"){
        //return "You win! Rock beats Scissors"
        return [1,0]
    } else if (playerSelection==computerSelection){
        //return "It's a tie!"
        return [1,1]
    } else if (playerSelection=="paper" && computerSelection=="rock"){
        //return "You lose! Rock beats Paper"
        return [0,1]
    } else if (playerSelection=="paper" && computerSelection=="scissors") {
        //return "You lose! Scissors beats Paper"
        return [0,1]
    } else if (playerSelection=="scissors" && computerSelection=="paper") {
        //return "You win! Scissors beats Paper"
        return [1,0]
    } else if (playerSelection=="scissors" && computerSelection=="rock") {
        //return "You lose! Rock beats Scissors"
        return [0,1]
    } else {
        //return "Can't decide!"
        return [0,0]
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

function game(playerSelection) {

//for (let i=0; i<5; i++) {
    //const playerSelection = prompt("Play rock paper scissors!").toLowerCase();
    //playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    }
//}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

const btnList = document.querySelectorAll(".btn")
const gameScore = document.querySelector("#gameScore")

gameScore.textContent = '{"player": 0, "computer": 0}'

btnList.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        const playerSelection = e.target.textContent;
        const computerSelection = getComputerChoice();
        let currentScores = JSON.parse(gameScore.textContent)

        if (currentScores.player >= 5) {
            alert("Player won! Reload page to start a new game.");
        } else if(currentScores.computer >= 5){
            alert("Computer won! Reload page to start a new game.");
        } else {
            console.log("Received from player " + playerSelection);
            console.log("Received from computer " + computerSelection);
            const roundScore = playRound(playerSelection.toLowerCase(),computerSelection);
            currentScores.player +=  roundScore[0];
            currentScores.computer += roundScore[1];
            console.log("Current round: " + JSON.stringify(roundScore));
            console.log("Current scores: " + JSON.stringify(currentScores));
            gameScore.textContent = JSON.stringify(currentScores);
        }
    });
});


 // game();

//Scoring system
//{player: int, computer: int}
//initialize scores at zero for both players - done
//play game
//get game result -
//update scores
//if score = 5, announce winner
