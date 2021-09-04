function computerPlay() {
    let rndmNum = Math.floor(Math.random() * 3) + 1;

    switch (rndmNum) {
        case 1:
            return "Rock"
            break
        case 2:
            return "Paper"
            break
        case 3:
            return "Scissors"
            break

        default:
            return "ERROR"
    }
}

function playerPlay() {
    while (true) {
        let playerChoice = prompt("Choose Rock, Paper or Scissors:");

        if (playerChoice == null) {
            alert("CAGON")
        }
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);

        if (playerChoice == "Rock" || playerChoice == "Paper" || playerChoice == "Scissors") {
            return playerChoice;
        } else {
            alert("Please choose a valid option.");
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock"|| playerSelection === "Scissors" && computerSelection === "Paper") {
        return [`Player chooses ${playerSelection}, Computer chooses ${computerSelection}, Player wins!!!`, 0]; 
    }else if (computerSelection === playerSelection) {
        return [`Player chooses ${playerSelection}, Computer chooses ${computerSelection}, It's a tie!!!`, 1];
    }else{
        return [`Player chooses ${playerSelection}, Computer chooses ${computerSelection}, Computer wins!!!`, 2];
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let goal = 5

    while (playerScore < goal && computerScore < goal) {
        console.log(`Player ${playerScore} points, Computer ${computerScore} points.`)

        let roundResult = playRound(playerPlay(), computerPlay())
        let roundText = roundResult[0]
        let roundCode = roundResult[1]

        console.log(roundText);

        if (roundCode === 0) {
            console.log("1 point for Player!")
            playerScore++;
        } else if (roundCode === 1) {
            console.log("No points for anybody.")
        } else {
            computerScore++
            console.log("1 point for Computer!")
        }
    }

    if (playerScore > computerScore) {
        console.log("Player wins the game!")
    } else {
        console.log("Computer wins the game!")
    }
    
}
