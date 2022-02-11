function computerPlay() {
    let guess = Math.floor(Math.random() * 3);
    let answer = (guess == 0) ? "rock" : (guess == 1) ? "paper" : "scissors";
    // console.log(`The computer answer is ${answer}`);
    return answer
}

function playerPlay() {
    let answer = window.prompt("Choose either Rock, Paper, or Scissors").toLowerCase();
    // console.log(`The player answer is ${answer}`);
    return answer;
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

console.log(playRound(playerPlay(), computerPlay()));