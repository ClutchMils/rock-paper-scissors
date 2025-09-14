// console.log("hello");

let humanScore = 0;
let computerScore = 0; 

function getComputerChoice(){
    
    const min = 1;
    const max = 3;
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomInteger;
}

//  console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors","c");

    return choice;
}


// console.log(getHumanChoice());