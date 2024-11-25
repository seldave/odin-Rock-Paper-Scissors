/* write a function that uses the math.random method to generate string of 
either rock, paper, or scissors depending on the random number generated*/
function getComputerChoice() {
    let numberGenerated = Math.random();
    let result;
    if (numberGenerated < 1 && numberGenerated >= 0.6) {
        result = "scissors";
    } else if (numberGenerated < 0.6 && numberGenerated >= 0.3) {
        result = "paper";
    } else  {
        result = "rock";
    }
    return result;
}

/* write a function that takes human choice and returns it. The choice has to be 
made case-insensitive. */
function getHumanChoice () {
    let choice = prompt("Enter guess: rock, paper, or scissors");
    //make it case-insensitive by making all characters lowercase
    let humanChoice = choice.toLowerCase();
    //create a check for invalid choices
    while (humanChoice !== "rock" &&
           humanChoice !== "paper" &&
           humanChoice !== "scissors" 
    ) {
        alert("Enter a valid choice");
        choice = prompt("Enter guess: rock, paper, or scissors");
        humanChoice = choice.toLowerCase();
    }
    return humanChoice;
}

//variables to keep track of the players' score
let humanScore = 0;
let computerScore = 0;

/* write a function that takes the human and computer player choices as arguments, 
plays a single round, increments the round winner’s score and logs a winner 
announcement.*/
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice == "paper") {
        console.log("You lose! paper beats rock")
        computerScore++;
        console.log(`The score is ${humanScore}:${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice == "scissors") {
        console.log("You win! rock beats scissors")
        humanScore++;
        console.log(`The score is ${humanScore}:${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice == "rock") {
        console.log("You win! paper beats rock")
        humanScore++;
        console.log(`The score is ${humanScore}:${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice == "scissors") {
        console.log("You lose! scissors beats paper")
        computerScore++;
        console.log(`The score is ${humanScore}:${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice == "rock") {
        console.log("You lose! rock beats scissors")
        computerScore++;
        console.log(`The score is ${humanScore}:${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice == "paper") {
        console.log("You win! scissors beats paper")
        humanScore++;
        console.log(`The score is ${humanScore}:${computerScore}`);
    } else {
        console.log("Its a tie");
        console.log(`The score is ${humanScore}:${computerScore}`);
    }
}

// write a function to declare the final score
function declareResults() {
    if (humanScore > computerScore) {
    console.log("YOU WIN!!! CONGRATULATIONS");
    } else if (computerScore > humanScore) {
        console.log("YOU LOSE! TRY BETTER NEXT TIME");
    } else {
        console.log("ITS A TIE");
    }
}

/* call the choice functions and initialize them to two variable constants to take
 the guesses. The variables are now declared in the playGame function. */
const humanSelection = undefined;
const computerSelection = undefined;

//call the playRound function to keep the score
//playRound(humanSelection, computerSelection);

//write a function named playGame that calls playRound to play 5 rounds
function playGame(func) {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        func(humanSelection, computerSelection);
    }
}

playGame(playRound);
declareResults();
