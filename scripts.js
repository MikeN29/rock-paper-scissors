

function getComputerChoice() {

    //randomly return rock, paper, scissor

    let x = Math.floor((Math.random() * 3) + 1); 

    //if math random returns 1 console log rock
    //else if 2 console log paper
    //else if 3 console log scissor

    if (x == 1) {
        console.log('rock')
    } else if (x == 2) {
        console.log('paper')
    } else if (x == 3) {
        console.log('scissors')
    }

}

getComputerChoice()


