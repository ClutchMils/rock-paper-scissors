// console.log("hello");

function getComputerChoice(){
    
    const min = 1;
    const max = 3;
    const computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;

    return computerChoice;
}

//  console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors","");

    return humanChoice;
}

// console.log(getHumanChoice());



// console.log(playRound(getHumanChoice(),getComputerChoice()));

function playGame (){
    let humanScore = 0;
    let computerScore = 0; 

    const rock = document.querySelector("#rock");
    const scissors = document.querySelector("#scissors");
    const paper = document.querySelector("paper");
   

    function playRound(humanChoice, computerChoice){
    let lowerCaseString = humanChoice.toLowerCase();
    
    switch(lowerCaseString){
        case "rock":
            if (computerChoice == 1){
                return "Draw! Rock is equal to Rock";
            }
            else if(computerChoice == 2){
                computerScore ++;
                return "You lose! Paper beats Rock";            
            }
            else {
                humanScore ++;
                return "You win! Rock beats Scissors";         
            }
        case "paper":
            if (computerChoice == 1){
                humanScore ++;
                return "You win! Paper beats rock";   
            }
            else if(computerChoice == 2){
                return "Draw! Paper equals paper";
            }
            else {
                computerScore ++;
                return "You lose! Scissors beats Paper";    
            }
        case "scissors":
            if (computerChoice == 1){
                computerScore ++;
                return "You lose! Rock beats Scissors";
            }
            else if(computerChoice == 2){
                humanScore ++;
                return "You win! Scissors beats Paper"; 
            }
            else {
                return ("Draw! Scissors equals Scissors");
            }
        default:
            return ("Enter rock, paper, scissors");
    }
}

// for ( let i = 0; i < 5; i++){
    console.log(playRound(getHumanChoice(), getComputerChoice())) ;
// }

if (humanScore > computerScore) {
    return "You win!";
}
else {
    return "You lose!"
}

}



console.log(playGame());