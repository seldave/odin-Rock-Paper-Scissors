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

console.log (getComputerChoice());
