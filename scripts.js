

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
        return 'You Lose! Paper beats Rock!'
        // add score to computer
    } else if (playerSelectionLower == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beat Paper!'
        //add score to computer - let computerScore += 1
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


function game(playerSelection, computerSelection) {

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt();
        let computerSelection = getComputerChoice();
        
        const currentRound = playRound(playerSelection, computerSelection)
        console.log(currentRound)
     }     
        
}


let playerSelection = '';
let computerSelection = getComputerChoice();


console.log(game(playerSelection, computerSelection));

// need a function to keep score of game