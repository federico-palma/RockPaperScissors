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
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);

        if (playerChoice == "Rock" || playerChoice == "Paper" || playerChoice == "Scissors") {
            return playerChoice;
        } else {
            alert("Please choose a valid option.")
        }
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)

    if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock"|| playerSelection === "Scissors" && computerSelection === "Paper") {
        return `Player chooses ${playerSelection}, Computer chooses ${computerSelection}, Player wins!!!`;
    }else if (computerSelection === playerSelection) {
        return `Player chooses ${playerSelection}, Computer chooses ${computerSelection}, It's a tie!!!`;
    }else{
        return `Player chooses ${playerSelection}, Computer chooses ${computerSelection}, Computer wins!!!`;
    }
}
