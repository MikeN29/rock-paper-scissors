

function getComputerChoice() {
    let x = Math.floor((Math.random() * 3) + 1); 
    if (x == 1) {
        return 'rock'
    } else if (x == 2) {
        return 'paper'
    } else if (x == 3) {
        return 'scissors'
    }
}

let roundResult = '';


function playRound(playerSelection, computerSelection) {

    let playerSelectionLower = playerSelection.toLowerCase();

    if (playerSelectionLower == 'rock' && computerSelection == 'paper') {
        console.log('You Lose! Paper beats Rock!');
        result.textContent = 'You Lose! Paper beats Rock!';
    } else if (playerSelectionLower == 'paper' && computerSelection == 'scissors') {
        console.log('You lose! Scissors beat Paper!');
        result.textContent = 'You lose! Scissors beat Paper!';
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'rock') {
        console.log('You lose! Rock beats Scissors!');
        result.textContent = 'You lose! Rock beats Scissors!';
    } else if (playerSelectionLower == 'rock' && computerSelection == 'scissors') {
        console.log('You win! Rock beats Scissors!');
        result.textContent = 'You win! Rock beats Scissors!';
    } else if (playerSelectionLower == 'paper' && computerSelection == 'rock') {
        console.log('You win! Paper beats rock!');
        result.textContent = 'You win! Paper beats rock!';
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'paper') {
        console.log('You win! Scissors beat Paper!');
        result.textContent = 'You win! Scissors beat Paper!';
    } else {
        console.log('Draw - try again!');
        result.textContent = 'Draw - try again!';
       }
}

let playerScore = 0;
let computerScore = 0;


/*function game(playerSelection, computerSelection) {

    for (let i = 0; i < 5; i++) {
        //let playerSelection = prompt();
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
        
}*/


//let playerSelection = '';
//let computerSelection = getComputerChoice();
let computerSelection = ''



//(game(playerSelection, computerSelection));



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

let btn = document.querySelectorAll('#btn');
btn.forEach(function (i) {
    i.addEventListener('click', function() {
        let playerSelection = i.getAttribute("data-key");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(computerSelection);
    });
});




const resultsDiv = document.querySelector('#resultsDiv');
const score = document.querySelector('#score');

const result = document.createElement('div');

result.classList.add('content');

//resultsDiv.appendChild(result);

resultsDiv.insertBefore(result, score)


