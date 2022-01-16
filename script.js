const infoScreenText = document.getElementById('infoScreenText');
const playerPoints = document.getElementById('playerPoints');
const computerPoints = document.getElementById('computerPoints');
const winnerText = document.getElementById('winnerText');
let userChoice;
let playerScore;
let computerScore;
let goal
let resultText;

// Set event listener on RPS buttons
let gameBtns = document.getElementsByClassName('game-btns');
for (let i = 0; i < gameBtns.length; i++) {
    gameBtns[i].addEventListener('click', playGame)
    gameBtns[i].disabled = true;
}

// Game loop
function playGame(e) {
    userChoice = e.target.id;
    computerChoice = computerPlay();
    
    let roundResult = playRound(userChoice, computerChoice);

    if (roundResult === 0) {
        console.log("1 point for Player!");
        resultText = "1 point for Player!";
        playerScore++;
    } else if (roundResult === 1) {
        console.log("It's a tie.");
        resultText = "It's a tie.";
    } else {
        computerScore++
        console.log("1 point for Computer!");
        resultText = "1 point for Computer!";
    }

    infoScreenText.innerHTML = `Player chooses ${userChoice}, Computer chooses ${computerChoice}. ${resultText}`;
    playerPoints.innerHTML = playerScore;
    computerPoints.innerHTML = computerScore;

    if (playerScore >= goal || computerScore >= goal) {
        if (playerScore >= goal) {winnerText.innerHTML = "YOU ARE THE WINNER!!!"};
        if (computerScore >= goal) {winnerText.innerHTML = "COMPUTER WINS! YOU LOOSE!"};

        for (let i = 0; i < gameBtns.length; i++) {
            gameBtns[i].disabled = true;
        }
    }
}

// CPU game logic
function computerPlay() {
    let rndmNum = Math.floor(Math.random() * 3) + 1;
    switch (rndmNum) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "ERROR";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
            return 0; 
    }else if (computerSelection === playerSelection) {
            return 1;
    }else{
            return 2;
    }
}

// Functions for reseting the game and set the goal
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerPoints.innerHTML = playerScore;
    computerPoints.innerHTML = computerScore;
    infoScreenText.innerHTML = `GET READY TO PLAY ROCK - PAPER - SCISSORS!!!`;
    goal = setGoal();
    winnerText.innerHTML = ` First to ${goal} points wins!`
    for (let i = 0; i < gameBtns.length; i++) {
        gameBtns[i].disabled = false;
    }
}

function setGoal() {
    while (true) {
        let goal = prompt('What is the goal of this game?')
        parseInt(goal)
        if (isNaN(goal) || goal == null || goal < 1 || goal % 1 !== 0) {
            alert("Please choose a number that is positive, whole and bigger than 0! ")
        }else{
            return goal
        }
    }
}

// Legacy functions for console play

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let goal = 5;

//     while (playerScore < goal && computerScore < goal) {
//         console.log(`Player ${playerScore} points, Computer ${computerScore} points.`);
//         playerPoints.innerHTML = playerScore;
//         computerPoints.innerHTML = computerScore;

//         let roundResult = playRound(userChoice, computerPlay());
//         let roundText = roundResult[0];
//         let roundCode = roundResult[1];

//         console.log(roundText);

//         if (roundCode === 0) {
//             console.log("1 point for Player!");
//             playerScore++;
//         } else if (roundCode === 1) {
//             console.log("No points for anybody.");
//         } else {
//             computerScore++
//             console.log("1 point for Computer!");
//         }
//     }

//     if (playerScore > computerScore) {
//         console.log("Player wins the game!");
//     } else {
//         console.log("Computer wins the game!");
//     }  
// }

// function playerPlay() {
//     while (true) {
//         let playerChoice = prompt("Choose Rock, Paper or Scissors:");

//         if (playerChoice == null) {
//             alert("CAGON");
//         }
//         playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);

//         if (playerChoice == "Rock" || playerChoice == "Paper" || playerChoice == "Scissors") {
//             return playerChoice;
//         } else {
//             alert("Please choose a valid option.");
//         }
//     }
// }