// console.log("hello");

function getComputerChoice(){
    // let choice = prompt("Enter Rock, Paper, or Scissors");
    const min = 1;
    const max = 3;
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomInteger;
}

//  console.log(getComputerChoice());