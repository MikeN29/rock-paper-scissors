

function getComputerChoice() {

    //randomly return rock, paper, scissor

    let x = Math.floor((Math.random() * 3) + 1); 

    //if math random returns 1 console log rock
    //else if 2 console log paper
    //else if 3 console log scissor

    if (x == 1) {
        return 'rock'
    } else if (x == 2) {
        return 'paper'
    } else if (x == 3) {
        return 'scissors'
    }

}


function playRound(playerSelection, computerSelection) {

    let playerSelectionLower = playerSelection.toLowerCase();

    if (playerSelectionLower == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock!';
    } else if (playerSelectionLower == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beat Paper!'
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats Scissors!'
    } else if (playerSelectionLower == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats Scissors!'
    } else if (playerSelectionLower == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats rock!'
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beat Paper!'
    } else {
        return 'Draw - try again!'
    }
}

let playerScore = 0;
let computerScore = 0;


function game(playerSelection, computerSelection) {

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt();
        let computerSelection = getComputerChoice();
        
        const currentRound = playRound(playerSelection, computerSelection)
        console.log(currentRound)

        gameScore(playerSelection, computerSelection)
        console.log('Computer Score: ' + computerScore)
        console.log('Your Score: ' + playerScore)
     } 
     
     if (computerScore > playerScore) {
        console.log('Computer Wins!')
     } else if (playerScore > computerScore) {
        console.log('You Win!')
     } else {
        console.log('Draw!')
     }
        
}


let playerSelection = '';
let computerSelection = getComputerChoice();



(game(playerSelection, computerSelection));



function gameScore(playerSelection, computerSelection) {

    let playerSelectionLower = playerSelection.toLowerCase();

    if (playerSelectionLower == 'rock' && computerSelection == 'paper') {
        computerScore++;
    } else if (playerSelectionLower == 'paper' && computerSelection == 'scissors') {
        computerScore++;
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'rock') {
        computerScore++;
    } else if (playerSelectionLower == 'rock' && computerSelection == 'scissors') {
        playerScore++;
    } else if (playerSelectionLower == 'paper' && computerSelection == 'rock') {
        playerScore++;
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'paper') {
        playerScore++;
    } else {
        return 'Draw - try again!'
    }
}

