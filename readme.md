BEGIN Rock-Paper-Scissors Game

// STEP 2: Computer selection function
FUNCTION getComputerChoice()
    randomNum = GENERATE random number between 0 and 1
    
    IF randomNum < 0.33 THEN
        RETURN "rock"
    ELSE IF randomNum < 0.66 THEN
        RETURN "paper"
    ELSE
        RETURN "scissors"
    END IF
END FUNCTION

// STEP 3: Human selection function  
FUNCTION getHumanChoice()
    userInput = PROMPT user for "rock", "paper", or "scissors"
    RETURN userInput
END FUNCTION

// STEP 4: Global score variables
SET humanScore = 0
SET computerScore = 0

// STEP 5: Single round logic
FUNCTION playRound(humanChoice, computerChoice)
    CONVERT humanChoice to lowercase
    
    IF humanChoice equals computerChoice THEN
        PRINT "It's a tie!"
    ELSE IF (humanChoice is "rock" AND computerChoice is "scissors") OR
            (humanChoice is "paper" AND computerChoice is "rock") OR  
            (humanChoice is "scissors" AND computerChoice is "paper") THEN
        PRINT "You win! [humanChoice] beats [computerChoice]"
        INCREMENT humanScore by 1
    ELSE
        PRINT "You lose! [computerChoice] beats [humanChoice]"
        INCREMENT computerScore by 1
    END IF
END FUNCTION

// STEP 6: Main game function
FUNCTION playGame()
    RESET humanScore to 0
    RESET computerScore to 0
    
    // Play 5 rounds
    FOR i from 1 to 5 DO
        humanSelection = CALL getHumanChoice()
        computerSelection = CALL getComputerChoice()
        CALL playRound(humanSelection, computerSelection)
    END FOR
    
    PRINT "Game Over!"
    PRINT "Final Score - You: [humanScore], Computer: [computerScore]"
    
    IF humanScore > computerScore THEN
        PRINT "You win the game!"
    ELSE IF computerScore > humanScore THEN
        PRINT "Computer wins the game!"
    ELSE
        PRINT "The game is a tie!"
    END IF
END FUNCTION

// Start the game
CALL playGame()

END PROGRAM