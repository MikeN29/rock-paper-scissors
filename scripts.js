

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
        result.textContent = 'You Lose! Paper beats Rock!';
    } else if (playerSelectionLower == 'paper' && computerSelection == 'scissors') {
        result.textContent = 'You lose! Scissors beat Paper!';
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'rock') {
        result.textContent = 'You lose! Rock beats Scissors!';
    } else if (playerSelectionLower == 'rock' && computerSelection == 'scissors') {
        result.textContent = 'You win! Rock beats Scissors!';
    } else if (playerSelectionLower == 'paper' && computerSelection == 'rock') {
        result.textContent = 'You win! Paper beats rock!';
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'paper') {
        result.textContent = 'You win! Scissors beat Paper!';
    } else {
        result.textContent = 'Draw - try again!';
       }

    if (playerSelection == 'rock') {
        userImage.src = 'images/rock.png';
    } else if (playerSelection == 'paper') {
        userImage.src = 'images/paper.png';
    } else if (playerSelection == 'scissors') {
        userImage.src = 'images/scissors.png';
    }

    if (computerSelection == 'rock') {
        computerImage.src = 'images/rock.png';
    } else if (computerSelection == 'paper') {
        computerImage.src = 'images/paper.png';
    } else if (computerSelection == 'scissors') {
        computerImage.src = 'images/scissors.png';
    }






}

let playerScore = 0;
let computerScore = 0;

let computerSelection = ''


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
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    if (playerScore == 5) {
        document.getElementById("gameWinner").textContent = "restart game";
        document.querySelector('.userImage').removeChild(userImage);
        document.querySelector('.computerImage').removeChild(computerImage)
        document.getElementById("userWin").textContent = "You win the game!";

    } else if (computerScore == 5) {
        document.getElementById("gameWinner").textContent = "restart game";
        document.querySelector('.computerImage').removeChild(computerImage)
        document.querySelector('.userImage').removeChild(userImage);
        document.getElementById("computerWin").textContent = "Computer has won the game!";
        document.getElementById("userWin").textContent = "Game over!";


    }

    

        let elems = document.getElementsByClassName("Example-btn1");
        for (var i = 0; i < elems.length; i++) {
            if (playerScore == 5 || computerScore == 5) {
                elems[i].disabled = true;
            } else {
        let elems = document.getElementsByClassName("Example-btn1");
        for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = false;
    }
}}


}

let btn = document.querySelectorAll('#btn');
btn.forEach(function (i) {
    i.addEventListener('click', function() {
        let playerSelection = i.getAttribute("data-key");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        gameScore(playerSelection, computerSelection);
        console.log(computerSelection);
    });
});




const resultsDiv = document.querySelector('#resultsDiv');
const score = document.querySelector('#score');

const result = document.createElement('div');

result.classList.add('content');

resultsDiv.insertBefore(result, score);


const userImage = document.createElement('img');

const computerImage =  document.createElement('img');

document.querySelector('.userImage').appendChild(userImage)


document.querySelector('.computerImage').appendChild(computerImage)

//userImage.style.width = "150px";
//userImage.style.height = "150px";

//computerImage.style.width = "150px";
//computerImage.style.height = "150px";


function restartGame() {
    location.reload()
}


/*   document.getElementById("btn").disabled = true this disables
the button. it might be a good idea adding this on once a player wins the game








*/