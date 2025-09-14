// console.log("hello");

let humanScore = 0;
let computerScore = 0; 

function getComputerChoice(){
    
    const min = 1;
    const max = 3;
    const computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;

    return computerChoice;
}

//  console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors","c");

    return humanChoice;
}

// console.log(getHumanChoice());

function playRound(humanChoice.toLowerCase(), computerChoice){
    
}