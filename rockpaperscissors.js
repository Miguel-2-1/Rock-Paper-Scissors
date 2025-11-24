// Step 2: Computer choice function
/**
 * Randomly returns "rock", "paper", or "scissors" for computer selection
 * Uses Math.random() to generate random number and map it to choices
 */
function getComputerChoice() {
    const randomNumber = Math.random(); // Returns number between 0 (inclusive) and 1 (exclusive)
    
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Step 3: Human choice function
/**
 * Gets user input via prompt and returns their choice
 * No input validation - assumes user enters valid choice
 */
function getHumanChoice() {
    return prompt("Enter your choice (rock, paper, or scissors):");
}

// Step 4: Score variables
let humanScore = 0;    // Tracks human player's score
let computerScore = 0; // Tracks computer's score

// Step 5: Single round logic
/**
 * Plays one round of rock-paper-scissors
 * @param {string} humanChoice - Human player's choice
 * @param {string} computerChoice - Computer's randomly generated choice
 */
function playRound(humanChoice, computerChoice) {
    // Make human choice case-insensitive
    humanChoice = humanChoice.toLowerCase();
    
    // Check for tie first
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } 
    // Check human winning conditions
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } 
    // Otherwise computer wins
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

// Step 6: Main game function
/**
 * Plays a complete game of 5 rounds
 * Resets scores, plays rounds, and declares final winner
 */
function playGame() {
    // Reset scores for new game
    humanScore = 0;
    computerScore = 0;
    
    // Play 5 rounds (without loops as instructed)
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    
    // Display final results
    console.log("Game Over!");
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    
    // Determine and announce overall winner
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();