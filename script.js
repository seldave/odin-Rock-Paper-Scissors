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
