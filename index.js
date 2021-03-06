function computerPlay() {
    let guess = Math.floor(Math.random() * 3);
    let answer = (guess == 0) ? "rock" : (guess == 1) ? "paper" : "scissors";
    console.log(`The computer answer is ${answer}`);
    return answer
}

function playerPlay() {
    let guess = Math.floor(Math.random() * 3);
    let answer = (guess == 0) ? "rock" : (guess == 1) ? "paper" : "scissors";
    console.log(`The player answer is ${answer}`);
    return answer
}

function playRound(playerGuess, computerGuess) {
    if (playerGuess != "rock" && playerGuess != "paper" && playerGuess != "scissors") {
        return "ERROR: Invalid Input"
    }
    if (computerGuess === "rock" && playerGuess === "scissors" || computerGuess === "paper" && playerGuess === "rock" || computerGuess === "scissors" && playerGuess === "paper") {
        return "The Computer Won"
    } else if (playerGuess === "rock" && computerGuess === "scissors" || playerGuess === "paper" && computerGuess === "rock" || playerGuess === "scissors" && computerGuess === "paper") {
        return "The Player Won"
    } else {
        return "It's a tie"
    }
}



function game(pointsRequiredToWin) {
    let playerScore = 0, computerScore = 0;

    while (playerScore < pointsRequiredToWin && computerScore < pointsRequiredToWin) {
        let roundResult = playRound(playerPlay(), computerPlay());
        console.log(roundResult);
        if (roundResult === "The Computer Won") {
            computerScore++;
        } else if (roundResult === "The Player Won") {
            playerScore++;
        } else if (roundResult === "It's a tie") {
            continue;
        } else {
            console.log("ERROR: Could not determine the winner");
            break;
        }
        console.log(`The score is ${playerScore} - ${computerScore}`)
    }
}

game(3)