const out = document.querySelector('.result');
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const score = document.querySelector('.score')

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

let playerScore = 0, computerScore = 0;

function playRound(playerGuess, computerGuess) {
    if (computerGuess == "rock" && playerGuess == "scissors" || computerGuess == "paper" && playerGuess == "rock" || computerGuess == "scissors" && playerGuess == "paper") {
        out.textContent = "The Computer won the round";
        computerScore++;
    } else if (playerGuess == "rock" && computerGuess == "scissors" || playerGuess == "paper" && computerGuess == "rock" || playerGuess == "scissors" && computerGuess == "paper") {
        out.textContent = "The Player won the round";
        playerScore++;
    } else {
        out.textContent = "The round is a tie";
    }
    if (playerScore >= 5 || computerScore >= 5) {
        out.innerHTML = (playerScore > computerScore) ? "*CONGRATULATIONS*<br>You win!" : "*GAME OVER*<br>Try again";
        playerScore = 0; 
        computerScore = 0;
    };
    score.textContent = `${playerScore} - ${computerScore}`;
};

rockButton.addEventListener('click', () => {
    playRound('rock', computerPlay());
});

paperButton.addEventListener('click', () => {
    playRound('paper', computerPlay());
});

scissorsButton.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});

function game(pointsRequiredToWin) {

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
    if (playerScore > computerScore) {
        console.log(`
*CONGRATULATIONS*
You win!
        `)
    } else {
        console.log(`
*GAME OVER*
Refresh the page to try again
        `)
    }
}

console.log(`
*WELCOME TO ROCK, PAPER, SCISSORS!*
In this game you will play a game of rock, paper, scissors against (pseudo)random math in a best of 3 format
Ready? Start!
`)


